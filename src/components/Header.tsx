"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          ConnectMe
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Recursos
          </a>
          {/* Adicione mais links de navegação aqui, se necessário */}
        </nav>
      </div>
      <Button asChild>
        <Link to="/get-started">Comece Agora</Link>
      </Button>
    </header>
  );
};

export default Header;