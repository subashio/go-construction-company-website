import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { description, title } from "@/constants/common";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: `${title} | Build Your Dream Home with Experts`,
    template: `%s | ${title}`,
  },
  authors: [{ name: "Subash", url: "https://github.com/subashio" }],
  description,
  keywords: [
    "Go-Construction",
    "Go-Construction company",
    "Construction Company",
    "Puducherry construction company",
    "Tamil Nadu construction solutions",
    "House builders in Tamil Nadu",
    "Villa construction in Pondicherry",
    "Affordable homes in Chennai",
    "Independent homes for sale",
    "Custom home builders",
    "Dream home",
    "Real estate company",
    "New house for sale in Pondicherry 60 lakhs",
    "New house for sale in Pondicherry 40 lakhs",
    "New house for sale in Pondicherry 20 lakhs",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL! || "https://goconstruction.in"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL! || "https://goconstruction.in",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/logos/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logos/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full !scroll-smooth">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          fontSans.variable
        )}>
        <main className="relative flex min-h-screen flex-col bg-cover bg-no-repeat">
          {children}
          <Toaster />
          <Footer />
        </main>
      </body>
    </html>
  );
}
