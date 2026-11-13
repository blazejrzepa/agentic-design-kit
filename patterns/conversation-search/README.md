# Conversation Search

**ID:** `conversation-search`  
**Playground:** [conversation-search](https://aiuxplayground.com/pattern/conversation-search)  **Related:** footprints, conversation-tags

---

![Kit mockup](../../assets/screenshots/kit/kit-search-filters.jpg)

## Purpose

Search across threads/messages with filters (date, model, tags) and jump-to-hit.

## Snippet

```tsx
export function ConversationSearch({ q, onChange }: { q: string; onChange: (v: string) => void }) {
  return <input value={q} onChange={(e) => onChange(e.target.value)} placeholder="Search conversations…" className="h-8 w-full rounded-control border border-hairline bg-canvas px-control text-xs text-ink outline-none" />;
}
```
