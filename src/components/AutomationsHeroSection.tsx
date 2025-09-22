"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Send, MessageCircleMore, Users, BarChart2, ArrowRight, Star, TrendingUp, Clock, ShieldCheck, ShoppingCart, Gift } from "lucide-react";

const AutomationsHeroSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          Automações Inteligentes
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Automatize sua comunicação e impulsione suas vendas
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
          Transforme seu e-commerce com automações inteligentes de WhatsApp que convertem visitantes em clientes fiéis.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-lg"
          >
            <a 
              href="http://wa.me/5531982631178?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20automações%20da%20ConnectMe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 uppercase"
            >
              <MessageCircleMore className="h-6 w-6" /> Vamos conversar
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-primary py-3 px-8 rounded-md text-lg"
          >
            <a href="#como-funciona" className="flex items-center justify-center gap-2 uppercase">
              Como funciona <ArrowRight className="h-6 w-6" />
            </a>
          </Button>
        </div>
        
        {/* Elementos que serão copiados - Linha 43 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-yellow-300" />
              <h3 className="text-xl font-bold">Automações Inteligentes</h3>
            </div>
            <p className="text-white/80 mb-4">
              Respostas instantâneas e personalizadas para cada cliente, 24/7.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Chatbots inteligentes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Respostas programáveis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Integração com e-commerce</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Send className="h-8 w-8 text-yellow-300" />
              <h3 className="text-xl font-bold">Campanhas de Marketing</h3>
            </div>
            <p className="text-white/80 mb-4">
              Envie mensagens em massa segmentadas para aumentar suas vendas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Segmentação avançada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Templates personalizados</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Relatórios de performance</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <BarChart2 className="h-8 w-8 text-yellow-300" />
              <h3 className="text-xl font-bold">Análise de Performance</h3>
            </div>
            <p className="text-white/80 mb-4">
              Métricas detalhadas para otimizar suas estratégias de comunicação.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Taxa de conversão</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Engajamento por campanha</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>ROI calculado</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AutomationsHeroSection;