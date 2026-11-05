import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import Hero from "@/components/marketing/Hero";
import DemoVideoSection from "@/components/marketing/DemoVideoSection";
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
import FaqSection, { homepageFaqs } from "@/components/marketing/FaqSection";
import { faqSchema } from "@/lib/seo";
import { demoVideoSchema } from "@/lib/data/video";
import FinalCta from "@/components/marketing/FinalCta";

export default function Home() {
  return (
    <>
      <Seo
        title="WhatsApp Business API & Marketing Software | Whatching"
        description="Sell and support customers on WhatsApp and Instagram from one place. Official WhatsApp Business API, broadcasts, chatbots and a team inbox. Free 7-day trial."
        path="/"
        jsonLd={[faqSchema(homepageFaqs), demoVideoSchema("/")]}
      />
      <SiteShell>
        <Hero />
        <DemoVideoSection />
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
