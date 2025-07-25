"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "A connectme revolucionou a forma como nos comunicamos com nossos clientes. As automações são incríveis e nos poupam horas de trabalho manual!",
  },
  {
    quote: "Com a connectme, conseguimos aumentar nosso engajamento e as vendas através do WhatsApp. É uma ferramenta essencial para qualquer negócio!",
  },
  {
    quote: "O suporte é excelente e a plataforma é muito intuitiva. Nossos clientes estão mais satisfeitos e nossa equipe mais produtiva.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 h-full">
              <CardHeader className="pb-4 flex-grow">
                <Quote className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle className="text-lg font-medium text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;