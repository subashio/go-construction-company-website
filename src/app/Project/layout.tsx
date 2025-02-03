import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Go Construction's featured projects showcasing excellence in construction and innovation. See our portfolio of successful projects.",
  keywords: [
    "construction projects",
    "building projects",
    "Residential Projects",
    "Premium Residential",
    "commercial projects",
    "GoConstruction",
    "Individual House",
    "Individual House 900 Squareft",
    "Individual House 1200 Squareft",
    "interior Design",
    "Elevation Design",
  ],
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="pt-24 min-h-screen  w-full  bg-cover bg-fixed bg-top  "
      style={{ backgroundImage: `url(/pictures/pro.jpg)` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/50  to-yellow-400/50 opacity-70" />
      <div className="flex flex-col">
        <Navbar textColor="text-black" image="/logos/dark-logo.png" />
        <ScrollProgressBar type="bar" color="#ae1c1c" showPercentage={true} />
        {children}
      </div>
    </main>
  );
}
