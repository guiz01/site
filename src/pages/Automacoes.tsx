"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import AutomationsHeroSection from "@/components/AutomationsHeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection"; // Importa o novo componente

const Automacoes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AutomationsHeroSection />
        <HowItWorksSection />
        <TestimonialsSection /> {/* Seção de depoimentos agora antes da de preços */}
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Automacoes;