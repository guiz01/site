"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Importe as imagens locais
import miabellaLogo from "@/assets/brands/miabella.webp";
import tktxLogo from "@/assets/brands/tktx.webp";
import lojaDaDehLogo from "@/assets/brands/loja-da-deh.webp";
import chaMateLogo from "@/assets/brands/cha-mate.webp";
import elePetLogo from "@/assets/brands/ele-pet.webp";
import logoParceiroLogo from "@/assets/brands/logo-parceiro.webp";
import rosaHoldLogo from "@/assets/brands/rosa-hold.webp";

const brandLogos = [
  { src: miabellaLogo, alt: "Miabella" },
  { src: tktxLogo, alt: "TKTX" },
  { src: lojaDaDehLogo, alt: "Loja da Deh" },
  { src: chaMateLogo, alt: "Chá Mate" },
  { src: elePetLogo, alt: "Ele Pet" },
  { src: logoParceiroLogo, alt: "Logo Parceiro" },
  { src: rosaHoldLogo, alt: "Rosa Hold" },
];

const BrandsCarouselSection = () => {
  return (
    <section id="brands" className="w-full py-16 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Marcas que Confiam no ConnectMe
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {brandLogos.map((brand, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="flex items-center justify-center aspect-square p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default BrandsCarouselSection;