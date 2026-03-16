"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/config";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full py-8 px-6"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-2">

        {/* FAQ heading */}
        <div className="flex flex-col items-start justify-center w-[380px] mb-2">
          <h2
            id="faq-heading"
            className="text-[48px] font-bold leading-[48px] text-white whitespace-nowrap"
            style={{ fontFamily: "var(--font-title)" }}
          >
            FAQ
          </h2>
        </div>

        {/* Accordion list — using <dl> semantics for Q&A */}
        <dl className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const answerId = `${item.id}-answer`;

            return (
              <div key={item.id}>
                <div className="flex flex-col gap-3 py-6">
                  {/* Question row */}
                  <dt>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggle(item.id)}
                      className="flex items-center justify-between w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2dcdff] focus-visible:rounded-sm"
                    >
                      <span
                        className="flex-1 text-[20px] font-semibold leading-[24px] pr-4"
                        style={{ fontFamily: "var(--font-body)", color: "#fafafa" }}
                      >
                        {item.question}
                      </span>

                      {/* Chevron icon — rotates when open */}
                      <span
                        className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        aria-hidden="true"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="#fafafa"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>

                  {/* Answer */}
                  <dd
                    id={answerId}
                    role="region"
                    aria-labelledby={`${item.id}-question`}
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      className="text-[16px] font-normal leading-[20px]"
                      style={{ fontFamily: "var(--font-body)", color: "#cdcdcd" }}
                    >
                      {item.answer}
                    </p>
                  </dd>
                </div>

                {/* Divider — except after last item */}
                {index < FAQ_ITEMS.length - 1 && (
                  <hr
                    className="border-0 h-px m-0"
                    style={{ backgroundColor: "#3c3d40" }}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
