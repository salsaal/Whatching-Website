import React from "react";
import { Play } from "lucide-react";
import { HeroPhoneDevice } from "./HeroPhone";
import styles from "./product/product.module.css";

// The still picture shown before the demo video plays. Drawn in code from the
// hero phone so it carries no figures and matches the rest of the site; it
// replaces YouTube's own thumbnail on our pages. Text sizes follow the
// poster's width (cqw), so it reads the same on a phone and a laptop.
const DemoPoster = ({ lengthLabel }: { lengthLabel: string }) => (
  <span
    className={`${styles.posterStage} absolute inset-0 block overflow-hidden text-left`}
    style={{
      background:
        "radial-gradient(70% 70% at 82% 100%, rgba(34,197,94,0.30), rgba(34,197,94,0) 70%), linear-gradient(145deg, #f5faf6 0%, #e6f4ec 55%, #d3ecdd 100%)"
    }}
  >
    <span
      aria-hidden
      className="absolute inset-0 block"
      style={{
        backgroundImage:
          "radial-gradient(rgba(10,18,14,0.14) 1px, transparent 1.2px)",
        backgroundSize: "22px 22px",
        WebkitMaskImage: "linear-gradient(to right, #000, transparent 50%)",
        maskImage: "linear-gradient(to right, #000, transparent 50%)"
      }}
    />

    <span className="absolute left-[7%] top-1/2 -translate-y-1/2 w-[50%] flex flex-col items-start gap-[2.4cqw]">
      <span
        className="block font-semibold"
        style={{ color: "var(--primary-dark)", fontSize: "max(11px, 1.9cqw)" }}
      >
        {lengthLabel} product tour
      </span>
      <span
        className="block font-extrabold"
        style={{
          color: "#0b1210",
          fontSize: "max(17px, 4.6cqw)",
          lineHeight: 1.04,
          letterSpacing: "-0.035em"
        }}
      >
        Broadcasts, chatbots and the AI agent, start to finish.
      </span>
      <span
        className="inline-flex items-center rounded-full font-semibold text-white transition-transform group-hover:scale-105"
        style={{
          background: "var(--primary)",
          boxShadow: "0 10px 30px rgba(8,64,36,0.28)",
          fontSize: "max(12px, 1.8cqw)",
          gap: "max(6px, 1cqw)",
          padding:
            "max(6px, 1cqw) max(14px, 2.2cqw) max(6px, 1cqw) max(6px, 1cqw)"
        }}
      >
        <span
          className="rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.2)",
            width: "max(24px, 3.6cqw)",
            height: "max(24px, 3.6cqw)"
          }}
        >
          <Play
            className="translate-x-px"
            style={{ width: "45%", height: "45%" }}
            fill="currentColor"
            aria-hidden
          />
        </span>
        Play the tour
      </span>
    </span>

    <span
      aria-hidden
      className={`${styles.posterZoom} absolute right-[8%] top-[8%] block`}
      style={{ width: 300, height: 610 }}
    >
      <HeroPhoneDevice />
    </span>
  </span>
);

export default DemoPoster;
