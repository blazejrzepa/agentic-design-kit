# Performance Optimization Tips

**ID:** `performance-optimization-tips`  
**Playground:** [performance-optimization-tips](https://aiuxplayground.com/pattern/performance-optimization-tips)  **Related:** cost-estimates, model-mode-picker, suggestions

---

![Kit mockup](../../assets/screenshots/kit/kit-variants-theme-gesture.jpg)

## Purpose

Contextual tips to reduce cost/latency (shorter context, cheaper model, cache).

## When to use

Contextual tips to reduce cost/latency (shorter context, cheaper model, cache).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function PerfTip({ tip, onApply }: { tip: string; onApply: () => void }) {
  return (
    <div className="flex items-center gap-control rounded-control bg-surface-overlay px-control py-dense text-2xs text-ink-muted">
      <span className="flex-1">{tip}</span>
      <button type="button" onClick={onApply} className="text-accent-ink">Apply</button>
    </div>
  );
}
```
