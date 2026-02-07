import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge>Products</Badge>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Antivirus plans that keep life simple.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-steel">
                Premium protection for every device. Instant delivery by email
                and WhatsApp. Clear pricing. Genuine licenses only.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-steel">
              <span className="rounded-full bg-white/70 px-4 py-2">Instant delivery</span>
              <span className="rounded-full bg-white/70 px-4 py-2">Genuine keys</span>
              <span className="rounded-full bg-white/70 px-4 py-2">GST invoice</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
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
                      Offer price
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
                    className={buttonStyles({ variant: "secondary", size: "sm" })}
                  >
                    View details
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col items-start gap-6 bg-gradient-to-br from-white via-white/70 to-neon/20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-steel">
                Need help choosing?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">
                Tell us your device and we will recommend the right plan.
              </h2>
              <p className="mt-3 text-sm text-steel">
                WhatsApp support responds fast. We can also help with activation
                after purchase.
              </p>
            </div>
            <Link href="/health" className={buttonStyles({ size: "lg" })}>
              Run a quick health check
            </Link>
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
