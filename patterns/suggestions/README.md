# Suggestions

**ID:** `suggestions` · **Shape of AI:** Wayfinders · [source](https://www.shapeof.ai/patterns/suggestions)  
**Related:** `copilot-input`, `onboarding-first-value`, `cost-estimates`  
**Playground:** Prompt Starters · Follow-up Chips · Notion AI categorized starters

![Shape of AI reference](../../assets/screenshots/shapeof/suggestions-og.png)

---

<!-- shapeof-captures:start -->
**Shape of AI captures** · [source](https://www.shapeof.ai/patterns/suggestions)

![suggestions og.png](../../assets/screenshots/shapeof/suggestions-og.png)

![suggestions ex01 cleanshot 2024 02 28 at 12.47.28 2x.png](../../assets/screenshots/shapeof/suggestions-ex01-cleanshot-2024-02-28-at-12.47.28-2x.png)

![suggestions ex02 cleanshot 2025 09 05 at 08.40.41 2x.png](../../assets/screenshots/shapeof/suggestions-ex02-cleanshot-2025-09-05-at-08.40.41-2x.png)

![suggestions ex03 cleanshot 2025 10 09 at 16.09.30 2x.png](../../assets/screenshots/shapeof/suggestions-ex03-cleanshot-2025-10-09-at-16.09.30-2x.png)

![suggestions ex04 cleanshot 2024 07 01 at 13.14.31 2x.png](../../assets/screenshots/shapeof/suggestions-ex04-cleanshot-2024-07-01-at-13.14.31-2x.png)

![suggestions ex05 suggestions miro.png](../../assets/screenshots/shapeof/suggestions-ex05-suggestions-miro.png)

![suggestions ex06 cleanshot 2024 03 20 at 07.16.02 2x.png](../../assets/screenshots/shapeof/suggestions-ex06-cleanshot-2024-03-20-at-07.16.02-2x.png)

![suggestions card.webp](../../assets/screenshots/shapeof/suggestions-card.webp)

<!-- shapeof-captures:end -->

<!-- playground-captures:start -->
**AI UX Playground teardowns** · [hub](https://aiuxplayground.com/teardowns)

![ai-onboarding-first-value__notion__prompt-starter__1.webp](../../assets/screenshots/playground/ai-onboarding-first-value__notion__prompt-starter__1.webp)

![ai-onboarding-first-value__notion__prompt-starter__2.webp](../../assets/screenshots/playground/ai-onboarding-first-value__notion__prompt-starter__2.webp)

![compare__ai-onboarding-first-value__notion__prompt-starter__1.webp](../../assets/screenshots/playground/compare__ai-onboarding-first-value__notion__prompt-starter__1.webp)

![compare__ai-onboarding-first-value__notion__prompt-starter__2.webp](../../assets/screenshots/playground/compare__ai-onboarding-first-value__notion__prompt-starter__2.webp)

![notion__onboarding__notion__prompt-starter__1.webp](../../assets/screenshots/playground/notion__onboarding__notion__prompt-starter__1.webp)

![notion__onboarding__notion__prompt-starter__2.webp](../../assets/screenshots/playground/notion__onboarding__notion__prompt-starter__2.webp)

![lovable__onboarding__lovable__onboarding__theme-picker.webp](../../assets/screenshots/playground/lovable__onboarding__lovable__onboarding__theme-picker.webp)

![lovable__onboarding__lovable__onboarding__name-step.webp](../../assets/screenshots/playground/lovable__onboarding__lovable__onboarding__name-step.webp)

<!-- playground-captures:end -->


![Kit mockup](../../assets/screenshots/kit/kit-suggestions-onboarding.jpg)




## Source references (external)

![SaaSFrame · Claude starter categories](../../assets/screenshots/external/saasframe/claude-new-chat.webp)
![SaaSFrame · Tines AI starter prompts](../../assets/screenshots/external/saasframe/tines-ai-chat-starter-prompts.webp)
![SaaSFrame · Unabyss empty chat](../../assets/screenshots/external/saasframe/unabyss-chat-empty-state.webp)
![SaaSFrame · Glide AI app builder home](../../assets/screenshots/external/saasframe/glide-ai-app-builder-home.webp)
## Purpose

3–6 ranked icebreakers that pre-fill or run a prompt. Forms: **static** (onboarding), **contextual** (page/doc), **adaptive** (user/team history).

## Do / Don't

**Do:** actionable on click; small ranked set; scope to blank/idle moments; confirm if costly.  
**Don't:** show everywhere; 12+ options; irrelevant first-run spam.

## When to use

3–6 ranked icebreakers that pre-fill or run a prompt.

## When not to use

Skip when a denser core kit pattern already covers the job (see Related).

## Anatomy

1) Trigger 2) Dense primary surface 3) Confirm / dismiss

## Do / Don't

**Do:** Keep Linear/Raycast density; keyboard where actions exist; reuse kit tokens.  
**Don't:** Don't invent parallel chrome; don't hide irreversible effects.

## Snippet

```tsx
export function SuggestionRail({
  items,
  onPick,
}: {
  items: { id: string; label: string }[];
  onPick: (id: string) => void;
}) {
  return (
    <ul className="flex flex-wrap gap-dense-2">
      {items.slice(0, 6).map((s) => (
        <li key={s.id}>
          <button
            type="button"
            onClick={() => onPick(s.id)}
            className="rounded-control border border-hairline bg-surface px-control py-control-2 text-xs text-ink-muted hover:border-hairline-strong hover:text-ink"
          >
            {s.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
```
