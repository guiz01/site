"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar?: string; // Opcional: URL da imagem do avatar
}

const testimonials: Testimonial[] = [
  {
    quote: "A ConnectMe revolucionou a forma como nos comunicamos com nossos clientes. As automações são incríveis e nos poupam horas de trabalho manual!",
    name: "Ana Paula",
    title: "CEO, Loja de Roupas X",
    avatar: "https://via.placeholder.com/150/FF5733/FFFFFF?text=AP", // Exemplo de avatar
  },
  {
    quote: "Com a ConnectMe, conseguimos aumentar nosso engajamento e as vendas através do WhatsApp. É uma ferramenta essencial para qualquer negócio!",
    name: "Carlos Eduardo",
    title: "Gerente de Marketing, Tech Solutions",
    avatar: "https://via.placeholder.com/150/33FF57/FFFFFF?text=CE", // Exemplo de avatar
  },
  {
    quote: "O suporte é excelente e a plataforma é muito intuitiva. Nossos clientes estão mais satisfeitos e nossa equipe mais produtiva.",
    name: "Mariana Silva",
    title: "Coordenadora de Vendas, Serviços Digitais",
    avatar: "https://via.placeholder.com/150/3357FF/FFFFFF?text=MS", // Exemplo de avatar
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 uppercase">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <Quote className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-lg font-medium text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
                  />
                )}
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-md text-gray-600 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;