# Route Inventory

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
