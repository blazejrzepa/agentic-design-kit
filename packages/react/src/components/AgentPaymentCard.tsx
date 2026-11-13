export function AgentPaymentCard({
  amount,
  merchant,
  item,
  expiresIn,
  onApprove,
  onDecline,
}: {
  amount: string;
  merchant: string;
  item: string;
  expiresIn?: string;
  onApprove: () => void;
  onDecline: () => void;
}) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 480,
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid var(--adk-hairline-strong)",
        background: "var(--adk-surface-raised)",
      }}
    >
      <header style={{ padding: "10px 12px", borderBottom: "1px solid var(--adk-hairline)" }}>
        <p
          style={{
            margin: 0,
            fontSize: 10,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--adk-ink-faint)",
          }}
        >
          Spend request
        </p>
        <p style={{ margin: "4px 0 0", fontSize: 16, fontWeight: 500 }}>{amount}</p>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--adk-ink-muted)" }}>
          {merchant} · {item}
          {expiresIn ? ` · ${expiresIn}` : ""}
        </p>
      </header>
      <footer style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "8px 12px" }}>
        <button type="button" onClick={onDecline} style={{ padding: "4px 8px", fontSize: 12, color: "var(--adk-ink-muted)" }}>
          Decline
        </button>
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
          Approve <kbd style={{ marginLeft: 4, opacity: 0.7 }}>⌘↵</kbd>
        </button>
      </footer>
    </section>
  );
}
