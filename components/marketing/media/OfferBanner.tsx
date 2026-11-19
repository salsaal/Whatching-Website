import React, { useId } from "react";

// The image in Wanderly Travels' offer message: a designed sale banner, the
// way real travel businesses send them, drawn as a flat retro travel poster
// (sunset, sea, an island with palms, bold type). An honest graphic rather
// than a fake blurred "photo".
const OfferBanner = ({
  className,
  fill = false
}: {
  className?: string;
  /** Crop to fill the box (for thumbnails and fixed-ratio slots). */
  fill?: boolean;
}) => {
  const id = useId().replace(/:/g, "");
  const g = (n: string) => `${id}-${n}`;
  return (
    <svg
      viewBox="0 0 480 250"
      className={className}
      preserveAspectRatio={fill ? "xMidYMid slice" : undefined}
      role="img"
      aria-label="Summer Escape banner: Thailand and Bali, 25% off"
    >
      <defs>
        <linearGradient id={g("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffcf8a" />
          <stop offset="0.55" stopColor="#ff9a62" />
          <stop offset="1" stopColor="#f2685a" />
        </linearGradient>
        <linearGradient id={g("sea")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1f8f9a" />
          <stop offset="1" stopColor="#0d5d6c" />
        </linearGradient>
        <clipPath id={g("sun")}>
          <circle cx="330" cy="128" r="64" />
        </clipPath>
      </defs>
      <rect width="480" height="250" fill={`url(#${g("sky")})`} />
      {/* striped sun */}
      <circle cx="330" cy="128" r="64" fill="#fff1c9" />
      <g clipPath={`url(#${g("sun")})`} fill="#ffb15e">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x="260"
            y={140 + i * 12}
            width="140"
            height={4 + i * 1.6}
          />
        ))}
      </g>
      {/* far hills */}
      <path
        d="M0 168 Q60 140 120 160 T240 156 T360 160 T480 150 V250 H0Z"
        fill="#c4566a"
        opacity="0.55"
      />
      {/* sea */}
      <rect y="172" width="480" height="78" fill={`url(#${g("sea")})`} />
      <g stroke="#7fd1d3" strokeWidth="2.2" strokeLinecap="round" opacity="0.7">
        <path d="M30 192h40M110 204h56M220 190h34M300 212h60M392 196h44M60 226h48M180 232h40" />
      </g>
      {/* island with palms */}
      <path d="M318 176 Q360 158 412 176 Z" fill="#f4d29a" />
      <g fill="none" stroke="#173b2f" strokeWidth="4" strokeLinecap="round">
        <path d="M368 172 Q364 140 352 116" />
        <path d="M384 174 Q390 150 402 132" />
      </g>
      <g fill="#173b2f">
        <path d="M352 116 q-22 -6 -34 6 q18 -4 34 -2z" />
        <path d="M352 116 q-6 -20 -24 -24 q12 12 20 26z" />
        <path d="M352 116 q14 -16 32 -12 q-18 4 -30 14z" />
        <path d="M352 116 q20 -2 28 12 q-14 -8 -28 -10z" />
        <path d="M402 132 q-18 -10 -32 -2 q16 0 30 4z" />
        <path d="M402 132 q2 -20 20 -24 q-12 10 -18 26z" />
        <path d="M402 132 q20 -2 26 12 q-12 -8 -26 -10z" />
      </g>
      {/* type */}
      <g fontFamily="'Geist', -apple-system, 'Segoe UI', sans-serif">
        <text
          x="26"
          y="58"
          fill="#3a1d2a"
          fontSize="15"
          fontWeight="600"
          letterSpacing="3"
        >
          WANDERLY TRAVELS
        </text>
        <text
          x="24"
          y="106"
          fill="#fff"
          fontSize="46"
          fontWeight="800"
          letterSpacing="-1.5"
        >
          Summer
        </text>
        <text
          x="24"
          y="150"
          fill="#fff"
          fontSize="46"
          fontWeight="800"
          letterSpacing="-1.5"
        >
          Escape
        </text>
        <g transform="translate(26 166)">
          <rect width="146" height="28" rx="14" fill="#3a1d2a" />
          <text
            x="73"
            y="19"
            fill="#ffd9a0"
            fontSize="13"
            fontWeight="700"
            textAnchor="middle"
          >
            25% OFF · Thailand
          </text>
        </g>
      </g>
    </svg>
  );
};

export default OfferBanner;
