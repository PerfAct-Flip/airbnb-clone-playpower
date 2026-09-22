"use client";

import { Share, Heart } from "lucide-react";
import { useState } from "react";

export function TitleRow({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="flex items-start justify-between gap-4 mt-6">
      <h1 className="text-[26px] leading-[30px] font-medium">{title}</h1>
      <div className="flex items-center gap-4 shrink-0 pt-1">
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-2 rounded-md px-2 py-2 hover:bg-[var(--color-bg-subtle)]"
        >
          <Share size={16} />
          Share
        </button>
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          aria-pressed={saved}
          className="flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-2 rounded-md px-2 py-2 hover:bg-[var(--color-bg-subtle)]"
        >
          <Heart
            size={16}
            fill={saved ? "var(--color-primary)" : "none"}
            stroke={saved ? "var(--color-primary)" : "currentColor"}
          />
          Save
        </button>
      </div>
    </div>
  );
}
