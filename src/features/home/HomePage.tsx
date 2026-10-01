import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { CreatorCta } from "./CreatorCta";
import { FeaturedCourses } from "./FeaturedCourses";
import { GrowthBand } from "./GrowthBand";
import { HeroSection } from "./HeroSection";
import { LearningPaths } from "./LearningPaths";
import { PartnersStrip } from "./PartnersStrip";
import { Testimonials } from "./Testimonials";

export default function HomePage() {
  useDocumentTitle();
  return (
    <>
      <HeroSection />
      <main id="main">
        <PartnersStrip />
        <FeaturedCourses />
        <LearningPaths />
        <GrowthBand />
        <CreatorCta />
        <Testimonials />
      </main>
    </>
  );
}
