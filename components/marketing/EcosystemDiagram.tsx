import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Bot, Megaphone, TrendingUp, User, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./Primitives";

const nodes = [
  { label: "Ads", icon: Megaphone, color: "#1877f2", bg: "rgba(24,119,242,0.08)" },
  { label: "Lead", icon: User, color: "var(--text-primary)", bg: "var(--surface-hover)" },
  { label: "WhatsApp", icon: FaWhatsapp, color: "var(--primary)", bg: "var(--accent-wash)" },
  { label: "AI", icon: Bot, color: "var(--primary)", bg: "var(--accent-wash)" },
  { label: "Sales Team", icon: Users, color: "var(--text-primary)", bg: "var(--surface-hover)" },
  { label: "Revenue", icon: TrendingUp, color: "var(--primary-dark)", bg: "var(--accent-wash)" }
];

const NodeCell = ({ node }: { node: (typeof nodes)[number] }) => (
  <motion.div variants={staggerItem} className="flex flex-col items-center gap-2.5">
    <div
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
      style={{ background: node.bg, border: "1px solid var(--border-light)" }}
    >
      <node.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: node.color }} />
    </div>
    <span className="text-xs font-semibold text-center" style={{ color: "var(--text-primary)" }}>
      {node.label}
    </span>
  </motion.div>
);

const EcosystemDiagram = () => (
  <section className="section-padding-large" id="platform">
    <div className="container-wide">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="The Whatching ecosystem"
          title={
            <>
              One platform. <span style={{ color: "var(--primary)" }}>Every customer conversation.</span>
            </>
          }
          description="Every channel your customers already use, connected to the team and automation that turns it into revenue."
        />
      </Reveal>

      {/* Desktop / tablet — single row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 hidden sm:flex flex-row items-center justify-between gap-2"
      >
        {nodes.map((node, i) => (
          <React.Fragment key={node.label}>
            <NodeCell node={node} />
            {i < nodes.length - 1 && (
              <motion.div variants={staggerItem}>
                <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "var(--border-strong)" }} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile — 2 per row, with flow arrows */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 sm:hidden space-y-3"
      >
        {[0, 2, 4].map((startIdx) => (
          <React.Fragment key={startIdx}>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <NodeCell node={nodes[startIdx]} />
              <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "var(--border-strong)" }} />
              <NodeCell node={nodes[startIdx + 1]} />
            </div>
            {startIdx < 4 && (
              <div className="flex justify-center">
                <ArrowDown className="w-4 h-4" style={{ color: "var(--border-strong)" }} />
              </div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </section>
);

export default EcosystemDiagram;
