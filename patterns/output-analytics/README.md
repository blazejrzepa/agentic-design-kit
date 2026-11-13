# Output Analytics

**ID:** `output-analytics`  
**Playground:** [output-analytics](https://aiuxplayground.com/pattern/output-analytics)  **Related:** feedback, footprints

---

![Kit mockup](../../assets/screenshots/kit/kit-auth-describe-analytics.jpg)

## Purpose

Metrics on AI outputs (views, exports, ratings) for product/ops loops.

## Snippet

```tsx
export function OutputStats({ views, exports }: { views: number; exports: number }) {
  return <p className="font-mono text-2xs text-ink-faint">{views} views · {exports} exports</p>;
}
```
