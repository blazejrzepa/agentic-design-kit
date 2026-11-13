export function HumanHandoff({
  reason,
  summary,
  onHandoff,
  onStay,
}: {
  reason: string;
  summary: string;
  onHandoff: () => void;
  onStay: () => void;
}) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 480,
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface-raised)",
        padding: 12,
      }}
    >
      <p style={{ margin: 0, fontSize: 12, fontWeight: 500 }}>Hand off to a human</p>
      <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--adk-ink-muted)" }}>{reason}</p>
      <pre
        style={{
          margin: "8px 0 0",
          maxHeight: 96,
          overflow: "auto",
          borderRadius: 6,
          background: "var(--adk-canvas)",
          padding: 8,
          fontFamily: "var(--adk-font-mono)",
          fontSize: 10,
          color: "var(--adk-ink-faint)",
          whiteSpace: "pre-wrap",
        }}
      >
        {summary}
      </pre>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
        <button type="button" onClick={onStay} style={{ fontSize: 12, color: "var(--adk-ink-muted)", padding: "4px 8px" }}>
          Keep chatting
        </button>
        <button
          type="button"
          onClick={onHandoff}
          style={{
            borderRadius: 6,
            background: "var(--adk-accent)",
            color: "var(--adk-accent-ink)",
            padding: "8px 12px",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          Connect
        </button>
      </div>
    </section>
  );
}
