export type RoleOption = { id: string; label: string; outcome: string };

export function RoleFirstValue({
  roles,
  onPick,
  onSkip,
  title = "What should the agent do for you?",
}: {
  roles: RoleOption[];
  onPick: (id: string) => void;
  onSkip: () => void;
  title?: string;
}) {
  return (
    <section style={{ width: "100%", maxWidth: 520, margin: "0 auto", padding: "16px 12px" }}>
      <header
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <h1 style={{ margin: 0, fontSize: 13, fontWeight: 500 }}>{title}</h1>
        <button type="button" onClick={onSkip} style={{ fontSize: 11, color: "var(--adk-ink-faint)" }}>
          Skip
        </button>
      </header>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 8,
          margin: 0,
          padding: 0,
          listStyle: "none",
        }}
      >
        {roles.map((r) => (
          <li key={r.id}>
            <button
              type="button"
              onClick={() => onPick(r.id)}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: 10,
                border: "1px solid var(--adk-hairline)",
                background: "var(--adk-surface)",
                padding: "12px 8px",
                textAlign: "left",
              }}
            >
              <span style={{ display: "block", fontSize: 12, color: "var(--adk-ink)" }}>{r.label}</span>
              <span style={{ display: "block", marginTop: 4, fontSize: 10, color: "var(--adk-ink-faint)" }}>
                {r.outcome}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
