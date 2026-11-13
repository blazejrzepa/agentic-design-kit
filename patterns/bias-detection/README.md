# Bias Detection

**ID:** `bias-detection`  
**Playground:** [bias-detection](https://aiuxplayground.com/pattern/bias-detection)  **Related:** disclosure, failure-disclosure, feedback

---

![Kit mockup](../../assets/screenshots/kit/kit-risk-bias-fraud.jpg)

## Purpose

Surface potential bias/fairness flags on outputs with explainable cues and remediation actions.

## When to use

Surface potential bias/fairness flags on outputs with explainable cues and remediation actions.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function BiasFlag({ note, onReview }: { note: string; onReview: () => void }) {
  return (
    <div className="flex items-start gap-control rounded-control border border-warn/40 bg-warn-muted px-control py-dense text-2xs text-warn">
      <span className="flex-1">{note}</span>
      <button type="button" onClick={onReview} className="underline">Review</button>
    </div>
  );
}
```
