import React from "react";
import StorySection from "./StorySection";
import { AIChatVisual } from "./visuals";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const AIChatbotSection = () => (
  <StorySection
    id="ai-chatbot"
    eyebrow="AI Automation"
    title="AI that talks to your customers, not at them."
    description="Whatching AI understands questions, answers naturally, and knows when a conversation needs a human — collecting the details your team needs before it hands off."
    points={[
      { title: "Understands intent, not keywords", desc: "Natural, context-aware replies that stay coherent across a conversation." },
      { title: "Qualifies while it chats", desc: "Collects budget, interest and timeline without a form." },
      { title: "Hands off with context", desc: "Agents pick up with full history — never a cold start." }
    ]}
    ctaLabel="Build an AI Assistant"
    ctaHref={PRODUCT_APP_URL}
    reverse
    background="var(--background-secondary)"
    visual={<AIChatVisual />}
  />
);

export default AIChatbotSection;
