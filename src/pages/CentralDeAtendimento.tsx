"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCenterHeroSection from "@/components/ServiceCenterHeroSection";
import ServiceCenterHowItWorksSection from "@/components/ServiceCenterHowItWorksSection";
import ServiceCenterTestimonialsSection from "@/components/ServiceCenterTestimonialsSection";
import ServiceCenterPricingSection from "@/components/ServiceCenterPricingSection";
import usePageTitle from "@/hooks/usePageTitle";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";

const CentralDeAtendimento = () => {
  usePageTitle("Central de Atendimento Omnichannel | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServiceCenterHeroSection />
        <ServiceCenterHowItWorksSection />
        <BrandsCarouselSection />
        <ServiceCenterTestimonialsSection />
        <ServiceCenterPricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default CentralDeAtendimento;