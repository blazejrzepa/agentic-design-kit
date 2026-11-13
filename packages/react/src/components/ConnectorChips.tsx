export type Connector = {
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
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 10, color: "var(--adk-ink-faint)" }}>Using:</span>
      {items.map((c) => {
        const ok = c.status === "connected";
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onToggle(c.id)}
            style={{
              borderRadius: 6,
              border: ok ? "1px solid var(--adk-hairline)" : "1px solid rgba(230, 184, 77, 0.4)",
              background: ok ? "var(--adk-surface-overlay)" : "var(--adk-warn-muted)",
              color: ok ? "var(--adk-ink)" : "var(--adk-warn)",
              padding: "4px 8px",
              fontSize: 11,
            }}
          >
            {c.label}
            {!ok && ` · ${c.status}`}
          </button>
        );
      })}
    </div>
  );
}
