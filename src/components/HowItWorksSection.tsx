"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Como funciona
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Transforme sua comunicação com clientes em 3 passos simples
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Cadastre-se
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Crie sua conta e configure sua loja ou negócio em minutos
            </p>
            <div className="flex justify-center">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Configure Automações
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Escolha entre dezenas de templates ou crie suas próprias automações
            </p>
            <div className="flex justify-center">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Comece a Automatizar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Suas automações começam a funcionar automaticamente, gerando resultados
            </p>
            <div className="flex justify-center">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
          </Card>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Pronto para transformar seu negócio?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Junte-se a milhares de empresas que já aumentaram suas vendas com automações inteligentes
              </p>
            </div>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
              Começar Agora <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;