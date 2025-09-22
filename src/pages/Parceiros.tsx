"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Send, MessageCircleMore, Users, BarChart2, ArrowRight, Star, TrendingUp, Clock, ShieldCheck, ShoppingCart, Gift } from "lucide-react";
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
              Parceria ConnectMe + {parceiroData.nome}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Transforme seu E-commerce com <span className="text-yellow-300">Automações + Campanhas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ofereça às suas clientes a solução completa de automação e marketing no WhatsApp. 
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

        {/* Seção de Oferta Especial */}
        {parceiroData.ofertaEspecial && (
          <section className="w-full py-16 bg-gradient-to-br from-cta-gradient-start to-cta-gradient-end text-white text-center px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center mb-6">
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-yellow-300">
                      {parceiroData.ofertaEspecial.preco}
                    </div>
                    <p className="text-lg opacity-75 mt-2">
                      {parceiroData.ofertaEspecial.plano}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 text-left">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Automações inteligentes de WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Campanhas de marketing em massa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Integração com WBuy</span>
                    </div>
                  </div>
                </div>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 py-3 px-8 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <a 
                    href={`${whatsappLink}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a oferta especial de automações + campanhas por R$99,00 para clientes WBuy.")}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 uppercase"
                  >
                    <ShoppingCart className="h-6 w-6" /> Quero esta oferta!
                  </a>
                </Button>
              </div>
            </div>
          </section>
        )}

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