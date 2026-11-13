# Text-to-Image Controls

**ID:** `text-to-image-controls`  
**Playground:** [text-to-image-controls](https://aiuxplayground.com/pattern/text-to-image-controls)  **Related:** model-mode-picker, cost-estimates

---

![Kit mockup](../../assets/screenshots/kit/kit-parameters-style.jpg)

## Purpose

Dense controls for image gen: aspect, seed, steps, refs — with cost estimate.

## When to use

Dense controls for image gen: aspect, seed, steps, refs — with cost estimate.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function T2IControls({ aspect, onAspect }: { aspect: string; onAspect: (a: string) => void }) {
  return <div className="flex gap-dense">{["1:1", "16:9", "9:16"].map((a) => <button key={a} type="button" onClick={() => onAspect(a)} className={`rounded-control px-control py-dense font-mono text-2xs ${aspect === a ? "bg-accent-muted text-accent-ink" : "text-ink-muted"}`}>{a}</button>)}</div>;
}
```
