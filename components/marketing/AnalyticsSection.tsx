import React, { useRef, useState } from "react";
import { Reveal, SectionHeading } from "./Primitives";
import AnalyticsVisual, { AnalyticsPanel } from "./product/AnalyticsVisual";

// A numbered key under the dashboard. Pointing at (or tapping) an item
// lights up the matching panel and dims the rest.
const keys: { id: AnalyticsPanel; title: string; desc: string }[] = [
  {
    id: "channels",
    title: "WhatsApp and Instagram",
    desc: "Conversations on both channels, day by day."
  },
  {
    id: "ads",
    title: "Chats from ads",
    desc: "Which Click-to-WhatsApp ads start conversations."
  },
  {
    id: "broadcasts",
    title: "Broadcast results",
    desc: "Sent, delivered, read, replied and button clicks for every broadcast."
  },
  {
    id: "charges",
    title: "Meta charges",
    desc: "What Meta charged for your messages, by category."
  }
];

const AnalyticsSection = () => {
  const [focus, setFocus] = useState<AnalyticsPanel | null>(null);
  const pointer = useRef<string>("mouse");

  return (
    <section className="section-padding-large" id="analytics">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Analytics"
            title="See what's working. Fix what isn't."
            description="Broadcast results, button taps, the ads that bring in chats and what Meta charges you, for WhatsApp and Instagram, in one dashboard."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 scroll-rise">
          <div className="media-stage rounded-[32px] p-2 sm:p-6 lg:p-10">
            <div className="relative">
              <AnalyticsVisual focus={focus} markers />
            </div>
          </div>
        </Reveal>

        <ol className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 max-w-5xl mx-auto">
          {keys.map((k, i) => {
            const active = focus === k.id;
            return (
              <li key={k.id}>
                <button
                  type="button"
                  aria-pressed={active}
                  onPointerDown={(e) => (pointer.current = e.pointerType)}
                  onPointerEnter={(e) =>
                    e.pointerType === "mouse" && setFocus(k.id)
                  }
                  onPointerLeave={(e) =>
                    e.pointerType === "mouse" && setFocus(null)
                  }
                  onFocus={() => setFocus(k.id)}
                  onBlur={() => setFocus(null)}
                  onClick={() => {
                    if (pointer.current !== "mouse")
                      setFocus((f) => (f === k.id ? null : k.id));
                    pointer.current = "mouse";
                  }}
                  className="w-full h-full text-left flex gap-2.5 sm:gap-3 rounded-2xl p-2.5 sm:p-3 lg:p-4 transition-colors"
                  style={{
                    background: active ? "var(--surface)" : "transparent",
                    boxShadow: active
                      ? "0 0 0 1px var(--border-light), 0 10px 24px -16px rgba(10,18,14,0.3)"
                      : "none"
                  }}
                >
                  <span
                    className="w-6 h-6 rounded-full grid place-items-center text-xs font-bold text-white shrink-0 mt-0.5"
                    style={{ background: "#169f49" }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className="block">
                    <span
                      className="block text-[14px] sm:text-[15px] leading-snug font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {k.title}
                    </span>
                    <span
                      className="hidden sm:block text-sm mt-1 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {k.desc}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default AnalyticsSection;
