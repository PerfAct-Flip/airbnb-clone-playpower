# Airbnb Listing Page Clone

Take-home submission: a pixel-fidelity clone of an Airbnb-style listing page, its
Photo Tour, and its Lightbox — built with Next.js 16, TypeScript, and Tailwind CSS.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whichever port Next.js picks
if 3000 is busy). Desktop only, per the task spec — no mobile layout was built.

## What's here

- `src/app/page.tsx` — the listing page, composed from `src/components/*`
- `src/lib/listing-data.ts` — mock listing content (data kept separate from
  presentation, see the accessibility-code-auditor sub-agent config for why)
- `src/components/PhotoTour.tsx`, `src/components/Lightbox.tsx` — the two overlay
  views
- `architecture/diagram.html` + `architecture/architecture-diagram.png` — the
  production-scale architecture diagram (rendered via `node architecture/render.mjs`)
- `.claude/agents/` — two real Claude Code sub-agent configs used during
  development: `visual-fidelity-reviewer` and `accessibility-code-auditor`
- `PROMPTS.md` — the actual sequence of prompts/decisions used to build this
- `reference-capture/shot.mjs` — a small Playwright helper used throughout
  development to screenshot the local build for self-comparison against reference
  screenshots (see `PROMPTS.md` for why the *reference* site itself couldn't be
  captured this way — its bot protection blocks headless browsers)

## Known limitations / honest gaps

- Listing photos are licensed Unsplash stock images, not the reference's real
  photos — layout and behavior are what's being matched, not photo content.
- Location tab uses a stylized placeholder map (matching the reference's own
  non-interactive mock), not a real map tiles provider — no API key wiring was
  warranted for this exercise.
- No backend — listing data is static/mocked in `listing-data.ts`, per the task's
  "backend is optional" note.
