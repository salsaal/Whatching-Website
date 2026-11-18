import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Primitives";

const items = [
  "Built on Meta's official platform",
  "WhatsApp + Instagram in one inbox",
  "Prices in rupees",
  "0% markup on Meta charges",
  "7-day free trial, no card"
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
    className="py-7 max-sm:py-6 border-y"
    style={{
      borderColor: "var(--border-light)",
      background: "var(--background-secondary)"
    }}
  >
    <Reveal>
      {/* A still, wrapped list at every width. A scrolling strip on phone
          moved so slowly it read as cut-off text. */}
      {/* One row on desktop, spread across the content width; wraps
          centred below that. */}
      <ul className="container-wide flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-8 gap-y-3 max-sm:gap-x-5 max-sm:gap-y-2.5">
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
