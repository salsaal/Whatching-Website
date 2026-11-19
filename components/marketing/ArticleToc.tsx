import React, { useEffect, useRef, useState } from "react";
import { slugify } from "./Inline";

// "On this page" for articles: stays in view while reading and marks the
// section being read, with a marker that slides down the list.
const ArticleToc = ({ headings }: { headings: string[] }) => {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const [bar, setBar] = useState({ top: 0, height: 0 });
  const ids = headings.map(slugify);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      let current = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 160) current = i;
      });
      // At the very bottom of the page, the last section is the one being read.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      )
        current = ids.length - 1;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids.join("|")]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const item = listRef.current?.children[active] as HTMLElement | undefined;
    if (item) setBar({ top: item.offsetTop, height: item.offsetHeight });
  }, [active]);

  return (
    <nav aria-label="On this page" className="hidden xl:block">
      <div className="sticky top-28">
        <p
          className="text-sm font-semibold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          On this page
        </p>
        <div className="relative">
          <span
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: "var(--border-light)" }}
          />
          <span
            aria-hidden
            className="absolute left-0 w-[2px] rounded-full toc-bar"
            style={{
              top: bar.top,
              height: bar.height,
              background: "var(--primary)"
            }}
          />
          <ol ref={listRef} className="space-y-1 text-sm">
            {headings.map((h, i) => (
              <li key={h}>
                <a
                  href={`#${ids[i]}`}
                  aria-current={i === active ? "location" : undefined}
                  className="block pl-4 py-1 leading-snug transition-colors"
                  style={{
                    color:
                      i === active
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                    fontWeight: i === active ? 600 : 400
                  }}
                >
                  {h.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default ArticleToc;
