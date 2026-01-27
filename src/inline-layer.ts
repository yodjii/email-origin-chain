import EmailForwardParser from 'email-forward-parser';
import { normalizeParserResult, cleanText, normalizeDateToISO } from './utils';
import { ResultObject, HistoryEntry, EmailAddress } from './types';

/**
 * Process inline forwarded content recursively using email-forward-parser
 * with integrated manual fallback detection
 */
export async function processInline(text: string, depth: number, baseHistory: HistoryEntry[] = []): Promise<ResultObject> {
    const warnings: string[] = [];
    const parser = new EmailForwardParser();
    const history: HistoryEntry[] = [...baseHistory];

    let currentText = text.trim();
    const startingDepth = depth;
    let currentDepth = depth;
    const maxRecursiveDepth = 10;

    // Ensure we have at least one entry representing the "current" starting point
    if (history.length === 0) {
        history.push({
            from: null,
            subject: null,
            date_raw: null,
            date_iso: null,
            text: cleanText(currentText),
            depth: currentDepth,
            flags: ['level:root', 'trust:medium_inline']
        });
    }

    while (currentDepth < maxRecursiveDepth) {
        let foundForward = false;

        // 1. Try Manual Detection first to get its index
        const manual = tryManualForwardDetection(currentText, currentDepth);

        // 2. Try Crisp Parser
        let crisp: any = null;
        let crispIndex = -1;
        try {
            const cleanInput = currentText.replace(/^> ?/gm, '');
            const result = parser.read(cleanInput);
            if (result && result.forwarded && result.email) {
                crisp = result.email;
                // Find where Crisp detected the break
                // Use the same patterns as Crisp's internal separator detection for consistency
                const sepMatch = currentText.match(/^-{3,}.*?-{3,}/m)
                    || currentText.match(/^(?:From|De|Od|Von):\s*/im)
                    || currentText.match(/(?:^|\n)\s*(?:Envoyé|De|De :)\s*:/im);
                crispIndex = sepMatch && sepMatch.index !== undefined ? sepMatch.index : -1;
            }
        } catch (err) { }

        // 3. Compare and pick the EARLIEST separator
        if (manual && (crispIndex === -1 || manual.index < crispIndex)) {
            // Take Manual
            if (history.length > 0) {
                const currentLevelText = currentText.substring(0, manual.index);
                const lastIdx = history.length - 1;
                history[lastIdx].text = cleanText(currentLevelText);
                if (!history[lastIdx].text) {
                    history[lastIdx].flags.push('content:silent_forward');
                }
            }

            const tags = ['method:manual_fallback', 'trust:medium_inline'];
            if (!manual.body || manual.body.trim() === '') tags.push('content:silent_forward');
            if (manual.date_raw && !manual.date_iso) tags.push('date:unparseable');
            if (manual.format) tags.push(`format:${manual.format}`);

            history.push({
                from: manual.from,
                subject: manual.subject,
                date_raw: manual.date_raw,
                date_iso: manual.date_iso,
                text: cleanText(manual.body),
                depth: currentDepth + 1,
                flags: tags
            });
            currentText = manual.body.trim();
            foundForward = true;
        } else if (crisp) {
            // Take Crisp
            if (history.length > 0) {
                const exclusiveText = crispIndex !== -1 ? currentText.substring(0, crispIndex) : currentText;
                const lastIdx = history.length - 1;
                history[lastIdx].text = cleanText(exclusiveText);
                if (!history[lastIdx].text) {
                    history[lastIdx].flags.push('content:silent_forward');
                }
            }

            const tags = ['method:crisp_engine', 'trust:medium_inline'];
            if (!crisp.body || crisp.body.trim() === '') tags.push('content:silent_forward');

            history.push({
                from: crisp.from && typeof crisp.from === 'object' ? { name: (crisp.from as any).name, address: (crisp.from as any).address } : { address: crisp.from as string },
                subject: crisp.subject || null,
                date_raw: crisp.date || null,
                date_iso: normalizeDateToISO(crisp.date),
                text: cleanText(crisp.body),
                depth: currentDepth + 1,
                flags: tags
            });
            currentText = crisp.body.trim();
            foundForward = true;
        }

        if (!foundForward) break;
        currentDepth++;
    }

    if (currentDepth > startingDepth) {
        const deepestEntry = history[history.length - 1];
        deepestEntry.flags.push('level:deepest');

        return {
            from: deepestEntry.from,
            subject: deepestEntry.subject,
            date_raw: deepestEntry.date_raw,
            date_iso: deepestEntry.date_iso,
            text: cleanText(currentText),
            attachments: [],
            history: [...history].reverse(),
            diagnostics: {
                method: 'inline',
                depth: currentDepth,
                parsedOk: true,
                warnings
            }
        };
    }

    // Fallback: try mailparser
    try {
        const { simpleParser } = await import('mailparser');
        const parsed = await simpleParser(text);

        const from = parsed.from?.value?.[0] ? {
            name: parsed.from.value[0].name,
            address: parsed.from.value[0].address
        } : null;

        return {
            from,
            subject: parsed.subject || null,
            date_raw: parsed.date?.toString() || null,
            date_iso: parsed.date ? parsed.date.toISOString() : null,
            text: cleanText(parsed.text),
            attachments: [],
            history: [...history].reverse(),
            diagnostics: {
                method: 'fallback',
                depth: currentDepth,
                parsedOk: !!(from && parsed.subject),
                warnings
            }
        };
    } catch (err) {
        return manualHeaderFallback(text, currentDepth, [...warnings, `Fallbacks failed: ${(err as Error).message}`], history);
    }
}

function tryManualForwardDetection(text: string, depth: number): {
    from: EmailAddress | null;
    subject: string | null;
    date_raw: string | null;
    date_iso: string | null;
    body: string;
    index: number;
    format?: string;
} | null {
    // 1. Detect Separator (Greedy detection of headers start)
    // We look for common markers, including French variants with special spaces
    const sepPatterns = [
        // French: Envoyé: (with optional non-breaking space or standard space)
        { regex: /(?:^|\n)\s*(?:Envoyé|Envoy@\?)\s*(?::|┬á:| :)\s*/im, type: 'french' },
        // De: (common in some French exports)
        { regex: /(?:^|\n)\s*(?:De|From)\s*(?::|┬á:| :)\s*/im, type: 'standard' },
        // Standard dash separator
        { regex: /^-{3,}.+(?:Message|message|transféré).+-{3,}/im, type: 'standard' }
    ];

    let match = null;
    let sepType = '';

    for (const p of sepPatterns) {
        const m = text.match(p.regex);
        if (m && m.index !== undefined) {
            // Pick the first occurrence in the text
            if (!match || m.index < match.index!) {
                match = m;
                sepType = p.type;
            }
        }
    }

    if (!match || match.index === undefined) return null;

    // 2. Prepare Block
    const forwardBlock = text.substring(match.index).trim();

    // 3. Extract Headers from Forward Block
    const headerBlockLimit = 1000;
    const headerBlock = forwardBlock.substring(0, headerBlockLimit);

    let from: EmailAddress | null = null;
    let subject: string | null = null;
    let date_raw: string | null = null;

    // Parse headers (language agnostic)
    // De / From
    const fromMatch = headerBlock.match(/(?:^|\n)\s*(?:De|From|Od|Von)\s*[:┬á ]+(.+)/i);
    if (fromMatch) {
        const fromStr = fromMatch[1].trim();
        const emailMatch = fromStr.match(/<(.+?)>/);
        from = { address: (emailMatch ? emailMatch[1] : fromStr).replace(/[\[\]"]/g, '').trim() };
    }

    // Date / Envoyé / Datum
    const dateMatch = headerBlock.match(/(?:^|\n)\s*(?:Date|Envoyé|Datum)\s*[:┬á ]+(.+)/i);
    if (dateMatch) date_raw = dateMatch[1].trim();

    // Subject / Objet
    const subMatch = headerBlock.match(/(?:^|\n)\s*(?:Subject|Objet|Sujet|Betreff)\s*[:┬á ]+(.+)/i);
    if (subMatch) subject = subMatch[1].trim();

    // 4. Identify Body Start 
    // We try to find where the header block ends. 
    // Usually there's a subject or a date, and the body follows after some newlines.
    let bodyStartIndex = 0;

    // Heuristic: skip lines that look like headers
    const lines = forwardBlock.split('\n');
    let i = 0;
    while (i < lines.length && i < 10) {
        if (/^\s*(?:De|From|À|To|Date|Envoyé|Objet|Subject|Cc|Bcc)\s*[:┬á ]/i.test(lines[i])) {
            i++;
            continue;
        }
        if (lines[i].trim() === '' || /^-{3,}/.test(lines[i])) {
            i++;
            continue;
        }
        break; // Found body or unknown line
    }
    bodyStartIndex = lines.slice(0, i).join('\n').length;

    const body = forwardBlock.substring(bodyStartIndex).trim();

    // Validity Check
    if (!from && !date_raw && !subject) return null;

    return {
        from,
        subject,
        date_raw,
        date_iso: normalizeDateToISO(date_raw),
        body,
        index: match.index,
        format: sepType === 'french' ? 'outlook_fr' : 'standard'
    };
}

/**
 * Manual regex-based header extraction (last resort)
 */
function manualHeaderFallback(text: string, depth: number, warnings: string[], history: HistoryEntry[]): ResultObject {
    const fromMatch = text.match(/^(?:From|De|Od|Von)\s*:\s*(.+?)$/im);
    const subjectMatch = text.match(/^(?:Subject|Objet|Předmět|Sujet|Betreff)\s*:\s*(.+?)$/im);
    const dateMatch = text.match(/^(?:Date|Datum)\s*:\s*(.+?)$/im);

    const bodyMatch = text.match(/\n\n([\s\S]+)/);

    let from: EmailAddress | null = null;
    if (fromMatch && fromMatch[1].trim()) {
        const addr = fromMatch[1].trim();
        const emailOnly = addr.match(/<(.+?)>/);
        from = { address: (emailOnly ? emailOnly[1] : addr).replace(/[\[\]]/g, '').trim() };
    }

    const isParsed = !!(from && subjectMatch);

    return {
        from,
        subject: subjectMatch ? subjectMatch[1].trim() : null,
        date_raw: dateMatch ? dateMatch[1].trim() : null,
        date_iso: normalizeDateToISO(dateMatch ? dateMatch[1].trim() : null),
        text: bodyMatch ? bodyMatch[1].trim() : text,
        attachments: [],
        history: [...history].reverse(),
        diagnostics: {
            method: 'fallback',
            depth,
            parsedOk: isParsed,
            warnings: isParsed ? [...warnings, 'Manual regex fallback used'] : warnings
        }
    };
}
