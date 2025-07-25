"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageCircleMore, Briefcase, LogIn, MenuIcon } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import cnLogo from "@/assets/logo/cn_logo.png"; // Importa a nova logo

const Header = () => {
  const location = useLocation();
  const scrolled = useScrollPosition();

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
      scrolled ? "fixed top-0 left-0 right-0 py-2" : "relative py-4"
    )}>
      {/* Logo on the left */}
      <Link to="/" className="flex items-center">
        <img 
          src={cnLogo} // Usando a logo importada
          alt="connectme Logo" 
          className={cn(
            "transition-all duration-300 ease-in-out",
            scrolled ? "h-12" : "h-16"
          )} 
        />
      </Link>

      {/* Desktop Navigation links - centered within their own flexible container */}
      <div className="hidden md:flex flex-grow justify-center">
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

      {/* Desktop Buttons on the right */}
      <div className="hidden md:flex items-center space-x-4">
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
          <Link to="/entrar" className="flex items-center gap-2">
            <LogIn className="h-5 w-5" /> Entrar
          </Link>
        </Button>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] flex flex-col">
            <div className="flex items-center justify-center py-4 border-b">
              <img 
                src={cnLogo} // Usando a logo importada
                alt="connectme Logo" 
                className="h-16" 
              />
            </div>
            <nav className="flex flex-col gap-4 py-6 flex-grow">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200",
                      location.pathname === link.to
                        ? "bg-active-nav text-primary-foreground"
                        : "text-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="flex flex-col gap-4 pb-6 border-t pt-6">
              <SheetClose asChild>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-active-nav hover:text-primary-foreground w-full">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Briefcase className="h-5 w-5" /> Contratar
                  </a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="bg-purpleButton text-purpleButton-foreground hover:bg-purpleButton/90 w-full">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageCircleMore className="h-5 w-5" /> Suporte
                  </a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link to="/entrar" className="flex items-center justify-center gap-2">
                    <LogIn className="h-5 w-5" /> Entrar
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;