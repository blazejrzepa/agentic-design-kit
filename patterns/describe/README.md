# Describe

**ID:** `describe`  
**Shape of AI:** https://www.shapeof.ai/  **Related:** streaming-thought-state, suggestions

---

![Kit mockup](../../assets/screenshots/kit/kit-auth-describe-analytics.jpg)

## Purpose

Decompose content into fundamental tokens/suggested prompt structure.

## Snippet

```tsx
export function DescribeTokens({ tokens }: { tokens: string[] }) {
  return <div className="flex flex-wrap gap-dense">{tokens.map((t) => <span key={t} className="rounded-control bg-surface-overlay px-dense-2 py-px font-mono text-2xs text-ink-muted">{t}</span>)}</div>;
}
```
