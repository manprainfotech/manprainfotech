import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Activation Troubleshooting | Manpra Infotech",
  description:
    "Placeholder troubleshooting guide for antivirus activation. Full steps coming soon.",
};

export default function ActivationTroubleshootingPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Knowledge Hub</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Activation troubleshooting
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            We are preparing a quick fix guide. Until then, our WhatsApp support
            can help you activate your license instantly.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Card>
            <h2 className="text-2xl font-semibold text-ink">Coming soon</h2>
            <p className="mt-3 text-sm text-steel">
              Activation errors, expiry issues, and renewal conflicts explained
              with step-by-step fixes.
            </p>
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
