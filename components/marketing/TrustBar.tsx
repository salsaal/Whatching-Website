import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Primitives";

const items = [
  "Official WhatsApp Business API",
  "Official Instagram Messaging API",
  "Setup in minutes",
  "Multi-agent shared inbox",
  "WhatsApp + Instagram, one platform"
];

const Pill = ({ item }: { item: string }) => (
  <div className="flex items-center gap-2 text-sm font-medium whitespace-nowrap shrink-0" style={{ color: "var(--text-secondary)" }}>
    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--primary)" }} />
    {item}
  </div>
);

const TrustBar = () => (
  <section className="py-10 max-sm:py-7 border-y" style={{ borderColor: "var(--border-light)", background: "var(--background-secondary)" }}>
    <Reveal>
      <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] mb-6 max-sm:mb-4 px-4" style={{ color: "var(--text-muted)" }}>
        Powering customer conversations
      </p>

      {/* Desktop / tablet — centered wrap */}
      <div className="container-wide hidden sm:flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {items.map((item) => (
          <Pill key={item} item={item} />
        ))}
      </div>

      {/* Mobile — marquee */}
      <div className="sm:hidden flex overflow-hidden select-none" aria-hidden="true">
        <div className="flex shrink-0 gap-8 pr-8 animate-marquee">
          {[...items, ...items].map((item, i) => (
            <Pill key={i} item={item} />
          ))}
        </div>
      </div>
      <div className="sm:hidden sr-only">{items.join(", ")}</div>
    </Reveal>
  </section>
);

export default TrustBar;
