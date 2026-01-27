export interface EmailAddress {
    name?: string;
    address?: string;
}

export interface Attachment {
    filename?: string;
    contentType: string;
    size: number;
    content?: any; // Buffer or stream, depending on need, mostly metadata for now
}

export interface Diagnostics {
    method: 'rfc822' | 'inline' | 'fallback';
    depth: number;
    parsedOk: boolean;
    warnings: string[];
}

export interface HistoryEntry {
    from: EmailAddress | null;
    subject: string | null;
    date_raw: string | null;
    date_iso: string | null;
    text: string | null; // The text content EXCLUSIVE to this level (not including nested forwards)
    depth: number;
    flags: string[];
}

export interface ResultObject {
    from: EmailAddress | null;
    subject: string | null;
    date_raw: string | null;
    date_iso: string | null;
    text: string | null; // The cleaned body content of the deepest level
    attachments: Attachment[];
    history: HistoryEntry[];
    diagnostics: Diagnostics;
}

export interface Options {
    maxDepth?: number;
    timeoutMs?: number;
}
