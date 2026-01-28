import * as fs from 'fs';
import * as path from 'path';
import { extractDeepestHybrid } from '../src/index';

// Local path to imported fixtures
const EXTERNAL_FIXTURES_DIR = path.join(__dirname, 'fixtures', 'external');

describe('External Fixtures Analysis', () => {
    // Check if directory exists first
    if (!fs.existsSync(EXTERNAL_FIXTURES_DIR)) {
        console.warn(`External fixtures directory not found: ${EXTERNAL_FIXTURES_DIR}`);
        test.skip('External fixtures directory missing', () => { });
        return;
    }

    const files = fs.readdirSync(EXTERNAL_FIXTURES_DIR)
        .filter(f => f.endsWith('.txt') || f.endsWith('.eml'));

    test(`validate ${files.length} external fixtures`, async () => {
        console.log(`\n📋 Analyzing ${files.length} external fixtures...`);
        console.log('─'.repeat(100));
        console.log('Status | Fixture                                  | Depth | Method        | From');
        console.log('─'.repeat(100));

        const failures: any[] = [];
        let passedCount = 0;

        for (const file of files) {
            const filePath = path.join(EXTERNAL_FIXTURES_DIR, file);
            // safe read
            let content = '';
            try {
                content = fs.readFileSync(filePath, 'utf8');
            } catch (e) {
                console.error(`Failed to read ${file}:`, e);
                failures.push({ file, reason: 'Read Error' });
                continue;
            }

            // Parse - forcing skipMimeLayer because these are text body fixtures
            const result = await extractDeepestHybrid(content, { skipMimeLayer: true });

            const isSubjectOnly = file.includes('subject');
            const isSuccess = isSubjectOnly
                ? (result.diagnostics.parsedOk === false)
                : (result.diagnostics.parsedOk && (result.from !== null || result.history.length > 0));

            // Shorten method name
            let method = 'NONE';
            if (result.diagnostics.method) method = result.diagnostics.method;
            if (method.includes('fallback')) method = 'fallback'; // simplify

            // Attempt to get detector from flags if inline
            if (method === 'inline' && result.history.length > 0) {
                const flags = result.history[result.history.length - 1].flags || [];
                const detFlag = flags.find(f => f.startsWith('method:'));
                if (detFlag) method = detFlag.replace('method:', '');
            }

            const fromStr = result.from ? result.from.address : (result.history.length > 0 && result.history[result.history.length - 1].from?.address) || 'MISSING';

            const statusIcon = isSuccess ? '✅' : '❌';

            // Console log line for visual
            // console.log(`${statusIcon} ${file.padEnd(40)} | ${result.diagnostics.depth}     | ${method.padEnd(13)} | ${fromStr.substring(0, 30)}`);

            if (isSuccess) {
                passedCount++;
            } else {
                console.log(`${statusIcon} ${file.padEnd(40)} | ${result.diagnostics.depth}     | ${method.padEnd(13)} | ${fromStr}`);
                failures.push({
                    file,
                    depth: result.diagnostics.depth,
                    method,
                    reason: 'ParsedOk=false or No Sender'
                });
            }
        }

        console.log('─'.repeat(100));
        console.log(`Passed: ${passedCount}/${files.length}`);
        console.log(`Failed: ${failures.length}`);

        if (failures.length > 0) {
            console.log('\n❌ FAILURES DETAILS:');
            failures.forEach(f => console.log(` - ${f.file}: ${f.reason}`));
        }

        // We want to see the output, but maybe not fail the whole suit if we are just analyzing?
        // Let's assert so we get a "Failed" status if any fail.
        expect(failures.length).toBe(0);
    }, 60000); // 60s timeout for many files
});
