"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageCircleMore, Briefcase, LogIn } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position"; // Importa o novo hook

const Header = () => {
  const location = useLocation();
  const scrolled = useScrollPosition(); // Usa o hook para detectar rolagem

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/automacoes", label: "Automações" },
    { to: "/campanhas", label: "Campanhas" },
    { to: "/central-de-atendimento", label: "Central de Atendimento" },
  ];

  const whatsappLink = "http://wa.me/5531982631178";

  return (
    <header className={cn(
      "w-full bg-white text-foreground border-b border-border px-6 flex justify-between items-center shadow-sm transition-all duration-300 ease-in-out z-50",
      scrolled ? "fixed top-0 left-0 right-0 py-2" : "relative py-4" // Estilos condicionais
    )}>
      {/* Logo on the left */}
      <Link to="/" className="flex items-center">
        <img 
          src="https://connectme.chat/wp-content/uploads/2024/11/logo-connecte-me.webp" 
          alt="connectme Logo" 
          className={cn(
            "transition-all duration-300 ease-in-out",
            scrolled ? "h-12" : "h-16" // Tamanho do logo condicional
          )} 
        />
      </Link>

      {/* Navigation links - centered within their own flexible container */}
      <div className="flex-grow flex justify-center">
        <nav className="flex space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-md transition-colors duration-200",
                location.pathname === link.to
                  ? "bg-active-nav text-primary-foreground"
                  : "text-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Buttons on the right */}
      <div className="flex items-center space-x-4">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-active-nav hover:text-primary-foreground">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" /> Contratar
          </a>
        </Button>
        <Button asChild className="bg-purpleButton text-purpleButton-foreground hover:bg-purpleButton/90">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <MessageCircleMore className="h-5 w-5" /> Suporte
          </a>
        </Button>
        <Button asChild>
          <Link to="/login" className="flex items-center gap-2">
            <LogIn className="h-5 w-5" /> Entrar
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;