"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCenterHeroSection from "@/components/ServiceCenterHeroSection";
import ServiceCenterPricingSection from "@/components/ServiceCenterPricingSection";
import usePageTitle from "@/hooks/usePageTitle";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import ServiceCenterPlatformSimulation from "@/components/ServiceCenterPlatformSimulation";
import ServiceCenterReportsSection from "@/components/ServiceCenterReportsSection";
import ServiceCenterChatbotBuilderSection from "@/components/ServiceCenterChatbotBuilderSection";
import ServiceCenterKanbanSection from "@/components/ServiceCenterKanbanSection";
import ServiceCenterTestimonialsSection from "@/components/ServiceCenterTestimonialsSection";

const CentralDeAtendimento = () => {
  usePageTitle("Central de Atendimento Omnichannel | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServiceCenterHeroSection />
        <ServiceCenterPlatformSimulation />
        <ServiceCenterReportsSection />
        <ServiceCenterChatbotBuilderSection />
        <ServiceCenterKanbanSection />
        <ServiceCenterPricingSection />
        <BrandsCarouselSection />
        <ServiceCenterTestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default CentralDeAtendimento;