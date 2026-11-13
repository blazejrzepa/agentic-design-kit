import { cn } from "../lib/cn";

export type ThoughtStep = {
  id: string;
  label: string;
  status: "pending" | "running" | "done" | "error" | "skipped";
  detail?: string;
  ms?: number;
};

const glyph = {
  pending: "○",
  running: "●",
  done: "✓",
  error: "!",
  skipped: "–",
} as const;

export function StreamingThoughtState({
  steps,
  elapsedSec,
  open,
  onToggle,
  onStop,
}: {
  steps: ThoughtStep[];
  elapsedSec: number;
  open: boolean;
  onToggle: () => void;
  onStop?: () => void;
}) {
  const running = steps.some((s) => s.status === "running");
  const title = running ? "Thinking" : `Thought for ${elapsedSec.toFixed(1)}s`;

  return (
    <section
      className="adk-thought"
      style={{
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
      }}
    >
      <header
        style={{
          display: "flex",
          height: 32,
          alignItems: "center",
          gap: 8,
          padding: "0 12px",
        }}
      >
        <button
          type="button"
          onClick={onToggle}
          style={{
            display: "flex",
            minWidth: 0,
            flex: 1,
            alignItems: "center",
            gap: 8,
            textAlign: "left",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "var(--adk-accent)",
              opacity: running ? undefined : 1,
              animation: running ? "adk-pulse 1.2s ease-in-out infinite" : undefined,
            }}
          />
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--adk-ink-muted)" }}>
            {title}
          </span>
          <span style={{ fontSize: 10, color: "var(--adk-ink-faint)" }}>{open ? "▾" : "▸"}</span>
        </button>
        {running && onStop && (
          <button
            type="button"
            onClick={onStop}
            style={{ fontSize: 10, color: "var(--adk-ink-faint)" }}
          >
            Stop
          </button>
        )}
      </header>
      {open && (
        <ol style={{ borderTop: "1px solid var(--adk-hairline)", margin: 0, padding: "8px 12px" }}>
          {steps.map((s, idx) => (
            <li
              key={s.id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                padding: "4px 0",
                listStyle: "none",
              }}
            >
              <span style={{ width: 16, color: "var(--adk-ink-faint)", fontVariantNumeric: "tabular-nums" }}>
                {idx + 1}
              </span>
              <span
                className={cn(s.status === "running" && "adk-pulse")}
                style={{
                  width: 12,
                  color:
                    s.status === "done"
                      ? "var(--adk-ok)"
                      : s.status === "error"
                        ? "var(--adk-danger)"
                        : s.status === "running"
                          ? "var(--adk-accent)"
                          : "var(--adk-ink-faint)",
                }}
              >
                {glyph[s.status]}
              </span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <span>{s.label}</span>
                  {s.ms != null && (
                    <span style={{ fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-faint)" }}>
                      {(s.ms / 1000).toFixed(1)}s
                    </span>
                  )}
                </div>
                {s.detail && (
                  <pre
                    style={{
                      margin: "4px 0 0",
                      overflow: "auto",
                      fontFamily: "var(--adk-font-mono)",
                      fontSize: 10,
                      color: "var(--adk-ink-muted)",
                    }}
                  >
                    {s.detail}
                  </pre>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
      <style>{`@keyframes adk-pulse{0%,100%{opacity:.45}50%{opacity:1}}`}</style>
    </section>
  );
}
