"use client";

import { useState } from "react";
import { Icon } from "@/lib/icon-map";
import { listing } from "@/lib/listing-data";
import { AmenitiesModal } from "@/components/AmenitiesModal";

const TOTAL_AMENITY_COUNT = 50; // matches the reference's "Show all 50 amenities"

export function Amenities() {
  const [modalOpen, setModalOpen] = useState(false);
  const preview = listing.amenities.slice(0, 10);

  return (
    <div className="py-6 border-b border-[var(--color-border-light)]" id="amenities">
      <h2 className="text-[26px] leading-[30px] font-medium mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 gap-y-4">
        {preview.map((a) => (
          <div
            key={a.label}
            className={`flex items-center gap-4 ${
              a.available ? "" : "text-[var(--color-text-secondary)] line-through decoration-1"
            }`}
          >
            <Icon name={a.icon} size={24} className={a.available ? "" : "opacity-50"} />
            <span className="text-[15px]">{a.label}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="mt-6 border border-[var(--color-text)] rounded-lg px-5 py-3 text-sm font-medium hover:bg-[var(--color-bg-subtle)]"
      >
        Show all {TOTAL_AMENITY_COUNT} amenities
      </button>

      {modalOpen && <AmenitiesModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
