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
    quote: "As campanhas da ConnectMe nos permitiram alcançar um público muito maior e de forma mais eficaz. Nossas vendas dispararam!",
    name: "Fernanda Lima",
    title: "Diretora de Vendas, E-commerce Fashion",
    avatar: "https://via.placeholder.com/150/FF5733/FFFFFF?text=FL",
  },
  {
    quote: "A segmentação de clientes é um divisor de águas. Conseguimos enviar a mensagem certa para a pessoa certa, no momento certo. Incrível!",
    name: "Roberto Mendes",
    title: "Coordenador de Marketing, Agência Digital",
    avatar: "https://via.placeholder.com/150/33FF57/FFFFFF?text=RM",
  },
  {
    quote: "Com a ConnectMe, nossas campanhas de WhatsApp se tornaram muito mais profissionais e com resultados mensuráveis. Essencial para o nosso crescimento.",
    name: "Patrícia Costa",
    title: "Fundadora, Startup de Serviços",
    avatar: "https://via.placeholder.com/150/3357FF/FFFFFF?text=PC",
  },
];

const CampaignsTestimonialsSection = () => {
  return (
    <section id="testimonials-campaigns" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Resultados reais de nossas campanhas
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

export default CampaignsTestimonialsSection;