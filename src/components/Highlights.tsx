import { Icon } from "@/lib/icon-map";
import { listing } from "@/lib/listing-data";

export function Highlights() {
  return (
    <div className="py-6 border-b border-[var(--color-border-light)] space-y-6">
      {listing.highlights.map((h) => (
        <div key={h.title} className="flex items-start gap-4">
          <Icon name={h.icon} size={26} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-[15px]">{h.title}</p>
            <p className="text-sm text-[var(--color-text-secondary)]">{h.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
