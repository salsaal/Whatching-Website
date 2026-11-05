import React from "react";
import {
  ChevronDown,
  CheckCheck,
  Send,
  Sparkles,
  UserRound
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./product.module.css";
import { useInViewPlay } from "./useInViewPlay";

// The shared team inbox from the product demo. A customer's reply arrives, a
// teammate is assigned from the "Assign to…" menu, and the teammate replies.
// Timeline (seconds): arrives 0.4 · menu opens 1.7 · Meera picked 2.4 ·
// assigned 2.9 · typing 3.2 · reply sent 4.8.
const T = {
  arrive: 0.4,
  menu: 1.7,
  pick: 2.4,
  assigned: 2.9,
  typeStart: 3.2,
  charStep: 0.02,
  send: 4.8
};
const REPLY =
  "Done! 12–17 Dec is on hold for you. Sending the booking link now.";

const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

interface Row {
  name: string;
  initial: string;
  color: string;
  channel: "wa" | "ig";
  preview: string;
  time: string;
  selected?: boolean;
  unread?: number;
}

const rows: Row[] = [
  {
    name: "Aarav Mehta",
    initial: "A",
    color: "#2f5fb3",
    channel: "wa",
    preview: "Yes, please hold it!",
    time: "10:05",
    selected: true
  },
  {
    name: "studio.k",
    initial: "S",
    color: "#e8553d",
    channel: "ig",
    preview: "Commented: PRICE",
    time: "10:04",
    unread: 2
  },
  {
    name: "Priya Sharma",
    initial: "P",
    color: "#0e8a8f",
    channel: "wa",
    preview: "Is the package still available?",
    time: "10:02",
    unread: 1
  },
  {
    name: "Rahul Verma",
    initial: "R",
    color: "#cf9a0b",
    channel: "wa",
    preview: "Thanks, booking confirmed!",
    time: "9:58"
  },
  {
    name: "thecraftroom",
    initial: "T",
    color: "#8a5cc9",
    channel: "ig",
    preview: "Can you send the itinerary?",
    time: "9:51",
    unread: 3
  },
  {
    name: "Meena Bora",
    initial: "M",
    color: "#1f9a55",
    channel: "wa",
    preview: "Can I pay in EMI?",
    time: "9:47",
    unread: 1
  }
];

const teammates = ["Meera", "Karan", "Riya"];

const ChannelBadge = ({ channel }: { channel: "wa" | "ig" }) => (
  <span
    className="absolute -right-0.5 -bottom-0.5 w-[15px] h-[15px] rounded-full flex items-center justify-center text-white ring-2 ring-white"
    style={{
      background:
        channel === "wa"
          ? "#25b35a"
          : "linear-gradient(135deg,#962fbf,#d6249f,#f77737)"
    }}
    aria-hidden
  >
    {channel === "wa" ? (
      <FaWhatsapp className="w-2.5 h-2.5" />
    ) : (
      <FaInstagram className="w-2.5 h-2.5" />
    )}
  </span>
);

const InboxVisual = () => {
  const play = useInViewPlay<HTMLDivElement>();

  return (
    <div
      {...play}
      className={`${styles.frame} ${styles.inbox} h-[440px] flex`}
      role="img"
      aria-label="Whatching shared team inbox: WhatsApp and Instagram conversations in one list, a customer from Wanderly Travels replies, the chat is assigned to Meera and Meera replies"
    >
      <div
        className={`${styles.inboxList} w-[38%] shrink-0 flex-col border-r`}
        style={{ borderColor: "rgba(10,18,14,0.08)" }}
      >
        <div className="px-3.5 pt-3 pb-2">
          <p className="text-[14px] font-bold" style={{ color: "#0b1210" }}>
            Conversations
          </p>
          <div className="flex gap-1 mt-2 text-[10.5px] font-semibold whitespace-nowrap">
            <span
              className="px-1.5 py-0.5 rounded-full text-white"
              style={{ background: "#0b1210" }}
            >
              All
            </span>
            {["WhatsApp", "Instagram", "Mine"].map((tab) => (
              <span
                key={tab}
                className="px-1.5 py-0.5 rounded-full"
                style={{ background: "#f1f3f2", color: "#57685f" }}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center gap-2.5 px-3 h-[52px]"
              style={
                row.selected
                  ? {
                      background: "#eef8f1",
                      boxShadow: "inset 3px 0 0 #169f49"
                    }
                  : undefined
              }
            >
              <span className="relative shrink-0">
                <span
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] font-bold text-white"
                  style={{ background: row.color }}
                >
                  {row.initial}
                </span>
                <ChannelBadge channel={row.channel} />
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="flex items-baseline justify-between gap-2">
                  <span
                    className="text-[12.5px] font-semibold truncate"
                    style={{ color: "#0b1210" }}
                  >
                    {row.name}
                  </span>
                  <span
                    className="text-[10px] shrink-0"
                    style={{ color: "#8a9791" }}
                  >
                    {row.time}
                  </span>
                </span>
                <span className="flex items-center justify-between gap-2 mt-0.5">
                  {row.selected ? (
                    <span
                      className="relative block flex-1 h-[15px] text-[11.5px]"
                      style={{ color: "#57685f" }}
                    >
                      <span
                        className={`${styles.out} absolute inset-0 truncate`}
                        style={delay(T.arrive)}
                      >
                        Whatching AI: Yes! Airport pickup is…
                      </span>
                      <span
                        className={`${styles.in} absolute inset-0 truncate`}
                        style={delay(T.arrive)}
                      >
                        {row.preview}
                      </span>
                    </span>
                  ) : (
                    <span
                      className="text-[11.5px] truncate"
                      style={{ color: "#57685f" }}
                    >
                      {row.preview}
                    </span>
                  )}
                  {row.unread ? (
                    <span
                      className="shrink-0 min-w-[16px] h-[16px] px-1 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
                      style={{ background: "#169f49" }}
                    >
                      {row.unread}
                    </span>
                  ) : row.selected ? (
                    <span
                      className={`${styles.in} shrink-0 min-w-[16px] h-[16px] px-1 rounded-full text-[10px] font-bold text-white flex items-center justify-center`}
                      style={delay(T.arrive + 0.1, {
                        background: "#169f49",
                        "--s": 0.6
                      } as React.CSSProperties)}
                    >
                      1
                    </span>
                  ) : null}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <div
          className="relative px-3 h-[54px] shrink-0 flex items-center justify-between gap-2 border-b bg-white"
          style={{ borderColor: "rgba(10,18,14,0.08)" }}
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <span
              className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[12px] font-bold text-white shrink-0"
              style={{ background: "#2f5fb3" }}
            >
              A
            </span>
            <span className="min-w-0 leading-tight">
              <span
                className="block text-[13px] font-semibold truncate"
                style={{ color: "#0b1210" }}
              >
                Aarav Mehta
              </span>
              <span
                className="block text-[10.5px] truncate"
                style={{ color: "#667781" }}
              >
                WhatsApp
                <span className={styles.wideOnly}>
                  {" "}
                  · AI handled 6 messages
                </span>
              </span>
            </span>
          </span>
          <span className="relative shrink-0 w-[104px] h-[28px] text-[11.5px] font-medium">
            <span
              className={`${styles.out} absolute inset-0 flex items-center justify-center gap-1.5 rounded-lg`}
              style={delay(T.assigned, {
                border: "1px solid #dfe6e2",
                color: "#26332d"
              })}
            >
              <UserRound className="w-3.5 h-3.5" aria-hidden /> Assign to…{" "}
              <ChevronDown className="w-3 h-3" aria-hidden />
            </span>
            <span
              className={`${styles.in} absolute inset-0 flex items-center justify-center gap-1.5 rounded-lg`}
              style={delay(T.assigned, {
                border: "1px solid #bfe6cb",
                background: "#f1faf4",
                color: "#0c7d38"
              })}
            >
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                style={{ background: "#169f49" }}
              >
                M
              </span>
              Meera <ChevronDown className="w-3 h-3" aria-hidden />
            </span>
          </span>

          <div
            className={`${styles.out} absolute right-3 top-[46px] z-10`}
            style={delay(T.assigned - 0.1)}
          >
            <div
              className={`${styles.in} w-[150px] rounded-xl bg-white p-1 text-[12px]`}
              style={delay(T.menu, {
                "--dy": "-6px",
                border: "1px solid #e3e9e6",
                boxShadow: "0 12px 28px -8px rgba(10,18,14,0.25)"
              } as React.CSSProperties)}
            >
              {teammates.map((name, i) => (
                <div
                  key={name}
                  className="relative flex items-center gap-2 h-[28px] rounded-lg px-2 font-medium"
                  style={{ color: "#16211b" }}
                >
                  {i === 0 && (
                    <span
                      className={`${styles.in} absolute inset-0 rounded-lg`}
                      style={delay(T.pick, { background: "#e7f6ec" })}
                    />
                  )}
                  <span
                    className="relative w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                    style={{ background: ["#169f49", "#2f5fb3", "#8a5cc9"][i] }}
                  >
                    {name[0]}
                  </span>
                  <span className="relative">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${styles.chat} flex-1 min-h-0 px-3 py-2.5 flex flex-col justify-end gap-1.5 overflow-hidden`}
        >
          <div
            className="self-start max-w-[85%] rounded-xl rounded-tl-[4px] bg-white px-2.5 py-1.5 text-[12.5px] leading-[1.4]"
            style={{ boxShadow: "0 1px 1px rgba(11,20,26,0.1)" }}
          >
            Is airport pickup included? And can I pay in EMI?
            <span
              className="block text-right text-[10px]"
              style={{ color: "#667781" }}
            >
              10:04
            </span>
          </div>
          <div
            className="self-end max-w-[88%] rounded-xl rounded-tr-[4px] px-2.5 py-1.5 text-[12.5px] leading-[1.4]"
            style={{
              background: "#d9fdd3",
              boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
            }}
          >
            <span
              className="flex items-center gap-1 text-[10.5px] font-semibold mb-0.5"
              style={{ color: "#169f49" }}
            >
              <Sparkles className="w-3 h-3" aria-hidden /> Whatching AI
            </span>
            Yes! Airport pickup is included in all our Thailand packages. And
            you can pay in 3 easy EMIs.
            <span
              className="block text-right text-[10px]"
              style={{ color: "#667781" }}
            >
              10:04
            </span>
          </div>
          <div
            className={`${styles.in} self-start max-w-[85%] rounded-xl rounded-tl-[4px] bg-white px-2.5 py-1.5 text-[12.5px] leading-[1.4]`}
            style={delay(T.arrive + 0.2, {
              "--dy": "12px",
              boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
            } as React.CSSProperties)}
          >
            Yes, please hold it!
            <span
              className="block text-right text-[10px]"
              style={{ color: "#667781" }}
            >
              10:05
            </span>
          </div>
          <div
            className={`${styles.in} self-end max-w-[88%] rounded-xl rounded-tr-[4px] px-2.5 py-1.5 text-[12.5px] leading-[1.4]`}
            style={delay(T.send, {
              "--dy": "12px",
              background: "#d9fdd3",
              boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
            } as React.CSSProperties)}
          >
            <span
              className="block text-[10.5px] font-semibold mb-0.5"
              style={{ color: "#0c7d38" }}
            >
              Meera
            </span>
            {REPLY}
            <span
              className="flex items-center justify-end gap-1 text-[10px]"
              style={{ color: "#667781" }}
            >
              10:06{" "}
              <CheckCheck
                className="w-3.5 h-3.5"
                strokeWidth={2.4}
                aria-hidden
              />
            </span>
          </div>
        </div>

        <div
          className="px-2.5 py-2 flex items-center gap-2 shrink-0"
          style={{ background: "#efeae2" }}
        >
          <div className="relative flex-1 min-h-[44px] rounded-2xl bg-white pl-3 pr-2.5 flex items-center gap-2">
            <div className="relative flex-1 min-w-0 text-[12.5px] leading-[1.3]">
              <span
                className={`${styles.out} absolute inset-y-0 left-0 flex items-center`}
                style={delay(T.typeStart, { color: "#8a9791" })}
              >
                Reply as Meera…
              </span>
              <span
                className={`${styles.in} absolute inset-y-0 left-0 flex items-center`}
                style={delay(T.send + 0.1, { color: "#8a9791" })}
              >
                Reply as Meera…
              </span>
              <span className={`${styles.out} block`} style={delay(T.send)}>
                {REPLY.split("").map((ch, i) => (
                  <span
                    key={i}
                    className={styles.pop}
                    style={delay(T.typeStart + i * T.charStep)}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <span
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "#169f49" }}
          >
            <Send className="w-4 h-4 text-white" aria-hidden />
          </span>
        </div>
      </div>
    </div>
  );
};

export default InboxVisual;
