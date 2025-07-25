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
    quote: "A segmentação de contatos é fantástica. Conseguimos criar uma campanha específica para clientes que não compravam há 3 meses e o resultado foi surpreendente.",
  },
  {
    quote: "Enviar mensagens em massa sem ser bloqueado era minha maior preocupação. A rotação de modelos de mensagem da connectme resolveu isso. Nossas campanhas estão chegando para todos.",
  },
  {
    quote: "A interface para criar as mensagens é muito fácil de usar. Em poucos minutos, montamos uma campanha completa com variáveis e agendamento.",
  },
  {
    quote: "Os relatórios de desempenho nos deram uma visão clara do que funciona e do que não funciona. Com isso, otimizamos nossas campanhas e melhoramos muito a taxa de conversão.",
  },
  {
    quote: "Finalmente uma ferramenta que nos permite falar com milhares de clientes de forma personalizada. O impacto nas vendas foi imediato.",
  },
  {
    quote: "Importar nossa lista de contatos foi super simples. Em menos de uma hora, já estávamos com nossa primeira campanha no ar. Muito prático.",
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