"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import BrandsCarouselSection from "@/components/BrandsCarouselSection"; // Importa o novo componente
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ResultsSection />
        <BrandsCarouselSection /> {/* Adiciona a nova seção aqui */}
        <FinalCTASection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;