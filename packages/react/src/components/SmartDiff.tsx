export type DiffHunk = { op: "add" | "del" | "ctx"; text: string };

export function SmartDiff({
  file,
  hunks,
  onAccept,
  onReject,
}: {
  file?: string;
  hunks: DiffHunk[];
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <section
      style={{
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-canvas)",
      }}
    >
      {file && (
        <header
          style={{
            display: "flex",
            height: 28,
            alignItems: "center",
            padding: "0 12px",
            borderBottom: "1px solid var(--adk-hairline)",
            background: "var(--adk-surface)",
            fontFamily: "var(--adk-font-mono)",
            fontSize: 10,
            color: "var(--adk-ink-muted)",
          }}
        >
          {file}
        </header>
      )}
      <pre
        style={{
          margin: 0,
          maxHeight: 224,
          overflow: "auto",
          padding: 12,
          fontFamily: "var(--adk-font-mono)",
          fontSize: 11,
          lineHeight: "16px",
        }}
      >
        {hunks.map((h, i) => (
          <div
            key={i}
            style={{
              background: h.op === "add" ? "var(--adk-diff-add)" : h.op === "del" ? "var(--adk-diff-del)" : undefined,
              color: h.op === "add" ? "var(--adk-ok)" : h.op === "del" ? "var(--adk-danger)" : "var(--adk-ink-muted)",
            }}
          >
            <span style={{ display: "inline-block", width: 12, opacity: 0.7 }}>
              {h.op === "add" ? "+" : h.op === "del" ? "−" : " "}
            </span>
            {h.text}
          </div>
        ))}
      </pre>
      <footer
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 8,
          padding: "8px 12px",
          borderTop: "1px solid var(--adk-hairline)",
          background: "var(--adk-surface)",
        }}
      >
        <button type="button" onClick={onReject} style={{ padding: "4px 8px", fontSize: 12, color: "var(--adk-ink-muted)" }}>
          Reject
        </button>
        <button
          type="button"
          onClick={onAccept}
          style={{
            borderRadius: 6,
            background: "var(--adk-accent)",
            color: "var(--adk-accent-ink)",
            padding: "8px 12px",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          Accept <kbd style={{ marginLeft: 4, opacity: 0.7 }}>⌘↵</kbd>
        </button>
      </footer>
    </section>
  );
}
