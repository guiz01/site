"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white text-foreground border-b border-border py-4 px-6 flex justify-between items-center shadow-sm">
      {/* Logo on the left */}
      <Link to="/" className="flex items-center">
        <img src="https://connectme.chat/wp-content/uploads/2024/11/logo-connecte-me.webp" alt="ConnectMe Logo" className="h-16" />
      </Link>

      {/* Navigation links - centered within their own flexible container */}
      <div className="flex-grow flex justify-center">
        <nav className="flex space-x-6"> {/* Removido 'hidden md:flex' para que seja sempre visível */}
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/automacoes" className="text-foreground hover:text-primary transition-colors">
            Automações
          </Link>
          <Link to="/campanhas" className="text-foreground hover:text-primary transition-colors">
            Campanhas
          </Link>
          <Link to="/central-de-atendimento" className="text-foreground hover:text-primary transition-colors">
            Central de Atendimento
          </Link>
          <Link to="/robos-de-atendimento" className="text-foreground hover:text-primary transition-colors">
            Robôs de Atendimento
          </Link>
        </nav>
      </div>

      {/* Button on the right */}
      <Button asChild>
        <Link to="/login">Entrar</Link>
      </Button>
    </header>
  );
};

export default Header;