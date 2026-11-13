# Agent Inbox

**ID:** `agent-inbox`  
**Sources:** AI Design Guide · Claude Code agent view · Warp agents  
**Related:** `background-agent`, `clarify-before-act`, `human-handoff`

![Kit mockup](../../assets/screenshots/kit/kit-agent-inbox.jpg)

---

<!-- aidesign-captures:start -->
**AI Design Guide** · [Agentic UX Patterns](https://www.aidesign.guide/agentic-ux-patterns)

![agent-inbox-needs-input_claude-code.webp](../../assets/screenshots/external/aidesign/agent-inbox-needs-input_claude-code.webp)

![agent-on-standby-for-assignment_plain.webp](../../assets/screenshots/external/aidesign/agent-on-standby-for-assignment_plain.webp)

![agent-working-composer_chatgpt.webp](../../assets/screenshots/external/aidesign/agent-working-composer_chatgpt.webp)

![assign-issue-to-copilot_github.webp](../../assets/screenshots/external/aidesign/assign-issue-to-copilot_github.webp)

![delegate-issue-to-agent_linear.webp](../../assets/screenshots/external/aidesign/delegate-issue-to-agent_linear.webp)

![multi-agent-subagents_replit.webp](../../assets/screenshots/external/aidesign/multi-agent-subagents_replit.webp)

![multi-agent-dashboard_warp.webp](../../assets/screenshots/external/aidesign/multi-agent-dashboard_warp.webp)

<!-- aidesign-captures:end -->

<!-- saasframe-expand:start -->
**SaaSFrame AI captures** (expanded) · [saasframe.io](https://www.saasframe.io/patterns)

![claude-recent-chats.webp](../../assets/screenshots/external/saasframe/claude-recent-chats.webp)

![claude-recent-chats-2.webp](../../assets/screenshots/external/saasframe/claude-recent-chats-2.webp)

![claude-recent-chats-3.webp](../../assets/screenshots/external/saasframe/claude-recent-chats-3.webp)

<!-- saasframe-expand:end -->



## Source references (external)

![SaaSFrame · Claude recent chats list](../../assets/screenshots/external/saasframe/claude-recent-chats.webp)
![SaaSFrame · Unabyss context chat](../../assets/screenshots/external/saasframe/unabyss-context-chat.webp)
## Purpose

Dispatcher for **parallel agent sessions** grouped by status: Needs input · Working · Completed · Failed — human answers whichever is blocked.

## Status tokens

Use the same words/colors in inbox, notification, and session header.

## Snippet

```tsx
type AgentStatus = "needs_input" | "working" | "completed" | "failed";

export function AgentInbox({
  items,
  onOpen,
}: {
  items: { id: string; title: string; status: AgentStatus; meta?: string }[];
  onOpen: (id: string) => void;
}) {
  const color: Record<AgentStatus, string> = {
    needs_input: "text-warn",
    working: "text-accent-ink",
    completed: "text-ok",
    failed: "text-danger",
  };
  return (
    <ul className="divide-y divide-hairline rounded-panel border border-hairline bg-surface">
      {items.map((a) => (
        <li key={a.id}>
          <button
            type="button"
            onClick={() => onOpen(a.id)}
            className="flex w-full items-center gap-control px-panel py-control text-left text-xs"
          >
            <span className={`font-mono text-2xs uppercase ${color[a.status]}`}>
              {a.status.replace("_", " ")}
            </span>
            <span className="min-w-0 flex-1 truncate text-ink">{a.title}</span>
            {a.meta && <span className="font-mono text-2xs text-ink-faint">{a.meta}</span>}
          </button>
        </li>
      ))}
    </ul>
  );
}
```
