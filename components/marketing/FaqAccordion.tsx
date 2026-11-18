import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/lib/data/faq";
import { Inline } from "./Inline";

// Questions open one at a time. Answers stay in the page while closed (hidden
// visually), so search engines and AI crawlers can read every one.
const FaqAccordion = ({
  items,
  firstOpen = true
}: {
  items: FaqItem[];
  firstOpen?: boolean;
}) => {
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null);
  const id = useId();

  return (
    <div className="space-y-2.5">
      {items.map((faq, index) => {
        const isOpen = open === index;
        const panelId = `${id}-a${index}`;
        return (
          <div
            key={faq.question}
            className="rounded-2xl px-5 border transition-colors"
            style={{
              borderColor: isOpen
                ? "var(--border-strong)"
                : "var(--border-light)",
              background: "var(--surface)"
            }}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                className="w-full flex justify-between items-center gap-4 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span
                  className="font-semibold text-[15.5px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className="w-5 h-5 shrink-0 transition-transform duration-200"
                  style={{
                    color: "var(--text-secondary)",
                    transform: isOpen ? "rotate(180deg)" : "none"
                  }}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className="grid transition-all duration-200"
              style={
                isOpen
                  ? { gridTemplateRows: "1fr", opacity: 1, paddingBottom: 18 }
                  : { gridTemplateRows: "0fr", opacity: 0 }
              }
            >
              <div className="overflow-hidden">
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Inline text={faq.answer} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
