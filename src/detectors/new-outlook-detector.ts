import { ForwardDetector, DetectionResult } from './types';

/**
 * Detector for "Plain Header" format (common in New Outlook, Outlook 2013, Mobile clients)
 * Pattern: Localized headers like From/De/Von, To/À/An, Date/Sent/Envoyé
 * Priority: 10
 */
export class NewOutlookDetector implements ForwardDetector {
    readonly name = 'new_outlook';
    readonly priority = 1; // Specific detector - High Priority (after Crisp fallback)

    detect(text: string): DetectionResult {
        // Define multi-lingual header maps
        const labels = {
            from: ['From', 'De', 'Von', 'Da', 'Od', 'Fra', 'Kimden', 'Van', 'Från', 'De ', 'Lähettäjä', 'Feladó', 'От'],
            date: ['Date', 'Sent', 'Envoyé', 'Gesendet', 'Inviato', 'Enviado', 'Data', 'Sendt', 'Lähetetty', 'Skickat', 'Datum', 'Dátum', 'Päivämäärä', 'Tarih', 'Дата'],
            subject: ['Subject', 'Objet', 'Betreff', 'Oggetto', 'Assunto', 'Asunto', 'Emne', 'Aihe', 'Ämne', 'Předmět', 'Predmet', 'Tárgy', 'Temat', 'Тема', 'Konu', 'Onderwerp'],
            to: ['To', 'À', 'A', 'An', 'Para', 'Til', 'Vastaanottaja', 'Till', 'Pro', 'Za', 'Címzett', 'Do', 'Кому', 'Kime', 'Aan']
        };

        const lines = text.split(/\r?\n/).map(l => l.trimRight()); // Keep indentation for now, just trim right

        // Helper to find a header in a set of lines
        const findHeader = (searchLines: string[], keys: string[]) => {
            for (let i = 0; i < searchLines.length; i++) {
                const line = searchLines[i];
                for (const key of keys) {
                    // Match key with potential bolding markers (* or _) around it
                    const regex = new RegExp(`^\\s*[\\*_]*${key}[\\*_]*\\s*:`, 'i');
                    if (line.match(regex)) {
                        const colonIndex = line.indexOf(':');
                        return { index: i, line, key, value: line.substring(colonIndex + 1).trim() };
                    }
                }
            }
            return null;
        };

        // 1. Find the "From" line first (anchor)
        const from = findHeader(lines, labels.from);
        if (!from) {
            return { found: false, confidence: 'low' };
        }

        // 2. Look for Subject/Date/To within a small window after From
        const fromIndex = from.index;
        const searchWindow = lines.slice(fromIndex, fromIndex + 10);

        const subject = findHeader(searchWindow, labels.subject);

        // Subject is required to confirm it's a forward block (usually)
        if (!subject) {
            // Strict check: if no subject and "From" is just a random line, reject
            return { found: false, confidence: 'low' };
        }

        const date = findHeader(searchWindow, labels.date);
        const to = findHeader(searchWindow, labels.to);

        // 3. Extract email data
        // For from.value, we'll return the raw string and let normalizeFrom handle the heavy lifting
        // However, we still want to separate name/address here if possible
        const fromValue = from.value;
        const emailMatch = fromValue.match(/[<\[](?:mailto:)?(.*?)[>\]]/i);
        const address = emailMatch ? emailMatch[1].trim() : (fromValue.includes('@') ? fromValue : '');
        const name = fromValue.replace(/[<\[].*?[>\]]/g, '').trim() || address;

        // 4. Determine block boundaries
        // Relative indices in searchWindow need to be converted to absolute
        const subjectIndex = fromIndex + subject.index;
        const dateIndex = date ? fromIndex + date.index : -1;
        const toIndex = to ? fromIndex + to.index : -1;

        const blockEndIndex = Math.max(fromIndex, subjectIndex, dateIndex, toIndex);

        // Body starts after the last header
        const body = lines.slice(blockEndIndex + 1).join('\n').trim();

        // 5. Determine message (preceding text)
        // We probably want to strip the "---------- Forwarded message ---------" separator if it exists just before
        let messageEndIndex = fromIndex;
        if (messageEndIndex > 0) {
            // Search backwards for a separator line
            // Check previous 5 lines
            for (let i = 1; i <= 5; i++) {
                if (messageEndIndex - i < 0) break;
                const prevLine = lines[messageEndIndex - i].trim();
                // Separator (English/French/Dash-lines)
                if (prevLine.match(/^-{2,}.*-{2,}$/) || prevLine.match(/^_{3,}$/)) {
                    messageEndIndex = messageEndIndex - i;
                    break;
                }
                if (prevLine === '') continue; // Skip empty lines
                // If we hit text, stop searching
                break;
            }
        }

        const message = messageEndIndex > 0 ? lines.slice(0, messageEndIndex).join('\n').trim() : undefined;

        return {
            found: true,
            email: {
                from: address ? { name: name.replace(/["']/g, ''), address: address } : name,
                subject: subject.value,
                date: date ? date.value : undefined,
                body: body
            },
            message: message,
            confidence: 'medium'
        };
    }
}
