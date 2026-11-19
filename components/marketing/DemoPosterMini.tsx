import React from "react";
import { Play } from "lucide-react";
import { HeroPhoneDevice } from "./HeroPhone";

// A small video thumbnail for menus and cards: the hero phone on the green
// stage with a play button. Drawn in code like the full demo poster.
const DemoPosterMini = () => (
  <span
    aria-hidden
    className="relative block w-full overflow-hidden rounded-xl"
    style={{
      aspectRatio: "16 / 9",
      background:
        "radial-gradient(70% 70% at 82% 100%, rgba(34,197,94,0.30), rgba(34,197,94,0) 70%), linear-gradient(145deg, #f5faf6 0%, #e6f4ec 55%, #d3ecdd 100%)",
      border: "1px solid rgba(22,159,73,0.14)"
    }}
  >
    <span
      className="absolute left-1/2 top-[14%] block"
      style={{
        width: 300,
        height: 610,
        zoom: 0.36,
        transform: "translateX(-50%)"
      }}
    >
      <HeroPhoneDevice />
    </span>
    <span
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
      style={{
        background: "var(--button-primary, #12843d)",
        boxShadow: "0 8px 22px rgba(8,64,36,0.35)"
      }}
    >
      <Play className="w-4 h-4 translate-x-px text-white" fill="currentColor" />
    </span>
  </span>
);

export default DemoPosterMini;
