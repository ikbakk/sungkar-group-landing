import { useState, useEffect, useCallback, useRef } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { getImageSrc, type ImageSource } from "@/lib/images";

interface Props {
  images: ImageSource[];
  initialIndex?: number;
}

export default function PackageGallery({ images, initialIndex = 0 }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(initialIndex);
  const touchStartX = useRef(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  useEffect(() => {
    const triggers = document.querySelectorAll("[data-image-index]");
    const handlers: Array<() => void> = [];
    triggers.forEach((el) => {
      const handler = () => {
        const index = parseInt(el.getAttribute("data-image-index") || "0", 10);
        setCurrent(index);
        setOpen(true);
      };
      el.addEventListener("click", handler);
      handlers.push(handler);
    });
    return () => {
      triggers.forEach((el, i) => {
        el.removeEventListener("click", handlers[i]);
      });
    };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-60 bg-black/90 data-open:animate-fade-in data-close:animate-fade-out" />
        <Dialog.Popup className="fixed inset-0 z-61 flex flex-col items-center justify-center outline-none">
          {/* Top bar */}
          <div className="absolute right-4 top-4 z-10 flex items-center gap-3">
            {images.length > 1 && (
              <span className="text-sm font-medium text-white/70">
                {current + 1} / {images.length}
              </span>
            )}
            <Dialog.Close className="flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Dialog.Close>
          </div>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Previous image"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="flex max-h-[70vh] max-w-[90vw] items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={getImageSrc(images[current])}
              alt={`${current + 1} of ${images.length}`}
              className="max-h-[70vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:right-20"
              aria-label="Next image"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 overflow-x-auto px-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`shrink-0 size-14 overflow-hidden rounded-md border-2 transition-all focus-visible:outline-none ${
                    i === current
                      ? "border-white opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={getImageSrc(img)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
