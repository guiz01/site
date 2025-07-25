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
    quote: "Finalmente um lugar só para ver as mensagens do Insta e do Whats. A equipe parou de se perder entre um app e outro.",
  },
  {
    quote: "Montar o robozinho de atendimento foi divertido. É só arrastar as caixinhas. Não precisei de ajuda de ninguém da TI.",
  },
  {
    quote: "O suporte pelo WhatsApp é bom demais. É rápido, direto, sem ter que ficar esperando em linha ou preenchendo formulário.",
  },
  {
    quote: "A implementação foi basicamente conectar as contas. O suporte acompanhou pelo WhatsApp pra garantir que daria tudo certo. Foi bem tranquilo.",
  },
  {
    quote: "O quadro Kanban ajudou a gente a ver na hora quem estava sem resposta. Diminuiu muito as reclamações de demora.",
  },
  {
    quote: "Minha equipe pegou o jeito de usar no primeiro dia. Como parece um WhatsApp normal, ninguém teve dificuldade.",
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