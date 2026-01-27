import { extractDeepestHybrid } from '../src/index';

describe('Comprehensive Email Forwarding Tests', () => {
    test('simple email (depth 0)', async () => {
        const raw = `From: sender@example.com\nSubject: Simple\nDate: Mon, 26 Jan 2026 15:00:00 +0100\n\nThis is a simple body.`;
        const res = await extractDeepestHybrid(raw);
        expect(res.from?.address).toBe('sender@example.com');
        expect(res.diagnostics.depth).toBe(0);
        expect(res.text).toBe('This is a simple body.');
        // Now includes root email
        expect(res.history).toHaveLength(1);
        expect(res.history[0].from?.address).toBe('sender@example.com');
    });

    test('double inline forward with history', async () => {
        const raw = `From: bob@example.com
To: user@example.com
Subject: Fwd: Second level

This is the top level message.

---------- Forwarded message ---------
From: Alice <alice@example.com>
Date: Mon, Jan 26, 2026 at 3:00 PM
Subject: Fwd: Second level
To: <bob@example.com>

This is the second level message.

---------- Forwarded message ---------
From: Carol <carol@source.com>
Date: Mon, Jan 26, 2026 at 10:00 AM
Subject: Final message
To: <alice@example.com>

This is the final original message.`;

        const res = await extractDeepestHybrid(raw);

        // Deepest level content
        expect(res.from?.address).toBe('carol@source.com');
        expect(res.diagnostics.depth).toBeGreaterThanOrEqual(1);
        expect(res.text).toContain('This is the final original message.');

        // History verification - now includes Root, Intermediate, and Deepest
        expect(res.history.length).toBeGreaterThanOrEqual(3);

        // 0: Deepest (Carol)
        expect(res.history[0].from?.address).toBe('carol@source.com');
        // 1: Intermediate (Alice)
        expect(res.history[1].from?.address).toBe('alice@example.com');
        // 2: Root (Bob)
        expect(res.history[2].from?.address).toBe('bob@example.com');
    });

    test('French forward detection and normalization', async () => {
        // Using a simpler string for French to ensure detection
        const raw = `From: sender@email.com\n\n---------- Message transféré ---------\nDe : Expert <expert@entreprise.fr>\nDate : lun. 10 févr. 2025 à 11:39\nObjet : Dossier #123\n\nBonjour.`;

        const res = await extractDeepestHybrid(raw);
        expect(res.from?.address).toBe('expert@entreprise.fr');
        expect(res.date_iso).toBe('2025-02-10T10:39:00.000Z');
        expect(res.history.length).toBeGreaterThanOrEqual(2);
    });

    test('malformed/non-email string', async () => {
        const raw = "Welcome to our portal ! Non-email content here.";
        const res = await extractDeepestHybrid(raw);
        expect(res.from).toBeNull();
        expect(res.diagnostics.parsedOk).toBe(false);
        expect(res.text).toBe(raw);
    });
});
