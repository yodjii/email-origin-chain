import * as fs from 'fs';
import * as path from 'path';
import { extractDeepestHybrid } from '../src/index';

describe('EML Fixture Tests', () => {
    test('process complex-forward-anonymized.eml (3 levels deep)', async () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'complex-forward-anonymized.eml');
        const content = fs.readFileSync(fixturePath, 'utf8');

        const result = await extractDeepestHybrid(content);

        // 1. Verify diagnostics
        expect(result.diagnostics.parsedOk).toBe(true);
        expect(result.diagnostics.depth).toBeGreaterThanOrEqual(2);

        // 2. Verify Deepest message (Root of original intention)
        // Using a regex to be insensitive to special spaces (like non-breaking spaces)
        console.log('DEBUG_FROM:', JSON.stringify(result.from, null, 2));
        expect(result.text).toMatch(/Hello\.\s+tu\s+me\s+foward\s+ca\s+en\s+retour/i);
        expect(result.from?.address).toBe('florian.m@anonymized.com');

        // 3. Verify history integrity (Full History mode)
        // Root (0) -> Inter 1 (1) -> Inter 2 (2) -> Inter 3 (3) -> Deepest (4)
        // We now detect 5 levels correctly (Root + 4 forwards)
        expect(result.history.length).toBe(5);

        // Deepest (Index 0)
        expect(result.history[0].text).toMatch(/Hello\.\s+tu\s+me\s+foward\s+ca/i);
        expect(result.history[0].from?.address).toBe('florian.m@anonymized.com');

        // Intermediate 1 (Index 1) - Yodjio: Ok c'est note...
        expect(result.history[1].text).toMatch(/Ok\s+c['\s=]+est\s+not/i);
        expect(result.history[1].from?.address).toBe('yodjj@anonymized.com');

        // Intermediate 2 (Index 2) - Genial Yodjii...
        expect(result.history[2].text).toMatch(/Genial\s+Flo\s+Yodj/i);
        // Sender is "Flo Beta" <florian.m@anonymized.com>
        const sender2 = result.history[2].from;
        // Check address or name
        if (sender2?.address) {
            expect(sender2.address).toBe('florian.m@anonymized.com');
        } else {
            expect(sender2?.name).toMatch(/Flo\s+Beta/i);
        }

        // Intermediate 3 (Index 3) - Mais cest bien normal
        // This level was previously skipped!
        expect(result.history[3].text).toMatch(/Mais\s+cest\s+bien\s+normal/i);
        // This comes from "De: Flo Alpha" block with empty date
        expect(result.history[3].from?.name || result.history[3].from?.address || '').toMatch(/Flo\s+Alpha/i);

        // Initial Root Forward (Index 4)
        const root = result.history[4];
        expect(root.text).toMatch(/Dernier\s+message\s+du\s+moment/i);
        // From: Flo Beta <flo.b@anonymized.com>
        expect(root.from?.address).toBe('flo.b@anonymized.com');
    });

    test('process extreme-forward-anonymized.eml (5 levels deep)', async () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'extreme-forward-anonymized.eml');
        const content = fs.readFileSync(fixturePath, 'utf8');

        const result = await extractDeepestHybrid(content);

        expect(result.diagnostics.parsedOk).toBe(true);
        expect(result.diagnostics.depth).toBe(4); // 5 messages
        expect(result.history.length).toBe(5);

        // Deepest (Index 0)
        expect(result.history[0].text).toMatch(/Hello\.\s+tu\s+me\s+foward\s+ca/i);
        // Root (Index 4)
        expect(result.history[4].text).toMatch(/Dernier\s+message\s+du\s+moment/i);
    });

    test('process empty-body-forward-anonymized.eml (empty root message)', async () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'empty-body-forward-anonymized.eml');
        const content = fs.readFileSync(fixturePath, 'utf8');

        const result = await extractDeepestHybrid(content);

        expect(result.diagnostics.parsedOk).toBe(true);
        expect(result.diagnostics.depth).toBe(1);
        expect(result.history.length).toBe(2);

        // Root (Index 1) should be empty text or minimal
        expect(result.history[1].text?.trim() || '').toBe('');
        // Forwarded message (Index 0) should have the content
        expect(result.history[0].text).toMatch(/Hello\s+Mr\s+Boos/i);
    });
});
