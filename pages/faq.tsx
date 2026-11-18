import Link from "next/link";
import Seo from "@/components/Seo/Seo";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import SiteShell from "@/components/marketing/SiteShell";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import FinalCta from "@/components/marketing/FinalCta";
import { faqCategories } from "@/lib/data/faq";
import { WHATSAPP_URL } from "@/lib/constants";

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <Seo
        title="WhatsApp Business API FAQ | Whatching"
        description="Answers about getting started, WhatsApp Business API pricing, message templates, Instagram automation, the AI agent, teams and billing on Whatching."
        path="/faq"
        jsonLd={[
          faqSchema(faqCategories.flatMap((c) => c.items)),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-8 max-sm:pt-28">
          <div className="container-wide max-w-3xl text-center">
            <h1 className="heading-2 mb-4">Frequently asked questions</h1>
            <p
              className="body-large"
              style={{ color: "var(--text-secondary)" }}
            >
              About getting started, Meta&apos;s message charges, Instagram, the
              AI agent, teams and billing. Can&apos;t find yours?{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="article-link"
              >
                Ask us on WhatsApp
              </a>
              .
            </p>
          </div>
        </section>

        <nav aria-label="Topics" className="pb-10">
          <ul className="container-wide flex flex-wrap justify-center gap-2">
            {faqCategories.map((cat) => (
              <li key={cat.category}>
                <Link
                  href={`#${anchor(cat.category)}`}
                  className="inline-flex items-center min-h-[40px] px-4 rounded-full text-sm font-medium"
                  style={{
                    border: "1px solid var(--border-medium)",
                    color: "var(--text-secondary)",
                    background: "var(--surface)"
                  }}
                >
                  {cat.category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="pb-20">
          <div className="container-wide max-w-3xl space-y-12">
            {faqCategories.map((cat) => (
              <div
                key={cat.category}
                id={anchor(cat.category)}
                className="scroll-mt-28"
              >
                <h2
                  className="text-[22px] font-bold tracking-tight mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cat.category}
                </h2>
                <FaqAccordion items={cat.items} firstOpen={false} />
              </div>
            ))}
          </div>
        </section>

        <FinalCta />
      </SiteShell>
    </>
  );
}
