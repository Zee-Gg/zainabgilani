import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { social } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 sm:px-10 sm:py-24 lg:px-[72px] lg:pb-[88px]">
      <h2 className="max-w-[780px] font-display text-[36px] leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-[46px] lg:text-[58px] lg:leading-[1.04] lg:tracking-[-0.04em]">
        Have a product that deserves better than a{" "}
        <span className="text-orchid">redesign</span>?
      </h2>
      <p className="mt-6 max-w-[500px] text-[17px] leading-[1.7] text-muted">
        Available for one product engagement from Q4 2026. Email gets the fastest reply.
      </p>
      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Button
          href={`mailto:${social.email}`}
          size="lg"
          icon={<ArrowUpRight className="h-[17px] w-[17px] stroke-[2.2]" />}
        >
          Book a call
        </Button>
        <Button
          href={`mailto:${social.email}`}
          variant="outline"
          size="lg"
          icon={<Mail className="h-[17px] w-[17px] stroke-[1.9] order-first" />}
        >
          {social.email}
        </Button>
      </div>
    </section>
  );
}
