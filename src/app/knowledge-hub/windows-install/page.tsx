import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "How to Install Antivirus on Windows | Manpra Infotech",
  description:
    "Placeholder guide for installing antivirus on Windows. Full steps coming soon.",
};

export default function WindowsInstallPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Knowledge Hub</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            How to install antivirus on Windows
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            Detailed installation steps will be published soon. For now, reach
            our WhatsApp support for guided activation.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Card>
            <h2 className="text-2xl font-semibold text-ink">Coming soon</h2>
            <p className="mt-3 text-sm text-steel">
              We are documenting the full install flow with screenshots and
              troubleshooting tips.
            </p>
          </Card>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
