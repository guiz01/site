"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Users, Calendar, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Send className="h-8 w-8 text-primary" />,
    title: "Envio em Massa Inteligente",
    description: "Alcance milhares de clientes de uma só vez com mensagens personalizadas e eficientes.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Segmentação Avançada",
    description: "Divida seus contatos em grupos específicos para campanhas mais direcionadas e com maior impacto.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Agendamento Flexível",
    description: "Programe suas campanhas para serem enviadas no momento ideal, maximizando a abertura e o engajamento.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Relatórios de Desempenho",
    description: "Monitore o sucesso de suas campanhas com métricas detalhadas e insights valiosos.",
  },
];

const CampaignsHeroSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-hero-gradient-start-3 to-hero-gradient-end-3 text-white text-center px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Crie campanhas de marketing poderosas no WhatsApp
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up delay-200">
          Transforme leads em clientes e impulsione suas vendas com campanhas <br /> de WhatsApp eficazes e personalizadas.
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

        <Button asChild variant="default" size="lg" className="shadow-lg animate-fade-in-up delay-400">
          <a href="#contact">Comece suas Campanhas Agora</a>
        </Button>
      </div>
    </section>
  );
};

export default CampaignsHeroSection;