import Head from "next/head";
import SiteShell from "@/components/marketing/SiteShell";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import FinalCta from "@/components/marketing/FinalCta";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import { faqCategories } from "@/lib/data/faq";

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>FAQ | Whatching</title>
        <meta
          name="description"
          content="Answers on getting started, WhatsApp and Instagram automation, AI, teams and billing on the Whatching platform."
        />
      </Head>
      <SiteShell>
        <section className="hero-section !pb-14">
          <div className="container-wide relative">
            <Reveal>
              <SectionHeading align="center" eyebrow="FAQ" title="Frequently asked questions" description="Everything you need to know about the product and billing." />
            </Reveal>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-wide max-w-3xl space-y-14">
            {faqCategories.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 0.05}>
                <h2 className="text-lg font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
                  {cat.category}
                </h2>
                <FaqAccordion items={cat.items} />
              </Reveal>
            ))}
          </div>
        </section>

        <FinalCta />
      </SiteShell>
    </>
  );
}
