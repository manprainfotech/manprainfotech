import Link from "next/link";
import { Container } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export default function SiteHeader() {
  return (
    <header className="pt-8">
      <Container className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.3em] text-steel"
          >
            MANPRA INFOTECH
          </Link>
          <a
            href="https://wa.me/917009955770"
            className={buttonStyles({ variant: "secondary", size: "sm" })}
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
          <div className="relative w-full lg:max-w-[320px]">
            <input
              placeholder="Search antivirus, renewals, devices"
              className="w-full rounded-full border border-mist bg-white/80 px-4 py-2 text-sm text-ink shadow-card"
            />
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
            <Link href="/products" className="text-ink">
              Products
            </Link>
            <Link href="/renewals">Renewals</Link>
            <Link href="/services">Services</Link>
            <Link href="/installations">Installations</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/knowledge-hub">Knowledge Hub</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/contact">Contact</Link>
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
      </Container>
    </header>
  );
}
