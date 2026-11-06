import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Primitives";
import styles from "./product/product.module.css";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const points = [
  "Set up WhatsApp and Instagram for each client business",
  "Run each client's broadcasts, chatbots and AI agent",
  "Switch between businesses without logging out"
];

// Demo businesses. Each has its own plan, as in the product.
const businesses = [
  {
    name: "Wanderly Travels",
    initial: "W",
    color: "linear-gradient(135deg,#17a6b5,#0f7f95)",
    plan: "Pro",
    detail: "WhatsApp and Instagram",
    current: true
  },
  {
    name: "Urban Nest Realty",
    initial: "U",
    color: "linear-gradient(135deg,#e0a82e,#c58a0b)",
    plan: "Basic",
    detail: "WhatsApp"
  },
  {
    name: "Bright Minds Academy",
    initial: "B",
    color: "linear-gradient(135deg,#9b6fd6,#7a4cc0)",
    plan: "Pro",
    detail: "WhatsApp and Instagram"
  }
];

const AgenciesSection = () => (
  <section
    id="agencies"
    className="section-padding-large"
    style={{ background: "var(--background-secondary)" }}
  >
    <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <Reveal className="order-1">
        <Eyebrow>For agencies</Eyebrow>
        <h2 className="heading-2 mt-5 mb-4">Are you a marketing agency?</h2>
        <p
          className="body-large max-w-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Manage several client businesses from one login. Each business has its
          own plan, so you can start every client on the one that fits.
        </p>
        <ul className="space-y-3 mt-7 max-w-lg">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-[15px] leading-snug"
              style={{ color: "var(--text-body)" }}
            >
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "var(--accent-wash)",
                  color: "var(--primary)"
                }}
              >
                <Check className="w-3 h-3" strokeWidth={3.2} aria-hidden />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9">
          <Link href={PRODUCT_APP_URL} className="btn-primary">
            Start your free 7-day trial <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/industries/agencies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--primary-dark)" }}
          >
            How agencies use Whatching <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="order-2 w-full">
        <div
          className={`${styles.frame} max-w-xl mx-auto`}
          role="img"
          aria-label="Whatching business switcher: Wanderly Travels on the Pro plan, Urban Nest Realty on the Basic plan and Bright Minds Academy on the Pro plan, all under one login"
        >
          <div
            className="px-5 pt-4 pb-3 border-b"
            style={{ borderColor: "rgba(10,18,14,0.08)" }}
          >
            <p className="text-[15px] font-bold" style={{ color: "#0b1210" }}>
              Your businesses
            </p>
            <p className="text-[12px] mt-0.5" style={{ color: "#667781" }}>
              One login, one plan for each business
            </p>
          </div>
          <div className="p-2.5 flex flex-col gap-1.5">
            {businesses.map((b) => (
              <div
                key={b.name}
                className="flex items-center gap-3.5 rounded-xl px-3 py-3"
                style={
                  b.current
                    ? { background: "#f1faf4", border: "1.5px solid #169f49" }
                    : { border: "1.5px solid transparent" }
                }
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-bold text-white shrink-0"
                  style={{ background: b.color }}
                >
                  {b.initial}
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span
                    className="block text-[14px] font-semibold truncate"
                    style={{ color: "#0b1210" }}
                  >
                    {b.name}
                  </span>
                  <span
                    className="block text-[12px] mt-0.5"
                    style={{ color: "#667781" }}
                  >
                    {b.detail}
                  </span>
                </span>
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0"
                  style={
                    b.plan === "Pro"
                      ? { background: "#e7f6ec", color: "#0c7d38" }
                      : { background: "#f1f3f2", color: "#57685f" }
                  }
                >
                  {b.plan}
                </span>
                {b.current ? (
                  <span
                    className="flex items-center gap-1 text-[12px] font-semibold shrink-0"
                    style={{ color: "#0c7d38" }}
                  >
                    <Check className="w-4 h-4" strokeWidth={3} aria-hidden />{" "}
                    Open
                  </span>
                ) : (
                  <ChevronRight
                    className="w-4 h-4 shrink-0"
                    style={{ color: "#8a9791" }}
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AgenciesSection;
