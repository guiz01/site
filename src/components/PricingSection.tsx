"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
          Descubra a solução perfeita para automatizar sua comunicação no WhatsApp.
        </p>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 uppercase">
          Nosso Plano Essencial
        </h2>
        <div className="flex justify-center">
          <Card className="w-full max-w-md p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-primary transform hover:-translate-y-1">
            <CardHeader className="pb-6">
              <CardTitle className="text-4xl font-bold text-primary mb-2">
                Plano Essencial
              </CardTitle>
              <CardDescription className="text-xl text-gray-600 dark:text-gray-400">
                Ideal para pequenas e médias empresas que buscam eficiência e resultados.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                R$ 99<span className="text-3xl font-semibold text-gray-700 dark:text-gray-300">/mês</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                por número de WhatsApp conectado/empresa
              </p>
              <ul className="text-left space-y-4 mb-10">
                <li className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  Automações de Mensagens Ilimitadas
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  Integrações com Plataformas Existentes
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  Envio de Mensagens Personalizadas
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  Relatórios Detalhados de Desempenho
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  Suporte Dedicado via WhatsApp
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  Compatibilidade com WhatsApp Oficial e Não Oficial
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  Envio de Arquivos de até 20MB
                </li>
              </ul>
              <Button asChild size="lg" className="w-full py-3 text-xl">
                <Link to="#contact">Comece Agora</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;