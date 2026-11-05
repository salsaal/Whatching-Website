import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  MessageSquareText,
  Send,
  Users2,
  Workflow,
  Zap
} from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./Primitives";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const capabilities = [
  { icon: Send, title: "Instagram DM automation" },
  { icon: MessageSquareText, title: "Comment automation" },
  { icon: Zap, title: "Keyword-triggered DMs" },
  { icon: Workflow, title: "Message flows" },
  { icon: Users2, title: "Lead capture & qualification" },
  { icon: Instagram, title: "Team handoff & analytics" }
];

const InstagramAutomationSection = () => (
  <section
    id="instagram"
    className="section-padding-large"
    style={{ background: "#0b0b0f" }}
  >
    <div className="container-wide">
      <Reveal>
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white"
            style={{
              background:
                "linear-gradient(135deg,#4f5bd5,#962fbf,#d6249f,#f77737)"
            }}
          >
            Instagram
          </span>
          <h2 className="heading-2 mt-4 mb-4 !text-white">
            Turn Instagram engagement into conversations.
          </h2>
          <p className="body-large" style={{ color: "rgba(255,255,255,0.65)" }}>
            Transform comments, DMs and interactions into automated customer
            journeys — and hand qualified leads straight to your team.
          </p>
        </div>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-12"
      >
        {capabilities.map((c) => (
          <motion.div
            key={c.title}
            variants={staggerItem}
            className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(214,36,159,0.16)", color: "#f472c8" }}
            >
              <c.icon className="w-4.5 h-4.5" />
            </div>
            <span className="text-[13px] sm:text-sm font-medium text-white leading-snug">
              {c.title}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <Reveal delay={0.15} className="mt-10">
        <Link
          href={PRODUCT_APP_URL}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:opacity-80"
        >
          Automate Instagram <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </div>
  </section>
);

export default InstagramAutomationSection;
