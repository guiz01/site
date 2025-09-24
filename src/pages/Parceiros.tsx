"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Parceiros() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <Button 
        asChild 
        size="lg" 
        className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 py-3 px-6 text-sm md:py-6 md:px-12 md:text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      >
        <a 
          href="https://portal.basedeclientes.com.br/checkout/4e48e248-e61c-4c9a-8ab5-a77f81fbde55" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 uppercase"
        >
          <ShoppingCart className="h-4 w-4 md:h-6 md:w-6" /> Garantir minha vaga
        </a>
      </Button>
    </div>
  );
}