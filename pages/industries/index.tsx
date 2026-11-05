import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import IndustryGrid from "@/components/marketing/IndustryGrid";
import FinalCta from "@/components/marketing/FinalCta";

export default function IndustriesIndex() {
  return (
    <>
      <Seo
        title="WhatsApp Marketing by Industry | Whatching"
        description="How online stores, coaching institutes, real estate, clinics, travel and marketing agencies use Whatching to sell and support customers on WhatsApp and Instagram."
        path="/industries"
      />
      <SiteShell>
        <div className="pt-16" />
        <IndustryGrid headingAs="h1" />
        <FinalCta />
      </SiteShell>
    </>
  );
}
