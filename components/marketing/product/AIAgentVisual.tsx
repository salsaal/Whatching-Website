import React from "react";
import {
  BadgeCheck,
  Camera,
  CheckCheck,
  FileText,
  Mic,
  Smile,
  Sparkles
} from "lucide-react";
import styles from "./product.module.css";
import { useInViewPlay } from "./useInViewPlay";

// The Whatching AI agent from the product demo: it learns from the business's
// own content, then answers a customer's question from it.
// Timeline (seconds): sources 0.3 / 0.7 / 1.1 · typing 1.6 · sent 3.2 ·
// "replying" 3.7 · answer streams 4.5 → 5.9.
const SOURCES = [
  "Thailand packages.pdf",
  "Pricing & EMI policy",
  "Travel FAQs"
];
const QUESTION = "Is airport pickup included? Can I pay in EMI?";
const ANSWER =
  "Yes! Airport pickup is included in every Thailand package. And you can pay in 3 easy EMIs. Want me to hold 12–17 Dec for you?";

const T = {
  source: 0.3,
  sourceStep: 0.4,
  typeStart: 1.6,
  charStep: 0.028,
  send: 3.2,
  replying: 3.7,
  answer: 4.5,
  wordStep: 0.05
};

const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

const AIAgentVisual = () => {
  const play = useInViewPlay<HTMLDivElement>();
  const words = ANSWER.split(" ");
  const answerDone = T.answer + 0.1 + words.length * T.wordStep;

  return (
    <div
      {...play}
      className={`${styles.frame} h-full flex flex-col`}
      role="img"
      aria-label="Whatching AI agent: it learns from Thailand packages.pdf, Pricing and EMI policy and Travel FAQs, then answers a Wanderly Travels customer asking whether airport pickup is included and whether they can pay in EMI"
    >
      <div className="px-4 pt-3 pb-3">
        <p
          className="text-[14px] font-bold leading-tight"
          style={{ color: "#0b1210" }}
        >
          Learns from your content
        </p>
        <p className="text-[11.5px] mt-0.5" style={{ color: "#667781" }}>
          Answers only from what you upload
        </p>
        <div className="mt-2.5 flex flex-col gap-1.5">
          {SOURCES.map((name, i) => {
            const at = T.source + T.sourceStep * i;
            return (
              <div
                key={name}
                className={`${styles.tint} flex items-center justify-between gap-2 h-[30px] rounded-lg px-2.5 text-[12.5px] font-medium`}
                style={delay(at, {
                  border: "1px solid #bfe6cb",
                  background: "#f4fbf6",
                  "--from": "#e8edea",
                  "--to": "#bfe6cb",
                  color: "#16211b"
                } as React.CSSProperties)}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <FileText
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: "#169f49" }}
                    aria-hidden
                  />
                  <span className="truncate">{name}</span>
                </span>
                <span
                  className={`${styles.in} shrink-0 rounded-full px-2 py-[1px] text-[10px] font-bold text-white`}
                  style={delay(at + 0.15, {
                    background: "#169f49",
                    "--s": 0.9
                  } as React.CSSProperties)}
                >
                  Learned
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="px-3 py-1.5 flex items-center gap-2 bg-white border-y"
        style={{ borderColor: "rgba(10,18,14,0.08)" }}
      >
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
          style={{ background: "linear-gradient(135deg,#17a6b5,#0f7f95)" }}
        >
          W
        </span>
        <span className="min-w-0 leading-tight">
          <span
            className="flex items-center gap-1 text-[12px] font-semibold"
            style={{ color: "#0b1210" }}
          >
            Wanderly Travels{" "}
            <BadgeCheck
              className="w-3.5 h-3.5"
              style={{ color: "#169f49" }}
              aria-hidden
            />
          </span>
          <span className="block text-[10px]" style={{ color: "#667781" }}>
            Business account
          </span>
        </span>
      </div>

      <div
        className={`${styles.chat} flex-1 px-3 py-2.5 flex flex-col justify-end gap-2`}
      >
        <div className="flex justify-end">
          <div
            className={`${styles.in} max-w-[88%] rounded-xl rounded-tr-[4px] px-2.5 py-1.5 text-[12.5px] leading-[1.4]`}
            style={delay(T.send, {
              "--dy": "10px",
              background: "#d9fdd3",
              boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
            } as React.CSSProperties)}
          >
            {QUESTION}
            <span
              className="flex items-center justify-end gap-1 text-[10px] mt-0.5"
              style={{ color: "#667781" }}
            >
              10:04{" "}
              <CheckCheck
                className="w-3.5 h-3.5"
                style={{ color: "#53bdeb" }}
                strokeWidth={2.4}
                aria-hidden
              />
            </span>
          </div>
        </div>

        <div className="relative flex justify-start">
          <div
            className={`${styles.out} absolute left-0 top-0`}
            style={delay(T.answer)}
          >
            <span
              className={`${styles.in} inline-flex items-center gap-1.5 rounded-xl rounded-tl-[4px] bg-white px-2.5 py-1.5 text-[11.5px] font-semibold`}
              style={delay(T.replying, {
                "--dy": "6px",
                color: "#0c7d38",
                boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
              } as React.CSSProperties)}
            >
              <Sparkles className="w-3 h-3" aria-hidden /> Whatching AI is
              replying…
            </span>
          </div>
          <div
            className={`${styles.in} max-w-[90%] rounded-xl rounded-tl-[4px] bg-white px-2.5 py-1.5 text-[12.5px] leading-[1.4]`}
            style={delay(T.answer, {
              "--dy": "6px",
              boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
            } as React.CSSProperties)}
          >
            <span
              className="flex items-center gap-1 text-[10.5px] font-semibold mb-0.5"
              style={{ color: "#169f49" }}
            >
              <Sparkles className="w-3 h-3" aria-hidden /> Whatching AI
            </span>
            {words.map((word, i) => (
              <span
                key={i}
                className={styles.word}
                style={delay(T.answer + 0.1 + i * T.wordStep)}
              >
                {word}{" "}
              </span>
            ))}
            <span
              className={`${styles.in} block text-right text-[10px]`}
              style={delay(answerDone, { color: "#667781" })}
            >
              10:04
            </span>
          </div>
        </div>
      </div>

      <div
        className="px-2.5 py-2 flex items-center gap-2"
        style={{ background: "#efeae2" }}
      >
        <div className="relative flex-1 min-h-[40px] rounded-full bg-white pl-2.5 pr-3 flex items-center gap-2">
          <Smile
            className="w-4 h-4 shrink-0"
            style={{ color: "#8a9791" }}
            aria-hidden
          />
          <div className="relative flex-1 min-w-0 text-[12.5px] leading-[1.3]">
            <span
              className={`${styles.out} absolute inset-y-0 left-0 flex items-center`}
              style={delay(T.typeStart, { color: "#8a9791" })}
            >
              Message
            </span>
            <span
              className={`${styles.in} absolute inset-y-0 left-0 flex items-center`}
              style={delay(T.send + 0.1, { color: "#8a9791" })}
            >
              Message
            </span>
            <span className={`${styles.out} block`} style={delay(T.send)}>
              {QUESTION.split("").map((ch, i) => (
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
          <Camera
            className="w-4 h-4 shrink-0"
            style={{ color: "#8a9791" }}
            aria-hidden
          />
        </div>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "#169f49" }}
        >
          <Mic className="w-4 h-4 text-white" aria-hidden />
        </span>
      </div>
    </div>
  );
};

export default AIAgentVisual;
