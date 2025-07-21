"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BulkMessageIllustration from "./BulkMessageIllustration";

interface HeroSlide {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imageComponent: React.ReactNode;
  backgroundClasses: string;
}

const slides: HeroSlide[] = [
  {
    title: "Notificações automáticas via WhatsApp",
    description: "Envie mensagens personalizadas e automatizadas para seus clientes, diretamente pelo WhatsApp.",
    imageComponent: (
      <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 text-lg">
        [Imagem do Aplicativo Aqui]
      </div>
    ),
    backgroundClasses: "bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end",
  },
  {
    title: "Organize seu atendimento Omnichannel",
    description: "Unifique seus canais de comunicação como WhatsApp, Instagram e Messenger em uma única plataforma.",
    ctaText: "Conheça a Central",
    ctaLink: "/central-de-atendimento",
    imageComponent: (
      <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 text-lg">
        [Imagem da Central de Atendimento Aqui]
      </div>
    ),
    backgroundClasses: "bg-gradient-to-br from-hero-gradient-start-2 to-hero-gradient-end-2",
  },
  {
    title: "Envie mensagens em massa pelo WhatsApp",
    description: "Alcance milhares de clientes de uma só vez com campanhas de marketing personalizadas e eficientes.",
    ctaText: "Conheça as Campanhas",
    ctaLink: "/campanhas",
    imageComponent: <BulkMessageIllustration />,
    backgroundClasses: "bg-gradient-to-br from-hero-gradient-start-3 to-hero-gradient-end-3",
  },
];

const RotativeHeroContent = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-full"
    >
      <CarouselContent className="h-full">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className={`h-full flex flex-col items-center justify-center ${slide.backgroundClasses}`}>
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 flex-grow p-6 h-full">
              <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
                  {slide.description}
                </p>
                {slide.ctaText && slide.ctaLink && (
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up delay-400">
                    <Button asChild variant="default" size="lg" className="shadow-lg">
                      <Link to={slide.ctaLink}>{slide.ctaText}</Link>
                    </Button>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="w-full max-w-md h-[400px] md:h-[500px]">
                  {slide.imageComponent}
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