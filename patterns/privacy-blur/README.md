# Privacy Blur

**ID:** `privacy-blur`  
**Playground:** [privacy-blur](https://aiuxplayground.com/pattern/privacy-blur)  **Related:** disclosure, connectors

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

Blur/redact sensitive regions in images or transcripts before AI or sharing.

## When to use

Blur/redact sensitive regions in images or transcripts before AI or sharing.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function PrivacyBlurToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return <button type="button" onClick={onToggle} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">{on ? "Blur on" : "Blur off"}</button>;
}
```
