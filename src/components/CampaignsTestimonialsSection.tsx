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
    quote: "Criar nossa primeira campanha foi muito rápido. A plataforma é tão prática que não precisamos de ajuda para começar.",
  },
  {
    quote: "A integração com nossa lista de contatos foi questão de minutos. Muito mais simples do que outras ferramentas que já usamos.",
  },
  {
    quote: "Tive uma dúvida sobre como usar as variáveis dinâmicas e o suporte no WhatsApp me respondeu na hora. Isso agiliza muito!",
  },
  {
    quote: "A simplicidade para montar e agendar os disparos é o melhor. Em menos de uma hora, nossa campanha estava pronta para rodar.",
  },
  {
    quote: "A implementação foi imediata. Não houve complicação, nem demora. Apenas conectamos e começamos a usar.",
  },
  {
    quote: "O sistema é muito intuitivo. Conseguimos segmentar nossos clientes e criar mensagens personalizadas sem nenhuma dificuldade.",
  },
];

const CampaignsTestimonialsSection = () => {
  return (
    <section id="testimonials-campaigns" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 uppercase">
          Resultados reais de nossas campanhas
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

export default CampaignsTestimonialsSection;