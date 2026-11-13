# Return Prediction

**ID:** `return-prediction`  
**Playground:** [return-prediction](https://aiuxplayground.com/pattern/return-prediction)  **Related:** fraud-detection, review-summary

---

## Purpose

Predict return likelihood for items with reasons to inform merchandising/support.

## Snippet

```tsx
export function ReturnRisk({ pct, reason }: { pct: number; reason: string }) {
  return <p className="text-xs text-ink">Return risk {pct}% · <span className="text-ink-muted">{reason}</span></p>;
}
```
