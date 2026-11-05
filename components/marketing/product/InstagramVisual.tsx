import React from "react";
import {
  Bookmark,
  Check,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send
} from "lucide-react";
import TravelPhoto from "./TravelPhoto";
import styles from "./product.module.css";
import { useInViewPlay } from "./useInViewPlay";

// Comment-to-DM, from the product demo: someone comments "PRICE", the post
// gets a public reply, and the commenter gets the DM. On narrow screens the
// post is hidden and the steps and the DM remain.
// Timeline (seconds): comment 0.5 · public reply 1.6 · DM 2.6 · price list 3.4.
const T = { comment: 0.5, reply: 1.6, dmNote: 2.6, dm: 3.0, card: 3.5 };

const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

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

const steps = [
  {
    icon: MessageCircle,
    label: "Step 1",
    title: "Someone comments “PRICE”",
    sub: "On any post or reel",
    at: T.comment
  },
  {
    icon: Send,
    label: "Step 2",
    title: "Send an instant DM",
    sub: "With the price list",
    at: T.dm
  }
];

const InstagramVisual = () => {
  const play = useInViewPlay<HTMLDivElement>(0.3);

  return (
    <div
      {...play}
      className={`${styles.frame} ${styles.inbox} w-full`}
      role="img"
      aria-label="Whatching comment-to-DM automation: someone comments PRICE on a Wanderly Travels Instagram post, the post gets a public reply, and the commenter receives a DM with the Thailand price list"
    >
      <div
        className="px-4 pt-3.5 pb-3 border-b"
        style={{ borderColor: "rgba(10,18,14,0.08)" }}
      >
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <p className="text-[14px] font-bold" style={{ color: "#0b1210" }}>
            Comment-to-DM automation
          </p>
          <span
            className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full text-[11px] font-semibold"
            style={{ background: "#e7f6ec", color: "#0c7d38" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#169f49" }}
            />{" "}
            Active
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {steps.map((step) => (
            <div
              key={step.label}
              className={`${styles.tint} flex items-center gap-3 rounded-xl px-3 py-2`}
              style={delay(step.at, {
                border: "1.5px solid #169f49",
                background: "#f4fbf6",
                "--from": "#e3e9e6"
              } as React.CSSProperties)}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white"
                style={{ background: "#169f49" }}
              >
                <step.icon className="w-4 h-4" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span
                  className="block text-[9.5px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "#169f49" }}
                >
                  {step.label}
                </span>
                <span
                  className="block text-[13px] font-semibold mt-0.5"
                  style={{ color: "#0b1210" }}
                >
                  {step.title}
                </span>
                <span
                  className="block text-[11px]"
                  style={{ color: "#667781" }}
                >
                  {step.sub}
                </span>
              </span>
              <span
                className={`${styles.in} w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white`}
                style={delay(step.at + 0.2, {
                  background: "#169f49",
                  "--s": 0.6
                } as React.CSSProperties)}
              >
                <Check className="w-3 h-3" strokeWidth={3.5} aria-hidden />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        <div
          className={`${styles.igPost} flex-1 min-w-0 flex-col border-r`}
          style={{ borderColor: "rgba(10,18,14,0.08)" }}
        >
          <div className="flex items-center gap-2 px-3 h-[46px]">
            <Avatar size={28} ring />
            <span
              className="flex-1 text-[12.5px] font-semibold"
              style={{ color: "#0b1210" }}
            >
              wanderly.travels
            </span>
            <MoreHorizontal
              className="w-4 h-4"
              style={{ color: "#0b1210" }}
              aria-hidden
            />
          </div>
          <div style={{ aspectRatio: "240 / 112" }}>
            <TravelPhoto className="block w-full h-full" />
          </div>
          <div
            className="flex items-center gap-3 px-3 pt-2"
            style={{ color: "#0b1210" }}
          >
            <Heart className="w-[20px] h-[20px]" aria-hidden />
            <MessageCircle className="w-[20px] h-[20px]" aria-hidden />
            <Send className="w-[20px] h-[20px]" aria-hidden />
            <Bookmark className="w-[20px] h-[20px] ml-auto" aria-hidden />
          </div>
          <p
            className="px-3 pt-1.5 text-[12px] leading-[1.4]"
            style={{ color: "#0b1210" }}
          >
            <strong>wanderly.travels</strong> Phuket in December. Comment PRICE
            and we&apos;ll send you the price list.
          </p>
          <div
            className="px-3 pt-2 pb-3 flex flex-col gap-2 text-[12px] leading-[1.35]"
            style={{ color: "#0b1210" }}
          >
            <p
              className={styles.in}
              style={delay(T.comment, { "--dy": "8px" } as React.CSSProperties)}
            >
              <strong>aarav.mehta</strong> PRICE
            </p>
            <p
              className={`${styles.in} pl-4 flex gap-1.5`}
              style={delay(T.reply, { "--dy": "8px" } as React.CSSProperties)}
            >
              <Avatar size={16} />
              <span>
                <strong>wanderly.travels</strong>{" "}
                <span style={{ color: "#0c4fa8" }}>@aarav.mehta</span> Sent you
                the price list in your DMs!
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col">
          <div
            className="flex items-center gap-2 px-3 h-[46px] border-b"
            style={{ borderColor: "rgba(10,18,14,0.08)" }}
          >
            <Avatar size={28} ring />
            <span className="leading-tight">
              <span
                className="block text-[12.5px] font-semibold"
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
          </div>
          <div
            className="flex-1 px-3 py-3 flex flex-col justify-end gap-2 min-h-[250px]"
            style={{ background: "#ffffff" }}
          >
            <p
              className={`${styles.in} text-center text-[10.5px]`}
              style={delay(T.dmNote, { color: "#8a9791" })}
            >
              You commented “PRICE” on their post
            </p>
            <div className="flex items-end gap-1.5">
              <Avatar size={20} />
              <div className="flex flex-col gap-1 min-w-0 max-w-[82%]">
                <p
                  className={`${styles.in} rounded-[18px] rounded-bl-[6px] px-3 py-2 text-[12.5px] leading-[1.35]`}
                  style={delay(T.dm, {
                    "--dy": "10px",
                    background: "#efefef",
                    color: "#0b1210"
                  } as React.CSSProperties)}
                >
                  Hey Aarav! Here&apos;s our Thailand price list
                </p>
                <div
                  className={`${styles.in} rounded-[18px] overflow-hidden`}
                  style={delay(T.card, {
                    "--dy": "10px",
                    background: "#efefef"
                  } as React.CSSProperties)}
                >
                  <div style={{ aspectRatio: "240 / 100" }}>
                    <TravelPhoto className="block w-full h-full" />
                  </div>
                  <div className="px-3 py-2 leading-tight">
                    <p
                      className="text-[12.5px] font-semibold"
                      style={{ color: "#0b1210" }}
                    >
                      Thailand packages
                    </p>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ color: "#667781" }}
                    >
                      From ₹48,900 · 4–6 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 pb-3">
            <div
              className="h-[36px] rounded-full px-3.5 flex items-center text-[12.5px]"
              style={{ background: "#f1f1f1", color: "#8a9791" }}
            >
              Message…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramVisual;
