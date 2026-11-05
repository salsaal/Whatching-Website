import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HeroPhone from "./HeroPhone";
import VideoDialog from "./VideoDialog";
import { PRODUCT_APP_URL } from "@/lib/data/nav";
import { DEMO_VIDEO } from "@/lib/data/video";

// Text first on phones, the phone right below; side by side from lg up.
const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="hero-section !pb-12">
      <div className="container relative grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 lg:gap-14 items-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="pill mb-7">
            <FaWhatsapp
              className="w-3.5 h-3.5"
              style={{ color: "var(--primary)" }}
            />
            Built on Meta&apos;s official WhatsApp Business Platform
          </span>

          <h1 className="heading-1 lg:!text-[clamp(2.75rem,4.4vw,3.9rem)]">
            Turn conversations into{" "}
            <span style={{ color: "var(--primary)" }}>
              customers on WhatsApp &amp; Instagram.
            </span>
          </h1>

          <p className="body-large mt-6 max-w-xl">
            Send broadcasts, build chatbots, let an AI agent answer questions,
            and reply as a team from one inbox.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
            <Link href={PRODUCT_APP_URL} className="btn-primary">
              Start your free 7-day trial <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="btn-secondary"
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "var(--primary)" }}
              >
                <Play
                  className="w-2.5 h-2.5 text-white"
                  fill="currentColor"
                  aria-hidden
                />
              </span>
              Watch the {DEMO_VIDEO.lengthAdjective} tour
            </button>
          </div>

          <p
            className="mt-6 text-sm flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1"
            style={{ color: "var(--text-muted)" }}
          >
            <span>7-day trial of Pro. No card needed.</span>
            <Link href="/demo" className="underline underline-offset-2">
              Book a free onboarding call
            </Link>
          </p>
        </div>

        <div className="w-full max-w-[560px] mx-auto">
          <HeroPhone />
        </div>
      </div>

      <VideoDialog
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoId={DEMO_VIDEO.id}
        title={DEMO_VIDEO.title}
      />
    </section>
  );
};

export default Hero;
