"use client";

import { useEffect, useState } from "react";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const offers = [
  "MANPRA10 10% OFF",
  "Instant Key Delivery (Email + WhatsApp)",
  "OEM-direct + GST invoice",
  "Activation support included",
];

export default function OfferStrip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-steel">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-[pulseSoft_2.8s_ease-in-out_infinite]" />
            Live
          </span>
          <div className="relative h-4 overflow-hidden">
            {offers.map((offer, idx) => (
              <span
                key={offer}
                className={cn(
                  "absolute left-0 top-0 transition-all duration-500",
                  idx === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                )}
              >
                {offer}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://wa.me/917009955770"
            className={buttonStyles({ variant: "secondary", size: "sm" })}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
