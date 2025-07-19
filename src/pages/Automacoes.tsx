"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Automacoes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Página de Automações</h1>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Automacoes;