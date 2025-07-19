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
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Adquira a Solução Completa
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Acesso total à nossa plataforma de automação para revolucionar a comunicação com seus clientes.
        </p>
        <div className="flex justify-center">
          <Card className="w-full max-w-md p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-primary transform hover:-translate-y-1">
            <CardHeader className="pb-6">
              <CardTitle className="text-4xl font-bold text-primary mb-2">
                ConnectMe Essencial
              </CardTitle>
              <CardDescription className="text-xl text-gray-600 dark:text-gray-400">
                Tudo que você precisa para automatizar suas vendas e atendimento.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-2">
                <span className="text-6xl font-extrabold text-gray-900 dark:text-white">R$ 99</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                mensal, por número de WhatsApp conectado
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
                <Link to="#contact">Quero Automatizar Agora</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;