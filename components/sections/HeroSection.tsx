import VideoBox from "@/components/ui/VideoBox";
import { VIDEOS, DEEPLINK_URL } from "@/lib/config";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero — Dolphin AI video platform"
      className="relative w-full min-h-[769px] overflow-hidden"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Visually hidden H1 for SEO — visible H1 is in UploadReadyHero */}
      <h1 className="sr-only">
        Dolphin AI — Generate Upload-Ready Videos Instantly with AI
      </h1>

      {/* Background video */}
      <VideoBox
        src={VIDEOS.hero}
        aria-label="Dolphin AI hero demo video"
        rounded="rounded-none"
        className="absolute inset-0 w-full h-full"
      />

      {/* Top gradient overlay */}
      <div
        className="absolute top-0 left-0 w-full h-[102px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-[177px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Centred overlay text card */}
      <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-full max-w-[736px] px-4">
        <div
          className="relative rounded-[16px] p-4 flex flex-col gap-3"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          {/* Prompt preview text */}
          <p
            className="text-[#fafafa] text-[20px] font-semibold leading-[24px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Girl Walking in an old market in Jaipur ...
          </p>

          {/* CTA */}
          <div className="flex justify-end">
            <a
              href={DEEPLINK_URL}
              className="inline-flex items-center justify-center px-6 py-4 rounded-[16px] text-[#171717] text-[20px] font-semibold leading-[24px] hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                backgroundColor: "#2dcdff",
                fontFamily: "var(--font-body)",
              }}
            >
              Start the Magic →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
