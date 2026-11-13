export function AutonomyBudgetBar({
  used,
  cap,
  unit = "actions",
  eta,
  onPause,
}: {
  used: number;
  cap: number;
  unit?: string;
  eta?: string;
  onPause: () => void;
}) {
  const over = used >= cap;
  const pct = Math.min(100, Math.round((used / Math.max(cap, 1)) * 100));

  return (
    <div
      style={{
        display: "flex",
        height: 32,
        alignItems: "center",
        gap: 8,
        borderRadius: 8,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
        padding: "0 12px",
        fontSize: 11,
      }}
    >
      <span style={{ color: "var(--adk-ink-muted)" }}>Agent running</span>
      <span
        style={{
          fontFamily: "var(--adk-font-mono)",
          fontVariantNumeric: "tabular-nums",
          color: over ? "var(--adk-warn)" : "var(--adk-ink)",
        }}
      >
        {used}/{cap} {unit}
      </span>
      <span
        style={{
          width: 64,
          height: 4,
          borderRadius: 999,
          background: "var(--adk-surface-overlay)",
          overflow: "hidden",
        }}
        aria-hidden
      >
        <span
          style={{
            display: "block",
            width: `${pct}%`,
            height: "100%",
            background: over ? "var(--adk-warn)" : "var(--adk-accent)",
          }}
        />
      </span>
      {eta && <span style={{ color: "var(--adk-ink-faint)" }}>{eta}</span>}
      <button
        type="button"
        onClick={onPause}
        style={{ marginLeft: "auto", color: "var(--adk-ink-muted)", fontSize: 11 }}
      >
        Pause
      </button>
    </div>
  );
}
