import { useState } from "react";

export type DiffLine = { op: "add" | "del" | "ctx"; text: string };

export type MandateDecision =
  | { type: "approve"; budget: number }
  | { type: "reject"; message?: string }
  | { type: "edit" };

export function MandateApprovalCard({
  title,
  tool,
  reason,
  diff,
  budgetMax = 1,
  defaultBudget = 0.4,
  onDecide,
}: {
  title: string;
  tool: string;
  reason: string;
  diff: DiffLine[];
  budgetMax?: number;
  defaultBudget?: number;
  onDecide: (d: MandateDecision) => void;
}) {
  const [budget, setBudget] = useState(defaultBudget);
  const over = budget > budgetMax;

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 480,
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid var(--adk-hairline-strong)",
        background: "var(--adk-surface-raised)",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
          padding: "10px 12px",
          borderBottom: "1px solid var(--adk-hairline)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <h2 style={{ margin: 0, fontSize: 13, fontWeight: 500 }}>{title}</h2>
          <p style={{ margin: "4px 0 0", fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-faint)" }}>
            {tool}
          </p>
        </div>
        <span
          style={{
            alignSelf: "flex-start",
            borderRadius: 6,
            background: "var(--adk-warn-muted)",
            color: "var(--adk-warn)",
            padding: "1px 6px",
            fontSize: 10,
          }}
        >
          pending mandate
        </span>
      </header>
      <p style={{ margin: 0, padding: "8px 12px", borderBottom: "1px solid var(--adk-hairline)", fontSize: 12, color: "var(--adk-ink-muted)" }}>
        {reason}
      </p>
      <div
        style={{
          maxHeight: 160,
          overflow: "auto",
          background: "var(--adk-canvas)",
          padding: "8px 12px",
          fontFamily: "var(--adk-font-mono)",
          fontSize: 10,
          lineHeight: "16px",
        }}
      >
        {diff.map((l, i) => (
          <div
            key={i}
            style={{
              background: l.op === "add" ? "var(--adk-diff-add)" : l.op === "del" ? "var(--adk-diff-del)" : undefined,
              color: l.op === "add" ? "var(--adk-ok)" : l.op === "del" ? "var(--adk-danger)" : "var(--adk-ink-muted)",
            }}
          >
            <span style={{ display: "inline-block", width: 12, opacity: 0.7 }}>
              {l.op === "add" ? "+" : l.op === "del" ? "−" : " "}
            </span>
            {l.text}
          </div>
        ))}
      </div>
      <div style={{ padding: "8px 12px", borderTop: "1px solid var(--adk-hairline)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 10, color: "var(--adk-ink-muted)" }}>
          <span>Budget</span>
          <span style={{ color: over ? "var(--adk-warn)" : "var(--adk-ink)" }}>
            ${budget.toFixed(2)} / ${budgetMax.toFixed(2)} max
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={budgetMax * 1.5}
          step={0.05}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          style={{ width: "100%", accentColor: "var(--adk-accent)" }}
        />
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
          padding: "8px 12px",
          borderTop: "1px solid var(--adk-hairline)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={() => onDecide({ type: "reject" })} style={{ padding: "4px 8px", fontSize: 12, color: "var(--adk-ink-muted)" }}>
            Reject
          </button>
          <button type="button" onClick={() => onDecide({ type: "edit" })} style={{ padding: "4px 8px", fontSize: 12, color: "var(--adk-ink-muted)" }}>
            Edit args
          </button>
        </div>
        <button
          type="button"
          disabled={over}
          onClick={() => onDecide({ type: "approve", budget })}
          style={{
            borderRadius: 6,
            background: "var(--adk-accent)",
            color: "var(--adk-accent-ink)",
            padding: "8px 12px",
            fontSize: 12,
            fontWeight: 500,
            opacity: over ? 0.4 : 1,
          }}
        >
          Approve <kbd style={{ marginLeft: 4, opacity: 0.7 }}>⌘↵</kbd>
        </button>
      </footer>
    </section>
  );
}
