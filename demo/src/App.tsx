import { useEffect, useState } from "react";
import {
  ActionPlan,
  AgentPaymentCard,
  AiDisclosureBadge,
  ArtifactPane,
  AutonomyBudgetBar,
  CheckpointsList,
  CitationChip,
  CitationsPanel,
  ClarifyBeforeAct,
  ConnectorChips,
  CopilotInput,
  CostEstimate,
  DualSpeedLayout,
  FailureDisclosure,
  FeedbackButtons,
  FootprintsList,
  GenerativeUiBlock,
  HumanHandoff,
  InlineActionBar,
  MandateApprovalCard,
  MemoryPersonalization,
  ModelModePicker,
  RateLimitMeter,
  ResponseVersionBar,
  RoleFirstValue,
  RunControls,
  SharedSessionBar,
  SmartDiff,
  StreamingThoughtState,
  SuggestionRail,
  VoiceTranscript,
  type Connector,
  type Effort,
  type MemoryItem,
  type SessionPermission,
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
  { id: "s5", label: "Show failure path" },
  { id: "s6", label: "Hand off to human" },
  { id: "s7", label: "Approve agent spend" },
  { id: "s8", label: "Voice listen" },
  { id: "s9", label: "First-value roles" },
  { id: "s10", label: "Memory & tone" },
];

const SOURCES = [
  {
    id: "c1",
    n: 1,
    title: "Dual-Speed Layout — kit",
    quote: "Chat remains the reasoning trail; execution is a live canvas.",
  },
  {
    id: "c2",
    n: 2,
    title: "shapeof.ai · Citations",
    quote: "Ground claims in sources with verify-in-place.",
  },
];

export function App() {
  const [tab, setTab] = useState("diff");
  const [artifactTab, setArtifactTab] = useState("preview");
  const [thoughtOpen, setThoughtOpen] = useState(true);
  const [elapsed, setElapsed] = useState(1.2);
  const [log, setLog] = useState("Ready.");
  const [showClarify, setShowClarify] = useState(false);
  const [showMandate, setShowMandate] = useState(true);
  const [showPlan, setShowPlan] = useState(true);
  const [showFail, setShowFail] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [showVoice, setShowVoice] = useState(false);
  const [showOnboard, setShowOnboard] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [inlinePreview, setInlinePreview] = useState<string | undefined>();
  const [showModel, setShowModel] = useState(false);
  const [tone, setTone] = useState("Neutral");
  const [memories, setMemories] = useState<MemoryItem[]>([
    { id: "m1", text: "Prefers finance@ for Q3 summaries" },
    { id: "m2", text: "Dense Linear-style UI, no soft SaaS chrome" },
  ]);
  const [paused, setPaused] = useState(false);
  const [running, setRunning] = useState(true);
  const [version, setVersion] = useState(1);
  const [effort, setEffort] = useState<Effort>("medium");
  const [tier, setTier] = useState("fast");
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const [permission, setPermission] = useState<SessionPermission>("view");
  const [connectors, setConnectors] = useState<Connector[]>([
    { id: "notion", label: "Notion", status: "expired" },
    { id: "gmail", label: "Gmail", status: "connected" },
    { id: "linear", label: "Linear", status: "connected" },
  ]);

  const [steps, setSteps] = useState<ThoughtStep[]>([
    { id: "1", label: "Parsed intent", status: "done", ms: 180 },
    { id: "2", label: "Searching docs…", status: "running", detail: 'retrieve query="dual speed layout"', ms: 1100 },
    { id: "3", label: "Draft answer", status: "pending" },
  ]);

  useEffect(() => {
    const t = window.setInterval(() => {
      if (!paused) setElapsed((e) => e + 0.1);
    }, 100);
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
      setRunning(false);
    }, 3600);
    return () => {
      clearInterval(t);
      clearTimeout(done);
      clearTimeout(finish);
    };
  }, [paused]);

  return (
    <div className="adk-root" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
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
        <AiDisclosureBadge />
        <RunControls
          running={running}
          paused={paused}
          queueCount={2}
          onStop={() => {
            setRunning(false);
            setLog("stopped");
          }}
          onPause={() => {
            setPaused(true);
            setLog("paused");
          }}
          onResume={() => {
            setPaused(false);
            setLog("resumed");
          }}
        />
        <CostEstimate low={12} high={18} unit="credits" />
        <RateLimitMeter remaining={4} resetIn="12m" tokens={18420} cost="$0.18" eta="8s" />
        <button
          type="button"
          onClick={() => setShowModel((v) => !v)}
          style={{ fontSize: 11, color: "var(--adk-ink-muted)" }}
        >
          Model · {tier}/{effort}
        </button>
        <span style={{ marginLeft: "auto", fontFamily: "var(--adk-font-mono)", fontSize: 10, color: "var(--adk-ink-muted)" }}>
          {log}
        </span>
      </header>

      {showModel && (
        <div style={{ position: "absolute", top: 44, left: 420, zIndex: 30 }}>
          <ModelModePicker
            tiers={[
              { id: "fast", outcome: "Fast answers", version: "flash" },
              { id: "balanced", outcome: "Balanced", version: "sonnet" },
              { id: "deep", outcome: "Deep think", version: "opus", locked: true },
            ]}
            selectedTier={tier}
            effort={effort}
            onTier={(id) => {
              setTier(id);
              setLog(`tier:${id}`);
            }}
            onEffort={(e) => {
              setEffort(e);
              setLog(`effort:${e}`);
            }}
          />
        </div>
      )}

      <div style={{ padding: "8px 12px", borderBottom: "1px solid var(--adk-hairline)" }}>
        <AutonomyBudgetBar
          used={7}
          cap={12}
          unit="actions"
          eta="~90s left"
          onPause={() => {
            setPaused(true);
            setLog("budget:pause");
          }}
        />
      </div>

      <div style={{ flex: 1, minHeight: 0, display: "flex" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
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
                    if (id === "s1") setShowPlan(true);
                    if (id === "s4") setShowClarify(true);
                    if (id === "s2") setShowMandate(true);
                    if (id === "s3") setThoughtOpen(true);
                    if (id === "s5") setShowFail(true);
                    if (id === "s6") setShowHandoff(true);
                    if (id === "s7") setShowPay(true);
                    if (id === "s8") setShowVoice(true);
                    if (id === "s9") setShowOnboard(true);
                    if (id === "s10") setShowMemory(true);
                  }}
                />
                {showOnboard && (
                  <RoleFirstValue
                    roles={[
                      { id: "research", label: "Research", outcome: "Sources + plan" },
                      { id: "write", label: "Write", outcome: "Drafts + diffs" },
                      { id: "ops", label: "Ops", outcome: "Tools + mandates" },
                    ]}
                    onPick={(id) => {
                      setShowOnboard(false);
                      setLog(`role:${id}`);
                    }}
                    onSkip={() => {
                      setShowOnboard(false);
                      setLog("role:skip");
                    }}
                  />
                )}
                <ConnectorChips
                  items={connectors}
                  onToggle={(id) => {
                    setConnectors((list) =>
                      list.map((c) =>
                        c.id === id
                          ? {
                              ...c,
                              status: c.status === "connected" ? "expired" : "connected",
                            }
                          : c
                      )
                    );
                    setLog(`connector:${id}`);
                  }}
                />
                <StreamingThoughtState
                  steps={steps}
                  elapsedSec={elapsed}
                  open={thoughtOpen}
                  onToggle={() => setThoughtOpen((o) => !o)}
                  onStop={() => {
                    setRunning(false);
                    setLog("stopped");
                  }}
                />
                <p style={{ margin: 0, fontSize: 12, color: "var(--adk-ink)", lineHeight: "18px" }}>
                  Dual-speed keeps chat as the trail and execution as the canvas
                  <CitationChip n={1} title={SOURCES[0].title} quote={SOURCES[0].quote} />
                  — citations ground the claim
                  <CitationChip n={2} title={SOURCES[1].title} quote={SOURCES[1].quote} />.
                </p>
                <InlineActionBar
                  preview={inlinePreview}
                  onAction={(a) => {
                    setInlinePreview(`${a}: Dual-speed keeps chat as the trail; execution stays live.`);
                    setLog(`inline:${a}`);
                  }}
                  onAccept={() => {
                    setInlinePreview(undefined);
                    setLog("inline:accept");
                  }}
                  onReject={() => {
                    setInlinePreview(undefined);
                    setLog("inline:reject");
                  }}
                />
                {showVoice && (
                  <VoiceTranscript
                    state="listening"
                    lines={[
                      "User: Draft the Q3 summary for finance.",
                      "Agent: Pulling Notion notes and drafting…",
                    ]}
                    onStop={() => {
                      setShowVoice(false);
                      setLog("voice:stop");
                    }}
                  />
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <ResponseVersionBar
                    index={version}
                    total={3}
                    onPrev={() => setVersion((v) => Math.max(1, v - 1))}
                    onNext={() => setVersion((v) => Math.min(3, v + 1))}
                    onRegenerate={() => {
                      setVersion(3);
                      setLog("regenerate");
                    }}
                  />
                  <FeedbackButtons
                    value={feedback}
                    onUp={() => {
                      setFeedback("up");
                      setLog("feedback:up");
                    }}
                    onDown={() => {
                      setFeedback("down");
                      setLog("feedback:down");
                    }}
                  />
                </div>
                <CitationsPanel sources={SOURCES} onOpen={(id) => setLog(`cite:${id}`)} />
                <GenerativeUiBlock
                  blocks={[
                    { type: "metric", label: "Revenue QoQ", value: "+12%" },
                    { type: "metric", label: "Open actions", value: "3" },
                    {
                      type: "actions",
                      items: [
                        { id: "export", label: "Export MD" },
                        { id: "mandate", label: "Request send" },
                      ],
                    },
                  ]}
                  onAction={(id) => {
                    setLog(`genui:${id}`);
                    if (id === "mandate") setShowMandate(true);
                  }}
                />
                {showMemory && (
                  <MemoryPersonalization
                    tone={tone}
                    tones={["Formal", "Neutral", "Brief"]}
                    memories={memories}
                    onTone={(t) => {
                      setTone(t);
                      setLog(`tone:${t}`);
                    }}
                    onDelete={(id) => {
                      setMemories((m) => m.filter((x) => x.id !== id));
                      setLog(`memory:del:${id}`);
                    }}
                    onPause={() => setLog("memory:pause")}
                  />
                )}
                <SharedSessionBar
                  url="https://kit.local/s/q3-summary-a1b2"
                  permission={permission}
                  onCopy={() => setLog("share:copy")}
                  onPermission={(p) => {
                    setPermission(p);
                    setLog(`share:${p}`);
                  }}
                />
                <CheckpointsList
                  items={[
                    { id: "cp1", at: "09:12", label: "Before Notion retrieve" },
                    { id: "cp2", at: "09:14", label: "Draft ready · pre-mandate" },
                    { id: "cp3", at: "09:16", label: "After finance rewrite" },
                  ]}
                  onRestore={(id) => setLog(`restore:${id}`)}
                />
                <FootprintsList
                  items={[
                    { id: "f1", at: "09:11", summary: "Opened dual-speed session", prompt: "Open dual-speed layout demo" },
                    { id: "f2", at: "09:13", summary: "Retrieved Notion Q3 notes", prompt: "Pull Q3 notes from Notion" },
                    { id: "f3", at: "09:15", summary: "Requested send_email mandate" },
                  ]}
                  onReplay={(prompt) => setLog(`replay:${prompt}`)}
                />
                {showPay && (
                  <AgentPaymentCard
                    amount="$24.00"
                    merchant="Virtual card · kit"
                    item="SerpAPI research batch"
                    expiresIn="expires 2m"
                    onApprove={() => {
                      setShowPay(false);
                      setLog("pay:approve");
                    }}
                    onDecline={() => {
                      setShowPay(false);
                      setLog("pay:decline");
                    }}
                  />
                )}
                {showPlan && (
                  <ActionPlan
                    contractual
                    estimate="~2 min · 14–20 credits"
                    steps={[
                      { id: "a", label: "Retrieve Q3 notes from Notion" },
                      { id: "b", label: "Draft finance-facing summary" },
                      { id: "c", label: "Request send_email mandate" },
                    ]}
                    onEdit={(id) => setLog(`plan-edit:${id}`)}
                    onApprove={() => {
                      setShowPlan(false);
                      setShowMandate(true);
                      setLog("plan:approved");
                    }}
                  />
                )}
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
                {showFail && (
                  <FailureDisclosure
                    title="Can't reach Notion connector"
                    detail="OAuth token expired. Drafting from cached notes only."
                    actions={[
                      { id: "retry", label: "Retry", onClick: () => setLog("fail:retry") },
                      {
                        id: "handoff",
                        label: "Handoff",
                        onClick: () => {
                          setShowFail(false);
                          setShowHandoff(true);
                        },
                      },
                      { id: "dismiss", label: "Dismiss", onClick: () => setShowFail(false) },
                    ]}
                  />
                )}
                {showHandoff && (
                  <HumanHandoff
                    reason="Notion OAuth expired and the user needs a live send."
                    summary={`session: q3-summary\nconnectors: notion=expired gmail=ok\npending: send_email mandate\nlast user: "notify finance"`}
                    onStay={() => setShowHandoff(false)}
                    onHandoff={() => {
                      setShowHandoff(false);
                      setLog("handoff:connected");
                    }}
                  />
                )}
                <div style={{ paddingTop: 8 }}>
                  <CopilotInput
                    results={RESULTS}
                    onRun={(id) => {
                      setLog(`run:${id}`);
                      if (id === "plan") setShowMandate(true);
                      if (id === "diff") setTab("diff");
                    }}
                  />
                </div>
              </div>
            }
            execution={
              tab === "diff" ? (
                <SmartDiff
                  file="src/notify.ts"
                  hunks={[
                    { op: "del", text: "export function notifyTeam() {" },
                    { op: "add", text: "export function notifyFinance() {" },
                    { op: "ctx", text: '  sendEmail({ to: "finance@…" })' },
                    { op: "ctx", text: "}" },
                  ]}
                  onAccept={() => setLog("diff:accept")}
                  onReject={() => setLog("diff:reject")}
                />
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
        <div style={{ width: 320, flexShrink: 0 }}>
          <ArtifactPane
            title="Q3 summary.md"
            tabs={[
              { id: "preview", label: "Preview" },
              { id: "code", label: "Code" },
            ]}
            activeTab={artifactTab}
            onTab={setArtifactTab}
            onExport={() => setLog("artifact:export")}
          >
            {artifactTab === "preview" ? (
              <div style={{ fontSize: 12, color: "var(--adk-ink-muted)", lineHeight: "18px" }}>
                <p style={{ margin: "0 0 8px", color: "var(--adk-ink)", fontWeight: 500 }}>Q3 finance summary</p>
                <p style={{ margin: 0 }}>
                  Revenue +12% QoQ. Open actions: send mandate to finance@, attach q3.pdf, close Notion sync.
                </p>
              </div>
            ) : (
              <pre style={{ margin: 0, fontFamily: "var(--adk-font-mono)", fontSize: 11, color: "var(--adk-ink-muted)" }}>
                {`# Q3 summary\n\n- Revenue +12%\n- Mandate: finance@`}
              </pre>
            )}
          </ArtifactPane>
        </div>
      </div>
    </div>
  );
}
