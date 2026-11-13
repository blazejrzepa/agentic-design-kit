# Visual Search

**ID:** `visual-search`  
**Playground:** [visual-search](https://aiuxplayground.com/pattern/visual-search)  **Related:** semantic-search, multimodal

---

![Kit mockup](../../assets/screenshots/kit/kit-search-filters.jpg)

## Purpose

Search by image with best-guess labeling and easy pivot to text search on low confidence.

## When to use

Search by image with best-guess labeling and easy pivot to text search on low confidence.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function VisualSearchDrop({ onFile }: { onFile: () => void }) {
  return <button type="button" onClick={onFile} className="flex h-24 w-full items-center justify-center rounded-panel border border-dashed border-hairline text-2xs text-ink-faint">Drop image to search</button>;
}
```
