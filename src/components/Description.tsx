"use client";

import { useState } from "react";
import { listing } from "@/lib/listing-data";

export function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-6 border-b border-[var(--color-border-light)]">
      <p
        className={`text-[15px] leading-6 whitespace-pre-line ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {listing.description}
      </p>
      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="flex items-center gap-1 text-sm font-medium underline underline-offset-2 mt-2"
        >
          Show more
          <span aria-hidden="true">›</span>
        </button>
      )}
    </div>
  );
}
