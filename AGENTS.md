# Repository Guidelines

<!-- BEGIN:nextjs-agent-rules -->
This is not the Next.js assumed by older examples. This version has breaking changes: APIs, conventions, and file structure may differ. Read the relevant guide in `node_modules/next/dist/docs/` before changing Next.js APIs or conventions. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Structure & Module Organization

This repository is the main portfolio web app. The application code lives in `src/`:

- `src/app/`: Next.js App Router entry points, layout, global styles, and page modules.
- `src/components/`: reusable portfolio sections such as hero, skills, contact, and automation labs.
- `src/context/`: shared React context, including language state.
- `public/`: static assets served by Next.js.
- `demonstracoes/`: Git submodules and local demos used as portfolio examples.

## Next.js Version Notice

Before changing routing, metadata, config, or file conventions, check `node_modules/next/dist/docs/` for the relevant guide and current deprecations.

## Build, Test, and Development Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

`npm run dev` starts the local Next.js app. `npm run build` validates the production build. `npm run lint` runs ESLint checks.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Name components with `PascalCase`, hooks and variables with `camelCase`, and CSS modules as `*.module.css`. Keep UI sections focused and reusable; avoid mixing unrelated content changes with framework or config edits.

## Testing Guidelines

No dedicated test runner is configured in the main app yet. For now, run `npm run lint` and `npm run build` before submitting changes. For visual changes, verify desktop and mobile layouts locally.

## Commit & Pull Request Guidelines

Use concise, imperative commit messages, for example `Update automation labs section`. Pull requests should include a summary, validation commands, screenshots for UI changes, and notes when submodule references are changed.

## Submodule Notes

Do not edit submodule internals from the root repo unless intentionally working inside that submodule repository. After changing a submodule, commit inside it first, then update the gitlink in this repository.
