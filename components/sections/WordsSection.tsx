"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { QuoteSpotlight } from "./words/QuoteSpotlight";
import { WitnessRail, CYCLE_MS } from "./words/WitnessRail";

const TICK_MS = 60;

export function WordsSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const elapsed = useRef(0);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      elapsed.current += TICK_MS;
      const pct = Math.min((elapsed.current / CYCLE_MS) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        elapsed.current = 0;
        setActive((prev) => (prev + 1) % testimonials.length);
      }
    }, TICK_MS);

    return () => clearInterval(id);
  }, [paused, active]);

  function handleSelect(index: number) {
    elapsed.current = 0;
    setProgress(0);
    setActive(index);
  }

  return (
    <section
      id="words"
      className="border-b border-hairline px-6 py-16 sm:px-10 sm:py-20 lg:px-[72px] lg:pb-[88px]"
    >
      <SectionHeader title="In their words" meta="People I've shipped with" className="mb-12" />

      <div
        className="flex flex-col gap-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal>
          <QuoteSpotlight testimonial={testimonials[active]} />
        </Reveal>

        <Reveal delay={100}>
          <WitnessRail
            testimonials={testimonials}
            active={active}
            progress={progress}
            onSelect={handleSelect}
          />
        </Reveal>
      </div>
    </section>
  );
}