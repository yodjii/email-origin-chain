import { normalizeFrom } from '../src/utils';

describe('normalizeFrom', () => {
    test('handles standard Name <email> format', () => {
        const result = normalizeFrom({
            name: 'John Doe',
            address: 'john@example.com'
        });
        expect(result?.address).toBe('john@example.com');
        expect(result?.name).toBe('John Doe');
    });

    test('fixes email [email] pattern in address field', () => {
        const result = normalizeFrom({
            name: undefined,
            address: 'john@example.com [john@example.com]'
        });
        expect(result?.address).toBe('john@example.com');
    });

    test('fixes email [email] pattern in name field when address is empty', () => {
        const result = normalizeFrom({
            name: 'john@example.com [john@example.com]',
            address: ''
        });
        expect(result?.address).toBe('john@example.com');
        expect(result?.name).toBeUndefined();
    });

    test('fixes email<mailto:email> pattern', () => {
        const result = normalizeFrom({
            name: 'Flo M.',
            address: 'florian.mezy@gmail.com<mailto:florian.mezy@gmail.com>'
        });
        expect(result?.address).toBe('florian.mezy@gmail.com');
        expect(result?.name).toBe('Flo M.');
    });

    test('fixes email<mailto:email>> pattern (double trailing bracket)', () => {
        const result = normalizeFrom({
            name: '"Flo M."',
            address: 'florian.mezy@gmail.com<mailto:florian.mezy@gmail.com>>'
        });
        console.log('DEBUG normalizeFrom result:', JSON.stringify(result, null, 2));
        expect(result?.address).toBe('florian.mezy@gmail.com');
        expect(result?.name).toBe('"Flo M."');
    });

    test('extracts email from name when address is empty', () => {
        const result = normalizeFrom({
            name: 'Contact: john@example.com',
            address: ''
        });
        expect(result?.address).toBe('john@example.com');
    });

    test('returns null for null input', () => {
        const result = normalizeFrom(null);
        expect(result).toBeNull();
    });

    test('returns unchanged for valid simple address', () => {
        const result = normalizeFrom({
            name: undefined,
            address: 'simple@example.com'
        });
        expect(result?.address).toBe('simple@example.com');
    });
});
