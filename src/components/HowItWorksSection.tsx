"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Como funciona o ConnectMe?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="mb-4">{step.icon}</div>
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                  {step.description}
                </CardDescription>
                {step.image && (
                  <img
                    src={step.image}
                    alt={`Ilustração para ${step.title}`}
                    className="w-full h-auto rounded-lg mt-4 object-cover"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;