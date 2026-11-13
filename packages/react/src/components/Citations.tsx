import { useState } from "react";

export type Citation = {
  id: string;
  n: number;
  title: string;
  quote?: string;
  href?: string;
};

export function CitationChip({
  n,
  title,
  quote,
}: {
  n: number;
  title: string;
  quote?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span style={{ position: "relative", display: "inline-flex", verticalAlign: "super" }}>
      <button
        type="button"
        aria-label={`Source ${n}: ${title}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        style={{
          margin: "0 1px",
          borderRadius: 4,
          background: "var(--adk-accent-muted)",
          color: "var(--adk-accent-ink)",
          padding: "0 4px",
          fontFamily: "var(--adk-font-mono)",
          fontSize: 10,
          lineHeight: "14px",
        }}
      >
        {n}
      </button>
      {open && quote && (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            bottom: "100%",
            left: 0,
            zIndex: 20,
            marginBottom: 4,
            width: 256,
            borderRadius: 6,
            border: "1px solid var(--adk-hairline)",
            background: "var(--adk-surface-overlay)",
            padding: 8,
            fontSize: 11,
            lineHeight: "16px",
            color: "var(--adk-ink-muted)",
            boxShadow: "0 8px 24px rgba(0,0,0,.35)",
          }}
        >
          <span style={{ display: "block", marginBottom: 4, fontWeight: 500, color: "var(--adk-ink)" }}>
            {title}
          </span>
          “{quote}”
        </span>
      )}
    </span>
  );
}

export function CitationsPanel({
  sources,
  onOpen,
}: {
  sources: Citation[];
  onOpen?: (id: string) => void;
}) {
  return (
    <aside
      style={{
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          display: "flex",
          height: 32,
          alignItems: "center",
          padding: "0 12px",
          borderBottom: "1px solid var(--adk-hairline)",
          fontSize: 11,
          color: "var(--adk-ink-muted)",
        }}
      >
        Sources · {sources.length}
      </header>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", maxHeight: 200, overflow: "auto" }}>
        {sources.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onOpen?.(s.id)}
              style={{
                display: "flex",
                width: "100%",
                gap: 8,
                padding: "8px 12px",
                textAlign: "left",
                borderBottom: "1px solid var(--adk-hairline)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--adk-font-mono)",
                  fontSize: 10,
                  color: "var(--adk-accent-ink)",
                  background: "var(--adk-accent-muted)",
                  borderRadius: 4,
                  padding: "0 5px",
                  height: 16,
                  lineHeight: "16px",
                }}
              >
                {s.n}
              </span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <span style={{ display: "block", fontSize: 12, color: "var(--adk-ink)" }}>{s.title}</span>
                {s.quote && (
                  <span
                    style={{
                      display: "block",
                      marginTop: 2,
                      fontSize: 10,
                      color: "var(--adk-ink-faint)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.quote}
                  </span>
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
