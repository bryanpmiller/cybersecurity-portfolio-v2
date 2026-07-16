# SEO Work Kit Contract

This kit coordinates SEO work in the repository that contains it. Obey direct user instructions and all applicable repository instructions; record unresolved conflicts in `docs/seo/STATE.md`.

## Required workflow

1. Reconcile existing SEO and kit work before proposing changes.
2. Run `docs/seo/tasks/00-baseline.md` first. Baseline work is read-only for application files and classifies every finding as `done`, `partial`, `missing`, `incorrect`, `n/a`, or `blocked`.
3. Do not implement until `docs/seo/STATE.md` records the production origin, indexable-route decision, framework-native strategy, and exact file ownership.
4. Execute only the active task and owned files. Parallel writes require explicit, disjoint ownership; serialize or reassign overlaps before editing.
5. A fresh verifier runs `docs/seo/tasks/40-verify.md`. Only the coordinator may resolve conflicts, change ownership, advance gates, or declare completion.
6. Use `docs/seo/tasks/50-closeout.md` for the handoff only after acceptance evidence is current.

## Minimal context

At start or resume, read this file, `docs/seo/README.md`, `docs/seo/STATE.md`, `docs/seo/ACCEPTANCE.md`, and the active task brief. Read only relevant `docs/seo/ROUTES.md` rows when the brief requires them. `STATE.md` is the sole mutable coordination ledger; `ROUTES.md` holds route detail. `ACCEPTANCE.md` and task briefs are immutable contracts during a run; record criterion status and evidence in `STATE.md`.

## Safety

Preserve factual accuracy, existing correct SEO, visual design, responsive behavior, accessibility, secrets, and unrelated user changes. Never fabricate clients, employers, outcomes, metrics, certifications, or production claims. Do not expose sensitive screenshots or telemetry. Use repository-native patterns and dependencies where possible.

Record every material decision, owner, blocker, changed file, and fresh validation result in `STATE.md`; route-specific findings belong in `ROUTES.md`. Do not deploy, merge, push, open a PR, publish, or submit to search services without a separate explicit request.
