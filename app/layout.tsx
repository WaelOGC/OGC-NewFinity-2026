import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OGC NewFinity — Build Smarter. Scale Faster.",
  description:
    "Web App & Application development agency based in The Hague, Netherlands. AI-powered solutions, custom web apps, and expert development teams. Free consultation, 48h response.",
  keywords: "web development, app development, AI development, The Hague, Netherlands, custom software",
  openGraph: {
    title: "OGC NewFinity — Build Smarter. Scale Faster.",
    description: "Web App & Application development agency. Free consultation, 48h response.",
    url: "https://ogcnewfinity.com",
    siteName: "OGC NewFinity",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
