# Closeout and Handoff

## Read

Read `AGENTS.md`, `docs/seo/README.md`, `docs/seo/STATE.md`, `docs/seo/ROUTES.md`, `docs/seo/ACCEPTANCE.md`, all implementation handoffs, the independent verification result, applicable repository instructions, and the current Git status/diff.

## Preconditions/ownership

- The coordinator owns closeout. Independent verification must be current and `PASS`; every applicable acceptance ID must be `done` or justified `n/a`.
- Any corrected failure must have fresh verifier evidence. A `partial`, `missing`, `incorrect`, or `blocked` criterion reopens its named implementation task and prevents closeout.
- Before writing, assign exact ownership for `docs/seo/STATE.md`, `docs/seo/ROUTES.md`, `docs/seo/IMPLEMENTATION-REPORT.md`, `docs/seo/INTERNAL-LINK-REPORT.md`, and `docs/seo/PR-DESCRIPTION.md`; resolve overlaps and preserve existing useful reports through reconciliation.

## Actions

1. Reconcile `STATE.md` with the current repository: resume header, phase, gates, environment facts, decisions, ownership, changed files, acceptance evidence, validation results, blockers, and one Next action. Reconcile route counts, exceptions, indexability, owners, and final rendered evidence in `ROUTES.md`. Remove contradictions, not historical evidence needed to explain scope or pre-existing failures.
2. Create or update `docs/seo/IMPLEMENTATION-REPORT.md` with scope and approved decisions; reused versus changed behavior; changed files by owner and purpose; a route metadata table covering every route's indexability, title, description, canonical, robots, social metadata, schema, and evidence; acceptance results; exact validation commands with UTC time and exit status; rendered desktop/mobile review; privacy/factual-accuracy review; manual actions; and known limitations.
3. Create or update `docs/seo/INTERNAL-LINK-REPORT.md` with route-source and crawl counts, important entry points/targets, orphan and broken-link results, redirects/exclusions, breadcrumbs/related links/descriptive anchors, sampled navigation evidence, remaining manual actions, and known limitations. Distinguish intentional exclusions from unresolved defects.
4. Create or update `docs/seo/PR-DESCRIPTION.md` as a draft only. Include a suggested title, summary, scoped changes, route/content/link/media impact, validation with exact outcomes, rendered/manual QA, privacy and factual safeguards, risks/known limitations, and post-merge manual actions. Keep claims supported by the diff and verification evidence.
5. Recheck current status/diff against the initial worktree and ownership map after report generation. Confirm all referenced paths/evidence exist, validation is still current for the checked commit/worktree, unrelated changes remain identified, and the reports agree with `STATE.md`, `ROUTES.md`, and `ACCEPTANCE.md`.
6. List manual actions without performing them, with owner, prerequisite, and verification step. Examples include production review, deployment, cache/CDN checks, analytics or search-console validation, sitemap submission, and post-release monitoring. Record limitations with impact, evidence, owner, and whether they are accepted out of scope; an unresolved acceptance defect is not a limitation.

## Do not

- Do not implement fixes during closeout, hide failures as limitations, claim unrun validation, or overwrite unrelated/user-authored report content without reconciliation.
- Do not change acceptance criteria or declare completion from implementation self-reports.
- Do not deploy, merge, push, create/open a PR, publish, release, submit a sitemap, use search-console actions, or perform any external/manual action. A PR description is text only.

## Evidence/state updates

Set the Independent verification and Closeout gates to `done` only when their exact report/validation references are present and current. Record all three report paths in `STATE.md` Changes or Handoff note, keep route detail in `ROUTES.md`, and ensure each applicable acceptance row has a concrete evidence reference. The final Handoff note must list the checked branch/commit/worktree, verifier result, report paths, changed-file scope, validation outcomes, manual actions, known limitations, safety attestation, and one safe next action requiring separate authorization for any publishing operation.

## Exit/handoff

Closeout exits only when the state ledger, route matrix, final implementation report, internal-link report, and PR-description draft agree with the current diff and independent evidence; all applicable acceptance IDs are `done` or justified `n/a`; and manual actions and limitations are explicit. If reconciliation finds any defect or stale evidence, return it to the named owner and rerun `docs/seo/tasks/40-verify.md` before attempting closeout again. Hand off the three report paths and concise status; do not perform the publishing action they describe.
