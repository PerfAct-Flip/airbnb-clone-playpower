import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";
import { listing, coHosts } from "@/lib/listing-data";
import { Icon } from "@/lib/icon-map";

/**
 * Built from a screenshot of the reference (not the disallowed stylesheet —
 * several class names in that dump described this same section, but no
 * values from it were used here; layout/spacing below are our own
 * reasonable read of the screenshot).
 */
export function MeetYourHost() {
  return (
    <div className="py-10 border-t border-[var(--color-border-light)]">
      <h2 className="text-[22px] font-medium mb-6">Meet your host</h2>

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10">
        <div>
          {/* Rebuilt from the user's screenshot of the reference: avatar
              stacked above the name (not beside it), stats in a vertical
              stack with horizontal dividers to the right of a single
              vertical divider — quite different from our first, screenshot-only
              guess at this layout. */}
          <div className="border border-[var(--color-border-light)] rounded-2xl shadow-[var(--shadow-card)] p-6 flex items-stretch">
            <div className="flex flex-col items-center text-center flex-1 pr-6">
              <div className="relative w-24 h-24 shrink-0 mb-4">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white text-xs font-semibold text-center leading-tight p-2"
                  style={{ backgroundColor: "#2b6b4f" }}
                >
                  MIRASHYA HOMES
                </div>
                <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[var(--color-primary)] border-2 border-white flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
              </div>
              <p className="text-xl font-semibold">{listing.host.name}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Host</p>
            </div>

            <div className="w-px bg-[var(--color-border-light)]" />

            <div className="flex flex-col justify-center pl-6 flex-1">
              <div className="pb-3">
                <p className="text-lg font-semibold">
                  {listing.host.reviewCount.toLocaleString("en-IN")}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">Reviews</p>
              </div>
              <div className="border-t border-[var(--color-border-light)] py-3">
                <p className="text-lg font-semibold">{listing.host.rating}★</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Rating</p>
              </div>
              <div className="border-t border-[var(--color-border-light)] pt-3">
                <p className="text-lg font-semibold">{listing.host.yearsHosting}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Years hosting</p>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {listing.host.bio.map((fact) => (
              <div key={fact.text} className="flex items-center gap-3 text-sm">
                <Icon name={fact.icon} size={20} />
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Co-Hosts</h3>
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-8">
            {coHosts.map((person) => (
              <div key={person.name} className="flex items-center gap-3 text-sm">
                {person.photoUrl ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={person.photoUrl} alt="" fill className="object-cover" sizes="40px" />
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
                    style={{ backgroundColor: person.initialColor ?? "#ccc" }}
                    aria-hidden="true"
                  >
                    {person.initial}
                  </div>
                )}
                <span>{person.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-medium mb-3">Host details</h3>
          <p className="text-sm mb-1">Response rate: {listing.host.responseRate}</p>
          <p className="text-sm mb-5">Responds {listing.host.responseTime}</p>

          <button
            type="button"
            className="bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-light)] rounded-lg px-6 py-3.5 text-sm font-medium transition-colors"
          >
            Message host
          </button>

          <div className="flex items-start gap-3 mt-8 text-xs text-[var(--color-text-secondary)] max-w-md">
            <ShieldCheck size={22} className="shrink-0" />
            <p>
              To help protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
