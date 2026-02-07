import type React from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-mist px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel",
        className
      )}
    >
      {children}
    </span>
  );
}
