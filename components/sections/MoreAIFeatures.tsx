import { FEATURE_TAGS, DEEPLINK_URL } from "@/lib/config";

export default function MoreAIFeatures() {
  return (
    <section
      aria-labelledby="more-features-heading"
      className="w-full py-16"
      style={{ backgroundColor: "#171717" }}
    >
      {/*
        Entire block is a deeplink.
        aria-label describes the destination so screen readers know the action.
      */}
      <a
        href={DEEPLINK_URL}
        aria-label="Explore all AI features in Dolphin AI"
        className="flex flex-col items-center gap-10 px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2dcdff] focus-visible:rounded-lg"
      >
        <h2
          id="more-features-heading"
          className="text-[48px] font-bold leading-[48px] text-center whitespace-nowrap"
          style={{ fontFamily: "var(--font-title)", color: "#fafafa" }}
        >
          MORE AI FEATURES
        </h2>

        {/* Feature tag pills */}
        <ul
          role="list"
          aria-label="Available AI features"
          className="flex flex-wrap justify-center gap-2 max-w-[1038px]"
        >
          {FEATURE_TAGS.map((tag) => (
            <li key={tag}>
              <span
                className="inline-flex items-center justify-center px-4 py-2 rounded-[12px] text-[20px] font-semibold leading-[24px] whitespace-nowrap"
                style={{
                  backgroundColor: "#28292c",
                  color: "#cdcdcd",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </a>
    </section>
  );
}
