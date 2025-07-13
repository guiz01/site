"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MessageSquareText, Zap, Link, BarChart2, Users, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <MessageSquareText className="h-8 w-8 text-blue-600" />,
    title: "Mensagens Personalizadas",
    description: "Crie e envie mensagens únicas para cada cliente, aumentando o engajamento e a relevância.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automação Inteligente",
    description: "Configure fluxos de trabalho automatizados para enviar notificações em momentos chave, economizando tempo.",
  },
  {
    icon: <Link className="h-8 w-8 text-blue-600" />,
    title: "Integração Fácil",
    description: "Conecte-se rapidamente com suas plataformas existentes para um fluxo de trabalho sem interrupções.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
    title: "Relatórios Detalhados",
    description: "Acompanhe o desempenho das suas campanhas com análises e relatórios completos.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Gestão de Clientes",
    description: "Organize e segmente seus clientes para campanhas mais eficazes e direcionadas.",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Agendamento Flexível",
    description: "Programe o envio de mensagens para o momento ideal, garantindo máxima abertura e leitura.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Segurança e Confiabilidade",
    description: "Seus dados e os de seus clientes estão seguros com nossa infraestrutura robusta.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-16 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Por que o ConnectMe?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;