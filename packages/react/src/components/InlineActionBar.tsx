const DEFAULTS = ["Shorten", "Expand", "Rewrite", "Tone", "Translate"] as const;

export type InlineAction = (typeof DEFAULTS)[number];

export function InlineActionBar({
  actions = DEFAULTS,
  onAction,
  onAccept,
  onReject,
  preview,
}: {
  actions?: readonly InlineAction[];
  onAction: (a: InlineAction) => void;
  onAccept?: () => void;
  onReject?: () => void;
  preview?: string;
}) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          display: "flex",
          gap: 4,
          borderRadius: 8,
          border: "1px solid var(--adk-hairline)",
          background: "var(--adk-surface-overlay)",
          padding: 4,
          boxShadow: "0 8px 24px rgba(0,0,0,.35)",
        }}
        role="toolbar"
        aria-label="Inline edit actions"
      >
        {actions.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => onAction(a)}
            style={{
              borderRadius: 6,
              padding: "4px 8px",
              fontSize: 11,
              color: "var(--adk-ink-muted)",
            }}
          >
            {a}
          </button>
        ))}
      </div>
      {preview != null && (
        <div
          style={{
            maxWidth: 420,
            borderRadius: 8,
            border: "1px solid var(--adk-hairline)",
            background: "var(--adk-accent-muted)",
            padding: "8px 12px",
            fontSize: 12,
            color: "var(--adk-ink)",
          }}
        >
          {preview}
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button type="button" onClick={onAccept} style={{ fontSize: 11, color: "var(--adk-ok)" }}>
              Accept ↵
            </button>
            <button type="button" onClick={onReject} style={{ fontSize: 11, color: "var(--adk-ink-faint)" }}>
              Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
