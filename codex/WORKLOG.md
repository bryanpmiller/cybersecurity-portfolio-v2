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

For micro-changes, use a compact entry instead of the full template. Batch related micro-changes when possible.

A micro-change is a small, localized fix or approved content/taxonomy tweak that does not complete a roadmap task, introduce a durable design rule, change architecture, or affect multiple workflows.

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

## Compact Entry Template

Use this for micro-changes:

```md
## YYYY-MM-DD — Small Fixes

- Area: brief change summary.
- Files: `path/to/file`, `path/to/file`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass/not run with reason.
- Notes: blockers, follow-up, or `None`.
```

---

## Active Worklog

Add new entries below this line.

---

## 2026-05-26 — Phase 16 Follow-Up: Deployed URL Configuration

- Area: configured `https://bryanpmiller.com` as the deployed site URL for metadata, canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`.
- Files: `lib/metadata.ts`, `app/robots.ts`, `app/sitemap.ts`, page metadata files, `codex/TASKS.md`, `codex/PROJECT_MEMORY.md`, `codex/WORKLOG.md`, `codex/screenshots/phase-16-deployment-readiness/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; local browser validation pass for canonical URLs, `robots.txt`, and `sitemap.xml`.
- Notes: live `https://bryanpmiller.com` resolves to the portfolio, but it has not yet been updated with the local canonical/robots/sitemap changes. Publish the current build and rerun live smoke testing.

---

## 2026-05-26 — Phase 16.1-16.5: Deployment Readiness

### Summary

Completed the deployment-readiness pass by checking links, resume PDF behavior, metadata/SEO basics, and the final production build.

### Completed

- Extracted rendered links and metadata from all primary pages and project detail routes.
- Checked local routes for Home, About, Resume, Projects, Skills, Contact, all four project detail pages, and the resume PDF.
- Confirmed `/resume/Bryan_Miller_Resume.pdf` returns `200 OK`, `application/pdf`, and a nonzero content length.
- Browser-checked public GitHub links for Bryan's profile, project repositories, supporting repositories, and linked evidence folders.
- Confirmed the LinkedIn URL resolves to LinkedIn's auth wall rather than a not-found page.
- Added shared metadata helpers for route-specific Open Graph, Twitter, robots, and keyword metadata.
- Updated all page metadata exports to use the shared metadata helper while preserving existing title and description wording.
- Ran lint, production build, and the optional test command.
- Restored `next-env.d.ts` after production build generated route-reference churn.
- Marked Phase 16 and the final definition of done complete in `codex/TASKS.md`.

### Files Changed

- `app/layout.tsx`
- `app/about/page.tsx`
- `app/resume/page.tsx`
- `app/projects/page.tsx`
- `app/skills/page.tsx`
- `app/contact/page.tsx`
- `app/projects/vulnerability-management-program/page.tsx`
- `app/projects/disa-stig-remediation/page.tsx`
- `app/projects/password-spray-threat-hunt/page.tsx`
- `app/projects/akira-ransomware-threat-hunt/page.tsx`
- `lib/metadata.ts`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-16-deployment-readiness/`

### Issues Found

- Node-side external `fetch` was blocked for public sites in this environment, so public URLs were validated through the in-app browser instead.
- LinkedIn redirects unauthenticated visitors to its auth wall; the link resolves, but full profile visibility depends on LinkedIn access/session behavior.
- No deployed URL is available yet, so canonical URLs, sitemap generation, and live post-deployment smoke testing remain pending until deployment.
- `next-env.d.ts` changed during production build validation and was restored as unrelated generated churn.

### Decisions Made

- Keep canonical URLs and sitemap generation out of this pass until the deployed URL is known.
- Centralize metadata generation in `lib/metadata.ts` so page-specific social metadata stays consistent without duplicating SEO boilerplate.
- Treat the redesign roadmap as complete and deployment-ready, with a separate post-deployment smoke test recommended once the live URL exists.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd run test --if-present
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- `npm.cmd run test --if-present`: Pass, no test script configured
- Browser validation: Pass for rendered metadata, local route/PDF checks, and public link reachability checks as noted above.

### Next Steps

- Deploy the site and provide the deployed URL for a live smoke test.

---

## 2026-05-26 — Phase 15.4-15.5: Cybersecurity Credibility Review

### Summary

Audited whether the portfolio presents credible cybersecurity proof for recruiter review, then fixed a mobile overflow issue found in a project detail evidence list.

### Completed

- Reviewed Home, About, Resume, Projects, Skills, Contact, and all four project detail pages at 1440px desktop and 390px mobile widths.
- Confirmed the site surfaces role-relevant cybersecurity proof: vulnerability management, Tenable, PowerShell remediation, DISA STIG hardening, MDE/Sentinel/KQL threat hunting, Azure NSG/firewall controls, Security+, GitHub evidence, and supported reduction metrics.
- Confirmed project detail pages expose case-study credibility through role, tools, evidence chains, problem, approach, evidence, outcome, and lessons.
- Found and fixed mobile horizontal overflow on the Akira ransomware project detail page caused by a long SHA256 hash in an Evidence list item.
- Added scoped long-token wrapping to project detail narrative content without changing any project copy.
- Revalidated all four project detail pages on mobile after the fix.
- Captured credibility screenshots and audit JSON.
- Marked Phase 15.4 and Phase 15.5 complete in `codex/TASKS.md`.

### Files Changed

- `components/sections/ProjectDetail.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-15-recruiter-review/`

### Issues Found

- Akira ransomware project detail mobile view overflowed horizontally at 390px because a SHA256 hash could not wrap inside the Evidence card.
- `next-env.d.ts` changed during production build validation and was restored as unrelated generated churn.

### Decisions Made

- Keep the existing cybersecurity copy and claims intact.
- Use scoped wrapping in project detail narrative sections so long hashes, paths, and technical artifacts do not break mobile layout.
- Treat Phase 15 as complete because the final recruiter review and tracking update are both done.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on all audited credibility pages; post-fix mobile validation passed on all four project detail pages.

### Next Steps

- Continue with Phase 16.1: check public links.

---

## 2026-05-26 — Phase 15.3: Resume/GitHub/Contact Review

### Summary

Audited whether recruiters can quickly find Bryan's resume, GitHub proof, and contact paths.

### Completed

- Reviewed Home, Resume, and Contact at 1440px desktop and 390px mobile widths.
- Confirmed sticky nav exposes `Resume` and `Contact` on desktop and mobile.
- Confirmed the Home first viewport exposes `Download Resume` and `View GitHub`.
- Confirmed the Resume page exposes a prominent `Full Resume` PDF action above the fold.
- Confirmed the Contact page exposes LinkedIn, GitHub, and Resume cards, with GitHub visible in the mobile first viewport and Resume still available through nav plus the lower card.
- Captured action-path screenshots and audit JSON.
- Marked Phase 15.3 complete in `codex/TASKS.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-15-recruiter-review/`

### Issues Found

- No action-path blocker found.
- No horizontal overflow or Browser console warnings/errors were found during the 15.3 review.

### Decisions Made

- No UI changes are needed for Phase 15.3 because resume, GitHub, and contact paths are already visible without adding duplicate action surfaces.

### Checks Run

Result:
- Browser validation: Pass on Home, Resume, and Contact desktop/mobile.
- Lint/build not run; documentation and screenshot-only phase audit with no code changes.

### Next Steps

- Continue with Phase 15.4: check cybersecurity credibility.

---

## 2026-05-25 — Phase 15.2: Project Discoverability Review

### Summary

Audited whether recruiters can quickly find the strongest project evidence from Home and the Projects page.

### Completed

- Reviewed the Home first viewport project path at 1440px desktop and 390px mobile widths.
- Reviewed the Projects page at 1440px desktop and 390px mobile widths.
- Confirmed the Projects page has a visible four-link case-study index above the fold on desktop and mobile.
- Confirmed `Vulnerability Management Program Implementation` and `DISA STIG Remediation Project` lead both the project index and the card grid.
- Captured discoverability screenshots and audit JSON.
- Marked Phase 15.2 complete in `codex/TASKS.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-15-recruiter-review/`

### Issues Found

- No project-discoverability blocker found.
- No horizontal overflow or Browser console errors were found during the 15.2 review.

### Decisions Made

- No UI changes are needed for Phase 15.2 because strongest projects are already prominent through the Home CTA, Projects quick index, and first-card ordering.

### Checks Run

Result:
- Browser validation: Pass on Home and Projects desktop/mobile.
- Lint/build not run; documentation and screenshot-only phase audit with no code changes.

### Next Steps

- Continue with Phase 15.3: check if resume/GitHub/contact are obvious.

---

## 2026-05-25 — Phase 15.1: Recruiter 5-Second Read

### Summary

Audited the Home first viewport to check whether a recruiter can quickly understand who Bryan is, what cybersecurity work he does, and where the proof/actions are.

### Completed

- Reviewed Home at 1440px desktop and 390px mobile widths.
- Confirmed the first viewport exposes the name, role, positioning sentence, proof chips, primary actions, and portfolio signal panel.
- Confirmed desktop also previews the Evidence section below the hero.
- Captured first-read screenshots and audit JSON.
- Marked Phase 15.1 complete in `codex/TASKS.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-15-recruiter-review/`

### Issues Found

- No first-read blocker found.
- No horizontal overflow or Browser console errors were found during the 15.1 review.

### Decisions Made

- No UI changes are needed for Phase 15.1 because the Home first viewport already communicates Bryan's role, focus areas, proof signals, and primary actions quickly.

### Checks Run

Result:
- Browser validation: Pass on Home desktop and mobile.
- Lint/build not run; documentation and screenshot-only phase audit with no code changes.

### Next Steps

- Continue with Phase 15.2: check if strongest projects are easy to find.

---

## 2026-05-25 — Small Fixes

- Area: updated project-card GitHub icon links to use the same white border, glow, hover, and focus treatment as the Contact GitHub badge.
- Files: `components/sections/FeaturedProjects.tsx`, `codex/WORKLOG.md`, `codex/screenshots/project-github-glow/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Projects desktop/mobile and Home desktop with no horizontal overflow or console errors.
- Notes: `next-env.d.ts` changed during build validation and was restored as generated churn.

---

## 2026-05-25 — Small Fixes

- Area: applied matching glow/ring treatments to all Contact card badges and added accent-aware secondary button hover/focus styling so Contact buttons match their card color schemes instead of always highlighting cyan.
- Files: `app/contact/page.tsx`, `components/ui/Button.tsx`, `codex/WORKLOG.md`, `codex/screenshots/contact-badge-button-accents/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Contact desktop and mobile with no horizontal overflow or console errors.
- Notes: `next-env.d.ts` changed during build validation and was restored as generated churn.

---

## 2026-05-25 — Small Fixes

- Area: added a restrained white outline/glow to the Contact GitHub Invertocat badge so the white SVG feels intentional against the card surface.
- Files: `app/contact/page.tsx`, `codex/WORKLOG.md`, `codex/screenshots/contact-github-logo/`.
- Checks: `npm.cmd run lint` pass; Browser validation pass on Contact desktop with no horizontal overflow or console errors.
- Notes: build deferred because this is a localized style-only micro-change after the previous Contact build pass.

---

## 2026-05-25 — Small Fixes

- Area: updated the Contact GitHub card to use the local GitHub Invertocat SVG in the card badge and the GitHub lockup SVG as the button label, matching the LinkedIn logo-button treatment.
- Files: `app/contact/page.tsx`, `components/ui/GitHubLogo.tsx`, `public/images/logos/GitHub_Invertocat_White.svg`, `public/images/logos/GitHub_Lockup_White_Clearspace.svg`, `codex/WORKLOG.md`, `codex/screenshots/contact-github-logo/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Contact desktop and mobile with loaded local GitHub SVGs, no horizontal overflow, and no console errors.
- Notes: `next-env.d.ts` changed during build validation and was restored as generated churn.

---

## 2026-05-25 — Small Fixes

- Area: moved the LinkedIn logo assets into `public/images/logos/`, removed the temporary `components/ui/linkedin-logo/` staging folder, and updated Contact to use the compact LinkedIn bug in the card badge with the LinkedIn wordmark as the button label.
- Files: `app/contact/page.tsx`, `components/ui/Button.tsx`, `components/ui/LinkedInLogo.tsx`, `public/images/logos/LI-In-Bug.png`, `public/images/logos/linkedin-logo.png`, `codex/WORKLOG.md`, `codex/screenshots/contact-linkedin-logo/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Contact desktop and mobile with loaded local logo images, no horizontal overflow, and no console errors.
- Notes: no legal/license text was present in the provided LinkedIn logo folder; `next-env.d.ts` changed during build validation and was restored as generated churn.

---

## 2026-05-25 — Small Fixes

- Area: polished the Contact page cards with aligned evidence-style card treatment, visible LinkedIn/GitHub/Resume icons, and icon-bearing buttons while preserving the existing Resume card wording.
- Files: `app/contact/page.tsx`, `codex/WORKLOG.md`, `codex/screenshots/contact-page-polish/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Contact desktop and mobile with no horizontal overflow or console errors.
- Notes: `next-env.d.ts` changed during build validation and was restored as generated churn.

---

## 2026-05-25 — Phase 14.1-14.4: Performance and Build Pass

### Summary

Completed Phase 14 by running available project checks, inspecting production build output, reviewing generated/static asset sizes, and smoke-validating rendered pages for obvious runtime issues.

### Completed

- Ran lint successfully.
- Ran production build successfully.
- Ran `npm.cmd run test --if-present`; no test script is configured.
- Checked and restored `next-env.d.ts` after production build generated route-reference churn.
- Inspected generated `.next/static` chunk sizes.
- Inspected public asset sizes.
- Browser-validated Home, About, Resume, Projects, Skills, Contact, and one representative project detail route at 390px mobile and 1440px desktop widths.
- Captured viewport screenshots and JSON audit data for the performance/build pass.
- Marked Phase 14.1 through Phase 14.4 complete in `codex/TASKS.md`.

### Files Changed

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-14-performance-build/`

### Issues Found

- No lint, TypeScript, or production build errors were found.
- No page-level horizontal overflow or console warnings/errors were found in Browser validation.
- The in-app browser surface did not expose useful resource timing entries, so runtime performance timing could not be measured there.
- Largest public assets are the self-hosted font files and resume PDF; no large public image payloads were found.
- `next-env.d.ts` changed during production build validation and was restored as unrelated generated churn.

### Decisions Made

- No code changes were needed for Phase 14.
- Keep the self-hosted font strategy because it preserves network-independent builds; revisit font subsetting only if a later performance target requires it.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd run test --if-present
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- `npm.cmd run test --if-present`: Pass, no test script configured
- Browser validation: Pass on Home, About, Resume, Projects, Skills, Contact, and one project detail route at 390px mobile and 1440px desktop widths.

### Next Steps

- Continue with Phase 15.1: check if a recruiter can understand the portfolio in 5 seconds.

---

## 2026-05-25 — Small Fixes

- Area: aligned Home Evidence snapshot cards by making the reveal wrappers and visible card surfaces fill their grid cells; desktop row bottoms now align while mobile remains natural single-column stacking.
- Files: `app/page.tsx`, `codex/WORKLOG.md`, `codex/screenshots/home-snapshot-alignment/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Home desktop and mobile.
- Notes: `next-env.d.ts` changed during build validation and was restored as generated churn.

---

## 2026-05-25 — Phase 13.1-13.5: Content Polish

### Summary

Completed Phase 13 by removing generic framing language and tightening visible profile, project, page-header, and contact copy without adding claims or changing supported outcomes.

### Completed

- Replaced generic wording such as `concise snapshot`, `focused collection`, `role-focused view`, and `evidence-based` in visible page copy.
- Tightened profile positioning and resume snapshot wording while preserving the same skills and role focus.
- Strengthened all four project summaries to lead with the actual work and tools.
- Tightened Projects, Skills, Home Evidence, Featured Projects, and Contact page copy for recruiter scanning.
- Cleaned an unused fallback project-detail placeholder phrase.
- Searched app/component/data copy for tracked generic phrases.
- Validated Home, About, Resume, Projects, Skills, Contact, and one representative project detail route at 390px mobile and 1440px desktop widths.
- Captured viewport screenshots and JSON audit data for the content polish pass.
- Ran lint and production build successfully.
- Restored `next-env.d.ts` after production build generated route-reference churn.
- Marked Phase 13.1 through Phase 13.5 complete in `codex/TASKS.md`.

### Files Changed

- `app/contact/page.tsx`
- `app/page.tsx`
- `app/projects/page.tsx`
- `app/skills/page.tsx`
- `components/sections/FeaturedProjects.tsx`
- `components/sections/ProjectDetail.tsx`
- `components/sections/SkillsOverview.tsx`
- `lib/data/profile.ts`
- `lib/data/projects.ts`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-13-content-polish/`

### Issues Found

- Several visible section descriptions used generic framing instead of naming the actual evidence or work.
- Project summaries were accurate but could lead with the proof-of-work more directly.
- Browser text-overflow candidates were limited to the hidden skip link and intentionally truncated technical strings; no page-level overflow was found.
- `next-env.d.ts` changed during production build validation and was restored as unrelated generated churn.

### Decisions Made

- Treat Bryan's request to complete Phase 13 as approval for conservative copy polish within the roadmap scope.
- Preserve claims, metrics, tools, roles, button labels, destinations, and outcomes.
- Prefer direct evidence wording over broad marketing phrases.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home, About, Resume, Projects, Skills, Contact, and one project detail route at 390px mobile and 1440px desktop widths.

### Next Steps

- Continue with Phase 14.1: run lint/build/test commands as available.

---

## 2026-05-25 — Small Fixes

- Area: tightened mobile project-card spacing by limiting equal-height grid rows and fixed section minimum heights to tablet/desktop breakpoints; mobile cards now size naturally while desktop card alignment is preserved.
- Files: `components/sections/FeaturedProjects.tsx`, `codex/WORKLOG.md`, `codex/screenshots/project-card-mobile-spacing/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Projects mobile, Home mobile, and Projects desktop.
- Notes: `next-env.d.ts` changed during build validation and was restored as generated churn.

---

## 2026-05-25 — Phase 12.1-12.7: Accessibility and Readability Pass

### Summary

Completed Phase 12 by tightening semantic heading structure, keyboard access, visible labels, contrast, and readability without changing substantive portfolio copy.

### Completed

- Added a site-wide skip link before navigation.
- Added a shared `main-content` target to the page container.
- Adjusted reusable project and skill card heading levels so nested section cards do not flatten the heading hierarchy.
- Improved very small muted label contrast in dashboard and project preview surfaces.
- Audited Home, About, Resume, Projects, Skills, Contact, and one representative project detail route at 390px mobile and 1440px desktop widths.
- Captured viewport screenshots and JSON audit data for the accessibility/readability pass.
- Ran lint and production build successfully.
- Restored `next-env.d.ts` after production build generated route-reference churn.
- Marked Phase 12.1 through Phase 12.7 complete in `codex/TASKS.md`.

### Files Changed

- `app/layout.tsx`
- `components/layout/PageContainer.tsx`
- `components/sections/FeaturedProjects.tsx`
- `components/sections/ImpactMetricsStrip.tsx`
- `components/sections/RiskReductionDashboard.tsx`
- `components/sections/SkillsOverview.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-12-accessibility-readability/`

### Issues Found

- Nested reusable card headings needed contextual heading levels on Home versus the Projects and Skills pages.
- Some micro labels were readable visually but too muted for an accessibility pass.
- The quick contrast script flagged primary button text because it cannot resolve gradient backgrounds; visual/button styling remains acceptable.
- `next-env.d.ts` changed during production build validation and was restored as unrelated generated churn.

### Decisions Made

- Keep the skip link site-wide as a baseline keyboard navigation affordance.
- Use contextual heading levels for reusable section components while preserving their existing visual classes.
- Keep micro labels at stronger slate contrast when they carry meaningful status or axis text.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home, About, Resume, Projects, Skills, Contact, and one project detail route at 390px mobile and 1440px desktop widths.

### Next Steps

- Continue with Phase 13.1: remove generic AI-sounding phrases, preserving substantive copy unless Bryan approves changes.

---

## 2026-05-25 — Phase 11.1-11.4: Responsive Design Pass

### Summary

Completed Phase 11 by testing the portfolio across narrow mobile, mobile, tablet, laptop, and desktop widths, then fixing the remaining 320px overflow issues.

### Completed

- Tested Home, About, Resume, Projects, Skills, Contact, and a representative project detail route.
- Tested widths: 320px, 390px, 768px, 1024px, and 1440px.
- Captured viewport screenshots and JSON audit data for the responsive pass.
- Fixed narrow-width overflow from long compact text by adding `break-words` to the shared `compact-copy` utility.
- Fixed narrow Resume skill heading wrapping by adding `break-words` to the snapshot title class.
- Fixed Home 320px overflow from reveal wrappers in grid layouts by making `Reveal` default to `min-w-0`.
- Re-ran the full responsive matrix after fixes.
- Ran lint and production build successfully.
- Restored `next-env.d.ts` after production build generated route-reference churn.
- Marked Phase 11.1 through Phase 11.4 complete in `codex/TASKS.md`.

### Files Changed

- `app/globals.css`
- `app/resume/page.tsx`
- `components/ui/Reveal.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-11-responsive-pass/`

### Issues Found

- Initial 320px audit found page-level horizontal overflow on Home, About, and Resume.
- About and Resume overflow came from long compact text, especially the Security+ verification ID.
- Home overflow came from `Reveal` wrappers around the snapshot cards acting as grid items without a `min-w-0` default.
- Final responsive audit found no page-level horizontal overflow, no clipped buttons, and no console warnings/errors across tested pages and widths.

### Decisions Made

- Keep `compact-copy` safe for long supported strings by default.
- Keep `Reveal` safe as a grid/flex child by default with `min-w-0`.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass across Home, About, Resume, Projects, Skills, Contact, and one project detail route at 320px, 390px, 768px, 1024px, and 1440px widths.

### Next Steps

- Continue with Phase 12.1: check semantic headings.

---

## 2026-05-25 — Phase 10.1-10.5: Animations and Interactions

### Summary

Completed Phase 10 by standardizing restrained reveal motion across major non-Home page sections while leaving the already-tuned Home page unchanged in this pass.

### Completed

- Added Phase 10 scope for applying the shared `Reveal` pattern to major non-Home page sections.
- Applied reveal motion to About page header, focus card, profile highlights, and target roles.
- Applied reveal motion to Resume page header/CTA, experience snapshot, profile card, and skills snapshot.
- Applied reveal motion to Projects page header, case-study index, and project grid wrapper; project cards retain their existing card-level animation.
- Applied reveal motion to Skills page header and skill category cards.
- Applied reveal motion to Contact page header and contact cards.
- Applied reveal motion to project detail page header, visual/stat panel, role/tools/evidence panel, and case-study sections.
- Preserved reduced-motion behavior through the shared `Reveal` component.
- Ran lint, production build, and Browser validation across affected pages.
- Marked Phase 10.1 through Phase 10.5 complete in `codex/TASKS.md`.

### Files Changed

- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/projects/page.tsx`
- `app/resume/page.tsx`
- `app/skills/page.tsx`
- `components/sections/ProjectDetail.tsx`
- `components/sections/SkillsOverview.tsx`
- `components/ui/Reveal.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-10-reveal-pass/`

### Issues Found

- `next-env.d.ts` changed during production build validation and was restored as unrelated generated churn.
- Browser validation found no page-level horizontal overflow and no console warnings/errors on affected pages at tested desktop and mobile widths.

### Decisions Made

- Use `Reveal` for meaningful blocks only: page headers, major cards, section groups, repeated cards, and project detail sections.
- Do not animate every badge, chip, paragraph, nav item, footer element, or tiny text row.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on About, Resume, Projects, Skills, Contact, and one representative project detail route at desktop and 390px mobile widths.

### Next Steps

- Continue with Phase 11.1: test mobile, tablet, laptop, and desktop widths.

---

## 2026-05-25 — Small Fixes

- Area: added consistent Home reveal animation to the Evidence section heading, the Education / Certificates / Experience / Security Impact Metrics snapshot cards, and the Featured Projects heading; existing hero, dashboards, and project-card animations remain intact.
- Files: `app/page.tsx`, `components/sections/FeaturedProjects.tsx`, `components/ui/Reveal.tsx`, `codex/WORKLOG.md`, `codex/screenshots/home-reveal-animations/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Home desktop and 390px mobile.
- Notes: New `Reveal` component centralizes the subtle fade/slide-in behavior and respects reduced-motion preferences.

---

## 2026-05-25 — Small Fixes

- Area: matched `Network Security Dashboard` load-in behavior to the remediation dashboard by adding the same outer dashboard entrance motion, badge entrance motion, and metric-card entrance motion while preserving the existing reduction bar animation and reduced-motion handling.
- Files: `components/sections/ImpactMetricsStrip.tsx`, `codex/WORKLOG.md`, `codex/screenshots/network-dashboard-animation/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Home desktop and 390px mobile.
- Notes: `next-env.d.ts` changed during build validation and was restored as generated churn; stale screenshots from the removed evidence map were cleaned up.

---

## 2026-05-25 — Workkit Adjustments and Evidence Map Review

- Adjustment: added a rule that workkit/process updates should be labeled as `Adjustment` or `Improvement` in tracking entries.
- Improvement: added duplicate-proof-surface guidance so new visual cards are checked against nearby claims, metrics, tool lists, and workflow summaries before being added.
- Improvement: added guidance to verify shared wrapper components forward arbitrary HTML props before relying on `aria-*`, `data-*`, or role attributes.
- Improvement: added guidance to check and restore unrelated generated churn such as `next-env.d.ts` after production build validation.
- Evidence section: refreshed Home and confirmed the new evidence map repeated hero `Active Portfolio Signal` information, then removed the map from Home and deleted the unused component.
- Files: `AGENTS.md`, `codex/TASKS.md`, `codex/PROJECT_MEMORY.md`, `codex/WORKLOG.md`, `app/page.tsx`, `components/sections/SecurityEvidenceMap.tsx`, `codex/screenshots/evidence-map-review/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Home desktop and 390px mobile.
- Notes: Network dashboard load-in behavior remains the next fix after the duplicate visual is removed.

---

## 2026-05-25 — Phase 9.1-9.5: Cybersecurity Visual Elements

### Summary

Completed Phase 9 by adding a restrained security evidence workflow visual to the Home evidence section and confirming the previous Network Security Dashboard animation note had already been addressed.

### Completed

- Reviewed the latest worklog note about the Network Security Dashboard load-in behavior and confirmed the follow-up entry already fixed it.
- Added a new `SecurityEvidenceMap` component that connects supported portfolio workflows and tools without adding unsupported claims.
- Placed the visual between the Home evidence section header and the existing remediation/network security dashboards.
- Used only supported visual anchors: Tenable, PowerShell, DISA STIG, MDE / Sentinel, KQL pivots, Azure NSG, MITRE ATT&CK, GitHub evidence, and scan exports.
- Kept the treatment restrained with terminal-style surface, subtle grid texture, small-radius tiles, muted connectors, and existing accent colors.
- Removed an unused `Folder` import from the Resume page that lint surfaced during validation.
- Captured Home desktop/mobile screenshots and a Resume smoke screenshot.
- Marked Phase 9.1 through Phase 9.5 complete in `codex/TASKS.md`.

### Files Changed

- `app/page.tsx`
- `app/resume/page.tsx`
- `components/sections/SecurityEvidenceMap.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-9-security-visuals/`

### Issues Found

- The first implementation placed an `aria-label` on the shared `Card` component, but `Card` does not forward arbitrary HTML attributes. The visual now includes a hidden heading inside the section instead of changing the shared Card API.
- Browser validation reported only localized hidden/text truncation candidates and known project-preview truncation, with no page-level horizontal overflow.
- `next-env.d.ts` briefly changed during production build validation and was restored to keep the diff focused.

### Decisions Made

- Treat the new evidence map as a workflow connector, not a new metrics surface.
- Keep cybersecurity visuals tied to Bryan's actual proof areas instead of generic lock, matrix, or neon-hacker motifs.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home desktop and 390px mobile; Resume desktop smoke check passed.

### Next Steps

- Continue with Phase 10.1: audit existing interactions.

---

## 2026-05-23 -- Reminder Callout (Review this with me on next start)

- The Remediation Dashboard to have a load in animation but the network security dashboard does not. If you the network security dashboard is on the screen and you refresh the Network Security Dashboard stays stagnant.

---

## 2026-05-24 — Small Fixes

- Home metrics: moved `Network Security Dashboard` below the remediation dashboard and changed its reduction bar to animate from 0 to 100% like the remediation bars.
- Files: `app/page.tsx`, `components/sections/ImpactMetricsStrip.tsx`, `codex/WORKLOG.md`, `codex/screenshots/phase-8-network-dashboard-order/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Home desktop and 390px mobile.
- Notes: Network dashboard remains scoped to the resume-backed brute force metric; remediation dashboard remains scoped to vulnerability reductions.

---

## 2026-05-24 — Phase 8.1-8.5: Impact Metrics Section

### Summary

Completed Phase 8 by adding a first-read impact metrics strip to the Home evidence section using supported resume-backed impact metrics.

### Completed

- Identified supported metrics from `vulnerabilityReductionStats` and the resume PDF.
- Added a reusable `ImpactMetricsStrip` component for supplemental impact metrics.
- Added the resume-backed brute force reduction metric to `impactMetrics`.
- Added Cypress College education details from the resume PDF.
- Added resume-backed skills to the shared skills data.
- Placed the supplemental brute force impact callout above the existing remediation dashboard on Home.
- Kept the detailed `RiskReductionDashboard` as the owner of the vulnerability reduction metrics.
- Validated Home, About, Resume, and Skills at desktop and mobile widths in Browser.
- Captured Phase 8 screenshots and validation data.
- Ran lint and production build successfully.
- Marked Phase 8.1 through Phase 8.5 complete in `codex/TASKS.md`.

### Files Changed

- `app/page.tsx`
- `app/resume/page.tsx`
- `components/sections/ImpactMetricsStrip.tsx`
- `lib/data/resume.ts`
- `lib/data/skills.ts`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-8-impact-metrics/`
- `codex/screenshots/phase-8-source-truth-additions/`

### Issues Found

- The first metric-strip pass used an off-card decorative glow that triggered an internal overflow check even though page-level overflow was zero; the glow was tightened inside the card.
- After adding the fourth metric, the first four-card pass squeezed the `100%` value beside the badge on desktop; the metric-card header was adjusted so the value has its own line.
- Bryan pointed out that the four-card impact strip duplicated the vulnerability metrics already shown in the dashboard; the Home strip was trimmed to a single supplemental brute force impact callout.
- Bryan then asked for the supplemental callout to be called `Network Security Dashboard` and mimic the remediation dashboard design; it now uses the same terminal-style dashboard treatment.
- Browser validation found no page-level horizontal overflow, no callout internal overflow, and no console warnings/errors on Home, About, Resume, and Skills at tested desktop and mobile widths.

### Decisions Made

- Use the detailed remediation dashboard for the existing 100%, 92%, and 88% vulnerability reduction metrics.
- Use the Home strip only for supplemental impact not already covered by the dashboard.
- Use matching dashboard patterns for network security and remediation metrics so the section feels intentional rather than bolted on.
- Keep the Resume page supported metrics list broader than Home because it functions as a resume snapshot rather than a section-level visual.
- Do not show the intern title from the resume PDF on the site.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Home, About, Resume, and Skills at 1280px desktop and 390px mobile widths; follow-up Home pass confirmed the Network Security Dashboard, no duplicate impact cards, and no horizontal overflow.

### Next Steps

- Continue with Phase 9.1: add tasteful security-themed visuals.

---

## 2026-05-24 — Small Fixes

- Resume: strengthened Profile and Skills Snapshot card titles with a subtle evidence left rule, slightly larger heading size, and stronger contrast.
- Files: `app/resume/page.tsx`, `codex/WORKLOG.md`, `codex/screenshots/resume-title-emphasis/`.
- Checks: `npm.cmd run lint` pass; `npm.cmd run build` pass; Browser validation pass on Resume at 1440px desktop and 390px mobile.
- Notes: No title or text wording changed.

---

## 2026-05-24 — Phase 7.1-7.5: Experience / Resume Snapshot Section

### Summary

Completed Phase 7 by improving the Resume page's experience snapshot, supported metrics treatment, and resume CTA area.

### Completed

- Added a dedicated `Experience Snapshot` card near the top of the Resume page.
- Used the existing Experience resume highlight body without rewriting it.
- Surfaced supported vulnerability reduction metrics from `vulnerabilityReductionStats`.
- Reworked the Resume Profile card to focus on Education and Certificates after moving Experience and metrics into the top snapshot.
- Added a clearer `Resume Action` row with the existing `Download PDF` and `View Projects` labels.
- Added icons to Resume page CTA buttons.
- Validated the Resume page at desktop and mobile widths in Browser.
- Captured Phase 7 screenshots and validation data.
- Ran lint and production build successfully.
- Marked Phase 7.1 through Phase 7.5 complete in `codex/TASKS.md`.

### Files Changed

- `app/resume/page.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-7-experience-resume/`

### Issues Found

- The previous Resume page contained the right information, but Experience and Vulnerability Reduction Metrics were buried in the Profile grid.
- Browser validation found no horizontal overflow, no text parent-overflow candidates, and no console warnings/errors on Resume at tested desktop and mobile widths.

### Decisions Made

- Keep the Resume page experience copy unchanged and improve the layout around it.
- Use only already-supported vulnerability reduction metrics for the Resume snapshot.
- Keep Education and Certificates in the Profile card after surfacing Experience and metrics in the stronger top section.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Resume at 1440px desktop and 390px mobile widths.

### Next Steps

- Continue with Phase 8.1: identify supported metrics.

---

## 2026-05-24 — Small Fixes

- Workkit: added micro-change tracking, compact worklog, batching, and risk-scaled validation rules to reduce usage while preserving traceability.
- Files: `AGENTS.md`, `codex/TASKS.md`, `codex/PROJECT_MEMORY.md`, `codex/WORKLOG.md`.
- Checks: Not run; markdown-only process update.
- Notes: Major phase work still requires full roadmap/memory/worklog tracking and full checks.

---

## 2026-05-24 — About Page Formatting: Education Highlight

### Summary

Matched the About page education highlight formatting to the Home and Resume page highlight formatting.

### Completed

- Added `whitespace-pre-line` to About page profile highlight body text.
- Preserved the existing education wording while honoring the line breaks already present in shared resume highlight data.

### Files Changed

- `app/about/page.tsx`
- `codex/WORKLOG.md`

### Issues Found

- About rendered shared highlight text as a wrapped paragraph, while Home and Resume preserved the intended line breaks.

### Decisions Made

- Use the same `whitespace-pre-line` rendering pattern already used on Home and Resume for shared resume highlight text.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

---

## 2026-05-24 — Phase 6 Refinement: Automation Tools Skill

### Summary

Added `Automation Tools` back under Automation / Scripting after Bryan approved it.

### Completed

- Updated the shared skills data so Skills and Resume include `Automation Tools`.
- Updated project memory with the approved Automation / Scripting supporting capability list.

### Files Changed

- `lib/data/skills.ts`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Keep `Automation Tools` as a supporting capability under Automation / Scripting.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

---

## 2026-05-24 — Phase 6 Refinement: Skills Capitalization

### Summary

Updated skill labels and Skills page taxonomy labels to use title-style capitalization.

### Completed

- Capitalized skill labels in `lib/data/skills.ts`.
- Preserved technical acronyms including `KQL`, `SQL`, `CVE/CWE`, `CVSS`, `SIEM/EDR`, and `DISA STIG`.
- Capitalized `Core Tools / Methods` and `Supporting Capabilities` labels on the Skills page.
- Updated project memory with the capitalization convention.

### Files Changed

- `lib/data/skills.ts`
- `components/sections/SkillsOverview.tsx`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Use title-style capitalization for skill labels while preserving established technical acronym casing.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

---

## 2026-05-24 — Phase 6 Refinement: Automated Remediation Skill

### Summary

Added `Automated Remediation` as an approved supporting capability under Automation / Scripting.

### Completed

- Updated the shared skills data so the Skills and Resume pages include the new capability.
- Updated project memory with the approved Automation / Scripting supporting capabilities.

### Files Changed

- `lib/data/skills.ts`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Keep `Automated Remediation` under Automation / Scripting because it connects scripting work to vulnerability remediation proof-of-work.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

---

## 2026-05-24 — Phase 6 Refinement: Skill Placement Updates

### Summary

Updated skill placement based on Bryan's direction.

### Completed

- Moved `SQL` from Automation / Scripting into SecOps / Detection Engineering as a supporting capability.
- Added `Web App Development` and `Full-Stack Development` as supporting capabilities under Automation / Scripting.
- Recorded the approved placement decision in project memory.

### Files Changed

- `lib/data/skills.ts`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Treat `SQL` as more relevant to SecOps analytics/querying than automation in the current skills taxonomy.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

---

## 2026-05-24 — Phase 6 Refinement: Core Skill Chip Visibility

### Summary

Improved the visibility of the core skill chips on the Skills page.

### Completed

- Muted the `Core tools / methods` label so it no longer competes with the skill chips.
- Increased core skill chip contrast with near-white text, a stronger evidence border, heavier mono weight, and a more distinct raised surface.
- Validated the Skills page at desktop and mobile widths in Browser.
- Captured updated screenshots and validation data.

### Files Changed

- `components/sections/SkillsOverview.tsx`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-6-skill-chip-visibility/`

### Issues Found

- Before the update, the core skill chips blended into the `Core tools / methods` label because both used similar evidence-color emphasis.
- Browser validation found no horizontal overflow and no console warnings/errors after the change.

### Decisions Made

- Keep taxonomy labels quieter than the actual skill chips so recruiter scanning lands on the tools first.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Skills at 1440px desktop and 390px mobile widths.

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

---

## 2026-05-24 — Workkit Update: Organizational Label Rule

### Summary

Added a durable clarification that Codex may rename organizational labels when needed for clearer grouping without treating that as substantive copy rewriting.

### Completed

- Added the rule to `AGENTS.md` under the content preservation guidance.
- Added a matching working rule to `codex/TASKS.md`.
- Recorded the rule in `codex/PROJECT_MEMORY.md` under approved decisions and content rules.

### Files Changed

- `AGENTS.md`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`

### Issues Found

- None.

### Decisions Made

- Skill category names, card grouping labels, and section-adjacent taxonomy labels may be renamed for clearer grouping.
- Substantive claims, tools, experience, metrics, descriptions, outcomes, button/link labels, and other core page copy still require Bryan's approval before rewriting.

### Checks Run

Result:
- Not run; markdown-only workkit update.

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

---

## 2026-05-24 — Phase 6.1-6.6: Skills and Tooling Section

### Summary

Completed the Phase 6 skills and tooling pass across the Skills page and Resume skills snapshot.

### Completed

- Audited the existing skills data and rendering surfaces.
- Reworked skills into primary and supporting skills per cybersecurity category.
- Split the old `KQL/SQL` entry so `KQL` stays under SecOps / Detection Engineering and `SQL` stays under Automation / Scripting.
- Added separate categories for Cloud / Network Security and Governance / Compliance Frameworks.
- Rebuilt the Skills page cards with icons, core tools / methods chips, supporting capability lists, and responsive two/three-column layout.
- Updated the Resume skills snapshot to show all six skill groups with compact skill-count badges.
- Validated Skills and Resume at desktop and mobile widths in Browser.
- Captured Phase 6 screenshots and validation data.
- Ran lint and production build successfully.
- Marked Phase 6.1 through Phase 6.6 complete in `codex/TASKS.md`.

### Files Changed

- `lib/data/skills.ts`
- `components/sections/SkillsOverview.tsx`
- `app/resume/page.tsx`
- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/screenshots/phase-6-skills-tooling/`

### Issues Found

- The prior Skills section was accurate but visually flat, with all skills rendered as one badge cluster per group.
- The Resume skills snapshot only showed the first four skill groups, leaving Cloud / Network skills out of that page.
- Browser validation found no horizontal overflow, no text parent-overflow candidates, and no console warnings/errors on Skills or Resume at tested desktop and mobile widths.

### Decisions Made

- Keep skills grouped by recruiter-relevant cybersecurity categories instead of broad generic buckets.
- Keep `KQL` in SecOps / Detection Engineering and preserve `SQL` separately under Automation / Scripting to remove the duplicated KQL concept.
- Keep the Skills page as the fuller tooling surface and make the Resume skills snapshot denser but still complete.

### Checks Run

```bash
npm.cmd run lint
npm.cmd run build
```

Result:
- `npm.cmd run lint`: Pass
- `npm.cmd run build`: Pass
- Browser validation: Pass on Skills and Resume at 1440px desktop and 390px mobile widths.

### Next Steps

- Continue with Phase 7.1: add or improve the experience snapshot.

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
