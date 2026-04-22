import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VSLSection from "@/components/VSLSection";
import SocialProof from "@/components/SocialProof";
import WhoItsFor from "@/components/WhoItsFor";
import Curriculum from "@/components/Curriculum";
import WhatsIncluded from "@/components/WhatsIncluded";
import TestimonialsVideo from "@/components/TestimonialsVideo";
import AboutMariana from "@/components/AboutMariana";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VSLSection />
      <SocialProof />
      <WhoItsFor />
      <Curriculum />
      <WhatsIncluded />
      <TestimonialsVideo />
      <AboutMariana />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
