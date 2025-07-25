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
    quote: "Fiquei surpreso com a rapidez para subir nossa lista de contatos. Em outras ferramentas, isso sempre foi uma dor de cabeça.",
  },
  {
    quote: "A rotação de mensagens é uma função que eu não conhecia e que fez toda a diferença para a entrega das nossas campanhas. Simples e genial.",
  },
  {
    quote: "Tinha uma dúvida sobre as variáveis e o suporte me respondeu no WhatsApp com um print da tela. Resolveu na hora.",
  },
  {
    quote: "Montar a campanha é quase como escrever uma mensagem normal. Bem direto, sem um monte de passos complicados. Em uma hora, estava tudo agendado.",
  },
  {
    quote: "O que mais gostei foi poder segmentar o público de forma visual. Consegui criar um grupo só de clientes inativos e mandar uma oferta pra eles. Funcionou muito bem.",
  },
  {
    quote: "A gente só conectou nosso número e começou a usar. Não teve nenhuma configuração complexa ou espera para aprovação.",
  },
];

const CampaignsTestimonialsSection = () => {
  return (
    <section id="testimonials-campaigns" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
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