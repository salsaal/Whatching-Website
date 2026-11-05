import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Instagram, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HeroVideo from "./HeroVideo";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const channels = [
  { icon: FaWhatsapp, label: "WhatsApp" },
  { icon: Instagram, label: "Instagram" },
  { icon: Bot, label: "AI Agents" },
  { icon: Zap, label: "Automation" }
];

// Text first on phones, video right below; side by side from lg up.
const Hero = () => (
  <section className="hero-section !pb-12">
    <div className="container-wide relative grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 lg:gap-14 items-center">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7">
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

        <h1 className="heading-1 lg:!text-[clamp(2.75rem,4.4vw,3.9rem)]">
          Turn conversations into{" "}
          <span style={{ color: "var(--primary)" }}>
            customers on WhatsApp &amp; Instagram.
          </span>
        </h1>

        <p className="body-large mt-6 max-w-2xl">
          Run campaigns, automate conversations, capture leads, manage your team
          inbox, and convert customers across WhatsApp and Instagram — from one
          powerful platform.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-8">
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

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
          <Link href={PRODUCT_APP_URL} className="btn-primary">
            Start your free 7-day trial <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/demo" className="btn-secondary">
            Book a Demo
          </Link>
        </div>

        <div
          className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-6 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <span>7-day trial of Pro. No card needed.</span>
          <span>Setup in minutes</span>
        </div>
      </div>

      <div className="w-full max-w-[560px] mx-auto">
        <HeroVideo />
      </div>
    </div>
  </section>
);

export default Hero;
