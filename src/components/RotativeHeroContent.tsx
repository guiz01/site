"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BulkMessageIllustration from "./BulkMessageIllustration";
import AutomatedNotificationsIllustration from "./AutomatedNotificationsIllustration";
import OmnichannelIllustration from "./OmnichannelIllustration";

interface HeroSlide {
  title: string;
  description: string;
  imageComponent: React.ReactNode;
  backgroundClasses: string;
}

const slides: HeroSlide[] = [
  {
    title: "Notificações automáticas via WhatsApp",
    description: "Envie mensagens personalizadas e automatizadas para seus clientes, diretamente pelo WhatsApp.",
    imageComponent: <AutomatedNotificationsIllustration />,
    backgroundClasses: "bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end",
  },
  {
    title: "Organize seu atendimento Omnichannel",
    description: "Unifique seus canais de comunicação como WhatsApp, Instagram e Messenger em uma única plataforma.",
    imageComponent: <OmnichannelIllustration />,
    backgroundClasses: "bg-gradient-to-br from-hero-gradient-start-2 to-hero-gradient-end-2",
  },
  {
    title: "Envie mensagens em massa pelo WhatsApp",
    description: "Alcance milhares de clientes de uma só vez com campanhas de marketing personalizadas e eficientes.",
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
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 flex-grow px-6 h-full py-12 md:py-0"> {/* Adicionado py-12 para mobile */}
              <div className="md:w-1/2 lg:w-5/12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate-fade-in-up"> {/* Ajustado tamanho do texto para mobile */}
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-6 md:mb-8 opacity-90 animate-fade-in-up delay-200"> {/* Ajustado tamanho do texto para mobile */}
                  {slide.description}
                </p>
              </div>
              <div className="md:w-1/2 lg:w-6/12 flex justify-center mt-8 md:mt-0">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"> {/* Ajustado tamanhos para mobile */}
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