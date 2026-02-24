import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ExamplesGallery from "@/components/ExamplesGallery";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ExamplesGallery />
      <UseCases />
      <Features />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
