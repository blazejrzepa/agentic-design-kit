# Conditional Logic

**ID:** `conditional-logic`  
**Playground:** [conditional-logic](https://aiuxplayground.com/pattern/conditional-logic)  **Related:** action-plan, workflow-builder

---

## Purpose

Visual if/then branches in agent workflows so users can inspect and edit decision rules.

## Snippet

```tsx
export function ConditionRow({ when, then }: { when: string; then: string }) {
  return (
    <div className="flex gap-control rounded-control border border-hairline px-control py-dense font-mono text-2xs text-ink-muted">
      <span>if {when}</span><span className="text-ink-faint">→</span><span>{then}</span>
    </div>
  );
}
```
