import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import { buttonStyles } from "@/components/ui/Button";

export default function HealthCheckPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]">
            <div>
              <Badge>Health Check</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Quick device health check
              </h1>
              <p className="mt-4 text-lg text-steel">
                A lightweight assessment to guide the right protection for your
                device. This is a placeholder for the upcoming self-check flow.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className={buttonStyles({ size: "lg" })}
                >
                  Browse Products
                </Link>
                <Link
                  href="/"
                  className={buttonStyles({ variant: "secondary", size: "lg" })}
                >
                  Back to Home
                </Link>
              </div>
            </div>
            <Card>
              <h2 className="text-xl font-semibold text-ink">
                What we check
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li>Device type and usage profile</li>
                <li>Current protection and renewal status</li>
                <li>Recommended plan and add-ons</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
