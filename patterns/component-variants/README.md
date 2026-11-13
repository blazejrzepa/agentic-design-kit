# Component Variants

**ID:** `component-variants`  
**Playground:** [component-variants](https://aiuxplayground.com/pattern/component-variants)  **Related:** response-versions, generative-ui

---

## Purpose

Generate multiple UI/component variants side-by-side for comparison and pick.

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
