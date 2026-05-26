# 03_MOTION_SYSTEM_ARCHITECT.md - Motion System Governance

## Purpose

Use this architect when a task touches animation, hover states, scroll reveals, dashboard motion, microinteractions, or Framer/Motion-inspired polish.

The goal is motion that feels premium, not motion that feels decorative or distracting.

---

## Motion Philosophy

Motion should feel:

- Calm
- Deliberate
- Subtle
- Layered
- Functional
- Consistent
- Respectful of attention

Motion should not feel:

- Flashy
- Gimmicky
- Constant
- Gamer-like
- Cyberpunk
- Randomly applied
- More important than content

---

## Existing Motion Direction

The shared `Reveal` pattern is the default restrained load-in pattern.

Use it for:

- Page headers
- Major sections
- Important cards
- Case-study blocks
- Dashboard surfaces
- Meaningful repeated groups

Do not use it for:

- Every badge
- Every chip
- Every small line of text
- Nav items
- Footer links
- Decorative noise

---

## Motion Rules

Prefer:

- Opacity changes
- Small vertical movement
- Slight stagger between related elements
- Subtle hover lift/depth
- Dashboard/progress animations that communicate change
- Once-per-view reveal behavior
- Reduced-motion support

Avoid:

- Infinite animation unless clearly justified
- Spinning elements
- Particle systems
- Animated background clutter
- Large parallax shifts
- Scroll hijacking
- Motion that hides important recruiter content
- Multiple animation styles in the same section

---

## Timing Guidance

Use restrained timing:

- Microinteractions: fast and crisp
- Section reveal: smooth but not slow
- Dashboard/progress animation: deliberate enough to read
- Hover states: immediate but not jumpy

If a motion feels noticeable before the content, reduce it.

---

## Reduced Motion

All motion must respect `prefers-reduced-motion`.

When adding motion:

- Confirm the shared component already handles reduced motion, or
- Add reduced-motion behavior before finishing the task

Do not introduce motion that becomes required to understand content.

---

## Motion Review Questions

Before accepting a motion change, ask:

- Does this help the user understand what matters?
- Is the same motion pattern already used elsewhere?
- Does it feel premium or attention-seeking?
- Does it work on mobile?
- Does it preserve reduced-motion behavior?
- Does it add value beyond making the page feel busy?

If the answer is unclear, simplify.
