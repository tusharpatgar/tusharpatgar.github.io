# Tushar Patgar — Data Engineering Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It presents data engineering projects, technical skills, professional experience, architecture work, and contact information.

**Live site:** https://tusharpatgar.dpdns.org

## Tech stack

- React and TypeScript
- Vite for development and production builds
- Tailwind CSS for styling
- Motion for interface animations
- Decap CMS for editing portfolio content
- GitHub Actions and GitHub Pages for deployment

## Getting started

### Requirements

- Node.js 20 or later
- npm

### Install and run locally

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

### Validate a production build

```bash
npm run build
npm run preview
```

Run the linter with:

```bash
npm run lint
```

## Content management

The Decap CMS interface is available at `/admin/` on the deployed site. Portfolio content is stored as JSON files under `src/content/`; CMS configuration is in `public/admin/config.yml`.

The CMS backend is configured to write to the `main` branch. Keep content changes and application source changes on `main`.

## Deployment

Pushing to `main` triggers the workflow in `.github/workflows/deploy.yml`. It installs dependencies, builds the site, and publishes the generated `dist/` directory to the `gh-pages` branch.

The `gh-pages` branch is deployment output. Do not use it for application source changes.

## Repository structure

```text
public/                 Static assets and Decap CMS admin files
src/
  components/           Shared interface components
  content/              Editable portfolio content (JSON)
  sections/              Portfolio page sections
  assets/                Imported source assets
.github/workflows/      CI and deployment workflows
```

## Contributing

This is a personal portfolio repository. For a proposed change, create a focused branch, keep commits descriptive, and verify `npm run build` before opening a pull request.

## License

Unless a license file is added, the contents are provided for portfolio demonstration and are not licensed for unrestricted reuse.
