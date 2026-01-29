import { extractDeepestHybrid } from '../src/index';
import * as fs from 'fs';
import * as path from 'path';
const EmailForwardParser = require('email-forward-parser');

async function debugCompare() {
    const fixturePath = path.join(__dirname, '../tests/fixtures/forward-attachment-small-anonymized.eml');
    const content = fs.readFileSync(fixturePath, 'utf8');

    console.log('--- CRISP (Reference) ---');
    const parser = new EmailForwardParser();
    const refResult = parser.read(content);
    const crispBody = refResult.email?.body || '';
    console.log(`Body length: ${crispBody.length}`);
    console.log('First 200 chars:', JSON.stringify(crispBody.substring(0, 200)));

    console.log('\n--- HYBRID (Our) ---');
    const hybridResult = await extractDeepestHybrid(content);
    console.log(`History length: ${hybridResult.history.length}`);

    hybridResult.history.forEach((entry, i) => {
        const text = entry.text || '';
        console.log(`Level ${i}: Body length: ${text.length}`);
        console.log(`Level ${i}: First 200 chars:`, JSON.stringify(text.substring(0, 200)));
    });

    const normalize = (t: string) => t.replace(/\s+/g, ' ').trim();
    const crispNorm = normalize(crispBody);

    console.log('\nComparing normalized bodies...');
    hybridResult.history.forEach((entry, i) => {
        const entryNorm = normalize(entry.text || '');
        const match = entryNorm === crispNorm;
        console.log(`Level ${i} matches Crisp: ${match}`);
        if (!match && i === 0) {
            console.log('DIFFERENCE DETECTED AT LEVEL 0');
            // Show where they start to differ
            let diffPos = 0;
            while (diffPos < Math.min(crispNorm.length, entryNorm.length) && crispNorm[diffPos] === entryNorm[diffPos]) {
                diffPos++;
            }
            console.log(`First diff at char ${diffPos}`);
            console.log(`Crisp near diff: ${JSON.stringify(crispNorm.substring(diffPos, diffPos + 50))}`);
            console.log(`Entry near diff: ${JSON.stringify(entryNorm.substring(diffPos, diffPos + 50))}`);
        }
    });
}

debugCompare().catch(console.error);
