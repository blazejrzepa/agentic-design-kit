# Privacy Blur

**ID:** `privacy-blur`  
**Playground:** [privacy-blur](https://aiuxplayground.com/pattern/privacy-blur)  **Related:** disclosure, connectors

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

Blur/redact sensitive regions in images or transcripts before AI or sharing.

## Snippet

```tsx
export function PrivacyBlurToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return <button type="button" onClick={onToggle} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">{on ? "Blur on" : "Blur off"}</button>;
}
```
