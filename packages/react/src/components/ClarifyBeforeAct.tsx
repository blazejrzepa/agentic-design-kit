import { useState } from "react";

export function ClarifyBeforeAct({
  limit,
  questions,
  onContinue,
  onCancel,
}: {
  limit: string;
  questions: { id: string; prompt: string; options: string[] }[];
  onContinue: (answers: Record<string, string>) => void;
  onCancel: () => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const ready = questions.every((q) => answers[q.id]);

  return (
    <section
      style={{
        maxWidth: 480,
        borderRadius: 10,
        border: "1px solid var(--adk-hairline)",
        background: "var(--adk-surface-raised)",
      }}
    >
      <header style={{ padding: "10px 12px", borderBottom: "1px solid var(--adk-hairline)" }}>
        <h2 style={{ margin: 0, fontSize: 13, fontWeight: 500 }}>Before I act</h2>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--adk-ink-muted)" }}>{limit}</p>
      </header>
      <ul style={{ margin: 0, padding: 12, listStyle: "none", display: "grid", gap: 8 }}>
        {questions.map((q) => (
          <li key={q.id}>
            <p style={{ margin: "0 0 4px", fontSize: 12 }}>{q.prompt}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {q.options.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: o }))}
                  style={{
                    borderRadius: 6,
                    border: `1px solid ${answers[q.id] === o ? "var(--adk-accent)" : "var(--adk-hairline)"}`,
                    background: answers[q.id] === o ? "var(--adk-accent-muted)" : "transparent",
                    color: answers[q.id] === o ? "var(--adk-accent-ink)" : "var(--adk-ink-muted)",
                    padding: "4px 8px",
                    fontSize: 10,
                  }}
                >
                  {o}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <footer
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 8,
          padding: "8px 12px",
          borderTop: "1px solid var(--adk-hairline)",
        }}
      >
        <button type="button" onClick={onCancel} style={{ fontSize: 12, color: "var(--adk-ink-muted)" }}>
          Cancel
        </button>
        <button
          type="button"
          disabled={!ready}
          onClick={() => onContinue(answers)}
          style={{
            borderRadius: 6,
            background: "var(--adk-accent)",
            color: "var(--adk-accent-ink)",
            padding: "8px 12px",
            fontSize: 12,
            opacity: ready ? 1 : 0.4,
          }}
        >
          Continue
        </button>
      </footer>
    </section>
  );
}
