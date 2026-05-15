import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://haaratimata.vercel.app"),
  title: "Haaratimata Handicrafts | Handmade Felt & Wool Products from Nepal",
  description:
    "Premium handmade felt and wool products from Nepal for interiors, boutiques, trade buyers, and custom wholesale programs.",
  keywords: [
    "handmade felt products",
    "wool rugs",
    "Nepal handicrafts",
    "felt home decor",
    "fair trade felt",
    "wholesale felt products",
    "custom felt designs",
    "handmade wool decor",
  ],
  openGraph: {
    title: "Haaratimata Handicrafts | Handmade Felt & Wool Products from Nepal",
    description:
      "Premium handmade felt and wool products from Nepal for interiors, boutiques, trade buyers, and custom wholesale programs.",
    siteName: "Haaratimata Handicrafts",
    type: "website",
    locale: "en_US",
    url: "https://haaratimata.vercel.app",
    images: [
      {
        url: "/images/hero/home-hero-yarn.jpg",
        width: 1200,
        height: 630,
        alt: "Haaratimata Handicrafts handmade felt and wool products from Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haaratimata Handicrafts | Handmade Felt & Wool Products from Nepal",
    description:
      "Premium handmade felt and wool products from Nepal for interiors, boutiques, trade buyers, and custom wholesale programs.",
    images: ["/images/hero/home-hero-yarn.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
