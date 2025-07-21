"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircleMore } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const automationFeatures = [
  "Automações de Mensagens Ilimitadas",
  "Integrações com Plataformas Existentes",
  "Envio de Mensagens Personalizadas",
  "Relatórios Detalhados de Desempenho",
  "Suporte Dedicado via WhatsApp",
  "Compatibilidade com WhatsApp Oficial e Não Oficial",
  "Envio de Arquivos de até 20MB",
];

const whatsappLink = "http://wa.me/5531982631178";

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Nosso Plano
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Escolha a solução perfeita para automatizar sua comunicação no WhatsApp.
        </p>
        <div className="flex justify-center items-start">
          <Card className="w-full max-w-4xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-primary transform hover:-translate-y-1 relative">
            <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
              Ideal para começar
            </Badge>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* Coluna 1: Preços e Títulos */}
              <div className="text-center md:text-left">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-4xl font-bold text-primary mb-2">
                    Automações
                  </CardTitle>
                  <CardDescription className="text-xl text-gray-600 dark:text-gray-400">
                    Ideal para quem busca eficiência e resultados com automação.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                    R$ 99<span className="text-3xl font-semibold text-gray-700 dark:text-gray-300">/mês</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    por número de WhatsApp conectado/empresa
                  </p>
                </CardContent>
              </div>

              {/* Coluna 2: Recursos e Botão */}
              <div className="flex flex-col h-full">
                <ul className="text-left space-y-4 mb-10 flex-grow">
                  {automationFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 text-base">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="w-full py-3 text-lg mt-auto hover:bg-active-nav hover:text-primary-foreground">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 uppercase">
                    <MessageCircleMore className="h-6 w-6" /> Comece Agora
                  </a>
                </Button>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;