/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ProjectGalleryCarouselProps = {
  images: string[];
  title: string;
};

export default function ProjectGalleryCarousel({
  images,
  title,
}: ProjectGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const prev = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const next = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative rounded-xl overflow-hidden border border-border bg-card">
        <img
          src={images[activeIndex]}
          alt={`${title} gallery ${activeIndex + 1}`}
          className="w-full h-[360px] sm:h-[420px] object-contain bg-muted/30"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-9 rounded-full border border-border bg-background/90 backdrop-blur text-foreground hover:bg-accent transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-9 rounded-full border border-border bg-background/90 backdrop-blur text-foreground hover:bg-accent transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((imageSrc, idx) => (
            <button
              key={`${imageSrc}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "overflow-hidden rounded-lg border border-border bg-card",
                idx === activeIndex && "ring-2 ring-primary"
              )}
              aria-label={`Go to image ${idx + 1}`}
            >
              <img
                src={imageSrc}
                alt={`${title} thumbnail ${idx + 1}`}
                className="w-full h-16 object-contain bg-muted/30"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
