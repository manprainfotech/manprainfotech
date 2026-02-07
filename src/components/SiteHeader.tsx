import Link from "next/link";
import { Container } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export default function SiteHeader() {
  return (
    <header className="pt-10">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] text-steel">
          MANPRA INFOTECH
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/#universe-map" className="text-sm font-semibold text-ink/70">
            Universe Map
          </Link>
          <Link href="/#local-availability" className="text-sm font-semibold text-ink/70">
            Local Availability
          </Link>
          <Link href="/products" className="text-sm font-semibold text-ink/70">
            Products
          </Link>
          <Link
            href="/#talk-to-human"
            className={buttonStyles({ variant: "secondary", size: "sm" })}
          >
            Talk to a human
          </Link>
        </nav>
      </Container>
    </header>
  );
}
