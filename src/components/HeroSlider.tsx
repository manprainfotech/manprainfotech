"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type Slide = {
  title: string;
  description: string;
};

type HeroSliderProps = {
  slides: Slide[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [total]);

  const current = useMemo(() => slides[index], [slides, index]);

  return (
    <div className="relative">
      <div className="relative min-h-[170px]">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={cn(
              "absolute inset-0 transition-all duration-500",
              idx === index
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0 pointer-events-none"
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
              Offer pulse
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
              {slide.title}
            </h2>
            <p className="mt-3 text-sm text-steel">{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.title}
            onClick={() => setIndex(idx)}
            className={cn(
              "h-2 w-2 rounded-full transition",
              idx === index ? "bg-ink" : "bg-ink/20"
            )}
            aria-label={`View slide ${idx + 1}`}
          />
        ))}
        <span className="ml-3 text-xs text-steel">
          {index + 1} / {total} — {current.title}
        </span>
      </div>
    </div>
  );
}
