import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSlider from "@/components/HeroSlider";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

const siteUrl = getSiteUrl();
const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hello Manpra Infotech, I want to buy OEM-direct protection and get a quote."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Manpra Infotech — OEM-direct Digital Security + IT Services",
  description:
    "India-born OEM-direct security marketplace with instant delivery, trusted installations, and enterprise-grade IT services. WhatsApp support + GST invoice.",
  openGraph: {
    title: "Manpra Infotech — OEM-direct Digital Security + IT Services",
    description:
      "India-born OEM-direct security marketplace with instant delivery, trusted installations, and enterprise-grade IT services. WhatsApp support + GST invoice.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Manpra Infotech — OEM-direct Digital Security + IT Services",
    description:
      "India-born OEM-direct security marketplace with instant delivery, trusted installations, and enterprise-grade IT services. WhatsApp support + GST invoice.",
  },
};

const slides = [
  {
    title: "Antivirus Mega Sale — Genuine Keys in Minutes",
    description: "Direct OEM + Manpra team support. Instant delivery on email and WhatsApp.",
  },
  {
    title: "Renewal Reminder System — We Alert Before Expiry",
    description: "Never miss a renewal window. We keep every license visible.",
  },
  {
    title: "Born & Built in India — OEM-direct + Manpra Team Support",
    description: "Local hubs, real engineers, PAN-India execution.",
  },
];

const pillars = [
  {
    title: "Digital Security",
    description: "Antivirus, endpoint, renewals, and health checks.",
    points: ["OEM-direct licensing", "Instant delivery", "Renewal alerts"],
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

const trustChips = [
  "Genuine Keys",
  "GST Invoice",
  "WhatsApp Support",
  "PAN India",
  "OEM-direct",
  "Secure Checkout",
];

const topProducts = [
  {
    name: "Quick Heal Total Security",
    benefit: "Best for family devices and renewals.",
    price: 179900,
    slug: "quick-heal-total-security-1pc-1y",
  },
  {
    name: "Kaspersky Standard",
    benefit: "Lightweight protection for daily work.",
    price: 159900,
    slug: "kaspersky-standard-1pc-1y",
  },
  {
    name: "McAfee Total Protection",
    benefit: "Secure payments and identity protection.",
    price: 199900,
    slug: "mcafee-total-protection-1pc-1y",
  },
  {
    name: "Norton 360 Deluxe",
    benefit: "Cloud backup + privacy tools.",
    price: 219900,
    slug: "norton-360-deluxe-1pc-1y",
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

const locations = [
  {
    title: "Chandigarh hub",
    detail: "Installation & support teams on ground.",
  },
  {
    title: "Panchkula hub",
    detail: "Operations & projects execution center.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Manpra Infotech Pvt. Ltd.",
        url: siteUrl,
        telephone: "+91 7009955770",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 7009955770",
          contactType: "sales",
          availableLanguage: ["en", "hi"],
        },
      },
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
        location: [
          {
            "@type": "Place",
            name: "Chandigarh Hub",
            address: { "@type": "PostalAddress", addressLocality: "Chandigarh", addressCountry: "IN" },
          },
          {
            "@type": "Place",
            name: "Panchkula Hub",
            address: { "@type": "PostalAddress", addressLocality: "Panchkula", addressCountry: "IN" },
          },
        ],
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

      <Section className="pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge>Marketplace Offers</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Antivirus Mega Sale — Genuine Keys in Minutes
              </h1>
              <p className="mt-6 text-lg text-steel">
                OEM-direct digital security, installations, and IT services with
                instant delivery and WhatsApp support.
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
                <HeroSlider slides={slides} />
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

      <Section className="pt-0">
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-steel">
            {trustChips.map((chip) => (
              <span key={chip} className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-neon" />
                {chip}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div>
              <Badge>Top products</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Bestsellers with instant delivery
              </h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-ink">
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topProducts.map((product) => (
              <Card key={product.name} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-steel">
                    Fast Checkout
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-steel">
                    OEM
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="text-sm text-steel">{product.benefit}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-semibold text-ink">
                    {formatPrice(product.price)}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className={buttonStyles({ variant: "secondary", size: "sm" })}
                  >
                    Buy Now
                  </Link>
                </div>
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
                We onboard OEM partners continuously.
              </h2>
              <p className="mt-3 text-sm text-steel">
                OEMs can partner with Manpra for direct market access, trusted
                installations, and enterprise delivery.
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

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
