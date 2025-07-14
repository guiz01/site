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
}

const slides: HeroSlide[] = [
  {
    title: "Notificações automáticas via WhatsApp",
    description: "Envie mensagens personalizadas e automatizadas para seus clientes, diretamente pelo WhatsApp.",
    ctaText: "Fale com um especialista",
    ctaLink: "#contact",
    imagePlaceholderText: "[Imagem do Aplicativo Aqui]",
  },
  {
    title: "Otimize seu atendimento com IA",
    description: "Automatize respostas, qualifique leads e melhore a experiência do cliente com inteligência artificial.",
    ctaText: "Saiba mais sobre IA",
    ctaLink: "#ai-solutions", // Exemplo de link para outra seção ou página
    imagePlaceholderText: "[Imagem da Solução de IA Aqui]",
  },
  // Você pode adicionar mais slides aqui para outros produtos/serviços
  // {
  //   title: "Título do Produto 3",
  //   description: "Descrição detalhada do Produto 3.",
  //   ctaText: "CTA do Produto 3",
  //   ctaLink: "#product3",
  //   imagePlaceholderText: "[Imagem do Produto 3 Aqui]",
  // },
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
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
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
                <div className="w-full max-w-md h-64 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 text-lg">
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