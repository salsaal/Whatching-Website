import React from "react";
import {
  BarChart3,
  Bot,
  Check,
  Instagram,
  MessagesSquare,
  Share2,
  Users,
  Workflow
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Reveal,
  SectionHeading,
  staggerContainer,
  staggerItem
} from "./Primitives";

const capabilities = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp Marketing",
    desc: "Broadcast campaigns, promotions and transactional communication.",
    points: ["Approved template messages", "Delivery & read analytics"]
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "AI-powered customer conversations, available 24/7.",
    points: [
      "Understands intent, not keywords",
      "Qualifies leads automatically"
    ]
  },
  {
    icon: Workflow,
    title: "WhatsApp Flows",
    desc: "Build no-code conversational journeys.",
    points: ["Visual, branching logic", "Launch without a developer"]
  },
  {
    icon: MessagesSquare,
    title: "Shared Inbox",
    desc: "Your entire team can manage conversations together.",
    points: ["Assign & tag conversations", "One number, many teammates"]
  },
  {
    icon: Users,
    title: "Lead Management",
    desc: "Capture, qualify, segment and follow up with leads.",
    points: ["Tags & custom attributes", "Automatic tags from what contacts do"]
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Understand campaign and conversation performance.",
    points: ["Full-funnel reporting", "WhatsApp + Instagram, one view"]
  },
  {
    icon: Instagram,
    title: "Instagram Automation",
    desc: "Turn Instagram engagement into conversations and leads.",
    points: ["DM & comment automation", "Hands off to your team"]
  },
  {
    icon: Share2,
    title: "Comment Automation",
    desc: "Automatically trigger DMs when users comment on posts.",
    points: ["Keyword-triggered replies", "Scales with virality"]
  }
];

const PlatformOverview = () => (
  <section
    className="section-padding-large"
    style={{ background: "var(--background-secondary)" }}
  >
    <div className="container-wide">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Platform overview"
          title="Everything your team needs to convert conversations into revenue."
          description="Marketing, automation, AI and support — built as one connected system instead of six disconnected tools."
        />
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
      >
        {capabilities.map((c) => (
          <motion.div
            key={c.title}
            variants={staggerItem}
            className="product-card !cursor-default"
          >
            <div className="icon-badge mb-4">
              <c.icon className="w-5 h-5" />
            </div>
            <h3
              className="text-[15px] font-semibold mb-1.5"
              style={{ color: "var(--text-primary)" }}
            >
              {c.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              {c.desc}
            </p>
            <ul className="space-y-1.5">
              {c.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-1.5 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Check
                    className="w-3 h-3 mt-0.5 shrink-0"
                    style={{ color: "var(--primary)" }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PlatformOverview;
