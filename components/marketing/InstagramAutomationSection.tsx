import React from "react";
import Link from "next/link";
import { MessageCircleReply, MessageSquareText, Send } from "lucide-react";
import { Reveal } from "./Primitives";
import InstagramPhone from "./InstagramPhone";

// Three things the Instagram automation does, each said once.
const capabilities = [
  {
    icon: MessageSquareText,
    title: "Reply to comments",
    desc: "Answer comments on your posts automatically, in public."
  },
  {
    icon: Send,
    title: "DM people who comment a keyword",
    desc: "Someone comments “PRICE” and gets your price list in their DMs straight away."
  },
  {
    icon: MessageCircleReply,
    title: "Answer DMs and story replies",
    desc: "A chatbot or the AI agent replies, then hands the chat to your team when needed."
  }
];

// Heading, then the visual, then the tiles on phones; heading and tiles on
// the left with the visual on the right from lg up.
const InstagramAutomationSection = () => (
  <section
    id="instagram"
    className="section-padding-large"
    style={{ background: "var(--graphite, #0b1210)" }}
  >
    <div className="container-wide grid lg:grid-cols-2 gap-x-14 gap-y-10 lg:items-center">
      <Reveal className="lg:col-start-1 lg:row-start-1 lg:self-end">
        <div className="max-w-xl">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white"
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
            Reply to comments automatically, send a DM when someone comments a
            keyword, and hand interested customers to your team.
          </p>
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        className="lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full"
      >
        <InstagramPhone />
      </Reveal>

      <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
        <ul
          className="max-w-xl divide-y"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {capabilities.map((c) => (
            <li
              key={c.title}
              className="flex items-start gap-4 py-4 first:pt-0"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(214,36,159,0.16)",
                  color: "#f472c8"
                }}
              >
                <c.icon className="w-4.5 h-4.5" aria-hidden />
              </span>
              <span className="block">
                <span className="block text-[15px] font-semibold text-white">
                  {c.title}
                </span>
                <span
                  className="block text-sm mt-1 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {c.desc}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <Reveal delay={0.15} className="mt-8">
          <Link
            href="/features/instagram-automation"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:opacity-80"
          >
            See Instagram automation <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

export default InstagramAutomationSection;
