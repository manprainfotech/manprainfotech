import type React from "react";
import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
