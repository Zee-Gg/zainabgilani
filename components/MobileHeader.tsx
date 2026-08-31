"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { StatusAvatar } from "./StatusAvatar";
import { PillBadge } from "./PillBadge";
import { SidebarNav } from "./SideBarNav";
import { SocialLinks } from "./SocialLinks";

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-hairline px-6 py-4 lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <StatusAvatar alt="Zainab Gilani" size={36} />
          <span className="font-display text-[16px] font-bold tracking-[-0.02em]">
            Zainab Gilani
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-soft text-text transition-colors duration-200 ease-out hover:border-orchid hover:text-orchid-text"
        >
          {open ? (
            <X className="h-[18px] w-[18px] stroke-[1.8]" />
          ) : (
            <Menu className="h-[18px] w-[18px] stroke-[1.8]" />
          )}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in-up mt-5 flex flex-col gap-6 pb-2">
          <PillBadge pulse>Open to work</PillBadge>
          <SidebarNav onNavigate={() => setOpen(false)} />
          <SocialLinks />
        </div>
      )}
    </div>
  );
}
