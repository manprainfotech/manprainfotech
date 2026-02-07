import type React from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Section({ className, children }: SectionProps) {
  return <section className={cn("py-14 md:py-20", className)}>{children}</section>;
}
