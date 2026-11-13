# Image Upscaling

**ID:** `image-upscaling`  
**Playground:** [image-upscaling](https://aiuxplayground.com/pattern/image-upscaling)  **Related:** cost-estimates, text-to-image-controls

---

![Kit mockup](../../assets/screenshots/kit/kit-media-tools.jpg)

## Purpose

Upscale controls with target resolution, cost/time estimate, and preview.

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
