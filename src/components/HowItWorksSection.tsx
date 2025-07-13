"use client";

import React from "react";
import { Settings, MessageCircleMore, BarChart } from "lucide-react";
import Timeline from "./Timeline"; // Importa o novo componente Timeline

const steps = [
  {
    icon: <Settings />,
    title: "1. Configure suas Mensagens",
    description: "Crie modelos de mensagens personalizadas e defina os gatilhos para o envio automático.",
  },
  {
    icon: <MessageCircleMore />,
    title: "2. Automatize o Envio",
    description: "Integre o ConnectMe com suas plataformas e deixe que ele envie as notificações no momento certo.",
  },
  {
    icon: <BarChart />,
    title: "3. Acompanhe os Resultados",
    description: "Monitore o desempenho das suas campanhas com relatórios detalhados e otimize suas estratégias.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="w-full py-16 bg-white dark:bg-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-16">
          Onboarding em 03 passos
        </h2>
        <Timeline steps={steps} /> {/* Usa o novo componente Timeline */}
      </div>
    </section>
  );
};

export default HowItWorksSection;