"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";

const whatsappLink = "http://wa.me/5531982631178";

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        asChild 
        size="lg" 
        className="rounded-full w-16 h-16 shadow-lg bg-purpleButton text-purpleButton-foreground hover:bg-purpleButton/90 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
          <MessageCircleMore className="h-8 w-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsAppButton;