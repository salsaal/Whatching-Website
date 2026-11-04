import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Bot, Building2, Gauge, ShieldCheck, TicketPercent, Users, Workflow } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./Primitives";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const reasons = [
  { icon: ShieldCheck, label: "Official WhatsApp & Instagram APIs" },
  { icon: Bot, label: "AI-powered conversations, 24/7" },
  { icon: Workflow, label: "No-code automation builder" },
  { icon: Users, label: "Multi-agent team collaboration" },
  { icon: BarChart3, label: "Advanced cross-channel analytics" },
  { icon: TicketPercent, label: "Transparent, 0%-markup pricing" },
  { icon: Gauge, label: "Fast, guided setup" },
  { icon: Building2, label: "Built for agencies & multi-brand teams" }
];

const WhyWhatching = () => (
  <section className="section-padding-large">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <h2 className="heading-2 mb-4">Built for growth. Designed for conversations.</h2>
          <p className="body-large mb-8" style={{ color: "var(--text-secondary)" }}>
            Whatching isn't another bulk sender bolted onto a spreadsheet — it's a connected
            workspace for every conversation that touches revenue.
          </p>
          <Link href={PRODUCT_APP_URL} className="btn-primary">
            Start Your Free Trial →
          </Link>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.label}
              variants={staggerItem}
              className="rounded-2xl p-4 flex flex-col gap-3"
              style={{ background: "var(--surface)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="icon-badge !w-9 !h-9">
                <reason.icon className="w-4 h-4" />
              </div>
              <span className="text-[13px] font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                {reason.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyWhatching;
