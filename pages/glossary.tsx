import Link from "next/link";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import FinalCta from "@/components/marketing/FinalCta";
import { Inline } from "@/components/marketing/Inline";
import { glossary } from "@/lib/data/glossary";
import { breadcrumbSchema } from "@/lib/seo";

const anchor = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
const letters = Array.from(new Set(sorted.map((t) => t.term[0].toUpperCase())));

export default function GlossaryPage() {
  const path = "/glossary";
  return (
    <>
      <Seo
        title="WhatsApp Business Glossary: Terms Explained | Whatching"
        description="Plain-language definitions of WhatsApp Business terms: templates, the 24-hour window, service messages, messaging limits, the green tick, coexistence and more."
        path={path}
        jsonLd={[
          {
            "@type": "DefinedTermSet",
            "@id": `https://www.whatching.com${path}#terms`,
            name: "WhatsApp Business glossary",
            url: `https://www.whatching.com${path}`,
            hasDefinedTerm: sorted.map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              ...(t.aka ? { alternateName: t.aka } : {}),
              description: t.definition,
              url: `https://www.whatching.com${path}#${anchor(t.term)}`,
              inDefinedTermSet: `https://www.whatching.com${path}#terms`
            }))
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-8 max-sm:pt-28">
          <div className="container-wide max-w-3xl">
            <h1 className="heading-2 mb-4">WhatsApp Business glossary</h1>
            <p
              className="body-large"
              style={{ color: "var(--text-secondary)" }}
            >
              The words you&apos;ll meet when you use WhatsApp for business,
              explained in a sentence or two. Rates and rules are Meta&apos;s,
              as of 19 November 2026.
            </p>
            <nav aria-label="Jump to a letter" className="mt-6">
              <ul className="flex flex-wrap gap-1.5">
                {letters.map((l) => (
                  <li key={l}>
                    <a
                      href={`#letter-${l}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold"
                      style={{
                        border: "1px solid var(--border-medium)",
                        color: "var(--text-primary)",
                        background: "var(--surface)"
                      }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-wide max-w-3xl">
            {letters.map((l) => (
              <div key={l} id={`letter-${l}`} className="scroll-mt-28 pt-6">
                <h2
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--primary-dark)" }}
                >
                  {l}
                </h2>
                <dl
                  className="divide-y"
                  style={{ borderColor: "var(--border-light)" }}
                >
                  {sorted
                    .filter((t) => t.term[0].toUpperCase() === l)
                    .map((t) => (
                      <div
                        key={t.term}
                        id={anchor(t.term)}
                        className="py-5 scroll-mt-28"
                        style={{ borderColor: "var(--border-light)" }}
                      >
                        <dt
                          className="text-[19px] font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {t.term}
                        </dt>
                        {t.aka && (
                          <dd
                            className="text-sm mt-0.5"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            Also called: {t.aka.join(", ")}
                          </dd>
                        )}
                        <dd
                          className="text-[16px] leading-relaxed mt-2"
                          style={{ color: "var(--text-body)" }}
                        >
                          <Inline text={t.definition} />
                        </dd>
                        {t.more && (
                          <dd className="mt-2">
                            <Link
                              href={t.more.href}
                              className="article-link text-[15px]"
                            >
                              {t.more.label}
                            </Link>
                          </dd>
                        )}
                      </div>
                    ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
        <FinalCta />
      </SiteShell>
    </>
  );
}
