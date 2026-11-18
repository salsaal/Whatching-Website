import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { youtubeEmbedUrl } from "@/lib/data/video";

// Shows a poster (or the YouTube thumbnail) and a play button; the YouTube
// player only loads on click, so the video adds no third-party script to the
// page load.
const YouTubeLite = ({
  id,
  title,
  thumbnail,
  poster,
  label = "Watch the demo",
  priority = false
}: {
  id: string;
  title: string;
  thumbnail?: string;
  /** A drawn poster to show instead of the thumbnail. It carries its own play button. */
  poster?: React.ReactNode;
  label?: string;
  priority?: boolean;
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full aspect-video overflow-hidden rounded-2xl"
      style={{
        // Matches the drawn poster so no dark edge shows at the corners.
        background: poster && !playing ? "#e6f4ec" : "var(--text-primary)",
        border: "1px solid var(--border-light)",
        boxShadow: "0 30px 70px -30px rgba(10,18,14,0.28)"
      }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={youtubeEmbedUrl(id, { autoplay: true })}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label={`Play video: ${title}`}
        >
          {poster}
          {!poster && thumbnail && (
            <Image
              src={thumbnail}
              alt=""
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              priority={priority}
              className="object-cover"
            />
          )}
          {/* Kept in the corner so it never covers the thumbnail's own text. */}
          {!poster && (
            <span
              className="absolute left-3 bottom-3 sm:left-5 sm:bottom-5 inline-flex items-center gap-2 rounded-full pl-2 pr-4 py-2 text-sm font-semibold text-white transition-transform group-hover:scale-105"
              style={{
                background: "var(--primary)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Play
                  className="w-3.5 h-3.5 translate-x-px"
                  fill="currentColor"
                />
              </span>
              {label}
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default YouTubeLite;
