import VideoBox from "@/components/ui/VideoBox";
import { VIDEOS, DEEPLINK_URL } from "@/lib/config";

export default function MadePossibleSection() {
  const { col1, col2, col3, col4 } = VIDEOS.madePossible;

  return (
    <section
      aria-labelledby="made-possible-heading"
      className="w-full py-8 px-6"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">

        {/* Section header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2
              id="made-possible-heading"
              className="text-[20px] font-bold leading-[28px] text-white"
              style={{ fontFamily: "var(--font-title)" }}
            >
              MADE POSSIBLE WITH DOLPHIN AI
            </h2>
            <p
              className="text-[16px] font-normal leading-[20px]"
              style={{ fontFamily: "var(--font-body)", color: "#cdcdcd" }}
            >
              Real videos created by our users
            </p>
          </div>

          <a
            href={DEEPLINK_URL}
            className="flex items-center gap-2 text-[#fafafa] text-[20px] font-semibold leading-[24px] hover:text-[#2dcdff] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-sm"
            style={{ fontFamily: "var(--font-body)" }}
            aria-label="See all Dolphin AI created videos"
          >
            See all
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* 4-column static grid */}
        <div
          className="grid grid-cols-4 gap-2"
          role="list"
          aria-label="Videos made possible with Dolphin AI"
        >
          {/* Column 1 — 3 videos, 614px each */}
          <div role="listitem" className="flex flex-col gap-2">
            {col1.map((src, i) => (
              <a
                key={i}
                href={DEEPLINK_URL}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-[16px]"
                aria-label={`Made possible video, column 1, item ${i + 1}`}
              >
                <VideoBox
                  src={src}
                  aria-label={`Made possible video ${i + 1}`}
                  className="w-full h-[614px]"
                />
              </a>
            ))}
          </div>

          {/* Column 2 — 4 videos, 458px each */}
          <div role="listitem" className="flex flex-col gap-2">
            {col2.map((src, i) => (
              <a
                key={i}
                href={DEEPLINK_URL}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-[16px]"
                aria-label={`Made possible video, column 2, item ${i + 1}`}
              >
                <VideoBox
                  src={src}
                  aria-label={`Made possible video ${i + 1}`}
                  className="w-full h-[458px]"
                />
              </a>
            ))}
          </div>

          {/* Column 3 — 3 videos, 614px each */}
          <div role="listitem" className="flex flex-col gap-2">
            {col3.map((src, i) => (
              <a
                key={i}
                href={DEEPLINK_URL}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-[16px]"
                aria-label={`Made possible video, column 3, item ${i + 1}`}
              >
                <VideoBox
                  src={src}
                  aria-label={`Made possible video ${i + 1}`}
                  className="w-full h-[614px]"
                />
              </a>
            ))}
          </div>

          {/* Column 4 — 4 videos, 458px each */}
          <div role="listitem" className="flex flex-col gap-2">
            {col4.map((src, i) => (
              <a
                key={i}
                href={DEEPLINK_URL}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-[16px]"
                aria-label={`Made possible video, column 4, item ${i + 1}`}
              >
                <VideoBox
                  src={src}
                  aria-label={`Made possible video ${i + 1}`}
                  className="w-full h-[458px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
