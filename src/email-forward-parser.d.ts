// Type definitions for email-forward-parser
// This package doesn't have official types, so we declare them here

declare module 'email-forward-parser' {
    export interface ParsedEmail {
        from?: { name?: string; address?: string } | string;
        to?: string | string[];
        cc?: string | string[];
        subject?: string;
        date?: string;
        body?: string | any;
        attachments?: any[];
    }

    export interface ParseResult {
        forwarded?: boolean;
        message?: string | null;
        email?: ParsedEmail;
    }

    export default class EmailForwardParser {
        constructor();
        read(text: string): ParseResult;
    }
}
