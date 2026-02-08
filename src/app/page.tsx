import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PromoSlider from "@/components/PromoSlider";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

const siteUrl = getSiteUrl();
const whatsappNumber = "917009955770";
const whatsappMessage = encodeURIComponent(
  "Hello Manpra Infotech, I want to order with OEM-direct support."
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

const dealTiles = [
  { label: "Top Deals", href: "/products" },
  { label: "Renewal Offers", href: "/products" },
  { label: "Business Packs", href: "/products" },
  { label: "Student/Family", href: "/products" },
];

const topProducts = [
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
    badge: "LIMITED DEAL",
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
    badge: "LIMITED DEAL",
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
    badge: "LIMITED DEAL",
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
    badge: "LIMITED DEAL",
    slug: "sophos-home-1pc-1y",
  },
];

const trustStrip = [
  "GST Invoice",
  "Genuine Keys",
  "Instant Email+WhatsApp Delivery",
  "Chandigarh + Panchkula Teams",
  "Secure Checkout",
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
        name: "Digital Security",
        provider: { "@type": "LocalBusiness", name: "Manpra Infotech Pvt. Ltd." },
        areaServed: "India",
      },
    ],
  };

  return (
    <main>
      <SiteHeader />

      <Section className="pt-8">
        <Container>
          <PromoSlider />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <Section className="pt-6">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div>
              <Badge>Hot Products</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Limited deals you can order instantly
              </h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-ink">
              View all
            </Link>
          </div>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
            {topProducts.map((product) => (
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
                <Link
                  href={`/products/${product.slug}`}
                  className={buttonStyles({ variant: "secondary", size: "sm", className: "mt-4 inline-flex" })}
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
          <a
            href={whatsappLink}
            className="fixed bottom-5 right-4 z-40 rounded-full bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-card sm:hidden"
          >
            WhatsApp to order
          </a>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-steel">
            {trustStrip.map((item) => (
              <span key={item} className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-neon" />
                {item}
              </span>
            ))}
          </div>
          <Card className="mt-8 bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <h2 className="text-3xl font-semibold text-ink">
              Born & Built in India
            </h2>
            <p className="mt-3 text-sm text-steel">
              OEM-direct marketplace with local engineers, transparent billing,
              and enterprise-grade delivery.
            </p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <Card key={location.title}>
                <h3 className="text-xl font-semibold text-ink">
                  {location.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{location.detail}</p>
                <Link
                  href="/locations"
                  className="mt-4 inline-flex text-sm font-semibold text-ink"
                >
                  View location proof
                </Link>
              </Card>
            ))}
          </div>
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
