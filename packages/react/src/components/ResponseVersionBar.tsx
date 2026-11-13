export function ResponseVersionBar({
  index,
  total,
  onPrev,
  onNext,
  onRegenerate,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onRegenerate: () => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--adk-ink-muted)" }}>
      <button
        type="button"
        onClick={onPrev}
        disabled={index <= 1}
        style={{ opacity: index <= 1 ? 0.3 : 1, padding: "2px 6px" }}
        aria-label="Previous version"
      >
        ‹
      </button>
      <span style={{ fontFamily: "var(--adk-font-mono)", fontVariantNumeric: "tabular-nums" }}>
        {index}/{total}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={index >= total}
        style={{ opacity: index >= total ? 0.3 : 1, padding: "2px 6px" }}
        aria-label="Next version"
      >
        ›
      </button>
      <button type="button" onClick={onRegenerate} style={{ marginLeft: 4, padding: "2px 6px" }}>
        Regenerate
      </button>
    </div>
  );
}
