import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Manpra Infotech | OEM-Direct Indian IT Partner",
  description:
    "Manpra Infotech is an India-based, mission-driven IT security and installations company serving PAN India with OEM-direct sourcing and local delivery teams.",
};

const focusAreas = [
  "Digital Security (Antivirus, Endpoint)",
  "CCTV & Surveillance",
  "Networking & IT Consulting",
  "Enterprise & Government Projects",
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>About Manpra</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            An India-first company built for long-term trust.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-steel">
            Manpra Infotech is founded in India and serves PAN India with a
            simple promise: OEM-direct sourcing, honest guidance, and support
            that stays with you after the installation.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]">
            <Card>
              <h2 className="text-2xl font-semibold text-ink">
                OEM-direct, never anonymous
              </h2>
              <p className="mt-3 text-sm text-steel">
                We work directly with OEMs and authorized distributors. No
                anonymous marketplace sourcing. That means cleaner warranties,
                reliable licensing, and faster escalation when you need it.
              </p>
              <p className="mt-4 text-sm text-steel">
                We are an initiative partner aligned with Make in India and
                operate with an India-first mindset—professional, transparent,
                and deeply local.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-steel">
                Focus areas
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-6 bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <div>
              <h2 className="text-3xl font-semibold text-ink">
                Built in India. Trusted across India.
              </h2>
              <p className="mt-3 text-sm text-steel">
                We bring enterprise-level care to every deployment—from small
                offices to government and multi-location rollouts.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className={buttonStyles({ size: "lg" })}>
                Explore services
              </Link>
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
