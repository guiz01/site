"use client";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-header text-header-foreground py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg font-semibold mb-4">connectme</p>
        <p className="text-sm text-header-foreground/80">
          &copy; {new Date().getFullYear()} connectme. Todos os direitos reservados.
        </p>
        <div className="mt-4 text-sm text-header-foreground/80">
          <Link to="/politica-de-privacidade" className="hover:text-header-foreground mx-2">Política de Privacidade</Link> | 
          <Link to="/termos-de-uso" className="hover:text-header-foreground mx-2">Termos de Serviço</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;