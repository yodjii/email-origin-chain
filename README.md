# email-deepest-forward

Private NPM package to extract the **deepest** (original) sender and content from forwarded emails.

## Features

- **Hybrid Strategy**: Combines MIME recursion (`message/rfc822`) and inline text parsing
- **Robust Parsing**: Uses `mailparser` and `email-forward-parser` with fallback mechanisms
- **Type-Safe**: Full TypeScript support
- **Normalized Output**: Consistent result format with diagnostics

## Installation

```bash
npm install
```

```typescript
import { extractDeepestHybrid } from 'email-deepest-forward';

const result = await extractDeepestHybrid(rawEmailString);
console.log(result.text); // The deepest original message
console.log(result.history); // Full conversation chain
```

## Response Format

The library returns a `ResultObject` with the following structure:

| Field | Type | Description |
| :--- | :--- | :--- |
| `from` | `object \| null` | `{ name?: string, address?: string }`. |
| `to` | `array` | List of primary recipients. |
| `cc` | `array` | List of CC recipients. |
| `subject` | `string \| null` | The original subject line of the deepest message. |
| `date_raw` | `string \| null` | The original date string found in the email headers. |
| `date_iso` | `string \| null` | ISO 8601 UTC representation (normalized via `any-date-parser`). |
| `text` | `string \| null` | Cleaned body content of the deepest message. |
| `attachments` | `array` | Metadata for MIME attachments found at the deepest level. |
| `history` | `array` | **Conversation Chaining**: Full audit trail of the discussion (see below). |
| `diagnostics` | `object` | Metadata about the parsing process. |

### Diagnostics Detail

- **`method`**: Strategy used to find the deepest message.
    - `rfc822`: Found via recursive MIME attachments (highest reliability).
    - `inline`: Found via text pattern detection (forwarded blocks).
    - `fallback`: No forward found, returning current message info or best-effort extraction.
- **`depth`**: Number of forward levels traversed (0 for original email).
- **`parsedOk`**: `true` if at least a sender (`from`) and `subject` were successfully extracted.
- **`warnings`**: Array of non-fatal issues (e.g., date normalization failure).

### Conversation Chain Reconstruction (Full History)

Rather than just finding the "original" source, the library reconstructs the entire **Conversation Chain** (sometimes called *Email Threading* or *Message Chaining*). This allows you to audit every step of a transfer:

- **`history[0]`**: The **deepest** (oldest) message in the chain. Same as the root object.
- **`history[1...n-1]`**: Intermediate forwards/messages.
- **`history[n]`**: The **root** (most recent) message you actually received.

Each history entry contains its own `from`, `to`, `cc`, `subject`, `date_iso`, `text`, and **`flags`** (array of strings).

#### Possible Flags:
- `level:deepest`: The original source of the thread.
- `level:root`: The entry representing the received email itself.
- `trust:high_mime`: Metadata from a real `.eml` attachment (100% reliable).
- `trust:medium_inline`: Metadata extracted from text patterns (best effort).
- `method:crisp_engine`: Detected via standard international patterns.
- `method:manual_fallback`: Detected via custom language rules (French, Outlook).
- `format:outlook_fr`: Specifically identified as an Outlook French forward.
- `format:standard`: A standard dashed separator or "From/De" block.
- `content:silent_forward`: The user forwarded the message without adding any text.
- `date:unparseable`: A date string was found but could not be normalized to ISO.

### Typical Output Example

```json
{
  "from": { "name": "Deepest Source", "address": "original@source.com" },
  "subject": "Initial Topic",
  "text": "The very first message content.",
  "history": [
    {
      "depth": 2,
      "from": { "address": "original@source.com" },
      "text": "The very first message content.",
      "flags": ["method:manual_fallback", "format:outlook_fr", "level:deepest"]
    },
    {
      "depth": 1,
      "from": { "name": "Intermediate Person", "address": "inter@company.com" },
      "text": "",
      "flags": ["method:crisp_engine", "content:silent_forward"]
    },
    {
      "depth": 0,
      "from": { "name": "Me", "address": "me@provider.com" },
      "text": "Check this thread below!",
      "flags": ["level:root", "trust:high_mime"]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 2,
    "parsedOk": true
  }
}
```

## Examples

### 1. Simple Email (No Forward)
When no forward is detected, the library returns the metadata of the email itself.

```typescript
const email = `From: alice@example.com
Subject: Meeting Update
Date: Mon, 26 Jan 2026 15:00:00 +0100

Hey, the meeting is moved to 4 PM.`;

const result = await extractDeepestHybrid(email);
console.log(result.diagnostics.depth); // 0
console.log(result.from.address);      // "alice@example.com"
```

### 2. Double Inline Forward (Deep Extraction)
The library recursively follows "Forwarded message" blocks to find the original sender.

```typescript
const doubleForward = `
---------- Forwarded message ---------
From: Flo R. <florian.regalo@gmail.com>
Date: Mon, 26 Jan 2026 at 15:01
Subject: Fwd: original topic

---------- Forwarded message ---------
From: Original Sender <original@source.com>
Date: Mon, 26 Jan 2026 at 10:00
Subject: original topic

This is the very first message content.`;

const result = await extractDeepestHybrid(doubleForward);
console.log(result.diagnostics.depth);  // 2
console.log(result.from.address);       // "original@source.com"
console.log(result.text);               // "This is the very first message content."
```

### 3. Extreme Conversation Chain (5 Levels)
For complex corporate threads where a message is forwarded multiple times across different regional offices (e.g., mixing English and French headers).

```typescript
const extremeChain = `From: boss@corp.com
Date: Tue, 27 Jan 2026 02:35:18 +0100
Subject: FW: Final Review

Check the bottom of this long thread.

---------- Forwarded message ---------
From: "Intermediate Manager" <inter-2@corp.com>
Date: mardi 27 janvier 2026 à 00:30
Subject: Tr: Final Review

But it is quite normal!

De : "Employee" <real.end@gmail.com>
Envoyé : mardi 27 janvier 2026 à 00:30
À : "Recip" <inter-1@provider.com>
Objet : Fwd: Final Review

Great Yodjii, thank you

---------- Forwarded message ---------
From: <inter-1@provider.com>
Date: Tue, 27 Jan 2026 at 00:29
Subject: Fwd: original request

Ok noted, I am forwarding it back to you.

---------- Forwarded message ---------
From: <original@source.com>
Date: mardi 27 janvier 2026 à 00:28
Subject: original request

Hello, please forward this back to me.`;

const result = await extractDeepestHybrid(extremeChain);
console.log(result.diagnostics.depth); // 4 (5 messages total)
```

**JSON Output Example (Extreme Case):**

```json
{
  "from": { "name": "John Source", "address": "original@source.com" },
  "subject": "original request",
  "text": "Hello, please forward this back to me.",
  "history": [
    {
      "depth": 4,
      "from": { "name": "John Source", "address": "original@source.com" },
      "text": "Hello, please forward this back to me.",
      "flags": ["method:manual_fallback", "format:standard", "level:deepest"]
    },
    {
      "depth": 3,
      "from": { "name": "First Provider", "address": "inter-1@provider.com" },
      "text": "Ok noted, I am forwarding it back to you.",
      "flags": ["method:crisp_engine", "trust:medium_inline"]
    },
    {
      "depth": 2,
      "from": { "name": "Employee", "address": "real.end@gmail.com" },
      "text": "Great Yodjii, thank you",
      "flags": ["method:manual_fallback", "format:outlook_fr"]
    },
    {
      "depth": 1,
      "from": { "name": "Intermediate Manager", "address": "inter-2@corp.com" },
      "text": "But it is quite normal!",
      "flags": ["method:crisp_engine", "trust:medium_inline"]
    },
    {
      "depth": 0,
      "from": { "name": "Boss", "address": "boss@corp.com" },
      "text": "Check the bottom of this long thread.",
      "flags": ["level:root", "trust:high_mime"]
    }
  ],
  "diagnostics": {
    "method": "inline",
    "depth": 4,
    "parsedOk": true
  }
}
```

### 4. International Support (e.g., French)
The library automatically handles international headers like "De:", "Objet:", "Message transféré".

```typescript
const frenchEmail = `
---------- Message transféré ---------
De : Expert Auto <expert@assurance.fr>
Date : lun. 10 févr. 2025 à 11:39
Objet : Dossier #12345

Hello, here is your expertise report.`;

const result = await extractDeepestHybrid(frenchEmail);
console.log(result.from.name);       // "Expert Auto"
console.log(result.date_iso);        // "2025-02-10T10:39:00.000Z"
```

## Error Handling & Edge Cases

### Malformed Inputs
If you pass a string that isn't an email (e.g., a simple welcome message), the library returns the text but sets `parsedOk` to `false`.

```typescript
const result = await extractDeepestHybrid("Welcome to our platform!");

console.log(result.from);               // null
console.log(result.diagnostics.parsedOk); // false
console.log(result.text);               // "Welcome to our platform!"
```

### Missing or Unparseable Dates
If a date cannot be normalized to ISO format, `date_iso` will be `null` and a warning will be added. You can still access the original string via `date_raw`.

```typescript
const result = await extractDeepestHybrid(emailWithBadDate);

if (!result.date_iso) {
  console.warn(result.diagnostics.warnings[0]); // "Could not normalize date: ..."
  console.log("Raw date was:", result.date_raw);
}
```

### Non-String Input
The library strictly requires a string input and will throw an Error otherwise.

```typescript
try {
  await extractDeepestHybrid(null as any);
} catch (e) {
  console.error(e.message); // "Input must be a string"
}
```

## Strategy

1. **MIME Layer**: Recursively descends through `message/rfc822` attachments using `mailparser`.
2. **Inline Layer**: Iteratively scans the body for forwarded blocks using `email-forward-parser` patterns (supports multi-language).
3. **Date Normalization**: Uses `any-date-parser` and `luxon` for resilient international date parsing.
4. **Fallback**: Manual regex extraction if no structured headers are found.

## License

ISC (Private Package)
