export function CostEstimate({
  label = "Est.",
  low,
  high,
  unit = "credits",
}: {
  label?: string;
  low: number;
  high: number;
  unit?: string;
}) {
  const text = low === high ? `${low} ${unit}` : `${low}–${high} ${unit}`;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "var(--adk-font-mono)",
        fontSize: 10,
        color: "var(--adk-ink-muted)",
      }}
    >
      <span style={{ color: "var(--adk-ink-faint)" }}>{label}</span>
      {text}
    </span>
  );
}
