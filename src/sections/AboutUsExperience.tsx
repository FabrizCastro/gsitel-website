import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutPurpose } from "@/components/about/AboutPurpose";

export const AboutUsExperience = () => {
  return (
    <main className="overflow-hidden">
      <AboutIntro />
      <AboutPurpose />
      <AboutLeadership />
    </main>
  );
};
