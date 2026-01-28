import { ForwardDetector, DetectionResult } from './types';

/**
 * Detector for French Outlook format (and variations)
 * Handles "De: / Envoyé: / À: / Objet:" in any order
 * Priority: 10 (Fallback)
 */
export class OutlookFRDetector implements ForwardDetector {
    readonly name = 'outlook_fr';
    readonly priority = 2; // Specific detector - High Priority (after NewOutlook)

    detect(text: string): DetectionResult {
        // Safe patterns: must be start of line
        const dePattern = /^[ \t\u00A0]*De\s*:\s*(.+?)(?:\s*[<\[](.+?)[>\]])?\s*$/m;
        const objetPattern = /^[ \t\u00A0]*Objet\s*:\s*(.+?)\s*$/m;
        const envoyePattern = /^[ \t\u00A0]*Envoy(?:é|=E9|e)?\s*:\s*(.*?)\s*$/m;
        // Also support encoded 'A' just in case
        const aPattern = /^[ \t\u00A0]*(?:À|A|=C0)\s*:\s*(.+?)\s*$/m;

        const deMatch = text.match(dePattern);
        const objetMatch = text.match(objetPattern);

        if (!deMatch || !objetMatch) {
            return { found: false, confidence: 'low' };
        }

        const deIdx = text.indexOf(deMatch[0]);
        const objetIdx = text.indexOf(objetMatch[0]);

        if (Math.abs(deIdx - objetIdx) > 500) {
            return { found: false, confidence: 'low' };
        }

        const envoyeMatch = text.match(envoyePattern);
        const datePattern = /^[ \t\u00A0]*Date\s*:\s*(.*?)\s*$/m;
        const dateMatch = text.match(datePattern);
        const aMatch = text.match(aPattern);

        const fields = [deMatch, objetMatch];
        if (envoyeMatch) fields.push(envoyeMatch);
        if (dateMatch) fields.push(dateMatch);
        if (aMatch) fields.push(aMatch);

        const indices = fields.map(m => text.indexOf(m[0]));
        const blockStart = Math.min(...indices);

        const lastFieldIdx = Math.max(...indices);
        const lineEndMatch = text.substring(lastFieldIdx).match(/[\r\n]/);
        const blockEndFinal = lineEndMatch ? lastFieldIdx + lineEndMatch.index! + 1 : text.length;

        const dateRaw = envoyeMatch ? envoyeMatch[1].trim() : (dateMatch ? dateMatch[1].trim() : undefined);
        const fromName = deMatch[1].trim().replace(/["']/g, '');
        const fromEmail = deMatch[2] ? deMatch[2].trim() : (fromName.includes('@') ? fromName : '');

        let messageEnd = blockStart;
        if (messageEnd > 0) {
            // Look backwards for a separator line
            const precedingText = text.substring(0, messageEnd);
            const separatorRegex = /(?:^|\n)[ \t]*[-_]{2,}.*?[-_]{2,}[ \t]*(?=\r?\n|$)|(?:^|\n)[ \t]*_{3,}[ \t]*(?=\r?\n|$)/g;

            // Find the last separator match that is close to the block start
            let match;
            let lastSeparator = null;
            while ((match = separatorRegex.exec(precedingText)) !== null) {
                lastSeparator = match;
            }

            if (lastSeparator) {
                // If the separator is the last thing before the block (ignoring whitespace)
                const afterSeparator = precedingText.substring(lastSeparator.index + lastSeparator[0].length);
                if (!afterSeparator.trim()) {
                    messageEnd = lastSeparator.index;
                }
            }
        }

        return {
            found: true,
            email: {
                from: fromEmail.includes('@')
                    ? { name: fromName !== fromEmail ? fromName : '', address: fromEmail }
                    : { name: fromName, address: fromName },
                subject: objetMatch[1].trim(),
                date: dateRaw,
                body: text.substring(blockEndFinal).trim()
            },
            message: messageEnd > 0 ? text.substring(0, messageEnd).trim() : undefined,
            confidence: 'high'
        };
    }
}
