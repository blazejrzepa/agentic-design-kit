# Performance Optimization Tips

**ID:** `performance-optimization-tips`  
**Playground:** [performance-optimization-tips](https://aiuxplayground.com/pattern/performance-optimization-tips)  **Related:** cost-estimates, model-mode-picker, suggestions

---

## Purpose

Contextual tips to reduce cost/latency (shorter context, cheaper model, cache).

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
