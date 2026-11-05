import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Primitives";
import BroadcastVisual from "./product/BroadcastVisual";
import FlowVisual from "./product/FlowVisual";
import AIAgentVisual from "./product/AIAgentVisual";

const cards = [
  {
    title: "Broadcasts",
    desc: "Send offers and updates to thousands of contacts at once, now or scheduled, and see who received, read and tapped.",
    href: "/features/whatsapp-broadcast",
    visual: <BroadcastVisual />
  },
  {
    title: "Chatbot builder",
    desc: "Build automated chats on a drag-and-drop canvas: menus, questions and branches, with a hand-over to a person. No coding.",
    href: "/features/whatsapp-flows",
    visual: <FlowVisual />
  },
  {
    title: "AI agent",
    desc: "Answers customer questions from your own documents, website and FAQs, on WhatsApp and Instagram, and hands over to your team.",
    href: "/features/ai-chatbot",
    visual: <AIAgentVisual />
  }
];

const FeatureCardsSection = () => (
  <section className="section-padding-large" id="features">
    <div className="container-wide">
      <Reveal>
        <SectionHeading
          align="center"
          title="Everything you need to keep the conversation going."
        />
      </Reveal>
      <div className="grid lg:grid-cols-3 gap-6 mt-12">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.06} className="h-full">
            <div
              className="h-full rounded-3xl p-3 flex flex-col md:flex-row lg:flex-col gap-5 md:items-center lg:items-stretch"
              style={{ background: "var(--background-secondary)" }}
            >
              <div className="w-full md:w-1/2 lg:w-full shrink-0 lg:h-[440px]">
                {card.visual}
              </div>
              <div className="px-3 pb-4 md:pb-0 lg:pb-4 flex flex-col gap-2">
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
                  className="inline-flex items-center gap-1 text-sm font-semibold mt-1"
                  style={{ color: "var(--primary-dark)" }}
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCardsSection;
