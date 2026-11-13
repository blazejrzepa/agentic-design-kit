# Object Removal

**ID:** `object-removal`  
**Playground:** [object-removal](https://aiuxplayground.com/pattern/object-removal)  **Related:** inpainting, background-removal

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

Select object(s) in an image and erase/inpaint them with undo.

## Snippet

```tsx
export function ObjectRemovalActions({ onRemove }: { onRemove: () => void }) {
  return <button type="button" onClick={onRemove} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted hover:text-danger">Remove object</button>;
}
```
