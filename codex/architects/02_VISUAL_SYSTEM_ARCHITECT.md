# 02_VISUAL_SYSTEM_ARCHITECT.md - Visual System Governance

## Purpose

Use this architect when a task touches typography, spacing, cards, colors, surfaces, hierarchy, page rhythm, or anything that changes visual polish.

The goal is to prevent random design drift and keep the site visually cohesive.

---

## Core Visual Principle

Do not solve weak hierarchy by adding more visual surfaces.

Before adding a new card, dashboard, badge row, or decorative component, first evaluate:

1. Can typography hierarchy solve it?
2. Can spacing solve it?
3. Can the existing surface be improved?
4. Is there duplicated proof nearby?
5. Would removing an element make the section feel more premium?

---

## Desired Visual Language

The site should feel like:

- Graphite analyst workspace
- Premium security briefing
- Technical but calm
- Dense only where density has purpose
- Evidence-first, not decoration-first

It should avoid:

- Overly blue/cyan one-note styling
- Neon hacker visuals
- Gratuitous glow
- Excessive gradients
- Too many same-sized cards
- Everything being boxed
- Dashboard surfaces for every proof point

---

## Typography Rules

Use typography to create hierarchy before adding layout complexity.

Recommended hierarchy:

- Page title / hero: largest and calmest
- Role/value line: strong first-read signal
- Section headings: clear but not oversized
- Card headings: compact and scannable
- Labels: small, restrained, often mono
- Body text: readable and not overly compressed

Avoid:

- Every heading being the same weight
- Too many uppercase labels
- Overusing mono text
- Tiny muted text for important proof
- Line lengths that feel cramped

---

## Spacing Rules

Whitespace should communicate confidence.

Use:

- Generous section separation on desktop
- Tighter but still breathable mobile spacing
- More vertical rhythm between story sections
- Less card density per viewport
- Consistent gutters through shared containers

Avoid:

- Stacking too many equal-weight cards
- Cramped mobile first viewport
- Large empty areas without intention
- Dense proof blocks without hierarchy

---

## Surface and Card Rules

Cards should have specific jobs.

Use cards for:

- Case-study summaries
- Evidence blocks
- Contact actions
- Resume snapshots
- Tool groupings
- Metrics when the metric needs a visual surface

Avoid cards for:

- Every paragraph
- Every label
- Every repeated metric
- Visual filler
- Proof already shown nearby

If a page feels too basic, vary rhythm with:

- Editorial text blocks
- Wider proof surfaces
- Asymmetric layouts
- Section breaks
- Timeline or evidence flow
- Fewer, stronger cards

---

## Color and Depth Rules

Preserve the graphite analyst-workspace direction.

Use accent colors to communicate categories or severity, not just decoration.

Depth should be:

- Subtle
- Functional
- Consistent
- Stronger only for primary proof surfaces or hover/focus states

Avoid:

- Competing glows
- Bright neon edges
- Unexplained accent colors
- Random shadow intensity
- New colors that are not tied to the existing system

---

## Duplicate Proof Rule

Before adding or keeping a proof surface, ask:

```text
Is this claim, metric, tool list, or workflow already shown nearby?
```

If yes:

- Improve the existing surface
- Move the proof to a better location
- Merge the proof into a stronger section
- Remove the weaker duplicate

Do not stack visual cards just because they look good in isolation.
