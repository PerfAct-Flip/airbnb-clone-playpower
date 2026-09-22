import { CalendarX, Search, ShieldCheck } from "lucide-react";
import { listing } from "@/lib/listing-data";

const COLUMNS = [
  {
    icon: CalendarX,
    title: "Cancellation policy",
    lines: listing.thingsToKnow.cancellation.lines,
  },
  {
    icon: Search,
    title: "House rules",
    lines: listing.thingsToKnow.houseRules.lines,
  },
  {
    icon: ShieldCheck,
    title: "Safety & property",
    lines: listing.thingsToKnow.safety.lines,
  },
];

export function ThingsToKnow() {
  return (
    <div className="py-10 border-b border-(--color-border-light)">
      <h2 className="text-[26px] leading-7.5 font-medium mb-6">Things to know</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <col.icon size={24} className="mb-3" />
            <h3 className="font-medium mb-2">{col.title}</h3>
            {col.lines.map((line) => (
              <p key={line} className="text-sm text-(--color-text-secondary) mb-1">
                {line}
              </p>
            ))}
            <a href="#" className="text-sm font-medium underline underline-offset-2 mt-1 inline-block">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
