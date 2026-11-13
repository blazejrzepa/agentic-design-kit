# Language Toggle

**ID:** `lang-toggle`  
**Playground:** [lang-toggle](https://aiuxplayground.com/pattern/lang-toggle)  **Related:** voice-transcript, real-time-translation

---

![Kit mockup](../../assets/screenshots/kit/kit-audio-lang.jpg)

## Purpose

Switch input/output language for AI with clear source/target labels.

## When to use

Switch input/output language for AI with clear source/target labels.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function LangToggle({ from, to, onSwap }: { from: string; to: string; onSwap: () => void }) {
  return (
    <button type="button" onClick={onSwap} className="rounded-control border border-hairline px-control py-dense font-mono text-2xs text-ink-muted">{from} ↔ {to}</button>
  );
}
```
