<<<<<<< HEAD
# Copilot Coding Agent Instructions

## Repository Overview

**al-folio** is a simple, clean, and responsive [Jekyll](https://jekyllrb.com/) theme for academics and researchers. It enables users to create professional portfolio and blog websites with minimal configuration. The repository serves both as a template and as a reference implementation.

- **Type:** Jekyll static site generator template
- **Target Users:** Academics, researchers, and professionals
- **Key Features:** CV display, publication bibliography, blog posts, projects, news/announcements, course listings

## Tech Stack & Versions

**Core Technologies:**

- **Jekyll:** v4.x (Ruby static site generator)
- **Ruby:** 3.3.5 (primary CI/CD version), 3.2.2 (some workflows)
- **Python:** 3.13 (for nbconvert, jupyter notebook support)
- **Node.js:** Latest (for purgecss and prettier)
- **Docker:** Uses prebuilt image `amirpourmand/al-folio:v0.16.3` (Ruby slim-based)

**Build Dependencies (from Gemfile):**

- `classifier-reborn` – Related posts calculation
- `jekyll-archives-v2` – Archive page generation
- `jekyll-jupyter-notebook` – Jupyter notebook embedding
- `jekyll-minifier` – CSS/JS minification
- `jekyll-paginate-v2` – Pagination
- `jekyll-scholar` – Bibliography management
- `jekyll-tabs` – Tab UI components
- `jekyll-toc` – Table of contents generation
- `jemoji` – Emoji support
- Multiple other specialized jekyll plugins

**Code Quality Tools:**

- **Prettier:** v3.8.0+ with `@shopify/prettier-plugin-liquid` – Code formatter (mandatory for PRs)
- **Purgecss:** CSS purification for production builds

## Building & Local Development

### Docker (Recommended Approach)

**Always use Docker for local development.** This ensures consistency with CI/CD and avoids Ruby/Python environment issues.

**Initial Setup:**

```bash
docker compose pull                    # Pull prebuilt image
docker compose up                      # Start development server
# Site runs at http://localhost:8080
```

**Rebuilding with Updated Dependencies:**

```bash
docker compose up --build              # Rebuilds Docker image from Dockerfile
docker compose up --force-recreate     # Forces complete rebuild
```

**For slim Docker image (if image size is critical):**

```bash
docker compose -f docker-compose-slim.yml up
```

**If Docker build fails:**

- Check disk space and available RAM
- Kill any existing jekyll processes: `docker compose down`
- For M1/M2 Mac: Ensure Docker Desktop is up-to-date
- Linux users may need Docker group permissions: `sudo usermod -aG docker $USER` (then logout/login)

### Bundle/Jekyll (Legacy, Use Docker Instead)

```bash
bundle install                         # Install Ruby gems
pip install jupyter                    # Install Python dependencies
bundle exec jekyll serve --port 4000   # Run at http://localhost:4000
```

### Important Build Requirements

- **ImageMagick must be installed** – Required for image processing plugins
  - Docker: Installed automatically
  - Local: `sudo apt-get install imagemagick` (Linux) or `brew install imagemagick` (Mac)
- **nbconvert must be upgraded before build** – `pip3 install --upgrade nbconvert`
- **Always set JEKYLL_ENV=production for production builds** – Required for CSS/JS minification

## Project Layout & Key Files

### Root Directory Structure

- `_bibliography/papers.bib` – BibTeX bibliography for publications
- `_config.yml` – **Primary configuration file** (title, author, URLs, baseurl, feature flags)
- `_data/` – YAML data files (socials.yml, coauthors.yml, cv.yml, citations.yml, venues.yml, repositories.yml)
- `_includes/` – Reusable Liquid template components
- `_layouts/` – Page layout templates (about.liquid, post.liquid, bib.liquid, distill.liquid, cv.liquid, etc.)
- `_news/` – News/announcement entries
- `_pages/` – Static pages (about.md, cv.md, publications.md, projects.md, teaching.md, etc.)
- `_posts/` – Blog posts (format: YYYY-MM-DD-title.md)
- `_projects/` – Project showcase entries
- `_sass/` – SCSS stylesheets
- `_scripts/` – JavaScript files for functionality
- `_teachings/` – Course and teaching entries
- `assets/img/` – Images, profile pictures
- `docker-compose.yml` – Docker compose configuration
- `Dockerfile` – Docker image definition
- `Gemfile` & `Gemfile.lock` – Ruby dependency specifications
- `package.json` – Node.js dependencies (prettier only)
- `purgecss.config.js` – PurgeCSS configuration for production CSS optimization

### Configuration Priority

When making changes:

1. **Always start with `_config.yml`** for site-wide settings
2. **Feature flags are in `_config.yml`** – Look for `enabled: true/false` options
3. **Social media links:** `_data/socials.yml`
4. **Content data:** Respective `_data/*.yml` files
5. **Styling:** `_sass/` directory (uses SCSS)

## CI/CD Pipeline & Validation

### GitHub Workflows (in `.github/workflows/`)

- **deploy.yml** – Main deployment workflow (runs on push/PR to main/master)
  - Sets up Ruby 3.3.5, Python 3.13
  - Installs imagemagick, nbconvert
  - Runs `bundle exec jekyll build` with JEKYLL_ENV=production
  - Runs purgecss for CSS optimization
  - Commits built site to gh-pages branch
  - **Triggers on:** Changes to site files, assets, config (NOT documentation files alone)
- **prettier.yml** – Code formatting validation (mandatory)
  - Runs prettier on all files
  - **Fails PRs if code is not properly formatted**
  - Generates HTML diff artifact on failure
  - Must install prettier locally to avoid failures: `npm install prettier @shopify/prettier-plugin-liquid`
- **broken-links.yml, broken-links-site.yml** – Link validation
- **axe.yml** – Accessibility testing
- **codeql.yml** – Security scanning
- **update-citations.yml** – Automatic citation updates
- **render-cv.yml** – CV rendering from RenderCV format

### Pre-commit Requirements

**You must run these locally before pushing:**

1. **Prettier formatting (mandatory):**

```bash
npm install --save-dev prettier @shopify/prettier-plugin-liquid
npx prettier . --write
```

2. **Local build test with Jekyll:**

```bash
docker compose pull && docker compose up
# Let it build (wait 30-60 seconds)
# Visit http://localhost:8080 and verify site renders correctly
# Exit with Ctrl+C
```

3. **Or run full build simulation:**

```bash
docker compose up --build
bundle exec jekyll build
# Check for errors in output
```

## Common Pitfalls & Workarounds

### YAML Syntax Errors in \_config.yml

- **Problem:** Special characters (`:`, `&`, `#`) in values cause parse errors
- **Solution:** Quote string values: `title: "My: Cool Site"`
- **Debug:** Run locally to see detailed error: `bundle exec jekyll build`

### "Unknown tag 'toc'" Error on Deployment

- **Problem:** Deploy succeeds locally but fails on GitHub Actions
- **Cause:** Jekyll plugins don't load properly
- **Solution:** Verify gh-pages branch is set as deployment source in Settings → Pages

### CSS/JS Not Loading After Deploy

- **Problem:** Site loads but has no styling
- **Cause:** Incorrect `url` and `baseurl` in `_config.yml`
- **Fix:**
  - Personal site: `url: https://username.github.io`, `baseurl:` (empty)
  - Project site: `url: https://username.github.io`, `baseurl: /repo-name/`
  - Clear browser cache (Ctrl+Shift+Del or private browsing)

### Prettier Formatting Failures

- **Problem:** PR fails prettier check after local builds passed
- **Solution:** Run prettier before committing:
  ```bash
  npx prettier . --write
  git add . && git commit -m "Format code with prettier"
  ```

### Port 8080 or 4000 Already in Use

- **Docker:** `docker compose down` then `docker compose up`
- **Ruby:** Kill process: `lsof -i :4000 | grep LISTEN | awk '{print $2}' | xargs kill`

### Related Posts Errors ("Zero vectors cannot be normalized")

- **Cause:** Empty blog posts or posts with only stop words confuse classifier-reborn
- **Solution:** Add meaningful content to posts, or set `related_posts: false` in post frontmatter

## File Format Specifications

### Blog Post Frontmatter (\_posts/)

```yaml
---
layout: post
title: Post Title
date: YYYY-MM-DD
categories: category-name
---
```

### Project Frontmatter (\_projects/)

```yaml
---
layout: page
title: Project Name
description: Short description
img: /assets/img/project-image.jpg
importance: 1
---
```

### BibTeX Format (papers.bib)

- Standard BibTeX format
- al-folio supports custom keywords: `pdf`, `code`, `preview`, `doi`, etc.
- Check CUSTOMIZE.md for custom bibtex keyword documentation

## Trust These Instructions

This guidance documents the tested, working build process and project structure. **Trust these instructions and only perform additional searches if:**

1. Specific information contradicts what you observe in the codebase
2. You need implementation details beyond what's documented
3. Error messages reference features or files not mentioned here

The instructions are designed to reduce unnecessary exploration and allow you to focus on code changes.
=======
# Copilot Coding Agent Instructions (v1.x)

## Repository Role

`al-folio` is a **thin starter** for the pluginized architecture.

This repo owns starter configuration, docs, sample content, integration tests, and visual parity checks.

## Ownership Boundaries

Follow `docs/BOUNDARIES.md`.

- Starter (`al-folio`) owns:
  - `Gemfile`, `_config.yml`
  - starter content (`_pages`, `_posts`, `_projects`, `_news`, `_data`)
  - docs
  - integration tests (`test/integration_*.sh`)
  - visual tests (`test/visual/*`)
- Plugin repos own:
  - runtime/component logic
  - component correctness/unit tests
  - feature-specific assets

Do not reintroduce plugin-owned runtime assets into starter paths unless intentionally overriding behavior.

## Plugin Naming and Featuring

- Theme-coupled plugins: repo `al-folio-<feature>`, gem/plugin id `al_folio_<feature>`.
- Reusable plugins: repo `al-<feature>` (or neutral), gem/plugin id aligned to namespace.
- Featured plugin metadata lives in `_data/featured_plugins.yml`.
- Featuring and bundling are separate decisions.

## Core Stack

- Jekyll (Ruby)
- Node tooling only (Prettier, Playwright)
- No starter-local Tailwind build pipeline

## High-Signal Paths

- `_config.yml` - starter plugin wiring and feature flags
- `_data/featured_plugins.yml` - plugin catalog metadata
- `test/style_contract.js` - starter contract checks
- `test/integration_*.sh` - cross-plugin integration checks
- `test/visual/` - visual parity checks
- `.github/workflows/` - CI workflows
- `docs/` - user, maintainer, upgrade, and plugin-system documentation
- `.agents/skills/al-folio-bootstrap/SKILL.md` - canonical agent workflow for new site setup
- `.agents/skills/al-folio-v1-migration/SKILL.md` - canonical agent workflow for customized fork migration
- `.codex/skills` and `.claude/skills` - symlinks to `.agents/skills`

## Validated Commands

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

## CI Expectations

Keep these workflows aligned when changing starter behavior:

- `unit-tests.yml`
- `visual-regression.yml`
- `upgrade-check.yml`
- `deploy.yml`

## Editing Guidance

- Prefer starter wiring/docs/content changes in this repo.
- Route runtime/layout/feature fixes to owning plugin repos.
- Keep all contributor guidance consistent with v1 ownership boundaries.
- When a site keeps local overrides of plugin-owned files, run `bundle exec al-folio upgrade overrides audit` and update `.al-folio-overrides.yml` after reviewing diffs.
>>>>>>> upstream/main
