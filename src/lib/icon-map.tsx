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
