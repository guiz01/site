"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCenterHeroSection from "@/components/ServiceCenterHeroSection";
import ServiceCenterHowItWorksSection from "@/components/ServiceCenterHowItWorksSection";
import ServiceCenterTestimonialsSection from "@/components/ServiceCenterTestimonialsSection";
import ServiceCenterPricingSection from "@/components/ServiceCenterPricingSection";

const CentralDeAtendimento = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[80px] md:pt-[96px]"> {/* Adiciona padding-top */}
        <ServiceCenterHeroSection />
        <ServiceCenterHowItWorksSection />
        <ServiceCenterTestimonialsSection />
        <ServiceCenterPricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default CentralDeAtendimento;