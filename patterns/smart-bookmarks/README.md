# Smart Bookmarks

**ID:** `smart-bookmarks`  
**Playground:** [smart-bookmarks](https://aiuxplayground.com/pattern/smart-bookmarks)  **Related:** footprints, message-pinning

---

![Kit mockup](../../assets/screenshots/kit/kit-smart-recs-code.jpg)

## Purpose

AI-suggested bookmarks/anchors in long outputs or sessions.

## Snippet

```tsx
export function SmartBookmark({ label, onJump }: { label: string; onJump: () => void }) {
  return <button type="button" onClick={onJump} className="text-left text-2xs text-accent-ink hover:underline">{label}</button>;
}
```
