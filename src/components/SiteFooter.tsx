import Link from "next/link";
import { Container } from "@/components/ui";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/70 py-12">
      <Container className="flex flex-col gap-6 text-sm text-steel md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-6">
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          <Link href="/support" className="hover:text-ink">
            Support
          </Link>
        </div>
        <p className="text-xs text-steel/70">
          Manpra Infotech — Premium digital security, delivered instantly.
        </p>
      </Container>
    </footer>
  );
}
