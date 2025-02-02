import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GoConstruction, a leading construction company dedicated to building high-quality homes, commercial spaces, and infrastructure projects with expertise and passion.",
  keywords: [
    "construction",
    "home building",
    "Residential Projects",
    "Premium Residential",
    "commercial projects",
    "GoConstruction",
    "Individual House",
  ],
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-24 min-h-screen w-full">
      <div className="flex flex-col">
        <Navbar textColor="text-black" image="/logos/dark-logo.png" />
        <ScrollProgressBar type="bar" color="#ae1c1c" showPercentage={true} />
        {children}
      </div>
    </main>
  );
}
