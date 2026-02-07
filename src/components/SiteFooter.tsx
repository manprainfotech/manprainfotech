import Link from "next/link";
import { Container } from "@/components/ui";

const services = [
  "CCTV Installation",
  "Networking & Cabling",
  "IT Consulting",
  "Security Audits",
  "Enterprise Projects",
];

const locations = [
  "Chandigarh – Installation & Support Hub",
  "Panchkula – Operations & Projects Hub",
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/70 py-14">
      <Container>
        <div className="grid gap-10 text-sm text-steel md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
              Manpra Infotech Pvt. Ltd.
            </p>
            <p className="mt-3 text-sm text-steel">
              India-based IT security and installation partner. OEM-direct,
              locally present, and built for long-term trust.
            </p>
            <p className="mt-4 text-sm font-semibold text-ink">
              WhatsApp: +91 7009955770
            </p>
            <p className="mt-2 text-xs text-steel/70">
              Make in India — Initiative Partner
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
              Services
            </p>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
              Locations
            </p>
            <ul className="mt-3 space-y-2">
              {locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
            <Link href="/locations" className="mt-4 inline-flex text-xs font-semibold text-ink">
              View locations
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
              Company
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/about" className="hover:text-ink">
                About Manpra
              </Link>
              <Link href="/services" className="hover:text-ink">
                Services
              </Link>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
              <Link href="/knowledge-hub" className="hover:text-ink">
                Knowledge Hub
              </Link>
              <Link href="/brands" className="hover:text-ink">
                Brands
              </Link>
              <Link href="/privacy" className="hover:text-ink">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-ink">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-steel/70">
          Built in India. Designed for enterprises that value trust, compliance,
          and human support.
        </p>
      </Container>
    </footer>
  );
}
