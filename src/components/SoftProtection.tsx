"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SoftProtection() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    // Soft deterrent only. This cannot prevent screenshots or recordings.
    const isProtected = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      if (target.closest("[data-protect]")) return true;
      const tag = target.tagName.toLowerCase();
      return tag === "img";
    };

    const handleContextMenu = (event: MouseEvent) => {
      if (!isProtected(event.target)) return;
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [pathname]);

  return null;
}
