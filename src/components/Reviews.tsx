import { Icon } from "@/lib/icon-map";
import { listing } from "@/lib/listing-data";

export function Reviews() {
  return (
    <div className="py-10 border-b border-[var(--color-border-light)]" id="reviews">
      <div className="text-center max-w-[420px] mx-auto">
        <div className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="text-3xl -rotate-12">
            🍃
          </span>
          <span className="text-6xl font-semibold">{listing.rating}</span>
          <span aria-hidden="true" className="text-3xl rotate-12 scale-x-[-1]">
            🍃
          </span>
        </div>
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

      <div className="flex flex-col md:flex-row gap-x-6 gap-y-8 mt-10">
        <div className="w-full md:w-36 shrink-0 space-y-1">
          <p className="text-sm font-medium mb-2">Overall rating</p>
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

        <div className="flex flex-wrap gap-x-4 gap-y-4 flex-1">
          {listing.reviewBreakdown.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-1.5 whitespace-nowrap flex-1 min-w-[140px]"
            >
              <span className="text-sm">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
              <Icon name={item.icon} size={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
