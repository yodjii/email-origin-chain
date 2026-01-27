import { extractDeepestHybrid } from '../src/index';

describe('Advanced Integration Tests', () => {
    test('hybrid recursive forward (MIME + Inline) with full history tracking', async () => {
        // 1. Root email (Depth 0)
        // 2. Contains message/rfc822 attachment (Depth 1)
        // 3. Inside that attachment, an inline forward (Depth 2)

        const inlineForwardText = `From: original@source.com
Subject: Final Topic
Date: Mon, 26 Jan 2026 10:00:00 +0000

The very first message content.`;

        const rfc822Body = `From: forwarding-person@company.com
Subject: Fwd: Final Topic
Date: Mon, 26 Jan 2026 12:00:00 +0000

Check this out:

---------- Forwarded message ---------
${inlineForwardText}`;

        const rootEmail = `From: root@outer.com
Subject: Important attachment
Date: Mon, 26 Jan 2026 14:00:00 +0000
Content-Type: multipart/mixed; boundary="sep"

--sep
Content-Type: text/plain

I found the original thread.

--sep
Content-Type: message/rfc822
Content-Disposition: attachment; filename="thread.eml"

${rfc822Body}
--sep--`;

        const result = await extractDeepestHybrid(rootEmail);

        // deepest sender check
        expect(result.from?.address).toBe('original@source.com');
        expect(result.diagnostics.depth).toBeGreaterThanOrEqual(2);
        expect(result.text).toContain('The very first message content.');

        // History tracking check
        // In chronological reverse: history[0] is the deepest
        expect(result.history.length).toBeGreaterThanOrEqual(3);

        expect(result.history[0].from?.address).toBe('original@source.com');
        expect(result.history[0].text).toContain('The very first message content.');

        const intermediateEntry = result.history.find(h => h.from?.address === 'forwarding-person@company.com');
        if (intermediateEntry) {
            expect(intermediateEntry.text).toContain('Check this out:');
            expect(intermediateEntry.text).not.toContain('The very first message content.');
        }

        const rootEntry = result.history.find(h => h.from?.address === 'root@outer.com');
        if (rootEntry) {
            expect(rootEntry.text).toContain('I found the original thread.');
        }
    });
});
