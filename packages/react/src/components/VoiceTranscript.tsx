export type VoiceState = "listening" | "processing" | "speaking";

export function VoiceTranscript({
  state,
  lines,
  onStop,
}: {
  state: VoiceState;
  lines: string[];
  onStop: () => void;
}) {
  const live = state === "listening" || state === "speaking";

  return (
    <section
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
          justifyContent: "space-between",
          padding: "0 12px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: state === "listening" ? "var(--adk-danger)" : "var(--adk-accent)",
              animation: live ? "adk-pulse 1.2s ease-in-out infinite" : undefined,
            }}
          />
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--adk-ink-faint)",
            }}
          >
            {state}
          </span>
        </span>
        <button type="button" onClick={onStop} style={{ fontSize: 11, color: "var(--adk-danger)" }}>
          Stop
        </button>
      </header>
      <div
        style={{
          maxHeight: 160,
          overflow: "auto",
          borderTop: "1px solid var(--adk-hairline)",
          padding: "8px 12px",
          fontSize: 12,
          color: "var(--adk-ink)",
        }}
      >
        {lines.map((l, i) => (
          <p key={i} style={{ margin: 0, padding: "4px 0" }}>
            {l}
          </p>
        ))}
      </div>
      <style>{`@keyframes adk-pulse{0%,100%{opacity:.45}50%{opacity:1}}`}</style>
    </section>
  );
}
