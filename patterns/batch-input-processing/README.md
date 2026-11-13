# Batch Input Processing

**ID:** `batch-input-processing`  
**Playground:** [batch-input-processing](https://aiuxplayground.com/pattern/batch-input-processing)  **Related:** controls, rate-limit-meter, autonomy-budget

---

![Kit mockup](../../assets/screenshots/kit/kit-batch-queue.jpg)

## Purpose

Queue many files/rows for the same AI job with per-item status and aggregate cancel.

## Snippet

```tsx
export function BatchQueue({ items }: { items: { id: string; name: string; status: string }[] }) {
  return (
    <ul className="divide-y divide-hairline rounded-panel border border-hairline bg-surface">
      {items.map((i) => (
        <li key={i.id} className="flex justify-between px-panel py-control text-xs"><span className="truncate text-ink">{i.name}</span><span className="font-mono text-2xs text-ink-faint">{i.status}</span></li>
      ))}
    </ul>
  );
}
```
