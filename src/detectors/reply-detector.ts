import { ForwardDetector, DetectionResult } from './types';

/**
 * Reply detector - matches "On [date], [user] wrote:" and its localized variations
 * These are common in reply headers (Apple Mail, Outlook, etc.)
 * Priority: 15 (lower than Crisp, same as NewOutlook)
 */
export class ReplyDetector implements ForwardDetector {
    readonly name = 'reply';
    readonly priority = 15;

    // Localized patterns based on email-forward-parser's separator_with_information
    // We use named groups for easier extraction
    private patterns = [
        /^\s*>?\s*Dne\s+(?<date>.+)\,\s+(?<from_name>.+)\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+napsal\(a\)\s*:/mi,              // cs
        /^\s*>?\s*D.\s+(?<date>.+)\s+skrev\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]? ?: ?/mi,                 // da
        /^\s*>?\s*Am\s+(?<date>.+)\s+schrieb\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]? ?: ?/mi,                 // de
        /^\s*>?\s*On\s+(?<date>.+)\,\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+wrote ?: ?/mi,               // en (variant 1)
        /^\s*>?\s*On\s+(?<date>.+)\s+at\s+(?<time>.+)\,\s+(?<from_name>.+)\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+wrote ?: ?/mi, // en (variant 2)
        /^\s*>?\s*On\s+(?<date>.+)\,\s+(?<from_name>.+)\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+wrote ?: ?/mi,                // en (variant 3)
        /^\s*>?\s*On\s+(?<date>.+)\s+(?<from_name>.+)\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+wrote ?: ?/mi,                  // en (variant 4 - no comma)
        /^\s*>?\s*El\s+(?<date>.+)\,\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+escribió ?: ?/mi,            // es
        /^\s*>?\s*Le\s+(?<date>.+)\,\s+[«"]?(?<from_name>.+)[»"]?\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+a écrit ?: ?/mi,     // fr
        /^\s*>?\s*(?<from_name>.+)\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+kirjoitti\s+(?<date>.+) ?: ?/mi,                    // fi
        /^\s*>?\s*(?<date>.+)\s+időpontban\s+(?<from_name>.+)\s*[\[|<|(]?(?<from_address>.+)?[\]|>|)]?\s+ezt írta ?: ?/mi,     // hu
        /^\s*>?\s*Il giorno\s+(?<date>.+)\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+ha scritto ?: ?/mi,      // it
        /^\s*>?\s*Op\s+(?<date>.+)\s+heeft\s+(?<from_name>.+)\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+geschreven ?: ?/mi,       // nl
        /^\s*>?\s*(?<from_name>.+)\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+skrev følgende den\s+(?<date>.+) ?: ?/mi,           // no
        /^\s*>?\s*Dnia\s+(?<date>.+)\s+[„"]?(?<from_name>.+)[”"]?\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+napisał ?: ?/mi,        // pl
        /^\s*>?\s*Em\s+(?<date>.+)\,\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+escreveu ?: ?/mi,            // pt
        /^\s*>?\s*(?<date>.+)\s+пользователь\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+написал ?: ?/mi,      // ru
        /^\s*>?\s*(?<date>.+)\s+používateľ\s+(?<from_name>.+)\s*\([\[|<]?(?<from_address>.+)?[\]|>]\)?\s+napísal ?: ?/mi,      // sk
        /^\s*>?\s*Den\s+(?<date>.+)\s+skrev\s+"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]?\s+följande ?: ?/mi,      // sv
        /^\s*>?\s*"(?<from_name>.+)"\s*[\[|<]?(?<from_address>.+)?[\]|>]?\,\s+(?<date>.+)\s+tarihinde şunu yazdı ?: ?/mi     // tr
    ];

    detect(text: string): DetectionResult {
        // Remove BOM if present
        const cleanText = text.replace(/\uFEFF/g, '');
        const lines = cleanText.split(/\r?\n/);

        // Search in the first 30 lines
        for (let i = 0; i < Math.min(lines.length, 30); i++) {
            const line = lines[i].trim();
            if (!line) continue;

            // Also try joining with the next line to handle cases where "wrote:" is on a new line (Gmail)
            const nextLine = (i + 1 < lines.length) ? lines[i + 1].trim() : '';
            const combinedLine = `${line} ${nextLine}`.trim();

            for (const pattern of this.patterns) {
                // Try single line first
                let match = line.match(pattern);
                let isMultiLine = false;

                if (!match) {
                    match = combinedLine.match(pattern);
                    isMultiLine = !!match;
                }

                if (match && match.groups) {
                    const { from_name, from_address, date, time } = match.groups;

                    const fullDate = time ? `${date} ${time}` : date;
                    const bodyStart = isMultiLine ? i + 2 : i + 1;

                    return {
                        found: true,
                        email: {
                            from: {
                                name: from_name?.trim() || '',
                                address: from_address?.trim() || ''
                            },
                            date: fullDate?.trim(),
                            body: lines.slice(bodyStart).join('\n').trim()
                        },
                        message: i > 0 ? lines.slice(0, i).join('\n').trim() : undefined,
                        confidence: 'medium'
                    };
                }
            }
        }

        return { found: false, confidence: 'low' };
    }
}
