"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Grid2x2 } from "lucide-react";
import { allPhotos } from "@/lib/listing-data";
import { useFocusTrap } from "@/lib/use-focus-trap";

/**
 * Matches the reference's real Lightbox markup/CSS, extracted via a saved
 * DOM snapshot (#lightbox, #lbPrev/#lbNext/#lbClose/#lbGrid/#lbCounter) and
 * its embedded stylesheet — not guessed. Key specifics reproduced here:
 * absolute 72px header (grid button left, title center, counter+close
 * grouped right), edge-anchored 20px prev/next buttons with a dark 1px
 * border and an active:scale press, non-looping navigation (disabled at
 * the first/last photo), and a per-image fade transition on navigation.
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
  const isFirst = index <= 0;
  const isLast = index >= allPhotos.length - 1;
  const [visible, setVisible] = useState(false);

  const goNext = useCallback(() => {
    if (index >= allPhotos.length - 1) return;
    onNavigate(allPhotos[index + 1].id);
  }, [index, onNavigate]);

  const goPrev = useCallback(() => {
    if (index <= 0) return;
    onNavigate(allPhotos[index - 1].id);
  }, [index, onNavigate]);

  useEffect(() => {
    // mount fade-in, matching the reference's opacity/visibility transition
    const raf = requestAnimationFrame(() => setVisible(true));
    closeBtnRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, goNext, goPrev]);

  if (!photo) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] bg-white flex items-center justify-center transition-opacity duration-[250ms] ease-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <header className="absolute top-0 left-0 right-0 h-[72px] flex items-center px-6 z-[3]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Show all photos"
          className="-ml-2 w-10 h-10 rounded-full inline-flex items-center justify-center hover:bg-[var(--color-bg-subtle)] transition-colors"
        >
          <Grid2x2 size={18} />
        </button>

        <span className="absolute left-1/2 -translate-x-1/2 text-base font-medium">
          {photo.room}
        </span>

        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm text-[var(--color-text-secondary)]" aria-live="polite">
            {index + 1} / {allPhotos.length}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-10 h-10 rounded-full inline-flex items-center justify-center hover:bg-[var(--color-bg-subtle)] transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </header>

      <button
        type="button"
        onClick={goPrev}
        disabled={isFirst}
        aria-label="Previous"
        className="absolute top-1/2 -translate-y-1/2 left-5 z-[3] w-10 h-10 rounded-full bg-white border border-[#222] flex items-center justify-center transition-transform hover:bg-[var(--color-bg-subtle)] active:scale-[.92] disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>

      <div className="flex items-center justify-center w-full h-full py-[88px] px-24">
        <Image
          key={photo.id}
          src={photo.url}
          alt={photo.alt}
          width={1100}
          height={825}
          className="w-auto h-auto max-w-[min(1100px,100%)] max-h-full object-contain animate-[fadeIn_300ms_ease]"
          sizes="1100px"
          priority
        />
      </div>

      <button
        type="button"
        onClick={goNext}
        disabled={isLast}
        aria-label="Next"
        className="absolute top-1/2 -translate-y-1/2 right-5 z-[3] w-10 h-10 rounded-full bg-white border border-[#222] flex items-center justify-center transition-transform hover:bg-[var(--color-bg-subtle)] active:scale-[.92] disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}
