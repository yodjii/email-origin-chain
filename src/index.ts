import { processMime } from './mime-layer';
import { processInline } from './inline-layer';
import { Options, ResultObject, Attachment } from './types';
import { normalizeDateToISO, cleanText } from './utils';

/**
 * Main entry point: Extract the deepest forwarded email using hybrid strategy
 */
export async function extractDeepestHybrid(
    raw: string,
    options: Options = {}
): Promise<ResultObject> {
    // Validation
    if (typeof raw !== 'string') {
        throw new Error('Input must be a string');
    }

    const opts: Required<Options> = {
        maxDepth: options.maxDepth ?? 5,
        timeoutMs: options.timeoutMs ?? 5000
    };

    const warnings: string[] = [];

    try {
        // Step 1: MIME Layer - Descend through message/rfc822 attachments
        let timer: NodeJS.Timeout | undefined;
        const mimeResult = await Promise.race([
            processMime(raw, opts),
            new Promise<never>((_, reject) => {
                timer = setTimeout(() => reject(new Error('MIME parsing timeout')), opts.timeoutMs);
            })
        ]).finally(() => {
            if (timer) clearTimeout(timer);
        });

        // Step 2: Inline Layer - Parse the deepest body for inline forwards
        // Now passing history from previous layer
        const inlineResult = await processInline(mimeResult.rawBody, mimeResult.depth, mimeResult.history);

        // Step 3: Align results - if inlineResult is a fallback, 
        // prefer the structured metadata from the MIME layer if available.
        let from = inlineResult.from;
        let subject = inlineResult.subject;
        let date_raw = inlineResult.date_raw;
        let date_iso = inlineResult.date_iso;
        let text = inlineResult.text;

        if (inlineResult.diagnostics.method === 'fallback' && mimeResult.metadata) {
            const m = mimeResult.metadata;
            if (!from && m.from?.value?.[0]) {
                from = { name: m.from.value[0].name, address: m.from.value[0].address };
            }
            if (!subject && m.subject) subject = m.subject;
            if (!date_iso && m.date) date_iso = m.date.toISOString();
            if (!date_raw && m.date) date_raw = m.date.toString();
            if (!text) text = mimeResult.rawBody; // Keep body from MIME if inline found nothing
        }

        // Align the root entry of history if it was missing 'from' info (often the case for root)
        if (inlineResult.history.length > 0) {
            const rootInHistory = inlineResult.history[inlineResult.history.length - 1];
            if (!rootInHistory.from && mimeResult.metadata) {
                const m = mimeResult.metadata;
                if (m.from?.value?.[0]) {
                    rootInHistory.from = { name: m.from.value[0].name, address: m.from.value[0].address };
                }
                if (m.subject) rootInHistory.subject = m.subject;
            }
        }

        // Step 4: Final enrichment
        const attachments: Attachment[] = mimeResult.lastAttachments.map(att => ({
            filename: att.filename,
            contentType: att.contentType || 'application/octet-stream',
            size: att.size || 0
        }));

        // Normalize date if not already done
        date_iso = date_iso || normalizeDateToISO(date_raw);

        if (!date_iso && date_raw) {
            inlineResult.diagnostics.warnings.push(`Could not normalize date: "${date_raw}"`);
        }

        return {
            ...inlineResult,
            from,
            subject,
            date_raw,
            date_iso,
            text: cleanText(text),
            attachments: [...attachments, ...inlineResult.attachments],
            diagnostics: {
                ...inlineResult.diagnostics,
                // method: stays 'inline' if it found something, else 'rfc822' if MIME was successful
                method: inlineResult.diagnostics.method === 'fallback' && mimeResult.isRfc822 ? 'rfc822' : inlineResult.diagnostics.method,
                warnings: [...warnings, ...inlineResult.diagnostics.warnings]
            }
        };

    } catch (error) {
        // Return a safe fallback result
        return {
            from: null,
            subject: null,
            date_raw: null,
            date_iso: null,
            text: cleanText(raw),
            attachments: [],
            history: [],
            diagnostics: {
                method: 'fallback',
                depth: 0,
                parsedOk: false,
                warnings: [`Fatal error: ${(error as Error).message}`]
            }
        };
    }
}

// Export types for consumers
export * from './types';
