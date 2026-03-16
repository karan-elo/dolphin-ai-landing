import VideoBox from "@/components/ui/VideoBox";
import { VIDEOS, DEEPLINK_URL, THREE_STEPS_IMAGES } from "@/lib/config";

const CARD_1_IMAGES = [
  { src: THREE_STEPS_IMAGES.card1[0], alt: "Video template preview 1", top: 50, left: 18, w: 128, h: 148 },
  { src: THREE_STEPS_IMAGES.card1[1], alt: "Video template preview 2", top: 206, left: 18, w: 128, h: 148 },
  { src: THREE_STEPS_IMAGES.card1[2], alt: "Video template preview 3", top: -20, left: 152, w: 128, h: 148 },
  { src: THREE_STEPS_IMAGES.card1[3], alt: "Video template preview 4", top: 135, left: 152, w: 128, h: 148 },
  { src: THREE_STEPS_IMAGES.card1[4], alt: "Video template preview 5", top: 35, left: 286, w: 128, h: 148 },
  { src: THREE_STEPS_IMAGES.card1[5], alt: "Video template preview 6", top: 191, left: 286, w: 128, h: 148 },
];

export default function ThreeStepsSection() {
  return (
    <section
      aria-labelledby="three-steps-heading"
      className="w-full py-8 px-6"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">

        {/* Section header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2
              id="three-steps-heading"
              className="text-[20px] font-bold leading-[28px]"
              style={{ fontFamily: "var(--font-title)", color: "#fafafa" }}
            >
              UP TO 90 SEC VIDEOS IN{" "}
              <span style={{ color: "#9ee493" }}>3 CLICK</span>
            </h2>
            <p
              className="text-[16px] font-normal leading-[20px]"
              style={{ fontFamily: "var(--font-body)", color: "#cdcdcd" }}
            >
              Create stunning videos in 3 easy steps
            </p>
          </div>

          <a
            href={DEEPLINK_URL}
            className="inline-flex items-center justify-center w-[240px] h-[56px] rounded-lg text-[#171717] text-[20px] font-semibold leading-[24px] hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dcdff]"
            style={{ backgroundColor: "#2dcdff", fontFamily: "var(--font-body)" }}
          >
            Start creating
          </a>
        </div>

        {/* Steps cards */}
        <ol
          className="flex gap-6 items-start"
          aria-label="Three steps to create a video"
        >
          {/* ── Step 1: Select a Template ── */}
          <li className="flex flex-col gap-4 shrink-0 w-[432px]">
            <div
              className="relative h-[322px] w-full overflow-hidden rounded-[16px] border"
              style={{ backgroundColor: "rgba(0,0,0,0.2)", borderColor: "#28292c" }}
            >
              {/* Image collage */}
              {CARD_1_IMAGES.map(({ src, alt, top, left, w, h }) => (
                <div
                  key={alt}
                  className="absolute overflow-hidden rounded-[13px] bg-white"
                  style={{ top, left, width: w, height: h }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Step number badge */}
              <div
                className="absolute top-[9px] left-[10px] w-[38px] h-[38px] rounded-lg flex items-center justify-center overflow-hidden z-10"
                style={{ backgroundColor: "#ff006e" }}
                aria-hidden="true"
              >
                <span
                  className="text-white text-[24px] font-bold leading-[32px]"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  1
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-2 text-center">
              <h3
                className="text-white text-[20px] font-bold leading-[28px]"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Select a Video Template
              </h3>
              <p
                className="text-[#cdcdcd] text-[16px] font-normal leading-[20px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Choose how your character talks &amp; how camera follows
              </p>
            </div>
          </li>

          {/* ── Step 2: Character & Script ── */}
          <li className="flex flex-col gap-4 shrink-0 w-[432px]">
            <div
              className="relative overflow-hidden rounded-[16px] p-6"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              {/* Character image */}
              <div className="relative h-[274px] w-[384px] overflow-hidden rounded-lg" style={{ backgroundColor: "#171717" }}>
                <img
                  src={THREE_STEPS_IMAGES.card2}
                  alt="AI character for video generation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[98px]"
                  style={{
                    background: "linear-gradient(to top, black 0%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />
                {/* Caption overlay */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[368px] rounded-lg p-4"
                  style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                >
                  <p
                    className="text-[#fafafa] text-[12px] font-normal leading-[16px] whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Hey, I was looking for the best platform to book flight t...
                  </p>
                </div>
              </div>

              {/* Step number badge */}
              <div
                className="absolute top-[9px] left-[10px] w-[38px] h-[38px] rounded-lg flex items-center justify-center overflow-hidden z-10"
                style={{ backgroundColor: "#157145" }}
                aria-hidden="true"
              >
                <span
                  className="text-white text-[24px] font-bold leading-[32px]"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  2
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-2 text-center">
              <h3
                className="text-white text-[20px] font-bold leading-[28px]"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Character &amp; Script
              </h3>
              <p
                className="text-[#cdcdcd] text-[16px] font-normal leading-[20px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Generate/Choose a character, Enter your script
              </p>
            </div>
          </li>

          {/* ── Step 3: Video Generated ── */}
          <li className="flex flex-col gap-4 shrink-0 w-[432px]">
            <div
              className="relative overflow-hidden rounded-[16px] p-6"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              <VideoBox
                src={VIDEOS.threeSteps.card3}
                aria-label="Generated video result preview"
                className="w-[384px] h-[274px]"
                rounded="rounded-lg"
              />

              {/* Step number badge */}
              <div
                className="absolute top-[9px] left-[10px] w-[38px] h-[38px] rounded-lg flex items-center justify-center overflow-hidden z-10"
                style={{ backgroundColor: "#2b61ff" }}
                aria-hidden="true"
              >
                <span
                  className="text-white text-[24px] font-bold leading-[32px]"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  3
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-2 text-center">
              <h3
                className="text-white text-[20px] font-bold leading-[28px]"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Video Generated ✅
              </h3>
              <p
                className="text-[#cdcdcd] text-[16px] font-normal leading-[20px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Download your awesome video
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
