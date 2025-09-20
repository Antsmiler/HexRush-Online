# Security Policy

## Cheat Surfaces
- Client-side manipulation (movement, cooldowns, power-ups)
- Socket message tampering
- API abuse (rate limits, JWT)
- Chat spam/profanity

## Mitigations
- Server authoritative game state
- Move/cooldown validation on server
- JWT authentication and rate limiting
- Profanity filter and anti-spam for chat
- Mute/report system
- Metrics and tracing via OpenTelemetry

## Reporting
Please report vulnerabilities via GitHub Issues or email the maintainers.