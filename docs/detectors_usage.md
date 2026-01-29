# Detector Usage Report

Run Date: 2026-01-28

## Overview
This report analyzes the utility of each registered detector based on a full execution of the test suite. Each "Hit" represents a successful detection of a forwarded email block that was chosen as the best match.

## Statistics

| Detector Name | Hits | Role | Status |
| :--- | :--- | :--- | :--- |
| **`crisp`** | 150+ | Universal / Multilingual (email-forward-parser) | **Essential** (Core) |
| **`reply`** | 15+ | International Quote Replies (`On ... wrote:`) | **Essential** (Broadens thread coverage) |
| **`new_outlook`** | 30+ | Modern Outlook (bolding, `mailto:` scories) | **Critical** (Handles modern corporate mail) |
| **`outlook_reverse_fr`** | 4 | Mobile/Web Outlook (Envoyé before De) | **Essential** (Complex nesting) |
| **`outlook_fr`** | 3 | Standard Outlook Desktop | **Useful** (Handles standard FR threads) |
| **`outlook_empty_header`** | 1* | Corrupted headers (No Date/Email) | **Critical** (Deep nesting recovery) |

## Priority Logic

The system follows a **Position First, Priority Second** strategy:
1.  **Index (Position)**: The match found earliest in the text (lowest index) always wins.
2.  **Priority (Tie-Breaker)**: If multiple detectors match at the exact same position, the one with the lower priority value wins.

### Strategy: Specific > Generic

Detectors are sorted by `priority` (ascending). 

1. **Expert Plugins**: (Priority < -100) - Designed for your specific app rules.
2. **Built-in Specifics**: (Priority -40 to -20) - Outlook variants, French headers, etc.
3. **Generic Library**: (Priority 100) - `crisp` (standard library fallback).
4. **Soft Detectors**: (Priority 150) - `reply` patterns.

**Rationale:** Generic libraries like Crisp are broad but sometimes lack the nuance required for specific client scories (like Outlook's bolding or complex CC/To fields). By giving priority to specific detectors on the same match index, we ensure that our optimized parsing logic handles the "known" formats, while Crisp remains a powerful fallback for everything else.

All built-in detectors now utilize the `Cleaner` expert utility for normalized text processing.

## Conclusion
The current registry provides comprehensive coverage for international threads.
-   **Specific Detectors** act as "experts" for recognized formats (Outlook, etc.).
-   **Crisp** handles standard forwards across many languages as a high-quality fallback.
-   **Reply** handles "quote-style" replies that Crisp ignores.
