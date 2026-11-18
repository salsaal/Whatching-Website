import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Plus } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Eyebrow } from "./Primitives";
import styles from "./product/product.module.css";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const points = [
  "Set up WhatsApp and Instagram for each client business",
  "Run each client's broadcasts, chatbots and AI agent",
  "Switch between businesses without logging out"
];

// Demo businesses. Each has its own plan and its own channels, as in the
// product.
const businesses = [
  {
    name: "Wanderly Travels",
    initial: "W",
    color: "linear-gradient(135deg,#17a6b5,#0f7f95)",
    plan: "Pro",
    whatsapp: true,
    instagram: true,
    current: true
  },
  {
    name: "Urban Nest Realty",
    initial: "U",
    color: "linear-gradient(135deg,#e0a82e,#c58a0b)",
    plan: "Basic",
    whatsapp: true,
    instagram: false
  },
  {
    name: "Bright Minds Academy",
    initial: "B",
    color: "linear-gradient(135deg,#9b6fd6,#7a4cc0)",
    plan: "Pro",
    whatsapp: true,
    instagram: true
  }
];

// The business switcher picture, also used on the agencies industry page.
export const BusinessSwitcher = () => (
  <div
    className={`${styles.frame} w-full`}
    role="img"
    aria-label="Whatching business switcher: Wanderly Travels on the Pro plan with WhatsApp and Instagram, Urban Nest Realty on the Basic plan with WhatsApp, and Bright Minds Academy on the Pro plan with WhatsApp and Instagram, all under one login"
  >
    <div
      className="px-5 py-4 border-b flex items-center justify-between gap-3"
      style={{ borderColor: "rgba(10,18,14,0.08)" }}
    >
      <span>
        <span
          className="block text-[15px] font-bold"
          style={{ color: "#0b1210" }}
        >
          Your businesses
        </span>
        <span className="block text-[12px] mt-0.5" style={{ color: "#667781" }}>
          One login, one plan for each business
        </span>
      </span>
      <span
        className="text-[12px] font-semibold px-2.5 py-1 rounded-full shrink-0"
        style={{ background: "#f1f3f2", color: "#57685f" }}
      >
        3 businesses
      </span>
    </div>
    <div className="p-2 sm:p-2.5 flex flex-col gap-1">
      {businesses.map((b) => (
        <div
          key={b.name}
          className="flex items-center gap-3 sm:gap-3.5 rounded-xl px-2.5 sm:px-3 py-3 sm:py-3.5"
          style={
            b.current
              ? { background: "#f1faf4", border: "1.5px solid #169f49" }
              : { border: "1.5px solid transparent" }
          }
        >
          <span
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[15px] sm:text-[16px] font-bold text-white shrink-0"
            style={{ background: b.color }}
          >
            {b.initial}
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span
              className="block text-[14.5px] font-semibold truncate"
              style={{ color: "#0b1210" }}
            >
              {b.name}
            </span>
            <span className="flex items-center gap-1.5 mt-1.5">
              {b.whatsapp && (
                <FaWhatsapp
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: "#25d366" }}
                  aria-hidden
                />
              )}
              {b.instagram && (
                <FaInstagram
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: "#d6249f" }}
                  aria-hidden
                />
              )}
              <span
                className="text-[12px] max-sm:hidden"
                style={{ color: "#667781" }}
              >
                {b.whatsapp && b.instagram ? "WhatsApp, Instagram" : "WhatsApp"}
              </span>
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
              <Check className="w-4 h-4" strokeWidth={3} aria-hidden />
              <span className="max-sm:hidden">Open</span>
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
      <div
        className="flex items-center justify-center gap-2 rounded-xl px-3 py-3 mt-1 text-[13px] font-semibold"
        style={{ border: "1.5px dashed #d5ddd8", color: "#57685f" }}
      >
        <Plus className="w-4 h-4" aria-hidden /> Add a business
      </div>
    </div>
  </div>
);

// An inset panel on the page background, so it reads as its own block rather
// than running into the trust strip above.
const AgenciesSection = () => (
  <section id="agencies" className="py-20 max-sm:py-12">
    <div className="container-wide">
      <div
        className="rounded-[28px] grid lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] gap-10 lg:gap-14 items-center p-5 sm:p-10 lg:p-14"
        style={{
          background: "var(--background-secondary)",
          border: "1px solid var(--border-light)"
        }}
      >
        <div>
          <Eyebrow>For agencies</Eyebrow>
          <h2 className="heading-2 mt-3 mb-4">Are you a marketing agency?</h2>
          <p
            className="body-large max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Manage several client businesses from one login. Each business has
            its own plan, so you can start every client on the one that fits.
          </p>
          <ul className="space-y-3 mt-7 max-w-lg">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-[15px] leading-snug"
                style={{ color: "var(--text-body)" }}
              >
                <Check
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "var(--primary)" }}
                  strokeWidth={2.8}
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
            <Link href={PRODUCT_APP_URL} className="btn-primary">
              Start your free 7-day trial
            </Link>
            <Link
              href="/industries/agencies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "var(--primary-dark)" }}
            >
              How agencies use Whatching <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <BusinessSwitcher />
      </div>
    </div>
  </section>
);

export default AgenciesSection;
