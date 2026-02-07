import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatPrice, currency } from "@/lib/format";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const revalidate = 60;

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PageProps) {
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
      images: [product.imageUrl],
    },
  };
}

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
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex-1">
          <Link
            href="/products"
            className="text-sm font-semibold text-ink/70 hover:text-ink"
          >
            ← Back to products
          </Link>
          <h1 className="mt-6 font-display text-4xl font-semibold text-ink md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 text-lg text-steel">
            {product.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {product.tags.split(",").map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-mist px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-card">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">
                  MRP
                </p>
                <p className="text-lg font-semibold text-steel line-through">
                  {formatPrice(product.mrp)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">
                  Offer Price
                </p>
                <p className="text-3xl font-semibold text-ink">
                  {formatPrice(product.price)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">
                  Delivery
                </p>
                <p className="text-base font-semibold text-ink">
                  {product.deliveryType}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink}
                className="rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Buy Now on WhatsApp
              </a>
              <span className="text-xs text-steel">
                Your license key is delivered instantly after payment.
              </span>
            </div>
          </div>
        </div>

        <aside className="w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-6 shadow-card">
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Trust</p>
          <h2 className="mt-3 text-2xl font-semibold text-ink">
            Why buy from us
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-steel">
            <li>Instant email + WhatsApp delivery</li>
            <li>Original license keys only</li>
            <li>Activation support within 10 minutes</li>
          </ul>
          <div className="mt-6 rounded-2xl bg-mist px-4 py-4 text-xs text-steel">
            Need help? Email us after purchase and we will assist with activation.
          </div>
        </aside>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
