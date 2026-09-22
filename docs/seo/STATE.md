# Portfolio rewrite / SEO state

## Resume PDF refresh — 2026-09-22

- User requested the four newly supplied resumes with only the phone number removed, replacing existing selector assets. Root owns `public/resume/bryanpmiller_resume.pdf`, `public/resume/Bryan_Miller_soc.pdf`, `public/resume/Bryan_Miller_it_support.pdf`, `public/resume/Bryan_Miller_vulnerability.pdf` and this ledger. No application source/layout/route changes.
- Clean `updates/resumepage` worktree fast-forwarded to merged `origin/main` at `5382dd8` before work; main and original rewording checkout untouched. Existing 14 public route policy, origin and framework metadata unchanged.
- Source PDFs remain untouched in OneDrive. Preserve original content operators/fonts and all other layout; remove phone and redundant separator from the contact line and recenter it. Verify text, decoded PDF objects/streams, links, page geometry and pixel equality outside the contact line. Legacy public PDF already has no phone and is unchanged.
- Asset verification passed: all four remain one page; extracted text equals each source exactly after removing the phone and redundant separator; original fonts/metadata/link rectangles preserved. At 144dpi, all pixel differences fall within the contact-line rectangle (366,107)-(858,125), with zero changes elsewhere. No phone remains in extracted text or decoded PDF objects/streams; OneDrive source SHA-256 values unchanged. Full-page rendered PNGs visually reviewed.
- Source SHA-256 (main/SOC/IT/vulnerability): `02c9df60b6355464aa151c2efa0fa5a19374c1a9625cfffa6ce5287e93284a69`, `ec2a6b9e35e35e5438a6c6d8349b7aa83b782b9125fabff2aa7a43dc7f182fba`, `9ecd6e62261afb58b09d834aa3beb5b94ece267bde0d85f3274d1debefb12650`, `9c9039a68b735bf6d54969919a12e7c85cc61aae8001aaf22a5a46402f759833`.
- Output SHA-256 (same order): `d7bc8e750d6f5ab647a8909dfcad50366e775d88e17119cad09a74763bf3900d`, `09d8402d94a8c470352c315d7f960ad6f2484eb3e33969946201df972a0b1048`, `f6cdc5553f4c5cfe471f5a15922b5e1a4fbcd561eb99d01f07270d55bacb042a`, `37b3194446677b14fc35722ae4ced1d7d110cb2b9dd8082b4347c0bc435153c4`.
- Fresh production build (Next 16.3.5 including TypeScript) and diff checks passed. All four existing local PDF URLs return 200 application/pdf and response hashes match replacements. Preview at `http://127.0.0.1:3075/resume`. Only four PDF assets and this ledger differ from merged main. No push/deployment performed for this refresh; next action is user review.

## Commit handoff — 2026-09-22

User authorized committing the reviewed changes locally and preparing for merge. Base remains current origin/main 52c1de7; resume pages/data/PDFs remain unchanged against that base. Rewording and dependency remediation are the commit scope. Earlier uncommitted-state statements below describe prior checkpoints. No push, PR creation, merge into main or deployment is authorized by this handoff. Retain the recovery stash. Final checks and commit identifier are reported in the task handoff.

## Current integration state — 2026-09-21

User authorized bringing latest main into updates/rewording locally. Branch fast-forwarded to 52c1de7 (merged resume redesign), then uncommitted rewording/security changes reapplied. Recovery snapshot retained in Git stash, named "Safety snapshot: rewording before integrating main 52c1de7". Shared links, sitemap and lockfile reconciled. Resume route sources, lib/data/resume.ts, lib/data/skills.ts, all PDF assets, Button and next.config.ts match origin/main exactly. The current site has 14 public pages including /resume/main, /resume/soc, /resume/vulnerability and /resume/it-support; all 14 remain in the sitemap. Lint, build, TypeScript and audits pass; independent integration verification PASS. All 28 rendered route/viewport checks passed (14 routes at 1440px and 390px): metadata, headings, internal links/fragments, image loading and overflow. Keyboard skip focus and final console check passed. All four resume PDFs return 200 application/pdf with SAMEORIGIN. Evidence: combined-browser-audit.json in the existing local review scratch directory. Historical scope/base/count statements below are superseded by this section. No new commit, push, PR, deployment or merge into main; changes remain uncommitted on updates/rewording.

## Current scope correction — 2026-09-21

User excluded the resume page from this branch. Resume-page edits, shared resume/skills-data edits, and public PDF replacements/additions have been withdrawn relative to the branch base. The separate updates/resumepage branch and original resumes remain untouched. About/home content now uses experience.ts and portfolio-skills.ts; resume-specific profile fields and sitemap date retain base values. General navigation and sitewide branding remain reworded. The earlier resume implementation/validation details below are historical, not current deliverables. Added redacted PDF copies were moved outside the repository to C:/Users/pcgam/AppData/Local/Temp/rewording-withdrawn-resumes for recovery. Coordinator owns the two new data files and consumer import changes. Lint/build passed after isolation; no deployment, merge or push performed.

## Authorized dependency follow-up — 2026-09-21

User approved local dependency remediation after reviewing the Render audit. Coordinator additionally owns package.json, package-lock.json and generated next-env.d.ts compatibility change, plus updates to the three closeout reports. Existing rewrite content preserved. Next.js 16.3.5 and patched transitives are installed/locked. Full and production-only audits: zero vulnerabilities. Lint, types, build, lockfile dry-run and standard git diff --check passed. Fresh independent dependency review PASS. All ten routes passed rendered DOM checks at 1440px and 390px (20 combinations); keyboard skip focus works and final console is clear. Screenshot helper failed to report a saved path, so no new screenshot review is claimed. September 16 results below are historical; the previous nine-advisory limitation is resolved locally, not on Render. No commit, push, PR, merge or deployment occurred. Next action: user review before any release.

- Updated: 2026-09-16 UTC
- Coordinator: Codex; independent verifier: verify_rewrite (read-only)
- Repository: E:/Code/Security/Portfolios/cybersecurity-portfolio-v2
- Branch: updates/rewording; base/local HEAD: 02bbbe36988dcda7f49b2f899117594ac4c5545b (main)
- Initial worktree: clean. Current worktree: approved uncommitted rewrite only.
- Phase: closeout; active brief: docs/seo/tasks/50-closeout.md
- Next action: Bryan reviews the local diff and public resume choices; no publishing action is authorized.

## Gates

| Gate | Status | Evidence |
|---|---|---|
| Installation reconciled | done | AGENTS, kit, existing SEO and initial worktree reviewed |
| Baseline complete | done | Ten page sources, supporting project evidence and resume sources reviewed before edits |
| Decision gate | done | User approved implementation plan; scope and ownership below |
| Implementation complete | done | IMPLEMENTATION-REPORT.md and current diff |
| Independent verification | done | Fresh verifier PASS: built HTML, facts, links, PDF text/pixels/metadata, source hashes |
| Closeout | done | ROUTES.md and all three reports reconciled with worktree |

## Environment and decisions

Next.js 16.2.6 App Router; npm and existing lockfile. Production origin https://bryanpmiller.com. Retain ten static indexable pages, native errors, Metadata API, shared canonical/social helper, robots and sitemap handlers. No new structured data or routes. Approved rewrite supersedes historical copy-preservation guidance. Design and evidence URLs preserved. No unrelated changes from codex/seo-workkit incorporated.

Installed dependencies were restored to main's existing lockfile using npm ci --ignore-scripts. No package/lockfile or generated next-env.d.ts change remains. No dedicated test or SEO script exists.

## Ownership and changes

Coordinator owns all following paths, with serialized writes and no parallel application writers:

- `lib/data/profile.ts`, `lib/data/resume.ts`, `lib/data/skills.ts`, `lib/data/projects.ts`, `lib/metadata.ts`.
- `app/page.tsx`, `app/about/page.tsx`, `app/resume/page.tsx`, `app/skills/page.tsx`, `app/contact/page.tsx`, `app/projects/page.tsx`, `app/sitemap.ts`.
- `components/sections/HeroSection.tsx`, `components/sections/VulnerabilityReductionProof.tsx`, `components/sections/NetworkSecurityProof.tsx`, `components/sections/SkillsOverview.tsx`, `components/sections/ProjectCaseStudyCard.tsx`, `components/sections/ProjectDetail.tsx`, `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`.
- `public/resume/Bryan_Miller_vulnerability_public.pdf`, `public/resume/Bryan_Miller_soc_public.pdf`, `public/resume/Bryan_Miller_it_support_public.pdf`, `public/resume/bryanpmiller_resume_public.pdf`.
- `README.md`, `docs/redesign/README.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md`, `docs/seo/STATE.md`, `docs/seo/ROUTES.md`, `docs/seo/IMPLEMENTATION-REPORT.md`, `docs/seo/INTERNAL-LINK-REPORT.md`, `docs/seo/PR-DESCRIPTION.md`.

Verifier is read-only. Scratch scripts and screenshots remain outside the repository. Changes and purpose are grouped in IMPLEMENTATION-REPORT.md.

## Acceptance

| ID | Status | Evidence | Owner |
|---|---|---|---|
| SEO-01 | done | Initial clean state; final diff restricted to owned paths | coordinator |
| SEO-02 | done | ROUTES.md: ten pages, discovery endpoints, query/redirect/error policy | coordinator |
| SEO-03 | done | Rendered metadata on all ten pages, distinct titles/descriptions and correct canonical/social fields | verifier/coordinator |
| SEO-04 | done | sitemap.xml has ten canonical URLs; robots.txt has correct production sitemap | verifier/coordinator |
| SEO-05 | done | One H1 per page, no heading skips; schema n/a because none exists or was added | verifier/coordinator |
| SEO-06 | done | Resume/project evidence cross-check; professional and lab contexts explicit | verifier |
| SEO-07 | done | INTERNAL-LINK-REPORT.md; no broken/orphan page or invalid fragment | coordinator |
| SEO-08 | done | No broken images; unchanged asset treatment reviewed; PDF privacy checks passed | verifier/coordinator |
| SEO-09 | done | 20 rendered route/viewport checks; screenshots and keyboard skip/focus check | coordinator |
| SEO-10 | done | Validation below; no application quality-check failure | verifier/coordinator |
| SEO-11 | done | No secrets/unrelated files; no commit/push/PR/deploy/merge/search action | coordinator |

## Validation

All checks ran 2026-09-16 UTC against this rewrite. Documentation-only closeout edits followed application validation.

| Command / inspection | Exit / outcome |
|---|---|
| npm run lint | 0 |
| npx tsc --noEmit | 0 |
| npm run build | 0; ten public pages |
| git diff --check | 0 |
| Browser route sweep, 1440px and 390px | 20 passed; metadata, headings, links, images, overflow |
| External HTTP links | 13 of 13 returned 200 |
| PDF verification | Three public variants and legacy alias; no phone content; originals unchanged |
| Fresh independent verifier | PASS |

Evidence files and before/after source hashes: IMPLEMENTATION-REPORT.md. Local detailed audit JSON/screenshots are outside the repository in the documented temporary review directory.

## Blockers and limitations

No unresolved rewrite blocker. Existing dependency audit reports nine advisories (one low, one moderate, six high, one critical); maintainer should triage separately. Native 404 retains pre-existing dual robots output with restrictive noindex. Targeted browser checks are not an exhaustive accessibility/security/performance audit. No production deployment/cache validation was performed.

## Handoff

Checked updates/rewording at the main base above with uncommitted owned changes. Independent verification PASS; lint, types, build, rendered route/link and PDF checks passed. Reports: IMPLEMENTATION-REPORT.md, INTERNAL-LINK-REPORT.md, PR-DESCRIPTION.md (draft only); route metadata in ROUTES.md. Original resumes unchanged. No publishing or merge occurred. Safe next step: user diff review. Any later deployment requires separate authorization and live PDF/cache verification by the maintainer.
