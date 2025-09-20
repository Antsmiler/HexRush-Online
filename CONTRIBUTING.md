# Contributing to HexRush Online

## Getting Started
- Fork the repo and clone locally
- Install dependencies: `npm install`
- Use `docker compose up` for local dev
- Run tests: `npm run test` (unit), `npx cypress run` (e2e)

## Commit Guidelines
- Use Conventional Commits
- Run lint and format before pushing
- All PRs require passing CI

## Code Style
- TypeScript, ESLint, Prettier
- Prefer functional, stateless components
- Keep shared types in `packages/shared`

## Reporting Issues
- Use GitHub Issues for bugs/feature requests
- Include steps to reproduce and screenshots/gifs if possible