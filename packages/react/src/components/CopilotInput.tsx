import { useMemo, useState } from "react";

export type CopilotResult = {
  id: string;
  title: string;
  subtitle?: string;
  shortcut?: string;
};

export function CopilotInput({
  results,
  onRun,
  placeholder = "Ask, run a command, or @mention context…",
}: {
  results: CopilotResult[];
  onRun: (id: string) => void;
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [panel, setPanel] = useState(false);

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return results.slice(0, 8);
    return results.filter((r) => r.title.toLowerCase().includes(n)).slice(0, 8);
  }, [q, results]);

  return (
    <div style={{ width: "100%", maxWidth: 640 }}>
      <div
        style={{
          overflow: "hidden",
          borderRadius: 12,
          background: "var(--adk-surface-overlay)",
          boxShadow: "0 0 0 1px var(--adk-hairline), 0 16px 48px rgba(0,0,0,.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 44,
            alignItems: "center",
            gap: 8,
            padding: "0 12px",
            borderBottom: "1px solid var(--adk-hairline)",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "var(--adk-ink-faint)",
            }}
          >
            Agent
          </span>
          <input
            autoFocus
            value={q}
            placeholder={placeholder}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              }
              if (e.key === "Enter" && filtered[active]) onRun(filtered[active].id);
              if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setPanel((p) => !p);
              }
              if (e.key === "Escape") setQ("");
            }}
            style={{
              flex: 1,
              height: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
              color: "var(--adk-ink)",
            }}
          />
          <kbd
            style={{
              borderRadius: 6,
              border: "1px solid var(--adk-hairline)",
              padding: "1px 6px",
              color: "var(--adk-ink-faint)",
            }}
          >
            ⌘K
          </kbd>
        </div>
        <ul role="listbox" style={{ margin: 0, padding: "4px 0", maxHeight: 288, overflow: "auto", listStyle: "none" }}>
          {filtered.map((r, i) => (
            <li key={r.id}>
              <button
                type="button"
                role="option"
                aria-selected={i === active}
                onMouseEnter={() => setActive(i)}
                onClick={() => onRun(r.id)}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 12px",
                  textAlign: "left",
                  background: i === active ? "var(--adk-accent-muted)" : "transparent",
                  color: i === active ? "var(--adk-accent-ink)" : "var(--adk-ink)",
                }}
              >
                <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.title}
                </span>
                <kbd style={{ fontSize: 10, color: "var(--adk-ink-faint)" }}>{r.shortcut ?? "↵"}</kbd>
              </button>
            </li>
          ))}
        </ul>
        {panel && (
          <div
            style={{
              borderTop: "1px solid var(--adk-hairline)",
              background: "var(--adk-surface)",
              padding: "8px 12px",
              fontSize: 12,
              color: "var(--adk-ink-muted)",
            }}
          >
            Pin · Copy link · Open Dual-Speed · Set model
          </div>
        )}
      </div>
    </div>
  );
}
