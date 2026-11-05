import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { youtubeEmbedUrl } from "@/lib/data/video";

// Widescreen pop-up player. The iframe only exists while the dialog is open,
// so closing it (button, Esc or a tap outside) stops the video.
const VideoDialog = ({
  open,
  onOpenChange,
  videoId,
  title
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId: string;
  title: string;
}) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/85" />
      <DialogPrimitive.Content
        className="fixed left-1/2 top-1/2 z-[101] w-full sm:w-[min(1100px,calc(100vw-48px))] -translate-x-1/2 -translate-y-1/2 outline-none"
        aria-describedby={undefined}
      >
        <DialogPrimitive.Title className="sr-only">
          {title}
        </DialogPrimitive.Title>
        <div className="flex justify-end px-3 sm:px-0 pb-3">
          <DialogPrimitive.Close
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ background: "rgba(255,255,255,0.14)" }}
          >
            <X className="w-4 h-4" aria-hidden /> Close
          </DialogPrimitive.Close>
        </div>
        <div className="relative w-full aspect-video bg-black sm:rounded-2xl overflow-hidden">
          {open && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={youtubeEmbedUrl(videoId, { autoplay: true })}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

export default VideoDialog;
