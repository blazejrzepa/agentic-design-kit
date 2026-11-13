export type PlanStep = { id: string; label: string };

export function ActionPlan({
  steps,
  estimate,
  contractual,
  onApprove,
  onEdit,
}: {
  steps: PlanStep[];
  estimate: string;
  contractual: boolean;
  onApprove: () => void;
  onEdit: (id: string) => void;
}) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 480,
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface-raised)",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          padding: "10px 12px",
          borderBottom: "1px solid var(--adk-hairline)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 13, fontWeight: 500 }}>Plan · {steps.length} steps</h2>
        <span
          style={{
            borderRadius: 6,
            background: contractual ? "var(--adk-accent-muted)" : "var(--adk-surface-overlay)",
            color: contractual ? "var(--adk-accent-ink)" : "var(--adk-ink-muted)",
            padding: "1px 6px",
            fontSize: 10,
          }}
        >
          {contractual ? "contractual" : "advisory"}
        </span>
      </header>
      <ol style={{ margin: 0, padding: "8px 12px", listStyle: "none" }}>
        {steps.map((s, i) => (
          <li key={s.id} style={{ display: "flex", gap: 8, padding: "4px 0", fontSize: 12 }}>
            <span style={{ width: 16, color: "var(--adk-ink-faint)", fontVariantNumeric: "tabular-nums" }}>
              {i + 1}
            </span>
            <button
              type="button"
              onClick={() => onEdit(s.id)}
              style={{ flex: 1, textAlign: "left", color: "var(--adk-ink)" }}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ol>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          padding: "8px 12px",
          borderTop: "1px solid var(--adk-hairline)",
        }}
      >
        <span style={{ fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-muted)" }}>
          {estimate}
        </span>
        {contractual && (
          <button
            type="button"
            onClick={onApprove}
            style={{
              borderRadius: 6,
              background: "var(--adk-accent)",
              color: "var(--adk-accent-ink)",
              padding: "8px 12px",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            Approve plan <kbd style={{ marginLeft: 4, opacity: 0.7 }}>⌘↵</kbd>
          </button>
        )}
      </footer>
    </section>
  );
}
