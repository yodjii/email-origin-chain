import { ForwardDetector, DetectionResult } from './types';

/**
 * Detector for Outlook forwards (French) where "Envoyé:" comes BEFORE "De:".
 * Example:
 * ________________________________
 * Envoyé: mardi 27 janvier 2026 à 00:30
 * De: "Flo M." <florian.mezy@gmail.com>
 * À: "Flo!" <yodjii@mail.com>
 * Objet: Fwd: ...
 */
export class OutlookReverseFrDetector implements ForwardDetector {
    readonly name = 'outlook_reverse_fr';
    readonly priority = -2; // Specific detector - High Priority

    // Regex to capture the block:
    // 1. Optional Separator
    // 2. Envoyé: ... (Date)
    // 3. De: ... (From)
    // 4. À: ... (To)
    // 5. Objet: ... (Subject)
    // 6. Body
    // Using lazy match [\s\S]*? for content before.
    // Simplified Regex: Only require Envoy and De. Captures everything else in the last group.
    private readonly SPLIT_PATTERN = /([\s\S]*?)(?:_{30,}\s*)?(?:^|\r?\n)Envoy.*?:\s*(.*)\r?\nDe\s*:\s*([^\r\n]+)([\s\S]*)$/i;

    detect(text: string): DetectionResult {
        const match = this.SPLIT_PATTERN.exec(text);

        if (match) {
            const message = match[1].trim();
            const dateLine = match[2].trim();
            const fromLine = match[3].trim();

            // match[4] contains "To: ... \n Objet: ... \n\n Body"
            // We try to extract Subject and Body from it.
            const rest = match[4];
            let subjectLine = '';
            let body = rest;

            // Simple regex to find "Objet: ..." line
            const subjectMatch = rest.match(/[\r\n]Objet\s*:\s*([^\r\n]+)[\r\n]/i);
            if (subjectMatch) {
                subjectLine = subjectMatch[1].trim();
                const subjectIdx = rest.indexOf(subjectMatch[0]);
                const subjectEndIdx = subjectIdx + subjectMatch[0].length;

                // We assume body starts immediately after subject line.
                // Any extra newlines (e.g. \n\n) will be removed by trim().
                // Searching for \n\n is unsafe because if the separator is single \n, 
                // we might skip the entire first paragraph of the body.
                body = rest.substring(subjectEndIdx).trim();
            }

            if (fromLine.length > 0) {
                return {
                    found: true,
                    detector: this.name,
                    confidence: 'high',
                    message: message,
                    email: {
                        from: fromLine,
                        subject: subjectLine,
                        date: dateLine,
                        body: body
                    }
                };
            }
        }


        return {
            found: false,
            confidence: 'low'
        };
    }
}
