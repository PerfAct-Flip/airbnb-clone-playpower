import {
  Sparkles,
  Wind,
  DoorOpen,
  UtensilsCrossed,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  CheckCircle2,
  KeyRound,
  MessageCircle,
  MapPin,
  Tag,
  Dumbbell,
  Building2,
  PawPrint,
  Video,
  AlertTriangle,
  FlameKindling,
  SprayCan,
  Droplet,
  Flame,
  WashingMachine,
  Shirt,
  BedDouble,
  Blinds,
  Refrigerator,
  Utensils,
  DoorClosed,
  Tv,
  Snowflake,
  Cake,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  umbrella: Waves,
  fan: Wind,
  door: DoorOpen,
  kitchen: UtensilsCrossed,
  wifi: Wifi,
  workspace: Laptop,
  parking: Car,
  pool: Waves,
  hottub: Bath,
  sparkle: Sparkles,
  check: CheckCircle2,
  key: KeyRound,
  chat: MessageCircle,
  map: MapPin,
  tag: Tag,
  gym: Dumbbell,
  exterior: Building2,
  pets: PawPrint,
  camera: Video,
  co: AlertTriangle,
  smoke: FlameKindling,
  cake: Cake,
  school: GraduationCap,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp size={size} className={className} strokeWidth={1.5} aria-hidden="true" />;
}

// Label-based lookup for the Amenities modal, which lists raw amenity names
// (from listing-data's amenityCategories) rather than short icon keys.
// Exact glyphs won't match the reference's custom icon set (that's not
// available to us), but every row gets a semantically reasonable icon
// instead of no icon at all.
const AMENITY_LABEL_ICONS: Record<string, LucideIcon> = {
  Hairdryer: Wind,
  "Cleaning products": SprayCan,
  Shampoo: Droplet,
  "Hot water": Flame,
  "Shower gel": Droplet,
  "Washing machine": WashingMachine,
  Hangers: Shirt,
  "Bed linen": BedDouble,
  "Room-darkening blinds": Blinds,
  Iron: Flame,
  "Clothes storage": Shirt,
  Cot: BedDouble,
  "Cleaning available during stay": SprayCan,
  "Long-term stays allowed": KeyRound,
  "Private entrance": DoorClosed,
  Wifi,
  "Dedicated workspace": Laptop,
  TV: Tv,
  "Air conditioning": Snowflake,
  "Ceiling fan": Wind,
  Kitchen: UtensilsCrossed,
  Refrigerator,
  "Cooking basics": Utensils,
  "Dishes and silverware": Utensils,
  Pool: Waves,
  "Hot tub": Bath,
  "Free parking on premises": Car,
  "Pets allowed": PawPrint,
  "Exterior security cameras on property": Video,
  "Carbon monoxide alarm": AlertTriangle,
  "Smoke alarm": FlameKindling,
};

export function AmenityIcon({
  label,
  size = 24,
  className,
}: {
  label: string;
  size?: number;
  className?: string;
}) {
  const Cmp = AMENITY_LABEL_ICONS[label] ?? CheckCircle2;
  return <Cmp size={size} className={className} strokeWidth={1.5} aria-hidden="true" />;
}
