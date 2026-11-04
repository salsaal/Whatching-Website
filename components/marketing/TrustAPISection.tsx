import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Reveal } from "./Primitives";

const credentials = [
  { icon: FaWhatsapp, label: "WhatsApp Business API" },
  { icon: FaInstagram, label: "Instagram Messaging API" },
  { icon: ShieldCheck, label: "Meta policy compliant" }
];

const TrustAPISection = () => (
  <section className="section-padding" style={{ background: "var(--band-dark)" }}>
    <div className="container-wide">
      <Reveal className="grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(255,255,255,0.08)", color: "var(--primary-light)" }}
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Official ecosystem
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
            Built on the official WhatsApp ecosystem.
          </h2>
          <p className="text-[15px] leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Whatching sends and automates messages through the official WhatsApp Business API and
            Instagram Messaging API — not unofficial automation infrastructure. Templates, message
            categories and rate limits follow Meta's published policies, so your account stays
            built on a compliant foundation as you scale.
          </p>
        </div>

        <div className="lg:col-span-2 rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            Built with
          </p>
          <div className="space-y-3">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-sm font-medium text-white">
                  <c.icon className="w-4 h-4" style={{ color: "var(--primary-light)" }} />
                  {c.label}
                </span>
                <CheckCircle2 className="w-4 h-4" style={{ color: "var(--primary-light)" }} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default TrustAPISection;
