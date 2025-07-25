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
    quote: "Ter WhatsApp, Instagram e Messenger em uma única caixa de entrada transformou nosso atendimento. A equipe está menos sobrecarregada e mais eficiente.",
  },
  {
    quote: "O chatbot inicial faz uma triagem excelente. Quando o atendimento chega para um humano, já sabemos do que se trata, o que agiliza muito o processo.",
  },
  {
    quote: "O Kanban de atendimento é genial. Visualizar o status de cada conversa nos ajudou a não deixar nenhum cliente esperando. A organização é outro nível.",
  },
  {
    quote: "Os relatórios de produtividade nos mostraram onde estavam nossos gargalos. Fizemos alguns ajustes e o tempo médio de resposta caiu pela metade.",
  },
  {
    quote: "A transferência de conversas entre equipes é muito fluida. O cliente não precisa repetir a história toda de novo, o que melhora muito a experiência dele.",
  },
  {
    quote: "Usar o aplicativo no celular para responder clientes foi uma mão na roda. Consigo resolver pendências mesmo quando não estou no escritório.",
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