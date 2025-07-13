"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-primary to-header text-white p-6 text-center md:text-left overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Notificações automáticas via WhatsApp
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Envie mensagens personalizadas e automatizadas para seus clientes, similar a Reportana e E-vendas, diretamente pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up delay-400">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 hover:text-primary transition-colors shadow-lg">
              <Link to="/signup">Experimente Grátis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary transition-colors shadow-lg">
              <a href="#contact">Fale com um especialista</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          {/* Placeholder para imagem/ilustração */}
          <div className="w-full max-w-md h-64 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 text-lg">
            [Imagem do Aplicativo Aqui]
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;