export function RunControls({
  running,
  paused,
  queueCount = 0,
  onStop,
  onPause,
  onResume,
}: {
  running: boolean;
  paused: boolean;
  queueCount?: number;
  onStop: () => void;
  onPause: () => void;
  onResume: () => void;
}) {
  if (!running && !paused) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        borderRadius: 8,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface-raised)",
        padding: "4px 6px",
      }}
    >
      <button
        type="button"
        onClick={onStop}
        style={{
          borderRadius: 6,
          padding: "4px 8px",
          fontSize: 11,
          color: "var(--adk-danger)",
          background: "var(--adk-danger-muted)",
        }}
      >
        Stop <kbd style={{ marginLeft: 4, opacity: 0.7 }}>⎋</kbd>
      </button>
      <button
        type="button"
        onClick={paused ? onResume : onPause}
        style={{
          borderRadius: 6,
          padding: "4px 8px",
          fontSize: 11,
          color: "var(--adk-ink-muted)",
        }}
      >
        {paused ? "Resume" : "Pause"}
      </button>
      {queueCount > 0 && (
        <span style={{ fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-faint)", paddingRight: 4 }}>
          queue {queueCount}
        </span>
      )}
    </div>
  );
}
