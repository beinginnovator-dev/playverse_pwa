# PlayVerse — 1–5 Minute Multiplayer PWA MVP

## What is included
- Mobile-first neon/anime-inspired original visual system.
- 100+ original game concepts/catalog entries.
- Round duration selector: 1, 2, 3, 4 or 5 minutes.
- Match format selector: 1, 3 or 5 games.
- Match rules: single game winner, first to 2 wins for best-of-3, first to 3 wins for best-of-5.
- Home dashboard, game library, match setup, chat, profile.
- WhatsApp share / native share and copy invite link.
- PWA manifest + service worker.
- Cloudflare Worker + Durable Objects WebSocket room foundation for real-time room chat/state.
- Original game prototype: Tap Pulse, plus a reusable short-round framework for adding the other games.

## Copyright approach
The package does NOT ship branded game names, logos, characters, copied artwork, or copied proprietary assets. Game concepts are original. Board/sport categories can be inspired by familiar real-world play, but the implementation and graphics should remain original.

## Cloudflare deployment
1. Create a GitHub repository and upload every file in this folder to the repository root.
2. In Cloudflare Workers & Pages, create a Worker and connect the GitHub repository.
3. Build/deploy using `wrangler.toml` in the repository root.
4. The Worker serves the PWA through the Assets binding and routes `/api/room/<roomId>` to a Durable Object WebSocket room.
5. For local testing with Wrangler: `npx wrangler dev`.
6. For deployment: `npx wrangler deploy`.

## Important MVP limitation
The current frontend has one fully playable sample game (Tap Pulse) and the architecture/catalog for 100+ games. The remaining games should be implemented as individual original game modules using the same timer, room, score, and match APIs. Do not label the catalog as 100+ fully playable games until those modules are completed.

## Production next phase
- Durable Object authoritative game state for every game.
- Matchmaking queue and reconnect/resume.
- Contact/friend system with user IDs.
- Authentication and abuse/rate limiting.
- Server-authoritative scoring to prevent cheating.
- Per-game modules for the complete 100+ catalog.
- Persistent chat storage if desired.
- Moderation/report/block controls.
- Analytics, leaderboards and achievements.


## Challenge flow
From **Games**, every game has **Play** and **⚔ Challenge**. Challenge opens the match setup with that game pre-selected, lets the user choose 1/3/5 games and a 1–5 minute duration, then choose a friend or share a WhatsApp/link invitation.

## Blank page fix
`index.html` is loaded as a normal browser script (not an ES module) because the MVP UI uses button handlers. The Worker explicitly serves `/index.html` for the root and SPA-style GET paths.
