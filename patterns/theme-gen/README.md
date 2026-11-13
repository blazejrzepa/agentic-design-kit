# Theme Generation

**ID:** `theme-gen`  
**Playground:** [theme-gen](https://aiuxplayground.com/pattern/theme-gen)  **Related:** generative-ui, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-variants-theme-gesture.jpg)

## Purpose

Generate design tokens/theme from prompt while respecting host design system constraints.

## Snippet

```tsx
export function ThemeSwatches({ colors }: { colors: string[] }) {
  return <div className="flex gap-dense">{colors.map((c) => <span key={c} className="size-6 rounded-control border border-hairline" style={{ background: c }} title={c} />)}</div>;
}
```
