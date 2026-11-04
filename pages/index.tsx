import Head from "next/head";
import SiteShell from "@/components/marketing/SiteShell";
import Hero from "@/components/marketing/Hero";
import TrustBar from "@/components/marketing/TrustBar";
import EcosystemDiagram from "@/components/marketing/EcosystemDiagram";
import PlatformOverview from "@/components/marketing/PlatformOverview";
import MarqueeBand from "@/components/marketing/MarqueeBand";
import BroadcastSection from "@/components/marketing/BroadcastSection";
import AIChatbotSection from "@/components/marketing/AIChatbotSection";
import FlowsSection from "@/components/marketing/FlowsSection";
import InstagramAutomationSection from "@/components/marketing/InstagramAutomationSection";
import SharedInboxSection from "@/components/marketing/SharedInboxSection";
import AnalyticsSection from "@/components/marketing/AnalyticsSection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import IndustryGrid from "@/components/marketing/IndustryGrid";
import WhyWhatching from "@/components/marketing/WhyWhatching";
import TrustAPISection from "@/components/marketing/TrustAPISection";
import PricingPreview from "@/components/marketing/PricingPreview";
import FaqSection from "@/components/marketing/FaqSection";
import FinalCta from "@/components/marketing/FinalCta";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatching — WhatsApp &amp; Instagram Marketing Automation Platform</title>
        <meta
          name="description"
          content="Whatching helps businesses turn WhatsApp and Instagram conversations into revenue — campaigns, AI chatbots, no-code flows, a shared inbox and analytics, built on official messaging APIs."
        />
        <meta property="og:title" content="Whatching — WhatsApp & Instagram Marketing Automation Platform" />
        <meta
          property="og:description"
          content="Run campaigns, automate conversations, capture leads and convert customers across WhatsApp and Instagram — from one platform."
        />
        <meta property="og:type" content="website" />
      </Head>
      <SiteShell>
        <Hero />
        <TrustBar />
        <EcosystemDiagram />
        <PlatformOverview />
        <MarqueeBand />
        <BroadcastSection />
        <AIChatbotSection />
        <FlowsSection />
        <InstagramAutomationSection />
        <SharedInboxSection />
        <AnalyticsSection />
        <FeatureGrid />
        <IndustryGrid />
        <WhyWhatching />
        <TrustAPISection />
        <PricingPreview />
        <FaqSection />
        <FinalCta />
      </SiteShell>
    </>
  );
}
