# AGENTS.md

## Cursor Cloud specific instructions

Zypdrive is a **frontend-only** Vite + React + TypeScript SPA (shadcn-ui + Tailwind). There is no backend, database, or external service — everything runs client-side.

- **Package manager:** use `npm` (README documents it; the update script runs `npm install`). A `bun.lockb`/`bun.lock` also exist, but the setup here standardizes on npm.
- **Dev server:** `npm run dev` serves on `http://localhost:8080` (host `::`, port fixed in `vite.config.ts`), not the Vite default 5173.
- **Standard scripts** live in `package.json`: `dev`, `build`, `build:dev`, `lint` (`eslint .`), `preview`.
- **Lint caveat:** `npm run lint` currently reports 4 pre-existing errors (empty-interface types in `src/components/ui/command.tsx`, `textarea.tsx`, and a `require()` in `tailwind.config.ts`) plus fast-refresh warnings. These are pre-existing in the generated shadcn/config boilerplate, not environment breakage.
- **Routes** (`src/App.tsx`): `/`, `/about`, `/terms`, `/safety`; unknown paths hit a NotFound page.
