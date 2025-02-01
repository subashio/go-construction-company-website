import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Go-Construction | Build Your Dream Home with Experts",
  description:
    "Go-Construction specializes in building individual houses, villas, and dream homes. Explore houses for sale and professional construction services tailored to your needs.",
  authors: [{ name: "Subash", url: "https://github.com/subashio" }],
  keywords: [
    "Go-Construction",
    "Go-Construction company",
    "Go-Construction co",
    "Construction Company",
    "Construction",
    "puducherry construction company",
    "tamil nadu construction Company",
    "tamil nadu construction solutions",
    "puducherry construction solutions",
    "Construction puducherry",
    "go construction individual house",
    "go construction villa construction",
    "houses for sale in pondicherry",
    "construction company in tindivanam",
    "construction company in chennai",
    "construction company in ",
    "houses for sale ",
    "individual houses",
    "independent houses",
    "individual homes",
    "independent homes",
    "independent homes for sale",
    "independent homes go construction",
    "individual houses for sale",
    "individual houses go construction",
    "villa construction",
    "custom home builders",
    "go-construct",
    "real estate company",
    "construction company",
    "new house for sale in pondicherry 60 lakhs",
    "new house for sale in pondicherry 40 lakhs",
    "new house for sale in pondicherry 20 lakhs",
    "home builders",
    "dream home",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://goconstruction.in",
  },
  openGraph: {
    title: "Go-Construction | Build Your Dream Home with Experts",
    description:
      "Go-Construction offers expert home construction services, including individual houses, villas, and real estate solutions. Find your dream home today.",
    type: "website",
    url: "https://goconstruction.in", // Replace with actual URL
    images: [
      {
        url: "https://https://goconstruction.in/og-image.jpg", // Add an image URL
        width: 1200,
        height: 630,
        alt: "Go-Construction - Build Your Dream Home",
      },
    ],
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
