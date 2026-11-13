# Knowledge Graph

**ID:** `knowledge-graph`  
**Playground:** [knowledge-graph](https://aiuxplayground.com/pattern/knowledge-graph)  **Related:** citations, footprints

---

![Kit mockup](../../assets/screenshots/kit/kit-canvas-graph.jpg)

## Purpose

Visual/list graph of entities and relations grounding an AI answer for exploration.

## When to use

Visual/list graph of entities and relations grounding an AI answer for exploration.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function KnowledgeEdge({ from, rel, to }: { from: string; rel: string; to: string }) {
  return <p className="font-mono text-2xs text-ink-muted">{from} —{rel}→ {to}</p>;
}
```
