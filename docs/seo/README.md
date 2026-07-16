# SEO Workflow

All paths are relative to the target repository root. The coordinator owns gates and shared state; task agents own only assigned files.

## Start prompt

```text
Act as the SEO coordinator for this repository. Read AGENTS.md, docs/seo/README.md, docs/seo/STATE.md, docs/seo/ACCEPTANCE.md, and docs/seo/tasks/00-baseline.md. Inspect applicable repository instructions and current Git state. Reconcile existing SEO before changes. Run the baseline task only, record route detail in docs/seo/ROUTES.md and coordination evidence in docs/seo/STATE.md, then stop before implementation. Do not deploy, merge, push, open a PR, or publish.
```

## Resume prompt

```text
Resume as the SEO coordinator. Read AGENTS.md, docs/seo/README.md, docs/seo/STATE.md, docs/seo/ACCEPTANCE.md, and the brief named under Active task. Recheck repository instructions, Git state, acceptance status, blockers, decisions, and ownership. Follow the brief, reuse valid work, edit only approved owned files, and record fresh evidence plus one Next action in docs/seo/STATE.md. Stop only if an unresolved blocker prevents the active task after safe in-scope checks are exhausted, or ownership overlaps. Do not deploy, merge, push, open a PR, or publish.
```

## Run order

1. **Baseline:** run `docs/seo/tasks/00-baseline.md`; inspect the full site and classify existing behavior without application edits.
2. **Decision gate:** record the production origin, indexable routes, framework-native approach, and a disjoint owner/file map. Undecided facts are `missing`; use `blocked` only after safe in-scope discovery is exhausted and the dependency has a named row in `docs/seo/STATE.md` Blockers.
3. **Implementation:** run `docs/seo/tasks/10-technical.md`, `docs/seo/tasks/20-content.md`, and `docs/seo/tasks/30-links-media.md` only for confirmed gaps. Work may overlap in time only when file ownership does not.
4. **Verification:** a fresh agent runs `docs/seo/tasks/40-verify.md` against rendered routes, current commands, and the diff. Failures return to their owner.
5. **Closeout:** run `docs/seo/tasks/50-closeout.md`; reconcile state and prepare a handoff without publishing actions.

## Pause and resume

Before pausing, the coordinator updates `docs/seo/STATE.md` with the current phase, active brief, one executable next action, acceptance status, decisions, ownership, changed files, validation evidence, and blockers. Keep route-level detail in `docs/seo/ROUTES.md`. On resume, distrust stale results: inspect current repository state and rerun evidence required by the active gate.

Statuses mean: `done` is currently proven; `partial` is incomplete; `missing` is absent or not started; `incorrect` exists but is wrong; `n/a` is inapplicable with a reason; `blocked` has a concrete dependency, needed action, and owner in Blockers.
