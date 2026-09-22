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
  subtitle: "Entire serviced apartment in Candolim, India",
  guestSummary: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  neighbourhoodBlurb:
    "Located in the heart of Candolim, Amor de Goa offers a peaceful stay " +
    "with easy access to beaches, cafés, and popular attractions.",
  price: 28499,
  nights: 5,
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  host: {
    name: "Mirashya Homes",
    yearsHosting: 2,
    reviewCount: 1463,
    rating: 4.68,
    bio: [
      { icon: "cake", text: "Born in the 80s" },
      { icon: "school", text: "Where I went to school: NICMAR GOA" },
    ],
    responseRate: "100%",
    responseTime: "within an hour",
  },
  description:
    "Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! Stay in this cozy " +
    "1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect " +
    "unwind. Enjoy high-speed WiFi, Smart TV, pet-friendly comfort, and stylish " +
    "interiors. Just minutes from Candolim Beach, popular cafés, restaurants, and " +
    "nightlife, it's ideal for couples seeking romance, relaxation, and a touch of " +
    "luxury in North Goa.",
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
    { icon: "kitchen", label: "Kitchen", available: true },
    { icon: "wifi", label: "Wifi", available: true },
    { icon: "workspace", label: "Dedicated workspace", available: true },
    { icon: "parking", label: "Free parking on premises", available: true },
    { icon: "pool", label: "Pool", available: true },
    { icon: "hottub", label: "Hot tub", available: true },
    { icon: "pets", label: "Pets allowed", available: true },
    { icon: "camera", label: "Exterior security cameras on property", available: true },
    { icon: "co", label: "Carbon monoxide alarm", available: false },
    { icon: "smoke", label: "Smoke alarm", available: false },
  ],
  amenityCategories: [
    {
      title: "Bathroom",
      items: ["Hairdryer", "Cleaning products", "Shampoo", "Hot water", "Shower gel"],
    },
    {
      title: "Bedroom and laundry",
      items: [
        "Washing machine",
        "Hangers",
        "Bed linen",
        "Room-darkening blinds",
        "Iron",
        "Clothes storage",
        "Cot",
      ],
    },
    { title: "Entertainment", items: ["TV"] },
    {
      title: "Heating and cooling",
      items: ["Air conditioning", "Ceiling fan"],
    },
    {
      title: "Home safety",
      items: ["Exterior security cameras on property"],
      unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
    },
    {
      title: "Internet and office",
      items: ["Wifi", "Dedicated workspace"],
    },
    {
      title: "Kitchen and dining",
      items: ["Kitchen", "Refrigerator", "Cooking basics", "Dishes and silverware"],
    },
    {
      title: "Location features",
      items: ["Private entrance"],
    },
    {
      title: "Outdoor",
      items: ["Pool", "Hot tub", "Free parking on premises"],
    },
    { title: "Pets", items: ["Pets allowed"] },
  ],
  thingsToKnow: {
    cancellation: {
      lines: [
        "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
        "Review this host's full policy for details.",
      ],
    },
    houseRules: {
      lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
    },
    safety: {
      lines: [
        "Carbon monoxide alarm not reported",
        "Smoke alarm not reported",
        "Exterior security cameras on property",
      ],
    },
  },
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

export const reviewTags = [
  { label: "Comfort", count: 6 },
  { label: "Accuracy", count: 5 },
  { label: "Condition", count: 4 },
  { label: "Amenities", count: 2 },
  { label: "Decor", count: 2 },
  { label: "Location", count: 2 },
] as const;

export type Review = {
  id: string;
  name: string;
  tenure: string;
  initial: string;
  date: string;
  text: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Amit",
    tenure: "2 months on Airbnb",
    initial: "A",
    date: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
  },
  {
    id: "r2",
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    initial: "A",
    date: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
  },
  {
    id: "r3",
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    initial: "S",
    date: "May 2026",
    text: "the host nitish was really great help",
  },
  {
    id: "r4",
    name: "Vedant",
    tenure: "4 years on Airbnb",
    initial: "V",
    date: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The highlight of our stay was definitely the jacuzzi. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa.",
  },
  {
    id: "r5",
    name: "Vaibhav S",
    tenure: "May 2026",
    initial: "V",
    date: "May 2026",
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    id: "r6",
    name: "Mohd",
    tenure: "May 2026",
    initial: "M",
    date: "May 2026",
    text: "Great place. Exactly as described in the listing.",
  },
];

export type SimilarListing = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
};

export const similarListings: SimilarListing[] = [
  {
    id: "s1",
    title: "Beautiful Studio with a view to die for",
    price: 23600,
    rating: 4.91,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    id: "s2",
    title: "NAQAB - 1bhk with private pool",
    price: 42218,
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
  },
  {
    id: "s3",
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: 44506,
    rating: 4.94,
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80",
  },
  {
    id: "s4",
    title: "The Tropical Studio | 5 mins to Beach",
    price: 22824,
    rating: 4.96,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=80",
  },
  {
    id: "s5",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: 39942,
    rating: 4.95,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
  },
  {
    id: "s6",
    title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
    price: 45648,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
  },
  {
    id: "s7",
    title: "Luxury Apt | Private Pool | 6 Mins from Beach",
    price: 48786,
    rating: 4.93,
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=600&q=80",
  },
  {
    id: "s8",
    title: "Serendipity Cottage - Calm Stay in Calangute-Baga",
    price: 22824,
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=600&q=80",
  },
];

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
    tags: [
      "Freezer",
      "Fridge",
      "Blender",
      "Cooker",
      "Cooking basics",
      "Kettle",
      "Microwave",
      "Toaster",
      "Wine glasses",
      "Coffee",
      "Crockery and cutlery",
    ],
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
    tags: ["Hairdryer", "Hot water", "Shampoo", "Shower gel"],
    photos: [
      {
        id: "bath-0",
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80",
        alt: "Modern bathroom with walk-in shower",
        room: "Full bathroom",
      },
    ],
  },
  {
    room: "Gym",
    tags: ["Air conditioning", "Gym", "Exercise equipment", "Ceiling fan"],
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
    tags: ["Pool"],
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

export type CoHost = {
  name: string;
  photoUrl?: string;
  initial: string;
  initialColor?: string;
};

export const coHosts: CoHost[] = [
  {
    name: "Sharath",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80",
    initial: "S",
  },
  {
    name: "Aman Dev Pahwa",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    initial: "A",
  },
  {
    name: "Maria Karen Priyanka",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    initial: "M",
  },
  {
    name: "Simran",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    initial: "S",
  },
  {
    name: "Pallavi",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    initial: "P",
  },
  {
    name: "Sanyukta",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
    initial: "S",
  },
  { name: "Shruti", initial: "S", initialColor: "#f4a4b8" },
  { name: "Amisha", initial: "A", initialColor: "#a8c5e8" },
];
