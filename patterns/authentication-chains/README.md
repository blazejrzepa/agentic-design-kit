# Authentication Chains

**ID:** `authentication-chains`  
**Playground:** [authentication-chains](https://aiuxplayground.com/pattern/authentication-chains)  **Related:** connectors, failure-disclosure

---

## Purpose

Multi-step auth for connectors/tools (OAuth → scopes → confirm) with clear progress and failure recovery.

## Snippet

```tsx
export function AuthChainSteps({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="flex gap-control text-2xs">
      {steps.map((s, i) => (
        <li key={s} className={i === current ? "text-accent-ink" : i < current ? "text-ok" : "text-ink-faint"}>{i + 1}. {s}</li>
      ))}
    </ol>
  );
}
```
