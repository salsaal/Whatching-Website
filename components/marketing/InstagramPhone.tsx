import React from "react";
import {
  Check,
  ChevronLeft,
  MessageCircle,
  Phone,
  Send,
  Video,
  Wifi
} from "lucide-react";
import TravelPhoto from "./product/TravelPhoto";
import styles from "./product/product.module.css";

// A still picture for the Instagram section: a phone showing the DM a
// customer gets after commenting "PRICE", with three labels around it. Drawn
// in code so it stays sharp; it scales down on narrow screens.

const igGradient = "linear-gradient(135deg,#f9a53b,#e1306c 50%,#833ab4)";

const Avatar = ({ size, ring = false }: { size: number; ring?: boolean }) => (
  <span
    className="rounded-full flex items-center justify-center shrink-0"
    style={{
      width: size,
      height: size,
      background: ring ? igGradient : "transparent",
      padding: ring ? 2 : 0
    }}
  >
    <span
      className="w-full h-full rounded-full flex items-center justify-center font-bold text-white"
      style={{
        background: "linear-gradient(135deg,#17a6b5,#0f7f95)",
        fontSize: size * 0.4,
        border: ring ? "2px solid #ffffff" : "none"
      }}
    >
      W
    </span>
  </span>
);

const Chip = ({
  children,
  style,
  className = "",
  gradient = false
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
  className?: string;
  gradient?: boolean;
}) => (
  <span
    className={`${className} absolute z-10 inline-flex items-center gap-2.5 rounded-2xl whitespace-nowrap font-bold`}
    style={{
      background: gradient
        ? "linear-gradient(135deg,#d6249f,#f77737)"
        : "#ffffff",
      color: gradient ? "#ffffff" : "#0b1210",
      boxShadow:
        "0 18px 38px -12px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.12)",
      letterSpacing: "-0.01em",
      ...style
    }}
  >
    {children}
  </span>
);

const InstagramPhone = () => (
  <div
    className={`${styles.heroStage} relative overflow-hidden rounded-[32px]`}
    style={{
      background:
        "radial-gradient(60% 50% at 88% 12%, rgba(247,119,55,0.30), rgba(247,119,55,0) 70%), radial-gradient(65% 55% at 12% 90%, rgba(131,58,180,0.38), rgba(131,58,180,0) 70%), radial-gradient(55% 45% at 90% 92%, rgba(214,36,159,0.30), rgba(214,36,159,0) 70%), linear-gradient(160deg, #1d1424 0%, #160f1d 100%)",
      border: "1px solid rgba(255,255,255,0.08)"
    }}
  >
    <span
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1.2px)",
        backgroundSize: "22px 22px",
        WebkitMaskImage: "linear-gradient(to right, #000, transparent 55%)",
        maskImage: "linear-gradient(to right, #000, transparent 55%)"
      }}
    />

    <div
      className={`${styles.heroZoom} relative mx-auto my-11`}
      style={{ width: 300, height: 610 }}
      role="img"
      aria-label="Whatching on Instagram: someone comments PRICE on a Wanderly Travels post, the post gets a public reply, and the commenter receives a DM with the Thailand price list"
    >
      <span
        aria-hidden
        className="absolute left-[8%] right-[-6%] bottom-[-26px] h-[46px] rounded-[50%]"
        style={{ background: "rgba(214,36,159,0.45)", filter: "blur(28px)" }}
      />

      <div
        className="absolute inset-0 rounded-[48px] p-[10px]"
        style={{
          background: "linear-gradient(145deg,#2c2634,#0f0b14)",
          boxShadow:
            "0 40px 70px -30px rgba(0,0,0,0.7), inset 0 0 0 1.5px #4a4358"
        }}
      >
        <span
          className="absolute -left-[3px] top-[110px] w-[3px] h-[34px] rounded-l"
          style={{ background: "#241f2c" }}
        />
        <span
          className="absolute -left-[3px] top-[156px] w-[3px] h-[56px] rounded-l"
          style={{ background: "#241f2c" }}
        />
        <span
          className="absolute -right-[3px] top-[140px] w-[3px] h-[78px] rounded-r"
          style={{ background: "#241f2c" }}
        />

        <div className="relative h-full rounded-[38px] overflow-hidden bg-white flex flex-col">
          <div
            className="relative h-[34px] shrink-0 px-6 flex items-end justify-between pb-1 text-[11px] font-semibold"
            style={{ color: "#0b1210" }}
          >
            <span>9:41</span>
            <span
              className="absolute left-1/2 -translate-x-1/2 top-[8px] w-[86px] h-[24px] rounded-full"
              style={{ background: "#05080c" }}
            />
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 16 10" className="w-[14px] h-[9px]" aria-hidden>
                {[0, 1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x={i * 4}
                    y={7 - i * 2.2}
                    width="2.6"
                    height={3 + i * 2.2}
                    rx="0.6"
                    fill="#0b1210"
                  />
                ))}
              </svg>
              <Wifi className="w-3 h-3" strokeWidth={2.6} aria-hidden />
              <span
                className="inline-block w-[20px] h-[10px] rounded-[3px]"
                style={{ background: "#0b1210" }}
              />
            </span>
          </div>

          <div
            className="h-[50px] shrink-0 px-2.5 flex items-center gap-2 border-b"
            style={{ borderColor: "rgba(10,18,14,0.08)" }}
          >
            <ChevronLeft
              className="w-[20px] h-[20px]"
              style={{ color: "#0b1210" }}
              aria-hidden
            />
            <Avatar size={30} ring />
            <span className="min-w-0 flex-1 leading-tight">
              <span
                className="block text-[13px] font-semibold"
                style={{ color: "#0b1210" }}
              >
                wanderly.travels
              </span>
              <span
                className="block text-[10.5px]"
                style={{ color: "#667781" }}
              >
                Business chat
              </span>
            </span>
            <Phone
              className="w-[17px] h-[17px]"
              style={{ color: "#0b1210" }}
              aria-hidden
            />
            <Video
              className="w-[19px] h-[19px]"
              style={{ color: "#0b1210" }}
              aria-hidden
            />
          </div>

          <div className="flex-1 min-h-0 px-3 py-3 flex flex-col justify-end gap-2.5 overflow-hidden bg-white">
            <div
              className="self-center w-[78%] rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e6e6e6" }}
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1.5">
                <Avatar size={18} />
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: "#0b1210" }}
                >
                  wanderly.travels
                </span>
              </div>
              <div style={{ aspectRatio: "240 / 130" }}>
                <TravelPhoto className="block w-full h-full" />
              </div>
              <p
                className="px-2.5 py-1.5 text-[10.5px] leading-snug"
                style={{ color: "#262626" }}
              >
                Phuket in December. Comment PRICE and we&apos;ll send you the
                price list.
              </p>
            </div>

            <p
              className="text-center text-[10.5px]"
              style={{ color: "#8a9791" }}
            >
              You commented “PRICE” on their post
            </p>

            <div className="flex items-end gap-1.5">
              <Avatar size={20} />
              <div className="flex flex-col gap-1 min-w-0 max-w-[84%]">
                <p
                  className="rounded-[18px] rounded-bl-[6px] px-3 py-2 text-[12.5px] leading-[1.35]"
                  style={{ background: "#efefef", color: "#0b1210" }}
                >
                  Hey Aarav! Here&apos;s our Thailand price list
                </p>
                <div
                  className="flex items-center gap-3 rounded-[18px] p-2.5"
                  style={{ background: "#efefef" }}
                >
                  <div className="w-[56px] h-[56px] rounded-xl overflow-hidden shrink-0">
                    <TravelPhoto className="block w-full h-full" />
                  </div>
                  <div className="leading-tight min-w-0">
                    <p
                      className="text-[12.5px] font-semibold"
                      style={{ color: "#0b1210" }}
                    >
                      Thailand packages
                    </p>
                    <p
                      className="text-[11px] mt-1"
                      style={{ color: "#667781" }}
                    >
                      From ₹48,900 · 4–6 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[50px] shrink-0 px-2.5 flex items-center bg-white">
            <div
              className="flex-1 h-[34px] rounded-full px-3.5 flex items-center text-[12.5px]"
              style={{ background: "#f1f1f1", color: "#8a9791" }}
            >
              Message…
            </div>
          </div>
        </div>
      </div>

      <Chip
        className="left-[-78px] max-sm:left-[-52px] top-[96px]"
        style={{
          transform: "rotate(-3deg)",
          fontSize: 17,
          padding: "11px 20px 11px 12px"
        }}
      >
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-white"
          style={{ background: igGradient }}
        >
          <MessageCircle className="w-4 h-4" aria-hidden />
        </span>
        Comment “PRICE”
      </Chip>
      <Chip
        className="right-[-118px] max-sm:right-[-72px] top-[262px]"
        style={{
          transform: "rotate(4deg)",
          fontSize: 16,
          padding: "10px 18px 10px 12px"
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white"
          style={{ background: "#169f49" }}
        >
          <Check className="w-4 h-4" strokeWidth={3} aria-hidden />
        </span>
        Public reply sent
      </Chip>
      <Chip
        gradient
        className="right-[-56px] max-sm:right-[-40px] top-[-20px]"
        style={{
          transform: "rotate(6deg)",
          fontSize: 22,
          padding: "11px 22px"
        }}
      >
        <Send className="w-5 h-5" aria-hidden /> Instant DM
      </Chip>
    </div>
  </div>
);

export default InstagramPhone;
