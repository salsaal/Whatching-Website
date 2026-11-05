import React from "react";
import {
  BadgeCheck,
  Camera,
  Check,
  CheckCheck,
  ChevronLeft,
  ExternalLink,
  Mic,
  Phone,
  Reply,
  Smile,
  Sparkles,
  Users,
  Video,
  Wifi,
  Zap
} from "lucide-react";
import TravelPhoto from "./product/TravelPhoto";
import styles from "./product/product.module.css";

// The hero picture, drawn in code so it stays sharp at any size: a tilted
// phone showing the Wanderly Travels offer, the customer's tap and the AI
// agent's reply, with four floating chips on a soft green background. It is a
// still picture (no animation). The chips say "Delivered & read" and "AI agent
// replied" instead of the figures the original thumbnail showed.

const bubbleShadow = "0 1px 1px rgba(11,20,26,0.1)";

const Palm = () => (
  <svg
    viewBox="0 0 16 16"
    className="inline-block w-[13px] h-[13px] align-[-2px]"
    aria-hidden
  >
    <path
      d="M8 15 C7.6 11 7.8 8 8.8 5.5"
      fill="none"
      stroke="#8a5a2b"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8.8 5.5 C6.5 3.2 3.6 3.6 2.2 5.4 C4.6 4.6 6.8 4.8 8.8 5.5Z"
      fill="#2f9e44"
    />
    <path
      d="M8.8 5.5 C10.4 2.6 13 2.4 14.6 4 C12.4 3.9 10.5 4.5 8.8 5.5Z"
      fill="#37b24d"
    />
    <path
      d="M8.8 5.5 C8.2 3.4 9 1.8 10.2 1 C10 2.6 9.6 4 8.8 5.5Z"
      fill="#2b8a3e"
    />
    <path
      d="M8.8 5.5 C10.8 5.4 12.6 6.4 13.4 8 C11.8 6.8 10.4 6.1 8.8 5.5Z"
      fill="#2f9e44"
    />
  </svg>
);

const Chip = ({
  children,
  style,
  tone = "light"
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
  tone?: "light" | "green";
}) => (
  <span
    className="absolute z-10 inline-flex items-center gap-2.5 rounded-2xl whitespace-nowrap font-bold"
    style={{
      background: tone === "green" ? "#15a24b" : "#ffffff",
      color: tone === "green" ? "#ffffff" : "#0b1210",
      boxShadow:
        "0 18px 38px -12px rgba(11,18,16,0.3), 0 2px 8px rgba(11,18,16,0.08)",
      letterSpacing: "-0.01em",
      ...style
    }}
  >
    {children}
  </span>
);

const HeroPhone = () => (
  <div
    className={`${styles.heroStage} relative overflow-hidden rounded-[32px]`}
    style={{
      background:
        "radial-gradient(70% 55% at 78% 88%, rgba(34,197,94,0.30), rgba(34,197,94,0) 70%), radial-gradient(55% 45% at 92% 28%, rgba(34,197,94,0.16), rgba(34,197,94,0) 70%), linear-gradient(145deg, #f5faf6 0%, #e6f4ec 55%, #d3ecdd 100%)",
      border: "1px solid rgba(22,159,73,0.12)"
    }}
  >
    <span
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(rgba(10,18,14,0.16) 1px, transparent 1.2px)",
        backgroundSize: "22px 22px",
        WebkitMaskImage: "linear-gradient(to right, #000, transparent 55%)",
        maskImage: "linear-gradient(to right, #000, transparent 55%)"
      }}
    />

    <div
      className={`${styles.heroZoom} relative mx-auto my-11`}
      style={{ width: 300, height: 610 }}
      role="img"
      aria-label="Whatching on a phone: a Wanderly Travels offer on WhatsApp with Plan my trip and View packages buttons, a customer taps Plan my trip, and the AI agent replies"
    >
      <span
        aria-hidden
        className="absolute left-[8%] right-[-6%] bottom-[-26px] h-[46px] rounded-[50%]"
        style={{
          background: "rgba(8,64,36,0.38)",
          filter: "blur(26px)",
          transform: "rotate(-6deg)"
        }}
      />

      <div className="absolute inset-0" style={{ transform: "rotate(-6deg)" }}>
        <div
          className="absolute inset-0 rounded-[48px] p-[10px]"
          style={{
            background: "linear-gradient(145deg,#232d3a,#0f1620)",
            boxShadow:
              "0 40px 70px -30px rgba(8,40,24,0.5), inset 0 0 0 1.5px #3a4656"
          }}
        >
          <span
            className="absolute -left-[3px] top-[110px] w-[3px] h-[34px] rounded-l"
            style={{ background: "#1a222d" }}
          />
          <span
            className="absolute -left-[3px] top-[156px] w-[3px] h-[56px] rounded-l"
            style={{ background: "#1a222d" }}
          />
          <span
            className="absolute -right-[3px] top-[140px] w-[3px] h-[78px] rounded-r"
            style={{ background: "#1a222d" }}
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
                <svg
                  viewBox="0 0 16 10"
                  className="w-[14px] h-[9px]"
                  aria-hidden
                >
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
                className="w-[18px] h-[18px]"
                style={{ color: "#0b1210" }}
                aria-hidden
              />
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg,#17a6b5,#0f7f95)"
                }}
              >
                W
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span
                  className="flex items-center gap-1 text-[13px] font-semibold"
                  style={{ color: "#0b1210" }}
                >
                  Wanderly Travels{" "}
                  <BadgeCheck
                    className="w-3.5 h-3.5 fill-[#169f49] text-white"
                    aria-hidden
                  />
                </span>
                <span
                  className="block text-[10.5px]"
                  style={{ color: "#667781" }}
                >
                  Business account
                </span>
              </span>
              <Video
                className="w-[18px] h-[18px]"
                style={{ color: "#0b1210" }}
                aria-hidden
              />
              <Phone
                className="w-[16px] h-[16px]"
                style={{ color: "#0b1210" }}
                aria-hidden
              />
            </div>

            <div
              className={`${styles.chat} flex-1 min-h-0 px-2 py-2 flex flex-col justify-end gap-1.5 overflow-hidden`}
            >
              <div
                className="self-start w-[94%] rounded-xl rounded-tl-[4px] bg-white overflow-hidden"
                style={{ boxShadow: bubbleShadow }}
              >
                <div className="p-1">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{ aspectRatio: "240 / 92" }}
                  >
                    <TravelPhoto className="block w-full h-full" />
                  </div>
                </div>
                <div
                  className="px-2.5 pt-0.5 pb-1.5 text-[12px] leading-[1.4]"
                  style={{ color: "#111b21" }}
                >
                  <p>
                    Hi <strong>Aarav</strong>, ready for your next escape? Book
                    this week and save <strong>25%</strong> on our Thailand and
                    Bali packages. Offer ends Sunday.
                  </p>
                  <div
                    className="flex items-end justify-between gap-2 mt-0.5 text-[10px]"
                    style={{ color: "#667781" }}
                  >
                    <span>Reply STOP to unsubscribe</span>
                    <span>10:00</span>
                  </div>
                </div>
                <div
                  className="text-[12px] font-semibold"
                  style={{ color: "#027eb5" }}
                >
                  <div
                    className="flex items-center justify-center gap-1.5 h-[30px] border-t"
                    style={{ borderColor: "rgba(11,20,26,0.08)" }}
                  >
                    <Reply className="w-3.5 h-3.5" aria-hidden /> Plan my trip
                  </div>
                  <div
                    className="flex items-center justify-center gap-1.5 h-[30px] border-t"
                    style={{ borderColor: "rgba(11,20,26,0.08)" }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden /> View
                    packages
                  </div>
                </div>
              </div>

              <div
                className="self-end max-w-[88%] rounded-xl rounded-tr-[4px] px-1.5 pt-1.5 pb-1 text-[12.5px]"
                style={{ background: "#d9fdd3", boxShadow: bubbleShadow }}
              >
                <div
                  className="rounded-md px-2 py-1 mb-1 text-[10.5px] leading-tight"
                  style={{
                    background: "rgba(11,20,26,0.06)",
                    borderLeft: "3px solid #169f49"
                  }}
                >
                  <span
                    className="block font-semibold"
                    style={{ color: "#0c7d38" }}
                  >
                    Wanderly Travels
                  </span>
                  <span style={{ color: "#667781" }}>
                    Hi Aarav, ready for your next escape?
                  </span>
                </div>
                <span className="px-1">Plan my trip</span>
                <span
                  className="flex items-center justify-end gap-1 text-[10px] px-1"
                  style={{ color: "#667781" }}
                >
                  10:01{" "}
                  <CheckCheck
                    className="w-3.5 h-3.5"
                    style={{ color: "#53bdeb" }}
                    strokeWidth={2.4}
                    aria-hidden
                  />
                </span>
              </div>

              <div
                className="self-start w-[84%] rounded-xl rounded-tl-[4px] bg-white px-2.5 pt-1.5 pb-1 text-[12.5px] leading-[1.4]"
                style={{ color: "#111b21", boxShadow: bubbleShadow }}
              >
                <span
                  className="flex items-center gap-1 text-[10.5px] font-semibold mb-0.5"
                  style={{ color: "#169f49" }}
                >
                  <Sparkles className="w-3 h-3" aria-hidden /> Whatching AI
                </span>
                Great choice, Aarav! <Palm /> Where would you like to go?
                <span
                  className="block text-right text-[10px]"
                  style={{ color: "#667781" }}
                >
                  10:01
                </span>
              </div>
            </div>

            <div
              className="h-[50px] shrink-0 px-2 flex items-center gap-2"
              style={{ background: "#efeae2" }}
            >
              <div
                className="flex-1 h-[34px] rounded-full bg-white px-2.5 flex items-center gap-2 text-[12.5px]"
                style={{ color: "#8a9791" }}
              >
                <Smile className="w-4 h-4 shrink-0" aria-hidden />
                <span className="flex-1">Message</span>
                <Camera className="w-4 h-4 shrink-0" aria-hidden />
              </div>
              <span
                className="w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#169f49" }}
              >
                <Mic className="w-4 h-4 text-white" aria-hidden />
              </span>
            </div>
          </div>
        </div>
      </div>

      <Chip
        style={{
          left: -84,
          top: 150,
          transform: "rotate(-3deg)",
          fontSize: 17,
          padding: "11px 20px 11px 12px"
        }}
      >
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-white"
          style={{ background: "#1aa64e" }}
        >
          <CheckCheck className="w-4 h-4" strokeWidth={2.8} aria-hidden />
        </span>
        Delivered &amp; read
      </Chip>
      <Chip
        tone="green"
        style={{
          right: -56,
          top: 44,
          transform: "rotate(7deg)",
          fontSize: 25,
          padding: "12px 22px"
        }}
      >
        One tap <Check className="w-6 h-6" strokeWidth={3.2} aria-hidden />
      </Chip>
      <Chip
        style={{
          right: -92,
          top: 404,
          transform: "rotate(3deg)",
          fontSize: 17,
          padding: "11px 22px 11px 12px"
        }}
      >
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "#0f3a2c", color: "#3ddc84" }}
        >
          <Zap className="w-4 h-4" strokeWidth={2.6} aria-hidden />
        </span>
        AI agent replied
      </Chip>
      <Chip
        style={{
          left: -84,
          bottom: -6,
          transform: "rotate(-3.5deg)",
          fontSize: 17,
          padding: "11px 22px 11px 12px"
        }}
      >
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-white"
          style={{ background: "#f05a40" }}
        >
          <Users className="w-4 h-4" strokeWidth={2.4} aria-hidden />
        </span>
        Lead qualified · HOT
      </Chip>
    </div>
  </div>
);

export default HeroPhone;
