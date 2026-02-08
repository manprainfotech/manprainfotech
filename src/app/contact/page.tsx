import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact | Manpra Infotech",
  description:
    "Talk to Manpra Infotech for installations, OEM-direct sourcing, and IT security services. WhatsApp enabled support.",
};

const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hello Manpra Infotech, I would like to connect about services and installations."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Contact</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Talk to a human expert.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            Reach our local teams in Chandigarh and Panchkula for installations,
            renewals, and enterprise planning.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Card>
            <h2 className="text-2xl font-semibold text-ink">WhatsApp Enabled</h2>
            <p className="mt-3 text-sm text-steel">
              📞 +91 7009955770 — Fast response for site visits and project
              requests.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={whatsappLink} className={buttonStyles({ size: "lg" })}>
                Message on WhatsApp
              </a>
              <Link
                href="/locations"
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                View locations
              </Link>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-semibold text-ink">Chandigarh Hub</h2>
              <p className="mt-2 text-sm text-steel">
                Installation & Support Hub
              </p>
              <a
                href="https://share.google/10b79ZmSpnFKk7ctr"
                className="mt-4 inline-flex text-sm font-semibold text-ink"
              >
                View on Google Maps
              </a>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-ink">Panchkula Hub</h2>
              <p className="mt-2 text-sm text-steel">
                Operations & Projects Hub
              </p>
              <a
                href="https://share.google/v3yFFRT46lKt9MfRt"
                className="mt-4 inline-flex text-sm font-semibold text-ink"
              >
                View on Google Maps
              </a>
            </Card>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
