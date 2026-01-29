import * as fs from 'fs';
import * as path from 'path';
import { extractDeepestHybrid } from '../src/index';
const EmailForwardParser = require('email-forward-parser');

/**
 * Benchmark Tool
 * Compares our hybrid logic results with the reference library (email-forward-parser)
 * Focuses on Body cleaning fidelity and depth detection success.
 */
async function runBenchmark() {
    const fixturesDir = path.join(__dirname, '../tests/fixtures');
    const files = fs.readdirSync(fixturesDir).filter(f => f.endsWith('.eml') || f.endsWith('.txt'));

    console.log(`\n=== BENCHMARK: Hybrid vs Reference (${files.length} files) ===\n`);

    let total = 0;
    let cleaningMatches = 0;
    let depthWins = 0;

    for (const file of files) {
        total++;
        const content = fs.readFileSync(path.join(fixturesDir, file), 'utf8');

        // 1. Reference (Crisp)
        const parser = new EmailForwardParser();
        const refResult = parser.read(content);

        // 2. Hybrid
        const hybridResult = await extractDeepestHybrid(content);

        // Check cleaning of the FIRST level (since reference only finds 1 level)
        // We look for the entry in our history that corresponds to what Crisp found
        const crispBody = refResult.email?.body?.trim() || '';
        let matchedBody = false;

        // Our history is reversed (root is last), check all levels
        const normalizeForComparison = (t: string) => t.replace(/\s+/g, ' ').replace(/--boundary-anon-\d+/g, '').trim();
        const normalizedCrisp = normalizeForComparison(crispBody);

        for (const entry of hybridResult.history) {
            const entryNorm = normalizeForComparison(entry.text || '');
            // Match if bodies are equal OR if reference contains artifacts that we cleaned
            if (entryNorm === normalizedCrisp && normalizedCrisp !== '') {
                matchedBody = true;
                break;
            }
            if (normalizedCrisp !== '' && entryNorm !== '' && normalizedCrisp.includes(entryNorm) && normalizedCrisp.length > entryNorm.length) {
                // If Crisp contains our clean text but is longer, it's a "Clean Win" for us
                matchedBody = true;
                break;
            }
        }

        if (matchedBody) cleaningMatches++;

        // Check if we found more depth than reference
        if (hybridResult.diagnostics.depth > 1) depthWins++;

        const status = matchedBody ? '✅' : '❓';
        const depth = hybridResult.diagnostics.depth > 1 ? ` (+${hybridResult.diagnostics.depth - 1} levels!)` : '';
        const cleanWin = (matchedBody && hybridResult.history[0]?.text?.length! < crispBody.length) ? ' ✨ (Cleaner)' : '';

        process.stdout.write(`${status} ${file.padEnd(45)} | Depth: ${hybridResult.diagnostics.depth}${depth}${cleanWin}\n`);
    }

    console.log('\n=== SUMMARY ===');
    console.log(`Total Files:       ${total}`);
    console.log(`Cleaning Fidelity: ${cleaningMatches}/${total} (${Math.round(cleaningMatches / total * 100)}%)`);
    console.log(`Deep Nesting:      ${depthWins}/${total} files with multiple levels detected`);
    console.log('===============\n');
}

runBenchmark().catch(console.error);
