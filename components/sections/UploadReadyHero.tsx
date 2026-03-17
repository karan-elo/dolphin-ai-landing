import { FaFacebook } from "react-icons/fa";
import { UPLOAD_HERO_ASSETS } from "@/lib/config";

export default function UploadReadyHero() {
  return (
    <section
      aria-labelledby="upload-ready-heading"
      className="relative w-full min-h-[484px] flex flex-col items-center justify-center overflow-hidden py-16"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Floating social platform icons — decorative, aria-hidden */}

      {/* X / Twitter — left side lower */}
      <img
        src={UPLOAD_HERO_ASSETS.xIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[48px] h-[48px] object-contain pointer-events-none social-float"
        style={{ left: "16%", top: 300, animationDuration: "4s", animationDelay: "0s" }}
        loading="lazy"
      />

      {/* YouTube — right upper */}
      <img
        src={UPLOAD_HERO_ASSETS.ytIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[40px] h-[40px] object-contain pointer-events-none social-float"
        style={{ right: "20%", top: 80, animationDuration: "3.5s", animationDelay: "0.6s" }}
        loading="lazy"
      />

      {/* LinkedIn — right middle */}
      <img
        src={UPLOAD_HERO_ASSETS.liIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[48px] h-[48px] object-contain pointer-events-none social-float"
        style={{ right: "16%", top: 200, animationDuration: "5s", animationDelay: "1.2s" }}
        loading="lazy"
      />

      {/* Instagram — right lower */}
      <img
        src={UPLOAD_HERO_ASSETS.igIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[48px] h-[48px] object-contain pointer-events-none social-float"
        style={{ right: "13%", top: 340, animationDuration: "4.5s", animationDelay: "0.3s" }}
        loading="lazy"
      />

      {/* Facebook — solid blue circle with white icon to avoid transparent-f issue */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none social-float flex items-center justify-center rounded-full"
        style={{
          left: "13%",
          top: 80,
          width: 48,
          height: 48,
          backgroundColor: "#1877F2",
          animationDuration: "3.8s",
          animationDelay: "1.8s",
        }}
      >
        <FaFacebook size={28} color="white" />
      </span>

      {/* Main heading block */}
      <div className="relative flex flex-col items-center gap-2 text-center">
        {/* Line 1 */}
        <p
          className="text-[#fafafa] font-bold uppercase leading-normal whitespace-nowrap"
          style={{ fontFamily: "var(--font-title)", fontSize: "80px" }}
          aria-hidden="true"
        >
          Upload Ready
        </p>

        {/* Lines 2 & 3 — "Videos INSTANTLY" */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <p
            className="text-[#fafafa] font-bold uppercase leading-normal whitespace-nowrap"
            style={{ fontFamily: "var(--font-title)", fontSize: "80px" }}
            aria-hidden="true"
          >
            Videos
          </p>

          {/* "INSTANTLY" on cyan highlight block */}
          <div className="relative inline-block px-[18px]">
            <img
              src={UPLOAD_HERO_ASSETS.instantlyBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-x-0 top-[6px] bottom-[5px] w-full object-fill pointer-events-none"
              style={{ height: "calc(100% - 11px)" }}
              loading="lazy"
            />
            <p
              className="relative text-[#fafafa] font-bold uppercase leading-normal whitespace-nowrap"
              style={{ fontFamily: "var(--font-title)", fontSize: "80px" }}
              aria-hidden="true"
            >
              Instantly
            </p>
          </div>
        </div>

        {/* Accessible heading — visually hidden */}
        <h1 id="upload-ready-heading" className="sr-only">
          Upload Ready Videos Instantly
        </h1>

        {/* Subtitle */}
        <p
          className="mt-4 text-[#cdcdcd] text-[20px] font-light leading-normal whitespace-nowrap"
          style={{ fontFamily: "Inter, var(--font-body)" }}
        >
          Generate engaging content for all platforms
        </p>
      </div>
    </section>
  );
}
