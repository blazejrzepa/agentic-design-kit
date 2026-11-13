# Image Upscaling

**ID:** `image-upscaling`  
**Playground:** [image-upscaling](https://aiuxplayground.com/pattern/image-upscaling)  **Related:** cost-estimates, text-to-image-controls

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

Upscale controls with target resolution, cost/time estimate, and preview.

## When to use

Upscale controls with target resolution, cost/time estimate, and preview.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function UpscaleControl({ scale, onScale, onRun }: { scale: number; onScale: (n: number) => void; onRun: () => void }) {
  return (
    <div className="flex items-center gap-control text-2xs">
      {[2, 4].map((n) => <button key={n} type="button" onClick={() => onScale(n)} className={`rounded-control px-control py-dense ${scale === n ? "bg-accent-muted text-accent-ink" : "text-ink-muted"}`}>{n}×</button>)}
      <button type="button" onClick={onRun} className="ml-auto rounded-control bg-accent px-control py-dense text-accent-ink">Upscale</button>
    </div>
  );
}
```
