import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./Primitives";
import BroadcastVisual from "./product/BroadcastVisual";
import FlowVisual from "./product/FlowVisual";
import AIAgentVisual from "./product/AIAgentVisual";

const cards = [
  {
    title: "Broadcasts",
    desc: "Send offers and updates to thousands of contacts at once, now or scheduled, and see who received, read and tapped.",
    href: "/features/whatsapp-broadcast",
    linkLabel: "See broadcasts",
    visual: <BroadcastVisual />
  },
  {
    title: "Chatbot builder",
    desc: "Build automated chats on a drag-and-drop canvas: menus, questions and branches, with a hand-over to a person. No coding.",
    href: "/features/whatsapp-flows",
    linkLabel: "See the chatbot builder",
    visual: <FlowVisual />
  },
  {
    title: "AI agent",
    desc: "Answers customer questions from your own documents, website and FAQs, on WhatsApp and Instagram, and hands over to your team.",
    href: "/features/ai-chatbot",
    linkLabel: "See the AI agent",
    visual: <AIAgentVisual />
  }
];

const FeatureCardsSection = () => (
  <section className="section-padding-large" id="features">
    <div className="container-wide">
      <SectionHeading
        align="center"
        title="Everything you need to keep the conversation going."
      />
      {/* Three columns on desktop. Below that, a sideways-swiping row so the
          three tall cards don't stack into a very long page; the next card
          peeks in to show there's more. */}
      <ul
        className="swipe-row mt-12 flex lg:grid lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:-mx-6 md:px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0"
        aria-label="Features"
      >
        {cards.map((card) => (
          <li
            key={card.title}
            className="snap-start shrink-0 w-[86%] sm:w-[56%] lg:w-auto"
          >
            <div
              className="h-full rounded-3xl p-3 flex flex-col gap-5"
              style={{ background: "var(--background-secondary)" }}
            >
              <div className="w-full shrink-0 h-[440px]">{card.visual}</div>
              <div className="px-3 pb-4 flex flex-col gap-2 flex-1">
                <h3
                  className="text-[19px] font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold mt-auto pt-1"
                  style={{ color: "var(--primary-dark)" }}
                >
                  {card.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default FeatureCardsSection;
