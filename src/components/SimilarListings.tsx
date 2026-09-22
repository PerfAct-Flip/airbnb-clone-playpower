"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { similarListings } from "@/lib/listing-data";

export function SimilarListings() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  function scrollByCards(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth * 0.9), behavior: "smooth" });
    setTimeout(updateEdges, 400);
  }

  return (
    <section className="py-10 border-t border-[var(--color-border-light)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[26px] leading-[30px] font-medium">More stays nearby</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={atStart}
            aria-label="Previous listings"
            className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-bg-subtle)] disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={atEnd}
            aria-label="Next listings"
            className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-bg-subtle)] disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {similarListings.map((item) => (
          <div key={item.id} className="shrink-0 w-[220px]">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
            <p className="text-sm font-medium mt-2 line-clamp-1">{item.title}</p>
            <p className="text-sm mt-0.5">
              ₹{item.price.toLocaleString("en-IN")}{" "}
              <span className="inline-flex items-center gap-1 text-[var(--color-text-secondary)]">
                <Star size={11} fill="currentColor" /> {item.rating}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
