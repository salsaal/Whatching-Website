import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Reveal, SectionHeading } from "./Primitives";
import CoverChips from "./CoverChips";
import { DEMO_VIDEO, youtubeEmbedUrl } from "@/lib/data/video";
import posterImage from "../../public/assets/video/demo-poster.jpg";

// The demo video, just below the hero. The box has a fixed 16:9 size (the
// width of the dashboard picture this replaced), so nothing moves when the
// player loads; the YouTube player only loads after a click.
const DemoVideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
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

        <Reveal delay={0.1} className="max-w-5xl mx-auto mt-10">
          <div
            className="relative w-full aspect-video overflow-hidden rounded-2xl"
            style={{
              containerType: "inline-size",
              background: "var(--text-primary)",
              border: "1px solid var(--border-light)",
              boxShadow: "0 30px 70px -30px rgba(10,18,14,0.28)"
            }}
          >
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={youtubeEmbedUrl(DEMO_VIDEO.id, { autoplay: true })}
                title={DEMO_VIDEO.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 block w-full h-full"
                aria-label={`Play the ${DEMO_VIDEO.lengthAdjective} video: ${DEMO_VIDEO.title}`}
              >
                <Image
                  src={posterImage}
                  alt=""
                  fill
                  sizes="(min-width: 1088px) 1024px, 100vw"
                  className="object-cover"
                />
                <CoverChips imageWidth={1920} imageHeight={1080} />
                <span
                  className="absolute flex flex-col items-center"
                  style={{
                    left: "77%",
                    top: "47%",
                    transform: "translate(-50%, -50%)",
                    gap: "1.1cqw"
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105"
                    style={{
                      width: "8cqw",
                      height: "8cqw",
                      minWidth: "52px",
                      minHeight: "52px",
                      background: "var(--primary)",
                      boxShadow:
                        "0 0 0 0.7cqw rgba(255,255,255,0.55), 0 1cqw 2.4cqw rgba(11,18,16,0.35)"
                    }}
                  >
                    <Play
                      className="text-white"
                      style={{ width: "40%", height: "40%", marginLeft: "6%" }}
                      fill="currentColor"
                      aria-hidden
                    />
                  </span>
                  <span
                    className="rounded-full bg-white font-semibold whitespace-nowrap"
                    style={{
                      fontSize: "max(12px, 1.5cqw)",
                      padding: "0.6cqw 1.5cqw",
                      color: "var(--text-primary)",
                      boxShadow: "0 0.5cqw 1.5cqw rgba(11,18,16,0.18)"
                    }}
                  >
                    Watch the {DEMO_VIDEO.lengthAdjective} tour
                  </span>
                </span>
              </button>
            )}
          </div>
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
};

export default DemoVideoSection;
