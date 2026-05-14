import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Haaratimata Handicrafts",
  description:
    "Handmade felt wool products supplier, manufacturer, and exporter from Nepal for wholesale, bulk buy, designers, and boutiques.",
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
