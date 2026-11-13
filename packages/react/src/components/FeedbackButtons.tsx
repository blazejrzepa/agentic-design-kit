export function FeedbackButtons({
  value,
  onUp,
  onDown,
}: {
  value?: "up" | "down" | null;
  onUp: () => void;
  onDown: () => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--adk-ink-faint)" }}>
      <button
        type="button"
        onClick={onUp}
        aria-pressed={value === "up"}
        style={{
          padding: "2px 6px",
          color: value === "up" ? "var(--adk-ok)" : undefined,
        }}
      >
        Helpful
      </button>
      <button
        type="button"
        onClick={onDown}
        aria-pressed={value === "down"}
        style={{
          padding: "2px 6px",
          color: value === "down" ? "var(--adk-danger)" : undefined,
        }}
      >
        Not helpful
      </button>
    </div>
  );
}
