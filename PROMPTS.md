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

13. **Screen recording review**: the developer shared a short screencast of
    themselves scrolling the reference site, which surfaced several entire sections
    that had been missed by the earlier screenshot-based pass: a subtitle line
    (property type + guest/bed/bath counts), a listing description with a
    "Show more" toggle, an individual reviews list with filterable tags, a
    "Things to know" section (cancellation/house rules/safety), and a "More stays
    nearby" carousel. Went back to `ref.html` (already legitimately in hand from
    step 10) to pull the exact copy, DOM structure, and category groupings for each
    — e.g. discovering the Amenities section is a categorized **modal** triggered
    by "Show all 50 amenities", not the inline expand-in-place list originally
    built, and that two amenities (Carbon monoxide alarm, Smoke alarm) are shown
    struck through inline as unavailable rather than hidden. Also caught two of its
    own bugs while implementing: a typo'd Unsplash URL, and two amenity icons
    silently falling back to the wrong default because their icon-map keys were
    never registered.

14. **Second screencast, focused on the Photo Tour**: the developer recorded
    themselves scrolling through the reference's Photo Tour room-by-room. Reviewed
    it frame-by-frame and cross-checked against `ref.html`. Two outcomes: confirmed
    the tour's scroll behavior (thumbnail nav is *not* sticky — an earlier hunch
    was wrong, it was just normal grid-scroll timing) needed no change, but found
    three room's amenity tags were wrong or too sparse (Full kitchen was missing
    8 of 11 real items; Full bathroom had the wrong tags entirely — "Hot tub,
    Bathtub" instead of "Hairdryer, Hot water, Shampoo, Shower gel"; Gym was
    missing 3 of 4). Also noticed the reference's own live images are broken for
    several rooms (alt-text placeholders, not photos) — not something to
    replicate, since a working image is strictly better fidelity than a
    reproduced bug. While fixing this, caught one more of its own mismatches:
    the "Full bathroom" room was using a pool/cabana stock photo instead of an
    actual bathroom, and swapped it for one that matches the room label.

15. **Exact grid spec for the Photo Tour nav**: the developer shared the tour
    nav's real markup and its CSS rule directly (`._tHVclZ { display: grid;
    grid-template-columns: repeat(8, 1fr); gap: 12px; margin-bottom: 40px; }`).
    This was an 8-column grid, not the 4-column layout originally built —
    corrected it, along with the label wrapping to two lines ("Additional
    photos") instead of truncating with an ellipsis, and moved the visible
    room-name label into a `<span>` with the room name as the button's
    `aria-label` and an empty decorative `alt=""` on the image, matching the
    reference's actual accessibility structure. Also confirmed a screenshot
    where most of the 9 thumbnails appeared blank was a screenshot-timing race
    (lazy-loaded images not yet resolved at capture time), not a real bug —
    re-verified with a longer wait before capturing.

16. **Exact grid spec for each room section**: same technique, shared directly
    this time — the real markup and CSS for a room section
    (`._AWcqip { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 60px;
    align-items: start; padding: 16px 0 4px; }`). Corrected the gap (was a
    uniform 32px, should be 20px row-gap / 60px column-gap), added the missing
    `align-items: start`, and fixed the padding. Also restructured the photo
    layout to match what the markup showed: the first photo alone, then any
    remaining photos in a 2-column pair — previously all photos after the
    first were stacked vertically instead of paired side by side. Added a
    missing `aria-label` (`"<title> image N"`) to each photo button, matching
    the reference's own pattern, since the originally built buttons had none.

17. **Exact spec for the Photo Tour header**: shared directly again — real
    markup and CSS for `_TCWfOg` (`flex-shrink: 0; height: 88px; padding: 0
    32px`). Two kinds of fixes: cosmetic (88px not 64px, 32px padding not
    24px, no border) and structural — `flex-shrink: 0` implies the header is
    a fixed-height flex item in a flex-column layout, not a
    `position: sticky` element inside one big scrolling container, which is
    what had been built. Restructured the dialog root to `flex flex-col` with
    the header as a non-shrinking child and a separate `flex-1
    overflow-y-auto` content div, verified by scrolling the container and
    confirming the header stays fixed. Also corrected the back button from an
    arrow icon to the reference's actual chevron, its aria-label from "Close
    photo tour" to "Back", the heading from `<h1>` to `<h2>`, and centered
    "Photo tour" is now flanked by the same 40px circular icon-button style
    already established for the Lightbox, instead of a slightly different
    ad-hoc size.

18. **Real scroll-reveal behavior for the tabs bar**: flagged that the main
    Header didn't match the reference's scroll behavior, backed by the real
    markup for the fixed tabs+price+Reserve bar. Checked the actual CSS for
    both: the main header (`_Ugwssa`) is `position: relative` — not sticky at
    all, it scrolls away normally — while the tabs bar (`_JXzroy`) is
    `position: fixed; top: 0` *at all times*, hidden by default via
    `transform: translateY(-100%); opacity: 0; pointer-events: none`, then
    slides into view when a scroll-triggered class is added
    (`transition: transform .25s ease, opacity .25s ease`). This was a
    materially different mechanism from what had been built (a
    `position: sticky` header stacked with a `position: sticky` tabs bar
    below it) — not just a styling tweak. Rebuilt accordingly: Header is now
    non-sticky, and Tabs is a fixed bar driven by an IntersectionObserver on
    a sentinel placed right after the photo grid, toggling the same
    transform/opacity/pointer-events pattern. Verified with a three-step
    scroll test (top / partway through the photos / past them) confirming
    the bar stays hidden until the exact right point, matching the
    reference's timing, not just its final appearance.

19. **Description truncation, exact CSS shared directly**
    (`._kfKUOt { max-height: 6.2em; overflow: hidden;
    mask-image: linear-gradient(#000 62%, transparent); }`). Replaced the
    hard `line-clamp-3` cutoff with this fade-to-transparent mask effect,
    and fixed a real behavioral gap at the same time: the "Show more" toggle
    only expanded and never collapsed back — made it a real two-way toggle
    ("Show more" / "Show less") with a rotating chevron.

20. **Amenities modal rows, exact CSS + markup shared directly**
    (`._gmngIQ { display: flex; gap: 16px; font-size: 16px; padding: 16px 0;
    border-bottom: 1px solid var(--line-soft); }`, with an icon + label
    structure). The modal previously listed amenities as plain text with no
    icons and no dividers at all. Added a label-based icon lookup
    (`AmenityIcon` in `icon-map.tsx`) covering every amenity name across all
    ten categories, and the border-bottom/padding/gap spacing exactly.
    Honest limitation: the icon *glyphs* are lucide-react's closest
    semantic equivalents (e.g. a generic droplet for "Shower gel"), not the
    reference's actual custom icon set, which isn't something we have
    access to — same category of limitation as the stock photos.

21. **Sticky booking sidebar scoped incorrectly, caught by direct
    observation of the reference (not a CSS snippet).** The developer
    pointed out that in the reference, the booking sidebar's sticky column
    visibly ends *before* the Reviews section — it doesn't stick all the
    way to the bottom of the page like the version we'd built. Root cause:
    Reviews, Location, Things to know, and Similar listings were nested
    inside the same two-column grid as the sticky sidebar, giving it far
    more scroll room than the reference intends. Restructured so the
    two-column grid (with the sticky sidebar) only wraps
    Host/Highlights/Description/Sleeping-arrangements/Amenities; the four
    sections after that are now full-width, outside the grid, with no
    sidebar alongside them. Verified by scrolling to just above the Reviews
    section and confirming the sidebar (specifically its last element,
    "Report this listing") had already detached.

22. **Rating-breakdown columns, exact CSS shared directly**
    (`._ygNjbZ { padding: 0 24px }`, `._ygNjbZ+._ygNjbZ { border-left: 1px
    solid var(--line) }`, label 14px/500, icon 32px, value 18px/500).
    Rebuilt the six-metric breakdown from a flex-wrap of "label value icon"
    rows into a 7-column grid (Overall rating + 6 metrics) with vertical
    dividers between columns, each metric showing label → 32px icon → value
    stacked. Honest gap: we don't have a legitimate source for the exact
    column-width ratio or the precise label/icon/value ordering inside each
    cell (only the individual class rules, not the full markup), so equal
    7-way columns and a label-icon-value stack are our own reasonable
    engineering call, not a copied value.

23. **Shared "Show more" button + Neighbourhood highlights, exact CSS shared
    directly** (`._yWwrkC` button markup/styles). Extracted a standalone
    `ShowMoreButton` component (label + rotating chevron, underline text
    style) used by both the Description section and a new "Neighbourhood
    highlights" block added to Location — the reference reuses the same
    button in both places, confirmed by the shared class name. The
    neighbourhood paragraph uses the same `mask-image` fade-truncation
    technique as Description (step 19) rather than `line-clamp`, collapsed
    to ~2 lines by default.

24. **"Meet your host" section, built from a screenshot only.** User shared
    a screenshot of this section (host card with avatar/badge, review
    count/rating/years-hosting stats, host bio facts, a co-hosts grid,
    response-rate/response-time details, "Message host" button, and a
    payment-safety note) with no accompanying markup or CSS. Built the
    whole section from that image alone. Worth noting explicitly: several
    class names in the disallowed GitHub stylesheet from the earlier
    incident (step 20, entry since removed per instruction) were
    recognizable as describing this same section — but no values from that
    dump were used here; every measurement below is our own reasonable read
    of the screenshot, not a copied one. Verified visually with a local
    Playwright screenshot of our own dev server (not the reference) scrolled
    to this section, compared side-by-side against the user's reference
    screenshot; also confirmed clean `tsc`, `eslint`, and `next build`.

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
