# SECURITY_AND_SECRETS.md

## Purpose

This file defines safety rules for secrets, credentials, user data, and risky changes.

This file lives at:

```text
codex/SECURITY_AND_SECRETS.md
```

Use this file for every project, even small ones.

---

## Secret Handling Rules

Codex must not:

- Print secrets in chat.
- Commit secrets.
- Add real secrets to source files.
- Add real secrets to documentation.
- Hardcode API keys or tokens.
- Log sensitive values.
- Store credentials in screenshots or examples.

Codex may:

- Create `.env.example`.
- Use placeholder values.
- Ask for environment variable names.
- Document where secrets should be configured.

---

## Files That Should Usually Not Be Committed

```text
.env
.env.local
.env.production
*.pem
*.key
*.p12
*.pfx
id_rsa
id_ed25519
credentials.json
token.json
```

---

## Security Review Checklist

- [ ] No secrets committed.
- [ ] `.gitignore` covers sensitive files.
- [ ] `.env.example` uses placeholders only.
- [ ] Inputs are validated.
- [ ] Errors do not leak sensitive internals.
- [ ] Logs do not expose credentials.
- [ ] New dependencies are justified.
- [ ] Auth/permissions are not weakened.
- [ ] File paths are handled safely.
