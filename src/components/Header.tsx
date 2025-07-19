"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
import { cn } from "@/lib/utils"; // Importa cn para classes condicionais

const Header = () => {
  const location = useLocation(); // Obtém o objeto de localização

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
        <nav className="flex space-x-2"> {/* Reduzido o espaço para acomodar o padding */}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-md transition-colors duration-200", // Classes base para padding e transição
                location.pathname === link.to
                  ? "bg-active-nav text-primary-foreground" // Classes para item ativo usando a nova cor
                  : "text-foreground hover:bg-muted hover:text-foreground" // Classes para item inativo, texto permanece foreground no hover
              )}
            >
              {link.label}
            </Link>
          ))}
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