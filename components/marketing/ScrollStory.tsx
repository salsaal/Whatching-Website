import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCheck,
  ExternalLink,
  Inbox,
  List,
  Megaphone,
  Reply,
  Sparkles,
  Workflow
} from "lucide-react";
import ChatPhone from "./media/ChatPhone";
import OfferBanner from "./media/OfferBanner";

/*
 * "One chat, start to finish": the product story told by scrolling. The phone
 * stays pinned while the visitor scrolls; each step adds the next part of one
 * Wanderly Travels conversation (offer, chatbot, AI answer, teammate), with a
 * short timed sequence inside each step so it feels like a real chat.
 *
 * - The scroll position picks the step, so the pace is the visitor's own.
 * - Every step's text is in the page for search engines and screen readers.
 * - With reduced motion, messages appear without movement or delays.
 */

type Msg =
  | { kind: "template"; step: number; delay: number }
  | {
      kind: "me";
      step: number;
      delay: number;
      text: string;
      time: string;
      quote?: string;
    }
  | {
      kind: "list";
      step: number;
      delay: number;
      text: string;
      button: string;
      time: string;
    }
  | { kind: "typing"; step: number; delay: number }
  | { kind: "ai"; step: number; delay: number; text: string; time: string }
  | {
      kind: "agent";
      step: number;
      delay: number;
      from: string;
      text: string;
      time: string;
    };

const MESSAGES: Msg[] = [
  { kind: "template", step: 0, delay: 0 },
  {
    kind: "me",
    step: 1,
    delay: 0,
    text: "Plan my trip",
    time: "10:12",
    quote: "Summer Escape"
  },
  {
    kind: "list",
    step: 1,
    delay: 650,
    text: "Lovely! Where would you like to go?",
    button: "Choose destination",
    time: "10:12"
  },
  { kind: "me", step: 1, delay: 1400, text: "Thailand", time: "10:13" },
  {
    kind: "me",
    step: 2,
    delay: 0,
    text: "Is airport pickup included? Can I pay in EMI?",
    time: "10:14"
  },
  { kind: "typing", step: 2, delay: 450 },
  {
    kind: "ai",
    step: 2,
    delay: 1500,
    text: "Yes! Airport pickup is included in every Thailand package, and you can pay in 3 EMIs. Want me to hold 12–17 Dec for you?",
    time: "10:14"
  },
  {
    kind: "me",
    step: 3,
    delay: 0,
    text: "Yes please, hold it!",
    time: "10:15"
  },
  {
    kind: "agent",
    step: 3,
    delay: 900,
    from: "Meera · Wanderly Travels",
    text: "Done, Aarav! 12–17 Dec is on hold. I'm sending the booking link now.",
    time: "10:16"
  }
];

const STEPS = [
  {
    label: "Broadcasts",
    title: "Send an offer to everyone who opted in",
    desc: "Write the message once, get it approved by Meta, and send it to your whole list or one group, now or later. The ticks turn blue as people read it.",
    href: "/features/whatsapp-broadcast",
    link: "See broadcasts",
    caption: {
      icon: Megaphone,
      text: "Approved marketing template, sent to 2,483 people"
    }
  },
  {
    label: "Chatbot builder",
    title: "When they reply, a chatbot takes it from there",
    desc: "Tapping a button starts a chatbot you built by dragging blocks onto a canvas: menus, questions and answers, with no code.",
    href: "/features/whatsapp-flows",
    link: "See the chatbot builder",
    caption: { icon: Workflow, text: "Trip planner chatbot" }
  },
  {
    label: "AI agent",
    title: "The AI agent answers the questions in between",
    desc: "It answers from your own documents, website and FAQs, so a customer who asks at 11 pm still gets a real answer.",
    href: "/features/ai-chatbot",
    link: "See the AI agent",
    caption: { icon: Bot, text: "Answered from Thailand packages.pdf" }
  },
  {
    label: "Shared inbox",
    title: "Your team picks it up when it matters",
    desc: "When a person is needed, the chat lands in one shared inbox, assigned to a teammate, with the whole conversation so far.",
    href: "/features/shared-inbox",
    link: "See the shared inbox",
    caption: { icon: Inbox, text: "Assigned to Meera in your shared inbox" }
  }
];

const bubbleShadow = "0 1px 0.5px rgba(11,20,26,0.13)";

const Ticks = ({ read }: { read: boolean }) => (
  <CheckCheck
    className="inline w-[15px] h-[15px] -mb-[3px] ml-0.5"
    style={{ color: read ? "#53bdeb" : "#8696a0" }}
    strokeWidth={2.2}
    aria-hidden
  />
);

const Time = ({ t, ticks }: { t: string; ticks?: boolean | "read" }) => (
  <span
    className="float-right ml-2 mt-1.5 -mb-0.5 text-[11px] leading-none"
    style={{ color: "#667781" }}
  >
    {t}
    {ticks && <Ticks read={ticks === "read"} />}
  </span>
);

const Bubble = ({ m, readUpTo }: { m: Msg; readUpTo: boolean }) => {
  if (m.kind === "template")
    return (
      <div
        className="self-start w-[88%] rounded-[14px] rounded-tl-[4px] bg-white overflow-hidden"
        style={{ boxShadow: bubbleShadow }}
      >
        <div className="p-[3px]">
          <OfferBanner className="block w-full h-auto rounded-[11px]" />
        </div>
        <div
          className="px-2.5 pt-1 pb-1.5 text-[13.5px] leading-[1.35]"
          style={{ color: "#111b21" }}
        >
          Hi <b>Aarav</b>, ready for your next escape? Book this week and save{" "}
          <b>25%</b> on our Thailand and Bali packages.
          <span
            className="block text-[11.5px] mt-1"
            style={{ color: "#8696a0" }}
          >
            Reply STOP to opt out
          </span>
          <Time t="10:00" />
          <span className="block clear-both" />
        </div>
        {[
          { icon: Reply, text: "Plan my trip" },
          { icon: ExternalLink, text: "View packages" }
        ].map((b) => (
          <div
            key={b.text}
            className="flex items-center justify-center gap-1.5 py-2 border-t text-[14px] font-medium"
            style={{ borderColor: "rgba(0,0,0,0.07)", color: "#007aff" }}
          >
            <b.icon className="w-4 h-4" aria-hidden /> {b.text}
          </div>
        ))}
      </div>
    );
  if (m.kind === "me")
    return (
      <div
        className="self-end max-w-[80%] rounded-[14px] rounded-tr-[4px] px-2.5 pt-1.5 pb-1.5 text-[13.5px] leading-[1.35]"
        style={{
          background: "#d9fdd3",
          color: "#111b21",
          boxShadow: bubbleShadow
        }}
      >
        {m.quote && (
          <span
            className="block mb-1 rounded-md px-2 py-1 border-l-[3px] text-[12px]"
            style={{ background: "rgba(0,0,0,0.05)", borderColor: "#06cf9c" }}
          >
            <span className="block font-semibold" style={{ color: "#06a884" }}>
              Wanderly Travels
            </span>
            <span style={{ color: "#667781" }}>{m.quote}</span>
          </span>
        )}
        {m.text}
        <Time t={m.time} ticks={readUpTo ? "read" : true} />
      </div>
    );
  if (m.kind === "list")
    return (
      <div
        className="self-start w-[78%] rounded-[14px] rounded-tl-[4px] bg-white overflow-hidden"
        style={{ boxShadow: bubbleShadow }}
      >
        <div
          className="px-2.5 pt-1.5 pb-1.5 text-[13.5px] leading-[1.35]"
          style={{ color: "#111b21" }}
        >
          {m.text}
          <Time t={m.time} />
          <span className="block clear-both" />
        </div>
        <div
          className="flex items-center justify-center gap-1.5 py-2 border-t text-[14px] font-medium"
          style={{ borderColor: "rgba(0,0,0,0.07)", color: "#007aff" }}
        >
          <List className="w-4 h-4" aria-hidden /> {m.button}
        </div>
      </div>
    );
  if (m.kind === "typing")
    return (
      <div
        className="self-start rounded-[14px] rounded-tl-[4px] bg-white px-3.5 py-3 flex gap-1"
        style={{ boxShadow: bubbleShadow }}
        aria-label="Typing"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="story-dot w-[7px] h-[7px] rounded-full"
            style={{ background: "#9aa3a8", animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
    );
  const ai = m.kind === "ai";
  return (
    <div
      className="self-start max-w-[84%] rounded-[14px] rounded-tl-[4px] bg-white px-2.5 pt-1.5 pb-1.5 text-[13.5px] leading-[1.35]"
      style={{ color: "#111b21", boxShadow: bubbleShadow }}
    >
      <span
        className="flex items-center gap-1 text-[12px] font-semibold mb-0.5"
        style={{ color: ai ? "#0c7d38" : "#c2410c" }}
      >
        {ai && <Sparkles className="w-3 h-3" aria-hidden />}
        {ai ? "Whatching AI" : m.from}
      </span>
      {m.text}
      <Time t={m.time} />
      <span className="block clear-both" />
    </div>
  );
};

/** Which messages are on screen for the active step, revealed in order. */
const useChatSequence = (active: number, reduced: boolean) => {
  const [shown, setShown] = useState<Set<number>>(() => new Set([0]));
  const timers = useRef<number[]>([]);

  useEffect(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    const keep = new Set<number>();
    MESSAGES.forEach((m, i) => {
      if (m.step < active && m.kind !== "typing") keep.add(i);
    });
    const current = MESSAGES.map((m, i) => ({ m, i })).filter(
      ({ m }) => m.step === active
    );
    if (reduced) {
      current.forEach(({ m, i }) => m.kind !== "typing" && keep.add(i));
      setShown(keep);
      return;
    }
    setShown(new Set(keep));
    current.forEach(({ m, i }, k) => {
      timers.current.push(
        window.setTimeout(() => {
          setShown((prev) => {
            const next = new Set(prev);
            next.add(i);
            // A typing indicator gives way to the message after it.
            const before = current[k - 1];
            if (before && before.m.kind === "typing") next.delete(before.i);
            return next;
          });
        }, m.delay)
      );
    });
    return () => timers.current.forEach((t) => window.clearTimeout(t));
  }, [active, reduced]);

  return shown;
};

// Runs before paint in the browser; a plain effect during server rendering.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const PHONE_W = 340;
const PHONE_H = Math.round(PHONE_W * 2.06);

const ScrollStory = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const colRef = useRef<HTMLDivElement>(null);
  const lastColH = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [compact, setCompact] = useState(false);
  const [fill, setFill] = useState(0);
  const shown = useChatSequence(active, reduced);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onMq = () => setReduced(mq.matches);
    mq.addEventListener("change", onMq);

    let frame = 0;
    let current = -1;
    let size = "";

    // Size the phone from the pinned panel's height (100svh). Unlike the
    // window height, it stays put while a phone's address bar slides in and
    // out, so the phone is not resized in the middle of a scroll.
    const fit = () => {
      const panel = panelRef.current;
      if (!panel) return;
      const h = panel.clientHeight;
      const w = window.innerWidth;
      const key = `${w}x${h}`;
      if (key === size) return;
      size = key;
      const wide = w >= 1024;
      const room = h - (wide ? 170 : 450);
      setZoom(Math.round(Math.max(0.5, Math.min(1, room / 700)) * 100) / 100);
      // Short laptop screens: only the current step shows its description.
      setCompact(wide && h < 780);
    };

    // The scroll position picks the step. Only a change of step updates the
    // page; scrolling within a step does nothing.
    const measure = () => {
      frame = 0;
      const track = trackRef.current;
      const panel = panelRef.current;
      if (!track || !panel) return;
      const travel = track.offsetHeight - panel.clientHeight;
      const top = track.getBoundingClientRect().top;
      const p = travel > 0 ? Math.min(1, Math.max(0, -top / travel)) : 0;
      const next = Math.min(
        STEPS.length - 1,
        Math.floor(p * STEPS.length * 0.999)
      );
      if (next !== current) {
        current = next;
        setActive(next);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    const onResize = () => {
      fit();
      onScroll();
    };
    fit();
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onMq);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // New messages: the whole column slides up by the height that was added
  // (a single move the graphics chip can do), instead of every message
  // being laid out again on every frame.
  useIsoLayoutEffect(() => {
    const col = colRef.current;
    if (!col) return;
    const h = col.offsetHeight;
    const prev = lastColH.current;
    lastColH.current = h;
    if (prev === null || reduced || h === prev) return;
    col.style.transition = "none";
    col.style.transform = `translateY(${h - prev}px)`;
    col.getBoundingClientRect();
    col.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
    col.style.transform = "translateY(0)";
  }, [shown, reduced]);

  // The green line on the left runs down to the current step's dot.
  useIsoLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const item = list.querySelectorAll<HTMLElement>(":scope > li")[active];
    const span = list.clientHeight - 24;
    if (!item || span <= 0) return;
    setFill(Math.min(1, Math.max(0, (item.offsetTop + 10 - 12) / span)));
  }, [active, compact, zoom]);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    const panel = panelRef.current;
    if (!track || !panel) return;
    const top = track.getBoundingClientRect().top + window.scrollY;
    const travel = track.offsetHeight - panel.clientHeight;
    window.scrollTo({
      top: top + (travel * (i + 0.5)) / STEPS.length,
      behavior: "smooth"
    });
  }, []);

  const step = STEPS[active];
  const CaptionIcon = step.caption.icon;

  return (
    <section
      id="how-it-works"
      aria-labelledby="story-title"
      className="story-section relative"
    >
      <div className="container-wide pt-24 max-sm:pt-16">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "var(--primary-dark)" }}
          >
            How it works
          </p>
          <h2 id="story-title" className="heading-2 mb-4">
            One chat, start to finish.
          </h2>
          <p className="body-large" style={{ color: "var(--text-secondary)" }}>
            Follow one customer from an offer to a booked trip. Scroll to play
            the conversation.
          </p>
        </div>
      </div>

      {/* The scroll track: tall enough for each step to get its own stretch of scrolling. */}
      <div
        ref={trackRef}
        className="relative"
        style={{ height: `calc(100svh + ${(STEPS.length - 1) * 75}svh)` }}
      >
        <div
          ref={panelRef}
          className="sticky top-0 h-[100svh] flex items-center pt-[84px] pb-6 max-lg:items-start max-lg:pt-[92px]"
        >
          <div className="container-wide w-full grid lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] gap-8 lg:gap-16 items-center lg:items-stretch max-lg:gap-4">
            {/* Steps. From lg up all four are listed beside the phone, as
                tall as the phone; on smaller screens only the current one
                shows, above the phone. */}
            <ol
              ref={listRef}
              className="relative lg:pl-7 lg:flex lg:flex-col lg:justify-between max-lg:min-h-[176px]"
            >
              <span
                aria-hidden
                className="max-lg:hidden absolute left-[5px] top-3 bottom-3 w-[2px] rounded-full"
                style={{ background: "var(--border-light)" }}
              />
              <span
                aria-hidden
                className="max-lg:hidden absolute left-[5px] top-3 bottom-3 w-[2px] rounded-full origin-top story-fill"
                style={{
                  background: "var(--primary)",
                  transform: `scaleY(${fill})`
                }}
              />
              {STEPS.map((s, i) => {
                const on = i === active;
                const reached = i <= active;
                return (
                  <li
                    key={s.label}
                    className={`relative story-ease ${on ? "story-step-on" : "max-lg:hidden"}`}
                    style={{ opacity: on ? 1 : 0.42 }}
                  >
                    <span
                      aria-hidden
                      className="max-lg:hidden absolute -left-[28px] top-1 w-3 h-3 rounded-full story-ease"
                      style={{
                        background: reached
                          ? "var(--primary)"
                          : "var(--surface)",
                        border: `2px solid ${reached ? "var(--primary)" : "var(--border-medium)"}`,
                        boxShadow: on
                          ? "0 0 0 4px rgba(22,159,73,0.16)"
                          : "none"
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className="text-left w-full group"
                      aria-current={on ? "step" : undefined}
                    >
                      <span
                        className="flex items-center gap-3 text-sm font-semibold story-ease"
                        style={{
                          color: on
                            ? "var(--primary-dark)"
                            : "var(--text-muted)"
                        }}
                      >
                        <span className="tabular-nums">0{i + 1}</span>
                        <span>{s.label}</span>
                        <span
                          className="lg:hidden ml-auto flex gap-1.5"
                          aria-hidden
                        >
                          {STEPS.map((_, k) => (
                            <span
                              key={k}
                              className="w-6 h-[3px] rounded-full"
                              style={{
                                background:
                                  k <= active
                                    ? "var(--primary)"
                                    : "var(--border-medium)"
                              }}
                            />
                          ))}
                        </span>
                      </span>
                      <span
                        className="block mt-1.5 font-bold tracking-tight leading-[1.15] text-[1.35rem] lg:text-[clamp(1.2rem,1.65vw,1.5rem)] group-hover:underline decoration-2 underline-offset-4"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {s.title}
                      </span>
                    </button>
                    <div className={!on && compact ? "hidden" : ""}>
                      <p
                        className="mt-2 text-[15px] lg:text-[15.5px] leading-relaxed max-w-md"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {s.desc}
                      </p>
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold"
                        style={{ color: "var(--primary-dark)" }}
                        tabIndex={on ? 0 : -1}
                      >
                        {s.link} <ArrowRight className="w-4 h-4" aria-hidden />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Phone */}
            <figure className="relative flex flex-col items-center">
              <span
                aria-hidden
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square rounded-full story-spot"
              />
              <div
                className="relative"
                style={{ width: PHONE_W * zoom, height: PHONE_H * zoom }}
                role="img"
                aria-label="A WhatsApp conversation between a customer, Aarav, and Wanderly Travels: an offer, a chatbot menu, an answer from the AI agent and a reply from Meera on the team"
              >
                <div
                  style={{
                    width: PHONE_W,
                    transform: `scale(${zoom})`,
                    transformOrigin: "top left"
                  }}
                >
                  <ChatPhone width={PHONE_W}>
                    <div ref={colRef} className="flex flex-col gap-[5px]">
                      {MESSAGES.map((m, i) =>
                        shown.has(i) ? (
                          <div
                            key={i}
                            className={`flex flex-col w-full ${reduced ? "" : "story-in"}`}
                          >
                            <Bubble m={m} readUpTo />
                          </div>
                        ) : null
                      )}
                    </div>
                  </ChatPhone>
                </div>
              </div>
              <figcaption
                key={active}
                className="story-caption relative mt-5 max-lg:hidden inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-semibold"
                style={{
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "0 10px 30px -18px rgba(10,30,20,0.35)"
                }}
              >
                <CaptionIcon
                  className="w-4 h-4"
                  style={{ color: "var(--primary)" }}
                  aria-hidden
                />
                {step.caption.text}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
