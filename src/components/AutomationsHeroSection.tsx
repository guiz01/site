"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquarePlus, Smile, BarChart2, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <MessageSquarePlus className="h-8 w-8 text-primary" />,
    title: "Automação de Eventos",
    description: "Envie mensagens automáticas com base em eventos como status de pedido, aniversários, novos cadastros e rastreios.",
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Satisfação do Cliente",
    description: "Otimize fluxos de comunicação para garantir que seus clientes fiquem mais satisfeitos com a experiência de compra.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Relatórios Detalhados",
    description: "Acompanhe o desempenho dos seus envios de mensagens com análises e relatórios completos.",
  },
  {
    icon: <Edit className="h-8 w-8 text-primary" />,
    title: "Mensagens Personalizadas",
    description: "Crie mensagens únicas e personalizadas para cada cliente, tornando a comunicação mais relevante.",
  },
];

const AutomationsHeroSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end text-white text-center px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Automatize sua comunicação e impulsione suas vendas
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up delay-200">
          Transforme a maneira como você interage com seus clientes, <br /> garantindo mensagens certas no momento certo.
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

export default AutomationsHeroSection;