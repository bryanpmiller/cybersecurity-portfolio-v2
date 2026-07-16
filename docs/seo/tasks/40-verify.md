# Independent Verification

## Read

Read `AGENTS.md`, `docs/seo/README.md`, `docs/seo/STATE.md`, `docs/seo/ACCEPTANCE.md`, all of `docs/seo/ROUTES.md`, applicable repository instructions, prior task handoffs, the current Git status/diff, and the repository's current scripts/configuration. Distrust stale evidence; verify the repository as it exists now.

## Preconditions/ownership

- A fresh verifier who did not implement the SEO changes owns this pass.
- Baseline, decisions, implementation handoffs, route inventory, production origin, indexability policy, and exact file ownership must be recorded in `STATE.md`.
- The coordinator must assign the verifier's exact documentation write paths before work. The verifier does not own application files or fixes; if shared-ledger writes are not assigned, return evidence to the coordinator for recording.
- If the site cannot be built or rendered after safe discovery of repository-native instructions, record the exact failure and corrective owner; do not substitute source inspection for rendered acceptance.

## Actions

1. Reconcile route coverage from framework routes, navigation/internal links, sitemap, dynamic-instance policy, redirects, and 404/error behavior. Resolve every discovered route against `ROUTES.md`; sweep every renderable route, including intentionally non-indexable routes.
2. Inspect built or served HTML and the rendered DOM for every route. Check accurate, route-specific titles and descriptions; duplicate/empty values; one meaningful H1 and logical semantics; social metadata; robots directives; and canonical URLs resolved against the approved origin. Confirm redirects, query/parameter handling, `robots.txt`, sitemap entries, HTTP/header directives where present, and 404 behavior match the indexability policy.
3. Parse every structured-data block. Check syntax, appropriate type and URLs, uniqueness where required, and exact agreement with visible, repository-supported facts. Treat invalid, hidden-only, or embellished claims as failures.
4. Crawl rendered links and sample real navigation. Report broken, redirecting, misleading, or orphaned important routes; verify descriptive anchors, breadcrumbs, and related links against the route graph.
5. Review rendered images/media for correct alt or decorative treatment, intrinsic dimensions where appropriate, loading behavior, captions/context, broken assets, and conservative layout/performance behavior. Inspect screenshots and visible telemetry for secrets, personal data, internal hosts, tokens, customer data, or other sensitive content.
6. Compare visible professional claims with repository evidence. Fail fabricated or overstated clients, employers, metrics, outcomes, certifications, production use, or project classification; preserve cautious lab/demo wording.
7. At desktop and mobile widths, inspect every distinct page template/state plus the homepage, representative project pages, and 404. Check design, responsive behavior, readable content, navigation, focus/accessibility basics, overflow, layout shift, and media cropping. Record viewport and route evidence.
8. Discover and run the repository's current build, lint, test, type, and SEO/audit commands where present, using its package manager and documented invocation. Record UTC time, exact command, scope, exit status, and concise output; prove and assign any pre-existing failure instead of ignoring it.
9. Review the initial worktree record, current `git status`, scoped diff, and `git diff --check` (or repository equivalents). Confirm only approved owned files changed, unrelated work is preserved, no secret was added, generated files are intentional, and no publishing action occurred.
10. Evaluate every `ACCEPTANCE.md` ID independently. For each failure, record criterion, route/scope, expected versus actual result, exact rendered/source/command evidence, reproduction detail, status, and the named corrective owner from `STATE.md`. Return technical/indexing failures to technical, factual/semantic failures to content, link/media/privacy failures to links-media, and scope/ownership or unassigned failures to the coordinator. The coordinator must name an application owner before rework.

## Do not

- Do not repair implementation, rewrite content, weaken criteria, edit `ACCEPTANCE.md`, or verify only changed routes.
- Do not accept source declarations, screenshots, prior logs, or an agent's self-report as a substitute for current rendered and command evidence.
- Do not mark `partial`, `missing`, `incorrect`, or `blocked` work as passed, and do not classify a new failure as pre-existing without baseline/diff evidence.
- Do not deploy, merge, push, open a PR, publish, submit to search services, or expose sensitive evidence.

## Evidence/state updates

Within assigned documentation ownership, update route evidence in `ROUTES.md` and give the coordinator normalized rows for `STATE.md` Validation and Acceptance status. Evidence must name routes/files, inspection method or exact command, UTC time, exit status where applicable, result, pre-existing status, and corrective owner. Record blockers only after safe in-scope checks are exhausted. Preserve failing outputs or concise excerpts at a repository-approved evidence path without secrets; never write vague evidence such as `looks good` or `passed`.

## Exit/handoff

Return one of:

- **PASS:** every applicable acceptance ID is independently proven `done` or justified `n/a`, the full rendered route sweep and current commands are evidenced, the diff is within ownership, and no unresolved failure remains.
- **FAIL:** list each failed ID and route/scope with exact reproduction evidence and named corrective owner. Recommend the corresponding implementation brief as Active task; after correction, require a fresh verification of the affected area plus regression checks across the whole site.

Only the coordinator may update gates, change ownership, or declare completion. The handoff must state verifier identity, commit/worktree checked, route counts, commands and exit statuses, desktop/mobile coverage, acceptance result, failures by owner, and one executable next action.
