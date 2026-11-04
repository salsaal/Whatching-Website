import Head from "next/head";
import SiteShell from "@/components/marketing/SiteShell";
import IndustryGrid from "@/components/marketing/IndustryGrid";
import FinalCta from "@/components/marketing/FinalCta";

export default function IndustriesIndex() {
  return (
    <>
      <Head>
        <title>Industries | Whatching</title>
        <meta
          name="description"
          content="See how e-commerce, education, real estate, healthcare, travel and agency businesses use Whatching to automate WhatsApp and Instagram conversations."
        />
      </Head>
      <SiteShell>
        <div className="pt-16" />
        <IndustryGrid />
        <FinalCta />
      </SiteShell>
    </>
  );
}
