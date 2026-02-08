"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SoftProtection() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    // Soft deterrent only. This cannot prevent screenshots or screen recording.
    const shouldAllow = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      const tag = target.tagName.toLowerCase();
      if (["input", "textarea", "select"].includes(tag)) return true;
      if (target.isContentEditable) return true;
      return false;
    };

    const handleContextMenu = (event: MouseEvent) => {
      if (shouldAllow(event.target)) return;
      event.preventDefault();
    };

    const handleSelectStart = (event: Event) => {
      if (shouldAllow(event.target)) return;
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, [pathname]);

  return null;
}
