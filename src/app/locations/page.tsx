import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Locations | Manpra Infotech",
  description:
    "Local hubs in Chandigarh and Panchkula for installations, support, and IT projects. PAN-India delivery with OEM-direct sourcing.",
};

const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hello Manpra Infotech, I want to schedule a site visit or support call."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const locations = [
  {
    title: "Chandigarh",
    subtitle: "Installation & Support Hub",
    detail: "On-site deployment, hardware planning, and rapid response teams.",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Manpra+Infotech+Chandigarh",
  },
  {
    title: "Panchkula",
    subtitle: "Operations & Projects Hub",
    detail: "Project management, OEM coordination, and enterprise delivery.",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Manpra+Infotech+Panchkula",
  },
];

export default function LocationsPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Locations</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Local presence with PAN-India reach.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            We operate from Chandigarh and Panchkula to deliver fast, reliable
            installations and IT services across India.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <Card key={location.title}>
                <h2 className="text-2xl font-semibold text-ink">
                  {location.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-steel">
                  {location.subtitle}
                </p>
                <p className="mt-3 text-sm text-steel">{location.detail}</p>
                <a
                  href={location.mapLink}
                  className="mt-4 inline-flex text-sm font-semibold text-ink"
                >
                  View on Google Maps
                </a>
                <p className="mt-4 text-sm text-steel">
                  📞 +91 7009955770 · WhatsApp Enabled · Mon–Sat 9am–7pm
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-6 bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <div>
              <h2 className="text-3xl font-semibold text-ink">
                WhatsApp-enabled support
              </h2>
              <p className="mt-3 text-sm text-steel">
                📞 +91 7009955770 — Reach us for site visits, service requests,
                and project planning.
              </p>
            </div>
            <a href={whatsappLink} className={buttonStyles({ size: "lg" })}>
              Message on WhatsApp
            </a>
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
