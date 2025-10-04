import Hero from "@/components/Hero";
import Included from "@/components/Included";
import Features from "@/components/Features";
import Accountability from "@/components/Accountability";
import Education from "@/components/Education";
import Pricing from "@/components/Pricing";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";

export default function Page() {
  return (
    <main>
      <Hero />
      <Included />
      <Features />
      <Accountability />
      <Education />
      <GetStarted />
      <Pricing />
      <TestimonialsCarousel />
      <FAQ />
      <Footer />
    </main>
  );
}
