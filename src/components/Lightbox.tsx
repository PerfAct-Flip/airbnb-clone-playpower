"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { allPhotos } from "@/lib/listing-data";
import { useFocusTrap } from "@/lib/use-focus-trap";

/**
 * NOTE: built without a reference screenshot of the real Lightbox (not yet
 * shared). Structure follows Airbnb's general pattern — light overlay,
 * centered contained image, circular prev/next controls, counter — but
 * exact spacing/animation should be diffed against the real thing once
 * that screenshot is available.
 */
export function Lightbox({
  photoId,
  onClose,
  onNavigate,
}: {
  photoId: string;
  onClose: () => void;
  onNavigate: (photoId: string) => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef);
  const index = allPhotos.findIndex((p) => p.id === photoId);
  const photo = allPhotos[index];

  const goNext = useCallback(() => {
    const next = allPhotos[(index + 1) % allPhotos.length];
    onNavigate(next.id);
  }, [index, onNavigate]);

  const goPrev = useCallback(() => {
    const prev = allPhotos[(index - 1 + allPhotos.length) % allPhotos.length];
    onNavigate(prev.id);
  }, [index, onNavigate]);

  useEffect(() => {
    closeBtnRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, goNext, goPrev]);

  if (!photo) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${allPhotos.length}: ${photo.alt}`}
      className="fixed inset-0 z-[60] bg-white flex flex-col"
    >
      <div className="flex items-center justify-between px-6 h-16 shrink-0">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="p-2 rounded-full hover:bg-[var(--color-bg-subtle)]"
        >
          <X size={20} />
        </button>
        <span className="text-sm text-[var(--color-text-secondary)]" aria-live="polite">
          {index + 1} / {allPhotos.length}
        </span>
        <span className="w-9" aria-hidden="true" />
      </div>

      <div className="flex-1 relative flex items-center justify-center px-4 pb-8">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-4 md:left-10 z-10 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow-[var(--shadow-elevated)] flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative w-full h-full max-w-4xl">
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.alt}
            fill
            className="object-contain animate-[fadeIn_150ms_ease-out]"
            sizes="90vw"
            priority
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-4 md:right-10 z-10 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] shadow-[var(--shadow-elevated)] flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="text-center text-sm pb-4 text-[var(--color-text-secondary)]">
        {photo.room}
      </p>
    </div>
  );
}
