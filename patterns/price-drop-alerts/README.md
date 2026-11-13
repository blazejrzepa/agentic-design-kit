# Price Drop Alerts

**ID:** `price-drop-alerts`  
**Playground:** [price-drop-alerts](https://aiuxplayground.com/pattern/price-drop-alerts)  **Related:** agent-payment, scheduled-tasks

---

![Kit mockup](../../assets/screenshots/kit/kit-commerce-pack.jpg)

## Purpose

Subscribe to AI-monitored price drops with threshold controls.

## When to use

Subscribe to AI-monitored price drops with threshold controls.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

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
