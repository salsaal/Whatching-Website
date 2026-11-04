import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Calendar,
  Database,
  Instagram,
  LayoutTemplate,
  Sparkles,
  Users,
  Workflow
} from "lucide-react";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./Primitives";

const items = [
  { icon: LayoutTemplate, title: "Template Management", desc: "Create, submit and manage WhatsApp templates." },
  { icon: Bot, title: "No-Code Chatbot Builder", desc: "Build automated customer journeys visually." },
  { icon: Workflow, title: "Message Flows", desc: "Design branching, multi-step conversations visually." },
  { icon: Database, title: "Customer Database", desc: "Segment customers using tags and attributes." },
  { icon: BarChart3, title: "Analytics", desc: "Track campaigns, conversations and conversions." },
  { icon: Users, title: "Multi-Agent Inbox", desc: "Collaborate with your team on every conversation." },
  { icon: Calendar, title: "Broadcast Scheduling", desc: "Schedule campaigns in advance, by segment." },
  { icon: Instagram, title: "Instagram Automation", desc: "Automate comments, DMs and message journeys." },
  { icon: Sparkles, title: "AI Automation", desc: "Automate repetitive conversations, 24/7." }
];

const FeatureGrid = () => (
  <section className="section-padding-large">
    <div className="container-wide">
      <Reveal>
        <SectionHeading align="center" title="Everything you need, in one workspace." />
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid-features mt-12"
      >
        {items.map((item) => (
          <motion.div key={item.title} variants={staggerItem} className="product-card !cursor-default">
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
              style={{ background: "var(--accent-wash)", color: "var(--primary)" }}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeatureGrid;
