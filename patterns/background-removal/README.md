# Background Removal

**ID:** `background-removal`  
**Playground:** [background-removal](https://aiuxplayground.com/pattern/background-removal)  **Related:** inline-action, smart-diff

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

One-click subject cutout with before/after preview and undo before commit.

## Snippet

```tsx
export function BackgroundRemovalPreview({ onApply, onUndo }: { onApply: () => void; onUndo: () => void }) {
  return (
    <div className="flex gap-control">
      <button type="button" onClick={onApply} className="rounded-control bg-accent px-control py-dense text-2xs text-accent-ink">Remove bg</button>
      <button type="button" onClick={onUndo} className="text-2xs text-ink-muted">Undo</button>
    </div>
  );
}
```
