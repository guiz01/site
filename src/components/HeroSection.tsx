"use client";

import React from "react";
import RotativeHeroContent from "./RotativeHeroContent"; // Importa o novo componente

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[800px] flex flex-col text-white overflow-hidden">
      <RotativeHeroContent /> {/* Renderiza o conteúdo rotativo aqui */}
    </section>
  );
};

export default HeroSection;