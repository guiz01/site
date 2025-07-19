"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { MadeWithDyad } from "@/components/made-with-dyad"; // Removido
import HowItWorksSection from "@/components/HowItWorksSection";
import AutomationsHeroSection from "@/components/AutomationsHeroSection";
import PricingSection from "@/components/PricingSection";

const Automacoes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AutomationsHeroSection />
        <HowItWorksSection />
        <PricingSection />
      </main>
      <Footer />
      {/* <MadeWithDyad /> // Removido */}
    </div>
  );
};

export default Automacoes;