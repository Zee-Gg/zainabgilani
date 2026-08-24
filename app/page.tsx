import { Sidebar } from "@/components/Sidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { PathSection } from "@/components/sections/PathSection";
import { WordsSection } from "@/components/sections/WordsSection";
import { CraftSection } from "@/components/sections/CraftSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="grid grid-cols-1 items-start lg:grid-cols-[380px_1fr]">
      <Sidebar />
      <main className="min-w-0">
        <HeroSection />
        <WorkSection />
        <PathSection />
        <WordsSection />
        <CraftSection />
        <ContactSection />
      </main>
    </div>
  );
}
