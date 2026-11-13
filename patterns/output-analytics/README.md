# Output Analytics

**ID:** `output-analytics`  
**Playground:** [output-analytics](https://aiuxplayground.com/pattern/output-analytics)  **Related:** feedback, footprints

---

![Kit mockup](../../assets/screenshots/kit/kit-auth-describe-analytics.jpg)

## Purpose

Metrics on AI outputs (views, exports, ratings) for product/ops loops.

## When to use

Metrics on AI outputs (views, exports, ratings) for product/ops loops.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function OutputStats({ views, exports }: { views: number; exports: number }) {
  return <p className="font-mono text-2xs text-ink-faint">{views} views · {exports} exports</p>;
}
```
