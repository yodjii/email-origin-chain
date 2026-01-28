# Deep Forward Parsing Fix - Final Report

## Summary
Successfully resolved all test failures in `eml-fixture.test.ts`, achieving a **100% pass rate (23/23 tests)**. The library now correctly detects deep nested forwards even in complex mixed scenarios (Outlook, English, French, Empty Headers).

## Key Fixes Implemented

### 1. Fix: Missing Outlook Forward (Empty Header)
**Problem**: The `OutlookEmptyHeaderDetector` was failing to detect blocks like:
```text
________________________________
De: Florian M.
```
**Root Cause**: The regex `(?:_{30,}\s*)?` was "greedy" and consumed the newline after the separator. The subsequent `\r?\nDe` failed because it expected *another* newline which wasn't there.
**Solution**: Modified `src/detectors/outlook-empty-header-detector.ts` to use `[ \t]*` instead of `\s*` to avoid eating newlines, and improved stability against QP encoding errors.

### 2. Fix: Missing "Intermediate" Levels (Registry Priority)
**Problem**: In mixed chains, standard detectors (Crisp, priority 0) were detecting *later* forwards first, effectively "skipping" earlier non-standard Outlook forwards.
**Root Cause**: `DetectorRegistry` returned the *first found* result based on priority, regardless of position in text.
**Solution**: Updated `src/detectors/registry.ts` to run ALL detectors and return the match that appears **earliest** in the text (smallest index). This ensures we process the conversation chain in correct chronological order.

### 3. Fix: Truncated Body Text ("Florian" issue)
**Problem**: `OutlookReverseFrDetector` was returning only "Florian" instead of "Genial Yodjii... Florian".
**Root Cause**: The detector relied on finding a double newline (`\n\n`) to separate headers from body. In some Outlook blocks, the body starts immediately after the `Objet:` line with a single newline. The heuristic skipped the entire message body until it hit a double newline in the signature.
**Solution**: Updated `src/detectors/outlook-reverse-fr-detector.ts` to assume the body starts immediately after the `Objet` line if no clear separator is found.

## Verified Results

| Fixture | Expected Depth | Received Depth | Status |
| :--- | :--- | :--- | :--- |
| `complex-forward.eml` | 5 | 5 | ✅ PASS |
| `extreme-forward.eml` | 4 | 4 | ✅ PASS |
| `empty-body...eml` | 2 | 2 | ✅ PASS |

All other tests (`basic`, `utils`, `crisp`) remain passing.
