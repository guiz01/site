"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircleMore } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const campaignFeatures = [
  "Envio de mensagens em massa",
  "Agendamento de mensagens",
  "Rotação de Modelos de Mensagens",
  "Segmentação de clientes",
  "Facilidade de importação de clientes",
  "Relatórios de Desempenho",
  "Compatibilidade com WhatsApp Oficial e Não Oficial",
  "Envio de Arquivos de até 20MB",
  "Suporte Dedicado via WhatsApp",
];

const whatsappLink = "http://wa.me/5531982631178";

const CampaignsPricingSection = () => {
  return (
    <section id="pricing" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Nosso Plano
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          A solução completa para suas campanhas no WhatsApp.
        </p>
        <div className="flex justify-center items-start">
          <Card className="w-full max-w-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-primary transform hover:-translate-y-1 relative flex flex-col h-full">
            <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
              Recomendado
            </Badge>
            <CardHeader className="pb-6">
              <CardTitle className="text-4xl font-bold text-primary mb-2">
                Campanhas
              </CardTitle>
              <CardDescription className="text-xl text-gray-600 dark:text-gray-400">
                O poder total para automação e engajamento em massa.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex flex-col flex-grow">
              <div className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                R$ 198<span className="text-3xl font-semibold text-gray-700 dark:text-gray-300">/mês</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                por número de WhatsApp conectado/empresa
              </p>
              <ul className="text-left space-y-4 mb-10">
                {campaignFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full py-3 text-xl mt-auto hover:bg-active-nav hover:text-primary-foreground">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 uppercase">
                  <MessageCircleMore className="h-6 w-6" /> Comece Agora
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CampaignsPricingSection;