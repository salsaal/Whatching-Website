import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

// Share-preview image (1200 × 630) for any page: the page's title on the
// brand background, with an optional small label above it. Used as og:image
// and twitter:image by components/Seo. Example:
//   /api/og?title=WhatsApp%20Business%20API%20pricing%20in%20India&kicker=Guide

export const config = { runtime: "edge" };

const bold = fetch(
  new URL("../../lib/og/Geist-Bold.ttf", import.meta.url)
).then((r) => r.arrayBuffer());
const regular = fetch(
  new URL("../../lib/og/Geist-Regular.ttf", import.meta.url)
).then((r) => r.arrayBuffer());
const logo = fetch(new URL("../../lib/og/logo.png", import.meta.url)).then(
  (r) => r.arrayBuffer()
);

const toDataUrl = (buf: ArrayBuffer) => {
  let bin = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return `data:image/png;base64,${btoa(bin)}`;
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (
    searchParams.get("title") ?? "WhatsApp and Instagram for your business"
  )
    .replace(/\s*\|\s*Whatching$/, "")
    .slice(0, 110);
  const kicker = (searchParams.get("kicker") ?? "").slice(0, 40);
  const size = title.length > 70 ? 58 : title.length > 45 ? 68 : 78;

  const [boldData, regularData, logoData] = await Promise.all([
    bold,
    regular,
    logo
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background:
          "radial-gradient(60% 70% at 92% 100%, rgba(34,197,94,0.28), rgba(34,197,94,0) 70%), linear-gradient(145deg, #f7fbf8 0%, #e9f5ee 60%, #d6eddf 100%)",
        fontFamily: "Geist"
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img src={toDataUrl(logoData)} width={240} height={50} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {kicker && (
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: "#0c7d38",
              marginBottom: 18
            }}
          >
            {kicker}
          </div>
        )}
        <div
          style={{
            fontSize: size,
            fontWeight: 700,
            color: "#0b1210",
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            maxWidth: 1000
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 26,
          color: "#3d4b44"
        }}
      >
        <span>WhatsApp + Instagram for Indian businesses</span>
        <span style={{ fontWeight: 700, color: "#0b1210" }}>whatching.com</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist", data: boldData, weight: 700, style: "normal" },
        { name: "Geist", data: regularData, weight: 400, style: "normal" }
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable"
      }
    }
  );
}
