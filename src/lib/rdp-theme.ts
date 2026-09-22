import type { CSSProperties } from "react";

/**
 * react-day-picker ships a blue theme by default; these inline overrides
 * (its own documented CSS variables) switch it to the reference's
 * black/white calendar — filled black selected days, light grey for the
 * range in between. Passed via the `style` prop rather than a stylesheet
 * class so it isn't at the mercy of import-order cascade against
 * react-day-picker's own style.css.
 */
export const rdpAirbnbTheme: CSSProperties = {
  "--rdp-accent-color": "var(--color-text)",
  "--rdp-accent-background-color": "var(--color-bg-subtle)",
  // Deliberately NOT overriding --rdp-range_start-background /
  // --rdp-range_end-background: those are half-transparent gradients (see
  // react-day-picker's style.css) so the square day *cell* stays transparent
  // on the outward-facing half, letting the circular *button* underneath
  // show its rounded corner. Flattening them to a solid color (an earlier
  // mistake here) made the cell fully opaque and hid the button's border-radius,
  // rendering the selected endpoints as squares instead of circles.
  "--rdp-range_start-color": "white",
  "--rdp-range_start-date-background-color": "var(--color-text)",
  "--rdp-range_end-color": "white",
  "--rdp-range_end-date-background-color": "var(--color-text)",
  "--rdp-range_middle-background-color": "var(--color-border-light)",
  "--rdp-range_middle-color": "var(--color-text)",
  "--rdp-today-color": "var(--color-text)",
} as CSSProperties;
