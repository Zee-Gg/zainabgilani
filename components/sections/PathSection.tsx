import { roles } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { ExperienceSpotlight } from "@/components/ExperienceSpotlight";

export function PathSection() {
  return (
    <section
      id="path"
      className="border-b border-hairline px-6 py-16 sm:px-10 sm:py-20 lg:px-[72px] lg:pb-[88px]"
    >
      <SectionHeader title="Experience" meta={roles[0].period} className="mb-14" />
      {roles.map((role) => (
        <ExperienceSpotlight key={role.company} {...role} />
      ))}
    </section>
  );
}