import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ExamplesGallery from "@/components/ExamplesGallery";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ExamplesGallery />
      <UseCases />
      <Features />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}
