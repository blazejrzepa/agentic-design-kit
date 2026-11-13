export function RateLimitMeter({
  remaining,
  resetIn,
  tokens,
  cost,
  eta,
}: {
  remaining?: number;
  resetIn?: string;
  tokens?: number;
  cost?: string;
  eta?: string;
}) {
  const low = remaining != null && remaining <= 2;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        borderRadius: 6,
        border: low ? "1px solid rgba(230, 184, 77, 0.5)" : "1px solid var(--adk-hairline)",
        background: low ? "var(--adk-warn-muted)" : "transparent",
        padding: "4px 8px",
        fontFamily: "var(--adk-font-mono)",
        fontSize: 10,
        color: low ? "var(--adk-warn)" : "var(--adk-ink-muted)",
      }}
    >
      {remaining != null && <span>{remaining} left</span>}
      {resetIn && <span>reset {resetIn}</span>}
      {tokens != null && <span>{tokens.toLocaleString()} tok</span>}
      {cost && <span>{cost}</span>}
      {eta && <span>ETA {eta}</span>}
    </div>
  );
}
