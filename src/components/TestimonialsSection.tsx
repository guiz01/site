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
    quote: "Achei que ia ser complicado, mas a equipe começou a usar no mesmo dia. O sistema é bem direto ao ponto, sem frescura.",
  },
  {
    quote: "Conectar com nosso sistema de vendas foi mais fácil do que eu imaginava. Não precisamos chamar nenhum técnico, fizemos tudo sozinhos.",
  },
  {
    quote: "Qualquer coisinha que a gente precisa, é só chamar no WhatsApp. Eles respondem rápido e resolvem na hora, sem ter que abrir chamado.",
  },
  {
    quote: "A gente achou que ia levar semanas pra implantar, mas em uma tarde já estava tudo funcionando. Foi um alívio.",
  },
  {
    quote: "O dia a dia ficou bem mais leve. A tela é limpa, fácil de achar as coisas. Não perdemos mais tempo com sistema complicado.",
  },
  {
    quote: "O suporte no WhatsApp é o que mais me ganhou. É como falar com uma pessoa, não com um robô. Resolve de verdade.",
  },
];

interface TestimonialsSectionProps {
  title?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title = "O que nossos clientes dizem" }) => {
  return (
    <section id="testimonials" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 uppercase">
          {title}
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

export default TestimonialsSection;