"use client";

import { useEffect, useState } from "react";
import { DEEPLINK_URL } from "@/lib/config";

const NAV_LINKS = [
  { label: "Explore", href: "#", active: true },
  { label: "Studio", href: "#", active: false },
  { label: "Playground", href: "#", active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#171717] border-b border-[#28292c]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-[80px] px-6 max-w-[1440px] mx-auto">

        {/* Left — Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" aria-label="Dolphin AI home" className="flex items-center gap-2 shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#171717] font-bold text-sm"
              style={{ backgroundColor: "#2dcdff" }}
              aria-hidden="true"
            >
              D
            </div>
          </a>

          {/* Nav links */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href, active }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`text-[20px] leading-[24px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-sm ${
                      active
                        ? "text-[#fafafa] font-semibold"
                        : "text-[#cdcdcd] font-normal hover:text-[#fafafa]"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right — CTA Buttons */}
        <div className="flex items-center gap-2 h-[44px]">
          {/* Pricing + Sale badge */}
          <a
            href={DEEPLINK_URL}
            className="flex items-center gap-1 h-full px-5 bg-white/10 border border-white/20 rounded-[12px] text-[#fafafa] text-[16px] font-semibold hover:bg-white/15 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff]"
            style={{ fontFamily: "var(--font-body)" }}
            aria-label="Pricing — Sale available"
          >
            <span>⚡</span>
            <span>Pricing</span>
            <span
              className="ml-1 px-2 py-0.5 rounded-lg text-white text-[13px] font-semibold"
              style={{ backgroundColor: "#ff006e" }}
            >
              Sale
            </span>
          </a>

          {/* Log in */}
          <a
            href={DEEPLINK_URL}
            className="flex items-center h-full px-5 bg-white/10 border border-white/20 rounded-[12px] text-[#fafafa] text-[16px] font-semibold hover:bg-white/15 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Log in
          </a>

          {/* Sign up */}
          <a
            href={DEEPLINK_URL}
            className="flex items-center h-full px-6 rounded-[12px] text-[#171717] text-[16px] font-semibold hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dcdff]"
            style={{ backgroundColor: "#2dcdff", fontFamily: "var(--font-body)" }}
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
