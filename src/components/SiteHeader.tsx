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
        <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
          <Link href="/about">About Manpra</Link>
          <Link href="/services">Services</Link>
          <Link href="/installations">Installations</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/knowledge-hub">Knowledge Hub</Link>
          <Link href="/locations">Contact / Locations</Link>
          <Link
            href="https://wa.me/917009955770"
            className={buttonStyles({
              variant: "secondary",
              size: "sm",
              className: "normal-case tracking-normal text-ink",
            })}
          >
            WhatsApp: +91 7009955770
          </Link>
        </nav>
      </Container>
    </header>
  );
}
