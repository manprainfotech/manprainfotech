"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

const navItems = [
  { href: "/products", label: "Products", highlight: true },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/installations", label: "Installations" },
  { href: "/brands", label: "Brands" },
  { href: "/knowledge-hub", label: "Knowledge Hub" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pt-8">
      <Container className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.3em] text-steel"
          >
            MANPRA INFOTECH
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917009955770"
              className={buttonStyles({ variant: "secondary", size: "sm" })}
            >
              WhatsApp
            </a>
            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex items-center justify-center rounded-full border border-mist bg-white/80 p-2 shadow-card lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 text-ink"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="relative flex-1 max-w-[360px]">
            <input
              placeholder="Search antivirus, renewals, devices"
              className="w-full rounded-full border border-mist bg-white/80 px-4 py-2 text-sm text-ink shadow-card"
            />
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.highlight ? "text-ink" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-full border border-mist bg-white/80 p-2 shadow-card"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5 text-ink"
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M6 6L4 3H2" />
            </svg>
          </button>
        </div>

        {open ? (
          <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-card lg:hidden">
            <div className="mb-4">
              <input
                placeholder="Search antivirus, renewals, devices"
                className="w-full rounded-full border border-mist bg-white/80 px-4 py-2 text-sm text-ink"
              />
            </div>
            <nav className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
