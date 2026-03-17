"use client";

import { useRef } from "react";
import VideoBox from "@/components/ui/VideoBox";
import { AI_MODEL_ITEMS, DEEPLINK_URL } from "@/lib/config";

export default function AIModelsCarousel() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
  };
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
  };

  const handleArrowClick = () => {
    scrollRef.current?.scrollBy({ left: 304, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="ai-models-heading"
      className="relative w-full overflow-hidden pt-6 pb-8"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Section header */}
      <div className="w-full px-6 mb-6">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <h2
          id="ai-models-heading"
          className="text-[24px] font-bold leading-[32px] text-white"
          style={{ fontFamily: "var(--font-title)" }}
        >
          LATEST AI MODELS
        </h2>

        {/* See All CTA — bordered button per Figma */}
        <a
          href={DEEPLINK_URL}
          className="flex items-center gap-2 px-4 py-4 border border-[#737373] rounded-[12px] text-[#fafafa] text-[20px] font-semibold leading-[24px] hover:border-[#fafafa] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff]"
          style={{ fontFamily: "var(--font-body)" }}
          aria-label="See all AI models"
        >
          See All
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="-rotate-90">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        </div>
      </div>

      {/* Scrollable cards */}
      <ul
        ref={scrollRef}
        role="list"
        aria-label="Latest AI model video examples"
        className="flex gap-4 overflow-x-auto no-scrollbar pr-6 select-none"
        style={{ paddingLeft: "calc(24px + max(0px, (100vw - 1488px) / 2))", cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {AI_MODEL_ITEMS.map((item, index) => (
          <li
            key={`${item.title}-${index}`}
            className="shrink-0 w-[288px] flex flex-col p-[4px] rounded-[16px] border border-[#28292c]"
            style={{ backgroundColor: "#1c1d1d" }}
          >
            <a
              href={DEEPLINK_URL}
              className="flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-[12px]"
              aria-label={`${item.title} — ${item.subtitle}`}
              draggable={false}
            >
              {/* Card media — 280×280 with badge */}
              <div
                className="relative w-[280px] h-[280px] rounded-[16px] overflow-hidden"
                style={{ backgroundColor: "#28292c" }}
              >
                {item.type === "video" ? (
                  <VideoBox
                    src={item.src}
                    aria-label={`${item.title} AI model demo`}
                    className="w-full h-full"
                    rounded="rounded-[16px]"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`${item.title} AI model preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}

                {/* Badge — only shown when set (Nano Banana 2 only per Figma) */}
                {item.badge && (
                  <span
                    className="absolute top-2 left-2 px-2 py-1 rounded-[8px] text-black text-[16px] font-semibold italic leading-[20px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)]"
                    style={{ backgroundColor: "#2dcdff" }}
                    aria-label={`Status: ${item.badge}`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Description — pl-8 py-8 per Figma */}
              <div className="flex flex-col pl-[8px] py-[8px]">
                <h3
                  className="text-white text-[18px] font-medium leading-[24px]"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#cdcdcd] text-[16px] font-normal leading-[20px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.subtitle}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Arrow button */}
      <button
        onClick={handleArrowClick}
        aria-label="Scroll to next AI models"
        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full transition-colors hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff]"
        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
