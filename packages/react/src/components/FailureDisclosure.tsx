export function FailureDisclosure({
  title,
  detail,
  actions,
}: {
  title: string;
  detail?: string;
  actions: { id: string; label: string; onClick: () => void }[];
}) {
  return (
    <section
      style={{
        borderRadius: 10,
        border: "1px solid rgba(230, 184, 77, 0.4)",
        background: "var(--adk-warn-muted)",
        padding: "10px 12px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "var(--adk-warn)" }}>{title}</h2>
      {detail && (
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--adk-ink-muted)" }}>{detail}</p>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
        {actions.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={a.onClick}
            style={{
              borderRadius: 6,
              border: "1px solid var(--adk-hairline)",
              background: "var(--adk-surface)",
              padding: "4px 8px",
              fontSize: 11,
              color: "var(--adk-ink)",
            }}
          >
            {a.label}
          </button>
        ))}
      </div>
    </section>
  );
}
