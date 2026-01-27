import { ResultObject, EmailAddress } from './types';

import * as anyDateParser from 'any-date-parser';

export function normalizeDateToISO(dateRaw: string | Date | null | undefined): string | null {
    if (!dateRaw) return null;

    if (dateRaw instanceof Date) {
        return dateRaw.toISOString();
    }

    const dateStr = String(dateRaw).trim();

    // 1. Try native Date first - handle standard RFC 2822 or ISO 8601
    const nativeDate = new Date(dateStr);
    if (!isNaN(nativeDate.getTime())) {
        return nativeDate.toISOString();
    }

    // 2. Try any-date-parser on original string
    try {
        const parsedDate = anyDateParser.fromString(dateStr);
        if (parsedDate && !isNaN(parsedDate.getTime())) {
            return parsedDate.toISOString();
        }
    } catch (e) {
        // Fallback to manual cleaning
    }

    // 3. Robust cleaning fallback (remove French/English days, "at", "à", etc.)
    const cleaned = dateStr
        .replace(/\b(lun\.?|mar\.?|mer\.?|mer\.?|jeu\.?|ven\.?|sam\.?|dim\.?|mon\.?|tue\.?|wed\.?|thu\.?|fri\.?|sat\.?|sun\.?)\b/gi, '')
        .replace(/\bà\b/gi, '')
        .replace(/\bat\b/gi, '')
        .replace(/,/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    // Retry native Date on cleaned string
    const cleanedNative = new Date(cleaned);
    if (!isNaN(cleanedNative.getTime())) {
        return cleanedNative.toISOString();
    }

    // Retry any-date-parser on cleaned string
    try {
        const cleanedParsed = anyDateParser.fromString(cleaned);
        if (cleanedParsed && !isNaN(cleanedParsed.getTime())) {
            return cleanedParsed.toISOString();
        }
    } catch (e) { }

    return null;
}

export function cleanText(text: string | null | undefined): string | null {
    if (typeof text !== 'string') return null;
    return text
        .replace(/\r\n/g, '\n')
        .replace(/[ \t]+$/gm, '') // trim end of lines
        .trim();
}

export function normalizeParserResult(
    parsed: any,
    method: 'inline' | 'fallback',
    depth: number,
    warnings: string[] = []
): ResultObject {
    // email-forward-parser structure:
    // email: { from: { name, address }, subject, date, body, ... }
    const email = parsed?.email || {};

    // Normalize From
    let from: EmailAddress | null = null;
    if (email.from && typeof email.from === 'object') {
        // Only set from if we have at least an address
        if (email.from.address) {
            from = { name: email.from.name, address: email.from.address };
        }
    } else if (typeof email.from === 'string' && email.from.trim()) {
        from = { address: email.from.trim() };
    }

    const date_raw = email.date || null;
    const date_iso = normalizeDateToISO(date_raw);

    if (!date_iso && date_raw) {
        warnings.push(`Could not normalize date: "${date_raw}"`);
    }

    return {
        from,
        subject: email.subject || null,
        date_raw,
        date_iso,
        text: cleanText(email.body),
        attachments: [], // TODO: extract if parser provides them
        history: [],
        diagnostics: {
            method,
            depth,
            parsedOk: !!(from && email.subject),
            warnings
        }
    };
}
