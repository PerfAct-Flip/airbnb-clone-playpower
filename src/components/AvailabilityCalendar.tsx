"use client";

import { Keyboard } from "lucide-react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { listing } from "@/lib/listing-data";
import { rdpAirbnbTheme } from "@/lib/rdp-theme";

function fmtRangePart(date: Date) {
  return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}

export function AvailabilityCalendar({
  range,
  onRangeChange,
}: {
  range: DateRange | undefined;
  onRangeChange: (range: DateRange | undefined) => void;
}) {
  const nights =
    range?.from && range?.to
      ? Math.round((+range.to - +range.from) / (1000 * 60 * 60 * 24))
      : listing.nights;

  return (
    <div className="py-10 border-t border-(--color-border-light)">
      <h2 className="text-[22px] font-medium">
        {nights} night{nights !== 1 ? "s" : ""} in {listing.city}
      </h2>
      <p className="text-[15px] text-(--color-text-secondary) mt-1">
        {range?.from && range?.to
          ? `${fmtRangePart(range.from)} - ${fmtRangePart(range.to)}`
          : "Add your travel dates for exact pricing"}
      </p>

      <div className="mt-6">
        <DayPicker
          style={rdpAirbnbTheme}
          mode="range"
          numberOfMonths={2}
          defaultMonth={range?.from ?? new Date()}
          selected={range}
          onSelect={onRangeChange}
          disabled={{ before: new Date() }}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <button
          type="button"
          aria-label="Switch to text input for dates"
          className="w-10 h-10 rounded-full border border-(--color-border) flex items-center justify-center hover:bg-(--color-bg-subtle)"
        >
          <Keyboard size={16} />
        </button>
        <button
          type="button"
          onClick={() => onRangeChange(undefined)}
          className="text-sm font-medium underline underline-offset-2"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
