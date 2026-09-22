"use client";

import Link from "next/link";
import { Search, Menu, CircleUserRound, Globe } from "lucide-react";

export function Header() {
  return (
    <header className="relative z-50 bg-white border-b border-(--color-border-light)">
      <div className="mx-auto max-w-[1760px] px-6 lg:px-20 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-(--color-primary) font-bold text-2xl"
          aria-label="Airbnb home"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 1c-.8 0-1.6.4-2 1.1C11.4 6.6 6 15.2 6 19.5 6 25.3 10.5 29 16 29s10-3.7 10-9.5c0-4.3-5.4-12.9-8-17.4-.4-.7-1.2-1.1-2-1.1zm0 5.6c2.6 4.3 6 10.2 6 12.9 0 3.6-2.7 6.2-6 6.2s-6-2.6-6-6.2c0-2.7 3.4-8.6 6-12.9z" />
          </svg>
          <span className="hidden md:inline">airbnb</span>
        </Link>

        <button
          type="button"
          className="flex items-center border border-(--color-border) rounded-full shadow-(--shadow-card) hover:shadow-(--shadow-elevated) transition-shadow h-12 text-sm"
        >
          <span className="px-5 font-bold">Anywhere</span>
          <span className="h-6 w-px bg-(--color-border)" />
          <span className="px-5 font-bold">Anytime</span>
          <span className="h-6 w-px bg-(--color-border)" />
          <span className="pl-5 pr-2 text-(--color-text-secondary)">
            Add guests
          </span>
          <span className="w-8 h-8 rounded-full bg-(--color-primary) text-white flex items-center justify-center mr-2">
            <Search size={16} strokeWidth={3} />
          </span>
        </button>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:inline text-sm font-bold rounded-full px-3 py-2 hover:bg-(--color-bg-subtle)"
          >
            Become a host
          </a>
          <button
            type="button"
            aria-label="Choose a language and region"
            className="p-2 rounded-full hover:bg-(--color-bg-subtle)"
          >
            <Globe size={18} />
          </button>
          <button
            type="button"
            aria-label="Main menu"
            className="flex items-center gap-3 border border-(--color-border) rounded-full pl-3 pr-2 py-2 hover:shadow-(--shadow-card)"
          >
            <Menu size={16} />
            <CircleUserRound size={26} className="text-(--color-text-secondary)" />
          </button>
        </div>
      </div>
    </header>
  );
}
