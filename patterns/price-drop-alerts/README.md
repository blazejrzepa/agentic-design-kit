# Price Drop Alerts

**ID:** `price-drop-alerts`  
**Playground:** [price-drop-alerts](https://aiuxplayground.com/pattern/price-drop-alerts)  **Related:** agent-payment, scheduled-tasks

---

## Purpose

Subscribe to AI-monitored price drops with threshold controls.

## Snippet

```tsx
export function PriceAlertForm({ threshold, onChange, onSave }: { threshold: string; onChange: (v: string) => void; onSave: () => void }) {
  return (
    <div className="flex gap-dense">
      <input value={threshold} onChange={(e) => onChange(e.target.value)} className="h-8 w-24 rounded-control border border-hairline bg-canvas px-control font-mono text-xs" />
      <button type="button" onClick={onSave} className="rounded-control bg-accent px-control text-2xs text-accent-ink">Alert me</button>
    </div>
  );
}
```
