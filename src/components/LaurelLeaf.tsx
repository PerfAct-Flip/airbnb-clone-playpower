/**
 * Custom laurel-leaf artwork, not the reference's actual PNG asset — the
 * reference site's images live on its own CDN and lifting them directly
 * would be exactly the kind of asset copy the task warns against. This is
 * our own SVG redraw approximating the same silhouette (a curved stack of
 * four pointed leaves ending in a small hooked stem, each leaf split into a
 * lighter/darker half for the faceted look in the reference's icon), sized
 * to the exact `height: 110px` the reference's `._IPHKNm img` rule uses
 * (via the `h-*` class callers pass in) and mirrored for the right side
 * with a CSS transform instead of a second asset.
 */
function Leaf({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <path d="M0,-34 C13,-21 13,9 0,34 L0,-34 Z" fill="#232327" />
      <path d="M0,-34 C-13,-21 -13,9 0,34 L0,-34 Z" fill="#57575f" />
    </g>
  );
}

export function LaurelLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 190"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 6px 6px rgba(0,0,0,0.15))" }}
    >
      <path
        d="M40,142 C30,150 24,162 30,172 C34,178 42,178 46,173"
        stroke="#232327"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <Leaf transform="translate(46,26) rotate(-8)" />
      <Leaf transform="translate(41,62) rotate(-32)" />
      <Leaf transform="translate(38,98) rotate(-56)" />
      <Leaf transform="translate(38,132) rotate(-80)" />
    </svg>
  );
}
