import type { ReactNode } from "react";

export function ArtifactPane({
  title,
  tabs,
  activeTab,
  onTab,
  onExport,
  children,
}: {
  title: string;
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTab: (id: string) => void;
  onExport?: () => void;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        display: "flex",
        height: "100%",
        minWidth: 0,
        flexDirection: "column",
        borderLeft: "1px solid var(--adk-hairline)",
        background: "var(--adk-canvas)",
      }}
    >
      <header
        style={{
          display: "flex",
          height: 40,
          alignItems: "center",
          gap: 8,
          padding: "0 12px",
          borderBottom: "1px solid var(--adk-hairline)",
          background: "var(--adk-surface)",
        }}
      >
        <h2
          style={{
            margin: 0,
            minWidth: 0,
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {title}
        </h2>
        <div style={{ display: "flex", gap: 4 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onTab(t.id)}
              style={{
                borderRadius: 6,
                padding: "4px 8px",
                fontSize: 11,
                background: activeTab === t.id ? "var(--adk-accent-muted)" : "transparent",
                color: activeTab === t.id ? "var(--adk-accent-ink)" : "var(--adk-ink-muted)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        {onExport && (
          <button
            type="button"
            onClick={onExport}
            style={{ fontSize: 11, color: "var(--adk-ink-faint)", padding: "4px 6px" }}
          >
            Export
          </button>
        )}
      </header>
      <div style={{ flex: 1, minHeight: 0, overflow: "auto", padding: 12 }}>{children}</div>
    </section>
  );
}
