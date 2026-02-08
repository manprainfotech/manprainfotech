"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const slides = [
  {
    title: "Antivirus delivered instantly",
    subtitle:
      "Email + WhatsApp delivery in minutes. Genuine keys. GST invoice.",
    ctaLabel: "Shop Antivirus",
    ctaHref: "/products",
  },
  {
    title: "Virus alert / threat detected",
    subtitle: "Fix threats fast with OEM-direct protection.",
    ctaLabel: "Fix Now",
    ctaHref: "/products",
  },
  {
    title: "Renewal Due? Auto reminders + priority support",
    subtitle: "We alert before expiry and keep protection live.",
    ctaLabel: "View Renewals",
    ctaHref: "/products?tab=renewals",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    startX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? startX.current;
    const diff = startX.current - endX;
    if (diff > 50) {
      setIndex((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    startX.current = null;
  };

  return (
    <div
      className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={cn(
              "transition-all duration-500",
              idx === index
                ? "opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 translate-y-2"
            )}
          >
            <h1 className="text-3xl font-semibold text-ink sm:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-4 text-sm text-steel sm:text-base">
              {slide.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={slide.ctaHref}
                className={buttonStyles({ size: "lg", className: "w-full sm:w-auto" })}
              >
                {slide.ctaLabel}
              </Link>
              <a
                href="https://wa.me/917009955770"
                className={buttonStyles({
                  variant: "secondary",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        ))}
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
        </div>
      </div>

      <div className="relative" data-protect>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-white/50 to-aurora/40" />
        <div className="relative rounded-3xl border border-white/70 bg-white/70 p-6 shadow-card">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Best Seller
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-steel">
              2–5 mins delivery
            </span>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Image
              src="/hero-lock.svg"
              alt="Security lock"
              width={220}
              height={220}
              className="animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
          <div className="relative mt-6 rounded-2xl bg-ink/95 p-4 text-white">
            <span className="absolute right-4 top-3 text-[10px] uppercase tracking-[0.2em] text-white/60">
              MANPRA VERIFIED
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Instant delivery
            </p>
            <p className="mt-2 text-base font-semibold">Email + WhatsApp key</p>
          </div>
          <div className="pointer-events-none absolute inset-0">
            <span className="absolute left-6 top-10 h-2 w-2 rounded-full bg-aurora/80 animate-[pulseSoft_5s_ease-in-out_infinite]" />
            <span className="absolute right-10 top-16 h-1.5 w-1.5 rounded-full bg-neon/70 animate-[pulseSoft_6s_ease-in-out_infinite]" />
            <span className="absolute left-16 bottom-16 h-1.5 w-1.5 rounded-full bg-ink/20 animate-[pulseSoft_7s_ease-in-out_infinite]" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.8em] text-ink/10">
              MANPRA INFOTECH
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
