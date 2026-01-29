import * as fs from 'fs';
import * as path from 'path';
import { extractDeepestHybrid } from '../src/index';
const EmailForwardParser = require('email-forward-parser');

async function run() {
    const fixturePath = path.join(__dirname, 'fixtures', 'complex-forward-anonymized.eml');
    const content = fs.readFileSync(fixturePath, 'utf8');

    console.log('--- DIRECT CALL: EmailForwardParser (Crisp) ---');
    const parser = new EmailForwardParser();
    const crispResult = parser.read(content);

    if (crispResult.email && crispResult.email.body) {
        fs.writeFileSync('crisp_body_ideal.txt', crispResult.email.body);
        console.log('Ideal Crisp Body saved to crisp_body_ideal.txt');
    }

    console.log('\n--- HYBRID CALL (Our Logic) ---');
    const hybridResult = await extractDeepestHybrid(content);
    console.log('Winner:', hybridResult.diagnostics.method);
    console.log('Total levels found:', hybridResult.history.length);

    if (hybridResult.history[0]) {
        fs.writeFileSync('hybrid_body_level0.txt', hybridResult.history[0].text || '');
        console.log('Hybrid Body (Level 0) saved to hybrid_body_level0.txt');
    }
}

run().catch(console.error);
