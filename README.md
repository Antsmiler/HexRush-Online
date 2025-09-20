
# HexRush Online

A real-time multiplayer browser game: race to capture hex tiles, power-ups, sudden-death, and leaderboard. Built with Node.js, TypeScript, Express, Socket.IO, Redis, MongoDB, Phaser 3, and Vite.

## Features
- Lobbies: create/join, region selection, matchmaking queue
- Real-time state sync via Socket.IO rooms (server authoritative)
- Chat with anti-spam & profanity filter; mute/report
- Leaderboards, player profiles, cosmetics (XP unlocks)
- Spectator mode
- Basic anti-cheat (server validates moves & cooldowns)
- Metrics & tracing via OpenTelemetry; Prometheus endpoint
- PWA: offline practice mode vs bots

## Architecture
- `packages/server`: Express, Socket.IO, Redis, MongoDB
- `packages/client`: Phaser 3, Vite, TypeScript, PWA
- `packages/shared`: Types, zod schemas for messages
- `infra`: Docker, docker-compose, nginx
- `tests`: Vitest/Jest, Cypress e2e
- `.github/workflows`: CI/CD pipelines

## Local Development
1. Install dependencies: `npm install`
2. Start all services: `docker compose up`
3. Open two browser tabs at `http://localhost` to play
4. Run unit tests: `npx vitest run`
5. Run e2e tests: `npx cypress run`

## Environment Variables
- `MONGO_URL`, `REDIS_URL`, `JWT_SECRET`, etc. (see server config)

## Controls
- Arrow keys/WASD: move
- Space: power-up

## Docs
- [SECURITY.md](./SECURITY.md): cheat surfaces & mitigations
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- [LICENSE](./LICENSE)

## Demo
![Gameplay GIF](docs/hexrush-demo.gif)

---
MIT License
