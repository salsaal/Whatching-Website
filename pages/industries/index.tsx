import Link from "next/link";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import IndustryGrid from "@/components/marketing/IndustryGrid";
import FinalCta from "@/components/marketing/FinalCta";
import { breadcrumbSchema } from "@/lib/seo";

export default function IndustriesIndex() {
  return (
    <>
      <Seo
        title="WhatsApp Marketing by Industry | Whatching"
        description="How online stores, coaching institutes, real estate, clinics, travel and marketing agencies use Whatching to sell and support customers on WhatsApp and Instagram."
        path="/industries"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-4 max-sm:pt-28">
          <div className="container-wide max-w-3xl text-center">
            <h1 className="heading-2 mb-4">
              WhatsApp and Instagram for your kind of business
            </h1>
            <p
              className="body-large"
              style={{ color: "var(--text-secondary)" }}
            >
              Each page shows how a business like yours answers enquiries,
              follows up and keeps customers coming back, with the features they
              use most.
            </p>
          </div>
        </section>
        <IndustryGrid plain />
        <section className="pb-20 -mt-6">
          <p
            className="container-wide text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            Don&apos;t see your industry?{" "}
            <Link href="/contact" className="article-link">
              Tell us what you do
            </Link>{" "}
            and we&apos;ll show you how others set it up.
          </p>
        </section>
        <FinalCta />
      </SiteShell>
    </>
  );
}
