# Infinite Canvas

**ID:** `infinite-canvas`  
**Playground:** [infinite-canvas](https://aiuxplayground.com/pattern/infinite-canvas)  **Related:** dual-speed-layout, artifact-pane, generative-ui

---

## Purpose

Pan/zoom workspace for AI artifacts, nodes, and spatial agent work beyond a linear chat.

## Snippet

```tsx
export function CanvasChrome({ children }: { children: React.ReactNode }) {
  return <div className="relative h-full min-h-[320px] overflow-hidden bg-canvas"><div className="absolute left-panel top-panel z-10 rounded-control border border-hairline bg-surface px-control py-dense text-2xs text-ink-muted">Pan · Scroll zoom</div>{children}</div>;
}
```
