// Mock listing data, modeled on the reference page's visible content.
// Photos are sourced from Unsplash (free, license-safe) since we're not
// allowed to lift assets from the reference site either.

export type Photo = {
  id: string;
  url: string;
  alt: string;
  room: string;
};

export type RoomSection = {
  room: string;
  tags: string[];
  photos: Photo[];
};

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  price: 28499,
  nights: 5,
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  host: {
    name: "Mirashya Homes",
    yearsHosting: 2,
  },
  highlights: [
    {
      icon: "umbrella",
      title: "Outdoor entertainment",
      body: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "fan",
      title: "Designed for staying cool",
      body: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "door",
      title: "Self check-in",
      body: "You can check in with the building staff.",
    },
  ],
  sleepingArrangements: [
    { room: "Bedroom", detail: "1 double bed" },
    { room: "Living room 1", detail: "1 sofa" },
  ],
  amenities: [
    { icon: "kitchen", label: "Kitchen" },
    { icon: "wifi", label: "Wifi" },
    { icon: "workspace", label: "Dedicated workspace" },
    { icon: "parking", label: "Free parking on premises" },
    { icon: "pool", label: "Pool" },
    { icon: "hottub", label: "Hot tub" },
  ],
  reviewBreakdown: [
    { label: "Cleanliness", value: 5.0, icon: "sparkle" },
    { label: "Accuracy", value: 5.0, icon: "check" },
    { label: "Check-in", value: 5.0, icon: "key" },
    { label: "Communication", value: 4.8, icon: "chat" },
    { label: "Location", value: 4.8, icon: "map" },
    { label: "Value", value: 4.8, icon: "tag" },
  ],
  ratingDistribution: [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 8 },
    { stars: 3, pct: 0 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 },
  ],
} as const;

export const heroPhotos: Photo[] = [
  {
    id: "hero-0",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    alt: "Living area with rattan lounge chairs and plants",
    room: "Living room 1",
  },
  {
    id: "hero-1",
    url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    alt: "Cozy seating area with grey tiled wall",
    room: "Living room 2",
  },
  {
    id: "hero-2",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    alt: "Private jacuzzi on a wooden deck",
    room: "Full bathroom",
  },
  {
    id: "hero-3",
    url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    alt: "Bedroom with warm curtains and wardrobe",
    room: "Bedroom",
  },
  {
    id: "hero-4",
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    alt: "Exterior of the apartment building",
    room: "Exterior",
  },
];

export const roomSections: RoomSection[] = [
  {
    room: "Living room 1",
    tags: ["Sofa", "Air conditioning", "Ceiling fan", "TV"],
    photos: [
      {
        id: "lr1-0",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        alt: "Living room with sofa and TV unit",
        room: "Living room 1",
      },
      {
        id: "lr1-1",
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
        alt: "Dining nook",
        room: "Living room 1",
      },
      {
        id: "lr1-2",
        url: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
        alt: "TV console detail",
        room: "Living room 1",
      },
    ],
  },
  {
    room: "Living room 2",
    tags: ["Ceiling fan", "Hot tub"],
    photos: [
      {
        id: "lr2-0",
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80",
        alt: "Rattan seating area",
        room: "Living room 2",
      },
    ],
  },
  {
    room: "Full kitchen",
    tags: ["Kitchen", "Refrigerator", "Cooking basics"],
    photos: [
      {
        id: "fk-0",
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80",
        alt: "Full kitchen with cabinets",
        room: "Full kitchen",
      },
    ],
  },
  {
    room: "Bedroom",
    tags: [
      "Double bed",
      "Air conditioning",
      "Bed linen",
      "Ceiling fan",
      "Clothes storage",
      "Cot",
      "Hangers",
      "Iron",
      "Room-darkening blinds",
      "Cleaning available during stay",
      "Cleaning products",
      "Long-term stays allowed",
      "Private entrance",
      "Wifi",
    ],
    photos: [
      {
        id: "bd-0",
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
        alt: "Bedroom with double bed",
        room: "Bedroom",
      },
      {
        id: "bd-1",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
        alt: "Bedroom entrance",
        room: "Bedroom",
      },
      {
        id: "bd-2",
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
        alt: "Bed close-up",
        room: "Bedroom",
      },
    ],
  },
  {
    room: "Full bathroom",
    tags: ["Hot tub", "Bathtub"],
    photos: [
      {
        id: "bath-0",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80",
        alt: "Jacuzzi bathroom",
        room: "Full bathroom",
      },
    ],
  },
  {
    room: "Gym",
    tags: ["Exercise equipment"],
    photos: [
      {
        id: "gym-0",
        url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80",
        alt: "Building gym",
        room: "Gym",
      },
    ],
  },
  {
    room: "Exterior",
    tags: [],
    photos: [
      {
        id: "ext-0",
        url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
        alt: "Apartment building exterior",
        room: "Exterior",
      },
    ],
  },
  {
    room: "Pool",
    tags: ["Shared pool"],
    photos: [
      {
        id: "pool-0",
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
        alt: "Rooftop pool",
        room: "Pool",
      },
    ],
  },
  {
    room: "Additional photos",
    tags: [],
    photos: [
      {
        id: "add-0",
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80",
        alt: "Additional lounge photo",
        room: "Additional photos",
      },
    ],
  },
];

// Flat list, in tour order, used by the Lightbox for prev/next navigation.
export const allPhotos: Photo[] = roomSections.flatMap((s) => s.photos);
