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
// import emporioDoCheiroLogo from "@/assets/brands/emporio-do-cheiro.webp"; // Arquivo ausente
import petManiaLogo from "@/assets/brands/pet-mania.webp";
import useOrganicoLogo from "@/assets/brands/use-organico.webp";
import grupoIkesakiLogo from "@/assets/brands/grupo-ikesaki.webp";

const brandLogos = [
  { src: miabellaLogo, alt: "Miabella" },
  { src: tktxLogo, alt: "TKTX" },
  { src: lojaDaDehLogo, alt: "Loja da Deh" },
  { src: chaMateLogo, alt: "Chá Mate" },
  { src: elePetLogo, alt: "Ele Pet" },
  { src: logoParceiroLogo, alt: "Logo Parceiro" },
  { src: rosaHoldLogo, alt: "Rosa Hold" },
  { src: petManiaLogo, alt: "Pet Mania" },
  { src: useOrganicoLogo, alt: "Use Orgânico" },
  { src: grupoIkesakiLogo, alt: "Grupo Ikesaki" },
];

const BrandsCarouselSection = () => {
  return (
    <section id="brands" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 uppercase">
          Marcas que usam e confiam
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
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center">
                {/* Removido o Card e o padding, ajustado o tamanho da imagem */}
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-32 max-w-full object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default BrandsCarouselSection;