export type ModelTier = {
  id: string;
  outcome: string;
  version: string;
  locked?: boolean;
};

export type Effort = "low" | "medium" | "high" | "max";

export function ModelModePicker({
  tiers,
  selectedTier,
  effort,
  onTier,
  onEffort,
}: {
  tiers: ModelTier[];
  selectedTier?: string;
  effort: Effort;
  onTier: (id: string) => void;
  onEffort: (e: Effort) => void;
}) {
  return (
    <div
      style={{
        width: 288,
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface-overlay)",
        boxShadow: "0 12px 32px rgba(0,0,0,.4)",
      }}
      role="listbox"
      aria-label="Model and effort"
    >
      <ul style={{ margin: 0, padding: "4px 0", listStyle: "none" }}>
        {tiers.map((t) => {
          const selected = selectedTier === t.id;
          return (
            <li key={t.id} role="option" aria-selected={selected}>
              <button
                type="button"
                disabled={t.locked}
                onClick={() => onTier(t.id)}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 8,
                  padding: "8px 12px",
                  textAlign: "left",
                  opacity: t.locked ? 0.4 : 1,
                  background: selected ? "var(--adk-accent-muted)" : "transparent",
                }}
              >
                <span style={{ fontSize: 12, color: selected ? "var(--adk-accent-ink)" : "var(--adk-ink)" }}>
                  {t.outcome}
                </span>
                <span style={{ fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-faint)" }}>
                  {t.version}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <div style={{ borderTop: "1px solid var(--adk-hairline)", padding: "8px 12px" }}>
        <p style={{ margin: "0 0 6px", fontSize: 10, color: "var(--adk-ink-faint)" }}>Effort</p>
        <div style={{ display: "flex", gap: 4 }}>
          {(["low", "medium", "high", "max"] as const).map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => onEffort(e)}
              style={{
                borderRadius: 6,
                padding: "4px 8px",
                fontSize: 11,
                textTransform: "capitalize",
                background: effort === e ? "var(--adk-accent-muted)" : "transparent",
                color: effort === e ? "var(--adk-accent-ink)" : "var(--adk-ink-muted)",
              }}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
