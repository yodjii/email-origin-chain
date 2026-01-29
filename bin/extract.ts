#!/usr/bin/env npx tsx
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { extractDeepestHybrid } from '../src/index';

/**
 * CLI Tool to extract the deepest forwarded email from a file
 * Usage: npx tsx bin/extract.ts <path-to-email-file> [--json]
 */
async function main() {
    const args = process.argv.slice(2);
    const filePath = args.find(a => !a.startsWith('--'));
    const isJson = args.includes('--json');

    if (!filePath) {
        console.error('Usage: npx tsx bin/extract.ts <file-path> [--json]');
        process.exit(1);
    }

    const absolutePath = resolve(process.cwd(), filePath);
    if (!existsSync(absolutePath)) {
        console.error(`File not found: ${absolutePath}`);
        process.exit(1);
    }

    try {
        const content = readFileSync(absolutePath, 'utf8');
        const result = await extractDeepestHybrid(content);

        if (isJson) {
            console.log(JSON.stringify(result, null, 2));
        } else {
            console.log('\n--- EXTRACTION RESULT ---');
            console.log(`From:    ${result.from?.name || ''} <${result.from?.address || ''}>`);
            console.log(`Subject: ${result.subject || ''}`);
            console.log(`Date:    ${result.date_iso || result.date_raw || ''}`);
            console.log(`Depth:   ${result.diagnostics.depth}`);
            console.log(`Method:  ${result.diagnostics.method}`);
            console.log('--------------------------');
            console.log('\n--- TEXT CONTENT ---');
            console.log(result.text);
            console.log('--------------------\n');

            if (result.history.length > 1) {
                console.log(`History: ${result.history.length} levels found.`);
            }
        }
    } catch (error) {
        console.error(`Error parsing email: ${(error as Error).message}`);
        process.exit(1);
    }
}

main();
