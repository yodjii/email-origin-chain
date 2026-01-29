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

            if (result.history.length > 0) {
                console.log('--- CONVERSATION HISTORY (Deepest First) ---');
                result.history.forEach((entry, idx) => {
                    const isDeepest = entry.flags.includes('level:deepest');
                    const isRoot = entry.flags.includes('level:root');
                    let label = `[LEVEL ${entry.depth}]`;
                    if (isDeepest) label = '[ORIGIN]';
                    if (isRoot) label = '[RECEIPT]';

                    console.log(`${label.padEnd(10)} ${entry.from?.name || '(no name)'} <${entry.from?.address || '(no email)'}>`);
                    console.log(`           Subject: ${entry.subject || '(no subject)'}`);
                    console.log(`           Date:    ${entry.date_iso || entry.date_raw || '(no date)'}`);
                    console.log(`           Flags:   ${entry.flags.join(', ')}`);

                    // Add body snippet (first 50 chars)
                    const bodySnippet = (entry.text || '').trim();
                    const snippet = bodySnippet.length > 0
                        ? (bodySnippet.length > 50 ? bodySnippet.substring(0, 50).replace(/\n/g, ' ') + '...' : bodySnippet.replace(/\n/g, ' '))
                        : '(empty body)';
                    console.log(`           Body:    ${snippet}`);

                    if (idx < result.history.length - 1) {
                        console.log('               ↓');
                    }
                });
                console.log('--------------------------------------------\n');
            }
        }
    } catch (error) {
        console.error(`Error parsing email: ${(error as Error).message}`);
        process.exit(1);
    }
}

main();
