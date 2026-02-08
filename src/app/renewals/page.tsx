import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";
import FastBuyButton from "@/components/FastBuyButton";

export const metadata: Metadata = {
  title: "Renewals | Manpra Infotech",
  description:
    "Renew antivirus licenses with OEM-direct support, WhatsApp reminders, and instant delivery from Manpra Infotech.",
};

export default function RenewalsPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Renewals</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Renewal reminders, done right.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            We alert you before expiry, handle OEM-direct renewals, and send
            keys instantly on WhatsApp and email.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-semibold text-ink">
                Auto Renewal Reminders
              </h2>
              <p className="mt-3 text-sm text-steel">
                No missed renewals. We keep every license in view.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-ink">
                Instant Delivery
              </h2>
              <p className="mt-3 text-sm text-steel">
                Keys delivered instantly via email + WhatsApp with GST invoice.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="flex flex-col gap-6 bg-gradient-to-br from-white via-white/70 to-aurora/30">
            <div>
              <h2 className="text-3xl font-semibold text-ink">
                Renew now, no delays.
              </h2>
              <p className="mt-3 text-sm text-steel">
                Share your license details and we will handle the rest.
              </p>
            </div>
            <FastBuyButton
              productName="Antivirus Renewal"
              buttonLabel="Renew on WhatsApp"
              size="lg"
            />
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
