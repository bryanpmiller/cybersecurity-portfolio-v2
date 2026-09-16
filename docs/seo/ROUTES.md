# Route Inventory

## Main resume extension — 2026-09-16

Added `/resume/main` as the fourth statically generated, indexable resume detail page (14 public content routes total). It has Main Resume metadata, production canonical and sitemap entry, plus labeled PDF iframe and open/download/back links. `/resume/bryanpmiller_resume.pdf` responds 200 application/pdf with SAMEORIGIN; source and public copies are SHA-256 identical. Featured navy selector panel sits before the three unchanged role choices. Verified at desktop 1440px and mobile 390px with no horizontal overflow; earlier three-option audit below is retained as historical evidence.

## Resume selector feature verification — 2026-09-16

This scoped feature record supersedes the empty kit template below only for this request. Production origin: `https://bryanpmiller.com`; framework: Next App Router, static content pages and three finite statically generated resume variants. Root owns documentation; `/root/resume_review` independently verified served HTML and links.

| Route | HTTP | Indexable | Evidence/status |
|---|---:|---|---|
| `/` | 200 | yes | done: one H1, unique metadata/canonical; hero/footer link to selector |
| `/about` | 200 | yes | done: one H1, unique metadata/canonical; unchanged content |
| `/contact` | 200 | yes | done: one H1, unique metadata/canonical; resume entry links to selector |
| `/skills` | 200 | yes | done: one H1, unique metadata/canonical; unchanged content |
| `/projects` | 200 | yes | done: one H1, unique metadata/canonical; unchanged content |
| `/projects/vulnerability-management-program` | 200 | yes | done: one H1, unique metadata/canonical; unchanged content |
| `/projects/disa-stig-remediation` | 200 | yes | done: one H1, unique metadata/canonical; unchanged content |
| `/projects/password-spray-threat-hunt` | 200 | yes | done: one H1, unique metadata/canonical; unchanged content |
| `/projects/akira-ransomware-threat-hunt` | 200 | yes | done: one H1, unique metadata/canonical; unchanged content |
| `/resume` | 200 | yes | done: one H1; three named card links; responsive 320/390/768/1440px |
| `/resume/soc` | 200 | yes | done: correct role metadata, labeled iframe, open/download/back links |
| `/resume/vulnerability` | 200 | yes | done: correct role metadata, labeled iframe, open/download/back links |
| `/resume/it-support` | 200 | yes | done: correct role metadata, labeled iframe, open/download/back links |
| `/resume/unknown` | 404 | no | done: unknown variants excluded by finite parameter policy; noindex |
| `/missing-resume-baseline` | 404 | no | done: framework 404 |

All 13 public routes appear once in sitemap, retain framework-native canonical/social metadata and index/follow policy. All 19 discovered internal targets respond successfully. PDF responses at `/resume/Bryan_Miller_soc.pdf`, `/resume/Bryan_Miller_vulnerability.pdf`, and `/resume/Bryan_Miller_it_support.pdf` return 200 application/pdf with SAMEORIGIN; file SHA-256 values match supplied originals. `/resume/bryanpmiller_resume_public.pdf` remains 200 and retains DENY, as do HTML pages. Structured-data additions and broad content rewriting are n/a for this feature. Browser-specific PDF controls are not application UI; direct open/download actions remain available.

This file holds full route detail so `STATE.md` stays small. Baseline owns initial population; later task owners update only assigned rows or columns through the coordinator. Use one row per rendered route, including non-indexable and error routes.

Allowed audit statuses are `done`, `partial`, `missing`, `incorrect`, `n/a`, and `blocked`. For indexability use `yes` or `no` when decided, `missing` while undecided, and `n/a` when irrelevant. Use `blocked` only with a matching blocker ID in `STATE.md`. A `done` cell needs current source or rendered evidence; `n/a` needs a reason.

## Coverage

| Route source | Discovery command / evidence | Count | Status | Owner |
|---|---|---:|---|---|
| Framework routes | | 0 | missing | baseline |
| Sitemap / navigation / internal links | | 0 | missing | baseline |
| Dynamic route instances and redirects | | 0 | missing | baseline |
| 404 / error behavior | | 0 | missing | baseline |

## Route matrix

| Route | Kind / source | Indexable? | Render mode | Title | Description | Canonical | H1 / semantics | Social | Schema | Links | Images / a11y | Overall | Owner | Evidence / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

For each status cell, put concise evidence or a gap note in the last column. Record exact duplicates, unexpected redirects, orphan routes, query/parameter policy, and excluded private/admin/draft routes. Do not treat a navigation label or source template alone as proof; verify rendered output where the repository can run.

## Route decisions and exceptions

| Pattern / route | Decision or exception | Reason and evidence | Owner | Status |
|---|---|---|---|---|
