"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Importe as imagens locais
import argenntiLogo from "@/assets/brands/argennti.webp";
import armybrLogo from "@/assets/brands/armybr.webp";
import belaHerbalLogo from "@/assets/brands/bela-herbal.webp";
import bethSouzaAcessoriosLogo from "@/assets/brands/beth-souza-acessorios.webp";
import bigBurgLogo from "@/assets/brands/big-burg.webp";
import calvinKleinLogo from "@/assets/brands/calvin-klein.webp";
import chaMatteLogo from "@/assets/brands/cha-matte.webp";
import complexidadeUrbanaLogo from "@/assets/brands/complexidade-urbana.webp";
import danmooLogo from "@/assets/brands/danmoo.webp";
import dentalPaivaLogo from "@/assets/brands/dental-paiva.webp";
import doninhoLogo from "@/assets/brands/doninho.webp";
import dunomeLogo from "@/assets/brands/dunome.webp";
import elePetLogo from "@/assets/brands/ele-pet.webp";
import ideiaLaserLogo from "@/assets/brands/ideia-laser.webp";
import lamareLogo from "@/assets/brands/lamare.webp";
import limitsLogo from "@/assets/brands/limits.webp";
import loboLogo from "@/assets/brands/lobo.webp";
import logoParceiroLogo from "@/assets/brands/logo-parceiro.webp";
import lojaDaDehLogo from "@/assets/brands/loja-da-deh.webp";
import lolyCerealistaLogo from "@/assets/brands/loly-cerealista.webp";
import miabellaLogo from "@/assets/brands/miabella.webp";
import mostraliLogo from "@/assets/brands/mostrali.webp";
import nacarPratasLogo from "@/assets/brands/nacar-pratas.webp";
import negajuLogo from "@/assets/brands/negaju.webp";
import overglowLogo from "@/assets/brands/overglow.webp";
import petNaturauLogo from "@/assets/brands/pet-naturau.webp";
import prendyLogo from "@/assets/brands/prendy.webp";
import redeManausLogo from "@/assets/brands/rede-manaus.webp";
import rosaHoldLogo from "@/assets/brands/rosa-hold.webp";
import somosFilhasLogo from "@/assets/brands/somos-filhas.webp";
import tbPratasLogo from "@/assets/brands/tb-pratas.webp";
import tktxLogo from "@/assets/brands/tktx.webp";
import urboLogo from "@/assets/brands/urbo.webp";
import useDaliLogo from "@/assets/brands/use-dali.webp";

const brandLogos = [
  { src: argenntiLogo, alt: "Argennti" },
  { src: armybrLogo, alt: "ArmyBR" },
  { src: belaHerbalLogo, alt: "Bela Herbal" },
  { src: bethSouzaAcessoriosLogo, alt: "Beth Souza Acessórios" },
  { src: bigBurgLogo, alt: "Big Burg" },
  { src: calvinKleinLogo, alt: "Calvin Klein" },
  { src: chaMatteLogo, alt: "Chá Matte" },
  { src: complexidadeUrbanaLogo, alt: "Complexidade Urbana" },
  { src: danmooLogo, alt: "Danmoo" },
  { src: dentalPaivaLogo, alt: "Dental Paiva" },
  { src: doninhoLogo, alt: "Doninho" },
  { src: dunomeLogo, alt: "Dunome" },
  { src: elePetLogo, alt: "Ele Pet" },
  { src: ideiaLaserLogo, alt: "Ideia Laser" },
  { src: lamareLogo, alt: "Lamare" },
  { src: limitsLogo, alt: "Limits" },
  { src: loboLogo, alt: "Lobo" },
  { src: logoParceiroLogo, alt: "Logo Parceiro" },
  { src: lojaDaDehLogo, alt: "Loja da Deh" },
  { src: lolyCerealistaLogo, alt: "Loly Cerealista" },
  { src: miabellaLogo, alt: "Miabella" },
  { src: mostraliLogo, alt: "Mostrali" },
  { src: nacarPratasLogo, alt: "Nacar Pratas" },
  { src: negajuLogo, alt: "Negaju" },
  { src: overglowLogo, alt: "Overglow" },
  { src: petNaturauLogo, alt: "Pet Naturau" },
  { src: prendyLogo, alt: "Prendy" },
  { src: redeManausLogo, alt: "Rede Manaus" },
  { src: rosaHoldLogo, alt: "Rosa Hold" },
  { src: somosFilhasLogo, alt: "Somos Filhas" },
  { src: tbPratasLogo, alt: "TB Pratas" },
  { src: tktxLogo, alt: "TKTX" },
  { src: urboLogo, alt: "Urbo" },
  { src: useDaliLogo, alt: "Use Dali" },
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
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {brandLogos.map((brand, index) => (
              <CarouselItem key={index} className="pl-8 basis-1/3 md:basis-1/4 lg:basis-1/6 flex items-center justify-center">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-24 max-w-full object-contain"
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