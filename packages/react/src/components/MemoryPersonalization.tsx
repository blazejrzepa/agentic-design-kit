export type MemoryItem = { id: string; text: string };

export function MemoryPersonalization({
  tone,
  tones,
  memories,
  onTone,
  onDelete,
  onPause,
}: {
  tone: string;
  tones: string[];
  memories: MemoryItem[];
  onTone: (t: string) => void;
  onDelete: (id: string) => void;
  onPause: () => void;
}) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 480,
        display: "grid",
        gap: 16,
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
        padding: 12,
      }}
    >
      <div>
        <h2 style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 500, color: "var(--adk-ink-muted)" }}>Tone</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {tones.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onTone(t)}
              style={{
                borderRadius: 6,
                padding: "4px 8px",
                fontSize: 11,
                background: tone === t ? "var(--adk-accent-muted)" : "transparent",
                color: tone === t ? "var(--adk-accent-ink)" : "var(--adk-ink-muted)",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <h2 style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "var(--adk-ink-muted)" }}>Memory</h2>
          <button type="button" onClick={onPause} style={{ fontSize: 11, color: "var(--adk-warn)" }}>
            Pause
          </button>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {memories.map((m, i) => (
            <li
              key={m.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 0",
                borderTop: i === 0 ? undefined : "1px solid var(--adk-hairline)",
                fontSize: 12,
                color: "var(--adk-ink)",
              }}
            >
              <span
                style={{
                  minWidth: 0,
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {m.text}
              </span>
              <button
                type="button"
                onClick={() => onDelete(m.id)}
                style={{ flexShrink: 0, fontSize: 11, color: "var(--adk-ink-faint)" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
