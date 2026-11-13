# Caching Indicators

**ID:** `caching-indicators`  
**Playground:** [caching-indicators](https://aiuxplayground.com/pattern/caching-indicators)  **Related:** cost-estimates, rate-limit-meter

---

![Kit mockup](../../assets/screenshots/kit/kit-misc-chrome.jpg)

## Purpose

Honest labels when a reply/result came from cache vs fresh inference (speed + cost expectations).

## When to use

Honest labels when a reply/result came from cache vs fresh inference (speed + cost expectations).

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function CacheBadge({ cached }: { cached: boolean }) {
  return <span className="rounded-control border border-hairline px-dense-2 py-px font-mono text-2xs text-ink-faint">{cached ? "cached" : "fresh"}</span>;
}
```
