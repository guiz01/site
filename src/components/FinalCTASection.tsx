"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircleMore } from "lucide-react"; // Importa o ícone

const FinalCTASection = () => {
  const whatsappLink = "http://wa.me/5531982631178";

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-cta-gradient-start to-cta-gradient-end text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para transformar a comunicação com seus clientes?
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          Comece a enviar notificações automáticas via WhatsApp hoje mesmo!
        </p>
        <Button asChild size="lg" className="bg-pink-button text-pink-button-foreground hover:bg-pink-button/90 py-3 text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 uppercase">
            <MessageCircleMore className="h-6 w-6" /> Fale Conosco
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;