<<<<<<< HEAD
# Agent Guidelines for al-folio

A simple, clean, and responsive Jekyll theme for academics.

## Quick Links by Role

- **Are you a coding agent?** → Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) first (tech stack, build, CI/CD, common pitfalls & solutions)
- **Customizing the site?** → See [`.github/agents/customize.agent.md`](.github/agents/customize.agent.md)
- **Writing documentation?** → See [`.github/agents/docs.agent.md`](.github/agents/docs.agent.md)
- **Need setup/deployment help?** → [INSTALL.md](INSTALL.md)
- **Troubleshooting & FAQ?** → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Customization & theming?** → [CUSTOMIZE.md](CUSTOMIZE.md)
- **Quick 5-min start?** → [QUICKSTART.md](QUICKSTART.md)

## Essential Commands

### Local Development (Docker)

The recommended approach is using Docker.

```bash
# Initial setup & start dev server
docker compose pull && docker compose up
# Site runs at http://localhost:8080

# Rebuild after changing dependencies or Dockerfile
docker compose up --build

# Stop containers and free port 8080
docker compose down
```

### Pre-Commit Checklist

Before every commit, you **must** run these steps:

1.  **Format Code:**
    ```bash
    # (First time only)
    npm install --save-dev prettier @shopify/prettier-plugin-liquid
    # Format all files
    npx prettier . --write
    ```
2.  **Build Locally & Verify:**

    ```bash
    # Rebuild the site
    docker compose up --build

    # Verify by visiting http://localhost:8080.
    # Check navigation, pages, images, and dark mode.
    ```

## Critical Configuration

When modifying `_config.yml`, these **must be updated together**:

- **Personal site:** `url: https://username.github.io` + `baseurl:` (empty)
- **Project site:** `url: https://username.github.io` + `baseurl: /repo-name/`
- **YAML errors:** Quote strings with special characters: `title: "My: Cool Site"`

## Development Workflow

- **Git & Commits:** For commit message format and Git practices, see [.github/GIT_WORKFLOW.md](.github/GIT_WORKFLOW.md).
- **Code-Specific Instructions:** Consult the relevant instruction file for your code type.

| File Type                                     | Instruction File                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Markdown content (`_posts/`, `_pages/`, etc.) | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)       |
| YAML config (`_config.yml`, `_data/`)         | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)   |
| BibTeX (`_bibliography/`)                     | [bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Liquid templates (`_includes/`, `_layouts/`)  | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)       |
| JavaScript (`_scripts/`)                      | [javascript-scripts.instructions.md](.github/instructions/javascript-scripts.instructions.md)   |

## Common Issues

For troubleshooting, see:

- [Common Pitfalls & Workarounds](.github/copilot-instructions.md#common-pitfalls--workarounds) in copilot-instructions.md
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions
- [GitHub Issues](https://github.com/alshedivat/al-folio/issues) to search for your specific problem.
=======
# Agent Guidelines for al-folio (v1.x)

`al-folio` is the **starter repo** for the pluginized v1 architecture.

## Read This First

- Start with `.github/copilot-instructions.md` for architecture, ownership boundaries, and CI expectations.
- Use `docs/BOUNDARIES.md` as the source of truth for starter-vs-plugin ownership.
- Use `.agents/skills/al-folio-bootstrap/SKILL.md` for new-site setup tasks.
- Use `.agents/skills/al-folio-v1-migration/SKILL.md` for customized fork migrations.
- `.codex/skills` and `.claude/skills` are symlinks to `.agents/skills` for agent-specific discovery.

## What This Repo Owns

- Starter wiring (`Gemfile`, `_config.yml`)
- Starter content and documentation
- Cross-plugin integration tests
- Visual regression tests

Runtime/component logic belongs in owning plugin repos (`al_folio_core`, `al_folio_distill`, `al_search`, `al_icons`, `al_cookie`, and other `al-*` gems).
Long-form documentation lives in `docs/`; keep this root file as the short discovery entry point for coding agents.

## Validated Local Command Set

Run from repo root:

```bash
npm ci
npm run lint:prettier
npm run lint:style-contract
bundle exec jekyll build --baseurl /al-folio
bash test/integration_comments.sh
bash test/integration_plugin_toggles.sh
bash test/integration_distill.sh
bash test/integration_bootstrap_compat.sh
bash test/integration_upgrade_cli.sh
npx playwright install chromium webkit
npm run test:visual
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade report
docker compose up -d
curl -fsS http://127.0.0.1:8080/al-folio/ >/dev/null
docker compose logs --tail=80
docker compose down
```

Docker note: v1 uses `/srv/jekyll/bin/entry_point.sh` and serves from container-local `/tmp/_site` to avoid host bind-mount write deadlocks.

## Agent Routing Rules

- If change is starter wiring/docs/integration/visual testing: edit here.
- If change is runtime feature behavior: route to owning plugin repo.
- Do not add starter-local npm build scripts for theme/runtime assets.
- Keep docs aligned with pluginized v1 ownership.
- If you create or keep local overrides of plugin-owned files, run `bundle exec al-folio upgrade overrides audit` and commit `.al-folio-overrides.yml` after review.
>>>>>>> upstream/main
