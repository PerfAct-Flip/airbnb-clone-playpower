"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { listing, roomSections } from "@/lib/listing-data";
import { useFocusTrap } from "@/lib/use-focus-trap";

// Shared 40px circular icon-button style, matching the reference's `_bNHEUf`
// class (reused for the Lightbox's close/nav buttons too).
const ICON_BUTTON =
  "w-10 h-10 rounded-full inline-flex items-center justify-center hover:bg-[var(--color-bg-subtle)] transition-colors";

export function PhotoTour({
  onClose,
  onOpenPhoto,
}: {
  onClose: () => void;
  onOpenPhoto: (photoId: string) => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef);

  useEffect(() => {
    closeBtnRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function scrollToRoom(room: string) {
    document
      .getElementById(`tour-${room.replace(/\s+/g, "-")}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 bg-white flex flex-col"
    >
      {/* Header is a non-shrinking flex item at a fixed 88px height, not a
          `position: sticky` element inside the scroll container — matches
          the reference's own `_TCWfOg { flex-shrink: 0; height: 88px; ... }`
          structurally, not just visually */}
      <header
        id="tourBar"
        className="shrink-0 z-[5] h-[88px] flex items-center px-8 bg-white"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Back"
          className={ICON_BUTTON}
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="flex-1 text-center font-medium">Photo tour</h2>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Share" className={ICON_BUTTON}>
            <Share size={18} />
          </button>
          <button type="button" aria-label="Save" className={ICON_BUTTON}>
            <Heart size={18} />
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto max-w-[900px] w-full mx-auto px-6 py-8">
        {/* Thumbnail nav grid — 8 columns, matching the reference's own
            `._tHVclZ { grid-template-columns: repeat(8, 1fr); gap: 12px;
            margin-bottom: 40px; }` exactly, not a guessed 4-column layout */}
        <nav aria-label="Photo categories" className="grid grid-cols-8 gap-3 mb-10">
          {roomSections.map((section) => (
            <button
              type="button"
              key={section.room}
              aria-label={section.room}
              onClick={() => scrollToRoom(section.room)}
              className="text-left group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={section.photos[0].url}
                  alt=""
                  fill
                  className="object-cover group-hover:brightness-90 transition-[filter]"
                  sizes="120px"
                />
              </div>
              <span className="block text-sm mt-2 leading-snug">{section.room}</span>
            </button>
          ))}
        </nav>

        {/* Room sections — grid spec (gap: 20px 60px, items-start, padding:
            16px 0 4px) copied exactly from the reference's own `._AWcqip`
            rule, not guessed */}
        {roomSections.map((section) => (
          <section
            key={section.room}
            id={`tour-${section.room.replace(/\s+/g, "-")}`}
            className="grid grid-cols-2 gap-y-5 gap-x-[60px] items-start pt-4 pb-1 scroll-mt-24"
          >
            <div>
              <h2 className="text-2xl font-medium">{section.room}</h2>
              {section.tags.length > 0 && (
                <p className="text-[var(--color-text-secondary)] mt-2">
                  {section.tags.join(" · ")}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              {section.photos[0] && (
                <button
                  type="button"
                  data-testid="tour-photo"
                  aria-label={`${listing.title} image 1`}
                  onClick={() => onOpenPhoto(section.photos[0].id)}
                  className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <Image
                    src={section.photos[0].url}
                    alt={section.room}
                    fill
                    className="object-cover hover:brightness-90 transition-[filter]"
                    sizes="450px"
                  />
                </button>
              )}
              {section.photos.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {section.photos.slice(1).map((photo, i) => (
                    <button
                      type="button"
                      key={photo.id}
                      data-testid="tour-photo"
                      aria-label={`${listing.title} image ${i + 2}`}
                      onClick={() => onOpenPhoto(photo.id)}
                      className="relative block w-full aspect-square rounded-xl overflow-hidden"
                    >
                      <Image
                        src={photo.url}
                        alt={section.room}
                        fill
                        className="object-cover hover:brightness-90 transition-[filter]"
                        sizes="220px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
