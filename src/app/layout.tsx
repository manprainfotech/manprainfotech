import "./globals.css";
import { getSiteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: siteName,
  description: "Antivirus licenses with instant delivery.",
  metadataBase: new URL(getSiteUrl()),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-mesh bg-radial-glow font-sans">
        {children}
      </body>
    </html>
  );
}
