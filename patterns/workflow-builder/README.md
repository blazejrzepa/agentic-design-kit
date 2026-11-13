# Workflow Builder

**ID:** `workflow-builder`  
**Playground:** [workflow-builder](https://aiuxplayground.com/pattern/workflow-builder)  **Related:** action-plan, conditional-logic, mandate-approval-card

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/workflow)

![workflow ex01 cofounder.png](../../assets/screenshots/shapeof/workflow-ex01-cofounder.png)

![workflow ex02 copyai.png](../../assets/screenshots/shapeof/workflow-ex02-copyai.png)

![workflow ex03 eachlabs.png](../../assets/screenshots/shapeof/workflow-ex03-eachlabs.png)

![workflow ex04 lindy2.png](../../assets/screenshots/shapeof/workflow-ex04-lindy2.png)

![workflow ex05 relay4.png](../../assets/screenshots/shapeof/workflow-ex05-relay4.png)

![workflow ex06 respell5.png](../../assets/screenshots/shapeof/workflow-ex06-respell5.png)

![workflow card.webp](../../assets/screenshots/shapeof/workflow-card.webp)

<!-- shapeof-captures:end -->


![Kit mockup](../../assets/screenshots/kit/kit-workflow-builder.jpg)


## Source references (external)

![SaaSFrame · Tines workflow workspace](../../assets/screenshots/external/saasframe/tines-workflow-workspace.webp)
![SaaSFrame · Tines personal workflow library](../../assets/screenshots/external/saasframe/tines-personal-workflow-library.webp)

### Source notes (SaaSFrame · Tines)

- Prompt input often sits inside a workflow canvas; keep composer scope tied to the selected runbook.

## Purpose

Node/step builder for multi-tool agent workflows with inspectable edges and HITL nodes.

## When to use

Multi-step agent pipelines need authoring.

## When not to use

Single-tool chat.

## Anatomy

Nodes · edges · HITL nodes · run

## Do / Don't

**Do:** Inspectable steps; test single node.  
**Don't:** Hidden branches that fire without preview.

## Snippet

```tsx
export function WorkflowNode({ title, kind }: { title: string; kind: string }) {
  return <div className="rounded-panel border border-hairline bg-surface px-panel py-control"><p className="text-2xs text-ink-faint">{kind}</p><p className="text-xs text-ink">{title}</p></div>;
}
```
