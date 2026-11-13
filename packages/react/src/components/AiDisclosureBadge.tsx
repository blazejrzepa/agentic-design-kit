export function AiDisclosureBadge({ verb = "AI" }: { verb?: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: 6,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface-overlay)",
        padding: "1px 6px",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--adk-ink-muted)",
      }}
    >
      {verb}
    </span>
  );
}
