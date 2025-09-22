"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Planos para cada necessidade
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Escolha o plano perfeito para o seu negócio e comece a transformar sua comunicação com clientes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Básico */}
          <Card className="relative p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Básico</h3>
              <div className="text-4xl font-bold text-primary mb-1">R$ 49</div>
              <div className="text-gray-500 dark:text-gray-400">/mês</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Até 1.000 contatos</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Automações básicas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Suporte por e-mail</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Relatórios simples</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full">
              Começar
            </Button>
          </Card>

          {/* Plano Profissional */}
          <Card className="relative p-6 border-2 border-primary bg-primary/5 dark:bg-primary/10 border-primary/30 hover:border-primary/50 transition-colors">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-4 py-1">
                Mais popular
              </Badge>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Profissional</h3>
              <div className="text-4xl font-bold text-primary mb-1">R$ 99</div>
              <div className="text-gray-500 dark:text-gray-400">/mês</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Até 5.000 contatos</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Automações avançadas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Suporte prioritário</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Relatórios detalhados</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Integrações premium</span>
              </li>
            </ul>
            
            <Button className="w-full bg-primary hover:bg-primary/90">
              Começar
            </Button>
          </Card>

          {/* Plano Empresarial */}
          <Card className="relative p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Empresarial</h3>
              <div className="text-4xl font-bold text-primary mb-1">Personalizado</div>
              <div className="text-gray-500 dark:text-gray-400">Contato</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Contatos ilimitados</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Automações customizadas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Suporte 24/7 dedicado</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Relatórios personalizados</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">API completa</span>
              </li>
            </ul>
            
            <Button variant="outline" className="w-full">
              Contato
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;