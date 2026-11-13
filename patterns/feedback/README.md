# Feedback

**ID:** `feedback`  
**Playground:** [feedback-loops](https://aiuxplayground.com/pattern/feedback-loops) · message-reactions  
**Related:** `response-versions`, `citations`, `failure-disclosure`

---

![Kit mockup](../../assets/screenshots/kit/kit-follow-up-feedback.jpg)

## Purpose

Tight thumbs / comment capture on AI answers without breaking density. Route negative feedback into repair (`response-versions`, `clarify-before-act`) instead of a dead-end.

## Snippet

```tsx
export function FeedbackRow({
  onUp,
  onDown,
}: {
  onUp: () => void;
  onDown: () => void;
}) {
  return (
    <div className="flex items-center gap-dense text-2xs text-ink-faint">
      <button type="button" onClick={onUp} className="hover:text-ok">
        Helpful
      </button>
      <button type="button" onClick={onDown} className="hover:text-danger">
        Not helpful
      </button>
    </div>
  );
}
```
