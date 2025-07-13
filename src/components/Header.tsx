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
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Recursos
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            Como Funciona
          </a>
          {/* Adicione mais links de navegação aqui, se necessário */}
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