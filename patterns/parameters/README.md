# Parameters

**ID:** `parameters`  
**Shape of AI:** https://www.shapeof.ai/pattern-types/tuners  **Related:** model-mode-picker, cost-estimates

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/token-layering)

![token layering og.png](../../assets/screenshots/shapeof/token-layering-og.png)

![token layering ex01 pattern action.webp](../../assets/screenshots/shapeof/token-layering-ex01-pattern-action.webp)

![token layering ex02 inputs_open_input_julius.avif](../../assets/screenshots/shapeof/token-layering-ex02-inputs_open_input_julius.avif)

![token layering ex03 inputs_open_input_lovable.avif](../../assets/screenshots/shapeof/token-layering-ex03-inputs_open_input_lovable.avif)

![token layering ex04 inputs_open_input_personal.avif](../../assets/screenshots/shapeof/token-layering-ex04-inputs_open_input_personal.avif)

![token layering card.webp](../../assets/screenshots/shapeof/token-layering-card.webp)

<!-- shapeof-captures:end -->


![Kit mockup](../../assets/screenshots/kit/kit-parameters-style.jpg)

## Purpose

Expose generation constraints (temperature, length, seed) next to the prompt.

## When to use

Power users need temperature/length/seed control.

## When not to use

Consumer chat where model/effort picker is enough.

## Anatomy

Dense param rows · live cost hint · Reset

## Do / Don't

**Do:** Group advanced behind disclosure; sync with cost-estimates.  
**Don't:** Expose raw JSON walls as the only UI.

## Snippet

```tsx
export function ParamRow({ name, value, onChange }: { name: string; value: number; onChange: (n: number) => void }) {
  return <label className="flex items-center justify-between gap-control text-2xs text-ink-muted"><span>{name}</span><input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-7 w-16 rounded-control border border-hairline bg-canvas px-dense font-mono text-ink" /></label>;
}
```
