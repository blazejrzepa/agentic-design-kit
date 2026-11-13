import { useEffect, useState } from "react";
import {
  ClarifyBeforeAct,
  CopilotInput,
  DualSpeedLayout,
  MandateApprovalCard,
  StreamingThoughtState,
  SuggestionRail,
  type ThoughtStep,
} from "@agentic-design-kit/react";

const RESULTS = [
  { id: "plan", title: "Draft Q3 summary email", subtitle: "tool · compose", shortcut: "↵" },
  { id: "search", title: "Search docs for dual-speed layout", shortcut: "⌘↵" },
  { id: "diff", title: "Open pending file diff", shortcut: "⌘D" },
];

const SUGGESTIONS = [
  { id: "s1", label: "Plan a research run" },
  { id: "s2", label: "Approve pending mandate" },
  { id: "s3", label: "Show thinking trace" },
  { id: "s4", label: "Clarify before send" },
];

export function App() {
  const [tab, setTab] = useState("diff");
  const [thoughtOpen, setThoughtOpen] = useState(true);
  const [elapsed, setElapsed] = useState(1.2);
  const [log, setLog] = useState("Ready.");
  const [showClarify, setShowClarify] = useState(false);
  const [showMandate, setShowMandate] = useState(true);

  const [steps, setSteps] = useState<ThoughtStep[]>([
    { id: "1", label: "Parsed intent", status: "done", ms: 180 },
    { id: "2", label: "Searching docs…", status: "running", detail: 'retrieve query="dual speed layout"', ms: 1100 },
    { id: "3", label: "Draft answer", status: "pending" },
  ]);

  useEffect(() => {
    const t = window.setInterval(() => setElapsed((e) => e + 0.1), 100);
    const done = window.setTimeout(() => {
      setSteps((s) =>
        s.map((x) =>
          x.id === "2"
            ? { ...x, status: "done" as const }
            : x.id === "3"
              ? { ...x, status: "running" as const }
              : x
        )
      );
    }, 2200);
    const finish = window.setTimeout(() => {
      setSteps((s) => s.map((x) => (x.id === "3" ? { ...x, status: "done" as const, ms: 640 } : x)));
    }, 3600);
    return () => {
      clearInterval(t);
      clearTimeout(done);
      clearTimeout(finish);
    };
  }, []);

  return (
    <div className="adk-root" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          display: "flex",
          height: 40,
          alignItems: "center",
          gap: 12,
          padding: "0 12px",
          borderBottom: "1px solid var(--adk-hairline)",
          background: "var(--adk-surface)",
        }}
      >
        <strong style={{ fontSize: 12 }}>Agentic Design Kit</strong>
        <span style={{ fontSize: 11, color: "var(--adk-ink-faint)" }}>live composition demo</span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-muted)" }}>
          {log}
        </span>
      </header>

      <div style={{ flex: 1, minHeight: 0 }}>
        <DualSpeedLayout
          status="3 tools · 1 pending"
          activeTab={tab}
          onTab={setTab}
          executionTabs={[
            { id: "diff", label: "Diff" },
            { id: "terminal", label: "Terminal" },
            { id: "preview", label: "Preview" },
          ]}
          chat={
            <div style={{ display: "grid", gap: 12 }}>
              <SuggestionRail
                items={SUGGESTIONS}
                onPick={(id) => {
                  setLog(`suggestion:${id}`);
                  if (id === "s4") setShowClarify(true);
                  if (id === "s2") setShowMandate(true);
                  if (id === "s3") setThoughtOpen(true);
                }}
              />
              <StreamingThoughtState
                steps={steps}
                elapsedSec={elapsed}
                open={thoughtOpen}
                onToggle={() => setThoughtOpen((o) => !o)}
                onStop={() => setLog("stopped")}
              />
              {showClarify && (
                <ClarifyBeforeAct
                  limit="I can draft the email, but not send it from this surface."
                  questions={[
                    {
                      id: "to",
                      prompt: "Who should receive it?",
                      options: ["finance@", "team@", "both"],
                    },
                    {
                      id: "tone",
                      prompt: "Tone?",
                      options: ["Formal", "Neutral", "Brief"],
                    },
                  ]}
                  onCancel={() => setShowClarify(false)}
                  onContinue={(a) => {
                    setShowClarify(false);
                    setShowMandate(true);
                    setLog(`clarify ${JSON.stringify(a)}`);
                  }}
                />
              )}
              {showMandate && (
                <MandateApprovalCard
                  title="Send email to finance@"
                  tool="send_email"
                  reason="User asked to notify finance of the Q3 summary."
                  diff={[
                    { op: "del", text: "to: team@" },
                    { op: "add", text: "to: finance@" },
                    { op: "add", text: 'body: "Q3 summary attached…"' },
                    { op: "ctx", text: "attachments: q3.pdf" },
                  ]}
                  onDecide={(d) => {
                    setLog(`mandate:${d.type}`);
                    if (d.type !== "edit") setShowMandate(false);
                  }}
                />
              )}
              <div style={{ paddingTop: 8 }}>
                <CopilotInput
                  results={RESULTS}
                  onRun={(id) => {
                    setLog(`run:${id}`);
                    if (id === "plan") setShowMandate(true);
                  }}
                />
              </div>
            </div>
          }
          execution={
            tab === "diff" ? (
              <pre
                style={{
                  margin: 0,
                  fontFamily: "var(--adk-font-mono)",
                  fontSize: 11,
                  lineHeight: "16px",
                  color: "var(--adk-ink-muted)",
                }}
              >
                <span style={{ color: "var(--adk-danger)", background: "var(--adk-diff-del)" }}>
                  − export function notifyTeam() {"{"}
                  {"\n"}
                </span>
                <span style={{ color: "var(--adk-ok)", background: "var(--adk-diff-add)" }}>
                  + export function notifyFinance() {"{"}
                  {"\n"}
                </span>
                {"  sendEmail({ to: \"finance@…\" })\n}\n"}
              </pre>
            ) : tab === "terminal" ? (
              <pre style={{ margin: 0, fontFamily: "var(--adk-font-mono)", fontSize: 11, color: "var(--adk-ink-muted)" }}>
                $ agent run --mandate pending{"\n"}
                waiting for human approval…
              </pre>
            ) : (
              <p style={{ margin: 0, color: "var(--adk-ink-muted)", fontSize: 12 }}>
                Preview pane — bind host artifacts here (docs, browser, files).
              </p>
            )
          }
        />
      </div>
    </div>
  );
}
