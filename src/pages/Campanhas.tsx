"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampaignsHeroSection from "@/components/CampaignsHeroSection"; // Novo componente
import CampaignsHowItWorksSection from "@/components/CampaignsHowItWorksSection"; // Novo componente
import CampaignsTestimonialsSection from "@/components/CampaignsTestimonialsSection"; // Novo componente
import PricingSection from "@/components/PricingSection"; // Reutilizando o componente de preços

const Campanhas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CampaignsHeroSection />
        <CampaignsHowItWorksSection />
        <CampaignsTestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Campanhas;