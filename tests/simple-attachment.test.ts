import * as fs from 'fs';
import * as path from 'path';
import { extractDeepestHybrid } from '../src/index';

describe('Simple Attachment Fixture Test', () => {
    test('process simple-attachment-anonymized.eml (no forward, 1 attachment)', async () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'simple-attachment-anonymized.eml');
        const content = fs.readFileSync(fixturePath, 'utf8');

        const result = await extractDeepestHybrid(content);

        // 1. Verify diagnostics
        expect(result.diagnostics.parsedOk).toBe(true);
        expect(result.diagnostics.depth).toBe(0);
        expect(result.diagnostics.method).toBe('fallback');

        // 2. Verify basic fields
        expect(result.from?.address).toBe('flo.m@anonymized.com');
        expect(result.from?.name).toBe('Flo User');
        expect(result.subject).toBe('File With 1 attachement 1MO');
        expect(result.text).toMatch(/Please review the doc/i);

        // 3. Verify history (should have only 1 entry since it's not a forward)
        expect(result.history.length).toBe(1);
        expect(result.history[0].text).toMatch(/Please review the doc/i);
        expect(result.history[0].from?.address).toBe('flo.m@anonymized.com');

        // 4. Verify attachment
        expect(result.attachments.length).toBe(1);
        expect(result.attachments[0].filename).toBe('1mb-example.pdf');
        expect(result.attachments[0].contentType).toBe('application/pdf');
        expect(result.attachments[0].size).toBeGreaterThan(1000000); // ~1MB

    });
});
