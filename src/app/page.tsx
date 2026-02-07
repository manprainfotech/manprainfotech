import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Manpra Infotech | Instant Antivirus Licenses, Trusted Delivery",
  description:
    "Buy genuine antivirus licenses with instant email and WhatsApp delivery. Clear support, GST invoice, and premium protection for every device.",
  openGraph: {
    title: "Manpra Infotech | Instant Antivirus Licenses, Trusted Delivery",
    description:
      "Buy genuine antivirus licenses with instant email and WhatsApp delivery. Clear support, GST invoice, and premium protection for every device.",
    url: getSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Manpra Infotech | Instant Antivirus Licenses, Trusted Delivery",
    description:
      "Buy genuine antivirus licenses with instant email and WhatsApp delivery. Clear support, GST invoice, and premium protection for every device.",
  },
};

const trustPillars = [
  {
    title: "Instant Delivery",
    description: "Get your license within minutes.",
  },
  {
    title: "Genuine Licenses",
    description: "100% authentic keys from trusted vendors.",
  },
  {
    title: "WhatsApp Support",
    description: "Quick help when you need it.",
  },
  {
    title: "GST Invoice",
    description: "Business-ready billing.",
  },
];

const brands = [
  "Quick Heal",
  "Kaspersky",
  "McAfee",
  "Norton",
  "Bitdefender",
  "ESET",
  "Avast",
  "Sophos",
  "Trend Micro",
  "Malwarebytes",
];

const howItWorks = [
  {
    title: "Choose a plan",
    description: "Pick the device and term you need.",
  },
  {
    title: "Pay securely",
    description: "Fast checkout with instant confirmation.",
  },
  {
    title: "Get your key",
    description: "Delivered to email and WhatsApp.",
  },
];

const whyChoose = [
  "Verified sellers and original keys",
  "Instant delivery across India and worldwide",
  "Support that responds in minutes",
  "Transparent pricing with GST invoice",
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge>Digital Security</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Digital security. Delivered instantly.
              </h1>
              <p className="mt-6 text-lg text-steel">
                Premium antivirus licenses with fast delivery by email and
                WhatsApp. Genuine keys. Clear support.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className={buttonStyles({ size: "lg" })}
                >
                  Browse Products
                </Link>
                <Link
                  href="/health"
                  className={buttonStyles({ variant: "secondary", size: "lg" })}
                >
                  Health Check
                </Link>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-steel">
                GST invoice available. Secure checkout. Global delivery.
              </p>
            </div>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/40 to-aurora/40" />
              <div className="relative">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-steel">
                  Trusted by teams
                </h2>
                <p className="mt-4 text-2xl font-semibold text-ink">
                  Protection that feels effortless.
                </p>
                <p className="mt-3 text-sm text-steel">
                  You are protected in minutes. No noise. No delays. Just real
                  security that lets you move on.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {trustPillars.map((pillar) => (
                    <span
                      key={pillar.title}
                      className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-steel"
                    >
                      {pillar.title}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <Card key={pillar.title} className="p-6">
                <h3 className="text-base font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="rounded-3xl border border-white/70 bg-white/70 px-6 py-10 shadow-card">
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-steel">
              Trusted by global antivirus brands
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-steel">
              {brands.map((brand) => (
                <span key={brand} className="rounded-full bg-white/80 px-4 py-2">
                  {brand}
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-steel/70">
              Logos used for brand recognition only.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div>
              <Badge>How it works</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Secure in three simple steps
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {howItWorks.map((step, index) => (
                <Card key={step.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
            <div>
              <Badge>Why Manpra</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Why choose Manpra Infotech
              </h2>
              <p className="mt-4 text-lg text-steel">
                Security should feel simple. We deliver real licenses fast, with
                clear support and honest pricing. No noise. Just protection.
              </p>
            </div>
            <Card>
              <ul className="space-y-3 text-sm text-steel">
                {whyChoose.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-neon">●</span>
                    <span>{item}</span>
                  </li>
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
                Protection that respects your time
              </h2>
              <p className="mt-3 text-lg text-steel">
                No delays. No confusion. Get protected in minutes and move on
                with confidence.
              </p>
            </div>
            <div>
              <Link href="/products" className={buttonStyles({ size: "lg" })}>
                Browse Products
              </Link>
            </div>
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
