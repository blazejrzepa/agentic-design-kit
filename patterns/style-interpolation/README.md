# Style Interpolation

**ID:** `style-interpolation`  
**Playground:** [style-interpolation](https://aiuxplayground.com/pattern/style-interpolation)  **Related:** style-transfer, text-to-image-controls

---

![Kit mockup](../../assets/screenshots/kit/kit-variants-theme-gesture.jpg)

## Purpose

Blend between two styles/references with a slider before generate.

## Snippet

```tsx
export function StyleMix({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return <input type="range" min={0} max={100} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-accent" />;
}
```
