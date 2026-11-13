# Rate Limit & Running Meters

**ID:** `rate-limit-meter`  
**Playground:** [rate-limit-warnings](https://aiuxplayground.com/pattern/rate-limit-warnings) · [running-meters](https://aiuxplayground.com/pattern/running-meters)  
**Related:** `cost-estimates`, `autonomy-budget`, `controls`

---

## Purpose

Warn **before** the wall: remaining requests, reset time, live token/cost/ETA meters during a run. Soft warning + upgrade/queue path beats a post-hoc hard error after lost work.

## Snippet

```tsx
export function RateLimitMeter({
  remaining,
  resetIn,
  tokens,
  cost,
  eta,
}: {
  remaining?: number;
  resetIn?: string;
  tokens?: number;
  cost?: string;
  eta?: string;
}) {
  const low = remaining != null && remaining <= 2;
  return (
    <div
      className={`flex flex-wrap items-center gap-control rounded-control border px-control py-dense font-mono text-2xs ${
        low ? "border-warn/50 bg-warn-muted text-warn" : "border-hairline text-ink-muted"
      }`}
    >
      {remaining != null && <span>{remaining} left</span>}
      {resetIn && <span>reset {resetIn}</span>}
      {tokens != null && <span>{tokens.toLocaleString()} tok</span>}
      {cost && <span>{cost}</span>}
      {eta && <span>ETA {eta}</span>}
    </div>
  );
}
```
