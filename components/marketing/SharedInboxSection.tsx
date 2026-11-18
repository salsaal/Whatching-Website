import React from "react";
import StorySection from "./StorySection";
import InboxVisual from "./product/InboxVisual";

const SharedInboxSection = () => (
  <StorySection
    id="inbox"
    eyebrow="Shared Inbox"
    title="One inbox for your entire team."
    description="WhatsApp and Instagram chats, and the AI agent's replies, in one inbox your whole team shares. Assign each chat to a teammate and keep everyone on one WhatsApp number."
    points={[
      {
        title: "Nothing falls through",
        desc: "Every conversation has a clear owner and status."
      },
      {
        title: "Full context, always",
        desc: "Customer profile, tags and history sit beside every chat."
      },
      {
        title: "Cross-channel view",
        desc: "WhatsApp and Instagram conversations in the same workspace."
      }
    ]}
    ctaLabel="See the shared inbox"
    ctaHref="/features/shared-inbox"
    reverse
    background="var(--background-secondary)"
    visual={<InboxVisual />}
  />
);

export default SharedInboxSection;
