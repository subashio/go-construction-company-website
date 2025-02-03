import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us ",
  description:
    "Get in touch with Go Construction for all your building needs. Reach out via email, phone, or visit our office.",
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
