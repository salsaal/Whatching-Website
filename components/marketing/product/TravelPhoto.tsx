import React, { useId } from "react";

// Header image of the "summer_escape" template: a softly blurred golden-hour
// beach with limestone islands, drawn in code (gradients and blur, no photo)
// so it stays sharp and light. Distant shapes are blurred a little, the palm
// leaves in the corners a lot, to give it a photographic depth of field.
const TravelPhoto = ({ className }: { className?: string }) => {
  const id = useId().replace(/:/g, "");
  const u = (name: string) => `${id}-${name}`;
  const ref = (name: string) => `url(#${u(name)})`;

  return (
    <svg
      viewBox="0 0 240 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Beach with limestone islands at golden hour"
    >
      <defs>
        <linearGradient id={u("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5aa6dc" />
          <stop offset="0.42" stopColor="#9fd0ec" />
          <stop offset="0.7" stopColor="#f4e2c6" />
          <stop offset="1" stopColor="#f9d6a4" />
        </linearGradient>
        <radialGradient id={u("sun")} cx="0.72" cy="0.56" r="0.55">
          <stop offset="0" stopColor="#fffbea" stopOpacity="1" />
          <stop offset="0.2" stopColor="#ffe9b3" stopOpacity="0.85" />
          <stop offset="0.55" stopColor="#ffd9a0" stopOpacity="0.25" />
          <stop offset="1" stopColor="#ffd9a0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={u("sea")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c4e6e4" />
          <stop offset="0.18" stopColor="#62bcd0" />
          <stop offset="0.55" stopColor="#1f95bb" />
          <stop offset="1" stopColor="#0f6d94" />
        </linearGradient>
        <linearGradient id={u("rock")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6c93a6" />
          <stop offset="1" stopColor="#a9c4cf" />
        </linearGradient>
        <linearGradient id={u("sand")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7e3ba" />
          <stop offset="0.5" stopColor="#ebcb94" />
          <stop offset="1" stopColor="#d9b07a" />
        </linearGradient>
        <radialGradient id={u("vignette")} cx="0.5" cy="0.5" r="0.75">
          <stop offset="0.55" stopColor="#13324a" stopOpacity="0" />
          <stop offset="1" stopColor="#13324a" stopOpacity="0.28" />
        </radialGradient>
        <filter id={u("b1")} x="-20%" y="-30%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="0.9" />
        </filter>
        <filter id={u("b2")} x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id={u("b3")} x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id={u("b4")} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.6" />
        </filter>
        <filter id={u("grain")} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            seed="7"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect width="240" height="100" fill={ref("sky")} />
      <rect width="240" height="100" fill={ref("sun")} />

      <g filter={ref("b3")} fill="#ffffff">
        <ellipse cx="45" cy="19" rx="26" ry="6" opacity="0.6" />
        <ellipse cx="70" cy="15" rx="16" ry="5" opacity="0.55" />
        <ellipse cx="150" cy="25" rx="22" ry="5" opacity="0.5" />
        <ellipse cx="205" cy="13" rx="20" ry="4" opacity="0.5" />
      </g>

      <g filter={ref("b1")}>
        <path
          d="M90 57 C100 52 120 51 134 54 C140 55 144 56 148 57 Z"
          fill="#bcd4dc"
          opacity="0.8"
        />
        <path
          d="M20 57 C22 46 26 38 31 37 C35 36 38 44 40 50 C42 54 44 56 46 57 Z"
          fill={ref("rock")}
        />
        <path
          d="M58 57 C60 49 63 44 66 44 C69 44 71 49 73 57 Z"
          fill={ref("rock")}
          opacity="0.85"
        />
        <path
          d="M196 57 C198 50 201 46 204 46 C207 46 209 51 211 57 Z"
          fill="#a9c6d1"
          opacity="0.8"
        />
      </g>

      <rect y="56" width="240" height="44" fill={ref("sea")} />
      <rect
        y="56"
        width="240"
        height="5"
        fill="#ffffff"
        opacity="0.28"
        filter={ref("b2")}
      />

      <g filter={ref("b1")} fill="#fff3cf">
        <ellipse cx="172" cy="60" rx="15" ry="1.1" opacity="0.7" />
        <ellipse cx="171" cy="64" rx="12" ry="1" opacity="0.6" />
        <ellipse cx="173" cy="68" rx="9" ry="1" opacity="0.55" />
        <ellipse cx="170" cy="72" rx="12" ry="1.1" opacity="0.5" />
        <ellipse cx="174" cy="77" rx="8" ry="1" opacity="0.45" />
        <ellipse cx="170" cy="81" rx="6" ry="0.9" opacity="0.4" />
      </g>
      <g
        filter={ref("b1")}
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        opacity="0.3"
        strokeWidth="0.7"
      >
        <path d="M18 66 Q34 64.5 50 66" />
        <path d="M70 72 Q92 70 112 72" />
        <path d="M118 63 Q128 62 140 63" />
        <path d="M10 77 Q32 75 54 77" />
        <path d="M96 79 Q118 77.5 138 79" />
      </g>

      <path
        d="M0 84 C20 82 40 86 60 84 S100 82 120 84 S160 86 180 84 S220 82 240 84 L240 88 C220 87 200 89 180 88 S140 90 120 88 S80 86 60 88 S20 90 0 88 Z"
        fill="#ffffff"
        opacity="0.75"
        filter={ref("b1")}
      />
      <path
        d="M0 86 C30 84 60 88 90 86 S150 84 190 87 S230 85 240 86 V100 H0 Z"
        fill={ref("sand")}
      />
      <g filter={ref("b2")}>
        <rect y="88" width="240" height="4" fill="#ffffff" opacity="0.2" />
        <ellipse
          cx="172"
          cy="90.5"
          rx="18"
          ry="2.2"
          fill="#fff3d0"
          opacity="0.5"
        />
      </g>

      <g filter={ref("b4")} fill="#1f6b43">
        <path d="M-6 -4 C20 0 40 12 52 30 C36 18 18 10 -6 6 Z" opacity="0.9" />
        <path
          d="M-6 8 C16 14 30 30 34 48 C24 34 12 24 -6 18 Z"
          opacity="0.85"
        />
        <path d="M14 -6 C40 -2 62 6 78 18 C60 10 38 6 14 -2 Z" opacity="0.8" />
        <path
          d="M246 -4 C226 2 214 12 208 26 C222 14 234 8 246 6 Z"
          opacity="0.75"
        />
      </g>

      <rect width="240" height="100" fill={ref("vignette")} />
      <rect width="240" height="100" filter={ref("grain")} />
    </svg>
  );
};

export default TravelPhoto;
