import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge, Card, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Knowledge Hub | Manpra Infotech",
  description:
    "Installer & Engineer Knowledge Hub built from field experience: guides, best practices, and real-world learnings.",
};

const hubItems = [
  {
    title: "How to install antivirus on Windows",
    description: "Clean installation steps for Windows devices.",
    href: "/knowledge-hub/windows-install",
  },
  {
    title: "Activation troubleshooting",
    description: "Quick fixes for license activation issues.",
    href: "/knowledge-hub/activation-troubleshooting",
  },
  {
    title: "Installation guides (coming soon)",
    description: "Step-by-step playbooks for CCTV and networking installs.",
  },
  {
    title: "Best practices",
    description: "Field-tested standards for security and uptime.",
  },
  {
    title: "Real-world learnings",
    description: "Lessons from enterprise and government deployments.",
  },
];

export default function KnowledgeHubPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-20">
        <Container>
          <Badge>Knowledge Hub</Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Installer & Engineer Knowledge Hub
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            Built from field experience. Documentation, playbooks, and best
            practices for teams that deploy security at scale.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {hubItems.map((item) => (
              <Card key={item.title}>
                {item.href ? (
                  <Link href={item.href} className="text-xl font-semibold text-ink">
                    {item.title}
                  </Link>
                ) : (
                  <h2 className="text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                )}
                <p className="mt-3 text-sm text-steel">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
