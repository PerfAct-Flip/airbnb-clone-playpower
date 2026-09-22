"use client";

import { useState } from "react";
import { listing } from "@/lib/listing-data";

export function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-6 border-b border-[var(--color-border-light)]">
      <p
        className="text-[15px] leading-6 whitespace-pre-line"
        style={
          expanded
            ? undefined
            : {
                maxHeight: "6.2em",
                overflow: "hidden",
                WebkitMaskImage: "linear-gradient(#000 62%, transparent)",
                maskImage: "linear-gradient(#000 62%, transparent)",
              }
        }
      >
        {listing.description}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="flex items-center gap-1 text-sm font-medium underline underline-offset-2 mt-2"
      >
        {expanded ? "Show less" : "Show more"}
        <span
          aria-hidden="true"
          className={`inline-block transition-transform ${expanded ? "rotate-90" : ""}`}
        >
          ›
        </span>
      </button>
    </div>
  );
}
