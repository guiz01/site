"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AutomationsHeroSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        {/* O título "Automatize sua comunicação e impulsione suas vendas" foi removido daqui. */}
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
          Simplifique processos, engaje clientes e escale seu negócio com nossas soluções de automação.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-lg">
          <a href="#contact" className="flex items-center justify-center gap-2 uppercase">
            Comece Agora <ArrowRight className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default AutomationsHeroSection;