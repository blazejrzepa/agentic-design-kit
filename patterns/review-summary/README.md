# Review Summary

**ID:** `review-summary`  
**Playground:** [review-summary](https://aiuxplayground.com/pattern/review-summary)  **Related:** citations, synthesis

---

![Kit mockup](../../assets/screenshots/kit/kit-auth-describe-analytics.jpg)

## Purpose

AI distillation of reviews with citations back to individual reviews.

## When to use

AI distillation of reviews with citations back to individual reviews.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function ReviewSummary({ summary, count }: { summary: string; count: number }) {
  return <div className="rounded-panel border border-hairline p-panel text-xs text-ink"><p>{summary}</p><p className="mt-dense text-2xs text-ink-faint">Based on {count} reviews</p></div>;
}
```
