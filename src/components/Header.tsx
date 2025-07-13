"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-header text-header-foreground border-b border-border py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-header-foreground">
          ConnectMe
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-header-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <a href="#features" className="text-header-foreground hover:text-primary transition-colors">
            Recursos
          </a>
          <a href="#how-it-works" className="text-header-foreground hover:text-primary transition-colors">
            Como Funciona
          </a>
          {/* Adicione mais links de navegação aqui, se necessário */}
        </nav>
      </div>
      <Button asChild>
        <Link to="/login">Entrar</Link>
      </Button>
    </header>
  );
};

export default Header;