# Workflow Builder

**ID:** `workflow-builder`  
**Playground:** [workflow-builder](https://aiuxplayground.com/pattern/workflow-builder)  **Related:** action-plan, conditional-logic, mandate-approval-card

---

![Kit mockup](../../assets/screenshots/kit/kit-workflow-builder.jpg)

## Purpose

Node/step builder for multi-tool agent workflows with inspectable edges and HITL nodes.

## Snippet

```tsx
export function WorkflowNode({ title, kind }: { title: string; kind: string }) {
  return <div className="rounded-panel border border-hairline bg-surface px-panel py-control"><p className="text-2xs text-ink-faint">{kind}</p><p className="text-xs text-ink">{title}</p></div>;
}
```
