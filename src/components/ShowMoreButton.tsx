"use client";

import { ChevronRight } from "lucide-react";

/**
 * Shared "Show more/less" toggle button — the reference reuses one class
 * (`_yWwrkC`) for this exact button on both the listing Description and the
 * Neighbourhood highlights blurb, so this is built once and used in both
 * places rather than duplicated. Exact spec shared directly: no
 * background/border, 16px/500 text, underline-offset 3px, 6px gap to the
 * chevron.
 */
export function ShowMoreButton({
  expanded,
  onClick,
  className = "",
}: {
  expanded: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      className={`inline-flex items-center gap-1.5 bg-transparent border-none p-0 text-base font-medium text-[var(--color-text)] underline underline-offset-[3px] ${className}`}
    >
      {expanded ? "Show less" : "Show more"}
      <ChevronRight
        size={14}
        aria-hidden="true"
        className={`transition-transform ${expanded ? "rotate-90" : ""}`}
      />
    </button>
  );
}
