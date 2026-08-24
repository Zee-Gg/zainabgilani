import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { PillBadge } from "./PillBadge";
import { SidebarNav } from "./SideBarNav";
import { StatusAvatar } from "./StatusAvatar";
import { LiveClock } from "./LiveClock";
import { SocialLinks } from "./SocialLinks";

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between border-hairline px-8 py-11 lg:sticky lg:top-0 lg:h-screen lg:border-r">
      <div className="flex flex-col gap-8">
        <div className="animate-fade-in-up flex flex-col gap-4 px-2">
          <StatusAvatar alt="Zainab Gilani" size={92} />
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[25px] font-bold tracking-[-0.03em]">
              Zainab Gilani
            </span>
            <span className="text-sm text-muted">Full-stack developer · Karachi</span>
          </div>
          <div className="flex items-center justify-between">
            <PillBadge pulse>Open to work · Q4 2026</PillBadge>
            <LiveClock />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="h-px bg-[linear-gradient(90deg,transparent,var(--color-hairline)_15%,var(--color-hairline)_85%,transparent)]"
        />

        <div className="animate-fade-in-up" style={{ animationDelay: "80ms" }}>
          <SidebarNav />
        </div>
      </div>

      <div
        className="animate-fade-in-up flex flex-col gap-5 px-2 pt-10 lg:pt-0"
        style={{ animationDelay: "140ms" }}
      >
        <Button
          href="#contact"
          fullWidth
          className="group"
          icon={
            <ArrowUpRight className="h-[17px] w-[17px] stroke-[2.2] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          }
        >
          Book a call
        </Button>
        <SocialLinks />
      </div>
    </aside>
  );
}