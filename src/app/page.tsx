import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FastBuyButton from "@/components/FastBuyButton";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

const siteUrl = getSiteUrl();
const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hi Manpra Infotech, I want the Deal of the Week antivirus key."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Antivirus Deal of the Week | Manpra Infotech",
  description:
    "Genuine antivirus keys with instant Email + WhatsApp delivery. OEM-direct sourcing, GST invoice, and local support in Chandigarh/Panchkula.",
  openGraph: {
    title: "Antivirus Deal of the Week | Manpra Infotech",
    description:
      "Genuine antivirus keys with instant Email + WhatsApp delivery. OEM-direct sourcing, GST invoice, and local support in Chandigarh/Panchkula.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Antivirus Deal of the Week | Manpra Infotech",
    description:
      "Genuine antivirus keys with instant Email + WhatsApp delivery. OEM-direct sourcing, GST invoice, and local support in Chandigarh/Panchkula.",
  },
};

const bestSellers = [
  {
    name: "Quick Heal Total Security",
    benefit: "Best for family devices and renewals.",
    price: 179900,
    mrp: 249900,
    badge: "BEST SELLER",
    slug: "quick-heal-total-security-1pc-1y",
  },
  {
    name: "Kaspersky Standard",
    benefit: "Lightweight protection for daily work.",
    price: 159900,
    mrp: 219900,
    badge: "TRENDING",
    slug: "kaspersky-standard-1pc-1y",
  },
  {
    name: "McAfee Total Protection",
    benefit: "Secure payments and identity protection.",
    price: 199900,
    mrp: 269900,
    badge: "BEST SELLER",
    slug: "mcafee-total-protection-1pc-1y",
  },
  {
    name: "Norton 360 Deluxe",
    benefit: "Cloud backup + privacy tools.",
    price: 219900,
    mrp: 299900,
    badge: "TRENDING",
    slug: "norton-360-deluxe-1pc-1y",
  },
  {
    name: "Bitdefender Total Security",
    benefit: "Fast, silent protection.",
    price: 189900,
    mrp: 259900,
    badge: "BEST SELLER",
    slug: "bitdefender-total-security-1pc-1y",
  },
  {
    name: "ESET Smart Security",
    benefit: "Advanced firewall + anti-phishing.",
    price: 169900,
    mrp: 239900,
    badge: "TRENDING",
    slug: "eset-smart-security-1pc-1y",
  },
  {
    name: "Avast Premium",
    benefit: "Lightweight premium shield.",
    price: 149900,
    mrp: 199900,
    badge: "BEST SELLER",
    slug: "avast-premium-1pc-1y",
  },
  {
    name: "Sophos Home",
    benefit: "Business-grade protection for home.",
    price: 179900,
    mrp: 229900,
    badge: "TRENDING",
    slug: "sophos-home-1pc-1y",
  },
];

const dealTiles = [
  { label: "Top Deals", href: "/products" },
  { label: "Renewal Offers", href: "/renewals" },
  { label: "Business Packs", href: "/products" },
  { label: "Student/Family", href: "/products" },
];

const trustStrip = [
  "OEM-direct",
  "Genuine keys",
  "GST invoice",
  "Instant support",
  "Chandigarh + Panchkula teams",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Manpra Infotech Pvt. Ltd.",
      url: siteUrl,
      telephone: "+91 7009955770",
    },
    {
      "@type": "LocalBusiness",
      name: "Manpra Infotech Pvt. Ltd.",
      url: siteUrl,
      telephone: "+91 7009955770",
      areaServed: ["Chandigarh", "Panchkula", "Mohali", "India"],
    },
    {
      "@type": "Service",
      name: "Antivirus Keys & Subscriptions",
      provider: { "@type": "LocalBusiness", name: "Manpra Infotech Pvt. Ltd." },
      areaServed: "India",
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge>Antivirus Deal of the Week</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Antivirus Deal of the Week
              </h1>
              <p className="mt-4 text-lg text-steel">
                Genuine antivirus licenses. Instant delivery by Email +
                WhatsApp. Activation support included.
              </p>
              <div className="mt-6 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-steel">
                      Deal Price
                    </p>
                    <p className="text-3xl font-semibold text-ink">
                      {formatPrice(179900)}
                    </p>
                    <p className="text-xs text-steel line-through">
                      {formatPrice(249900)}
                    </p>
                  </div>
                  <span className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                    Use MANPRA10
                  </span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <FastBuyButton
                  productName="Antivirus Deal of the Week"
                  buttonLabel="Buy Now"
                  size="lg"
                />
                <a
                  href={whatsappLink}
                  className={buttonStyles({ variant: "secondary", size: "lg" })}
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-aurora/40" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Best Seller
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-steel">
                    Delivery 2–5 mins
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-ink">
                  Quick Heal Total Security
                </h2>
                <p className="mt-2 text-sm text-steel">
                  OEM-direct key + activation guidance.
                </p>
                <div className="mt-6 rounded-2xl bg-ink/95 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    Status
                  </p>
                  <p className="mt-2 text-lg font-semibold">Ready to deliver</p>
                  <p className="mt-2 text-xs text-white/70">
                    Instant Email + WhatsApp delivery
                  </p>
                </div>
                <div className="mt-6">
                  <FastBuyButton
                    productName="Quick Heal Total Security"
                    buttonLabel="Apply Protection"
                    size="md"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dealTiles.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                {tile.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div>
              <Badge>Best Sellers</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Best Sellers (Antivirus)
              </h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-ink">
              View all
            </Link>
          </div>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
            {bestSellers.map((product) => (
              <div
                key={product.name}
                className="min-w-[220px] flex-1 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-card"
              >
                <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  {product.badge}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-steel">{product.benefit}</p>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-steel">
                    From
                  </p>
                  <p className="text-lg font-semibold text-ink">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-xs text-steel line-through">
                    {formatPrice(product.mrp)}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <FastBuyButton
                    productName={product.name}
                    buttonLabel="Buy"
                    variant="secondary"
                    size="sm"
                  />
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs font-semibold text-ink"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-card">
            <h2 className="text-2xl font-semibold text-ink">
              Why buy from Manpra Infotech
            </h2>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-steel">
              {trustStrip.map((item) => (
                <span key={item} className="rounded-full bg-white/80 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />

      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 sm:hidden">
        <FastBuyButton
          productName="Antivirus Deal of the Week"
          buttonLabel="Buy Now"
          size="lg"
          className="flex-1"
        />
        <a
          href={whatsappLink}
          className={buttonStyles({ variant: "secondary", size: "lg", className: "flex-1" })}
        >
          WhatsApp
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
