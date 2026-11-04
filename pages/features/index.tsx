import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import { Reveal, SectionHeading, Eyebrow } from "@/components/marketing/Primitives";
import FinalCta from "@/components/marketing/FinalCta";
import { features, FeatureCategory } from "@/lib/data/features";

const categories: FeatureCategory[] = ["WhatsApp", "Instagram", "Platform"];

export default function FeaturesIndex() {
  return (
    <>
      <Head>
        <title>Features | Whatching — WhatsApp &amp; Instagram Automation</title>
        <meta
          name="description"
          content="Explore Whatching's full feature set — WhatsApp broadcasts, AI chatbots, no-code flows, a shared inbox, analytics and Instagram automation."
        />
      </Head>
      <SiteShell>
        <section className="hero-section !pb-16">
          <div className="container-wide relative">
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="Features"
                title="Everything you need to convert conversations into revenue."
                description="One platform for WhatsApp marketing, AI automation and Instagram engagement — explore each capability below."
              />
            </Reveal>
          </div>
        </section>

        {categories.map((cat) => (
          <section key={cat} className="pb-16">
            <div className="container-wide">
              <Reveal>
                <Eyebrow tone={cat === "Instagram" ? "instagram" : "primary"}>{cat}</Eyebrow>
              </Reveal>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {features
                  .filter((f) => f.category === cat)
                  .map((f, i) => (
                    <Reveal key={f.slug} delay={i * 0.06}>
                      <Link href={`/features/${f.slug}`} className="product-card block h-full">
                        <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                          {f.name}
                        </h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                          {f.subheadline}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--primary-dark)" }}>
                          Learn more <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </div>
          </section>
        ))}

        <FinalCta />
      </SiteShell>
    </>
  );
}
