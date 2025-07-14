"use client";

import React from "react";
import RotativeHeroContent from "./RotativeHeroContent"; // Importa o novo componente

const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center text-white p-6 text-center md:text-left overflow-hidden">
      <RotativeHeroContent /> {/* Renderiza o conteúdo rotativo aqui */}
    </section>
  );
};

export default HeroSection;