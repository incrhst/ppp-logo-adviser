# PPP Logo Adviser

Landing page, Cursor skill, and pasteable AI agent prompt for David Bain’s **Pencil-Pen-Pigment (PPP) Logo Test**.

Effectiveness beats attractiveness. The PPP Test asks whether a logo still works when:

1. **Pencil** — it is easy to draw  
2. **Pen** — it is recognisable on the side of a pen  
3. **Pigment** — it is recognisable as a single colour  

## What’s in this repo

| Path | Purpose |
|------|---------|
| `index.html` | Landing page with the framework + resource downloads |
| `.cursor/skills/ppp-logo-test/` | Cursor Agent skill (`SKILL.md` + `reference.md`) |
| `resources/ppp-logo-test-prompt.md` | Prompt you can paste into any AI agent |
| `resources/ppp-logo-test-skill.zip` | Zipped skill for download from the landing page |

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Use the Cursor skill

Copy `.cursor/skills/ppp-logo-test/` into a project’s `.cursor/skills/` folder (or your personal `~/.cursor/skills/`), then ask the agent to run a PPP Logo Test on a mark.

## Use the pasteable prompt

Open `resources/ppp-logo-test-prompt.md`, copy everything below the horizontal rule, and paste it into your agent before sharing a logo.

## Attribution

Framework by [David Bain](https://medium.com/@davidbain) — *The Pencil-Pen-Pigment Logo Test* (2023).
