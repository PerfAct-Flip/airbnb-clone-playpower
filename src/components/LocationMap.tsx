"use client";

import { Search, Plus, Minus, Home } from "lucide-react";

/**
 * Stylized placeholder map matching the reference's schematic look
 * (grid, angled water shape, soft green area blobs) rather than a real
 * map tile provider — the reference itself uses a non-interactive mock,
 * and wiring a real Maps API key isn't warranted for this exercise.
 */
export function LocationMap() {
  return (
    <div className="py-10">
      <h2 className="text-xl font-medium mb-1">Where you&apos;ll be</h2>
      <p className="text-[15px] mb-6">Candolim, Goa, India</p>

      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[var(--color-border-light)] bg-[#eef1ec]">
        <svg
          viewBox="0 0 800 450"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="800" height="450" fill="#eef1ec" />
          <polygon points="0,0 350,0 0,450" fill="#c8dcea" />
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={(i * 800) / 8}
              y1={0}
              x2={(i * 800) / 8}
              y2={450}
              stroke="#d7ddd3"
              strokeWidth={1}
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1={0}
              y1={(i * 450) / 5}
              x2={800}
              y2={(i * 450) / 5}
              stroke="#d7ddd3"
              strokeWidth={1}
            />
          ))}
          <circle cx="270" cy="260" r="55" fill="#cfe0c9" opacity={0.9} />
          <circle cx="520" cy="320" r="75" fill="#cfe0c9" opacity={0.9} />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-11 h-11 rounded-full bg-[var(--color-text)] text-white flex items-center justify-center shadow-[var(--shadow-elevated)]"
            role="img"
            aria-label="Approximate listing location"
          >
            <Home size={18} fill="white" />
          </div>
        </div>

        <button
          type="button"
          aria-label="Search this area"
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white shadow-[var(--shadow-card)] flex items-center justify-center hover:bg-[var(--color-bg-subtle)]"
        >
          <Search size={16} />
        </button>

        <div className="absolute top-4 right-4 flex flex-col rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
          <button
            type="button"
            aria-label="Zoom in"
            className="w-9 h-9 bg-white flex items-center justify-center hover:bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-light)]"
          >
            <Plus size={16} />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            className="w-9 h-9 bg-white flex items-center justify-center hover:bg-[var(--color-bg-subtle)]"
          >
            <Minus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
