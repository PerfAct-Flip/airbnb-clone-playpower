"use client";

import Image from "next/image";
import { Grip } from "lucide-react";
import { heroPhotos } from "@/lib/listing-data";

export function PhotoGrid({ onShowAll }: { onShowAll: () => void }) {
  return (
    <div className="relative rounded-xl overflow-hidden mt-6">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[480px]">
        <button
          type="button"
          onClick={onShowAll}
          className="col-span-2 row-span-2 relative group focus-visible:z-10"
          aria-label={`View ${heroPhotos[0].alt} — open photo tour`}
        >
          <Image
            src={heroPhotos[0].url}
            alt={heroPhotos[0].alt}
            fill
            className="object-cover transition-[filter] group-hover:brightness-90"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </button>
        {heroPhotos.slice(1).map((photo, i) => (
          <button
            type="button"
            key={photo.id}
            onClick={onShowAll}
            className={`relative group focus-visible:z-10 ${i === 1 ? "" : ""}`}
            aria-label={`View ${photo.alt} — open photo tour`}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              className="object-cover transition-[filter] group-hover:brightness-90"
              sizes="25vw"
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onShowAll}
        className="absolute bottom-4 right-4 flex items-center gap-2 bg-white text-[var(--color-text)] text-sm font-medium px-4 py-2 rounded-lg shadow-[var(--shadow-elevated)] hover:bg-[var(--color-bg-subtle)]"
      >
        <Grip size={16} />
        Show all photos
      </button>
    </div>
  );
}
