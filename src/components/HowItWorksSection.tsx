"use client";

import React from "react";
import { Settings, MessageCircleMore, BarChart } from "lucide-react";

const steps = [
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "1. Configure suas Mensagens",
    description: "Crie modelos de mensagens personalizadas e defina os gatilhos para o envio automático.",
    image: null, // No image for this step
  },
  {
    icon: <MessageCircleMore className="h-10 w-10 text-primary" />,
    title: "2. Automatize o Envio",
    description: "Integre o ConnectMe com suas plataformas e deixe que ele envie as notificações no momento certo.",
    image: null, // No image for this step
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "3. Acompanhe os Resultados",
    description: "Monitore o desempenho das suas campanhas com relatórios detalhados e otimize suas estratégias.",
    image: "https://connectme.chat/wp-content/uploads/2025/01/atualizacao_em_tempo_real.webp",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="w-full py-16 bg-white dark:bg-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-16">
          Como funciona o ConnectMe?
        </h2>
        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 ${
                step.image ? "md:flex-row" : ""
              } ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              {step.image && (
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={step.image}
                    alt={`Ilustração para ${step.title}`}
                    className="w-full max-w-md h-auto rounded-lg object-cover"
                  />
                </div>
              )}
              <div className={`md:w-1/2 text-center ${step.image ? "md:text-left" : "w-full"}`}>
                <div className="mb-4 flex justify-center md:justify-start">{step.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;