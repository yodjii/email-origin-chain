import * as fs from 'fs';
import * as path from 'path';
import { extractDeepestHybrid } from '../src/index';

describe('EML Fixture Tests', () => {
    test('process complex-forward.eml (3 levels deep)', async () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'complex-forward.eml');
        const content = fs.readFileSync(fixturePath, 'utf8');

        const result = await extractDeepestHybrid(content);

        // 1. Verify diagnostics
        expect(result.diagnostics.parsedOk).toBe(true);
        expect(result.diagnostics.depth).toBeGreaterThanOrEqual(2);

        // 2. Verify Deepest message (Root of original intention)
        // Using a regex to be insensitive to special spaces (like non-breaking spaces)
        expect(result.text).toMatch(/Hello\.\s+tu\s+me\s+foward\s+ca\s+en\s+retour/i);
        expect(result.from?.address).toContain('florian.mezy@gmail.com');

        // 3. Verify history integrity (Full History mode)
        // Root (0) -> Inter 1 (1) -> Inter 2 (2) -> Deepest (3)
        // We now detect 4 levels correctly
        expect(result.history.length).toBe(4);

        // Deepest (Index 0)
        expect(result.history[0].text).toMatch(/Hello\.\s+tu\s+me\s+foward\s+ca/i);

        // Intermediate 1 (Index 1) - Florian: Ok c'est noté...
        expect(result.history[1].text).toMatch(/Ok\s+c['\s]+est\s+noté/i);

        // Intermediate 2 (Index 2) - Genial Yodjii...
        expect(result.history[2].text).toMatch(/Genial\s+Yodjii/i);

        // Initial Root Forward (Index 3)
        const root = result.history[3];
        expect(root.text).toMatch(/Mais\s+cest\s+bien\s+normal/i);
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
