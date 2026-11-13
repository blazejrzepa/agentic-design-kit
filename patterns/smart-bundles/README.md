# Smart Bundles

**ID:** `smart-bundles`  
**Playground:** [smart-bundles](https://aiuxplayground.com/pattern/smart-bundles)  **Related:** smart-recommendations, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-commerce-pack.jpg)

## Purpose

AI-grouped product/content bundles with “why these” explanation.

## When to use

AI-grouped product/content bundles with “why these” explanation.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

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
