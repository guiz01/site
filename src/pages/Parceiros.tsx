"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Send, MessageCircleMore, Users, BarChart2, ArrowRight, Star, TrendingUp, Clock, ShieldCheck, ShoppingCart, Gift, HelpCircle } from "lucide-react";
import AutomationsExamplesSection from "@/components/AutomationsExamplesSection";
import BrandsCarouselSection from "@/components/BrandsCarouselSection";
import CampaignsMessageBuilderSection from "@/components/CampaignsMessageBuilderSection";
import CampaignsContactsPreviewSection from "@/components/CampaignsContactsPreviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencyCounter from "@/components/UrgencyCounter";
import usePageTitle from "@/hooks/usePageTitle";

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
        logo: "/images/agencia-digital-pro.png",
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
        logo: "/images/consultoria-vendas-expert.png",
        beneficios: [
          "Parceria com comissionamento atrativo",
          "Ferramentas de automação para seus clientes",
          " otimização de fluxos de comunicação para garantir que seus clientes fiquem mais satisfeitos com a experiência de compra.",
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
        logo: "/src/assets/logo/wbuy.png",
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
          titulo: "COMBO WBUY!",
          descricao: "Automações + Campanhas",
          preco: "R$ 99,00",
          plano: "por mês e por número de WhatsApp",
          destaque: "Oferta exclusiva para clientes WBuy"
        }
      }
    };

    return dadosSimulados[token] || {
      id: "default",
      nome: "Parceiro ConnectMe",
      logo: "/images/connectme-logo.png",
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
        <div className="flex-grow flex items-center justify-center p-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Carregando informações do parceiro...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !parceiroData) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
        <div className="flex-grow flex items-center justify-center p-6">
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
        </div>
      </div>
    );
  }

  const whatsappLink = parceiroData.whatsapp || "http://wa.me/5531982631178";
  const mensagemPersonalizada = parceiroData.personalizacao?.mensagemPersonalizada || "Olá! Vi seu interesse em automações e quero te mostrar como a ConnectMe pode transformar seu negócio. Vamos conversar?";

  // Funções disponíveis no plano
  const funcoesPlano = [
    {
      titulo: "Automação de Eventos",
      descricao: "Envie mensagens automáticas com base em eventos como status de pedido, aniversários, novos cadastros e rastreios.",
      icone: Zap
    },
    {
      titulo: "Satisfação do Cliente",
      descricao: "Otimize fluxos de comunicação para garantir que seus clientes fiquem mais satisfeitos com a experiência de compra.",
      icone: MessageCircleMore
    },
    {
      titulo: "Envio em Massa Inteligente",
      descricao: "Alcance milhares de clientes de uma só vez com mensagens personalizadas e eficientes.",
      icone: Send
    },
    {
      titulo: "Segmentação Avançada",
      descricao: "Divida seus contatos em grupos específicos para campanhas mais direcionadas e com maior impacto.",
      icone: Users
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end text-white text-center px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Logo do parceiro */}
            {parceiroData.logo && (
              <div className="mb-8">
                <img 
                  src={parceiroData.logo} 
                  alt={parceiroData.nome} 
                  className="h-16 md:h-20 mx-auto object-contain"
                />
              </div>
            )}
            
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Parceria ConnectMe + {parceiroData.nome}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-12">
              Transforme seu E-commerce com <span className="text-yellow-300">Automações + Campanhas</span>
            </h1>
            
            {/* Cards de funções dentro da Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funcoesPlano.map((funcao, index) => {
                const IconComponent = funcao.icone;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <IconComponent className="h-8 w-8 text-yellow-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">
                            {funcao.titulo}
                          </h3>
                          <p className="text-white/80 leading-relaxed">
                            {funcao.descricao}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            </div>
          </div>
        </section>

        {/* Seção de Oferta Especial */}
        {parceiroData.ofertaEspecial && (
          <section className="w-full py-16 bg-gradient-to-br from-cta-gradient-start to-cta-gradient-end text-white text-center px-12">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  {/* Preço e botão à direita - com badge de urgência acima do preço */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Badge de urgência acima do preço */}
                    <UrgencyCounter 
                      accountsRemaining={43} // 43 assinaturas restantes de 100
                      totalAccounts={100}
                      endTime={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)} // 3 dias a partir de agora
                    />
                    
                    <div className="text-center mt-6">
                      <div className="text-5xl md:text-6xl font-bold text-yellow-300 mb-2">
                        {parceiroData.ofertaEspecial.preco}
                      </div>
                      <p className="text-lg opacity-75 mb-6">
                        {parceiroData.ofertaEspecial.plano}
                      </p>
                      <div className="flex flex-col gap-4 justify-center">
                        <Button 
                          asChild 
                          size="lg" 
                          className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 py-3 px-8 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                          <a 
                            href="https://portal.basedeclientes.com.br/checkout/4e48e248-e61c-4c9a-8ab5-a77f81fbde55" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 uppercase"
                          >
                            <ShoppingCart className="h-6 w-6" /> Quero garantir minha assinatura!
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Plano à esquerda - com mais espaçamento e centralizado */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <Gift className="h-12 w-12 text-yellow-300 mr-4" />
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                          {parceiroData.ofertaEspecial.titulo}
                        </h2>
                        <Badge variant="secondary" className="bg-yellow-400 text-yellow-900 border-yellow-500">
                          {parceiroData.ofertaEspecial.destaque}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      {parceiroData.ofertaEspecial.descricao}
                    </p>
                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        <span className="text-left">Automações inteligentes de WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        <span className="text-left">Campanhas de marketing em massa</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        <span className="text-left">Integração com WBuy</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        <span className="text-left">Sem limite de Mensagens</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        <span className="text-left">Sem limite de Pedidos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                        <span className="text-left">API Oficial, API Não Oficial e Coexistencia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seção de Exemplos de Automações */}
        <AutomationsExamplesSection />

        {/* Seção de Construtor de Mensagens */}
        <CampaignsMessageBuilderSection />

        {/* Seção de Visualização de Contatos */}
        <CampaignsContactsPreviewSection />

        {/* Seção de Marcas */}
        <BrandsCarouselSection />

        {/* Seção de Testemunhos (sem título) */}
        <TestimonialsSection />

        {/* Nova seção: Ficou com dúvida? */}
        <section className="w-full py-16 bg-gray-100 dark:bg-gray-900 text-center px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <HelpCircle className="h-16 w-16 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Ficou com dúvida?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Nossa equipe está pronta para ajudar você a entender como as automações podem transformar seu negócio.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-green-500 text-white hover:bg-green-600 py-3 px-8 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <a 
                  href={`${whatsappLink}?text=${encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas sobre as automações da ConnectMe.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 uppercase"
                >
                  <MessageCircleMore className="h-6 w-6" /> Fale conosco
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Parceiros;