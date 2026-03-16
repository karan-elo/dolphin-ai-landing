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

      {/* X / Twitter — left side */}
      <img
        src={UPLOAD_HERO_ASSETS.xIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[48px] h-[48px] object-contain pointer-events-none social-float"
        style={{ left: 242, top: 360, animationDuration: "4s", animationDelay: "0s" }}
        loading="lazy"
      />

      {/* YouTube — top right */}
      <img
        src={UPLOAD_HERO_ASSETS.ytIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[40px] h-[40px] object-contain pointer-events-none social-float"
        style={{ right: 288, top: 100, animationDuration: "3.5s", animationDelay: "0.6s" }}
        loading="lazy"
      />

      {/* LinkedIn — right middle-upper */}
      <img
        src={UPLOAD_HERO_ASSETS.liIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[48px] h-[48px] object-contain pointer-events-none social-float"
        style={{ right: 240, top: 207, animationDuration: "5s", animationDelay: "1.2s" }}
        loading="lazy"
      />

      {/* Instagram — right lower */}
      <img
        src={UPLOAD_HERO_ASSETS.igIcon}
        alt=""
        aria-hidden="true"
        className="absolute w-[48px] h-[48px] object-contain pointer-events-none social-float"
        style={{ right: 192, top: 370, animationDuration: "4.5s", animationDelay: "0.3s" }}
        loading="lazy"
      />

      {/* Facebook — added, left-upper area */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none social-float"
        style={{ left: 180, top: 100, animationDuration: "3.8s", animationDelay: "1.8s" }}
      >
        <FaFacebook size={44} color="#1877F2" />
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
          <div className="relative inline-block">
            <img
              src={UPLOAD_HERO_ASSETS.instantlyBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
              loading="lazy"
            />
            <p
              className="relative text-[#fafafa] font-bold uppercase leading-normal whitespace-nowrap px-4"
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
