"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-cta-gradient-start to-cta-gradient-end text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para transformar a comunicação com seus clientes?
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          Comece a enviar notificações automáticas via WhatsApp hoje mesmo!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="default" size="lg" className="shadow-lg">
            <a href="#contact">Fale com um especialista</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;