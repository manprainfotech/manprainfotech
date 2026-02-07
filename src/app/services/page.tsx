import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "IT Services | Manpra Infotech",
  description:
    "CCTV installations, structured cabling, IT consulting, security audits, and enterprise projects delivered by Manpra Infotech across India.",
};

const services = [
  {
    title: "CCTV Installation",
    description:
      "Residential, commercial, and industrial deployments with clean cabling and warranty planning.",
  },
  {
    title: "Networking & Structured Cabling",
    description:
      "Reliable networks built for speed, uptime, and future expansion.",
  },
  {
    title: "IT Consulting",
    description:
      "On-demand experts for infrastructure planning, upgrades, and execution.",
  },
  {
    title: "Managed Services",
    description:
      "Ongoing monitoring, renewals, and operational support for IT stacks.",
  },
  {
    title: "Security Health Checks",
    description:
      "Identify vulnerabilities, compliance gaps, and renewal risks early.",
  },
  {
    title: "Enterprise & Government Projects",
    description:
      "Procurement-ready planning, documentation, and multi-site execution.",
  },
];

const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hello Manpra Infotech, I would like to talk to an engineer about services."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.description,
    })),
  };

  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Services</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            IT services built for Indian enterprises.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            Local execution, OEM-direct sourcing, and dependable support across
            CCTV, networking, managed services, and security audits.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title}>
                <h2 className="text-2xl font-semibold text-ink">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-steel">{service.description}</p>
                <a
                  href={whatsappLink}
                  className={buttonStyles({ variant: "secondary", size: "sm", className: "mt-5 inline-flex" })}
                >
                  Talk to an engineer
                </a>
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
                Need a custom deployment plan?
              </h2>
              <p className="mt-3 text-sm text-steel">
                Share your site details and we will prepare a structured plan
                with timelines, BOM, and support coverage.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink} className={buttonStyles({ size: "lg" })}>
                Talk to an engineer
              </a>
              <Link
                href="/locations"
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                See local hubs
              </Link>
            </div>
          </Card>
        </Container>
      </Section>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
