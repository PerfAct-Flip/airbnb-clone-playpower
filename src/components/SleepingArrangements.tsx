import Image from "next/image";
import { roomSections, listing } from "@/lib/listing-data";

export function SleepingArrangements() {
  const rooms = listing.sleepingArrangements.map((s) => {
    const section = roomSections.find((r) => r.room === s.room);
    return { ...s, photo: section?.photos[0] };
  });

  return (
    <div className="py-6 border-b border-[var(--color-border-light)]">
      <h2 className="text-xl font-medium mb-4">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-2 gap-4 max-w-[520px]">
        {rooms.map((room) => (
          <div key={room.room}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--color-border-light)]">
              {room.photo && (
                <Image
                  src={room.photo.url}
                  alt={room.photo.alt}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              )}
            </div>
            <p className="font-medium mt-3">
              {room.room.replace(/\s\d+$/, "")}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {room.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
