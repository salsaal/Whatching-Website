import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { PRODUCT_APP_URL, WHATSAPP_URL } from "@/lib/constants";

// Quiet ways to reach us on every page:
// - desktop: a small WhatsApp button in the bottom-right corner;
// - phone: a slim bar with "Start free trial" and WhatsApp.
// Both appear only after the visitor has scrolled past the first screen, hide
// again near the closing call to action and the footer (which already offer
// the same actions), never pop up a message, and don't move once shown.
const ContactDock = () => {
  const [pastHero, setPastHero] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ends = [
      document.getElementById("cta"),
      document.querySelector("footer")
    ].filter((el): el is HTMLElement => Boolean(el));
    const visible = new Set<Element>();
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver((entries) => {
            entries.forEach((e) =>
              e.isIntersecting
                ? visible.add(e.target)
                : visible.delete(e.target)
            );
            setNearEnd(visible.size > 0);
          });
    ends.forEach((el) => observer?.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const shown = pastHero && !nearEnd;

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        tabIndex={shown ? 0 : -1}
        className={`dock-fade max-md:hidden fixed z-40 w-[52px] h-[52px] rounded-full flex items-center justify-center text-white ${shown ? "" : "pointer-events-none opacity-0"}`}
        style={{
          right: "calc(24px + env(safe-area-inset-right, 0px))",
          bottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
          background: "#25d366",
          boxShadow: "0 8px 24px -8px rgba(10,18,14,0.35)"
        }}
      >
        <FaWhatsapp className="w-6 h-6" aria-hidden />
      </a>

      <div
        className={`dock-fade md:hidden fixed inset-x-0 bottom-0 z-40 border-t ${shown ? "" : "pointer-events-none opacity-0"}`}
        style={{
          background: "rgba(255,255,255,0.97)",
          borderColor: "var(--border-light)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)"
        }}
        aria-hidden={!shown}
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5">
          <Link
            href={PRODUCT_APP_URL}
            tabIndex={shown ? 0 : -1}
            className="btn-primary flex-1 !min-h-[44px] !py-0 !text-[0.9rem]"
          >
            Start free trial
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={shown ? 0 : -1}
            aria-label="Chat with us on WhatsApp"
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border"
            style={{ borderColor: "var(--border-medium)", color: "#1a9e55" }}
          >
            <FaWhatsapp className="w-5 h-5" aria-hidden />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactDock;
