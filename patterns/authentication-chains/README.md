# Authentication Chains

**ID:** `authentication-chains`  
**Playground:** [authentication-chains](https://aiuxplayground.com/pattern/authentication-chains)  **Related:** connectors, failure-disclosure

---

![Kit mockup](../../assets/screenshots/kit/kit-auth-describe-analytics.jpg)

## Purpose

Multi-step auth for connectors/tools (OAuth → scopes → confirm) with clear progress and failure recovery.

## When to use

Multi-step auth for connectors/tools (OAuth → scopes → confirm) with clear progress and failure recovery.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

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
