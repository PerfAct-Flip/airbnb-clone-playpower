import { Star } from "lucide-react";

export function GuestFavouriteBanner({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="mt-6 border border-[var(--color-border)] rounded-2xl p-6 flex items-center justify-between">
      <div className="flex-1">
        <p className="font-medium text-sm">Guest favourite</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1 max-w-[280px]">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>
      <div className="h-10 w-px bg-[var(--color-border)] mx-6" />
      <div className="flex-1 text-center">
        <p className="text-xl font-semibold flex items-center justify-center gap-1">
          {rating}
          <Star size={16} fill="currentColor" />
        </p>
      </div>
      <div className="h-10 w-px bg-[var(--color-border)] mx-6" />
      <div className="flex-1 text-center">
        <p className="text-xl font-semibold underline">{reviewCount}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">Reviews</p>
      </div>
    </div>
  );
}
