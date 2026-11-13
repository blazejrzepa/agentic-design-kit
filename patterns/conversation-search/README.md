# Conversation Search

**ID:** `conversation-search`  
**Playground:** [conversation-search](https://aiuxplayground.com/pattern/conversation-search)  **Related:** footprints, conversation-tags

---

![Kit mockup](../../assets/screenshots/kit/kit-search-filters.jpg)

## Purpose

Search across threads/messages with filters (date, model, tags) and jump-to-hit.

## When to use

Search across threads/messages with filters (date, model, tags) and jump-to-hit.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function ConversationSearch({ q, onChange }: { q: string; onChange: (v: string) => void }) {
  return <input value={q} onChange={(e) => onChange(e.target.value)} placeholder="Search conversations…" className="h-8 w-full rounded-control border border-hairline bg-canvas px-control text-xs text-ink outline-none" />;
}
```
