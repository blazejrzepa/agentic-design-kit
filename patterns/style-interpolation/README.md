# Style Interpolation

**ID:** `style-interpolation`  
**Playground:** [style-interpolation](https://aiuxplayground.com/pattern/style-interpolation)  **Related:** style-transfer, text-to-image-controls

---

![Kit mockup](../../assets/screenshots/kit/kit-variants-theme-gesture.jpg)

## Purpose

Blend between two styles/references with a slider before generate.

## When to use

Blend between two styles/references with a slider before generate.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function StyleMix({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return <input type="range" min={0} max={100} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-accent" />;
}
```
