import React from "react";
import {
  BadgeCheck,
  Check,
  CheckCheck,
  ChevronLeft,
  ExternalLink,
  List,
  Mic,
  Phone,
  Reply,
  Smile,
  Camera,
  Sparkles,
  Users,
  Video,
  Wifi,
  Zap
} from "lucide-react";
import TravelPhoto from "./product/TravelPhoto";
import styles from "./product/product.module.css";
import { useInViewPlay } from "./product/useInViewPlay";

// The hero's phone, drawn in code so it stays sharp at any size. A Wanderly
// Travels offer arrives, Aarav taps "Plan my trip", and the AI agent replies.
// Timeline (seconds): offer 0.5 · tap 2.0 · reply 2.5 · typing 3.2 · AI 4.0.
const T = {
  offer: 0.5,
  tap: 2.0,
  reply: 2.5,
  typing: 3.2,
  ai: 4.0,
  chipTap: 2.3,
  chipAI: 4.2,
  chipLead: 5.2
};

const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

const bubbleShadow = "0 1px 1px rgba(11,20,26,0.1)";

const Chip = ({
  children,
  at,
  style,
  tone = "light",
  className = ""
}: {
  children: React.ReactNode;
  at: number;
  style: React.CSSProperties;
  tone?: "light" | "green";
  className?: string;
}) => (
  <span
    className={`${className} ${styles.in} absolute z-10 inline-flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-[14px] font-bold whitespace-nowrap`}
    style={delay(at, {
      "--dy": "10px",
      "--s": 0.94,
      background: tone === "green" ? "#14a04a" : "#ffffff",
      color: tone === "green" ? "#ffffff" : "#0b1210",
      boxShadow:
        "0 14px 34px -10px rgba(11,18,16,0.28), 0 2px 6px rgba(11,18,16,0.08)",
      ...style
    } as React.CSSProperties)}
  >
    {children}
  </span>
);

const HeroPhone = () => {
  const play = useInViewPlay<HTMLDivElement>(0.2);

  return (
    <div
      {...play}
      className="relative mx-auto"
      style={{ width: 300, maxWidth: "100%", aspectRatio: "300 / 640" }}
      role="img"
      aria-label="Whatching on a phone: a Wanderly Travels offer arrives on WhatsApp with Plan my trip and View packages buttons, a customer taps Plan my trip, and the AI agent replies"
    >
      <div
        className="absolute inset-0 rounded-[48px] p-[10px]"
        style={{
          background: "linear-gradient(145deg,#1f2825,#0b1210)",
          boxShadow:
            "0 50px 90px -35px rgba(11,18,16,0.55), inset 0 0 0 1.5px #2f3a36"
        }}
      >
        <span
          className="absolute -left-[3px] top-[110px] w-[3px] h-[34px] rounded-l"
          style={{ background: "#1a2320" }}
        />
        <span
          className="absolute -left-[3px] top-[156px] w-[3px] h-[56px] rounded-l"
          style={{ background: "#1a2320" }}
        />
        <span
          className="absolute -right-[3px] top-[140px] w-[3px] h-[78px] rounded-r"
          style={{ background: "#1a2320" }}
        />

        <div className="relative h-full rounded-[38px] overflow-hidden bg-white flex flex-col">
          <div
            className="relative h-[34px] shrink-0 px-6 flex items-end justify-between pb-1 text-[11px] font-semibold"
            style={{ color: "#0b1210" }}
          >
            <span>9:41</span>
            <span
              className="absolute left-1/2 -translate-x-1/2 top-[8px] w-[86px] h-[24px] rounded-full"
              style={{ background: "#0b1210" }}
            />
            <span className="flex items-center gap-1">
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
              style={{ background: "linear-gradient(135deg,#17a6b5,#0f7f95)" }}
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
                  className="w-3.5 h-3.5"
                  style={{ color: "#169f49" }}
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
              className={`${styles.in} self-start w-[94%] rounded-xl rounded-tl-[4px] bg-white overflow-hidden`}
              style={delay(T.offer, {
                "--dy": "14px",
                boxShadow: bubbleShadow
              } as React.CSSProperties)}
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
                  className={`${styles.press} flex items-center justify-center gap-1.5 h-[30px] border-t`}
                  style={delay(T.tap, { borderColor: "rgba(11,20,26,0.08)" })}
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
              className={`${styles.in} self-end max-w-[88%] rounded-xl rounded-tr-[4px] px-1.5 pt-1.5 pb-1 text-[12.5px]`}
              style={delay(T.reply, {
                "--dy": "10px",
                background: "#d9fdd3",
                boxShadow: bubbleShadow
              } as React.CSSProperties)}
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

            <div className="relative self-start w-[80%]">
              <div
                className={`${styles.out} absolute left-0 top-0 z-[1]`}
                style={delay(T.ai)}
              >
                <span
                  className={`${styles.in} inline-flex items-center gap-1 rounded-xl rounded-tl-[4px] bg-white px-3 py-2.5`}
                  style={delay(T.typing, {
                    "--dy": "6px",
                    boxShadow: bubbleShadow
                  } as React.CSSProperties)}
                  aria-hidden
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#9aa6a1" }}
                    />
                  ))}
                </span>
              </div>
              <div
                className={`${styles.in} rounded-xl rounded-tl-[4px] bg-white overflow-hidden`}
                style={delay(T.ai, {
                  "--dy": "8px",
                  boxShadow: bubbleShadow
                } as React.CSSProperties)}
              >
                <div
                  className="px-2.5 pt-1.5 pb-1 text-[12.5px] leading-[1.4]"
                  style={{ color: "#111b21" }}
                >
                  <span
                    className="flex items-center gap-1 text-[10.5px] font-semibold mb-0.5"
                    style={{ color: "#169f49" }}
                  >
                    <Sparkles className="w-3 h-3" aria-hidden /> Whatching AI
                  </span>
                  Great choice, Aarav! Where would you like to go?
                  <span
                    className="block text-right text-[10px]"
                    style={{ color: "#667781" }}
                  >
                    10:01
                  </span>
                </div>
                <div
                  className="flex items-center justify-center gap-1.5 h-[30px] border-t text-[12px] font-semibold"
                  style={{
                    borderColor: "rgba(11,20,26,0.08)",
                    color: "#027eb5"
                  }}
                >
                  <List className="w-3.5 h-3.5" aria-hidden /> View destinations
                </div>
              </div>
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

      <Chip
        at={T.chipTap}
        tone="green"
        style={{
          top: -8,
          right: -48,
          transform: "rotate(5deg)",
          fontSize: 17,
          padding: "9px 18px"
        }}
      >
        One tap <Check className="w-4 h-4" strokeWidth={3} aria-hidden />
      </Chip>
      <Chip
        at={T.chipAI}
        className="max-sm:hidden"
        style={{ top: 478, right: -118, transform: "rotate(3deg)" }}
      >
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: "#0f3a2c", color: "#3ddc84" }}
        >
          <Zap className="w-3.5 h-3.5" strokeWidth={2.6} aria-hidden />
        </span>
        AI agent replied
      </Chip>
      <Chip
        at={T.chipLead}
        style={{ bottom: -10, left: -34, transform: "rotate(-3deg)" }}
      >
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center text-white"
          style={{ background: "#f05a40" }}
        >
          <Users className="w-3.5 h-3.5" strokeWidth={2.4} aria-hidden />
        </span>
        Lead qualified · HOT
      </Chip>
    </div>
  );
};

export default HeroPhone;
