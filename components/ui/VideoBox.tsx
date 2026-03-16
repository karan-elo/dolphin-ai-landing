"use client";

import { useRef, useState, useEffect } from "react";
import SkeletonBox from "./SkeletonBox";

interface VideoBoxProps {
  src: string;
  className?: string;
  "aria-label"?: string;
  /** Border radius override — defaults to rounded-[16px] */
  rounded?: string;
}

export default function VideoBox({
  src,
  className = "",
  "aria-label": ariaLabel,
  rounded = "rounded-[16px]",
}: VideoBoxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer — only load video when in viewport
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay when visible
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !isVisible || !src) return;
    el.load();
  }, [isVisible, src]);

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {/* Skeleton shown until video loads */}
      {!isLoaded && <SkeletonBox />}

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-label={ariaLabel ?? "AI generated video"}
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {src && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
