# ROUND3_REFERENCE_NOTES.md — Human Reference & Motion Audit Guide

## Purpose

Use this file before starting Round 3 implementation work.

Round 3 is meant to move the portfolio from:

```text
polished cybersecurity portfolio
```

toward:

```text
premium cybersecurity proof-of-work brand experience
```

This document helps Bryan collect and organize design inspiration before Codex starts making changes. It is both:

1. A human audit checklist.
2. The working reference-notes file Codex can later read during Round 3.1.

Recommended repo path:

```text
codex/references/ROUND3_REFERENCE_NOTES.md
```

---

## Reference Borrowing Rules

The goal is not to avoid all copying. The goal is to borrow like a designer instead of cloning like a template.

Allowed:

- Borrow layout archetypes.
- Borrow section pacing.
- Borrow hierarchy patterns.
- Borrow motion principles.
- Borrow interaction ideas.
- Borrow general composition strategies.
- Borrow proof-presentation patterns when they can be adapted to Bryan's real cybersecurity work.

Not allowed:

- Copy exact layouts pixel-for-pixel.
- Copy branding, colors, icons, images, copy, proprietary assets, or unique animations.
- Recreate a reference site so closely that Bryan's portfolio feels like a clone.
- Add fake metrics, fake dashboards, fake screenshots, or unsupported claims to match a reference.

Goal:

Use references as a design vocabulary, then translate them into a cybersecurity proof-of-work experience using Bryan's own content, metrics, projects, and visual identity.

---

## How to Use This File

Use this file to capture examples of premium websites, Framer sites, motion examples, case-study layouts, and product-style sections that feel closer to the quality bar you want.

Do not use this file to copy designs.

Use it to identify:

- what feels premium
- what feels executive-readable
- what motion feels polished
- what section pacing feels mature
- what project/case-study layouts feel high quality
- what typography/spacing choices make a page feel less AI-generated

Codex should later use this file as inspiration input during Round 3.1, but it should still obey:

- `AGENTS.md`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- the relevant `codex/architects/*.md` files
- content preservation rules
- supported-claims rules

---

## When to Use This File

Use it before these Round 3 tasks:

```text
Round 3.1 - Current Site Premium Audit
Round 3.2 - Hero and First-Viewport Product Experience
Round 3.3 - Editorial Homepage Flow
Round 3.4 - Case Study Experience Pass
Round 3.5 - Motion and Interaction Polish
Round 3.6 - Executive Polish Review
```

This file is especially useful before asking Codex to make visual/design changes.

---

## What to Collect

Aim for 5-10 total references.

A good mix:

- 2-3 premium product/SaaS sites
- 1-2 cybersecurity, defense, cloud, AI, or infrastructure sites
- 1-2 case-study or portfolio examples
- 1-2 Framer or motion-heavy examples
- 1-2 examples of typography/spacing you like

You do not need perfect matches. You are looking for useful patterns.

---

## What Not to Collect

Avoid references that mostly rely on:

- cyberpunk / hacker visuals
- neon green terminal aesthetics
- matrix backgrounds
- heavy particle effects
- gimmicky animations
- generic AI startup gradients
- fake dashboards with meaningless data
- influencer/personal-brand sales pages
- design that looks good only because of expensive photography

If you still like one of those sites, record only the specific thing worth borrowing, such as spacing or section pacing.

---

## Human Audit Workflow

### Step 1 — Gather References

For each reference, save:

- URL
- screenshot if useful
- section name or page area
- what you like
- what should not be copied
- which Round 3 area it applies to

Recommended reference categories:

```text
Hero / first viewport
Typography / spacing
Navigation / header
Case-study layout
Metrics / proof presentation
Motion / scroll behavior
Hover / microinteractions
Section transitions
Footer / final CTA
Mobile layout
```

---

### Step 2 — Score Each Reference

Use this quick scorecard:

| Category | Score 1-5 | Notes |
|---|---:|---|
| Premium feel |  |  |
| Executive readability |  |  |
| Typography |  |  |
| Spacing / whitespace |  |  |
| Section pacing |  |  |
| Motion restraint |  |  |
| Case-study usefulness |  |  |
| Mobile polish |  |  |
| Relevance to Bryan's site |  |  |

A reference does not need to score high in every area. One site may only be useful for motion, another only for typography.

---

### Step 3 — Extract Principles, Not Layouts

For each reference, write design principles like:

```text
Use larger whitespace between major proof sections.
Let one primary visual dominate the first viewport.
Use subtle staggered reveals for grouped cards.
Present metrics as proof, not decoration.
Use a calm heading scale with fewer competing labels.
```

Avoid implementation instructions like:

```text
Copy this exact hero.
Use this exact color.
Recreate this animation.
Use the same card layout.
```

---

### Step 4 — Identify Anti-Patterns

For each reference, also record what not to copy.

Examples:

```text
Do not copy the warm lifestyle palette.
Do not copy the pricing-table structure.
Do not copy the animated orb.
Do not copy the testimonial-heavy sales flow.
Do not copy exact screenshots, icons, or wording.
```

This prevents Codex from over-borrowing.

---

### Step 5 — Create a Round 3 Direction Summary

After collecting references, summarize:

1. The top 3 design qualities you want.
2. The top 3 motion qualities you want.
3. The top 3 things to avoid.
4. The first 3 sections/components you want Codex to audit.

This summary should guide Round 3.1.

---

## Codex Usage Rule

When Codex uses this file, it should:

1. Read `AGENTS.md`.
2. Read `codex/TASKS.md`.
3. Read `codex/PROJECT_MEMORY.md`.
4. Read `codex/WORKLOG.md`.
5. Read only the relevant architect file(s).
6. Read this reference file only if the current task involves visual direction, motion, section pacing, case studies, or premium polish.

Codex should not read this file for unrelated maintenance tasks.

---

## Recommended Codex Prompt After This File Is Filled Out

```text
Read AGENTS.md, codex/TASKS.md, codex/PROJECT_MEMORY.md, and codex/WORKLOG.md.

The current task is Round 3.1 - Current Site Premium Audit.

Also read:
- codex/architects/00_CREATIVE_BRIEF.md
- codex/architects/01_EXECUTIVE_EXPERIENCE_ARCHITECT.md
- codex/architects/02_VISUAL_SYSTEM_ARCHITECT.md
- codex/architects/04_EDITORIAL_STRUCTURE_ARCHITECT.md
- codex/architects/06_TOKEN_EFFICIENCY_ARCHITECT.md
- codex/architects/07_REVIEW_AND_POLISH_ARCHITECT.md
- codex/references/ROUND3_REFERENCE_NOTES.md

Do not edit code yet.

Audit the deployed site against the architect guidance and the reference notes. Identify only 3-5 targeted improvements that would most improve premium feel, executive readability, visual hierarchy, section pacing, and motion restraint.

For each recommendation, include:
1. affected page/section/component
2. why it matters
3. which reference principle supports it
4. expected implementation scope
5. validation needed
6. whether copy changes are required

Do not propose full-site rewrites. Do not add unsupported claims. Do not copy reference layouts directly.
```

---

# Round 3 Reference Direction Summary

Fill this out after collecting examples.

## Top Design Qualities to Borrow

1. 
2. 
3. 

## Top Motion Qualities to Borrow

1. 
2. 
3. 

## Top Things to Avoid

1. 
2. 
3. 

## First Sections Codex Should Audit

1. 
2. 
3. 

## Overall Round 3 Direction

```text
Write the final design direction in plain language here.
```

---

# Reference Entries

Copy the template below for each reference.

---

## Reference 1 — [Site / Page Name]

### URL

```text
PASTE_URL_HERE
```

### Category

Select all that apply:

- [ ] Hero / first viewport
- [ ] Typography / spacing
- [ ] Navigation / header
- [ ] Case-study layout
- [ ] Metrics / proof presentation
- [ ] Motion / scroll behavior
- [ ] Hover / microinteractions
- [ ] Section transitions
- [ ] Footer / final CTA
- [ ] Mobile layout
- [ ] Other:

### Quick Scorecard

| Category | Score 1-5 | Notes |
|---|---:|---|
| Premium feel |  |  |
| Executive readability |  |  |
| Typography |  |  |
| Spacing / whitespace |  |  |
| Section pacing |  |  |
| Motion restraint |  |  |
| Case-study usefulness |  |  |
| Mobile polish |  |  |
| Relevance to Bryan's site |  |  |

### What I Like

- 
- 
- 

### What Feels Premium

- 
- 
- 

### Motion Notes

Describe any motion, scroll behavior, hover behavior, or page transitions worth studying.

- 
- 
- 

### Typography / Spacing Notes

- 
- 
- 

### Case Study / Proof Presentation Notes

- 
- 
- 

### Mobile Notes

- 
- 
- 

### What Not to Copy

- 
- 
- 

### Principles to Borrow

Write principles, not exact layout instructions.

- 
- 
- 

### Relevance to Bryan's Portfolio

Explain how this reference could improve the cybersecurity portfolio without copying it.

```text

```

---

## Reference 2 — [Site / Page Name]

### URL

```text
PASTE_URL_HERE
```

### Category

- [ ] Hero / first viewport
- [ ] Typography / spacing
- [ ] Navigation / header
- [ ] Case-study layout
- [ ] Metrics / proof presentation
- [ ] Motion / scroll behavior
- [ ] Hover / microinteractions
- [ ] Section transitions
- [ ] Footer / final CTA
- [ ] Mobile layout
- [ ] Other:

### Quick Scorecard

| Category | Score 1-5 | Notes |
|---|---:|---|
| Premium feel |  |  |
| Executive readability |  |  |
| Typography |  |  |
| Spacing / whitespace |  |  |
| Section pacing |  |  |
| Motion restraint |  |  |
| Case-study usefulness |  |  |
| Mobile polish |  |  |
| Relevance to Bryan's site |  |  |

### What I Like

- 
- 
- 

### What Feels Premium

- 
- 
- 

### Motion Notes

- 
- 
- 

### Typography / Spacing Notes

- 
- 
- 

### Case Study / Proof Presentation Notes

- 
- 
- 

### Mobile Notes

- 
- 
- 

### What Not to Copy

- 
- 
- 

### Principles to Borrow

- 
- 
- 

### Relevance to Bryan's Portfolio

```text

```

---

## Reference 3 — [Site / Page Name]

### URL

```text
PASTE_URL_HERE
```

### Category

- [ ] Hero / first viewport
- [ ] Typography / spacing
- [ ] Navigation / header
- [ ] Case-study layout
- [ ] Metrics / proof presentation
- [ ] Motion / scroll behavior
- [ ] Hover / microinteractions
- [ ] Section transitions
- [ ] Footer / final CTA
- [ ] Mobile layout
- [ ] Other:

### Quick Scorecard

| Category | Score 1-5 | Notes |
|---|---:|---|
| Premium feel |  |  |
| Executive readability |  |  |
| Typography |  |  |
| Spacing / whitespace |  |  |
| Section pacing |  |  |
| Motion restraint |  |  |
| Case-study usefulness |  |  |
| Mobile polish |  |  |
| Relevance to Bryan's site |  |  |

### What I Like

- 
- 
- 

### What Feels Premium

- 
- 
- 

### Motion Notes

- 
- 
- 

### Typography / Spacing Notes

- 
- 
- 

### Case Study / Proof Presentation Notes

- 
- 
- 

### Mobile Notes

- 
- 
- 

### What Not to Copy

- 
- 
- 

### Principles to Borrow

- 
- 
- 

### Relevance to Bryan's Portfolio

```text

```

---

# Extra Reference Slots

Duplicate the reference template above as needed.

Recommended total: 5-10 references.

---

# Final Synthesis for Codex

Complete this section before starting Round 3.1.

## Strongest Reference Patterns

- 
- 
- 

## Best Motion Patterns

- 
- 
- 

## Best Typography / Spacing Patterns

- 
- 
- 

## Best Case Study / Proof Patterns

- 
- 
- 

## Patterns to Avoid

- 
- 
- 

## Round 3 Audit Priorities

List 3-5 areas Codex should focus on during the audit.

1. 
2. 
3. 
4. 
5. 

## Notes for Codex

```text
Add any final guidance here. Keep it specific and practical.
```
