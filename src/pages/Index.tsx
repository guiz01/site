"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import WhatsappPhoneImage from "@/components/WhatsappPhoneImage";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <ResultsSection />
        <WhatsappPhoneImage />
        <BrandsCarouselSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;