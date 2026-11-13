# Magic Edit

**ID:** `magic-edit`  
**Playground:** [magic-edit](https://aiuxplayground.com/pattern/magic-edit)  **Related:** inline-action, inpainting

---

![Kit mockup](../../assets/screenshots/kit/kit-inpainting-magic.jpg)

## Purpose

Natural-language edit of an image/region (“make the sky dusk”) with preview.

## When to use

Natural-language edit of an image/region (“make the sky dusk”) with preview.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function MagicEditInput({ value, onChange, onRun }: { value: string; onChange: (v: string) => void; onRun: () => void }) {
  return (
    <div className="flex gap-dense">
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Describe the edit…" className="h-8 flex-1 rounded-control border border-hairline bg-canvas px-control text-xs text-ink" />
      <button type="button" onClick={onRun} className="rounded-control bg-accent px-control text-2xs text-accent-ink">Edit</button>
    </div>
  );
}
```
