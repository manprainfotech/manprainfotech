import type React from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}
