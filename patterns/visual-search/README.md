# Visual Search

**ID:** `visual-search`  
**Playground:** [visual-search](https://aiuxplayground.com/pattern/visual-search)  **Related:** semantic-search, multimodal

---

## Purpose

Search by image with best-guess labeling and easy pivot to text search on low confidence.

## Snippet

```tsx
export function VisualSearchDrop({ onFile }: { onFile: () => void }) {
  return <button type="button" onClick={onFile} className="flex h-24 w-full items-center justify-center rounded-panel border border-dashed border-hairline text-2xs text-ink-faint">Drop image to search</button>;
}
```
