"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import HowItWorksSection from "@/components/HowItWorksSection";
import AutomationsHeroSection from "@/components/AutomationsHeroSection"; // Importa o novo componente

const Automacoes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AutomationsHeroSection /> {/* Adiciona o novo componente aqui */}
        <HowItWorksSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Automacoes;