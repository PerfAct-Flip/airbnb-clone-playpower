"use client";

import { useState } from "react";
import { listing } from "@/lib/listing-data";
import { ShowMoreButton } from "@/components/ShowMoreButton";

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
      <ShowMoreButton
        expanded={expanded}
        onClick={() => setExpanded((e) => !e)}
        className="mt-3.5"
      />
    </div>
  );
}
