"use client";

import React from "react";
import { Link as IconLink, Users, Smile } from "lucide-react";
import Timeline from "./Timeline";

const steps = [
  {
    icon: <IconLink />,
    title: "1. Conecte seus Canais",
    description: "Integre WhatsApp, Instagram, Messenger e mais em uma única caixa de entrada.",
  },
  {
    icon: <Users />,
    title: "2. Configure suas Equipes",
    description: "Crie equipes, defina regras de distribuição e automatize o direcionamento de conversas.",
  },
  {
    icon: <Smile />,
    title: "3. Atenda e Analise",
    description: "Responda seus clientes com agilidade e acompanhe os indicadores de satisfação e produtividade.",
  },
];

const ServiceCenterHowItWorksSection = () => {
  return (
    <section id="how-it-works-service-center" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-16 uppercase">
          Organize seu atendimento em 3 passos
        </h2>
        <Timeline steps={steps} />
      </div>
    </section>
  );
};

export default ServiceCenterHowItWorksSection;