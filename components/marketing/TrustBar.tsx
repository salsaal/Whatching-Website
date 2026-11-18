import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Primitives";

const items = [
  "Built on Meta's official WhatsApp platform",
  "WhatsApp and Instagram in one inbox",
  "Prices in rupees",
  "0% markup on Meta's charges",
  "7-day free trial, no card needed"
];

const Pill = ({ item }: { item: string }) => (
  <div
    className="flex items-center gap-2 text-sm font-medium whitespace-nowrap shrink-0"
    style={{ color: "var(--text-secondary)" }}
  >
    <CheckCircle2
      className="w-4 h-4 shrink-0"
      style={{ color: "var(--primary)" }}
    />
    {item}
  </div>
);

const TrustBar = () => (
  <section
    className="py-10 max-sm:py-7 border-y"
    style={{
      borderColor: "var(--border-light)",
      background: "var(--background-secondary)"
    }}
  >
    <Reveal>
      <p
        className="text-center text-xs font-semibold uppercase tracking-[0.14em] mb-6 max-sm:mb-4 px-4"
        style={{ color: "var(--text-muted)" }}
      >
        Powering customer conversations
      </p>

      {/* A still, wrapped list at every width. A scrolling strip on phone
          moved so slowly it read as cut-off text. */}
      <ul className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-sm:gap-x-5 max-sm:gap-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <Pill item={item} />
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default TrustBar;
