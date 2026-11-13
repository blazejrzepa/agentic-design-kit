# Randomize

**ID:** `randomize`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/wayfinders  **Related:** suggestions, copilot-input

---

![Kit mockup](../../assets/screenshots/kit/kit-wayfinders.jpg)

## Purpose

Low-friction kickstart with randomized prompt/params for playful exploration.

## Snippet

```tsx
export function RandomizeButton({ onClick }: { onClick: () => void }) {
  return <button type="button" onClick={onClick} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">Surprise me</button>;
}
```
