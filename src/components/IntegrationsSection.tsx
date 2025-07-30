"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const integrations = [
  { name: "Linx Microvix" },
  { name: "Linx Seta Digital" },
  { name: "Linx E-Millennium" },
  { name: "Linx Reshop" },
  { name: "WBuy" },
  { name: "Nuvem Shop" },
  { name: "XP Commerce" },
  { name: "Intelipost" },
  { name: "CartPanda" },
  { name: "Zoppy" },
];

const whatsappLink = "http://wa.me/5531982631178";

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Integrações Prontas para Usar
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Conecte a connectme com as plataformas que você já utiliza e automatize sua comunicação sem esforço.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 h-28">
              <CardContent className="p-0 flex items-center justify-center">
                <p className="font-semibold text-lg text-gray-800 dark:text-white">{integration.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-lg text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            Não encontrou o seu sistema? Nossa plataforma é flexível e estamos sempre adicionando novas integrações.
          </p>
          <p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
              Vamos conversar?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;