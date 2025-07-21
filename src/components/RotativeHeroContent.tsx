"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BulkMessageIllustration from "./BulkMessageIllustration";
import AutomatedNotificationsIllustration from "./AutomatedNotificationsIllustration";
import OmnichannelIllustration from "./OmnichannelIllustration";

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
    imageComponent: <AutomatedNotificationsIllustration />,
    backgroundClasses: "bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end",
  },
  {
    title: "Organize seu atendimento Omnichannel",
    description: "Unifique seus canais de comunicação como WhatsApp, Instagram e Messenger em uma única plataforma.",
    ctaText: "Conheça a Central",
    ctaLink: "/central-de-atendimento",
    imageComponent: <OmnichannelIllustration />,
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
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 flex-grow px-6 h-full">
              <div className="md:w-1/2 lg:w-5/12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
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
              <div className="md:w-1/2 lg:w-6/12 flex justify-center mt-8 md:mt-0">
                <div className="w-full max-w-md lg:max-w-lg h-[400px] md:h-[500px]">
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