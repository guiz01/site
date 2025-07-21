"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[80px] md:pt-[96px]"> {/* Adiciona padding-top */}
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <ResultsSection />
        <BrandsCarouselSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;