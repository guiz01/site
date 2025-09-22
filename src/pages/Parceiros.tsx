"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Send, MessageCircleMore, Users, BarChart2, ArrowRight, Star, TrendingUp, Clock, ShieldCheck, ShoppingCart, Gift, Calendar, Heart, Users as UsersIcon, TrendingUp as TrendingUpIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageTitle from "@/hooks/usePageTitle";
import AutomationsExamplesSection from "@/components/AutomationsExamplesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OptOutSection from "@/components/OptOutSection";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";

// Interface para os dados do parceiro
interface ParceiroData {
  id: string;
  nome: string;
  logo?: string;
  beneficios?: string[];
  whatsapp?: string;
  personalizacao?: {
    corPrimaria?: string;
    corSecundaria?: string;
    mensagemPersonalizada?: string;
  };
  ofertaEspecial?: {
    titulo: string;
    descricao: string;
    preco: string;
    plano: string;
    destaque?: string;
  };
}

const Parceiros = () => {
  const [searchParams] = useSearchParams();
  const [parceiroToken, setParceiroToken] = useState<string | null>(null);
  const [parceiroData, setParceiroData] = useState<ParceiroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulação de busca de dados do parceiro
  // Na implementação real, você faria uma chamada API aqui
  const buscarDadosParceiro = async (token: string): Promise<ParceiroData> => {
    // Simulação de delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Dados simulados - na implementação real, viria do seu backend
    const dadosSimulados: Record<string, ParceiroData> = {
      "token123": {
        id: "1",
        nome: "Agência Digital Pro",
        beneficios: [
          "Comissão de 15% em todos os planos indicados",
          "Suporte dedicado para parceiros",
          "Materiais de marketing prontos para uso",
          "Acesso antecipado a novas funcionalidades",
          "Treinamentos exclusivos sobre automações"
        ],
        whatsapp: "http://wa.me/5531982631178",
        personalizacao: {
          mensagemPersonalizada: "Olá! Sou da Agência Digital Pro e quero te apresentar como as automações da ConnectMe podem transformar seu negócio. Vamos conversar?"
        }
      },
      "token456": {
        id: "2", 
        nome: "Consultoria de Vendas Expert",
        beneficios: [
          "Parceria com comissionamento atrativo",
          "Ferramentas de automação para seus clientes",
          "Relatórios de performance detalhados",
          "Integração com seus sistemas existentes",
          "Treinamento contínuo sobre novas features"
        ],
        whatsapp: "http://wa.me/5531982631178",
        personalizacao: {
          mensagemPersonalizada: "Olá! Sou da Consultoria de Vendas Expert e quero mostrar como as automações da ConnectMe podem impulsionar as vendas dos seus clientes. Interessado em uma demonstração?"
        }
      },
      "wbuy": {
        id: "3",
        nome: "WBuy",
        beneficios: [
          "Integração nativa com a plataforma WBuy",
          "Comissionamento exclusivo para parceiros WBuy",
          "Suporte técnico especializado para integração",
          "Treinamentos sobre automação para e-commerce",
          "Acesso a relatórios de performance integrados"
        ],
        whatsapp: "http://wa.me/5531982631178",
        personalizacao: {
          mensagemPersonalizada: "Olá! Sou da WBuy e quero te mostrar como as automações da ConnectMe podem impulsionar as vendas da sua loja online. Vamos conversar sobre integração?"
        },
        ofertaEspecial: {
          titulo: "Plano Completo WBuy",
          descricao: "Automações + Campanhas de WhatsApp para impulsionar suas vendas",
          preco: "R$ 99,00/mês",
          plano: "Plano Combinado",
          destaque: "Oferta exclusiva para clientes WBuy"
        }
      }
    };

    return dadosSimulados[token] || {
      id: "default",
      nome: "Parceiro ConnectMe",
      beneficios: [
        "Oportunidade de negócio recorrente",
        "Produto de alta demanda no mercado",
        "Suporte técnico e comercial especializado",
        "Material de marketing e vendas",
        "Comissionamento competitivo"
      ],
      whatsapp: "http://wa.me/5531982631178",
      personalizacao: {
        mensagemPersonalizada: "Olá! Sou um parceiro ConnectMe e quero te apresentar como nossas soluções de automação podem ajudar seu negócio a crescer. Vamos conversar?"
      }
    };
  };

  useEffect(() => {
    const token = searchParams.get("parceiro");
    if (token) {
      setParceiroToken(token);
      buscarDadosParceiro(token)
        .then(data => {
          setParceiroData(data);
          setIsLoading(false);
        })
        .catch(err => {
          setError("Não foi possível carregar os dados do parceiro");
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setError("Token de parceiro não informado");
    }
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Carregando informações do parceiro...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !parceiroData) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6">
          <Card className="w-full max-w-lg text-center shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ops! Algo deu errado</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{error || "Token de parceiro inválido"}</p>
              <Button asChild>
                <a href="/" className="flex items-center justify-center gap-2">
                  Voltar para o site <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const whatsappLink = "http://wa.me/5531982631178"; // Sempre ConnectMe
  const mensagemPadrao = "Olá! Vi seu interesse em automações e quero te mostrar como a ConnectMe pode transformar seu negócio. Vamos conversar?";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Parceria ConnectMe + {parceiroData.nome}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Transforme seu E-commerce com <span className="text-yellow-300">Automações + Campanhas</span>
            </h1>
          </div>
        </section>

        {/* Seção de Cards de Funcionalidades - Primeira seção com gradiente roxo */}
        <section className="w-full py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">Automação de Eventos</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Envie mensagens automáticas com base em eventos como status de pedido, aniversários, novos cadastros e rastreios.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Notificações de pedido</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Aniversários personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Rastreio de entregas</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">Satisfação do Cliente</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Otimize fluxos de comunicação para garantir que seus clientes fiquem mais satisfeitos com a experiência de compra.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Feedback pós-compra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Suporte automatizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Resolução rápida</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <UsersIcon className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">Segmentação de Clientes</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Crie segmentações para enviar mensagens em massa de acordo com o perfil dos seus clientes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Por comportamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Por histórico de compras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Por valor do ticket</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUpIcon className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">Análise RFM</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Utilize de análise RFM para gerar campanhas para clientes que fazem parte de grupos específicos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Recência (R)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Frequência (F)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-white">Monetário (M)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Adicionando os componentes da página de automações */}
        <AutomationsExamplesSection />
        <OptOutSection />
        <BrandsCarouselSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Parceiros;