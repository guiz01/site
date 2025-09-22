"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Send, MessageCircleMore, Users, BarChart2, ArrowRight, Star, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

  const whatsappLink = parceiroData.whatsapp || "http://wa.me/5531982631178";
  const mensagemPersonalizada = parceiroData.personalizacao?.mensagemPersonalizada || "Olá! Vi seu interesse em automações e quero te mostrar como a ConnectMe pode transformar seu negócio. Vamos conversar?";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Parceria ConnectMe
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Transforme Negócios com <span className="text-yellow-300">Automações Inteligentes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ofereça às suas clientes a solução completa de automação de WhatsApp. 
              Gere receita recorrente enquanto ajuda empresas a crescerem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 uppercase"
                >
                  <MessageCircleMore className="h-6 w-6" /> {parceiroData.nome} te contacta
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <a href="#beneficios" className="flex items-center justify-center gap-2">
                  Conheça os Benefícios <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section id="beneficios" className="w-full py-16 bg-white dark:bg-background px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
              Por que ser um parceiro ConnectMe?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Receita Recorrente</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Comissionamento atrativo em todos os planos indicados, gerando renda mensal estável.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Alta Demanda</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Mercado em crescimento exponencial para soluções de automação e atendimento.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Suporte Especializado</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Acesso a equipe de especialistas para ajudar você e seus clientes a obterem sucesso.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Onboarding Rápido</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Treinamentos e materiais prontos para você começar a indicar em poucos dias.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Relatórios Detalhados</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Acompanhe suas indicações e comissões em tempo real através do painel do parceiro.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marca Forte</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Indique uma marca consolidada com milhares de clientes satisfeitos no Brasil.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios Específicos do Parceiro */}
        <section className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
              Benefícios Exclusivos para {parceiroData.nome}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parceiroData.beneficios?.map((beneficio, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-card rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 text-left">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de CTA Final */}
        <section className="w-full py-20 bg-gradient-to-br from-cta-gradient-start to-cta-gradient-end text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              {parceiroData.nome} está pronto para te mostrar como as automações da ConnectMe podem gerar resultados incríveis para você e seus clientes.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-lg"
            >
              <a 
                href={`${whatsappLink}?text=${encodeURIComponent(mensagemPersonalizada)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 uppercase"
              >
                <MessageCircleMore className="h-6 w-6" /> Falar com {parceiroData.nome}
              </a>
            </Button>
            <p className="mt-4 text-sm opacity-75">
              Ou envie uma mensagem para: {whatsappLink.replace('http://wa.me/', '+')}
            </p>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="w-full py-16 bg-white dark:bg-background px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
              O que nossos parceiros dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "As automações da ConnectMe transformaram completamente o atendimento dos meus clientes. A receita recorrente mudou o jogo para minha agência."
                </p>
                <p className="font-semibold text-gray-800 dark:text-white">— Carlos Mendes, Agência Digital Pro</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "Suporte excepcional e comissionamento justo. Finalmente encontrei uma parceria que realmente valoriza seus parceiros."
                </p>
                <p className="font-semibold text-gray-800 dark:text-white">— Ana Silva, Consultora de Vendas</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "O produto vende sozinho! Com a demanda do mercado e o suporte da ConnectMe, minhas indicações crescem mês a mês."
                </p>
                <p className="font-semibold text-gray-800 dark:text-white">— Bruno Costa, Empreendedor Digital</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parceiros;