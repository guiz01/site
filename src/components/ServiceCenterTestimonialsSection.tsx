"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "A central de atendimento é muito prática. Unificamos nossos canais em uma tarde e a equipe já começou a usar no dia seguinte.",
  },
  {
    quote: "O construtor de chatbot é visual e simples. Conseguimos criar nosso fluxo de triagem sem precisar de um programador.",
  },
  {
    quote: "O suporte via WhatsApp é um salva-vidas. Dúvidas rápidas são resolvidas em minutos, sem precisar abrir tickets ou esperar em filas.",
  },
  {
    quote: "A implementação foi tranquila e rápida. O time de suporte nos auxiliou via WhatsApp e tornou tudo mais fácil.",
  },
  {
    quote: "Integrar o Instagram e o Messenger foi muito direto. A plataforma guia você passo a passo, sem complicações.",
  },
  {
    quote: "A simplicidade do Kanban e da caixa de entrada fez com que nossa equipe se adaptasse imediatamente. Não houve resistência à nova ferramenta.",
  },
];

const ServiceCenterTestimonialsSection = () => {
  return (
    <section id="testimonials-service-center" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 uppercase">
          Clientes que transformaram seu atendimento
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 h-full">
                    <CardHeader className="pb-4 flex-grow">
                      <Quote className="h-12 w-12 text-primary mb-4 mx-auto" />
                      <CardTitle className="text-lg font-medium text-gray-700 dark:text-gray-300 italic">
                        "{testimonial.quote}"
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceCenterTestimonialsSection;