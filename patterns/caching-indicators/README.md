# Caching Indicators

**ID:** `caching-indicators`  
**Playground:** [caching-indicators](https://aiuxplayground.com/pattern/caching-indicators)  **Related:** cost-estimates, rate-limit-meter

---

## Purpose

Honest labels when a reply/result came from cache vs fresh inference (speed + cost expectations).

## Snippet

```tsx
export function CacheBadge({ cached }: { cached: boolean }) {
  return <span className="rounded-control border border-hairline px-dense-2 py-px font-mono text-2xs text-ink-faint">{cached ? "cached" : "fresh"}</span>;
}
```
