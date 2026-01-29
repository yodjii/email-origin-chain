
/**
 * Confidence Score Calculation Logic
 * Evaluates the coherence between detected forward depth and email address density.
 */

export interface ConfidenceResult {
    score: number; // 0 to 100
    description: string; // Human readable explanation
}

export function calculateConfidence(fullBody: string, depth: number): ConfidenceResult {
    // 0. Base case: No depth detected implies no confidence metric applicable (N/A)
    // We return a neutral high score because there is no mismatch to detect.
    if (depth === 0) {
        return { score: 100, description: "N/A (No depth detected)" };
    }

    // 1. Count emails strictly between angle brackets <...>
    // This reduces noise from signatures, login ids, etc.
    const emailRegex = /<[^>\s]+@[^>\s]+>/g;
    let match;
    const emails: { addr: string, index: number }[] = [];

    // We use a loop to track indices for context checking
    while ((match = emailRegex.exec(fullBody)) !== null) {
        emails.push({ addr: match[0], index: match.index });
    }

    const count = emails.length;
    const ratio = count / depth;

    // 2. Base Rules (Small numbers)

    // CASE: Ghost Forward (Depth detected but 0 emails found)
    if (count === 0) {
        return { score: 0, description: "Low Confidence (Ghost Forward: 0 emails found)" };
    }

    // CASE: Partial (Ratio ~1.0)
    // Likely only Sender found per level. Valid but incomplete.
    if (ratio >= 0.5 && ratio <= 1.5) {
        return { score: 50, description: "Medium Confidence (Partial: ~1 email per level)" };
    }

    // CASE: Standard (Ratio ~2.0)
    // The gold standard: 1 Sender + 1 Recipient per level.
    if (ratio > 1.5 && ratio <= 2.4) {
        return { score: 100, description: "High Confidence (Standard: ~2 emails per level)" };
    }

    // 3. High Density Check (Ratio > 2.4)
    if (ratio > 2.4) {
        // We need to distinguish between "Rich Headers" (Good) and "Missed Separators" (Bad)
        // Heuristic: Check if emails are physically located near Header Keywords.

        let explainedCount = 0;
        // Look back 150 chars for context
        const contextWindow = 150;
        // Keywords: To, Cc, From, De, A, Para, Copies (case insensitive)
        const headerPattern = /(?:From|De|To|À|A|Para|Cc|Copie|Copies|Appreciated|Reply-To|Répondre à)\s*:/i;

        for (const email of emails) {
            // Extract the text chunk preceding the email
            const start = Math.max(0, email.index - contextWindow);
            const preText = fullBody.substring(start, email.index);

            // Get the "logical block" (lines near the email)
            // We split by double newline to isolate the paragraph/block
            const blocks = preText.split(/\n\s*\n/);
            const currentBlock = blocks[blocks.length - 1]; // The closest text block

            if (headerPattern.test(currentBlock)) {
                explainedCount++;
            }
        }

        const explainedRatio = count > 0 ? explainedCount / count : 0;
        const threshold = 0.6; // 60% of emails must be explained by headers

        if (explainedRatio >= threshold) {
            return { score: 100, description: "High Confidence (High Density Header Chain)" };
        } else {
            return { score: 25, description: "Low Confidence (Suspect: High density without headers)" };
        }
    }

    // Fallback for weird intermediate ratios (e.g. 0.3)
    return { score: 0, description: "Low Confidence (Inconsistent)" };
}
