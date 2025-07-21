"use client";

import React from "react";
import { Upload, MessageCircleMore, TrendingUp } from "lucide-react";
import Timeline from "./Timeline";

const steps = [
  {
    icon: <Upload />,
    title: "1. Importe e Segmente seus Contatos",
    description: "Carregue sua lista de contatos e utilize filtros avançados para criar segmentos de público.",
  },
  {
    icon: <MessageCircleMore />,
    title: "2. Crie Mensagens e Agende o Envio",
    description: "Desenvolva mensagens persuasivas e defina a data e hora ideais para o disparo da sua campanha.",
  },
  {
    icon: <TrendingUp />,
    title: "3. Monitore e Otimize seus Resultados",
    description: "Acompanhe as métricas de entrega e engajamento em tempo real para refinar suas próximas campanhas.",
  },
];

const CampaignsHowItWorksSection = () => {
  return (
    <section id="how-it-works-campaigns" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-16">
          Crie campanhas de sucesso em 3 passos
        </h2>
        <Timeline steps={steps} />
      </div>
    </section>
  );
};

export default CampaignsHowItWorksSection;