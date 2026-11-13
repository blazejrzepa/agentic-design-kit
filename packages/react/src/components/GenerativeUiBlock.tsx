export type GenBlock =
  | { type: "metric"; label: string; value: string }
  | { type: "actions"; items: { id: string; label: string }[] };

export function GenerativeUiBlock({
  blocks,
  onAction,
}: {
  blocks: GenBlock[];
  onAction?: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: "grid",
        gap: 8,
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
        padding: 12,
      }}
    >
      {blocks.map((b, i) =>
        b.type === "metric" ? (
          <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", fontSize: 12 }}>
            <span style={{ color: "var(--adk-ink-muted)" }}>{b.label}</span>
            <span style={{ fontFamily: "var(--adk-font-mono)", color: "var(--adk-ink)" }}>{b.value}</span>
          </div>
        ) : (
          <div key={i} style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {b.items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => onAction?.(it.id)}
                style={{
                  borderRadius: 6,
                  background: "var(--adk-accent-muted)",
                  color: "var(--adk-accent-ink)",
                  padding: "4px 8px",
                  fontSize: 11,
                }}
              >
                {it.label}
              </button>
            ))}
          </div>
        )
      )}
    </div>
  );
}
