"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Send, MessagesSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"; // Importar cn para combinar classes

const products = [
  {
    icon: <Zap className="h-10 w-10 text-white" />,
    title: "Automações",
    description: "Envie mensagens automáticas com base em eventos, economize tempo e mantenha seus clientes sempre informados.",
    link: "/automacoes",
    gradientClasses: "from-hero-gradient-start to-hero-gradient-end", // Roxo
    borderColorClass: "border-hero-gradient-start", // Cor da borda superior
  },
  {
    icon: <Send className="h-10 w-10 text-white" />,
    title: "Campanhas",
    description: "Alcance milhares de clientes com campanhas de marketing em massa, segmentadas e de alto impacto no WhatsApp.",
    link: "/campanhas",
    gradientClasses: "from-hero-gradient-start-3 to-hero-gradient-end-3", // Verde
    borderColorClass: "border-hero-gradient-start-3", // Cor da borda superior
  },
  {
    icon: <MessagesSquare className="h-10 w-10 text-white" />,
    title: "Central de Atendimento",
    description: "Unifique todos os seus canais de comunicação em um só lugar e ofereça um suporte ágil e organizado.",
    link: "/central-de-atendimento",
    gradientClasses: "from-hero-gradient-start-2 to-hero-gradient-end-2", // Azul
    borderColorClass: "border-hero-gradient-start-2", // Cor da borda superior
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative z-10 w-full py-16 bg-white dark:bg-background px-6 -mt-[18.7rem] rounded-t-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Conheça Nossas Soluções
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Temos a ferramenta certa para cada etapa da sua comunicação. Automatize, engaje e organize seu atendimento com a connectme.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col text-center shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl h-full max-w-sm mx-auto bg-card text-foreground",
                `border-t-4 ${product.borderColorClass}` // Aplica a cor da borda superior
              )}
            >
              <CardHeader className="items-center pb-4">
                <div className={cn("p-4 rounded-full mb-4 bg-gradient-to-br", product.gradientClasses)}>
                  {product.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow py-8">
                <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center pt-4 mt-auto">
                <Button asChild className={cn("w-full py-3 text-lg text-white hover:opacity-90", product.gradientClasses)}>
                  <Link to={product.link} className="flex items-center gap-2">
                    Saiba Mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;