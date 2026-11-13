# Caveat

**ID:** `caveat`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/trust-builders  **Related:** disclosure, failure-disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-trust-consent.jpg)

## Purpose

Inform users about model/tech shortcomings or risks inline.

## Snippet

```tsx
export function CaveatBanner({ text }: { text: string }) {
  return <p className="rounded-control border border-hairline bg-surface-overlay px-control py-dense text-2xs text-ink-muted">{text}</p>;
}
```
