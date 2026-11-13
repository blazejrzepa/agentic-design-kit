export function SuggestionRail({
  items,
  onPick,
}: {
  items: { id: string; label: string }[];
  onPick: (id: string) => void;
}) {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: 0, padding: 0, listStyle: "none" }}>
      {items.slice(0, 6).map((s) => (
        <li key={s.id}>
          <button
            type="button"
            onClick={() => onPick(s.id)}
            style={{
              borderRadius: 6,
              border: "1px solid var(--adk-hairline)",
              background: "var(--adk-surface)",
              padding: "8px 10px",
              fontSize: 12,
              color: "var(--adk-ink-muted)",
            }}
          >
            {s.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
