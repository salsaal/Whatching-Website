import React from "react";
import Image from "next/image";
import CoverChips from "./CoverChips";
import heroThumbnail from "../../public/assets/video/demo-hero.jpg";

// The phone and floating chips from the demo thumbnail, as a plain image.
// (The video itself plays further down the page.)
const HeroPhone = () => (
  <div
    className="relative w-full aspect-[860/1080]"
    style={{ containerType: "inline-size" }}
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
    <CoverChips imageWidth={860} imageHeight={1080} offsetX={1060} />
  </div>
);

export default HeroPhone;
