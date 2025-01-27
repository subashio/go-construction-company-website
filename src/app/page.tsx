import AboutSection from "@/components/AboutSection";
import BannerSection from "@/components/BannerSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projectsection from "@/components/Projectsection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <section className="flex  flex-col h-auto w-full ">
      <Navbar textColor="text-white" image="/logos/logo.png" />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Projectsection />
      <BannerSection />
      <CtaSection />
    </section>
  );
}
