"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageCircleMore, Briefcase, LogIn } from "lucide-react"; // Importa os novos ícones

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/automacoes", label: "Automações" },
    { to: "/campanhas", label: "Campanhas" },
    { to: "/central-de-atendimento", label: "Central de Atendimento" },
    { to: "/robos-de-atendimento", label: "Robôs de Atendimento" },
  ];

  return (
    <header className="w-full bg-white text-foreground border-b border-border py-4 px-6 flex justify-between items-center shadow-sm">
      {/* Logo on the left */}
      <Link to="/" className="flex items-center">
        <img src="https://connectme.chat/wp-content/uploads/2024/11/logo-connecte-me.webp" alt="ConnectMe Logo" className="h-16" />
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
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link to="/contratar" className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" /> Contratar
          </Link>
        </Button>
        <Button asChild className="bg-purpleButton text-purpleButton-foreground hover:bg-purpleButton/90">
          <a href="https://wa.me/SEU_NUMERO_DE_WHATSAPP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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