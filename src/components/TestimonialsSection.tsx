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
    quote: "O sistema é incrivelmente simples e prático. Conseguimos começar a usar no mesmo dia, sem precisar de um treinamento extenso para a equipe.",
  },
  {
    quote: "A integração com nossas outras ferramentas foi surpreendentemente fácil. Em poucos cliques, tudo estava conectado e funcionando perfeitamente.",
  },
  {
    quote: "Ter o suporte todo via WhatsApp é um diferencial enorme. Qualquer dúvida que surge, a resposta é rápida e direta, sem burocracia.",
  },
  {
    quote: "A implementação foi muito mais rápida do que esperávamos. Pensamos que levaria semanas, mas em poucas horas já estávamos com a operação rodando na plataforma.",
  },
  {
    quote: "O que mais valorizamos é a praticidade. A interface é limpa e intuitiva, o que torna o trabalho diário muito mais ágil e menos cansativo.",
  },
  {
    quote: "Finalmente uma plataforma que entrega o que promete: é fácil de usar, rápida de implementar e com um suporte que realmente resolve.",
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