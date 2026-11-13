# Scheduled Tasks

**ID:** `scheduled-tasks`  
**Playground:** [scheduled-tasks](https://aiuxplayground.com/pattern/scheduled-tasks)  **Related:** action-plan, autonomy-budget, controls

---

## Purpose

Schedule recurring/deferred agent jobs with next-run visibility and cancel.

## Snippet

```tsx
export function ScheduledTaskRow({ title, next, onCancel }: { title: string; next: string; onCancel: () => void }) {
  return (
    <div className="flex items-center gap-control border-b border-hairline py-control text-xs">
      <span className="flex-1 text-ink">{title}</span>
      <span className="font-mono text-2xs text-ink-faint">{next}</span>
      <button type="button" onClick={onCancel} className="text-2xs text-danger">Cancel</button>
    </div>
  );
}
```
