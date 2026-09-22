"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Tabs } from "@/components/Tabs";
import { TitleRow } from "@/components/TitleRow";
import { GuestFavouriteBanner } from "@/components/GuestFavouriteBanner";
import { HostCard } from "@/components/HostCard";
import { Highlights } from "@/components/Highlights";
import { Description } from "@/components/Description";
import { SleepingArrangements } from "@/components/SleepingArrangements";
import { Amenities } from "@/components/Amenities";
import { Reviews } from "@/components/Reviews";
import { LocationMap } from "@/components/LocationMap";
import { ThingsToKnow } from "@/components/ThingsToKnow";
import { SimilarListings } from "@/components/SimilarListings";
import { BookingCard } from "@/components/BookingCard";
import { PhotoTour } from "@/components/PhotoTour";
import { Lightbox } from "@/components/Lightbox";
import { listing } from "@/lib/listing-data";

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxPhotoId, setLightboxPhotoId] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1280px] px-6 pb-24" id="photos">
        <PhotoGrid onShowAll={() => setTourOpen(true)} />
        {/* Sentinel the fixed Tabs bar observes — it slides into view once
            this scrolls out of the viewport, matching the reference's real
            scroll-triggered reveal (see Tabs.tsx) rather than a naive
            scrollY threshold. */}
        <div id="photo-section-end" aria-hidden="true" />
        <TitleRow title={listing.title} />

        <Tabs />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 mt-2">
          <div>
            <div className="pb-6">
              <h2 className="text-xl font-medium">{listing.subtitle}</h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] mt-1">
                {listing.guestSummary}
              </p>
            </div>
            <GuestFavouriteBanner
              rating={listing.rating}
              reviewCount={listing.reviewCount}
            />
            <HostCard
              name={listing.host.name}
              yearsHosting={listing.host.yearsHosting}
            />
            <Highlights />
            <Description />
            <SleepingArrangements />
            <Amenities />
            <Reviews />
            <div id="location">
              <LocationMap />
            </div>
            <ThingsToKnow />
          </div>
          <div>
            <BookingCard />
          </div>
        </div>

        <SimilarListings />
      </main>

      {tourOpen && (
        <PhotoTour
          onClose={() => setTourOpen(false)}
          onOpenPhoto={(id) => setLightboxPhotoId(id)}
        />
      )}

      {lightboxPhotoId && (
        <Lightbox
          photoId={lightboxPhotoId}
          onClose={() => setLightboxPhotoId(null)}
          onNavigate={setLightboxPhotoId}
        />
      )}
    </>
  );
}
