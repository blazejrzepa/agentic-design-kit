# Smart Bundles

**ID:** `smart-bundles`  
**Playground:** [smart-bundles](https://aiuxplayground.com/pattern/smart-bundles)  **Related:** smart-recommendations, disclosure

---

## Purpose

AI-grouped product/content bundles with “why these” explanation.

## Snippet

```tsx
export function SmartBundle({ title, why, onAdd }: { title: string; why: string; onAdd: () => void }) {
  return (
    <div className="rounded-panel border border-hairline p-panel">
      <p className="text-xs text-ink">{title}</p>
      <p className="mt-dense text-2xs text-ink-muted">{why}</p>
      <button type="button" onClick={onAdd} className="mt-control text-2xs text-accent-ink">Add bundle</button>
    </div>
  );
}
```
