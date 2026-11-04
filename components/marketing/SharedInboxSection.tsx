import React from "react";
import StorySection from "./StorySection";
import { PRODUCT_APP_URL } from "@/lib/data/nav";
import { InboxVisual } from "./visuals";

const SharedInboxSection = () => (
  <StorySection
    id="inbox"
    eyebrow="Shared Inbox"
    title="One inbox for your entire team."
    description="WhatsApp, Instagram, AI and human agents — all inside one unified conversation view. Assign chats, leave internal notes, and mention teammates without leaving the thread."
    points={[
      { title: "Nothing falls through", desc: "Every conversation has a clear owner and status." },
      { title: "Full context, always", desc: "Customer profile, tags and history sit beside every chat." },
      { title: "Cross-channel view", desc: "WhatsApp and Instagram conversations in the same workspace." }
    ]}
    ctaLabel="Explore Shared Inbox"
    ctaHref={PRODUCT_APP_URL}
    reverse
    background="var(--background-secondary)"
    visual={<InboxVisual />}
  />
);

export default SharedInboxSection;
