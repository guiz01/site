"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, Zap, Send, MessagesSquare } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Entrar = () => {
  usePageTitle("Entrar | ConnectMe");

  const modules = [
    {
      name: "Automações",
      description: "Acesse o painel para gerenciar suas automações de mensagens.",
      href: "https://app.connectme.chat",
      icon: <Zap className="h-10 w-10 text-white" />,
      gradientClasses: "from-hero-gradient-start to-hero-gradient-end",
    },
    {
      name: "Campanhas",
      description: "Crie e dispare campanhas de marketing em massa.",
      href: "https://app.connectme.chat",
      icon: <Send className="h-10 w-10 text-white" />,
      gradientClasses: "from-hero-gradient-start-3 to-hero-gradient-end-3",
    },
    {
      name: "Central de Atendimento",
      description: "Gerencie conversas de múltiplos canais em um só lugar.",
      href: "https://central.connectme.chat",
      icon: <MessagesSquare className="h-10 w-10 text-white" />,
      gradientClasses: "from-hero-gradient-start-2 to-hero-gradient-end-2",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Acesse sua conta
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Selecione a solução que deseja utilizar e acesse o painel correspondente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {modules.map((module) => (
            <a
              key={module.name}
              href={module.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              <Card className="flex flex-col text-center h-full bg-card text-foreground border-none">
                <CardHeader className="items-center p-8">
                  <div className={cn("p-4 rounded-full mb-4 bg-gradient-to-br", module.gradientClasses)}>
                    {module.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {module.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-8">
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                    {module.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 bg-gray-50 dark:bg-gray-800/50 mt-auto transition-colors duration-300 group-hover:bg-primary/10">
                  <div className="flex items-center justify-center w-full text-primary font-semibold text-lg">
                    Acessar
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Entrar;