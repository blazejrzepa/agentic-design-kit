# Style Transfer

**ID:** `style-transfer`  
**Playground:** [style-transfer](https://aiuxplayground.com/pattern/style-transfer)  **Shape of AI:** https://www.shapeof.ai/  **Related:** inline-action, style-interpolation

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

Apply a reference style to content without changing structure (Shape of AI Restyle).

## When to use

Apply a reference style to content without changing structure (Shape of AI Restyle).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function StyleTransferPick({ styles, onPick }: { styles: string[]; onPick: (s: string) => void }) {
  return <div className="flex flex-wrap gap-dense">{styles.map((s) => <button key={s} type="button" onClick={() => onPick(s)} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted">{s}</button>)}</div>;
}
```
