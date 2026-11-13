import type { ReactNode } from "react";

export function DualSpeedLayout({
  chat,
  execution,
  executionTabs,
  activeTab,
  onTab,
  status,
  title = "Session",
}: {
  chat: ReactNode;
  execution: ReactNode;
  executionTabs: { id: string; label: string }[];
  activeTab: string;
  onTab: (id: string) => void;
  status?: string;
  title?: string;
}) {
  return (
    <div
      className="adk-root"
      style={{
        display: "flex",
        height: "100%",
        minHeight: 480,
        background: "var(--adk-canvas)",
        color: "var(--adk-ink)",
      }}
    >
      <section
        style={{
          display: "flex",
          width: "100%",
          maxWidth: 420,
          flexShrink: 0,
          flexDirection: "column",
          borderRight: "1px solid var(--adk-hairline)",
          background: "var(--adk-surface)",
        }}
      >
        <header
          style={{
            display: "flex",
            height: 40,
            alignItems: "center",
            padding: "0 12px",
            borderBottom: "1px solid var(--adk-hairline)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "var(--adk-ink-muted)" }}>{title}</h1>
        </header>
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: 12 }}>{chat}</div>
      </section>

      <section style={{ display: "flex", minWidth: 0, flex: 1, flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            height: 40,
            alignItems: "center",
            gap: 4,
            padding: "0 12px",
            borderBottom: "1px solid var(--adk-hairline)",
          }}
        >
          {executionTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onTab(t.id)}
              style={{
                borderRadius: 6,
                padding: "4px 8px",
                fontSize: 12,
                background: activeTab === t.id ? "var(--adk-accent-muted)" : "transparent",
                color: activeTab === t.id ? "var(--adk-accent-ink)" : "var(--adk-ink-muted)",
              }}
            >
              {t.label}
            </button>
          ))}
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "var(--adk-font-mono)",
              fontSize: 10,
              color: "var(--adk-ink-faint)",
            }}
          >
            {status}
          </span>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "var(--adk-canvas)", padding: 12 }}>
          {execution}
        </div>
      </section>
    </div>
  );
}
