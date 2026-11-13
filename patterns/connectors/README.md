# Connectors

**ID:** `connectors` · **Shape of AI:** Tuners · [source](https://www.shapeof.ai/patterns/connectors)  
**Related:** `citations`, `mandate-approval-card`, `clarify-before-act`, `copilot-input`  
**Teardowns:** Perplexity HITL — split **read-only vs write/delete** Allow controls before the agent runs

![Kit mockup](../../assets/screenshots/kit/kit-connectors.jpg)

![Shape of AI reference](../../assets/screenshots/shapeof/connectors-og.png)

---

## Purpose

Link the agent to external systems of record (Drive, Slack, Jira…). Make **scope, permission, freshness, and read vs write** explicit. Treat retrieved content as **untrusted** (prompt-injection).

## Anatomy

1. Composer chips: `Using: Drive, Slack`  
2. Source picker / scope (workspace, folder)  
3. Status: connected · expired · rate-limited  
4. Kill switch / read-only mode  

## Do / Don't

**Do:** gate tool use from retrieved text behind mandate; deep-link citations; show reconnect.  
**Don't:** silent writes; hide which source influenced an action.

## Snippet

```tsx
type Connector = {
  id: string;
  label: string;
  status: "connected" | "expired" | "error";
};

export function ConnectorChips({
  items,
  onToggle,
}: {
  items: Connector[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-dense">
      <span className="text-2xs text-ink-faint">Using:</span>
      {items.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => onToggle(c.id)}
          className={`rounded-control border px-control py-dense text-2xs ${
            c.status === "connected"
              ? "border-hairline bg-surface-overlay text-ink"
              : "border-warn/40 bg-warn-muted text-warn"
          }`}
        >
          {c.label}
          {c.status !== "connected" && ` · ${c.status}`}
        </button>
      ))}
    </div>
  );
}
```
