import AboutSection from "@/components/AboutSection";
import BannerSection from "@/components/BannerSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projectsection from "@/components/Projectsection";
import ServiceSection from "@/components/ServiceSection";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

export default function Home() {
  return (
    <section className="flex  flex-col h-auto w-full ">
      <Navbar textColor="text-white" image="/logos/logo.png" />
      <ScrollProgressBar type="bar" color="#ae1c1c" showPercentage={true} />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Projectsection />
      <BannerSection />
      <CtaSection />
    </section>
  );
}
