import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

const siteUrl = getSiteUrl();
const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hello Manpra Infotech, I need OEM-direct security and IT services."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Manpra Infotech — OEM-direct Digital Security + IT Services",
  description:
    "Manpra Infotech is an India-based OEM-direct IT security and installations partner. Digital security, CCTV, networking, and IT projects with local teams in Chandigarh and Panchkula.",
  openGraph: {
    title: "Manpra Infotech — OEM-direct Digital Security + IT Services",
    description:
      "Manpra Infotech is an India-based OEM-direct IT security and installations partner. Digital security, CCTV, networking, and IT projects with local teams in Chandigarh and Panchkula.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Manpra Infotech — OEM-direct Digital Security + IT Services",
    description:
      "Manpra Infotech is an India-based OEM-direct IT security and installations partner. Digital security, CCTV, networking, and IT projects with local teams in Chandigarh and Panchkula.",
  },
};

const pillars = [
  {
    title: "Digital Security",
    description: "Antivirus, endpoint, renewals, and audit-ready reporting.",
    points: ["OEM-direct licensing", "Instant renewals", "Health checks"],
  },
  {
    title: "CCTV + Networking Installations",
    description: "Site surveys, clean cabling, and warranty-backed support.",
    points: ["On-ground teams", "Structured cabling", "Post-install care"],
  },
  {
    title: "IT Consulting + Projects",
    description: "Enterprise upgrades, managed services, and rollout planning.",
    points: ["Project governance", "PAN India delivery", "OEM escalation"],
  },
];

const trustStrip = [
  "Direct OEM + Manpra Team",
  "GST Invoice",
  "WhatsApp Support",
  "PAN India",
];

const trustLayer = [
  { title: "GST Registered", detail: "Compliance-ready billing." },
  { title: "MSME Verified", detail: "Recognized Indian enterprise." },
  { title: "OEM-Direct", detail: "No anonymous marketplace sourcing." },
  { title: "Local Offices", detail: "Chandigarh + Panchkula teams." },
];

const locations = [
  {
    title: "Chandigarh Hub",
    detail: "Installation & support teams on ground.",
  },
  {
    title: "Panchkula Hub",
    detail: "Operations & projects execution center.",
  },
];

const roadmap = [
  {
    title: "OEM integrations",
    description: "OEM partners onboarding continuously across categories.",
  },
  {
    title: "Enterprise monitoring",
    description: "Renewal and warranty intelligence across sites.",
  },
  {
    title: "Field automation",
    description: "Installations, audits, and support workflows unified.",
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
        name: "Digital Security",
        provider: { "@type": "LocalBusiness", name: "Manpra Infotech Pvt. Ltd." },
        areaServed: "India",
      },
      {
        "@type": "Service",
        name: "CCTV & Networking Installations",
        provider: { "@type": "LocalBusiness", name: "Manpra Infotech Pvt. Ltd." },
        areaServed: "India",
      },
      {
        "@type": "Service",
        name: "IT Consulting & Projects",
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
              <Badge>OEM-Direct IT Security</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Manpra Infotech — OEM-direct Digital Security + IT Services
              </h1>
              <p className="mt-6 text-lg text-steel">
                India-based, mission-driven teams delivering security, CCTV,
                networking, and enterprise IT projects with local accountability.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappLink} className={buttonStyles({ size: "lg" })}>
                  WhatsApp: +91 7009955770
                </a>
                <Link
                  href="/products"
                  className={buttonStyles({ variant: "secondary", size: "lg" })}
                >
                  Browse Products
                </Link>
                <Link
                  href="/contact"
                  className={buttonStyles({ variant: "secondary", size: "lg" })}
                >
                  Get Quote
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-steel">
                {trustStrip.map((item) => (
                  <span key={item} className="rounded-full bg-white/70 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-aurora/40" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                    Live enterprise pulse
                  </p>
                  <span className="h-2 w-2 rounded-full bg-neon animate-[pulseSoft_4s_ease-in-out_infinite]" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-ink">
                  A living system, not a static vendor.
                </h2>
                <p className="mt-3 text-sm text-steel">
                  Devices, renewals, and on-ground teams synced in one view.
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
                    OEM-direct coverage
                  </span>
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    24/7 renewal watch
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="group transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h2 className="text-2xl font-semibold text-ink">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm text-steel">{pillar.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-steel">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="text-neon">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
          <div
            id="local-availability"
            className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]"
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-aurora/30 animate-[drift_14s_ease-in-out_infinite]" />
              <div className="relative">
                <Badge>Locations</Badge>
                <h2 className="mt-4 text-3xl font-semibold text-ink">
                  Chandigarh + Panchkula installation hubs.
                </h2>
                <p className="mt-4 text-sm text-steel">
                  Local teams with enterprise-grade processes and PAN-India
                  delivery.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-steel">
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    On-site availability
                  </span>
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    Project support
                  </span>
                </div>
              </div>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-steel">
                Local hubs
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
          <Card className="flex flex-col gap-8 bg-gradient-to-br from-white via-white/70 to-neon/20">
            <div>
              <Badge>OEM roadmap</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                OEMs are welcome to partner with Manpra.
              </h2>
              <p className="mt-3 text-sm text-steel">
                We onboard OEM partners continuously. Enterprise and government
                projects benefit from direct channels and accountability.
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
            <div>
              <Link href="/brands" className={buttonStyles({ size: "lg" })}>
                View OEM partnerships
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
                Ready for a site visit or quote?
              </h2>
              <p className="mt-3 text-lg text-steel">
                WhatsApp-enabled support for installations, renewals, and
                enterprise planning.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink} className={buttonStyles({ size: "lg" })}>
                WhatsApp: +91 7009955770
              </a>
              <Link
                href="/services"
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                Explore services
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
