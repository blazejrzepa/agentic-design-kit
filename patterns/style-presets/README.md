# Style Presets

**ID:** `style-presets`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/tuners  **Related:** memory-personalization, style-transfer

---

![Kit mockup](../../assets/screenshots/kit/kit-parameters-style.jpg)

## Purpose

Preset and saved styles for tone/aesthetic reuse (Shape of AI Tuners).

## Snippet

```tsx
export function StylePresets({ presets, active, onPick }: { presets: string[]; active: string; onPick: (p: string) => void }) {
  return <div className="flex flex-wrap gap-dense">{presets.map((p) => <button key={p} type="button" onClick={() => onPick(p)} className={`rounded-control px-control py-dense text-2xs ${active === p ? "bg-accent-muted text-accent-ink" : "text-ink-muted"}`}>{p}</button>)}</div>;
}
```
