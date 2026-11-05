import React from "react";
import { CheckCheck, Zap } from "lucide-react";

// The demo thumbnail has two chips that state figures ("92% read rate" and
// "AI replied in 2.8s"). Until a version without them exists, these chips are
// laid over them with plain wording. Positions are pixels of the thumbnail
// itself; sizes are converted to container-query units, so the chips stay
// aligned at any width. The parent needs position: relative and
// container-type: inline-size.

interface Chip {
  label: string;
  icon: typeof CheckCheck;
  iconBg: string;
  iconColor: string;
  left: number;
  top: number;
  minWidth: number;
  height: number;
  rotate: number;
}

// Chip positions in the full 1920×1080 thumbnail.
const chips: Chip[] = [
  {
    label: "Delivered & read",
    icon: CheckCheck,
    iconBg: "#1aa64e",
    iconColor: "#ffffff",
    left: 1068.6,
    top: 251.6,
    minWidth: 283.8,
    height: 97.2,
    rotate: -2.6
  },
  {
    label: "AI agent replied",
    icon: Zap,
    iconBg: "#0f3a2c",
    iconColor: "#3ddc84",
    left: 1534.7,
    top: 611.3,
    minWidth: 309.6,
    height: 96.1,
    rotate: 3.4
  }
];

const CoverChips = ({
  imageWidth,
  imageHeight,
  offsetX = 0
}: {
  imageWidth: number;
  imageHeight: number;
  offsetX?: number;
}) => {
  const q = (px: number) => `${(px / imageWidth) * 100}cqw`;

  return (
    <>
      {chips.map((chip) => (
        <span
          key={chip.label}
          aria-hidden
          className="absolute flex items-center bg-white"
          style={{
            left: `${((chip.left - offsetX) / imageWidth) * 100}%`,
            top: `${(chip.top / imageHeight) * 100}%`,
            minWidth: q(chip.minWidth),
            height: `${(chip.height / imageHeight) * 100}%`,
            gap: q(14.6),
            padding: `0 ${q(21.5)} 0 ${q(13.8)}`,
            borderRadius: q(18),
            boxShadow: `0 ${q(10.75)} ${q(26.7)} rgba(11,18,16,0.12), 0 ${q(1.7)} ${q(4.3)} rgba(11,18,16,0.06)`,
            transform: `rotate(${chip.rotate}deg)`,
            transformOrigin: "left center"
          }}
        >
          <span
            className="flex items-center justify-center rounded-full shrink-0"
            style={{
              width: q(45.2),
              height: q(45.2),
              background: chip.iconBg,
              color: chip.iconColor
            }}
          >
            <chip.icon
              style={{ width: q(23.2), height: q(23.2) }}
              strokeWidth={2.6}
            />
          </span>
          <span
            className="font-bold whitespace-nowrap"
            style={{
              fontSize: q(26.7),
              color: "#0b1210",
              letterSpacing: "-0.01em"
            }}
          >
            {chip.label}
          </span>
        </span>
      ))}
    </>
  );
};

export default CoverChips;
