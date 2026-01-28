import { ForwardDetector, DetectionResult } from './types';

/**
 * Detector for Outlook forwards where the "Envoyé:" (Sent) header is present but empty.
 * Example of failing block:
 * ________________________________
 * De: Florian M.
 * Envoyé:
 * À: Flo M.
 * Objet: RE: ...
 */
export class OutlookEmptyHeaderDetector implements ForwardDetector {
    readonly name = 'outlook_empty_header';
    readonly priority = 5; // Fallback for corrupted headers

    // Regex to capture the block:
    // 1. Optional Separator (mostly underscores) - robust against newlines
    // 2. De: ... (From) - Capture Name/Email
    // 3. Envoyé: ... (Date) - Allow to be empty AND handle simple QP encoding
    // 4. À: ... (To) - Handle QP
    // 5. Objet: ... (Subject)
    // 6. Body
    private readonly PATTERN = /^(?:_{30,}[ \t]*[\r\n]+)?De\s*:[ \t]*([^\r\n]+)\r?\nEnvoy(?:[é|e]|=[E|e]9)(?:[ \t]*:[ \t]*|\s*=\s*E9\s*:[ \t]*)(.*)\r?\n(?:[ÀA]|\=[C|c]0)\s*:[ \t]*([^\r\n]+)\r?\nObjet\s*:[ \t]*([^\r\n]+)\r?\n\r?\n([\s\S]*)$/im;

    // Alternative pattern for when the block is not at the start
    // We replace \s* with [ \t]* to avoid consuming newlines greedily
    private readonly SPLIT_PATTERN = /([\s\S]*?)(?:[\r\n]+_{30,}[ \t]*)?[\r\n]+De\s*:[ \t]*([^\r\n]+)\r?\nEnvoy(?:[é|e]|=[E|e]9)(?:[ \t]*:[ \t]*|\s*=\s*E9\s*:[ \t]*)(.*)\r?\n(?:[ÀA]|\=[C|c]0)\s*:[ \t]*([^\r\n]+)\r?\nObjet\s*:[ \t]*([^\r\n]+)\r?\n\r?\n([\s\S]*)$/i;

    detect(text: string): DetectionResult {
        // We use the SPLIT_PATTERN to find the first occurrence of this block
        const match = this.SPLIT_PATTERN.exec(text);

        if (match) {
            const message = match[1].trim();
            const fromLine = match[2].trim();
            const dateLine = match[3].trim(); // Might be empty!
            const toLine = match[4].trim();
            const subjectLine = match[5].trim();
            const body = match[6].trim();

            // Basic validation: From line should look like a sender
            if (fromLine.length > 0) {
                console.log('OutlookEmptyHeaderDetector: Found match.');
                console.log('OutlookEmptyHeaderDetector: Body start:', body.substring(0, 100).replace(/\n/g, '\\n'));
                return {
                    found: true,
                    detector: this.name,
                    confidence: 'high',
                    message: message,
                    email: {
                        from: fromLine,
                        subject: subjectLine,
                        date: dateLine || undefined, // undefined if empty string
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
