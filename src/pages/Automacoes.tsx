"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import HowItWorksSection from "@/components/HowItWorksSection";
import AutomationsHeroSection from "@/components/AutomationsHeroSection";
import PricingSection from "@/components/PricingSection"; // Importa o novo componente

const Automacoes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AutomationsHeroSection />
        <HowItWorksSection />
        <PricingSection /> {/* Adiciona o novo componente aqui */}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Automacoes;