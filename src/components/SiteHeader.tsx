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
          <Link href="/products" className="text-sm font-semibold text-ink/70">
            Products
          </Link>
          <Link
            href="/health-check"
            className={buttonStyles({ variant: "secondary", size: "sm" })}
          >
            Health Check
          </Link>
        </nav>
      </Container>
    </header>
  );
}
