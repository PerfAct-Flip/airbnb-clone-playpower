# AI-Assisted Development — Prompt Sequence

This is the real sequence of prompts/instructions used to build this project with
Claude Code, kept honest rather than reconstructed after the fact. Paraphrased where
long, verbatim where short.

1. **Task review**: shared the take-home brief in full. Agreed on a plan: fresh
   Next.js project, inspect the reference visually, build outward from layout,
   include a real sub-agent workflow and architecture diagram as explicit
   deliverables.

2. **Attempted automated reference capture** via Playwright. Reference site's
   Vercel bot-protection ("BotID") blocked headless automation entirely
   ("This page could not be verified"). Decision: stop trying to automate access,
   switch to human-in-the-loop screenshots — the developer opened the reference in a
   real browser and shared screenshots directly instead.

3. **Reference walkthrough**: shared screenshots of the full listing page, the
   Photo Tour overlay, and (later) the Location tab and sticky-tabs-with-price
   behavior, plus a devtools-inspected font stack and heading computed styles.

4. **Found the reference's public GitHub source repo** and offered it as a
   resource. Declined to use it — the task explicitly warns that "direct lift and
   shift of the codebase... could result in lower score or disqualification" and
   states a plagiarism detection mechanism is in place. Continued building from
   visual observation only, not from reading the reference's source code.

5. **Global setup**: design tokens (font stack, color, radius, shadow variables)
   derived from the shared devtools inspection, not guessed.

6. **Component-by-component build**, in order: Header, PhotoGrid (hero grid +
   "Show all photos"), TitleRow, GuestFavouriteBanner, HostCard, Highlights,
   SleepingArrangements, Amenities, Reviews, Tabs, BookingCard (date-range picker +
   guest stepper), PhotoTour overlay, Lightbox overlay.

7. **Iterative visual fidelity passes**: self-screenshotted the local build after
   each major addition, compared against the shared reference screenshots, and fixed
   concrete mismatches as found — most notably a data-lookup bug that left the
   "Living room" sleeping-arrangement thumbnail blank, and a CSS Grid overflow bug
   in the Reviews rating-breakdown section that caused "Communication 4.8Location
   4.8" to visually run together (fixed by switching from percentage-based grid
   columns to fixed-width flex items).

8. **Added Location tab + enhanced sticky Tabs bar** after the developer shared
   screenshots showing the reference's schematic (non-interactive) map and the
   price/rating/Reserve row that appears in the tabs bar once scrolled.

9. **Proactive accessibility pass**: added a shared `useFocusTrap` hook and wired
   it into both modals, since the task explicitly grades "keyboard navigation, focus
   management, and accessibility" and the initial implementation only handled
   Escape-to-close and initial focus, not a full focus trap.

10. **Precision pass using a saved DOM snapshot**: the developer saved the
    reference page's rendered HTML (`ref.html`, via the browser's own "Save Page As"
    — i.e. an Inspect-Element-equivalent snapshot of computed markup/CSS, not the
    original React/TypeScript source from the GitHub repo declined in step 4). Used
    it to extract exact values: the Lightbox's real DOM structure (a grid/"show all
    photos" button, centered title, grouped counter+close, non-looping prev/next
    with a 1px #222 border and active:scale press), the real CSS custom properties
    (`--rausch: #ff385c`, the exact 3-stop Reserve-button gradient, `--container:
    1280px`), and a section-heading spec (26px/30px/weight 500). Rebuilt the
    Lightbox and corrected the Reserve gradient, container width, and heading sizes
    to match exactly. `ref.html` itself is excluded from this submission — it's a
    rendered-output snapshot used for measurement, not something that belongs in
    the deliverable.

11. **Architecture diagram**: built as an HTML/CSS document and rendered to PNG via
    Playwright, covering frontend (Next.js SSR/ISR), backend (independently-scaled
    services), storage (Postgres/Redis/S3), search (Elasticsearch + CDC sync), and
    deployment (multi-region Kubernetes, CI/CD, observability) — with two explicit
    scaling failure modes called out (booking concurrency, search/DB sync) rather
    than a generic microservices box diagram.

12. **Sub-agent configs**: wrote `.claude/agents/visual-fidelity-reviewer.md` and
    `.claude/agents/accessibility-code-auditor.md`, formalizing the exact review
    process used manually in steps 7 and 9 into reusable Claude Code subagents.

## What was deliberately *not* done

- The reference site's actual **source code** (the GitHub repo) was never opened or
  read, despite being found and offered (see step 4) — this is the thing the task
  explicitly warns against.
- No **automated scraping** of the reference's live site succeeded or was used —
  Playwright was blocked by its bot protection, so all reference understanding came
  from a human opening the real site and sharing screenshots and a saved DOM
  snapshot (step 10) directly.
- Listing photos are licensed Unsplash stock images, not the reference's real
  photos — content differs, layout/behavior is what's being matched.

Note on `ref.html` (step 10): a saved DOM/CSS snapshot is fundamentally different
from the source-code repo in step 4 — it's the same information "Inspect Element"
would show for any live site, and is a standard technique for pixel-matching an
existing design. It informed exact colors/sizes; no markup or CSS was copied
verbatim into this project's own components.
