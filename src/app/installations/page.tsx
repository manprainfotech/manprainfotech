import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Installations | CCTV, Networking, IT Projects",
  description:
    "Manpra Infotech delivers CCTV, networking, and IT project installations with local teams across Chandigarh, Panchkula, and PAN India.",
};

const installs = [
  {
    title: "CCTV & Surveillance",
    description:
      "Site surveys, OEM hardware, clean installation, and warranty-backed support.",
  },
  {
    title: "Networking & Structured Cabling",
    description:
      "LAN/WAN planning, racks, switches, fiber, and structured cabling for reliability.",
  },
  {
    title: "IT Projects",
    description:
      "Enterprise rollouts, multi-site deployments, and government-grade documentation.",
  },
];

const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hello Manpra Infotech, I want to discuss an installation project."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function InstallationsPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Installations</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            On-ground teams for critical installations.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            Local teams in Chandigarh and Panchkula, with PAN India execution for
            CCTV, networking, and IT infrastructure projects.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {installs.map((item) => (
              <Card key={item.title}>
                <h2 className="text-2xl font-semibold text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-steel">{item.description}</p>
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
                From survey to handover, we own the outcome.
              </h2>
              <p className="mt-3 text-sm text-steel">
                Every deployment includes documentation, warranty planning, and
                dedicated engineers.
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
                View locations
              </Link>
            </div>
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
