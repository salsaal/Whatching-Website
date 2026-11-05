import React, { useId } from "react";

// Header image of the "summer_escape" template (thailand-beach.jpg in the
// demo), drawn as vector art so it stays sharp at any size.
const BeachArt = ({ className }: { className?: string }) => {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 240 126"
      className={className}
      role="img"
      aria-label="Beach with a palm tree, sea and sun"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7cc9f0" />
          <stop offset="1" stopColor="#c9ecfb" />
        </linearGradient>
        <linearGradient id={`${id}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1aa3d6" />
          <stop offset="1" stopColor="#0b86b8" />
        </linearGradient>
      </defs>
      <rect width="240" height="126" fill={`url(#${id}-sky)`} />
      <circle cx="190" cy="32" r="17" fill="#fcd34d" />
      <ellipse cx="62" cy="26" rx="20" ry="6.5" fill="#ffffff" opacity="0.95" />
      <ellipse cx="76" cy="22" rx="12" ry="6" fill="#ffffff" opacity="0.95" />
      <ellipse cx="128" cy="44" rx="14" ry="4.5" fill="#ffffff" opacity="0.9" />
      <rect y="68" width="240" height="30" fill={`url(#${id}-sea)`} />
      <path
        d="M0 80 Q30 76 60 80 T120 80 T180 80 T240 80"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path d="M0 96 Q60 90 120 95 T240 94 V126 H0 Z" fill="#f2d9a2" />
      <path
        d="M58 112 C56 92 54 72 62 52"
        fill="none"
        stroke="#8a5a2b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M62 52 C50 44 38 46 30 54 C42 50 52 51 62 52 Z" fill="#2f9e44" />
      <path d="M62 52 C72 42 86 42 94 50 C82 48 72 49 62 52 Z" fill="#37b24d" />
      <path d="M62 52 C56 40 58 30 66 24 C64 34 64 43 62 52 Z" fill="#2b8a3e" />
      <path d="M62 52 C74 50 84 56 88 66 C78 60 70 56 62 52 Z" fill="#2f9e44" />
      <path d="M62 52 C50 54 42 62 40 70 C48 62 55 57 62 52 Z" fill="#37b24d" />
      <path d="M176 112 L196 96 L216 112 Z" fill="#f87171" />
      <path d="M196 96 V116" stroke="#9f1239" strokeWidth="1.5" />
    </svg>
  );
};

export default BeachArt;
