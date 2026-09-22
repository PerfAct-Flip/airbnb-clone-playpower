"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { listing } from "@/lib/listing-data";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function AmenitiesModal({ onClose }: { onClose: () => void }) {
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

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        className="bg-white rounded-2xl w-full max-w-[600px] max-h-[85vh] flex flex-col"
      >
        <div className="flex items-center px-4 h-16 border-b border-[var(--color-border-light)] shrink-0">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-10 h-10 rounded-full inline-flex items-center justify-center hover:bg-[var(--color-bg-subtle)]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">
          <h2 className="text-2xl font-medium mb-6">What this place offers</h2>
          {listing.amenityCategories.map((cat) => (
            <div key={cat.title} className="mb-8">
              <h3 className="font-medium mb-4">{cat.title}</h3>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item} className="text-[15px]">
                    {item}
                  </div>
                ))}
                {"unavailable" in cat &&
                  cat.unavailable?.map((item) => (
                    <div
                      key={item}
                      className="text-[15px] text-[var(--color-text-secondary)] line-through decoration-1"
                    >
                      {item}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
