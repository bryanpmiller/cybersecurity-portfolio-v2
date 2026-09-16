# SEO State

## GitHub handoff — 2026-09-16

- User explicitly authorized committing and pushing `updates/resumepage`. This supersedes the earlier no-push status for this branch only; no merge into main or deployment is requested.
- Final pre-commit lint, TypeScript and diff checks passed; prior final production build, browser checks and independent review remain applicable to unchanged application files.
- Branch retains the requested local-main base `02bbbe3`; original rewording checkout and main are preserved. Exact resume implementation/data/assets and coordination documentation are included in the commit.

## Main resume addition — 2026-09-16

- User authorized a fourth, prominently featured main resume. Root additionally owns `public/resume/bryanpmiller_resume.pdf`; existing owned selector/data/sitemap/header behavior and documentation cover this extension.
- Feature main resume in a full-width navy panel above the three role cards. Central registry includes `/resume/main`, automatically supplying static parameters, metadata, sitemap and PDF SAMEORIGIN exception. Preserve supplied PDF unchanged. Remove the blanket claim that every resume explicitly distinguishes training context, because the supplied main PDF uses different wording.
- Validation: lint, production build, TypeScript and diff checks passed. `/resume/main` generated; served main PDF is 200 application/pdf with SAMEORIGIN and SHA-256 `9417756E5571F4234B372075B37BC774B691AF7D5BEB41A8CA75AE18E3637973`, identical to supplied source. Sitemap includes all four resume detail routes. Chrome screenshots at 1440px and 390px confirm featured panel hierarchy and no horizontal overflow; main CTA navigates to the correctly labeled preview/download view. Original three role cards remain below the featured panel.

## Resume selector implementation — 2026-09-13

- Coordinator/implementation owner: root. Active task: user-approved three-option resume selector plan (takes precedence over the broader SEO kit rollout).
- Worktree: `E:/Code/Security/Portfolios/cybersecurity-portfolio-v2-resumepage`, branch `updates/resumepage`, created from local `main` at `02bbbe3`. Original `updates/rewording` checkout is untouched.
- Baseline: clean tracked state; `npm ci`, lint and production build passed. Local production sweep of all 10 existing content routes returned 200, one H1 and route-specific titles/canonicals; nonexistent route returned 404. Existing SEO metadata and robots are present. New selector/detail routes and assets are missing; PDF embedding is currently blocked by global X-Frame-Options DENY.
- Decision gate: production origin `https://bryanpmiller.com` from `lib/metadata.ts`; all existing public routes plus the three finite resume detail pages are indexable; unknown variants return 404. Preserve Next App Router metadata helper, robots and sitemap conventions. No unrelated SEO/content migration.
- Exact root ownership: `app/resume/page.tsx`, `app/resume/[variant]/page.tsx`, `app/sitemap.ts`, `lib/data/resume.ts`, `lib/data/profile.ts`, `components/ui/Button.tsx`, `components/sections/HeroSection.tsx`, `app/contact/page.tsx`, `components/layout/Footer.tsx`, `next.config.ts`, `public/resume/Bryan_Miller_soc.pdf`, `public/resume/Bryan_Miller_vulnerability.pdf`, `public/resume/Bryan_Miller_it_support.pdf`, `docs/seo/STATE.md`, `docs/seo/ROUTES.md`. Verification evidence/scripts live in ignored `.next/resume-qa/`.
- Decisions: use confirmed local Portfolio_Design_Concept.html Resume design; use supplied OneDrive PDFs byte-for-byte; preserve old PDF asset/link; scope SAMEORIGIN response header overrides to the three new PDFs. Extend shared Button with native download support. No new package dependencies.
- Scope classification: existing framework SEO done at source/baseline route level; three-option selector missing; independent final verification pending. Broad whole-site content rewriting and full SEO-kit activation are n/a for this explicitly scoped feature request; the untouched template ledger below is not a claim that this feature performs that separate project.
- Feature status: done, verified 2026-09-16. Next action: user review of local preview at `http://127.0.0.1:3075/resume`; commit/integration and publishing remain separate actions.
- Implementation: selector and three static detail views, unchanged PDF copies, native download support, selector entry links, metadata/sitemap, PDF-only SAMEORIGIN headers, and explicit shared button focus outline/reduced-motion transitions. Only owned files changed; legacy PDF preserved.
- Command evidence: final `npm run lint`, `npm run build`, `npx tsc --noEmit`, and `git diff --check` passed. Build generated all three resume variants. Final served sweep at port 3075: 13/13 public pages 200 with one H1; unknown variant 404.
- Independent verifier: `/root/resume_review` PASS for source/served routes and final Button delta. Verified unique titles/descriptions, production canonicals/social metadata, sitemap/robots, 19 successful internal targets, unknown variant noindex, application/pdf responses, narrow SAMEORIGIN overrides, unchanged legacy PDF, and all three source SHA-256 matches. Verifier independently ran lint/type/diff checks.
- Browser evidence: Chrome through chrome-devtools-axi; selector at 1440, 768, 390 and 320px without horizontal overflow; three desktop columns and stacked smaller layouts. Desktop/mobile PDF preview renders. Selector/detail/back navigation and keyboard Enter work. All three downloaded PDFs match supplied originals; Open PDF creates a separate tab. Final keyboard focus computes to a navy 2px solid outline with 4px offset. Resume content has no entrance animations; buttons honor reduced motion.
- Limitations: browser engine coverage is Chrome with mobile viewport emulation, not physical iOS/Safari. Browser-native PDF controls vary; persistent external open/download actions provide a fallback. Chrome batch runner has a Windows ESM-path error; individual commands worked. The PDF viewer emitted a browser-extension form-field issue, not a site form error. No deployment/push/merge/PR or PDF edits occurred.

This is the only coordination ledger. Keep it short and current; put route detail in `docs/seo/ROUTES.md`. Replace bracketed fields when discovered. Allowed work-item statuses: `done`, `partial`, `missing`, `incorrect`, `n/a`, `blocked`. Use `blocked` only after safe in-scope discovery cannot resolve a required dependency and a matching row in Blockers names the needed action and owner.

## Resume header

- Updated (UTC): `[not recorded]`
- Coordinator: `[unassigned]`
- Target repository root: `[not recorded]`
- SEO docs path: `docs/seo/`
- Branch / commit: `[not recorded]`
- Initial dirty-worktree summary: `[not inspected]`
- Phase: `baseline`
- Active task: `docs/seo/tasks/00-baseline.md`
- Next action: `Run the baseline brief; make no application changes.`

## Gates

| Gate | Status | Required evidence / blocker |
|---|---|---|
| Installation reconciled | missing | Existing instructions, kit, SEO, and worktree inspected |
| Baseline complete | missing | Full route and current-behavior inventory |
| Decision gate | missing | Origin, indexable routes, native strategy, disjoint ownership not yet confirmed |
| Implementation complete | missing | Not started; requires gap-only changes and owner evidence |
| Independent verification | missing | Not started; requires fresh whole-site rendered and command evidence |
| Closeout | missing | Not started; requires acceptance reconciliation and limitations |

## Environment facts

| Fact | Value | Status | Evidence |
|---|---|---|---|
| Framework / version | `[not discovered]` | missing | |
| Package manager | `[not discovered]` | missing | |
| Build / lint / test / type commands | `[not discovered]` | missing | |
| Production origin | `[not discovered]` | missing | |
| Indexable route rule | `[not decided]` | missing | |
| Framework-native SEO strategy | `[not decided]` | missing | |

## Acceptance status

Criteria are immutable in `docs/seo/ACCEPTANCE.md`. Evidence references point to `docs/seo/ROUTES.md`, Validation rows, generated reports, or exact repository artifacts.

| ID | Status | Evidence reference | Owner |
|---|---|---|---|
| SEO-01 | missing | | coordinator |
| SEO-02 | missing | | baseline |
| SEO-03 | missing | | technical |
| SEO-04 | missing | | technical |
| SEO-05 | missing | | unassigned |
| SEO-06 | missing | | content |
| SEO-07 | missing | | links-media |
| SEO-08 | missing | | links-media |
| SEO-09 | missing | | links-media |
| SEO-10 | missing | | verifier |
| SEO-11 | missing | | coordinator |

## Decisions

| ID | Decision | Evidence / rationale | Status | Owner |
|---|---|---|---|---|
| D-001 | Indexable-route policy | | missing | coordinator |
| D-002 | Framework-native SEO strategy | | missing | coordinator |

## Ownership

No agent may write until its exact paths are listed and overlaps are resolved.

| Task / scope | Exact owned paths | Owner | Status | Overlap check |
|---|---|---|---|---|
| Baseline documentation | `docs/seo/STATE.md`; `docs/seo/ROUTES.md` | coordinator | missing | serialized shared files |

## Changes

| Path | Owner | Purpose | Status |
|---|---|---|---|

## Validation

| UTC | Command / inspection | Scope | Exit | Result | Pre-existing? | Corrective owner |
|---|---|---|---:|---|---|---|

## Blockers

| ID | Dependency | Affected item / criterion | Needed action / fact | Owner | Status |
|---|---|---|---|---|---|

Leave this table empty until a required dependency remains unresolved after safe in-scope discovery. Then add a named row before setting any affected item to `blocked`.

## Handoff note

`[No implementation handoff yet. Resume from Next action.]`
