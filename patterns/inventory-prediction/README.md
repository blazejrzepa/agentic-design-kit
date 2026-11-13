# Inventory Prediction

**ID:** `inventory-prediction`  
**Playground:** [inventory-prediction](https://aiuxplayground.com/pattern/inventory-prediction)  **Related:** generative-ui, confidence

---

![Kit mockup](../../assets/screenshots/kit/kit-auth-describe-analytics.jpg)

## Purpose

Forecast stock/demand with confidence range and recommended actions.

## When to use

Forecast stock/demand with confidence range and recommended actions.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function InventoryForecast({ sku, low, high }: { sku: string; low: number; high: number }) {
  return <p className="font-mono text-xs text-ink">{sku}: {low}–{high} units</p>;
}
```
