# Human Handoff

**ID:** `human-handoff`  
**Playground:** [human-handoff](https://aiuxplayground.com/pattern/human-handoff) · ai-customer-support · escalation-thresholds  
**Related:** `failure-disclosure`, `clarify-before-act`, `disclosure`

---

## Purpose

Escalate from AI to a human (or trusted external app) with **context preserved**: transcript summary, reason, and clear who is speaking after the handoff. Never imply the bot finished what only a human can do.

## Snippet

```tsx
export function HumanHandoffCard({
  reason,
  summary,
  onHandoff,
  onStay,
}: {
  reason: string;
  summary: string;
  onHandoff: () => void;
  onStay: () => void;
}) {
  return (
    <section className="max-w-mandate rounded-panel border border-hairline bg-surface-raised p-panel">
      <p className="text-xs font-medium text-ink">Hand off to a human</p>
      <p className="mt-dense text-xs text-ink-muted">{reason}</p>
      <pre className="mt-control max-h-24 overflow-auto rounded-control bg-canvas p-control font-mono text-2xs text-ink-faint">
        {summary}
      </pre>
      <div className="mt-panel flex justify-end gap-control">
        <button type="button" onClick={onStay} className="text-xs text-ink-muted">
          Keep chatting
        </button>
        <button
          type="button"
          onClick={onHandoff}
          className="rounded-control bg-accent px-panel py-control-2 text-xs text-accent-ink"
        >
          Connect
        </button>
      </div>
    </section>
  );
}
```
