# Plugin Architecture Implementation Plan

## Objective

Create a flexible, extensible forward detection system using plugins to overcome Crisp limitations while maintaining code quality.

## Phased Approach

### Phase 1: Cc: Preprocessing (Quick Win) ⚡

**Goal:** Fix nested forward recursion with Cc: headers

#### Changes

**File:** `src/inline-layer.ts`

Add Cc: stripping before recursive parsing:

```typescript
// In processInline() loop, after Crisp detects a forward
const email = result.email;

// Strip Cc: from body before recursion (Crisp limitation workaround)
const cleanBody = (email.body || '')
    .replace(/^Cc:\s*.+$/gm, '')  // Remove Cc: lines
    .trim();

currentText = cleanBody;
```

#### Benefits
- ✅ Fixes nested forward recursion immediately
- ✅ Non-invasive (5 lines of code)
- ✅ Cc: info still preserved in `result.message`

#### Testing
- Test nested forwards (2-4 levels) WITH Cc: headers
- Verify 100% recursion success

---

### Phase 2: Plugin Architecture Foundation 🔌

**Goal:** Abstract forward detection into pluggable system

#### New Files

**`src/detectors/types.ts`**
```typescript
export interface DetectionResult {
    found: boolean;
    email?: {
        from: string | { name: string; address: string };
        subject?: string;
        date?: string;
        body?: string;
    };
    message?: string; // Exclusive content before forward
    confidence: 'high' | 'medium' | 'low';
}

export interface ForwardDetector {
    readonly name: string;
    readonly priority: number; // Lower = higher priority
    detect(text: string): DetectionResult;
}
```

**`src/detectors/crisp-detector.ts`**
```typescript
import EmailForwardParser from 'email-forward-parser';
import { ForwardDetector, DetectionResult } from './types';

export class CrispDetector implements ForwardDetector {
    readonly name = 'crisp';
    readonly priority = 0; // Highest priority

    private parser = new EmailForwardParser();

    detect(text: string): DetectionResult {
        const result = this.parser.read(text);

        if (!result?.forwarded || !result?.email) {
            return { found: false, confidence: 'low' };
        }

        return {
            found: true,
            email: result.email,
            message: result.message,
            confidence: 'high'
        };
    }
}
```

**`src/detectors/registry.ts`**
```typescript
import { ForwardDetector } from './types';
import { CrispDetector } from './crisp-detector';

export class DetectorRegistry {
    private detectors: ForwardDetector[] = [];

    constructor() {
        // Register default detectors
        this.register(new CrispDetector());
    }

    register(detector: ForwardDetector): void {
        this.detectors.push(detector);
        // Sort by priority (lower number = higher priority)
        this.detectors.sort((a, b) => a.priority - b.priority);
    }

    detect(text: string): DetectionResult {
        for (const detector of this.detectors) {
            const result = detector.detect(text);
            if (result.found) {
                return result;
            }
        }
        return { found: false, confidence: 'low' };
    }
}
```

#### Integration

**File:** `src/inline-layer.ts`

Replace direct Crisp call with registry:

```typescript
import { DetectorRegistry } from './detectors/registry';

export async function processInline(...) {
    const registry = new DetectorRegistry();
    
    while (currentDepth < maxRecursiveDepth) {
        const result = registry.detect(currentText);
        
        if (!result.found) break;
        
        // Process result.email...
    }
}
```

#### Benefits
- ✅ Crisp is now a plugin (can be replaced/extended)
- ✅ Clean separation of concerns
- ✅ Easy to add new detectors
- ✅ Testable in isolation

---

### Phase 3: Fallback Plugins 🔧

**Goal:** Add plugins for formats Crisp misses

#### New Detectors

**`src/detectors/outlook-fr-detector.ts`**

Handles Outlook FR format (`Envoyé: / De: / À: / Objet:`)

```typescript
export class OutlookFRDetector implements ForwardDetector {
    readonly name = 'outlook_fr';
    readonly priority = 10; // Lower than Crisp

    detect(text: string): DetectionResult {
        // Pattern: "Envoyé: ... De: ... À: ... Objet: ..."
        const pattern = /Envoyé:\s*(.+?)\s*De:\s*(.+?)\s*(?:<(.+?)>)?\s*À:\s*(.+?)\s*Objet:\s*(.+?)[\r\n]/s;
        const match = text.match(pattern);
        
        if (!match) return { found: false, confidence: 'low' };
        
        // Extract body after headers
        const bodyStart = text.indexOf(match[0]) + match[0].length;
        const body = text.substring(bodyStart).trim();
        
        return {
            found: true,
            email: {
                from: match[3] || match[2],
                subject: match[5],
                date: match[1],
                body: body
            },
            message: text.substring(0, text.indexOf(match[0])).trim(),
            confidence: 'medium'
        };
    }
}
```

**`src/detectors/new-outlook-detector.ts`**

Handles new_outlook_2019 format (TBD based on fixture analysis)

```typescript
export class NewOutlookDetector implements ForwardDetector {
    readonly name = 'new_outlook';
    readonly priority = 10;

    detect(text: string): DetectionResult {
        // Pattern analysis from failed fixtures
        // TBD: Need to analyze new_outlook_2019 format
        return { found: false, confidence: 'low' };
    }
}
```

#### Registration

**File:** `src/detectors/registry.ts`

```typescript
import { OutlookFRDetector } from './outlook-fr-detector';
import { NewOutlookDetector } from './new-outlook-detector';

constructor() {
    this.register(new CrispDetector());
    this.register(new OutlookFRDetector());
    this.register(new NewOutlookDetector());
}
```

#### Expected Impact

| Metric | Before Plugins | After Plugins |
|--------|----------------|---------------|
| Crisp fixtures | 116/135 (85.9%) | **~128/135 (95%)** |
| Nested recursion | 0% with Cc: | **100%** |
| Code maintainability | Medium | **High** |

---

## Configuration Options

Allow users to configure detectors:

```typescript
interface Options {
    // ... existing options
    detectors?: {
        enabled?: string[];  // Only use these
        disabled?: string[]; // Skip these
    };
}
```

Usage:
```typescript
// Only use Crisp (fastest)
extractDeepestHybrid(text, { 
    detectors: { enabled: ['crisp'] } 
});

// Use all except fallbacks (avoid false positives)
extractDeepestHybrid(text, { 
    detectors: { disabled: ['outlook_fr', 'new_outlook'] } 
});
```

---

## Testing Strategy

### Phase 1 Testing
- Nested forwards with Cc: (2-4 levels)
- Verify Cc: info preserved

### Phase 2 Testing
- All existing tests must pass
- Benchmark: no performance regression
- Crisp fixtures: same 85.9% baseline

### Phase 3 Testing
- Target: 95%+ Crisp fixture pass rate
- Each detector tested in isolation
- Integration tests for detector chain

---

## Documentation

### README Updates
- Document plugin architecture
- List available detectors
- Configuration examples
- How to write custom detectors

### Code Comments
- JSDoc for all detector interfaces
- Examples in each detector file

---

## Migration Path

1. **Phase 1:** Immediate (今 today)
2. **Phase 2:** 1-2 days (refactor to plugins)
3. **Phase 3:** 2-3 days (implement fallback detectors)

**Total:** ~1 week for full plugin system

---

## Success Criteria

- ✅ Nested forward recursion: 100% (Phase 1)
- ✅ Code LOC reduction maintained (Phase 2)
- ✅ Crisp fixtures: 95%+ pass rate (Phase 3)
- ✅ All unit tests: 100% pass
- ✅ Extensible for future formats
