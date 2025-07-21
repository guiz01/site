"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Send, MessagesSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const products = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Automações",
    description: "Envie mensagens automáticas com base em eventos, economize tempo e mantenha seus clientes sempre informados.",
    link: "/automacoes",
  },
  {
    icon: <Send className="h-10 w-10 text-primary" />,
    title: "Campanhas",
    description: "Alcance milhares de clientes com campanhas de marketing em massa, segmentadas e de alto impacto no WhatsApp.",
    link: "/campanhas",
  },
  {
    icon: <MessagesSquare className="h-10 w-10 text-primary" />,
    title: "Central de Atendimento",
    description: "Unifique todos os seus canais de comunicação em um só lugar e ofereça um suporte ágil e organizado.",
    link: "/central-de-atendimento",
  },
];

const ProductsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="products" className="relative z-10 w-full py-16 bg-white dark:bg-background px-6 -mt-[18.7rem] rounded-t-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Conheça Nossas Soluções
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Temos a ferramenta certa para cada etapa da sua comunicação. Automatize, engaje e organize seu atendimento com a connectme.
        </p>
        
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-12">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card
                    className={cn(
                      "flex flex-col text-center shadow-lg transition-all duration-500 ease-in-out transform border-t-4 border-primary h-full",
                      current === index
                        ? "scale-105 z-10 shadow-2xl"
                        : "scale-90 opacity-60"
                    )}
                  >
                    <CardHeader className="items-center pb-4">
                      <div className="p-4 bg-primary/10 rounded-full mb-4">
                        {product.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="justify-center pt-4">
                      <Button asChild>
                        <Link to={product.link} className="flex items-center gap-2">
                          Saiba Mais <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
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

export default ProductsSection;