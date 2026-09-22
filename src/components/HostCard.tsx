export function HostCard({
  name,
  yearsHosting,
}: {
  name: string;
  yearsHosting: number;
}) {
  const initial = name.charAt(0);
  return (
    <div className="flex items-center gap-4 py-6 border-b border-[var(--color-border-light)]">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg shrink-0"
        style={{ backgroundColor: "#2b6b4f" }}
        aria-hidden="true"
      >
        {initial}
      </div>
      <div>
        <p className="font-medium">Hosted by {name}</p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {yearsHosting} years hosting
        </p>
      </div>
    </div>
  );
}
