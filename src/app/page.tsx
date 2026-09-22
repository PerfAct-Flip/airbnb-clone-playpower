"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Tabs } from "@/components/Tabs";
import { TitleRow } from "@/components/TitleRow";
import { GuestFavouriteBanner } from "@/components/GuestFavouriteBanner";
import { HostCard } from "@/components/HostCard";
import { Highlights } from "@/components/Highlights";
import { SleepingArrangements } from "@/components/SleepingArrangements";
import { Amenities } from "@/components/Amenities";
import { Reviews } from "@/components/Reviews";
import { LocationMap } from "@/components/LocationMap";
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
        <TitleRow title={listing.title} />
        <GuestFavouriteBanner
          rating={listing.rating}
          reviewCount={listing.reviewCount}
        />

        <Tabs />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 mt-2">
          <div>
            <HostCard
              name={listing.host.name}
              yearsHosting={listing.host.yearsHosting}
            />
            <Highlights />
            <SleepingArrangements />
            <Amenities />
            <Reviews />
            <div id="location">
              <LocationMap />
            </div>
          </div>
          <div>
            <BookingCard />
          </div>
        </div>
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
