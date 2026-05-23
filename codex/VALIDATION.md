# VALIDATION.md — Build, Test, and Review Plan

## Purpose

This file explains how to verify that the project works.

This file lives at:

```text
codex/VALIDATION.md
```

Codex should update this file whenever it discovers or changes commands for running, testing, linting, building, or deploying the project.

---

## Project Commands

Fill these in after inspecting the repo.

### Install

```bash
[TBD]
```

### Run Development Server

```bash
[TBD]
```

### Lint

```bash
[TBD]
```

### Format

```bash
[TBD]
```

### Test

```bash
[TBD]
```

### Build

```bash
[TBD]
```

### Deploy

```bash
[TBD]
```

---

## Manual Test Checklist

### General

- [ ] Project starts without crashing.
- [ ] Main workflow works.
- [ ] Error states are handled.
- [ ] No obvious console errors.
- [ ] No broken links or missing files.
- [ ] README setup steps are accurate.

### Web/UI Projects

- [ ] Homepage or main page loads.
- [ ] Navigation works.
- [ ] Forms validate input.
- [ ] Buttons and links work.
- [ ] Layout works on mobile.
- [ ] Layout works on desktop.
- [ ] Keyboard navigation is usable.
- [ ] Focus states are visible.
- [ ] Color contrast is acceptable.
- [ ] Loading and error states are understandable.

### API/Backend Projects

- [ ] Server starts successfully.
- [ ] Health endpoint works if available.
- [ ] Main endpoints return expected results.
- [ ] Invalid input is handled safely.
- [ ] Auth/permissions work if applicable.
- [ ] Logs are useful but do not leak secrets.

### Script/Automation Projects

- [ ] Script runs with expected arguments.
- [ ] Script handles missing inputs.
- [ ] Script creates expected output.
- [ ] Script logs useful information.
- [ ] Dry-run mode works if available.
- [ ] Failure cases are clear.

---

## Known Validation Gaps

```md
- [ ] Gap:
  - Reason:
  - Risk:
  - Next step:
```

---

## Latest Validation Results

```md
## YYYY-MM-DD

Commands run:

```bash
[command]
```

Results:

- Pass / Fail / Not run

Notes:

- Add notes here.
```
