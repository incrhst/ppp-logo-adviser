# PPP Logo Adviser

[![skills.sh](https://skills.sh/b/incrhst/ppp-logo-adviser)](https://skills.sh/incrhst/ppp-logo-adviser)

Landing page, Cursor skill, and pasteable AI agent prompt for David Bain’s **Pencil-Pen-Pigment (PPP) Logo Test** — a resource from [Incrementic](https://incrementic.com/).

Effectiveness beats attractiveness. The PPP Test asks whether a logo still works when:

1. **Pencil** — it is easy to draw  
2. **Pen** — it is recognisable on the side of a pen  
3. **Pigment** — it is recognisable as a single colour  

Branding follows [brand.incrementic.com](https://brand.incrementic.com/).

## What’s in this repo

| Path | Purpose |
|------|---------|
| `index.html` | Landing page with the framework + resource downloads |
| `.cursor/skills/ppp-logo-test/` | Cursor Agent skill (`SKILL.md` + `reference.md`) |
| `resources/ppp-logo-test-prompt.md` | Prompt you can paste into any AI agent |
| `resources/ppp-logo-test-skill.zip` | Zipped skill for download from the landing page |

## Local preview

```bash
npm run dev
# or: python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy on Vercel

This is a static site. Import the GitHub repo in Vercel, or from the CLI:

```bash
npx vercel
npx vercel --prod
```

No build step, framework, or environment variables are required. `vercel.json` sets `framework: null` and headers for markdown/zip downloads.

If you use a custom domain, update the absolute `og:image` and `og:url` values in `index.html` to match your production URL.

## Install the skill

Use the [skills.sh](https://skills.sh) CLI — works with Cursor and other supported agents:

```bash
# Project install
npx skills add incrhst/ppp-logo-adviser@ppp-logo-test -y

# Global install
npx skills add incrhst/ppp-logo-adviser@ppp-logo-test -g -y
```

List skills in this repo without installing:

```bash
npx skills add incrhst/ppp-logo-adviser --list
```

Learn more: [skills.sh/incrhst/ppp-logo-adviser](https://skills.sh/incrhst/ppp-logo-adviser)

## Use the Cursor skill (manual)

Copy `.cursor/skills/ppp-logo-test/` into a project’s `.cursor/skills/` folder (or your personal `~/.cursor/skills/`), then ask the agent to run a PPP Logo Test on a mark.

Public copies also live under `resources/` for the landing page downloads.

## Use the pasteable prompt

Open `resources/ppp-logo-test-prompt.md`, copy everything below the horizontal rule, and paste it into your agent before sharing a logo.

## Attribution

Framework by [David Bain](https://medium.com/@davidbain) — *The Pencil-Pen-Pigment Logo Test* (2023).
