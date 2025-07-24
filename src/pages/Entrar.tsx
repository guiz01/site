"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Entrar = () => {
  usePageTitle("Entrar | ConnectMe");

  const modules = [
    {
      name: "Automações",
      href: "https://app.connectme.chat",
    },
    {
      name: "Campanhas",
      href: "https://app.connectme.chat",
    },
    {
      name: "Central de Atendimento",
      href: "https://central.connectme.chat",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <Card className="w-full max-w-md text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Escolha o módulo</CardTitle>
            <CardDescription>Selecione a solução que deseja acessar.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {modules.map((module) => (
              <Button key={module.name} asChild size="lg" className="w-full justify-between">
                <a href={module.href} target="_blank" rel="noopener noreferrer">
                  {module.name}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Entrar;