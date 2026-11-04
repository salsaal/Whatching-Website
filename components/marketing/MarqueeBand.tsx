import React from "react";
import { CheckCheck } from "lucide-react";
import { Reveal } from "./Primitives";

const rowA = [
  "Order confirmed ✓",
  "Payment received",
  "Lead qualified",
  "AI replied in 3s",
  "Broadcast delivered",
  "Comment → DM sent",
  "Order confirmed ✓",
  "Payment received",
  "Lead qualified",
  "AI replied in 3s",
  "Broadcast delivered",
  "Comment → DM sent",
  "Order confirmed ✓",
  "Payment received",
  "Lead qualified",
  "AI replied in 3s",
  "Broadcast delivered",
  "Comment → DM sent"
];
const rowB = [
  "92% read rate",
  "127 new leads today",
  "Catalogue sent",
  "Appointment booked",
  "Ticket resolved",
  "Campaign live",
  "92% read rate",
  "127 new leads today",
  "Catalogue sent",
  "Appointment booked",
  "Ticket resolved",
  "Campaign live",
  "92% read rate",
  "127 new leads today",
  "Catalogue sent",
  "Appointment booked",
  "Ticket resolved",
  "Campaign live"
];

const MarqueeRow = ({
  items,
  reverse
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <div className="flex overflow-hidden select-none" aria-hidden="true">
    <div
      className={`flex shrink-0 gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {[...items, ...items].map((label, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium shrink-0"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.85)"
          }}
        >
          <CheckCheck
            className="w-3.5 h-3.5"
            style={{ color: "var(--primary-light)" }}
          />
          {label}
        </span>
      ))}
    </div>
  </div>
);

const MarqueeBand = () => (
  <section className="py-16 max-sm:py-10" style={{ background: "var(--band-dark)" }}>
    <div className="container-wide mb-8 text-center">
      <Reveal>
        <p
          className="text-xs font-semibold uppercase tracking-wide mb-2"
          style={{ color: "var(--primary-light)" }}
        >
          Live thread energy
        </p>
        <h2
          className="text-2xl mb-8 md:text-3xl font-extrabold text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          Deals close in chat.
        </h2>
      </Reveal>
    </div>
    <div className="space-y-3">
      <MarqueeRow items={rowA} />
      <MarqueeRow items={rowB} reverse />
    </div>
  </section>
);

export default MarqueeBand;
