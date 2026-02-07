import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Manpra Infotech | OEM-Direct IT Security & Installations",
  description:
    "Manpra Infotech is an India-based, OEM-direct IT security and installations partner. Local teams in Chandigarh and Panchkula, PAN-India delivery, and enterprise-grade trust.",
  openGraph: {
    title: "Manpra Infotech | OEM-Direct IT Security & Installations",
    description:
      "Manpra Infotech is an India-based, OEM-direct IT security and installations partner. Local teams in Chandigarh and Panchkula, PAN-India delivery, and enterprise-grade trust.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Manpra Infotech | OEM-Direct IT Security & Installations",
    description:
      "Manpra Infotech is an India-based, OEM-direct IT security and installations partner. Local teams in Chandigarh and Panchkula, PAN-India delivery, and enterprise-grade trust.",
  },
};

const trustLayer = [
  { title: "GST Registered", detail: "Clean billing and compliance." },
  { title: "MSME Verified", detail: "Government-recognized operations." },
  { title: "OEM-Direct", detail: "No anonymous marketplace sourcing." },
  { title: "Local Offices", detail: "Chandigarh + Tricity presence." },
  { title: "Google Presence", detail: "Real reviews and visibility." },
];

const memoryBlocks = [
  {
    title: "We remember your stack",
    value: "Office laptops • 12 seats",
    detail: "Last renewal synced 3 months ago.",
  },
  {
    title: "Warranty window",
    value: "8 months left",
    detail: "We will alert you before it expires.",
  },
  {
    title: "OEM sourcing",
    value: "Direct partners",
    detail: "Verified OEM channels, no grey market.",
  },
];

const flowSteps = [
  {
    title: "Devices",
    description: "Every endpoint mapped and tagged.",
  },
  {
    title: "Licenses",
    description: "Original keys assigned with clarity.",
  },
  {
    title: "Renewals",
    description: "Always-on reminders and support.",
  },
];

const roadmap = [
  {
    title: "OEM integrations",
    description: "New OEM programs onboarding continuously.",
  },
  {
    title: "Fleet intelligence",
    description: "Real-time renewal intelligence dashboards.",
  },
  {
    title: "Field services",
    description: "On-site installation scheduling and alerts.",
  },
];

const locations = [
  {
    title: "Chandigarh",
    detail: "Installation & Support Hub",
  },
  {
    title: "Panchkula",
    detail: "Operations & Projects Hub",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Manpra Infotech Pvt. Ltd.",
        url: siteUrl,
        telephone: "+91 7009955770",
        areaServed: ["Chandigarh", "Panchkula", "Mohali", "India"],
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "Chandigarh",
        },
      },
      {
        "@type": "Service",
        name: "CCTV Installation",
        provider: { "@type": "LocalBusiness", name: "Manpra Infotech Pvt. Ltd." },
        areaServed: "India",
      },
      {
        "@type": "Service",
        name: "Networking & Structured Cabling",
        provider: { "@type": "LocalBusiness", name: "Manpra Infotech Pvt. Ltd." },
        areaServed: "India",
      },
    ],
  };

  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge>Manpra IT Universe</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                A living IT security system for modern India.
              </h1>
              <p className="mt-6 text-lg text-steel">
                OEM-direct sourcing, local installation teams, and renewal
                intelligence designed for enterprises and governments.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className={buttonStyles({ size: "lg" })}
                >
                  Talk to an engineer
                </Link>
                <Link
                  href="/#universe-map"
                  className={buttonStyles({ variant: "secondary", size: "lg" })}
                >
                  View the universe
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-steel">
                <span className="rounded-full bg-white/70 px-4 py-2">
                  Chandigarh
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2">
                  Panchkula
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2">PAN India</span>
              </div>
            </div>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-aurora/40" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                    System pulse
                  </p>
                  <span className="h-2 w-2 rounded-full bg-neon animate-[pulseSoft_4s_ease-in-out_infinite]" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-ink">
                  Living protection, always on.
                </h2>
                <p className="mt-3 text-sm text-steel">
                  Devices, renewals, and human support syncing in real time.
                </p>
                <div className="relative mt-6 h-40 rounded-2xl bg-ink/95 p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,246,255,0.18),transparent_55%)]" />
                  <span className="absolute left-6 top-6 h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_16px_rgba(110,241,183,0.7)] animate-[pulseSoft_5s_ease-in-out_infinite]" />
                  <span className="absolute left-20 top-20 h-2 w-2 rounded-full bg-aurora animate-[pulseSoft_6s_ease-in-out_infinite]" />
                  <span className="absolute right-8 top-10 h-2.5 w-2.5 rounded-full bg-white/80 animate-[pulseSoft_7s_ease-in-out_infinite]" />
                  <span className="absolute bottom-8 left-12 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <span className="absolute bottom-10 right-14 h-1.5 w-1.5 rounded-full bg-white/60" />
                  <div className="absolute left-8 top-10 h-[1px] w-20 bg-white/20" />
                  <div className="absolute left-20 top-20 h-[1px] w-28 bg-white/15" />
                  <div className="absolute right-14 top-12 h-16 w-[1px] bg-white/15" />
                  <div className="absolute bottom-8 left-12 h-12 w-[1px] bg-white/10" />
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-steel">
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    23 active nodes
                  </span>
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    Renewal horizon: 62 days
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {memoryBlocks.map((block) => (
              <Card key={block.title} className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                    {block.title}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">
                    {block.value}
                  </h3>
                  <p className="mt-2 text-sm text-steel">{block.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div
            id="universe-map"
            className="grid gap-10 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-card lg:grid-cols-[0.6fr_0.4fr]"
          >
            <div>
              <Badge>IT Security Universe Map</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Everything connected. Nothing forgotten.
              </h2>
              <p className="mt-4 text-sm text-steel">
                Devices, licenses, renewals, and on-ground teams move together in
                one living system.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-steel">
                <span className="rounded-full bg-white/70 px-3 py-1">
                  Live device graph
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1">
                  Renewal intelligence
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1">
                  OEM direct
                </span>
              </div>
            </div>
            <Card className="relative overflow-hidden bg-ink text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,246,255,0.15),transparent_55%)]" />
              <div className="relative h-56">
                <span className="absolute left-6 top-6 h-2 w-2 rounded-full bg-neon animate-[pulseSoft_6s_ease-in-out_infinite]" />
                <span className="absolute left-16 top-24 h-2 w-2 rounded-full bg-aurora animate-[pulseSoft_7s_ease-in-out_infinite]" />
                <span className="absolute right-10 top-12 h-2 w-2 rounded-full bg-white/70 animate-[pulseSoft_8s_ease-in-out_infinite]" />
                <span className="absolute right-16 bottom-10 h-2 w-2 rounded-full bg-white/50" />
                <span className="absolute left-12 bottom-12 h-2 w-2 rounded-full bg-white/50" />
                <div className="absolute left-8 top-8 h-[1px] w-20 bg-white/20" />
                <div className="absolute left-16 top-24 h-[1px] w-28 bg-white/15" />
                <div className="absolute right-12 top-14 h-24 w-[1px] bg-white/10" />
                <div className="absolute left-12 bottom-12 h-16 w-[1px] bg-white/10" />
              </div>
              <p className="relative text-xs text-white/70">
                Map pulses as assets and renewals sync.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {flowSteps.map((step, index) => (
              <Card key={step.title} className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{step.description}</p>
                {index < flowSteps.length - 1 ? (
                  <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-sm text-steel/60 md:block">
                    →
                  </span>
                ) : null}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div
            id="local-availability"
            className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]"
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-aurora/30 animate-[drift_14s_ease-in-out_infinite]" />
              <div className="relative">
                <Badge>Local availability</Badge>
                <h2 className="mt-4 text-3xl font-semibold text-ink">
                  Chandigarh + Panchkula on-ground teams.
                </h2>
                <p className="mt-4 text-sm text-steel">
                  Installation crews, service engineers, and project leads ready
                  for site visits and enterprise rollouts.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-steel">
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    On-site availability
                  </span>
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    30 min response
                  </span>
                </div>
              </div>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-steel">
                Hubs
              </h3>
              <div className="mt-6 space-y-4 text-sm text-steel">
                {locations.map((location) => (
                  <div key={location.title}>
                    <p className="text-base font-semibold text-ink">
                      {location.title}
                    </p>
                    <p className="text-sm text-steel">{location.detail}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/locations"
                className="mt-6 inline-flex text-sm font-semibold text-ink"
              >
                View locations
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {trustLayer.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{item.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-8 bg-gradient-to-br from-white via-white/70 to-neon/20">
            <div>
              <Badge>Roadmap</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Built for OEMs and enterprise scale.
              </h2>
              <p className="mt-3 text-sm text-steel">
                We are building a future-ready stack where OEMs, engineers, and
                enterprises stay connected.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {roadmap.map((item) => (
                <Card key={item.title} className="bg-white/90">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-ink">{item.description}</p>
                </Card>
              ))}
            </div>
            <div id="talk-to-human">
              <Link href="/contact" className={buttonStyles({ size: "lg" })}>
                Start a conversation
              </Link>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-6 bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <div>
              <h2 className="text-3xl font-semibold text-ink">
                India-first, enterprise-ready, and deeply local.
              </h2>
              <p className="mt-3 text-lg text-steel">
                We combine OEM-direct sourcing with on-ground execution and
                long-term support.
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
                See local availability
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
