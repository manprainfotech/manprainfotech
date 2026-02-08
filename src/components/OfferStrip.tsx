"use client";

import { useState } from "react";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const offerCode = "MANPRA10";

export default function OfferStrip() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(offerCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-steel">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
            {offerCode}
          </span>
          <span>Instant Delivery</span>
          <span>WhatsApp Support</span>
          <span>GST Invoice</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopy}
            className={buttonStyles({ variant: "secondary", size: "sm" })}
          >
            Copy Code
          </button>
          <a
            href="https://wa.me/917009955770"
            className={buttonStyles({ size: "sm" })}
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute right-6 top-14 rounded-full bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white shadow-card transition",
          copied ? "opacity-100" : "opacity-0"
        )}
      >
        Coupon Copied
      </div>
    </div>
  );
}
