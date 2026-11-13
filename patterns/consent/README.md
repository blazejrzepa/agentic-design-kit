# Consent

**ID:** `consent`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/trust-builders  **Related:** disclosure, voice-cloning, connectors

---

![Kit mockup](../../assets/screenshots/kit/kit-trust-consent.jpg)

## Purpose

Capture informed permission before recording, training, or processing others’ data.

## Snippet

```tsx
export function ConsentGate({ text, onAccept }: { text: string; onAccept: () => void }) {
  return (
    <div className="rounded-panel border border-hairline p-panel text-xs">
      <p className="text-ink-muted">{text}</p>
      <button type="button" onClick={onAccept} className="mt-control rounded-control bg-accent px-panel py-control-2 text-accent-ink">I agree</button>
    </div>
  );
}
```
