# Object Removal

**ID:** `object-removal`  
**Playground:** [object-removal](https://aiuxplayground.com/pattern/object-removal)  **Related:** inpainting, background-removal

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

Select object(s) in an image and erase/inpaint them with undo.

## When to use

Select object(s) in an image and erase/inpaint them with undo.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function ObjectRemovalActions({ onRemove }: { onRemove: () => void }) {
  return <button type="button" onClick={onRemove} className="rounded-control border border-hairline px-control py-dense text-2xs text-ink-muted hover:text-danger">Remove object</button>;
}
```
