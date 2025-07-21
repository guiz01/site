"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare, Bot, Users, BarChartHorizontal } from "lucide-react";

const features = [
  {
    icon: <MessagesSquare className="h-8 w-8 text-white" />,
    title: "Atendimento Unificado",
    description: "Gerencie todas as conversas de WhatsApp, Instagram e Messenger em uma única caixa de entrada.",
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "Robôs Inteligentes",
    description: "Automatize respostas, qualifique atendimentos e direcione clientes para o setor correto com chatbots.",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Visão 360º do Cliente",
    description: "Tenha acesso ao histórico completo de interações para oferecer um suporte mais ágil e personalizado.",
  },
  {
    icon: <BarChartHorizontal className="h-8 w-8 text-white" />,
    title: "Relatórios de Produtividade",
    description: "Acompanhe o desempenho da sua equipe com métricas de tempo de resposta, satisfação e muito mais.",
  },
];

const ServiceCenterHeroSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-hero-gradient-start-2 to-hero-gradient-end-2 text-white text-center px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Centralize seu Atendimento e Encante seus Clientes
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up delay-200">
          Ofereça suporte rápido, eficiente e humanizado em um único lugar, <br /> integrando todos os seus canais de comunicação.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white p-6 rounded-lg shadow-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 ease-in-out">
              <CardHeader className="pb-4 flex flex-col items-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base opacity-80">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCenterHeroSection;