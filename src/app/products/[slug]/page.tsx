import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { formatPrice, currency } from "@/lib/format";
import { getSiteUrl } from "@/lib/site";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export const revalidate = 60;

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) {
    return {
      title: "Product not found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `${product.title} | Manpra Infotech`,
    description: product.shortDescription,
    alternates: {
      canonical: `${getSiteUrl()}/products/${product.slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      images: [{ url: product.imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.shortDescription,
      images: [product.imageUrl],
    },
  };
}

const faqs = [
  {
    question: "How fast is delivery?",
    answer: "Your license key is sent by email and WhatsApp within minutes after payment.",
  },
  {
    question: "Is the license genuine?",
    answer: "Yes. We only sell original keys sourced from authorized distributors.",
  },
  {
    question: "Will I get a GST invoice?",
    answer: "Yes, a GST invoice is included with every purchase.",
  },
  {
    question: "Can you help with activation?",
    answer: "Absolutely. Share a screenshot and we will guide you quickly.",
  },
];

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return notFound();

  const siteUrl = getSiteUrl();
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
  const message = encodeURIComponent(
    `Hi Manpra Infotech, I want to buy ${product.title}. Please share payment details. Order link: ${siteUrl}/products/${product.slug}`
  );
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.imageUrl,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: (product.price / 100).toFixed(2),
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/products/${product.slug}`,
    },
  };

  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Link
                href="/products"
                className="text-sm font-semibold text-ink/70 hover:text-ink"
              >
                ← Back to products
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge>{product.brand}</Badge>
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                  {product.deliveryType}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {product.title}
              </h1>
              <p className="mt-4 text-lg text-steel">
                {product.shortDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {product.tags.split(",").map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-mist px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Card className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">
                  Offer price
                </p>
                <p className="mt-2 text-4xl font-semibold text-ink">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-2 text-sm text-steel line-through">
                  {formatPrice(product.mrp)} MRP
                </p>
              </div>
              <div className="rounded-2xl bg-mist px-4 py-4 text-sm text-steel">
                Delivered instantly by email and WhatsApp after payment. GST
                invoice included.
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappLink}
                  className={buttonStyles({ size: "lg" })}
                >
                  Buy Now on WhatsApp
                </a>
                <p className="text-xs text-steel">
                  Need help? We reply within minutes.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-ink">
                Benefits that matter
              </h2>
              <p className="mt-3 text-sm text-steel">
                Simple protection that keeps you productive, secure, and calm.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-steel">
                <li>Blocks viruses, malware, and phishing in real time.</li>
                <li>Keeps your device fast with low background load.</li>
                <li>Reliable updates so you stay protected all year.</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">What you get</h3>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li>License key for activation</li>
                <li>Setup guidance on request</li>
                <li>GST invoice for records</li>
                <li>Email + WhatsApp delivery</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-6 bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <div>
              <Badge>Instant delivery</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Pay once. Get protected in minutes.
              </h2>
              <p className="mt-3 text-sm text-steel">
                We send your key and setup steps the moment payment is confirmed.
                No waiting. No tickets.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-steel">
              <span className="rounded-full bg-white/70 px-4 py-2">Email delivery</span>
              <span className="rounded-full bg-white/70 px-4 py-2">WhatsApp backup</span>
              <span className="rounded-full bg-white/70 px-4 py-2">Activation help</span>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-ink">Windows</h3>
              <p className="mt-2 text-sm text-steel">
                Works smoothly on modern Windows laptops and desktops.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">macOS</h3>
              <p className="mt-2 text-sm text-steel">
                Lightweight protection for Mac with minimal impact.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">Mobile</h3>
              <p className="mt-2 text-sm text-steel">
                Secure browsing and anti-theft features for phones.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
            <Card>
              <h2 className="text-2xl font-semibold text-ink">FAQs</h2>
              <div className="mt-6 space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-sm font-semibold text-ink">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm text-steel">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">Trust & security</h3>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li>Original keys only</li>
                <li>Verified sellers and invoices</li>
                <li>Support within minutes</li>
                <li>No hidden charges</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col items-start gap-6 bg-gradient-to-br from-white via-white/70 to-neon/20">
            <div>
              <h2 className="text-3xl font-semibold text-ink">
                Ready to secure {product.title}?
              </h2>
              <p className="mt-3 text-sm text-steel">
                Instant delivery. Honest pricing. Real support.
              </p>
            </div>
            <a href={whatsappLink} className={buttonStyles({ size: "lg" })}>
              Buy Now on WhatsApp
            </a>
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
