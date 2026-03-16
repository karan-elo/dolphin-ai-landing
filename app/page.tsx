import HeroSection from "@/components/sections/HeroSection";
import VideoCarousel from "@/components/sections/VideoCarousel";
import ThreeStepsSection from "@/components/sections/ThreeStepsSection";
import AIModelsCarousel from "@/components/sections/AIModelsCarousel";
import UploadReadyHero from "@/components/sections/UploadReadyHero";
import VideoGrid from "@/components/sections/VideoGrid";
import MadePossibleSection from "@/components/sections/MadePossibleSection";
import MoreAIFeatures from "@/components/sections/MoreAIFeatures";
import FAQSection from "@/components/sections/FAQSection";
import { CAROUSEL_1_ITEMS, CAROUSEL_2_ITEMS } from "@/lib/config";

export default function Home() {
  return (
    <>
      {/* 1. Full-width hero video */}
      <HeroSection />

      {/* 2. Feature carousel #1 */}
      <VideoCarousel
        sectionLabel="Dolphin AI features — Carousel 1"
        items={CAROUSEL_1_ITEMS}
      />

      {/* 3. Three-step process */}
      <ThreeStepsSection />

      {/* 4. Latest AI models carousel */}
      <AIModelsCarousel />

      {/* 5. Upload Ready Videos hero banner */}
      <UploadReadyHero />

      {/* 6. 4×2 video grid */}
      <VideoGrid />

      {/* 7. Feature carousel #2 */}
      <VideoCarousel
        sectionLabel="Dolphin AI features — Carousel 2"
        items={CAROUSEL_2_ITEMS}
      />

      {/* 8. Made Possible With Dolphin AI — 4 column grid */}
      <MadePossibleSection />

      {/* 9. More AI Features tag cloud — deeplinked */}
      <MoreAIFeatures />

      {/* 10. FAQ accordion */}
      <FAQSection />
    </>
  );
}
