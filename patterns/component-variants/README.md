# Component Variants

**ID:** `component-variants`  
**Playground:** [component-variants](https://aiuxplayground.com/pattern/component-variants)  **Related:** response-versions, generative-ui

---

![Kit mockup](../../assets/screenshots/kit/kit-variants-theme-gesture.jpg)

## Purpose

Generate multiple UI/component variants side-by-side for comparison and pick.

## When to use

Generate multiple UI/component variants side-by-side for comparison and pick.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function VariantGrid({ variants, onPick }: { variants: { id: string; label: string }[]; onPick: (id: string) => void }) {
  return (
    <div className="grid grid-cols-3 gap-control">
      {variants.map((v) => (
        <button key={v.id} type="button" onClick={() => onPick(v.id)} className="rounded-panel border border-hairline bg-surface px-control py-panel text-xs text-ink hover:border-accent">{v.label}</button>
      ))}
    </div>
  );
}
```
