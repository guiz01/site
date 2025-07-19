"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 uppercase">
          Planos e Preços
        </h2>
        <div className="flex justify-center">
          <Card className="w-full max-w-md p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-primary">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                Plano Essencial
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                Ideal para pequenas e médias empresas.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                R$ 99<span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">/mês</span>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                por número de WhatsApp conectado/empresa
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Automações de Mensagens
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Sem limite de integrações
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Sem limite de mensagens
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Sem limite de pedidos
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Sem limite de rastreios
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Todos os Relatórios
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Integração com WhatsApp Oficial e Não Oficial
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Suporte por WhatsApp
                </li>
                <li className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Envio de arquivos de até 20mb
                </li>
              </ul>
              <Button asChild size="lg" className="w-full">
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