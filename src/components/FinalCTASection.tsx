"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircleMore, Calendar } from "lucide-react"; // Importa o ícone

const FinalCTASection = () => {
  const whatsappLink = "http://wa.me/5531982631178";
  const agendamentoLink = "https://cal.com/connectme";

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-cta-gradient-start to-cta-gradient-end text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para transformar a comunicação com seus clientes?
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          Comece a enviar notificações automáticas via WhatsApp hoje mesmo!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 py-3 text-lg px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-full sm:w-auto"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 uppercase">
              <MessageCircleMore className="h-6 w-6" /> VAMOS CONVERSAR?
            </a>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="bg-appointment-button text-appointment-button-foreground hover:bg-appointment-button/90 py-3 text-lg px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-full sm:w-auto"
          >
            <a href={agendamentoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 uppercase">
              <Calendar className="h-6 w-6" /> Agendar Apresentação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;