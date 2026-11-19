import React from "react";
import { Reveal, SectionHeading } from "./Primitives";
import AnalyticsVisual from "./product/AnalyticsVisual";

const AnalyticsSection = () => (
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
        <AnalyticsVisual />
      </Reveal>
    </div>
  </section>
);

export default AnalyticsSection;
