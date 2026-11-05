import React, { useState } from "react";
import Image from "next/image";
import { CheckCheck, Play, Zap } from "lucide-react";
import VideoDialog from "./VideoDialog";
import { DEMO_VIDEO } from "@/lib/data/video";
import heroThumbnail from "../../public/assets/video/demo-hero.jpg";

// The thumbnail's own "92% read rate" and "AI replied in 2.8s" chips are
// covered with these, so the site shows no performance figures. Positions
// are percentages of the 860×1080 crop, so they stay aligned at any width.
const coverChips = [
  {
    label: "Delivered & read",
    icon: CheckCheck,
    iconBg: "#1aa64e",
    iconColor: "#ffffff",
    style: {
      left: "1%",
      top: "23.3%",
      minWidth: "33%",
      height: "9%",
      transform: "rotate(-2.6deg)"
    }
  },
  {
    label: "AI agent replied",
    icon: Zap,
    iconBg: "#0f3a2c",
    iconColor: "#3ddc84",
    style: {
      left: "55.2%",
      top: "56.6%",
      minWidth: "36%",
      height: "8.9%",
      transform: "rotate(3.4deg)"
    }
  }
];

const HeroVideo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full aspect-[860/1080] text-left"
        style={{ containerType: "inline-size" }}
        aria-label={`Watch the ${DEMO_VIDEO.lengthAdjective} tour: ${DEMO_VIDEO.title}`}
      >
        <Image
          src={heroThumbnail}
          alt="Whatching on a phone: a Wanderly Travels offer on WhatsApp with Plan my trip and View packages buttons, and the AI agent replying"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, #000 3%, #000 92%, transparent 100%), linear-gradient(to top, transparent 0, #000 10%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, #000 3%, #000 92%, transparent 100%), linear-gradient(to top, transparent 0, #000 10%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in"
          }}
        />

        {coverChips.map((chip) => (
          <span
            key={chip.label}
            aria-hidden
            className="absolute flex items-center bg-white"
            style={{
              ...chip.style,
              gap: "1.7cqw",
              padding: "0 2.5cqw 0 1.6cqw",
              borderRadius: "2.1cqw",
              boxShadow:
                "0 1.25cqw 3.1cqw rgba(11,18,16,0.12), 0 0.2cqw 0.5cqw rgba(11,18,16,0.06)",
              transformOrigin: "left center"
            }}
          >
            <span
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: "5.25cqw",
                height: "5.25cqw",
                background: chip.iconBg,
                color: chip.iconColor
              }}
            >
              <chip.icon
                style={{ width: "2.7cqw", height: "2.7cqw" }}
                strokeWidth={2.6}
              />
            </span>
            <span
              className="font-bold whitespace-nowrap"
              style={{
                fontSize: "3.1cqw",
                color: "#0b1210",
                letterSpacing: "-0.01em"
              }}
            >
              {chip.label}
            </span>
          </span>
        ))}

        <span
          className="absolute flex flex-col items-center"
          style={{
            left: "48.7%",
            top: "47%",
            transform: "translate(-50%, -50%)",
            gap: "2.3cqw"
          }}
        >
          <span
            className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105"
            style={{
              width: "17.8cqw",
              height: "17.8cqw",
              minWidth: "64px",
              minHeight: "64px",
              background: "var(--primary)",
              boxShadow:
                "0 0 0 1.6cqw rgba(255,255,255,0.55), 0 2cqw 5cqw rgba(11,18,16,0.35)"
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
              fontSize: "max(14px, 3cqw)",
              padding: "1.3cqw 3cqw",
              color: "var(--text-primary)",
              boxShadow: "0 1cqw 3cqw rgba(11,18,16,0.18)"
            }}
          >
            Watch the {DEMO_VIDEO.lengthAdjective} tour
          </span>
        </span>
      </button>

      <VideoDialog
        open={open}
        onOpenChange={setOpen}
        videoId={DEMO_VIDEO.id}
        title={DEMO_VIDEO.title}
      />
    </>
  );
};

export default HeroVideo;
