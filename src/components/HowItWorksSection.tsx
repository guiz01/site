"use client";

import React from "react";
import { Settings, MessageCircleMore, Sparkles } from "lucide-react";
import Timeline from "./Timeline";

const steps = [
  {
    icon: <Settings />,
    title: "1. Configure suas Mensagens",
    description: "Crie modelos de mensagens personalizadas e defina os gatilhos para o envio automático.",
  },
  {
    icon: <MessageCircleMore />,
    title: "2. Configure suas Integrações",
    description: "Integre o connectme com suas plataformas e deixe que ele envie as notificações no momento certo.",
  },
  {
    icon: <Sparkles />,
    title: "3. Veja a mágica acontecer",
    description: "Monitore o desempenho das suas campanhas com relatórios detalhados e otimize suas estratégias.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-16">
          Configurações simples e fáceis
        </h2>
        <Timeline steps={steps} />
      </div>
    </section>
  );
};

export default HowItWorksSection;