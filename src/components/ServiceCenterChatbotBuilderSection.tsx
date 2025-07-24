"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, MessageSquare, MousePointerClick, UserCheck, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper component for a single flow block
const FlowBlock = ({ icon, title, content, className, children }: { icon: React.ReactNode, title: string, content?: string, className?: string, children?: React.ReactNode }) => (
  <Card className={cn("absolute w-64 bg-white dark:bg-gray-800 shadow-xl border-2 z-10", className)}>
    <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-3 border-b dark:border-gray-700">
      {icon}
      <CardTitle className="text-sm font-semibold">{title}</CardTitle>
    </CardHeader>
    {content && <CardContent className="p-3 text-sm text-gray-600 dark:text-gray-300">{content}</CardContent>}
    {children}
    {/* Connection points */}
    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-gray-800"></div>
    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400 border-2 border-white dark:border-gray-800"></div>
    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400 border-2 border-white dark:border-gray-800"></div>
    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-gray-800"></div>
  </Card>
);

// Helper for drawing connecting lines
const SvgConnector = ({ path }: { path: string }) => (
  <svg className="absolute top-0 left-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
    <path d={path} stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="5,5" />
  </svg>
);

const ServiceCenterChatbotBuilderSection = () => {
  return (
    <section id="chatbot-builder" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Crie seu Próprio Chatbot com Facilidade
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Construa fluxos de atendimento automatizados com nosso editor visual. Arraste e solte blocos para criar um bot que trabalha 24/7 para você.
        </p>

        <div className="relative w-full max-w-5xl mx-auto h-[600px] bg-gray-100 dark:bg-gray-900/50 rounded-lg shadow-inner overflow-hidden border-4 border-gray-200 dark:border-gray-700"
             style={{ backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          
          {/* SVG Connectors - Paths calculated for a 1152px wide container (max-w-6xl) */}
          <SvgConnector path="M 296 300 C 320 300, 320 135, 344 135" />
          <SvgConnector path="M 472 190 L 472 300" />
          <SvgConnector path="M 600 365 C 664 365, 664 205, 728 205" />
          <SvgConnector path="M 600 365 C 664 365, 664 455, 728 455" />

          {/* Flow Blocks - Positions are hardcoded for precision */}
          <FlowBlock
            className="left-[40px] top-[245px] border-green-500"
            icon={<PlayCircle className="h-5 w-5 text-green-500" />}
            title="Início do Fluxo"
            content="Cliente envia a primeira mensagem."
          />

          <FlowBlock
            className="left-[344px] top-[80px] border-primary"
            icon={<MessageSquare className="h-5 w-5 text-primary" />}
            title="Enviar Mensagem"
            content="Olá! 👋 Como posso te ajudar?"
          />

          <FlowBlock
            className="left-[344px] top-[300px] border-primary"
            icon={<MousePointerClick className="h-5 w-5 text-primary" />}
            title="Adicionar Botões"
          >
            <CardContent className="p-0">
              <div className="p-2 border-t dark:border-gray-700 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">Falar com Suporte</div>
              <div className="p-2 border-t dark:border-gray-700 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">Ver Promoções</div>
            </CardContent>
          </FlowBlock>

          <FlowBlock
            className="left-[728px] top-[150px] border-purple-500"
            icon={<UserCheck className="h-5 w-5 text-purple-500" />}
            title="Transferir para Equipe"
            content="Transferir para a equipe de Suporte."
          />
          
          <FlowBlock
            className="left-[728px] top-[400px] border-red-500"
            icon={<Bot className="h-5 w-5 text-red-500" />}
            title="Fim do Fluxo"
            content="O bot finaliza o atendimento."
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCenterChatbotBuilderSection;