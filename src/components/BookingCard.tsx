"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { ChevronDown, Sparkles } from "lucide-react";
import { listing } from "@/lib/listing-data";
import { rdpAirbnbTheme } from "@/lib/rdp-theme";

function fmt(date?: Date) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
}

export function BookingCard({
  range,
  onRangeChange,
}: {
  range: DateRange | undefined;
  onRangeChange: (range: DateRange | undefined) => void;
}) {
  const [guests, setGuests] = useState(2);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setCalendarOpen(false);
        setGuestsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const nights =
    range?.from && range?.to
      ? Math.round((+range.to - +range.from) / (1000 * 60 * 60 * 24))
      : listing.nights;

  return (
    <div ref={cardRef} className="sticky top-30 pt-6">
      <div className="flex items-center gap-3 border border-(--color-border) rounded-2xl px-4 pb-4 mb-4">
        <Sparkles size={20} className="text-[#2b6b4f] shrink-0" />
        <div className="flex-1 text-sm">
          <span className="font-medium">Get 10% off your next stay.</span>{" "}
          <a href="#" className="underline">
            Terms apply
          </a>
        </div>
        <button
          type="button"
          className="border border-(--color-text) rounded-lg px-4 py-2 text-sm font-medium shrink-0"
        >
          Claim
        </button>
      </div>

      <div className="border border-(--color-border) rounded-2xl p-6 shadow-(--shadow-elevated) relative">
        <p className="mb-4">
          <span className="underline text-lg font-semibold">
            ₹{listing.price.toLocaleString("en-IN")}
          </span>{" "}
          <span className="text-[15px]">for {nights} nights</span>
        </p>

        <div className="border border-(--color-border) rounded-xl overflow-hidden relative">
          <div className="grid grid-cols-2">
            <button
              type="button"
              onClick={() => {
                setCalendarOpen((o) => !o);
                setGuestsOpen(false);
              }}
              className="text-left p-3 border-r border-(--color-border) border-b"
            >
              <span className="block text-[10px] font-bold tracking-wide">
                CHECK-IN
              </span>
              <span className="text-sm">{fmt(range?.from)}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setCalendarOpen((o) => !o);
                setGuestsOpen(false);
              }}
              className="text-left p-3 border-b border-(--color-border)"
            >
              <span className="block text-[10px] font-bold tracking-wide">
                CHECKOUT
              </span>
              <span className="text-sm">{fmt(range?.to)}</span>
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setGuestsOpen((o) => !o);
              setCalendarOpen(false);
            }}
            className="w-full text-left p-3 flex items-center justify-between"
            aria-expanded={guestsOpen}
          >
            <span>
              <span className="block text-[10px] font-bold tracking-wide">
                GUESTS
              </span>
              <span className="text-sm">
                {guests} guest{guests !== 1 ? "s" : ""}
              </span>
            </span>
            <ChevronDown size={16} />
          </button>

          {calendarOpen && (
            <div className="absolute z-20 top-full left-0 mt-2 bg-white border border-(--color-border) rounded-2xl shadow-(--shadow-elevated) p-4">
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
          )}

          {guestsOpen && (
            <div className="absolute z-20 top-full right-0 mt-2 bg-white border border-(--color-border) rounded-2xl shadow-(--shadow-elevated) p-4 w-64">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Guests</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Decrease guests"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="w-7 h-7 rounded-full border border-(--color-border) flex items-center justify-center disabled:opacity-30"
                    disabled={guests <= 1}
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm">{guests}</span>
                  <button
                    type="button"
                    aria-label="Increase guests"
                    onClick={() => setGuests((g) => Math.min(8, g + 1))}
                    className="w-7 h-7 rounded-full border border-(--color-border) flex items-center justify-center disabled:opacity-30"
                    disabled={guests >= 8}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {range?.from && range?.to && (
          <p className="text-xs text-(--color-bg-subtle) bg-(--color-bg-subtle) rounded-md px-3 py-2 mt-3 text-center">
            Free cancellation before{" "}
            <strong>
              {range.from.toLocaleDateString("en-US", { day: "numeric", month: "long" })}
            </strong>
          </p>
        )}

        <button
          type="button"
          className="w-full mt-4 rounded-xl py-3.5 font-semibold text-white transition-[background] hover:[background:var(--color-reserve-gradient-hover)]"
          style={{ background: "var(--color-reserve-gradient)" }}
        >
          Reserve
        </button>
        <p className="text-center text-sm text-(--color-text-secondary) mt-3">
          You won&apos;t be charged yet
        </p>
      </div>

      <div className="text-center mt-4">
        <a href="#" className="text-sm underline underline-offset-2 text-(--color-text-secondary)">
          Report this listing
        </a>
      </div>
    </div>
  );
}
