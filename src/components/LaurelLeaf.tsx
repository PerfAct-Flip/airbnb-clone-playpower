/**
 * Laurel-leaf icon: a generic leaf-branch graphic downloaded by the user
 * from a free icon source (public/leaves.png), not the reference site's
 * own asset — unlike hotlinking the reference's PNG, this is licensed
 * clipart the user sourced independently, so using it directly (rather
 * than redrawing it) doesn't raise the same "lift and shift" concern.
 * The downloaded asset is a "right" laurel (stem at bottom, leaves fanning
 * up-right); the left side reuses the same file mirrored with a CSS
 * transform instead of a second image.
 */
export function LaurelLeaf({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/leaves.png" alt="" aria-hidden="true" className={className} />
  );
}
