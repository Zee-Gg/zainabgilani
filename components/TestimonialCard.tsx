import type { Testimonial } from "@/lib/data";
import { Avatar } from "./Avatar";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export function TestimonialCard({ quote, name, role, linkedin, featured }: Testimonial) {
  return (
    <figure
      className={`m-0 flex flex-col gap-6 rounded-[20px] bg-panel ${
        featured ? "gap-[26px] px-7 py-8 sm:px-9" : "gap-6 px-7 py-[30px] sm:px-8"
      }`}
    >
      <blockquote
        className={`m-0 text-text text-pretty ${
          featured
            ? "max-w-[820px] text-lg leading-[1.55] sm:text-xl"
            : "text-[16.5px] leading-[1.65]"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center justify-between gap-5">
        <span className="flex items-center gap-3.5">
          <Avatar alt={name} size={featured ? 44 : 40} />
          <span className="flex flex-col gap-0.5">
            <span className={`font-medium ${featured ? "text-[14.5px]" : "text-sm"}`}>
              {name}
            </span>
            <span className={`text-meta ${featured ? "text-[13px]" : "text-[12.5px]"}`}>
              {role}
            </span>
          </span>
        </span>
        <a
          href={linkedin}
          title="LinkedIn profile"
          className={`flex items-center justify-center rounded-xl bg-surface-hover-strong text-muted transition-colors duration-150 ease-out hover:bg-badge-strong hover:text-orchid-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid ${
            featured ? "h-[38px] w-[38px]" : "h-9 w-9"
          }`}
        >
          <LinkedInIcon className={featured ? "h-4 w-4" : "h-[15px] w-[15px]"} />
        </a>
      </figcaption>
    </figure>
  );
}
