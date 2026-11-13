# Auto Fill

**ID:** `auto-fill`  
**Shape of AI:** https://www.shapeof.ai/  **Related:** smart-fill, clarify-before-act

---

![Kit mockup](../../assets/screenshots/kit/kit-batch-queue.jpg)

## Purpose

Extend one prompt across multiple fields/inputs at once (Shape of AI).

## Snippet

```tsx
export function AutoFillBanner({ count, onFill }: { count: number; onFill: () => void }) {
  return <button type="button" onClick={onFill} className="text-2xs text-accent-ink">Auto-fill {count} fields</button>;
}
```
