# Parameters

**ID:** `parameters`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/tuners  **Related:** model-mode-picker, cost-estimates

---

![Kit mockup](../../assets/screenshots/kit/kit-parameters-style.jpg)

## Purpose

Expose generation constraints (temperature, length, seed) next to the prompt.

## Snippet

```tsx
export function ParamRow({ name, value, onChange }: { name: string; value: number; onChange: (n: number) => void }) {
  return <label className="flex items-center justify-between gap-control text-2xs text-ink-muted"><span>{name}</span><input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-7 w-16 rounded-control border border-hairline bg-canvas px-dense font-mono text-ink" /></label>;
}
```
