import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Primitives";
import YouTubeLite from "./YouTubeLite";
import { DEMO_VIDEO, demoVideoThumbnail } from "@/lib/data/video";

const DemoVideoSection = () => (
  <section className="pb-20 max-sm:pb-12" id="demo">
    <div className="container-wide">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Product demo"
          title={`See Whatching in ${DEMO_VIDEO.lengthLabel}.`}
          description="A quick tour of broadcasts, chatbots, the AI agent and the shared team inbox."
        />
      </Reveal>
      <Reveal delay={0.1} className="max-w-4xl mx-auto mt-10">
        <YouTubeLite
          id={DEMO_VIDEO.id}
          title={DEMO_VIDEO.title}
          thumbnail={demoVideoThumbnail}
          label={`Watch the demo · ${DEMO_VIDEO.lengthLabel}`}
        />
      </Reveal>
      <Reveal delay={0.15} className="text-center mt-8">
        <Link
          href="/demo"
          className="inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: "var(--primary-dark)" }}
        >
          Book a free onboarding call <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default DemoVideoSection;
