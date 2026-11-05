import { useEffect, useRef, useState } from "react";

// Plays a visual's CSS animation while it is on screen and pauses it when it
// scrolls away. Spread `ref` and `data-play` onto the visual's root.
export const useInViewPlay = <T extends HTMLElement>(threshold = 0.35) => {
  const ref = useRef<T>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setPlaying(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, "data-play": playing ? "true" : "false" } as const;
};
