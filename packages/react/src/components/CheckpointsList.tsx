export type Checkpoint = {
  id: string;
  at: string;
  label: string;
};

export function CheckpointsList({
  items,
  onRestore,
}: {
  items: Checkpoint[];
  onRestore: (id: string) => void;
}) {
  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
        overflow: "hidden",
      }}
    >
      {items.map((c, i) => (
        <li
          key={c.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            fontSize: 12,
            borderTop: i === 0 ? undefined : "1px solid var(--adk-hairline)",
          }}
        >
          <span style={{ fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-faint)" }}>
            {c.at}
          </span>
          <span
            style={{
              minWidth: 0,
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "var(--adk-ink)",
            }}
          >
            {c.label}
          </span>
          <button
            type="button"
            onClick={() => onRestore(c.id)}
            style={{ flexShrink: 0, fontSize: 11, color: "var(--adk-accent-ink)" }}
          >
            Restore
          </button>
        </li>
      ))}
    </ul>
  );
}
