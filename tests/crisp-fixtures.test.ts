import * as fs from 'fs';
import * as path from 'path';
import { extractDeepestHybrid } from '../src/index';

describe('Crisp Library Fixtures Tests', () => {
    const fixturesDir = path.join(__dirname, 'crisp-fixtures-temp');
    const fixtures = fs.readdirSync(fixturesDir).filter(f => f.endsWith('.txt'));

    test('validate all Crisp fixtures', async () => {
        console.log('\n📋 Crisp Fixtures Validation Results:');
        console.log('─'.repeat(80));
        console.log('Fixture                  | Depth | Detector      | From');
        console.log('─'.repeat(80));

        let allPassed = true;
        const results: any[] = [];

        for (const fixture of fixtures) {
            const fixturePath = path.join(fixturesDir, fixture);
            const content = fs.readFileSync(fixturePath, 'utf8');

            const result = await extractDeepestHybrid(content, { skipMimeLayer: true });

            const detector = result.history[0]?.flags.find(f => f.startsWith('method:'))?.replace('method:', '') || 'NONE';
            const from = result.from?.address || result.from?.name || 'NONE';

            results.push({
                fixture,
                depth: result.diagnostics.depth,
                detector,
                from,
                passed: result.diagnostics.parsedOk && result.diagnostics.depth >= 1
            });

            const status = results[results.length - 1].passed ? '✅' : '❌';
            console.log(`${status} ${fixture.padEnd(22)} | ${result.diagnostics.depth}     | ${detector.padEnd(13)} | ${from.substring(0, 30)}`);

            if (!results[results.length - 1].passed) {
                allPassed = false;
            }
        }

        console.log('─'.repeat(80));
        console.log(`\n📊 Summary: ${results.filter(r => r.passed).length}/${results.length} passed`);

        expect(allPassed).toBe(true);
    });
});
