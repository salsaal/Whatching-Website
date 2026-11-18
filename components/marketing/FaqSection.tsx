import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import FaqAccordion from "./FaqAccordion";
import { faqCategories } from "@/lib/data/faq";
import { WHATSAPP_URL } from "@/lib/constants";

// The six questions people ask first; the rest live on /faq. The FAQPage
// markup on the home page uses this same list, so it matches what's shown.
const HOME_QUESTIONS = [
  "What is Whatching?",
  "Is Whatching an official WhatsApp solution?",
  "How much does Meta charge per message?",
  "Can I keep using the WhatsApp Business app?",
  "Can Whatching automate Instagram DMs?",
  "Is there a free trial?"
];

const allFaqs = faqCategories.flatMap((c) => c.items);
export const homepageFaqs = HOME_QUESTIONS.map(
  (q) => allFaqs.find((item) => item.question === q)!
).filter(Boolean);

const FaqSection = () => (
  <section className="section-padding-large" id="faq">
    <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div className="lg:col-span-4 lg:sticky lg:top-28">
        <h2 className="heading-2 mb-4">Questions people ask first</h2>
        <p className="body-large" style={{ color: "var(--text-secondary)" }}>
          Can&apos;t find your answer? Message us on WhatsApp and a person will
          reply.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FaWhatsapp className="w-4 h-4" style={{ color: "#25d366" }} />
            Chat on WhatsApp
          </a>
          <Link
            href="/faq"
            className="text-sm font-semibold"
            style={{ color: "var(--primary-dark)" }}
          >
            All questions <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="lg:col-span-8">
        <FaqAccordion items={homepageFaqs} />
      </div>
    </div>
  </section>
);

export default FaqSection;
