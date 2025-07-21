"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const whatsappLink = "http://wa.me/5531982631178";

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            asChild 
            size="lg" 
            className="rounded-full w-16 h-16 shadow-lg bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
              <MessageCircleMore className="h-8 w-8" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-white text-gray-800 text-base px-4 py-2 rounded-lg shadow-md border border-gray-200">
          <p>Vamos conversar?</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default FloatingWhatsAppButton;