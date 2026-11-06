import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Primitives";
import InstagramVisual from "./product/InstagramVisual";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

// What Instagram automation does, from the Pro plan.
const points = [
  "Auto-reply to comments on your posts and reels",
  "Send a DM when someone comments a keyword",
  "Automate DMs and story replies with a no-code flow",
  "Run the AI agent on Instagram",
  "Hand qualified chats to your team"
];

// Heading and points on the left, the visual on the right. On phones the
// visual comes right after the heading. Brand graphite background, with the
// Instagram colours kept to small accents.
const InstagramAutomationSection = () => (
  <section
    id="instagram"
    className="section-padding-large relative overflow-hidden"
    style={{
      background:
        "radial-gradient(55% 60% at 100% 0%, rgba(214,36,159,0.16), rgba(214,36,159,0) 65%), radial-gradient(50% 55% at 0% 100%, rgba(22,159,73,0.2), rgba(22,159,73,0) 65%), #0b1210"
    }}
  >
    <div className="container-wide grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-x-16 gap-y-10 items-center">
      <Reveal className="lg:col-start-1 lg:row-start-1">
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full text-white"
          style={{
            background:
              "linear-gradient(135deg,#4f5bd5,#962fbf,#d6249f,#f77737)"
          }}
        >
          Instagram
        </span>
        <h2 className="heading-2 mt-5 mb-4 !text-white max-w-lg">
          Turn Instagram comments into conversations.
        </h2>
        <p
          className="body-large max-w-lg"
          style={{ color: "rgba(255,255,255,0.68)" }}
        >
          Reply to every comment, send a DM when someone asks for the price, and
          hand qualified chats to your team.
        </p>
      </Reveal>

      <Reveal
        delay={0.1}
        className="lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full"
      >
        <div
          className="rounded-[20px]"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.1), 0 50px 120px -40px rgba(214,36,159,0.4), 0 30px 70px -30px rgba(0,0,0,0.6)"
          }}
        >
          <InstagramVisual />
        </div>
      </Reveal>

      <Reveal delay={0.05} className="lg:col-start-1 lg:row-start-2">
        <ul className="space-y-3.5 max-w-lg">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-[15px] leading-snug text-white"
            >
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(61,220,124,0.16)",
                  color: "#3ddc7c"
                }}
              >
                <Check className="w-3 h-3" strokeWidth={3.2} aria-hidden />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-9">
          <Link href={PRODUCT_APP_URL} className="btn-primary">
            Automate Instagram <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Included in the Pro plan
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);

export default InstagramAutomationSection;
