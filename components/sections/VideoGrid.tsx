import VideoBox from "@/components/ui/VideoBox";
import { VIDEOS, DEEPLINK_URL } from "@/lib/config";

export default function VideoGrid() {
  return (
    <section
      aria-labelledby="video-grid-heading"
      className="w-full py-8 px-6"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">

        {/* Section header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2
              id="video-grid-heading"
              className="text-[20px] font-bold leading-[28px] text-white"
              style={{ fontFamily: "var(--font-title)" }}
            >
              UP TO 90 SEC VIDEOS
            </h2>
            <p
              className="text-[16px] font-normal leading-[20px]"
              style={{ fontFamily: "var(--font-body)", color: "#cdcdcd" }}
            >
              Generate longer videos without manual stitching
            </p>
          </div>

          <a
            href={DEEPLINK_URL}
            className="flex items-center gap-2 text-[#fafafa] text-[20px] font-semibold leading-[24px] hover:text-[#2dcdff] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-sm"
            style={{ fontFamily: "var(--font-body)" }}
            aria-label="See all videos"
          >
            See all
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* 4×2 video grid */}
        <ul
          role="list"
          aria-label="AI generated video gallery"
          className="grid grid-cols-4 gap-2"
        >
          {VIDEOS.videoGrid.map((src, index) => (
            <li key={index}>
              <a
                href={DEEPLINK_URL}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-[16px]"
                aria-label={`View AI generated video ${index + 1}`}
              >
                <VideoBox
                  src={src}
                  aria-label={`AI generated video ${index + 1} of 8`}
                  className="w-full h-[614px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
