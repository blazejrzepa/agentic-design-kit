# Theme Generation

**ID:** `theme-gen`  
**Playground:** [theme-gen](https://aiuxplayground.com/pattern/theme-gen)  **Related:** generative-ui, disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-variants-theme-gesture.jpg)

## Purpose

Generate design tokens/theme from prompt while respecting host design system constraints.

## When to use

Generate design tokens/theme from prompt while respecting host design system constraints.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function ThemeSwatches({ colors }: { colors: string[] }) {
  return <div className="flex gap-dense">{colors.map((c) => <span key={c} className="size-6 rounded-control border border-hairline" style={{ background: c }} title={c} />)}</div>;
}
```
