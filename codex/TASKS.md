# TASKS.md — Portfolio Website Design Transformation Plan

## Purpose

Use this file as the working task plan for redesigning my cybersecurity portfolio website with Codex.

This file lives at:

```text
codex/TASKS.md
```

The goal is not to clone another website. The goal is to study one or more reference websites for design inspiration, then transform my own portfolio into a more polished, modern, recruiter-friendly, cybersecurity-focused proof-of-work site.

---

## Required Setup Inputs

Edit this section before starting.

### Reference Website Inputs

Use these only for design inspiration, not direct copying.

- Primary reference URL: `https://chatgpt.com/codex/?utm_source=google&utm_medium=paid_search&utm_campaign=GOOG_X_SEM_GBR_Codex_CDX_BAU_ACQ_PER_MIX_ALL_NAMER_US_EN_111325&c_id=23226110534&c_agid=194939268903&c_crid=807810285009&c_kwid=kwd-111182835&c_ims=&c_pms=9031397&c_nw=g&c_dvc=c&gad_source=1&gad_campaignid=23226110534&gbraid=0AAAAA-I0E5ftKRws_DKMoAIMqW7455W9l&gclid=Cj0KCQjw_b_QBhCSARIsAP6hR4d3WgRitEHGQkw1csVZ-btvs1PYFSTqIyrVov85XYt6pKbB3AmxYvMaAtX4EALw_wcB`
- Secondary reference URL: `https://lifestylebusiness.com/lifeos/?utm_source=youtube&utm_medium=channel_page&utm_campaign=description_link`
- Additional reference URL: `[OPTIONAL_REFERENCE_URL_HERE]`

### My Site Inputs

- Local development URL: `http://localhost:3000`
- Current deployed URL: `NOT_DEPLOYED_YET`
- Repository URL: `(https://github.com/bryanpmiller/cybersecurity-portfolio-v2)`

### What I Like About the Reference

I like the overall design quality and direction of the reference site, but I want my portfolio to remain original and cybersecurity-focused.

- Overall feel: polished, premium, modern, and intentional
- Layout: strong section structure and clean visual flow
- Spacing: generous whitespace and less cramped content
- Typography: clear hierarchy between headings, body text, and labels
- Cards: strong visual depth, clean borders, and professional hover states
- Background: subtle visual texture/depth without feeling distracting
- Animation: smooth, restrained, and polished
- Navigation: clean, easy to scan, and not overcomplicated
- Responsiveness: design feels intentional across screen sizes
- Visual polish: the site feels custom-built rather than template-generated

### What I Do Not Want Copied

- Exact layout:
- Exact colors:
- Text:
- Images:
- Branding:
- Proprietary animations:

---

## Project Goal

Transform my current portfolio website into a professional cybersecurity portfolio that clearly showcases:

- My resume
- My cybersecurity projects
- My vulnerability management experience
- My SecOps / detection engineering work
- My PowerShell, KQL, Tenable, Microsoft Defender, Sentinel, Azure, and STIG remediation skills
- My ability to document technical work clearly
- My ability to build and deploy a professional web project

The finished site should feel polished enough to list on a resume as a proof-of-concept portfolio project.

---

## Reference Website Usage Rules

Use reference websites only for inspiration.

Do not:

- Copy exact layouts pixel-for-pixel
- Copy text
- Copy branding
- Copy images
- Copy icons or visual assets without permission
- Recreate proprietary animations exactly
- Use identical class names, component names, or structure from the reference

Do:

- Analyze the design language
- Identify what makes the reference look polished
- Apply similar quality standards to my site
- Create an original design using my own content
- Keep the site focused on cybersecurity, proof-of-work, and hiring outcomes

When reviewing reference sites, inspect the full page, not only the first viewport.

Reference analysis should include:

- Desktop and mobile first viewport
- Major middle-page sections
- Lower-page sections and final CTA/footer treatment
- Repeated card, media, CTA, and navigation patterns
- Mobile behavior, overflow, sticky elements, and scroll issues
- Clear notes on what to borrow and what not to copy

---

## Codex Working Memory and File Update Rules

This project uses these files:

```text
AGENTS.md                     Repo-level behavior rules
codex/TASKS.md                Master roadmap / checklist
codex/PROJECT_MEMORY.md       Decisions, constraints, design direction, and current project context
codex/WORKLOG.md              Chronological progress log
```

Use:

```text
TASKS.md = What needs to be done
PROJECT_MEMORY.md = What we decided
WORKLOG.md = What has been done
AGENTS.md = Rules Codex should always follow
```

Do not use `codex/TASKS.md` as a diary.

---

## Required Workflow Before Starting Work

Before starting any new phase or major task, Codex must:

1. Read `AGENTS.md`.
2. Read `codex/CODEX_START_HERE.md`.
3. Read `codex/TASKS.md`.
4. Read `codex/PROJECT_MEMORY.md`.
5. Read `codex/WORKLOG.md`.
6. Identify the current phase and next incomplete task.
7. Briefly summarize the current state before editing code.
8. Make targeted, reviewable changes.

---

## Required Workflow After Completing Work

After each major task, Codex must update:

1. `codex/TASKS.md`
   - Check off completed task items only.
   - Do not add long explanations unless they are durable project instructions.

2. `codex/PROJECT_MEMORY.md`
   - Add or update important decisions, design rules, constraints, architecture notes, or content rules.

3. `codex/WORKLOG.md`
   - Add a dated entry summarizing the completed work, files changed, issues found, decisions made, and next steps.

For micro-changes, use lighter tracking:

- A micro-change is a small, localized fix or approved content/taxonomy tweak that does not complete a roadmap task, introduce a durable design rule, change architecture, or affect multiple workflows.
- For micro-changes, update only `codex/WORKLOG.md` with a compact entry.
- Do not update `codex/TASKS.md` unless a roadmap checkbox is completed or the current phase/next task changes.
- Do not update `codex/PROJECT_MEMORY.md` unless the change creates or updates a durable decision, constraint, approved/rejected idea, architecture note, or content rule.
- Batch related micro-changes into one compact worklog entry when they happen in the same work session.

Validation may also be scaled to risk:

- Markdown-only workkit updates usually do not need lint/build.
- Small copy/data/style edits may run lint first and defer build until the end of a related batch.
- Browser validation is expected for visual layout, responsive, interaction, or accessibility-risk changes, but is optional for pure markdown or low-risk data changes.
- Major phase completion should still run available full checks, usually lint and build.

---

## Site-Wide Review Rule

The redesign is site-wide, not homepage-only.

For every redesign phase, Codex must consider all primary pages:

- Home
- About
- Resume
- Projects
- Skills
- Contact

If a phase changes a shared component, layout, visual system rule, navigation, card pattern, typography rule, spacing rule, or responsive behavior, Codex must review every primary page affected by that change.

If a phase changes only one section or page-specific component, Codex must review that page and any other page where the changed component appears.

After visual changes, Codex should inspect affected pages at desktop and mobile widths, capture screenshots when useful, and document notable layout, responsiveness, accessibility, or interaction issues in `codex/WORKLOG.md`.

---

## Organizational Label Rule

Preserve existing substantive page copy unless Bryan explicitly approves wording changes.

Codex may rename organizational labels when needed for clearer grouping, as long as the underlying claims, tools, experience, metrics, descriptions, and button/link labels remain supported and unchanged.

Examples:

- Skill category names
- Card grouping labels
- Section-adjacent taxonomy labels

If a design change requires rewriting project descriptions, resume/experience wording, metrics, outcomes, button labels, section headings, or other substantive copy, Codex must stop and ask first.

---

## Current Phase

Current phase: Phase 9 — Cybersecurity Visual Elements

Current next task:

- [ ] Phase 9.1 — Add tasteful security-themed visuals

---

## Phase 0 — Initial Site Review

### Tasks

- [x] 0.1 Identify the app framework.
- [x] 0.2 Identify package manager: npm, pnpm, yarn, or bun.
- [x] 0.3 Identify styling approach.
- [x] 0.4 Identify main homepage route.
- [x] 0.5 Identify shared layout files.
- [x] 0.6 Identify reusable components.
- [x] 0.7 Identify where project data/content is stored.
- [x] 0.8 Identify current fonts.
- [x] 0.9 Identify current color palette.
- [x] 0.10 Run the site locally if possible.
- [x] 0.11 Inspect all primary pages in the browser: Home, About, Resume, Projects, Skills, and Contact.
- [x] 0.12 Capture desktop and mobile screenshots for each primary page.
- [x] 0.13 Note console errors, build warnings, or layout issues.
- [x] 0.14 Provide a concise design audit across all primary pages.
- [x] 0.15 Update `codex/PROJECT_MEMORY.md`.
- [x] 0.16 Add a `codex/WORKLOG.md` entry.

### Codex Prompt

```text
Review the current portfolio website and repository structure.

Before making changes, give me a concise design audit. Focus on what currently makes the site feel generic, bland, or AI-generated. Identify the top 5 design improvements that would make the biggest difference.

Do not edit code yet.
```

---

## Phase 1 — Reference Website Design Analysis

### Goal

Analyze the reference URL(s) listed at the top of this file and extract design principles without copying directly.

### Tasks

- [x] 1.1 Review the primary reference URL.
- [x] 1.2 Review any secondary reference URL(s).
- [x] 1.3 Review my current local or deployed site.
- [x] 1.4 Compare the reference against my current portfolio.
- [x] 1.5 Identify design principles to borrow.
- [x] 1.6 Identify elements not to copy.
- [x] 1.7 Recommend a unique cybersecurity-focused design direction.
- [x] 1.8 Update `codex/PROJECT_MEMORY.md` with reference notes.
- [x] 1.9 Add a `codex/WORKLOG.md` entry.

### Codex Prompt

```text
Analyze the reference website(s) listed in codex/TASKS.md only for design inspiration.

Compare them against my current portfolio site. Focus on layout, spacing, typography, color palette, card design, section flow, background treatment, and interaction polish.

Do not copy the reference site directly. Extract design principles, then recommend a unique cybersecurity-focused direction for my portfolio.

Before editing code, summarize:
1. What the reference does well
2. What my site currently lacks
3. Which design principles we should borrow
4. What we should avoid copying
5. The first section you recommend redesigning
```

---

## Phase 2 — Design Direction and Visual System

- [x] 2.1 Define visual direction.
- [x] 2.2 Define background, surface, text, border, and accent colors.
- [x] 2.3 Improve typography scale.
- [x] 2.4 Improve buttons, cards, links, borders, and focus states.
- [x] 2.5 Improve global section spacing and containers.
- [x] 2.6 Run relevant checks.
- [x] 2.7 Update tracking files.

---

## Phase 3 — Homepage Hero Redesign

- [x] 3.1 Audit current hero.
- [x] 3.2 Improve headline/subheadline structure.
- [x] 3.3 Improve CTA buttons.
- [x] 3.4 Add tasteful cybersecurity visual element.
- [x] 3.5 Validate mobile layout.
- [x] 3.6 Run relevant checks.
- [x] 3.7 Update tracking files.

---

## Phase 4 — Navigation and Page Structure

- [x] 4.1 Review navigation.
- [x] 4.2 Improve nav styling and mobile behavior.
- [x] 4.3 Improve section order for recruiter scanning.
- [x] 4.4 Run relevant checks.
- [x] 4.5 Update tracking files.

---

## Phase 5 — Project Cards as Cybersecurity Case Studies

- [x] 5.1 Audit existing project cards.
- [x] 5.2 Convert cards into concise case studies.
- [x] 5.3 Show problem, tools, concepts, and outcome.
- [x] 5.4 Improve tags, links, hover states, and responsive grid.
- [x] 5.5 Run relevant checks.
- [x] 5.6 Update tracking files.

---

## Phase 6 — Skills and Tooling Section

- [x] 6.1 Audit current skills.
- [x] 6.2 Group skills by cybersecurity category.
- [x] 6.3 Remove duplicates.
- [x] 6.4 Improve visual layout.
- [x] 6.5 Run relevant checks.
- [x] 6.6 Update tracking files.

---

## Phase 7 — Experience / Resume Snapshot Section

- [x] 7.1 Add or improve experience snapshot.
- [x] 7.2 Use supported metrics only.
- [x] 7.3 Improve resume CTA.
- [x] 7.4 Run relevant checks.
- [x] 7.5 Update tracking files.

---

## Phase 8 — Impact Metrics Section

- [x] 8.1 Identify supported metrics.
- [x] 8.2 Design metrics strip or cards.
- [x] 8.3 Keep claims accurate.
- [x] 8.4 Run relevant checks.
- [x] 8.5 Update tracking files.

---

## Phase 9 — Cybersecurity Visual Elements

- [ ] 9.1 Add tasteful security-themed visuals.
- [ ] 9.2 Avoid fake hacker clichés.
- [ ] 9.3 Tie visuals to real work.
- [ ] 9.4 Run relevant checks.
- [ ] 9.5 Update tracking files.

---

## Phase 10 — Animations and Interactions

- [ ] 10.1 Audit existing interactions.
- [ ] 10.2 Add subtle hover/transition states.
- [ ] 10.3 Respect reduced motion.
- [ ] 10.4 Run relevant checks.
- [ ] 10.5 Update tracking files.

---

## Phase 11 — Responsive Design Pass

- [ ] 11.1 Test mobile, tablet, laptop, and desktop widths.
- [ ] 11.2 Fix spacing, wrapping, grids, nav, and overflow.
- [ ] 11.3 Run relevant checks.
- [ ] 11.4 Update tracking files.

---

## Phase 12 — Accessibility and Readability Pass

- [ ] 12.1 Check semantic headings.
- [ ] 12.2 Check contrast.
- [ ] 12.3 Check focus states.
- [ ] 12.4 Check link/button labels.
- [ ] 12.5 Improve readability.
- [ ] 12.6 Run relevant checks.
- [ ] 12.7 Update tracking files.

---

## Phase 13 — Content Polish

Focus on making existing text easier to scan visually. Do not rewrite the wording without approval.

- [ ] 13.1 Remove generic AI-sounding phrases.
- [ ] 13.2 Make copy direct, human, and specific.
- [ ] 13.3 Strengthen project descriptions.
- [ ] 13.4 Run relevant checks.
- [ ] 13.5 Update tracking files.

---

## Phase 14 — Performance and Build Pass

- [ ] 14.1 Run lint/build/test commands as available.
- [ ] 14.2 Fix redesign-related errors.
- [ ] 14.3 Review obvious performance issues.
- [ ] 14.4 Update tracking files.

---

## Phase 15 — Final Recruiter Review

- [ ] 15.1 Check if a recruiter can understand the portfolio in 5 seconds.
- [ ] 15.2 Check if strongest projects are easy to find.
- [ ] 15.3 Check if resume/GitHub/contact are obvious.
- [ ] 15.4 Check cybersecurity credibility.
- [ ] 15.5 Update tracking files.

---

## Phase 16 — Deployment Readiness

- [ ] 16.1 Check public links.
- [ ] 16.2 Check resume link/download.
- [ ] 16.3 Check metadata and SEO basics.
- [ ] 16.4 Run final production build.
- [ ] 16.5 Update tracking files.

---

## Final Definition of Done

The redesign is complete when:

- [ ] Site visually feels polished and professional.
- [ ] Site clearly communicates cybersecurity focus.
- [ ] Hero section is strong.
- [ ] Project cards feel like case studies.
- [ ] Skills are grouped and scannable.
- [ ] Resume/GitHub/contact are easy to access.
- [ ] Mobile layout is clean.
- [ ] Accessibility basics are handled.
- [ ] Build passes.
- [ ] Links work.
- [ ] Content sounds human and specific.
- [ ] Site is original and not a clone of the reference.
- [ ] `codex/PROJECT_MEMORY.md` is updated with final design decisions.
- [ ] `codex/WORKLOG.md` includes a final completion entry.
