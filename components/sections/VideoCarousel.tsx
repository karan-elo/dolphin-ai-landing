"use client";

import { useRef } from "react";
import VideoBox from "@/components/ui/VideoBox";
import type { CarouselItem } from "@/lib/config";
import { DEEPLINK_URL } from "@/lib/config";

interface CarouselHeader {
  title: string;
  subtitle?: string;
}

interface VideoCarouselProps {
  sectionLabel: string;
  items: CarouselItem[];
  header?: CarouselHeader;
}

const BADGE_COLORS: Record<"green" | "purple", string> = {
  green: "#157145",
  purple: "#b107e0",
};

export default function VideoCarousel({ sectionLabel, items, header }: VideoCarouselProps) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* ── Mouse drag handlers ── */
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  /* ── Touch drag handlers ── */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current =
      e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  /* ── Arrow button ── */
  const handleArrowClick = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 495, behavior: "smooth" });
  };

  return (
    <section
      aria-label={sectionLabel}
      className="relative w-full overflow-hidden py-12"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Optional visible section header (e.g. Carousel 2) */}
      {header ? (
        <div className="w-full px-6">
          <div className="max-w-[1440px] mx-auto mb-6 flex items-start">
            <div className="flex flex-col gap-1">
              <h2
                className="text-[20px] font-bold leading-[28px] text-white whitespace-nowrap"
                style={{ fontFamily: "var(--font-title)" }}
              >
                {header.title}
              </h2>
              {header.subtitle && (
                <p
                  className="text-[16px] font-normal leading-[20px]"
                  style={{ fontFamily: "var(--font-body)", color: "#cdcdcd" }}
                >
                  {header.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Visually hidden section heading for screen readers */
        <h2 className="sr-only">{sectionLabel}</h2>
      )}

      {/* Scrollable card list */}
      <ul
        ref={scrollRef}
        role="list"
        aria-label={`${sectionLabel} videos`}
        className="flex gap-4 overflow-x-auto no-scrollbar pr-6 select-none"
        style={{ paddingLeft: "calc(24px + max(0px, (100vw - 1488px) / 2))", cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="shrink-0 w-[479px]">
            <a
              href={DEEPLINK_URL}
              className="flex flex-col gap-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-[16px]"
              aria-label={`${item.title} — ${item.subtitle}`}
              draggable={false}
            >
              {/* Video */}
              <VideoBox
                src={item.videoSrc}
                aria-label={`${item.title} video demo`}
                className="w-full h-[322px]"
              />

              {/* Card description */}
              <div className="flex flex-col gap-2">
                {/* Title + badge row */}
                <div className="flex items-center gap-2">
                  <h3
                    className="text-white text-[20px] font-bold leading-[28px] whitespace-nowrap"
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="px-2 py-1 rounded-lg text-white text-[16px] font-semibold italic leading-[20px] whitespace-nowrap shrink-0"
                    style={{ backgroundColor: BADGE_COLORS[item.badgeColor] }}
                    aria-label={item.badge}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  className="text-[#cdcdcd] text-[16px] font-normal leading-[20px] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.subtitle}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Next arrow button */}
      <button
        onClick={handleArrowClick}
        aria-label="Scroll to next videos"
        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff]"
        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        type="button"
      >
        {/* Chevron right */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
