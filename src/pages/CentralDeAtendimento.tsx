"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCenterHeroSection from "@/components/ServiceCenterHeroSection";
import ServiceCenterHowItWorksSection from "@/components/ServiceCenterHowItWorksSection";
import ServiceCenterPricingSection from "@/components/ServiceCenterPricingSection";
import usePageTitle from "@/hooks/usePageTitle";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import ServiceCenterPlatformSimulation from "@/components/ServiceCenterPlatformSimulation";
import ServiceCenterReportsSection from "@/components/ServiceCenterReportsSection";
import ServiceCenterChatbotBuilderSection from "@/components/ServiceCenterChatbotBuilderSection";
import ServiceCenterKanbanSection from "@/components/ServiceCenterKanbanSection";

const CentralDeAtendimento = () => {
  usePageTitle("Central de Atendimento Omnichannel | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ServiceCenterHeroSection />
        <ServiceCenterHowItWorksSection />
        <ServiceCenterPlatformSimulation />
        <ServiceCenterReportsSection />
        <ServiceCenterChatbotBuilderSection />
        <ServiceCenterKanbanSection />
        <BrandsCarouselSection />
        <ServiceCenterPricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default CentralDeAtendimento;