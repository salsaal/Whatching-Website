import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Instagram,
  RefreshCw,
  Sparkles,
  Zap
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AppFrame, StatCard } from "./AppFrame";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const ambientPills = [
  { label: "New lead 🎉", className: "top-[8%] left-[3%] hidden lg:block" },
  {
    label: "Order confirmed ✓",
    className: "top-[20%] right-[4%] hidden lg:block"
  },
  { label: "24/7", className: "bottom-[22%] right-[2%] hidden lg:block" },
  { label: "Comment → DM", className: "bottom-[8%] left-[8%] hidden xl:block" }
];

const channels = [
  { icon: FaWhatsapp, label: "WhatsApp" },
  { icon: Instagram, label: "Instagram" },
  { icon: Bot, label: "AI Agents" },
  { icon: Zap, label: "Automation" }
];

const phoneNumbers = [
  {
    number: "+91 8998877665",
    label: "Whatching Business",
    tags: ["Default", "Active"]
  },
  { number: "+91 9876543210", label: "Whatching Support", tags: ["Active"] }
];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section">
      {!reduceMotion &&
        ambientPills.map((p, i) => (
          <motion.span
            key={p.label}
            className={`ambient-pill animate-float ${p.className}`}
            style={{ animationDelay: `${i * 0.6}s` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
          >
            {p.label}
          </motion.span>
        ))}

      <div className="container-wide relative flex flex-col items-center text-center">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center max-w-3xl"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            <span className="pill">
              <FaWhatsapp
                className="w-3.5 h-3.5"
                style={{ color: "var(--primary)" }}
              />
              Official WhatsApp Business API
            </span>
            <span className="pill">
              <Instagram className="w-3.5 h-3.5" style={{ color: "#d6249f" }} />
              Official Instagram Messaging API
            </span>
          </div>

          <h1 className="heading-1">
            Turn conversations into{" "}
            <span style={{ color: "var(--primary)" }}>
              customers on WhatsApp &amp; Instagram.
            </span>
          </h1>

          <p className="body-large mt-6 max-w-2xl">
            Run campaigns, automate conversations, capture leads, manage your
            team inbox, and convert customers across WhatsApp and Instagram —
            from one powerful platform.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {channels.map((c) => (
              <span key={c.label} className="pill !py-2">
                <c.icon
                  className="w-3.5 h-3.5"
                  style={{ color: "var(--primary)" }}
                />
                {c.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href={PRODUCT_APP_URL} className="btn-primary">
              Start your free 7-day trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/demo" className="btn-secondary">
              Book a Demo
            </Link>
          </div>

          <div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <span>7-day trial of Pro. No card needed.</span>
            <span>Setup in minutes</span>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-5xl mt-12"
          initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <AppFrame activeIndex={0}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <StatCard icon={Sparkles} label="Subscribers" value="286" />
              <StatCard icon={Bot} label="AI tokens remaining" value="955.4K" />
              <StatCard icon={Zap} label="Daily message limit" value="2,000" />
              <StatCard icon={FaWhatsapp} label="Campaigns" value="1" />
            </div>
            <div
              className="rounded-xl p-4 flex items-center justify-between flex-wrap gap-3 mb-3"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-light)"
              }}
            >
              <div className="flex items-center gap-3">
                <div className="icon-badge !w-8 !h-8">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    WhatsApp Business API connected
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    +91 70447 02435 · Whatching Business
                  </p>
                </div>
              </div>
              <span className="pill !py-1.5 !text-[11px]">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--primary)" }}
                />
                Meta connected
              </span>
            </div>

            <div
              className="rounded-xl p-4 mb-3"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-light)"
              }}
            >
              <div className="flex items-start gap-3">
                <div className="icon-badge !w-8 !h-8">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Broadcast setup
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    This WhatsApp number is verified and ready to create
                    broadcasts.
                  </p>
                  <p
                    className="text-[11px] mt-1.5"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    Status: ready
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-light)"
              }}
            >
              <div className="flex items-center justify-between mb-3 text-left max-sm:flex-col max-sm:gap-2 max-sm:items-start">
                <div>
                  <p
                    className="text-sm font-semibold flex items-center gap-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <FaWhatsapp
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--primary)" }}
                    />
                    WhatsApp phone numbers
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    2 active of 2 allowed
                  </p>
                </div>
                <span className="btn-secondary !rounded-lg !min-h-0 !py-1.5 !px-3 !text-[11px]">
                  <RefreshCw className="w-3 h-3" /> Sync
                </span>
              </div>
              <div className="space-y-2">
                {phoneNumbers.map((p) => (
                  <div
                    key={p.number}
                    className="rounded-lg px-3 py-2.5 flex items-center justify-between flex-wrap gap-2 text-left"
                    style={{ background: "var(--background-secondary)" }}
                  >
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {p.number}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {p.label}
                      </p>
                    </div>
                    <div className="flex gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold px-2 py-1 rounded-full"
                          style={
                            t === "Active"
                              ? {
                                  background: "var(--accent-wash)",
                                  color: "var(--primary-dark)"
                                }
                              : {
                                  background: "var(--surface-hover)",
                                  color: "var(--text-muted)"
                                }
                          }
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AppFrame>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
