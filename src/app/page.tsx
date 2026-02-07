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

const heroTags = [
  "Instant delivery",
  "Genuine licenses",
  "Local support",
  "Secure payments",
];

const categoryTiles = [
  {
    id: "antivirus",
    title: "Antivirus & Renewals",
    description: "Protection that arrives before threats do.",
    meta: "Instant delivery, trusted vendors",
  },
  {
    id: "cctv",
    title: "CCTV & Physical Security",
    description: "Visibility that keeps homes and offices calm.",
    meta: "Local Tricity focus",
  },
  {
    id: "cloud",
    title: "IT & Cloud Subscriptions",
    description: "Workspaces that stay secure, fast, and compliant.",
    meta: "M365, Google Workspace",
  },
];

const universeEntries = [
  {
    id: "antivirus",
    title: "Antivirus & Renewals",
    subtitle: "Instant delivery, renewal-ready.",
    description:
      "Genuine licenses delivered by email and WhatsApp within minutes. Renewal reminders and activation help, included.",
    ctaLabel: "Browse antivirus",
    ctaHref: "/products",
    bullets: [
      "Original keys from trusted distributors",
      "Fast renewal support with GST invoices",
      "Guided activation when you need it",
    ],
  },
  {
    id: "cctv",
    title: "CCTV & Physical Security",
    subtitle: "Local expertise across Chandigarh and Tricity.",
    description:
      "Thoughtful camera selection, installation guidance, and maintenance planning for homes and offices.",
    ctaLabel: "Talk to an expert",
    ctaHref: "#talk-to-expert",
    bullets: [
      "Site assessment and placement advice",
      "Trusted brands and warranty planning",
      "Ongoing maintenance, no confusion",
    ],
  },
  {
    id: "cloud",
    title: "IT & Cloud Subscriptions",
    subtitle: "Modern work tools without the chaos.",
    description:
      "Microsoft 365, Google Workspace, and secure add-ons set up to keep teams productive and compliant.",
    ctaLabel: "Plan a workspace",
    ctaHref: "#talk-to-expert",
    bullets: [
      "Subscription planning and renewals",
      "Secure onboarding and migration help",
      "Global-ready admin guidance",
    ],
  },
];

const trustLayer = [
  {
    title: "Instant Delivery",
    description: "Keys and confirmations arrive within minutes.",
  },
  {
    title: "Genuine Licenses",
    description: "Only original, verified licenses.",
  },
  {
    title: "Local Support",
    description: "Chandigarh + Tricity based help.",
  },
  {
    title: "Secure Payments",
    description: "Protected checkout and clear invoices.",
  },
  {
    title: "Warranty & Renewal Support",
    description: "We help you stay protected year after year.",
  },
];

const futureHooks = [
  {
    title: "Auto Renewal Reminder",
    description: "Never miss a license expiry or service window.",
  },
  {
    title: "Warranty Expiry Alerts",
    description: "Stay ahead of coverage gaps with smart alerts.",
  },
  {
    title: "Talk to a Human Expert",
    description: "Direct access to someone who understands your setup.",
    id: "talk-to-expert",
  },
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
                  {heroTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-steel"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {categoryTiles.map((tile) => (
              <Link
                key={tile.id}
                href={`#${tile.id}`}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                    {tile.meta}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-ink">
                    {tile.title}
                  </h2>
                  <p className="mt-3 text-sm text-steel">{tile.description}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-ink">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {universeEntries.map((entry) => (
        <Section key={entry.id} className="pt-0">
          <Container>
            <div
              id={entry.id}
              className="grid gap-8 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-card lg:grid-cols-[0.6fr_0.4fr]"
            >
              <div>
                <Badge>Universe</Badge>
                <h2 className="mt-4 text-3xl font-semibold text-ink">
                  {entry.title}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-steel">
                  {entry.subtitle}
                </p>
                <p className="mt-4 text-sm text-steel">{entry.description}</p>
                <div className="mt-6">
                  <Link
                    href={entry.ctaHref}
                    className={buttonStyles({ variant: "secondary", size: "sm" })}
                  >
                    {entry.ctaLabel}
                  </Link>
                </div>
              </div>
              <Card className="bg-white/90">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-steel">
                  What we deliver
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-steel">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-neon">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container>
          <div className="flex flex-col gap-6">
            <div>
              <Badge>Trust layer</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Built for calm, built for trust.
              </h2>
              <p className="mt-3 text-sm text-steel">
                Everything we deliver is designed to remove uncertainty and keep
                your security simple.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {trustLayer.map((pillar) => (
                <Card key={pillar.title} className="p-5">
                  <h3 className="text-base font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel">
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-8 bg-gradient-to-br from-white via-white/70 to-neon/20">
            <div>
              <Badge>Coming next</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Automations that keep you protected.
              </h2>
              <p className="mt-3 text-sm text-steel">
                These tools are designed to reduce manual follow-ups and keep
                your protection uninterrupted.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {futureHooks.map((hook) => (
                <Card
                  key={hook.title}
                  className="bg-white/90"
                >
                  <div id={hook.id}>
                    <h3 className="text-lg font-semibold text-ink">
                      {hook.title}
                    </h3>
                    <p className="mt-2 text-sm text-steel">
                      {hook.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-6 bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <div>
              <h2 className="text-3xl font-semibold text-ink">
                One partner for digital and physical security.
              </h2>
              <p className="mt-3 text-lg text-steel">
                Whether you are renewing antivirus or planning new security
                infrastructure, we keep the experience premium and simple.
              </p>
            </div>
            <div>
              <Link href="/products" className={buttonStyles({ size: "lg" })}>
                Browse Antivirus Plans
              </Link>
            </div>
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
