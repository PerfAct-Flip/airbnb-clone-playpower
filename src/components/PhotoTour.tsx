"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, Share, Heart } from "lucide-react";
import { roomSections } from "@/lib/listing-data";
import { useFocusTrap } from "@/lib/use-focus-trap";

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
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="sticky top-0 bg-white z-10 border-b border-[var(--color-border-light)]">
        <div className="max-w-[900px] mx-auto flex items-center justify-between px-6 h-16">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close photo tour"
            className="p-2 rounded-full hover:bg-[var(--color-bg-subtle)]"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-medium">Photo tour</h1>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Share"
              className="p-2 rounded-full hover:bg-[var(--color-bg-subtle)]"
            >
              <Share size={18} />
            </button>
            <button
              type="button"
              aria-label="Save"
              className="p-2 rounded-full hover:bg-[var(--color-bg-subtle)]"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-8">
        {/* Thumbnail nav grid */}
        <div className="grid grid-cols-4 gap-4 mb-16">
          {roomSections.map((section) => (
            <button
              type="button"
              key={section.room}
              onClick={() => scrollToRoom(section.room)}
              className="text-left group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={section.photos[0].url}
                  alt={section.photos[0].alt}
                  fill
                  className="object-cover group-hover:brightness-90 transition-[filter]"
                  sizes="200px"
                />
              </div>
              <p className="text-sm mt-2">{section.room}</p>
            </button>
          ))}
        </div>

        {/* Room sections */}
        {roomSections.map((section) => (
          <section
            key={section.room}
            id={`tour-${section.room.replace(/\s+/g, "-")}`}
            className="grid grid-cols-2 gap-8 mb-16 scroll-mt-24"
          >
            <div>
              <h2 className="text-2xl font-medium">{section.room}</h2>
              {section.tags.length > 0 && (
                <p className="text-[var(--color-text-secondary)] mt-2">
                  {section.tags.join(" · ")}
                </p>
              )}
            </div>
            <div className="space-y-4">
              {section.photos.map((photo, i) => (
                <button
                  type="button"
                  key={photo.id}
                  data-testid="tour-photo"
                  onClick={() => onOpenPhoto(photo.id)}
                  className={`relative block w-full rounded-xl overflow-hidden ${
                    i === 0 ? "aspect-[4/3]" : "aspect-video"
                  }`}
                >
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:brightness-90 transition-[filter]"
                    sizes="450px"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
