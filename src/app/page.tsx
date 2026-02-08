import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroCarousel from "@/components/HeroCarousel";
import FastBuyButton from "@/components/FastBuyButton";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

const siteUrl = getSiteUrl();
const whatsappLink = "https://wa.me/917009955770";

export const metadata: Metadata = {
  title: "Buy Genuine Antivirus Keys. Delivered Instantly.",
  description:
    "Instant delivery via Email + WhatsApp. GST Invoice. Real support. OEM-direct antivirus keys from Manpra Infotech.",
  openGraph: {
    title: "Buy Genuine Antivirus Keys. Delivered Instantly.",
    description:
      "Instant delivery via Email + WhatsApp. GST Invoice. Real support. OEM-direct antivirus keys from Manpra Infotech.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Genuine Antivirus Keys. Delivered Instantly.",
    description:
      "Instant delivery via Email + WhatsApp. GST Invoice. Real support. OEM-direct antivirus keys from Manpra Infotech.",
  },
};

const trustBadges = [
  "Genuine Licenses",
  "Instant Delivery",
  "GST Invoice + Support",
];

const topPicks = [
  {
    title: "Quick Heal Total Security (TR1) 1PC 1Y",
    price: 6999,
    slug: "quick-heal-total-security-tr1-1pc-1y",
  },
  {
    title: "Quick Heal Total Security (TS1) 1PC 3Y",
    price: 12999,
    slug: "quick-heal-total-security-ts1-1pc-3y",
  },
  {
    title: "Quick Heal Antivirus Pro (LR1) 1PC 1Y",
    price: 4999,
    slug: "quick-heal-antivirus-pro-lr1-1pc-1y",
  },
  {
    title: "Quick Heal Internet Security 1PC 1Y",
    price: 5999,
    slug: "quick-heal-internet-security-1pc-1y",
  },
];

const whyAntivirus = [
  {
    title: "Stops ransomware & phishing",
    description: "Blocks modern threats before they spread.",
  },
  {
    title: "Protects banking & identity",
    description: "Secure payments and sensitive data.",
  },
  {
    title: "Perfect for families & SMBs",
    description: "Reliable coverage for home and office devices.",
  },
];

const howItWorks = [
  "Choose plan",
  "Pay securely",
  "Key delivered instantly",
];

const supportStrip = [
  "Installation help available",
  "Renewal reminders",
  "Business packs / volume licensing",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does delivery work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver your antivirus key instantly via Email and WhatsApp after confirmation.",
      },
    },
    {
      "@type": "Question",
      name: "Are the licenses genuine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We source OEM-direct and work with verified partners only.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide GST invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GST invoice is included with every purchase.",
      },
    },
    {
      "@type": "Question",
      name: "Is WhatsApp support available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our team responds quickly on WhatsApp for setup and activation help.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-10">
        <Container>
          <HeroCarousel />
          <div className="mt-6 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-steel"
              >
                {badge}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div>
              <Badge>Top Antivirus Picks</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Top Antivirus Picks
              </h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-ink">
              View all
            </Link>
          </div>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
            {topPicks.map((product) => (
              <div
                key={product.slug}
                className="min-w-[240px] rounded-2xl border border-white/70 bg-white/80 p-4 shadow-card"
              >
                <div className="relative" data-protect>
                  <Image
                    src="/product-placeholder.svg"
                    alt={product.title}
                    width={360}
                    height={220}
                    className="rounded-2xl"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Instant Delivery
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-steel">
                  Delivered instantly on Email + WhatsApp.
                </p>
                <div className="mt-3 text-lg font-semibold text-ink">
                  {formatPrice(product.price)}
                </div>
                <div className="mt-4">
                  <FastBuyButton
                    productName={product.title}
                    buttonLabel="Buy Now"
                    variant="secondary"
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold text-ink">Why antivirus?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {whyAntivirus.map((item) => (
              <Card key={item.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <Card key={step}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-sm font-semibold text-ink">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {step}
                </h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <h2 className="text-3xl font-semibold text-ink">
              Why Manpra Infotech
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-ink">
                  OEM-direct + verified partners
                </h3>
                <p className="mt-2 text-sm text-steel">
                  We source directly and work with verified partners only.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink">
                  Local teams for installation & IT services
                </h3>
                <p className="mt-2 text-sm text-steel">
                  Chandigarh and Panchkula teams for on-ground support.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-2xl font-semibold text-ink">Chandigarh</h3>
              <p className="mt-2 text-sm text-steel">
                Installation & support hub
              </p>
              <a
                href="https://share.google/10b79ZmSpnFKk7ctr"
                className={buttonStyles({ variant: "secondary", size: "sm", className: "mt-4 inline-flex" })}
              >
                View location
              </a>
            </Card>
            <Card>
              <h3 className="text-2xl font-semibold text-ink">Panchkula</h3>
              <p className="mt-2 text-sm text-steel">
                Operations & projects hub
              </p>
              <a
                href="https://share.google/v3yFFRT46lKt9MfRt"
                className={buttonStyles({ variant: "secondary", size: "sm", className: "mt-4 inline-flex" })}
              >
                View location
              </a>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {supportStrip.map((item) => (
              <Card key={item}>
                <p className="text-sm font-semibold text-ink">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <SiteFooter />

      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 sm:hidden">
        <Link
          href="/"
          className={buttonStyles({ variant: "secondary", size: "lg", className: "flex-1" })}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={buttonStyles({ size: "lg", className: "flex-1" })}
        >
          Shop
        </Link>
        <a
          href={whatsappLink}
          className={buttonStyles({ variant: "secondary", size: "lg", className: "flex-1" })}
        >
          WhatsApp
        </a>
        <Link
          href="/contact"
          className={buttonStyles({ variant: "secondary", size: "lg", className: "flex-1" })}
        >
          Support
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
