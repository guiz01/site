"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-background.jpg')" }}></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          ConnectMe: Notificações Automáticas via WhatsApp
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
          Envie mensagens personalizadas e automatizadas para seus clientes, similar a Reportana e E-vendas, diretamente pelo WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transition-colors shadow-lg">
            <Link to="/signup">Experimente Grátis</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors shadow-lg">
            <a href="#features">Saiba Mais</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;