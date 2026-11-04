import React, { useState } from "react";
import { FaqItem } from "@/lib/data/faq";

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div
            key={faq.question}
            className="rounded-xl px-5 border transition-colors"
            style={{ borderColor: isOpen ? "var(--border-strong)" : "var(--border-light)", background: "var(--surface)" }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : index)}
              className="w-full flex justify-between items-center gap-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[15px]" style={{ color: "var(--text-primary)" }}>
                {faq.question}
              </span>
              <span
                className="text-lg shrink-0 transition-transform duration-200"
                style={{ color: "var(--primary)", transform: isOpen ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300"
              style={isOpen ? { gridTemplateRows: "1fr", opacity: 1, paddingBottom: 16 } : { gridTemplateRows: "0fr", opacity: 0 }}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {faq.answer}
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
