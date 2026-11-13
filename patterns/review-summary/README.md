# Review Summary

**ID:** `review-summary`  
**Playground:** [review-summary](https://aiuxplayground.com/pattern/review-summary)  **Related:** citations, synthesis

---

## Purpose

AI distillation of reviews with citations back to individual reviews.

## Snippet

```tsx
export function ReviewSummary({ summary, count }: { summary: string; count: number }) {
  return <div className="rounded-panel border border-hairline p-panel text-xs text-ink"><p>{summary}</p><p className="mt-dense text-2xs text-ink-faint">Based on {count} reviews</p></div>;
}
```
