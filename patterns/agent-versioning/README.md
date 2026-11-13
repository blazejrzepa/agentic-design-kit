# Agent Versioning

**ID:** `agent-versioning`  
**Playground:** [agent-versioning](https://aiuxplayground.com/pattern/agent-versioning)  **Related:** footprints, checkpoints-restore

---

## Purpose

Pin, compare, and roll back agent/prompt/tool configs so runs stay reproducible.

## Snippet

```tsx
export function AgentVersionPin({ version, onRollback }: { version: string; onRollback: () => void }) {
  return (
    <div className="flex items-center gap-control text-2xs">
      <span className="font-mono text-ink-muted">{version}</span>
      <button type="button" onClick={onRollback} className="text-accent-ink hover:underline">Roll back</button>
    </div>
  );
}
```
