import { extractDeepestHybrid } from '../src/index';
import { ForwardDetector, DetectionResult } from '../src/detectors/types';

/**
 * EXAMPLE: A custom detector for a proprietary corporate format.
 * Format: "[[[ FORWARD BY SYSTEM ABC ]]]"
 */
class SystemABCCorpDetector implements ForwardDetector {
    readonly name = 'system-abc-corp';

    // Priority -100 ensures it runs before built-in detectors
    readonly priority = -100;

    detect(text: string): DetectionResult {
        const marker = '[[[ FORWARD BY SYSTEM ABC ]]]';
        const idx = text.indexOf(marker);

        if (idx !== -1) {
            // Extract text before the marker (the forwarder's note)
            const message = text.substring(0, idx).trim();

            // Extract text after the marker (the original body)
            const body = text.substring(idx + marker.length).trim();

            return {
                found: true,
                detector: this.name,
                confidence: 'high',
                message: message,
                email: {
                    from: { name: 'System ABC', address: 'automated@corp.com' },
                    subject: 'Proprietary Forward',
                    date: new Date().toISOString(),
                    body: body
                }
            };
        }

        return { found: false, confidence: 'low' };
    }
}

async function runExample() {
    console.log('\n=== Custom Plugin Example ===\n');

    const emailWithProprietaryHeader = `
Hello Boss,
I received this from the automated system. 

[[[ FORWARD BY SYSTEM ABC ]]]

Here is the original data that was stored in our database.
Regards,
The Machine.
    `;

    // Inject the custom detector via options
    const result = await extractDeepestHybrid(emailWithProprietaryHeader, {
        customDetectors: [new SystemABCCorpDetector()]
    });

    console.log('--- DIAGNOSTICS ---');
    console.log('Method:', result.diagnostics.method);
    console.log('Depth: ', result.diagnostics.depth);

    console.log('\n--- EXTRACTED CONTENT ---');
    console.log('From:   ', result.from?.name);
    console.log('Content:', result.text);
    console.log('-------------------------\n');
}

runExample().catch(console.error);
