"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircleMore, Calendar } from "lucide-react";

const whatsappLink = "http://wa.me/5531982631178";
const agendamentoLink = "https://cal.com/connectme";

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3 sm:flex-row sm:items-center sm:space-x-0">
      {/* Scheduling Button */}
      <div className="flex items-center gap-3">
        <Button 
          asChild 
          size="lg" 
          className="rounded-full w-16 h-16 shadow-lg bg-appointment-button text-appointment-button-foreground hover:bg-appointment-button/90 transition-all duration-300 ease-in-out transform hover:scale-105 flex-shrink-0"
        >
          <a href={agendamentoLink} target="_blank" rel="noopener noreferrer" aria-label="Agendar uma apresentação">
            <Calendar className="h-8 w-8" />
          </a>
        </Button>
      </div>

      {/* WhatsApp Button */}
      <div className="flex items-center gap-3">
        {/* Balão de fala - Oculto em telas pequenas (mobile) */}
        <div className="hidden md:flex bg-white text-gray-800 text-base px-4 py-2 rounded-lg shadow-md border border-gray-200 relative pr-6 items-center gap-2">
          <p>Vamos conversar?</p>
          {/* Triângulo do balão de fala */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[8px] border-t-transparent border-b-transparent border-l-white -mr-2"></div>
        </div>

        <Button 
          asChild 
          size="lg" 
          className="rounded-full w-16 h-16 shadow-lg bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 transition-all duration-300 ease-in-out transform hover:scale-105 flex-shrink-0"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
            <MessageCircleMore className="h-8 w-8" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;