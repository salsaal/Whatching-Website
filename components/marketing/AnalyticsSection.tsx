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
          title="Know what's working. Scale what isn't."
          description="Broadcast results, template button clicks, the ads that bring in chats and what Meta charges — across WhatsApp and Instagram — in one dashboard. Figures shown are illustrative demo data."
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <AnalyticsVisual />
      </Reveal>
    </div>
  </section>
);

export default AnalyticsSection;
