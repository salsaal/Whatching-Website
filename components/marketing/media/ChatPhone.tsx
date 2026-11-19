import React from "react";
import {
  BadgeCheck,
  ChevronLeft,
  Mic,
  Phone,
  Plus,
  Video,
  Wifi
} from "lucide-react";

// A realistic phone showing a WhatsApp chat as the customer sees it: brushed
// metal frame, glass highlight, Dynamic Island, an original doodle wallpaper
// and the phone's own system font (so it reads as a real app, not as part of
// the website). Business messages are white on the left; the customer's
// replies are green on the right.

/* An original travel doodle tile (plane, sun, palm, suitcase, waves, ticket,
   camera, compass, chat bubble), drawn for Whatching. Low contrast, like a
   chat wallpaper. */
const DOODLE = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180' fill='none' stroke='%23b5a893' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' opacity='0.55'>
<g transform='translate(14 18) rotate(-18)'><path d='M0 6 L18 2 L21 4 L9 8 L13 15 L10 16 L4 10 L0 11 Z'/></g>
<g transform='translate(78 14)'><circle cx='8' cy='8' r='5'/><path d='M8 0v2M8 14v2M0 8h2M14 8h2M2.5 2.5l1.4 1.4M12.1 12.1l1.4 1.4M2.5 13.5l1.4-1.4M12.1 3.9l1.4-1.4'/></g>
<g transform='translate(136 22)'><path d='M8 26c0-9 1-15 4-20M12 6c-4-3-9-2-11 1M12 6c4-3 9-3 11 0M12 6c-1-4 1-7 5-7M12 6c-2 2-3 5-2 8'/></g>
<g transform='translate(22 72)'><rect x='0' y='5' width='22' height='15' rx='3'/><path d='M7 5V2h8v3M0 11h22'/></g>
<g transform='translate(70 66)'><path d='M0 6q5-6 10 0t10 0t10 0'/><path d='M0 13q5-6 10 0t10 0t10 0'/></g>
<g transform='translate(128 76) rotate(12)'><path d='M0 3h26v5a3 3 0 0 0 0 6v5H0v-5a3 3 0 0 0 0-6z'/><path d='M9 3v16' stroke-dasharray='2 2'/></g>
<g transform='translate(18 128)'><rect x='0' y='4' width='22' height='15' rx='3'/><circle cx='11' cy='11.5' r='4'/><path d='M6 4l2-3h6l2 3'/></g>
<g transform='translate(78 118)'><circle cx='10' cy='10' r='9'/><path d='M13 7l-2 5-5 2 2-5z'/></g>
<g transform='translate(134 128)'><path d='M2 2h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z'/><path d='M6 8h12M6 12h8'/></g>
<g transform='translate(52 160)'><path d='M0 4l3-1 2 3 3-6 2 2'/></g>
<g transform='translate(110 168)'><circle cx='3' cy='3' r='1.6'/></g>
<g transform='translate(160 100)'><circle cx='3' cy='3' r='1.6'/></g>
</svg>`;

export const doodleBackground = `url("data:image/svg+xml;utf8,${DOODLE.replace(/\n/g, "").replace(/"/g, "'")}")`;

export const SYSTEM_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const ChatPhone = ({
  business = "Wanderly Travels",
  initial = "W",
  avatar = "linear-gradient(135deg,#17a6b5,#0f7f95)",
  children,
  width = 320
}: {
  business?: string;
  initial?: string;
  avatar?: string;
  children: React.ReactNode;
  width?: number;
}) => {
  const height = Math.round(width * 2.06);
  return (
    <div className="relative mx-auto" style={{ width, height }}>
      {/* side buttons */}
      <span
        aria-hidden
        className="absolute -left-[2px] top-[118px] w-[3px] h-[30px] rounded-l"
        style={{ background: "#2a2e33" }}
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[164px] w-[3px] h-[56px] rounded-l"
        style={{ background: "#2a2e33" }}
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[230px] w-[3px] h-[56px] rounded-l"
        style={{ background: "#2a2e33" }}
      />
      <span
        aria-hidden
        className="absolute -right-[2px] top-[176px] w-[3px] h-[86px] rounded-r"
        style={{ background: "#2a2e33" }}
      />

      <div
        className="absolute inset-0 rounded-[58px] p-[11px]"
        style={{
          background:
            "linear-gradient(145deg,#4a5057 0%,#23272c 22%,#15181b 50%,#2b3036 78%,#5a6068 100%)",
          boxShadow:
            "inset 0 0 0 1.5px rgba(255,255,255,0.10), inset 0 0 0 4px #0b0d0f, 0 60px 90px -40px rgba(6,28,18,0.55), 0 24px 40px -24px rgba(0,0,0,0.45)"
        }}
      >
        <div
          className="relative h-full rounded-[47px] overflow-hidden flex flex-col"
          style={{
            background: "#efe7dd",
            fontFamily: SYSTEM_FONT,
            WebkitFontSmoothing: "antialiased"
          }}
        >
          {/* status bar */}
          <div
            className="relative h-[46px] shrink-0 px-7 flex items-center justify-between text-[13px] font-semibold"
            style={{ background: "#f6f5f3", color: "#000" }}
          >
            <span className="pt-1">9:41</span>
            <span
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[96px] h-[28px] rounded-full"
              style={{ background: "#000" }}
            />
            <span className="flex items-center gap-1 pt-1" aria-hidden>
              <svg viewBox="0 0 17 11" className="w-[17px] h-[11px]">
                {[0, 1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x={i * 4.4}
                    y={8 - i * 2.4}
                    width="3"
                    height={3 + i * 2.4}
                    rx="0.8"
                    fill="#000"
                  />
                ))}
              </svg>
              <Wifi className="w-[15px] h-[15px]" strokeWidth={2.8} />
              <span
                className="relative inline-block w-[25px] h-[12px] rounded-[3.5px] border"
                style={{ borderColor: "rgba(0,0,0,0.4)" }}
              >
                <span
                  className="absolute inset-[1.5px] right-[5px] rounded-[2px]"
                  style={{ background: "#000" }}
                />
              </span>
            </span>
          </div>

          {/* chat header */}
          <div
            className="h-[52px] shrink-0 px-2 flex items-center gap-2 border-b"
            style={{ background: "#f6f5f3", borderColor: "rgba(0,0,0,0.08)" }}
          >
            <ChevronLeft
              className="w-6 h-6"
              style={{ color: "#007aff" }}
              strokeWidth={2.4}
              aria-hidden
            />
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-semibold text-white shrink-0"
              style={{ background: avatar }}
            >
              {initial}
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <span
                className="flex items-center gap-1 text-[14.5px] font-semibold min-w-0"
                style={{ color: "#000" }}
              >
                <span className="truncate">{business}</span>
                <BadgeCheck
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#25d366" }}
                  aria-hidden
                />
              </span>
              <span
                className="block text-[11.5px]"
                style={{ color: "#8a8a8e" }}
              >
                Business account
              </span>
            </span>
            <span
              className="flex items-center gap-3.5 pr-1.5 shrink-0"
              aria-hidden
            >
              <Video
                className="w-[21px] h-[21px]"
                style={{ color: "#007aff" }}
              />
              <Phone
                className="w-[18px] h-[18px]"
                style={{ color: "#007aff" }}
              />
            </span>
          </div>

          {/* conversation */}
          <div
            className="relative flex-1 min-h-0 overflow-hidden px-2.5 py-3 flex flex-col justify-end gap-[5px]"
            style={{
              backgroundColor: "#efe7dd",
              backgroundImage: doodleBackground,
              backgroundSize: "180px 180px"
            }}
          >
            {children}
          </div>

          {/* composer */}
          <div
            className="h-[58px] shrink-0 px-2.5 flex items-center gap-2"
            style={{ background: "#f6f5f3" }}
          >
            <Plus
              className="w-6 h-6"
              style={{ color: "#007aff" }}
              aria-hidden
            />
            <span
              className="flex-1 h-[34px] rounded-full bg-white border"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            />
            <Mic
              className="w-[22px] h-[22px]"
              style={{ color: "#007aff" }}
              aria-hidden
            />
          </div>
          <span
            aria-hidden
            className="absolute bottom-[7px] left-1/2 -translate-x-1/2 w-[120px] h-[4.5px] rounded-full"
            style={{ background: "#000" }}
          />

          {/* glass highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(118deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 26%, rgba(255,255,255,0) 40%)"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPhone;
