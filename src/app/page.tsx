import AboutSection from "@/components/AboutSection";
import BannerSection from "@/components/BannerSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projectsection from "@/components/Projectsection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
<<<<<<< HEAD
    <section className="flex  flex-col h-auto w-full">
=======
    <section className="flex  flex-col h-auto w-full ">
>>>>>>> 49b8e3e (updated/pages)
      <Navbar textColor="text-white" image="/logos/logo.png" />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Projectsection />
<<<<<<< HEAD
      <CtaSection />
      <BannerSection />
=======
      <BannerSection />
      <CtaSection />
>>>>>>> 49b8e3e (updated/pages)
    </section>
  );
}
