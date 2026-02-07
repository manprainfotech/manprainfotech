import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";

export const dynamic = "force-dynamic";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
            Antivirus Store
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Top Antivirus Deals
          </h1>
          <p className="mt-3 max-w-xl text-base text-steel">
            Instant delivery by email and WhatsApp. Pick a plan, pay once, and
            activate in minutes.
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-semibold text-ink/70 hover:text-ink"
        >
          Back to home
        </Link>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group rounded-3xl border border-white/60 bg-white/80 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                {product.brand}
              </span>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-steel">
                {product.tags.split(",")[1] ?? "1pc"}
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-ink">
              {product.title}
            </h2>
            <p className="mt-3 text-sm text-steel">
              {product.shortDescription}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">
                  Price
                </p>
                <p className="text-lg font-semibold text-ink">
                  {formatPrice(product.price)}
                </p>
              </div>
              <span className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white">
                View
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
