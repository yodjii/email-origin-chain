import EmailForwardParser from 'email-forward-parser';
import { DetectorRegistry } from './detectors';
import { normalizeDateToISO, cleanText, normalizeFrom } from './utils';
import { ResultObject, HistoryEntry } from './types';

import { ForwardDetector } from './detectors/types';

/**
 * Process inline forwarded content recursively.
 * Uses a manual loop with DetectorRegistry to allow multiple strategies (lib, custom regexes, etc.)
 */
export async function processInline(
    text: string,
    depth: number,
    baseHistory: HistoryEntry[] = [],
    customDetectors: ForwardDetector[] = []
): Promise<ResultObject> {
    const warnings: string[] = [];
    const registry = new DetectorRegistry(customDetectors);
    const history: HistoryEntry[] = [...baseHistory];

    let currentText = text.trim();
    const startingDepth = depth;
    let currentDepth = depth;
    const maxRecursiveDepth = 15; // Increased for deep chains

    // Ensure we have at least one entry representing the "current" starting point
    if (history.length === 0) {
        history.push({
            from: null,
            subject: null,
            date_raw: null,
            date_iso: null,
            text: '',
            depth: currentDepth,
            flags: ['level:root', 'trust:medium_inline']
        });
    }

    // Detection loop: This allows combining the library (CrispDetector) 
    // with custom local detectors (OutlookFRDetector, etc.)
    while (currentDepth < maxRecursiveDepth) {
        const result = registry.detect(currentText);

        if (!result.found || !result.email) {
            // No more forwards detected
            const lastIdx = history.length - 1;
            history[lastIdx].text = cleanText(currentText);
            break;
        }

        const email = result.email;

        // Update previous level's exclusive text
        const previousIdx = history.length - 1;
        history[previousIdx].text = cleanText(result.message || '');
        if (!history[previousIdx].text && !history[previousIdx].flags.includes('content:silent_forward')) {
            history[previousIdx].flags.push('content:silent_forward');
        }

        // Build flags 
        const flags = [`method:${result.detector || 'unknown'}`, 'trust:medium_inline'];
        if (!email.body || email.body.trim() === '') {
            flags.push('content:silent_forward');
        }

        // Normalize date
        const dateIso = normalizeDateToISO(email.date);
        if (email.date && !dateIso) {
            warnings.push(`Could not normalize date: "${email.date}"`);
            flags.push('date:unparseable');
        }

        // Normalize from address (fix patterns like "email [email]")
        let fromNormalized: import('./types').EmailAddress | null = typeof email.from === 'object'
            ? { name: email.from.name, address: email.from.address }
            : (email.from ? { address: email.from } : null);

        fromNormalized = normalizeFrom(fromNormalized);

        // Add this forward level to history
        history.push({
            from: fromNormalized,
            subject: email.subject || null,
            date_raw: email.date || null,
            date_iso: dateIso,
            text: cleanText(email.body || ''),
            depth: currentDepth + 1,
            flags: flags
        });

        // Continue with the body for next iteration
        currentText = (email.body || '').trim();
        currentDepth++;
    }

    // Mark the deepest entry
    if (currentDepth > startingDepth) {
        const deepestEntry = history[history.length - 1];
        if (!deepestEntry.flags.includes('level:deepest')) {
            deepestEntry.flags.push('level:deepest');
        }

        return {
            from: deepestEntry.from,
            subject: deepestEntry.subject,
            date_raw: deepestEntry.date_raw,
            date_iso: deepestEntry.date_iso,
            text: deepestEntry.text,
            attachments: [],
            history: history.slice().reverse(),
            diagnostics: {
                method: (deepestEntry.flags.find(f => f.startsWith('method:')) || 'inline') as any,
                depth: currentDepth - startingDepth,
                parsedOk: true,
                warnings: warnings
            }
        };
    }

    // No forwards found
    const currentEntry = history[history.length - 1];
    return {
        from: currentEntry.from,
        subject: currentEntry.subject,
        date_raw: currentEntry.date_raw,
        date_iso: currentEntry.date_iso,
        text: currentEntry.text || cleanText(currentText),
        attachments: [],
        history: history.slice().reverse(),
        diagnostics: {
            method: 'fallback',
            depth: 0,
            parsedOk: false,
            warnings: warnings.length > 0 ? warnings : ['No forwarded content detected']
        }
    };
}
