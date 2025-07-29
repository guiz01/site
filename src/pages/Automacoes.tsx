"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import AutomationsHeroSection from "@/components/AutomationsHeroSection";
import PricingSection from "@/components/PricingSection";
import usePageTitle from "@/hooks/usePageTitle";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import AutomationsExamplesSection from "@/components/AutomationsExamplesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import OptOutSection from "@/components/OptOutSection";
import IntegrationsSection from "@/components/IntegrationsSection";

const Automacoes = () => {
  usePageTitle("Automações | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AutomationsHeroSection />
        <AutomationsExamplesSection />
        <OptOutSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <PricingSection />
        <BrandsCarouselSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Automacoes;