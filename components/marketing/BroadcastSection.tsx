import React from "react";
import StorySection from "./StorySection";
import { TemplateEditorVisual } from "./visuals";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const BroadcastSection = () => (
  <StorySection
    id="broadcasts"
    eyebrow="WhatsApp Broadcasts"
    title="Broadcast campaigns that actually start conversations."
    description="Send personalized promotional and transactional campaigns through the official WhatsApp Business API — then watch delivery, reads, clicks and replies roll in on every send."
    points={[
      { title: "Personalize at scale", desc: "Dynamic variables, media messages and approved templates for every audience." },
      { title: "Add CTA buttons", desc: "Turn a broadcast into a click, a reply, or a booked call." },
      { title: "Schedule ahead", desc: "Plan campaigns weeks in advance and segment by tag or lifecycle stage." }
    ]}
    ctaLabel="Create a Campaign"
    ctaHref={PRODUCT_APP_URL}
    visual={<TemplateEditorVisual />}
  />
);

export default BroadcastSection;
