# Background Removal

**ID:** `background-removal`  
**Playground:** [background-removal](https://aiuxplayground.com/pattern/background-removal)  **Related:** inline-action, smart-diff

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

One-click subject cutout with before/after preview and undo before commit.

## When to use

One-click subject cutout with before/after preview and undo before commit.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

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
