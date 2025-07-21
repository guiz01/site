"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface HeroSlide {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imagePlaceholderText: string;
  backgroundClasses: string; // Nova propriedade para as classes de fundo
}

const slides: HeroSlide[] = [
  {
    title: "Notificações automáticas via WhatsApp",
    description: "Envie mensagens personalizadas e automatizadas para seus clientes, diretamente pelo WhatsApp.",
    ctaText: "Fale com um especialista",
    ctaLink: "#contact",
    imagePlaceholderText: "[Imagem do Aplicativo Aqui]",
    backgroundClasses: "bg-gradient-to-br from-whatsapp-green-start to-whatsapp-green-end",
  },
  {
    title: "Otimize seu atendimento com IA",
    description: "Automatize respostas, qualifique leads e melhore a experiência do cliente com inteligência artificial.",
    ctaText: "Saiba mais sobre IA",
    ctaLink: "#ai-solutions", // Exemplo de link para outra seção ou página
    imagePlaceholderText: "[Imagem da Solução de IA Aqui]",
    backgroundClasses: "bg-gradient-to-br from-whatsapp-green-start to-whatsapp-green-end",
  },
  {
    title: "Gerencie seus clientes de forma inteligente",
    description: "Organize contatos, segmente públicos e personalize a comunicação para campanhas mais eficazes.",
    ctaText: "Conheça a Gestão de Clientes",
    ctaLink: "#client-management",
    imagePlaceholderText: "[Imagem da Gestão de Clientes Aqui]",
    backgroundClasses: "bg-gradient-to-br from-whatsapp-green-start to-whatsapp-green-end",
  },
];

const RotativeHeroContent = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000, // Tempo em milissegundos para cada slide
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-full" // Garante que o carrossel ocupe a altura total
    >
      <CarouselContent className="h-full"> {/* Garante que o conteúdo do carrossel ocupe a altura total */}
        {slides.map((slide, index) => (
          <CarouselItem key={index} className={`h-full flex flex-col items-center justify-center ${slide.backgroundClasses}`}> {/* Aplica o gradiente, garante altura total e centraliza o conteúdo */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 flex-grow p-6 h-full"> {/* Adicionado h-full aqui para garantir que o conteúdo preencha a altura */}
              <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up delay-400">
                  <Button asChild variant="default" size="lg" className="shadow-lg">
                    <a href={slide.ctaLink}>{slide.ctaText}</a>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="w-full max-w-md h-[400px] md:h-[600px] bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 text-lg">
                  {slide.imagePlaceholderText}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default RotativeHeroContent;