export type SessionPermission = "view" | "comment" | "edit";

export function SharedSessionBar({
  url,
  permission,
  onCopy,
  onPermission,
}: {
  url: string;
  permission: SessionPermission;
  onCopy: () => void;
  onPermission: (p: SessionPermission) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface)",
        padding: "8px 12px",
      }}
    >
      <code
        style={{
          minWidth: 0,
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontFamily: "var(--adk-font-mono)",
          fontSize: 10,
          color: "var(--adk-ink-muted)",
        }}
      >
        {url}
      </code>
      <select
        value={permission}
        onChange={(e) => onPermission(e.target.value as SessionPermission)}
        style={{
          borderRadius: 6,
          border: "1px solid var(--adk-hairline)",
          background: "var(--adk-canvas)",
          padding: "2px 6px",
          fontSize: 11,
          color: "var(--adk-ink)",
        }}
      >
        <option value="view">View</option>
        <option value="comment">Comment</option>
        <option value="edit">Edit</option>
      </select>
      <button type="button" onClick={onCopy} style={{ fontSize: 11, color: "var(--adk-accent-ink)" }}>
        Copy
      </button>
    </div>
  );
}
