import Link from "next/link";
import type { Testimonial } from "@/lib/data";
import { Avatar } from "@/components/Avatar";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export function QuoteSpotlight({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, role, linkedin } = testimonial;

  return (
    <div key={name} className="animate-detail-in relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -left-2 select-none font-display text-[140px] leading-none font-bold text-text/[0.05] sm:text-[180px]"
      >
        &ldquo;
      </span>

      <blockquote className="relative max-w-[680px] font-display text-[24px] leading-[1.4] font-medium tracking-[-0.015em] text-balance text-text sm:text-[30px] lg:text-[34px]">
        {quote}
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-3.5">
        <Avatar alt={name} size={44} />
        <div className="flex flex-col gap-0.5">
          <span className="flex items-center gap-2 text-[14.5px] font-medium text-text">
            {name}
            <Link
              href={linkedin}
              aria-label={`${name} on LinkedIn`}
              className="text-meta transition-colors duration-150 hover:text-orchid-text"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
            </Link>
          </span>
          <span className="text-[13px] text-meta">{role}</span>
        </div>
      </figcaption>
    </div>
  );
}