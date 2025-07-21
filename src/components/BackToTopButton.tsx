"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position"; // Reutilizando o hook de posição de rolagem

const BackToTopButton = () => {
  const scrolled = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-opacity duration-300 ${
        scrolled ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon" // Usar size="icon" para um botão quadrado pequeno
        className="rounded-full w-12 h-12 shadow-md bg-white text-gray-500 border border-gray-300 hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default BackToTopButton;