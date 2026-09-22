import { Star } from "lucide-react";
import { LaurelLeaf } from "@/components/LaurelLeaf";

export function GuestFavouriteBanner({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="mt-6 border border-[var(--color-border)] rounded-2xl p-6 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <LaurelLeaf className="h-6 w-auto shrink-0" />
        <p className="font-medium text-sm leading-tight text-center">
          Guest
          <br />
          favourite
        </p>
        <LaurelLeaf className="h-6 w-auto shrink-0 scale-x-[-1]" />
      </div>
      <div className="h-10 w-px bg-[var(--color-border)] mx-6" />
      <div className="flex-1">
        <p className="text-sm text-[var(--color-text-secondary)] max-w-[280px]">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>
      <div className="h-10 w-px bg-[var(--color-border)] mx-6" />
      <div className="text-center">
        <p className="text-lg font-semibold">{rating}</p>
        <div className="flex items-center gap-0.5 mt-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} fill="currentColor" />
          ))}
        </div>
      </div>
      <div className="h-10 w-px bg-[var(--color-border)] mx-6" />
      <div className="text-center">
        <p className="text-lg font-semibold">{reviewCount}</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">Reviews</p>
      </div>
    </div>
  );
}
