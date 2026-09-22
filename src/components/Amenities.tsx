"use client";

import { useState } from "react";
import { Icon } from "@/lib/icon-map";
import { listing } from "@/lib/listing-data";

export function Amenities() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? listing.amenities
    : listing.amenities.slice(0, 6);

  return (
    <div className="py-6 border-b border-[var(--color-border-light)]" id="amenities">
      <h2 className="text-[26px] leading-[30px] font-medium mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 gap-y-4">
        {visible.map((a) => (
          <div key={a.label} className="flex items-center gap-4">
            <Icon name={a.icon} size={24} />
            <span className="text-[15px]">{a.label}</span>
          </div>
        ))}
      </div>
      {listing.amenities.length > 6 && (
        <button
          type="button"
          onClick={() => setShowAll((s) => !s)}
          className="mt-6 border border-[var(--color-text)] rounded-lg px-5 py-3 text-sm font-medium hover:bg-[var(--color-bg-subtle)]"
        >
          {showAll
            ? "Show less"
            : `Show all ${listing.amenities.length} amenities`}
        </button>
      )}
    </div>
  );
}
