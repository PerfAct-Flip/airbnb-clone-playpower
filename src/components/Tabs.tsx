"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { listing } from "@/lib/listing-data";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

/**
 * Matches the reference's real `_JXzroy` behavior: this bar is
 * `position: fixed; top: 0` at all times, not `position: sticky` — by
 * default it's translated off-screen and invisible
 * (`transform: translateY(-100%); opacity: 0; pointer-events: none`), then
 * slides down into view once a scroll-triggered class is added
 * (`transform: translateY(0); opacity: 1`, `transition: transform .25s ease,
 * opacity .25s ease`). The trigger here is an IntersectionObserver on a
 * sentinel placed right after the photo grid, not a raw scrollY check.
 */
export function Tabs() {
  const [active, setActive] = useState("photos");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("photo-section-end");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function handleClick(id: string) {
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Listing sections"
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-[45] bg-white border-b border-[var(--color-border-light)] transition-[transform,opacity] duration-[250ms] ease-out ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
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
            className="rounded-lg px-5 py-2.5 font-semibold text-sm text-white transition-[background] hover:[background:var(--color-reserve-gradient-hover)]"
            style={{ background: "var(--color-reserve-gradient)" }}
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
