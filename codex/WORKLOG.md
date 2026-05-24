# WORKLOG.md — Portfolio Redesign Progress Log

## Purpose

This file is the chronological worklog for the portfolio redesign project.

This file lives at:

```text
codex/WORKLOG.md
```

Codex should update this file after each major task or work session.

Use this file to track what happened, what changed, what broke, what was decided, and what should happen next.

---

## Worklog Rules

Each entry should include:

- Date
- Phase/task
- Summary
- Completed work
- Files changed
- Issues found
- Decisions made
- Checks run
- Next steps

Keep entries short but useful.

Do not paste huge diffs into this file.

---

## Entry Template

```md
## YYYY-MM-DD — Phase X: Task Name

### Summary

Briefly describe what was worked on.

### Completed

- Item 1
- Item 2

### Files Changed

- `path/to/file`

### Issues Found

- Issue 1

### Decisions Made

- Decision 1

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- Pass / Fail / Not run

### Next Steps

- Next item 1
```

---

## Active Worklog

Add new entries below this line.

---

## 2026-05-24 — Phase 5 Refinement: GitHub Link Icons

### Summary

Replaced generic GitHub-link icons with a shared GitHub Invertocat mark.

### Completed

- Added a shared `GitHubMarkIcon` component.
- Replaced the project-card icon-only repository action icon with the shared GitHub mark.
- Replaced the Home hero `View GitHub` CTA icon with the shared GitHub mark.
- Replaced project detail GitHub button icons with the shared GitHub mark.
- Kept the GitHub mark secondary to the project content and used it only to link to GitHub destinations.
- Preserved existing link labels, accessible `aria-label` values, destinations, new-tab behavior, button sizing, and card layout.
- Updated durable project memory with the GitHub icon usage decision.

### Files Changed

- `components/sections/FeaturedProjects.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ProjectDetail.tsx`
- `components/ui/GitHubMarkIcon.tsx`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Use the GitHub Invertocat mark for GitHub links because GitHub allows permitted logos as social buttons or links back to GitHub, while avoiding use as Bryan's own logo or primary site branding.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home desktop, Projects mobile, and a representative project detail page. The Home hero GitHub CTA, project-card repository actions, and project detail GitHub buttons render with the shared SVG mark, with no horizontal overflow or console warnings/errors.

### Next Steps

- Continue with Phase 6.1: audit current skills.

---

## 2026-05-24 — Phase 5 Refinement: Project Card Snapshot Order

### Summary

Adjusted the project-card snapshot row order after review so the cards surface outcomes earlier for recruiter scanning.

### Completed

- Reordered the card snapshot rows from `Problem / Concepts / Outcome` to `Problem / Outcome / Concepts`.
- Kept the dedicated `Tools` panel below the snapshot.
- Preserved all existing card wording, project summaries, tool names, links, and sizing rules.
- Updated durable project memory with the approved row-order rationale.

### Files Changed

- `components/sections/FeaturedProjects.tsx`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Use `Problem / Outcome / Concepts / Tools` as the project-card scan order because it gives context, answers the recruiter’s “so what?” question sooner, then shows demonstrated concepts and stack.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home desktop and Projects mobile; all card snapshots render as `Problem / Outcome / Concepts`, with no horizontal overflow or console warnings/errors.

### Next Steps

- Continue with Phase 6.1: audit current skills.

---

## 2026-05-24 — Phase 5.4, 5.5, and 5.6: Tags, Links, Hover States, Grid, Checks, and Tracking

### Summary

Closed out Phase 5 by improving the project-card action row, tool tags, hover/focus polish, and responsive grid behavior.

### Completed

- Added a structured bottom action row to project cards.
- Preserved the existing `View case study` link and added an icon-only external GitHub proof link when a project has `githubUrl`.
- Improved tool-tag hover states and safer wrapping behavior without changing tool names.
- Added stretched `auto-rows-fr` project grids so paired desktop cards remain equal-height.
- Tuned card preview, focus-within, action-link, and tag hover states.
- Validated Home and Projects at 1440px desktop and 390px mobile widths in Browser.
- Captured Phase 5.4 screenshots and validation data.
- Ran lint and production build successfully.
- Marked Phase 5.4, Phase 5.5, and Phase 5.6 complete in `codex/TASKS.md`.

### Files Changed

- `components/sections/FeaturedProjects.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-5-card-tags-links-grid/`

### Issues Found

- Initial build failed because this installed `lucide-react` version does not export `Github`; fixed by using the supported `ExternalLink` icon.
- Browser validation found four case-study links and four GitHub proof links on both Home and Projects.
- No tag overflow, horizontal overflow, clipped card sections, or console warnings/errors were found on the affected pages at tested widths.

### Decisions Made

- Use an icon-only GitHub proof link with an accessible label to avoid adding more visible text to already dense cards.
- Preserve the fixed/minimum section sizing introduced in Phase 5.2 and Phase 5.3 because it keeps card alignment stable.
- Treat the remaining Akira mobile detail-page long-string overflow from Phase 5.1 as a separate follow-up, not part of this card-grid pass.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home and Projects at desktop and 390px mobile widths.

### Next Steps

- Continue with Phase 6.1: audit current skills.

---

## 2026-05-24 — Phase 5.3: Show Problem, Tools, Concepts, and Outcome

### Summary

Updated the case-study card snapshot language so the cards explicitly show problem, concepts, tools, and outcome.

### Completed

- Renamed the middle snapshot row from `Evidence` to `Concepts`.
- Replaced `cardSummary.evidence` with `cardSummary.concepts` in project data.
- Added concise project-specific concepts summaries derived from existing case-study content.
- Kept tools visible in the dedicated tooling panel.
- Validated Home and Projects at desktop and 390px mobile widths in Browser.
- Ran lint and production build successfully.
- Marked Phase 5.3 complete in `codex/TASKS.md`.

### Files Changed

- `lib/data/projects.ts`
- `components/sections/FeaturedProjects.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-5-card-concepts/`

### Issues Found

- No horizontal overflow, clipped snapshot values, or console warnings/errors were found on affected pages.
- Lower-card alignment held after delayed scroll/animation.

### Decisions Made

- Use `Concepts` instead of `Evidence` on cards because the card also has a separate tools panel and the full detail pages carry deeper evidence.
- Maintain fixed/minimum project-card section sizing so future card edits do not break alignment.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home and Projects at desktop and 390px mobile widths.

### Next Steps

- Continue with Phase 5.4: improve tags, links, hover states, and responsive grid.

---

## 2026-05-24 — Phase 5.2 Correction: Card Content and Alignment

### Summary

Reworked the Phase 5.2 card pass after review feedback so the case-study snapshot content is meaningful and card sections align better.

### Completed

- Added project-specific `cardSummary` fields to `lib/data/projects.ts`.
- Replaced the generic snapshot values with concise summaries derived from each project's problem, evidence, and outcome sections.
- Rebuilt the project card body so title/summary, snapshot, tooling, and CTA stack more consistently.
- Replaced the off-balance tool row with a compact tooling panel.
- Bottom-aligned the `View case study` CTA across cards.
- Normalized intro, snapshot, and tooling heights so the lower project cards align after delayed scroll/animation.
- Shortened all card summaries so mobile snapshot values read as complete sentences without visible ellipses.
- Validated Home and Projects at desktop and 390px mobile widths in Browser.
- Ran lint and production build successfully.

### Files Changed

- `lib/data/projects.ts`
- `components/sections/FeaturedProjects.tsx`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-5-card-case-study/`

### Issues Found

- The first Phase 5.2 snapshot pulled values that were technically existing data but did not summarize the project sections well.
- The first Phase 5.2 layout did not align CTA placement consistently and made the tools area feel visually uneven.
- Corrected browser validation found no horizontal overflow on Home or Projects at tested desktop and mobile widths.
- Browser metrics confirmed four snapshots, four tooling panels, equal desktop section offsets, equal CTA bottom offsets, and no clipped lower-card snapshot values.
- No console warnings/errors were recorded during the corrected Browser review.

### Decisions Made

- Use explicit per-project card summaries instead of deriving snapshot values directly from long detail-page fields.
- Keep the summaries concise and tied to supported case-study content.
- Project card alignment depends on fixed/minimum section sizing across the role, title, summary, case-study snapshot rows, tooling panel, and bottom CTA. Future content or layout changes inside those sections should preserve those constraints or retune them across all cards.
- Keep deeper concepts/outcome refinement queued for Phase 5.3.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass with no horizontal overflow or console warnings/errors on affected pages.

### Next Steps

- Continue with Phase 5.3: show problem, tools, concepts, and outcome.

---

## 2026-05-24 — Phase 5.2: Convert Cards Into Concise Case Studies

### Summary

Converted project list cards into more explicit case-study cards while preserving existing project wording and claims.

### Completed

- Added a compact case-study snapshot to each project card.
- Used existing `caseStudy.problem`, `caseStudy.evidenceBlock.label`, and `caseStudy.outcome` data for the snapshot.
- Preserved existing project title, role, summary, preview visual, tools, and `View case study` link text.
- Tuned the snapshot layout so mobile uses readable compact rows and larger screens stay dense.
- Validated Home and Projects at desktop and 390px mobile widths in Browser.
- Captured Phase 5.2 screenshots and audit data.
- Ran lint and production build successfully.
- Marked Phase 5.2 complete in `codex/TASKS.md`.

### Files Changed

- `components/sections/FeaturedProjects.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-5-card-case-study/`

### Issues Found

- No horizontal overflow was found on Home or Projects at tested desktop and mobile widths.
- Browser validation found four case-study snapshots on Home and Projects.
- No console warnings/errors were recorded during the Phase 5.2 Browser review.
- The previously found Akira mobile detail-page overflow remains a recommended follow-up; it was not changed during this card-only pass.

### Decisions Made

- Keep Phase 5.2 focused on card layout and case-study scanning, not content rewriting.
- Use existing case-study data as the only content source for the new snapshot.
- Leave deeper problem/tools/concepts/outcome refinement for Phase 5.3.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass with no horizontal overflow or console warnings/errors on affected pages.

### Next Steps

- Continue with Phase 5.3: show problem, tools, concepts, and outcome.

---

## 2026-05-24 — Phase 5.1: Audit Existing Project Cards

### Summary

Audited the current project-card structure and data model before making Phase 5 design changes.

### Completed

- Reviewed `lib/data/projects.ts` and confirmed all four projects already include structured case-study data.
- Reviewed `FeaturedProjects` usage on Home and Projects.
- Reviewed `ProjectDetail` to confirm the detail pages already expose problem, approach, evidence, outcome, and lessons.
- Completed rendered browser validation after the local browser origin policy was corrected.
- Captured Phase 5.1 viewport screenshots and audit data for Home, Projects, and all four project detail pages.
- Identified Phase 5.2 opportunities without changing UI code.
- Added Bryan's collaboration rule: adjacent improvement opportunities should be presented for approval before implementation.
- Marked Phase 5.1 complete in `codex/TASKS.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-5-project-card-audit/`

### Issues Found

- Project cards are polished and functional, but list cards do not yet expose explicit problem/evidence/outcome structure.
- Project preview visuals are hand-coded by slug inside `FeaturedProjects`, which could become harder to maintain as projects grow.
- Tool badge rows can get dense on projects with longer tool lists.
- Projects and Home project-card list views showed no horizontal overflow at 1440px desktop or 390px mobile widths.
- All project detail pages include the expected case-study sections.
- Mobile detail review found horizontal overflow on the Akira ransomware case study from long technical strings in section content.
- Mobile detail review found one non-page-overflow text candidate on the password-spray detail page for `MicrosoftUpdateSync`.
- No browser console warnings/errors were recorded during the rendered audit.

### Decisions Made

- Treat Phase 5.2 as a layout/design pass around existing project copy, not a content rewrite.
- Use existing `caseStudy` fields as the source for any case-study card structure.
- Present adjacent improvement ideas to Bryan before making out-of-scope changes.

### Checks Run

Result:
- Browser rendered audit completed for Home, Projects, and all project detail pages.
- Lint/build not run; no site code changes were made.

### Next Steps

- Continue with Phase 5.2: convert cards into concise case studies.

---

## 2026-05-23 — Phase 4.3, 4.4, and 4.5: Section Order, Checks, and Tracking

### Summary

Reviewed page and section order for recruiter scanning, then improved Projects page case-study access.

### Completed

- Audited visible section order across Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths.
- Confirmed Home, About, Resume, Skills, and Contact already present a sensible recruiter scanning order.
- Added a compact Projects page case-study index below the page header.
- Used existing project titles and routes only; no project copy or claims were changed.
- Captured updated Projects page screenshots at desktop, 390px mobile, and 320px narrow widths.
- Ran lint and production build successfully.
- Marked Phase 4.3, Phase 4.4, and Phase 4.5 complete in `codex/TASKS.md`.
- Added durable section-order notes to `codex/PROJECT_MEMORY.md`.
- Advanced the current roadmap state to Phase 5.1.

### Files Changed

- `app/projects/page.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-4-section-order/`

### Issues Found

- Before the update, the Projects page did not expose direct case-study links in the first mobile viewport.
- After the update, project index links fit without horizontal overflow at desktop, 390px mobile, and 320px narrow widths.
- No console warnings/errors were recorded during the Browser review.

### Decisions Made

- Keep Home section order unchanged: hero, evidence/metrics, then featured projects.
- Keep About, Resume, Skills, and Contact section order unchanged.
- Improve recruiter scanning on Projects with a compact case-study index rather than reordering full project cards.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 5.1: audit existing project cards.

---

## 2026-05-23 — Phase 4.2: Navigation Styling and Mobile Behavior

### Summary

Improved the shared navigation's mobile footprint while preserving visible links, active states, and desktop layout.

### Completed

- Tightened mobile nav container spacing.
- Reduced mobile nav link padding and font size while keeping all labels visible.
- Hid the brand subtitle below the `sm` breakpoint because the hero already presents the role prominently.
- Verified Home, About, Resume, Projects, Skills, Contact, and a representative project detail route in Browser.
- Saved desktop, mobile, and 320px narrow screenshots plus audit data.
- Ran lint and production build successfully.
- Marked Phase 4.2 complete in `codex/TASKS.md`.
- Updated durable navigation notes in `codex/PROJECT_MEMORY.md`.

### Files Changed

- `components/layout/Navbar.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-4-nav-styling-mobile/`

### Issues Found

- No horizontal overflow was found at tested widths.
- Nav link text fits at desktop, 390px mobile, and 320px narrow widths.
- Active states remained correct across primary pages and project detail routes.
- No console warnings/errors were recorded during the Browser review.

### Decisions Made

- Keep all primary nav links visible on mobile instead of adding a hamburger/menu interaction.
- Hide only the duplicate brand subtitle on mobile to reduce sticky header height.
- Preserve the desktop navigation layout.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 4.3: improve section order for recruiter scanning.

---

## 2026-05-23 — Phase 4.1: Navigation Review

### Summary

Reviewed the shared navigation across primary pages before making Phase 4 navigation changes.

### Completed

- Inspected the shared `Navbar` source.
- Audited navigation at desktop, 390px mobile, and 320px narrow widths in Browser.
- Checked Home, About, Resume, Projects, Skills, and Contact mobile nav active states.
- Checked representative desktop nav screenshots for Home and Projects.
- Verified project detail routes keep the `Projects` nav item active.
- Saved navigation screenshots and audit data.
- Marked Phase 4.1 complete in `codex/TASKS.md`.
- Added durable navigation review notes to `codex/PROJECT_MEMORY.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-4-navigation-review/`

### Issues Found

- No horizontal overflow was found at tested widths.
- Nav text fits at desktop, 390px mobile, and 320px narrow widths.
- Active states are correct across primary pages and project detail pages.
- The main improvement area is mobile vertical footprint: the sticky header is about 195px tall at narrow widths.

### Decisions Made

- Leave implementation for Phase 4.2.
- Phase 4.2 should preserve semantic nav, sticky behavior, active states, and visible links while making mobile nav more compact.

### Checks Run

Result:
- Not run; audit-only markdown and screenshot update with no site code changes.

### Next Steps

- Continue with Phase 4.2: improve nav styling and mobile behavior.

---

## 2026-05-23 — Phase 3.5, 3.6, and 3.7: Mobile Hero Validation and Phase Closeout

### Summary

Validated and tuned the homepage hero mobile layout, then closed out the remaining Phase 3 checks and tracking tasks.

### Completed

- Audited the hero at 320px, 360px, 390px, and 430px mobile widths.
- Tightened small-screen hero spacing, hero lead sizing, proof-chip spacing, and right-panel padding.
- Confirmed the H1, role line, CTA labels, proof chips, and evidence panel fit without horizontal overflow.
- Captured mobile first-viewport screenshots and a mobile scrolled-panel screenshot in Browser.
- Ran lint and production build successfully.
- Marked Phase 3.5, 3.6, and 3.7 complete in `codex/TASKS.md`.
- Updated durable Phase 3 mobile validation notes in `codex/PROJECT_MEMORY.md`.

### Files Changed

- `app/globals.css`
- `components/sections/HeroSection.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-3-mobile-layout/`

### Issues Found

- No horizontal overflow was found at the tested mobile widths.
- No console warnings/errors were recorded during the Browser review.
- At 320px width, the evidence panel remains below the first viewport, but the primary hero content and CTAs fit cleanly.

### Decisions Made

- Keep desktop hero spacing unchanged while applying smaller-screen density adjustments.
- Treat 320px as a constrained fallback where the evidence panel may sit below the fold.
- Move to Phase 4 after completing the Phase 3 validation, checks, and tracking closeout.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 4.1: review navigation.

---

## 2026-05-23 — Phase 3.4: Hero Cybersecurity Visual

### Summary

Added a restrained cybersecurity proof visual to the homepage hero's right-side evidence panel.

### Completed

- Added numbered signal markers to the portfolio signal rows on larger screens.
- Converted the existing critical and high reduction evidence rows into visual progress bars using their supported percentage values.
- Preserved existing hero copy, CTA labels, evidence labels, and destinations.
- Captured desktop, mobile first-viewport, and mobile scrolled-panel screenshots in Browser.
- Verified local font availability, hero overflow state, and console logs in Browser.
- Marked Phase 3.4 complete in `codex/TASKS.md`.
- Updated durable visual notes in `codex/PROJECT_MEMORY.md`.

### Files Changed

- `components/sections/HeroSection.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-3-cybersecurity-visual/`

### Issues Found

- No horizontal overflow was found at desktop or mobile audit widths.
- No console warnings/errors were recorded during the Browser review.
- Mobile still pushes the evidence panel below the first viewport; Phase 3.5 should validate and tune mobile spacing/density.

### Decisions Made

- Use real existing proof signals and supported metrics as the visual source.
- Avoid decorative fake-hacker visuals, copied assets, and new claims.
- Keep the visual enhancement inside the existing evidence panel instead of adding a separate hero illustration.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 3.5: validate mobile layout.

---

## 2026-05-23 — Phase 3.3: Hero CTA Buttons

### Summary

Improved the homepage hero CTA hierarchy and mobile button layout while preserving existing labels and links.

### Completed

- Added an optional `className` prop to the shared `Button` component for scoped layout overrides.
- Made the hero `View Projects` CTA full-width on mobile to strengthen the primary action.
- Paired `Download Resume` and `View GitHub` beneath the primary CTA in a compact mobile two-column row.
- Kept the desktop CTA row aligned with the existing single-row layout.
- Captured updated desktop and mobile hero screenshots in Browser.
- Ran a quick desktop/mobile audit across Home, About, Resume, Projects, Skills, and Contact after the shared Button API change.
- Marked Phase 3.3 complete in `codex/TASKS.md`.
- Updated durable CTA notes in `codex/PROJECT_MEMORY.md`.

### Files Changed

- `components/ui/Button.tsx`
- `components/sections/HeroSection.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-3-cta-buttons/`

### Issues Found

- No horizontal overflow was found on the hero or primary pages at desktop/mobile audit widths.
- CTA text fits within its buttons at desktop and 390px mobile widths.
- No console warnings/errors were recorded during the Browser review.

### Decisions Made

- Keep CTA wording and destinations unchanged.
- Use scoped Button `className` overrides for hero-specific layout instead of changing global button defaults.
- Preserve the primary/secondary hierarchy: Projects first, Resume and GitHub secondary.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 3.4: add a tasteful cybersecurity visual element.

---

## 2026-05-23 — Phase 3.2: Hero Headline Structure

### Summary

Improved the homepage hero headline structure while preserving existing page copy.

### Completed

- Removed the one-off `scripts` folder after the local fonts were downloaded into `public/fonts/`.
- Updated `public/fonts/README.md` so it reflects the current committed font folder instead of the removed downloader.
- Made `Vulnerability Management & Cybersecurity Analyst` a stronger role line directly under the `Bryan Miller` H1.
- Kept the existing positioning sentence as supporting copy beneath the name/title structure.
- Captured updated desktop and mobile hero screenshots in Browser.
- Verified local font availability through Browser font checks.
- Marked Phase 3.2 complete in `codex/TASKS.md`.
- Updated durable hero and font notes in `codex/PROJECT_MEMORY.md`.

### Files Changed

- `components/sections/HeroSection.tsx`
- `public/fonts/README.md`
- `scripts/download-fonts.ps1`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-3-headline-structure/`

### Issues Found

- No horizontal overflow was found at the desktop or mobile hero audit widths.
- No console warnings/errors were recorded during the Browser review.
- Mobile hero remains tall; CTA stacking and proof-chip placement should be addressed in later Phase 3 tasks.

### Decisions Made

- Preserve `Bryan Miller` as the H1.
- Use the existing `profile.title` text as the stronger first-read role signal instead of introducing new copy.
- Remove the downloader script now that the local font files and licenses are present.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 3.3: improve CTA buttons.

---

## 2026-05-23 — Typography Maintenance: Local Font Self-Hosting

### Summary

Prepared the portfolio to self-host the intended Inter, Space Grotesk, and JetBrains Mono fonts locally.

### Completed

- Added local `@font-face` rules for Inter, Space Grotesk, and JetBrains Mono in `app/globals.css`.
- Added `scripts/download-fonts.ps1` to download the official open-source font files and matching license files into `public/fonts/`.
- Added `public/fonts/README.md` with the one-command local font setup.
- Verified the new downloader script parses successfully.
- Ran lint and production build successfully using `npm.cmd`.

### Files Changed

- `app/globals.css`
- `scripts/download-fonts.ps1`
- `public/fonts/README.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- The sandbox cannot download remote font files directly; `Invoke-WebRequest` and runtime `fetch` both failed from this session.
- The CSS is wired for local fonts, but the font files still need to be downloaded into `public/fonts/` from a normal PowerShell session with internet access.

### Decisions Made

- Keep `next/font/google` removed so production builds remain network-independent.
- Restore the intended typography by self-hosting Inter, Space Grotesk, and JetBrains Mono from official open-source sources.
- Keep system fallbacks in place so the site remains usable if local font files are missing.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `download-fonts.ps1` syntax check: Pass
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Run `powershell -ExecutionPolicy Bypass -File .\scripts\download-fonts.ps1` from the repository root to populate `public/fonts/`.
- Continue with Phase 3.2: improve headline/subheadline structure.

---

## 2026-05-23 — Phase 3.1: Audit Current Hero

### Summary

Audited the current homepage hero using the local Browser session before making Phase 3 design changes.

### Completed

- Captured current Home hero screenshots at desktop and mobile widths.
- Saved audit metrics for headline, hero bounds, CTA links, overflow state, and console warnings/errors.
- Reviewed the rendered hero screenshots for desktop and mobile layout quality.
- Marked Phase 3.1 complete in `codex/TASKS.md`.
- Recorded durable hero audit findings in `codex/PROJECT_MEMORY.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-3-hero-audit/`

### Issues Found

- No horizontal overflow was found in the hero at desktop or mobile audit widths.
- No console warnings/errors were recorded during the hero audit.
- The current H1 preserves the existing copy as `Bryan Miller`, but the role/value proposition is not the largest first-read signal by itself.
- On mobile, the hero is clean but tall; proof chips and the evidence panel move below the first viewport.

### Decisions Made

- Preserve existing homepage copy unless Bryan explicitly approves wording changes.
- Phase 3.2 should improve headline/subheadline hierarchy around existing words first.
- Phase 3.4 should make the proof visual feel more specifically cybersecurity/work-evidence oriented.

### Checks Run

Result:
- Not run; audit-only markdown and screenshot update with no site code changes.

### Next Steps

- Continue with Phase 3.2: improve headline/subheadline structure.

---

## 2026-05-22 — Phase 2.6 and 2.7: Checks, Font Build Fix, and Tracking

### Summary

Completed the Phase 2 validation pass and removed the production build blocker caused by build-time Google font fetching.

### Completed

- Removed `next/font/google` imports and font initialization from `app/layout.tsx`.
- Added network-independent font CSS variables in `app/globals.css` using local/system fallback stacks.
- Ran lint and production build successfully.
- Reviewed Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths in Browser after the font change.
- Saved Phase 2.6 screenshots and audit data.
- Marked Phase 2.6 and Phase 2.7 complete in `codex/TASKS.md`.
- Updated `codex/PROJECT_MEMORY.md` with the durable font/build decision.

### Files Changed

- `app/layout.tsx`
- `app/globals.css`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-2-checks-font-build/`

### Issues Found

- None remaining for Phase 2 checks.
- Browser audit found no horizontal overflow on any primary page at desktop or mobile widths.
- Browser audit recorded no console errors.

### Decisions Made

- Use system/local font fallback stacks instead of `next/font/google` so production builds do not depend on network font fetches.
- Keep the existing typography roles and Tailwind font tokens intact through CSS variables.

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- `npm run lint`: Pass
- `npm run build`: Pass

### Next Steps

- Continue with Phase 3.1: audit the current hero.

---

## 2026-05-22 — Phase 2.5: Global Section Spacing and Containers

### Summary

Improved shared spacing and container behavior, and fixed the known Home/Projects mobile horizontal overflow.

### Completed

- Adjusted `PageContainer` mobile and responsive padding.
- Aligned Navbar and Footer gutters with the shared page container.
- Tightened mobile section/card gaps while preserving larger desktop spacing.
- Added `min-w-0` defaults and safer overflow constraints to cards, project grids, project preview wrappers, and technical preview internals.
- Fixed Home and Projects mobile horizontal overflow from project card preview content.
- Reviewed Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths in Browser.
- Saved Phase 2.5 screenshots and audit data.
- Marked Phase 2.5 complete in `codex/TASKS.md`.

### Files Changed

- `components/layout/PageContainer.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Card.tsx`
- `components/sections/FeaturedProjects.tsx`
- `components/sections/ProjectDetail.tsx`
- `components/sections/SkillsOverview.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/resume/page.tsx`
- `app/projects/page.tsx`
- `app/skills/page.tsx`
- `app/contact/page.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-2-spacing-containers/`

### Issues Found

- Phase 2.5 Browser audit found no horizontal overflow on any primary page at desktop or mobile widths.
- No Browser console errors were recorded during the Phase 2.5 page review.
- `npm run build` still fails because this restricted environment cannot fetch Inter, JetBrains Mono, and Space Grotesk through `next/font/google`.

### Decisions Made

- Use `min-w-0` on shared cards and dense responsive grids where technical preview content can otherwise force mobile overflow.
- Keep mobile gutters slightly tighter than desktop gutters, but preserve the same max-width container rhythm.
- Keep technical previews clipped inside card surfaces on narrow screens.

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- `npm run lint`: Pass
- `npm run build`: Fail, blocked by Google font fetch failures in this restricted network session.

### Next Steps

- Continue with Phase 2.6: run relevant checks.

---

## 2026-05-22 — Phase 2.4: Buttons, Cards, Links, Borders, and Focus States

### Summary

Refined the shared surface and interaction treatments after the color and typography passes.

### Completed

- Improved shared button variants with clearer borders, shadows, hover movement, and focus states.
- Refined card variants with subtle gradient surfaces, thin rings, controlled hover depth, and more polished borders.
- Updated badges, nav active/hover states, footer links, hero proof chips, hero signal rows, and project case-study links.
- Reviewed Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths in Browser.
- Saved Phase 2.4 screenshots and audit data.
- Marked Phase 2.4 complete in `codex/TASKS.md`.

### Files Changed

- `app/globals.css`
- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `components/ui/Badge.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/sections/FeaturedProjects.tsx`
- `components/sections/HeroSection.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-2-controls-surfaces/`

### Issues Found

- Home and Projects still show the known mobile horizontal overflow from technical preview elements.
- No Browser console errors were recorded during the Phase 2.4 page review.
- `npm run build` still fails because this restricted environment cannot fetch Inter, JetBrains Mono, and Space Grotesk through `next/font/google`.

### Decisions Made

- Keep controls professional and restrained: small radius, crisp borders, visible focus states, and subtle depth.
- Use stronger primary CTA treatment only for primary actions; keep secondary actions quiet.
- Keep link states visible through color and underline behavior rather than heavy decoration.

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- `npm run lint`: Pass
- `npm run build`: Fail, blocked by Google font fetch failures in this restricted network session.

### Next Steps

- Continue with Phase 2.5: improve global section spacing and containers, including the Home/Projects mobile overflow fix.

---

## 2026-05-22 — Phase 2.3: Typography Scale

### Summary

Improved the shared typography scale and applied it across the primary pages without changing page copy.

### Completed

- Added reusable typography utilities for display text, page titles, section titles, panel titles, card titles, lead text, body copy, supporting copy, compact copy, and technical blocks.
- Updated shared section headers so page `h1` titles are visually stronger than section `h2` titles.
- Applied the new type utilities to Home, About, Resume, Projects, Skills, Contact, project detail, hero, dashboard, and card summary areas.
- Reviewed Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths in Browser.
- Saved Phase 2.3 screenshots and audit data.
- Marked Phase 2.3 complete in `codex/TASKS.md`.

### Files Changed

- `app/globals.css`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/resume/page.tsx`
- `app/contact/page.tsx`
- `components/ui/SectionHeader.tsx`
- `components/sections/FeaturedProjects.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ProjectDetail.tsx`
- `components/sections/RiskReductionDashboard.tsx`
- `components/sections/SkillsOverview.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-2-typography-scale/`

### Issues Found

- Home and Projects still show the known mobile horizontal overflow from technical preview elements.
- No Browser console errors were recorded during the Phase 2.3 page review.
- `npm run build` still fails because this restricted environment cannot fetch Inter, JetBrains Mono, and Space Grotesk through `next/font/google`.

### Decisions Made

- Use shared typography utilities for future layout work instead of repeating ad hoc `text-*` and `leading-*` combinations.
- Keep page titles larger and calmer, while keeping card and panel headings tighter for scan-heavy recruiter review.
- Preserve existing copy during typography work.

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- `npm run lint`: Pass
- `npm run build`: Fail, blocked by Google font fetch failures in this restricted network session.

### Next Steps

- Continue with Phase 2.4: improve buttons, cards, links, borders, and focus states.

---

## 2026-05-22 — Phase 2.2: Color Tokens

### Summary

Defined and applied the shared background, surface, text, border, and accent color direction.

### Completed

- Updated Tailwind color tokens to a graphite analyst-workspace palette with restrained evidence, remediation, detection, and severity accents.
- Updated global background variables, page texture, radial light fields, terminal gradients, project preview gradients, and nav accent line.
- Reviewed Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths in Browser.
- Saved Phase 2.2 screenshots and audit data.
- Marked Phase 2.2 complete in `codex/TASKS.md`.

### Files Changed

- `app/globals.css`
- `components/layout/Navbar.tsx`
- `components/sections/FeaturedProjects.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ProjectDetail.tsx`
- `components/sections/RiskReductionDashboard.tsx`
- `components/ui/Card.tsx`
- `tailwind.config.ts`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-2-color-tokens/`

### Issues Found

- Home and Projects still show the known mobile horizontal overflow from technical preview elements.
- No Browser console errors were recorded during the Phase 2.2 page review.
- `npm run build` still fails because this restricted environment cannot fetch Inter, JetBrains Mono, and Space Grotesk through `next/font/google`.

### Decisions Made

- Keep existing color token names for compatibility, but shift their values away from heavy navy/cyan toward graphite neutrals with controlled teal, blue, violet, amber, and severity accents.
- Preserve subtle background texture and avoid fake-hacker or neon styling.

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- `npm run lint`: Pass
- `npm run build`: Fail, blocked by Google font fetch failures in this restricted network session.

### Next Steps

- Continue with Phase 2.3: improve typography scale.

---

## 2026-05-22 — Phase 2.1: Define Visual Direction

### Summary

Defined the visual direction for the portfolio redesign before changing the UI code.

### Completed

- Converted Phase 0 site audit findings and Phase 1 reference analysis into a durable visual direction.
- Defined the core concept as a polished cybersecurity analyst workspace.
- Clarified which reference qualities to borrow and which to avoid.
- Marked Phase 2.1 complete in `codex/TASKS.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- The redesign should be calm, technical, evidence-led, recruiter-friendly, and original.
- The site should use real cybersecurity proof visuals: vulnerability reduction, scan validation, remediation timelines, KQL pivots, STIG evidence, detection paths, and GitHub proof.
- Phase 2 should define shared visual-system foundations before redesigning individual sections.

### Checks Run

Result:
- Not run; markdown-only direction update.

### Next Steps

- Continue with Phase 2.2: define background, surface, text, border, and accent colors.

---

## 2026-05-22 — Phase 1 Supplement: Full-Page Reference Review

### Summary

Revisited the reference sites beyond the first viewport and reviewed major middle and lower page sections.

### Completed

- Created full-page slice images from the saved reference screenshots.
- Captured live scroll-position screenshots for both references at desktop and mobile widths.
- Reviewed Codex section flow beyond the hero, including product story modules, pricing, team/business cards, final CTA, and footer.
- Reviewed LifeOS section flow beyond the hero, including problem/story sections, founder/product positioning, pillars, testimonials, audience fit, pricing/FAQ/guarantee, final CTA, and footer.
- Added a durable rule that future reference analysis must inspect full pages, not only first viewports.
- Updated `codex/PROJECT_MEMORY.md` with full-page reference findings.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-1-reference-analysis/`

### Issues Found

- Full-page screenshot captures can be misleading on pages with sticky/fixed elements; live scroll-position captures are more reliable for deep review.
- LifeOS mobile still shows horizontal overflow and a sticky purchase CTA that should not be copied.

### Decisions Made

- Future reference-site reviews must include desktop/mobile first viewport, middle sections, lower sections, repeated patterns, sticky elements, and mobile behavior.
- Codex remains the stronger quality reference for restraint and product polish.
- LifeOS is useful for section pacing and confident media use, but not for sales-page structure or responsive implementation.

### Checks Run

Result:
- Not run; markdown and screenshot-only analysis update.

### Next Steps

- Continue with Phase 2.1: define the visual direction.

---

## 2026-05-22 — Phase 1: Reference Website Design Analysis

### Summary

Reviewed the primary and secondary reference sites in Browser and compared their design patterns against the current portfolio audit.

### Completed

- Captured desktop and mobile screenshots for the ChatGPT Codex reference.
- Captured desktop and mobile screenshots for the LifeOS reference.
- Saved a reference contact sheet and JSON audit data.
- Compared reference design patterns against the current Home, About, Resume, Projects, Skills, and Contact audit.
- Updated reference notes and design direction in `codex/PROJECT_MEMORY.md`.
- Marked Phase 1 tasks complete in `codex/TASKS.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-1-reference-analysis/`

### Issues Found

- The current portfolio's Home and Projects pages still have mobile horizontal overflow from project preview visuals.
- The LifeOS reference also showed mobile horizontal overflow, so its responsive implementation should not be copied.

### Decisions Made

- Borrow quality standards from the references: confident first viewport, generous spacing, refined card depth, clear CTAs, and section-level pacing.
- Do not copy reference layouts, branding, assets, colors, text, pricing/sales structure, or proprietary animations.
- The portfolio direction should remain a refined cybersecurity proof-of-work interface with real analyst evidence visuals.

### Checks Run

Result:
- Not run; markdown and screenshot-only analysis update.

### Next Steps

- Continue with Phase 2.1: define the visual direction.

---

## 2026-05-22 — Roadmap Maintenance: Site-Wide Review Rule

### Summary

Added durable guidance so future redesign phases review affected pages across the full site instead of only the homepage.

### Completed

- Added a site-wide review rule to `codex/TASKS.md`.
- Added matching approved decisions to `codex/PROJECT_MEMORY.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Future visual changes must be checked against all affected primary pages: Home, About, Resume, Projects, Skills, and Contact.
- Shared component changes must be reviewed wherever those components appear.

### Checks Run

Result:
- Not run; markdown-only tracking update.

### Next Steps

- Continue with Phase 1.1: review the primary reference URL.

---

## 2026-05-22 — Phase 0: Initial Site Review

### Summary

Completed a fresh Phase 0 audit across all primary portfolio pages using the local Browser session.

### Completed

- Read repo instructions and tracking files.
- Identified the app framework, package manager, styling approach, routes, shared layout files, reusable components, content files, fonts, and color palette.
- Updated Phase 0 tasks to explicitly require all-page Browser inspection and screenshots.
- Inspected Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths.
- Saved desktop and mobile screenshots for each primary page.
- Recorded all-page visual findings in `codex/PROJECT_MEMORY.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-0-all-pages/`

### Issues Found

- Home and Projects have mobile horizontal overflow from project preview components.
- About and Resume have minor localized mobile overflow.
- Contact is clean and functional but sparse on desktop.
- `npm run build` fails in the restricted environment because `next/font/google` cannot fetch Inter, JetBrains Mono, and Space Grotesk.

### Decisions Made

- Future Phase 0-style audits must inspect all primary pages, not only Home.
- Browser screenshots should be saved in task-specific folders under `codex/screenshots/`.
- Phase 1 should directly inspect the reference sites before design changes.

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- `npm run lint`: Pass
- `npm run build`: Fail, blocked by Google font fetch failures in this restricted network session.

### Next Steps

- Continue with Phase 1.1: review the primary reference URL.
