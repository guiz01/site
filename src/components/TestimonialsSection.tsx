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
    quote: "No começo, eu estava um pouco cético, mas as automações realmente economizam muito tempo. A configuração inicial levou um tempinho, mas o suporte ajudou e agora tudo roda sozinho.",
  },
  {
    quote: "A ferramenta é poderosa. Conseguimos centralizar nossa comunicação e o resultado foi um aumento notável na satisfação dos clientes. Recomendo!",
  },
  {
    quote: "O que eu mais gosto é a simplicidade. Mesmo sem ser especialista em tecnologia, consegui criar fluxos de mensagens que funcionam muito bem para o meu negócio.",
  },
  {
    quote: "Aumentamos nossas vendas em cerca de 20% depois que começamos a usar as campanhas de WhatsApp. O retorno sobre o investimento foi muito rápido.",
  },
  {
    quote: "A organização que a plataforma trouxe para o nosso atendimento foi um divisor de águas. Antes era uma bagunça, agora cada atendente sabe exatamente o que fazer.",
  },
  {
    quote: "O suporte técnico é um diferencial. Sempre que tive uma dúvida, fui atendido rapidamente e com muita clareza. Isso faz toda a diferença.",
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