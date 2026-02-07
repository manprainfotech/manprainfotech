import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Brands | Manpra Infotech OEM Partnerships",
  description:
    "Manpra Infotech works directly with OEMs. View current partners and upcoming OEM integrations.",
};

const currentBrands = [
  "Quick Heal",
  "Kaspersky",
  "McAfee",
  "Norton",
  "Bitdefender",
  "ESET",
  "Avast",
  "Sophos",
  "Hikvision",
  "CP Plus",
];

const upcomingBrands = [
  "Microsoft",
  "Google Workspace",
  "Dell",
  "HP",
  "Aruba",
  "Fortinet",
];

export default function BrandsPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Brands</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            OEM-direct partnerships, always growing.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            We work directly with OEMs. New partners are onboarding continuously
            as we expand across India.
          </p>
          <p className="mt-3 text-sm text-steel">
            OEMs can partner with Manpra for direct market access and
            on-ground execution.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-semibold text-ink">
                Currently working with (Phase 1)
              </h2>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-steel">
                {currentBrands.map((brand) => (
                  <span key={brand} className="rounded-full bg-white/70 px-4 py-2">
                    {brand}
                  </span>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-ink">
                Upcoming OEM integrations
              </h2>
              <p className="mt-3 text-sm text-steel">
                We onboard OEM partners continuously. OEMs can partner with
                Manpra for direct execution and trusted delivery.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-steel">
                {upcomingBrands.map((brand) => (
                  <span key={brand} className="rounded-full bg-mist px-4 py-2">
                    {brand}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
