"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { listing } from "@/lib/listing-data";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export function Tabs() {
  const [active, setActive] = useState("photos");

  function handleClick(id: string) {
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Listing sections"
      className="sticky top-20 z-30 bg-white border-b border-[var(--color-border-light)]"
    >
      <div className="flex items-center justify-between">
        <ul className="flex gap-8">
          {TABS.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => handleClick(tab.id)}
                aria-current={active === tab.id ? "true" : undefined}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  active === tab.id
                    ? "border-[var(--color-text)] text-[var(--color-text)]"
                    : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <p className="text-sm">
            <span className="font-semibold">
              ₹{listing.price.toLocaleString("en-IN")}
            </span>{" "}
            for {listing.nights} nights
          </p>
          <p className="flex items-center gap-1 text-sm">
            <Star size={12} fill="currentColor" />
            <span className="font-medium">{listing.rating}</span>
            <span className="underline text-[var(--color-text-secondary)]">
              · {listing.reviewCount} reviews
            </span>
          </p>
          <button
            type="button"
            className="rounded-lg px-5 py-2.5 font-semibold text-sm text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:opacity-90 transition-opacity"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
