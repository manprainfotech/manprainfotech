"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { buttonStyles } from "@/components/ui/Button";

const slides = [
  {
    title: "Antivirus Mega Sale — Use MANPRA10 (10% OFF)",
    subtitle: "Genuine keys in minutes. Instant delivery on email + WhatsApp.",
    ctaPrimary: "Shop Now",
    ctaPrimaryHref: "/products",
    ctaSecondary: "WhatsApp",
    ctaSecondaryHref: "https://wa.me/917009955770",
  },
  {
    title: "Renewal Due? Get Auto Reminders + Priority Support",
    subtitle: "We alert before expiry and keep every license visible.",
    ctaPrimary: "Shop Now",
    ctaPrimaryHref: "/products",
    ctaSecondary: "WhatsApp",
    ctaSecondaryHref: "https://wa.me/917009955770",
  },
  {
    title: "OEM-Direct • GST Invoice • WhatsApp Support",
    subtitle: "India-born marketplace for security, installs, and IT projects.",
    ctaPrimary: "Shop Now",
    ctaPrimaryHref: "/products",
    ctaSecondary: "WhatsApp",
    ctaSecondaryHref: "https://wa.me/917009955770",
  },
];

export default function PromoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-card">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-aurora/30" />
      <div className="relative p-6 sm:p-8">
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
            <h1 className="text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
              {slide.title}
            </h1>
            <p className="mt-3 text-sm text-steel sm:text-base">
              {slide.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={slide.ctaPrimaryHref}
                className={buttonStyles({ size: "lg" })}
              >
                {slide.ctaPrimary}
              </a>
              <a
                href={slide.ctaSecondaryHref}
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                {slide.ctaSecondary}
              </a>
            </div>
          </div>
        ))}
        <div className="mt-5 flex items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.title}
              onClick={() => setIndex(idx)}
              className={cn(
                "h-2 w-2 rounded-full transition",
                idx === index ? "bg-ink" : "bg-ink/20"
              )}
              aria-label={`Promo slide ${idx + 1}`}
            />
          ))}
          <span className="ml-3 text-xs uppercase tracking-[0.2em] text-steel">
            {index + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}
