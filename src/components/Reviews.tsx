import { Icon } from "@/lib/icon-map";
import { LaurelLeaf } from "@/components/LaurelLeaf";
import { listing, reviewTags, reviews } from "@/lib/listing-data";

export function Reviews() {
  return (
    <div className="py-10 border-b border-[var(--color-border-light)]" id="reviews">
      <div className="text-center">
        {/* Exact CSS shared directly from the reference (`._IPHKNm img { height: 110px }`,
            `._acYbbH { font-size: 100px; font-weight: 500; letter-spacing: -.03em }`).
            The laurel artwork itself is our own SVG, not the reference's PNG asset. */}
        <div className="flex items-center justify-center">
          <LaurelLeaf className="h-[110px] w-auto shrink-0" />
          <span className="text-[100px] font-medium tracking-[-0.03em] leading-none mx-1">
            {listing.rating}
          </span>
          <LaurelLeaf className="h-[110px] w-auto shrink-0 scale-x-[-1]" />
        </div>
        <div className="max-w-[420px] mx-auto">
          <p className="font-medium mt-4">Guest favourite</p>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2">
            This home is a guest favourite based on ratings, reviews and
            reliability
          </p>
          <a
            href="#"
            className="text-sm underline underline-offset-2 font-medium mt-2 inline-block"
          >
            How reviews work
          </a>
        </div>
      </div>

      {/* Each column's spacing/border matches the reference's real
          `._ygNjbZ` rule exactly (padding: 0 24px; border-left between
          adjacent columns; label 14px/500, icon 32px, value 18px/500) —
          the overall column-count/ratio isn't something we have a
          legitimate source for, so equal-width columns is our own
          reasonable call, not a copied value. */}
      <div className="grid grid-cols-7 mt-10">
        <div className="px-6">
          <p className="text-sm font-medium mb-3">Overall rating</p>
          <div className="space-y-1">
            {listing.ratingDistribution.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-2 text-[var(--color-text-secondary)]">
                  {row.stars}
                </span>
                <div className="flex-1 h-1 rounded-full bg-[var(--color-border-light)] overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-text)]"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {listing.reviewBreakdown.map((item) => (
          <div
            key={item.label}
            className="px-6 border-l border-[var(--color-border)]"
          >
            <p className="text-sm font-medium mb-3">{item.label}</p>
            <Icon name={item.icon} size={32} className="text-[var(--color-text)] mb-2" />
            <p className="text-lg font-medium">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3 overflow-x-auto mt-8 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviewTags.map((tag) => (
          <button
            key={tag.label}
            type="button"
            className="shrink-0 flex items-center gap-1.5 border border-[var(--color-border)] rounded-full px-3.5 py-2 text-sm hover:border-[var(--color-text)] transition-colors"
          >
            {tag.label} <span className="text-[var(--color-text-secondary)]">{tag.count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mt-8">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium shrink-0"
                style={{ backgroundColor: "#c1852a" }}
                aria-hidden="true"
              >
                {review.initial}
              </div>
              <div>
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{review.tenure}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2 text-xs text-[var(--color-text-secondary)]">
              <span aria-hidden="true">★★★★★</span>
              <span>·</span>
              <span>{review.date}</span>
            </div>
            <p className="text-sm mt-2 leading-6">{review.text}</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-8 border border-[var(--color-text)] rounded-lg px-5 py-3 text-sm font-medium hover:bg-[var(--color-bg-subtle)]"
      >
        Show all {listing.reviewCount} reviews
      </button>
    </div>
  );
}
