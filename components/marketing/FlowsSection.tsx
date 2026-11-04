import React from "react";
import StorySection from "./StorySection";
import { PRODUCT_APP_URL } from "@/lib/data/nav";
import { FlowBuilderVisual } from "./visuals";

const FlowsSection = () => (
  <StorySection
    id="flows"
    eyebrow="WhatsApp Flows"
    title="Build customer journeys without writing code."
    description="Design multi-step conversational flows visually and launch them without a developer ticket."
    points={[
      { title: "Visual, branching logic", desc: "Route customers based on their actual answers." },
      { title: "Hands off to your team", desc: "Any step can assign the conversation to an agent." }
    ]}
    ctaLabel="Build Your First Flow"
    ctaHref={PRODUCT_APP_URL}
    visual={<FlowBuilderVisual />}
  />
);

export default FlowsSection;
