import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Bot, MessageCircle, Sparkles, Target } from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import FinalCta from "@/components/marketing/FinalCta";

const pillars = [
  { icon: MessageCircle, title: "Conversations", desc: "We believe the conversation is the interface — not a form, not a ticket, not a funnel." },
  { icon: Bot, title: "Automation", desc: "The repetitive 80% of customer conversation should run itself, so people can focus on the 20% that needs them." },
  { icon: Sparkles, title: "AI", desc: "AI should make conversations feel more human, not less — understanding intent instead of matching keywords." },
  { icon: Target, title: "Growth", desc: "Every feature we build is judged by one question: does this turn a conversation into revenue?" }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Whatching</title>
        <meta
          name="description"
          content="Whatching builds WhatsApp and Instagram automation software so businesses can turn every customer conversation into revenue."
        />
      </Head>
      <SiteShell>
        <section className="hero-section !pb-14">
          <div className="container-wide relative max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="About Whatching"
                title="Businesses don't lose customers because they don't care. They lose them because no one replied in time."
                description="Whatching exists to close that gap — turning WhatsApp and Instagram into a real customer engagement channel, not just a place messages pile up."
              />
            </Reveal>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-wide max-w-3xl">
            <Reveal className="surface-card p-8">
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--primary-dark)" }}>
                Our mission
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
                Make business communication more intelligent, accessible and scalable — so a team
                of two can respond like a team of twenty, and a team of twenty never drops a
                conversation.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-padding-large" style={{ background: "var(--background-secondary)" }}>
          <div className="container-wide">
            <Reveal>
              <SectionHeading align="center" title="What we build around" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} className="product-card !cursor-default flex gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--accent-wash)", color: "var(--primary)" }}
                  >
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding-large">
          <div className="container-wide max-w-2xl text-center">
            <Reveal>
              <h2 className="heading-2 mb-4">Where we're headed</h2>
              <p className="body-large mb-8" style={{ color: "var(--text-secondary)" }}>
                We started with WhatsApp marketing and automation. We're building Whatching into
                the full customer engagement layer for WhatsApp and Instagram — one workspace for
                every conversation that touches revenue.
              </p>
              <Link href="/contact" className="btn-secondary">
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        <FinalCta />
      </SiteShell>
    </>
  );
}
