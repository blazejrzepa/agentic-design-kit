export type Footprint = {
  id: string;
  at: string;
  summary: string;
  prompt?: string;
};

export function FootprintRow({
  item,
  onReplay,
}: {
  item: Footprint;
  onReplay: (prompt: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 0",
        borderBottom: "1px solid var(--adk-hairline)",
        fontSize: 12,
      }}
    >
      <time
        style={{
          width: 64,
          flexShrink: 0,
          fontFamily: "var(--adk-font-mono)",
          fontSize: 10,
          color: "var(--adk-ink-faint)",
        }}
      >
        {item.at}
      </time>
      <span
        style={{
          minWidth: 0,
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "var(--adk-ink-muted)",
        }}
      >
        {item.summary}
      </span>
      {item.prompt && (
        <button
          type="button"
          onClick={() => onReplay(item.prompt!)}
          style={{ flexShrink: 0, fontSize: 11, color: "var(--adk-accent-ink)" }}
        >
          Replay
        </button>
      )}
    </div>
  );
}

export function FootprintsList({
  items,
  onReplay,
}: {
  items: Footprint[];
  onReplay: (prompt: string) => void;
}) {
  return (
    <section
      style={{
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
        padding: "4px 12px",
      }}
    >
      <header
        style={{
          height: 28,
          display: "flex",
          alignItems: "center",
          fontSize: 11,
          color: "var(--adk-ink-muted)",
        }}
      >
        Audit trail · {items.length}
      </header>
      {items.map((item) => (
        <FootprintRow key={item.id} item={item} onReplay={onReplay} />
      ))}
    </section>
  );
}
