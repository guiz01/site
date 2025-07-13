"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-header text-header-foreground py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg font-semibold mb-4">ConnectMe</p>
        <p className="text-sm text-header-foreground/80">
          &copy; {new Date().getFullYear()} ConnectMe. Todos os direitos reservados.
        </p>
        <div className="mt-4 text-sm text-header-foreground/80">
          <a href="#" className="hover:text-header-foreground mx-2">Política de Privacidade</a> | 
          <a href="#" className="hover:text-header-foreground mx-2">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;