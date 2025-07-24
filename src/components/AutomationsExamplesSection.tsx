"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Cake, ShoppingCart, PartyPopper, Truck, Star, ShoppingBag, ArrowLeft, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const automationScenarios = [
  {
    scenario: "Boas-vindas e Primeira Compra",
    customerName: "Ana",
    customerAvatar: "A",
    messages: [
      { type: "business", icon: <PartyPopper className="h-4 w-4" />, title: "Boas-vindas ao Cliente", content: "Olá, Ana! 👋 Seja bem-vinda à nossa loja! Estamos felizes em ter você aqui. Use o cupom BEMVINDO10 para 10% de desconto na sua primeira compra!" },
      { type: "customer", content: "Opa, que legal! Obrigada pelo cupom! Vou dar uma olhada no site agora mesmo. 😊" },
    ],
  },
  {
    scenario: "Agradecimento e Rastreamento",
    customerName: "Bruno",
    customerAvatar: "B",
    messages: [
      { type: "business", icon: <ShoppingBag className="h-4 w-4" />, title: "Agradecimento de Compra", content: "Oba, Bruno! 🎉 Recebemos seu pedido #1234. Muito obrigado por comprar com a gente! Assim que ele for enviado, avisaremos por aqui." },
      { type: "business", icon: <Truck className="h-4 w-4" />, title: "Rastreamento de Pedido", content: "Boas notícias! 🚚 Seu pedido #1234 já está a caminho! Você pode acompanhar a entrega aqui: [Link de Rastreio]" },
      { type: "customer", content: "Perfeito! Que agilidade! Já estou ansioso. 🤩" },
    ],
  },
  {
    scenario: "Carrinho Abandonado",
    customerName: "Carla",
    customerAvatar: "C",
    messages: [
      { type: "business", icon: <ShoppingCart className="h-4 w-4" />, title: "Carrinho Abandonado", content: "Opa, Carla! Vimos que você deixou alguns itens no carrinho. 🤔 Finalize sua compra agora e não perca a chance de ter seus produtos!" },
      { type: "customer", content: "Nossa, quase esqueci! Obrigada por lembrar. Vou finalizar a compra agora. 👍" },
    ],
  },
  {
    scenario: "Pós-venda e Aniversário",
    customerName: "Daniel",
    customerAvatar: "D",
    messages: [
      { type: "business", icon: <Star className="h-4 w-4" />, title: "Avaliação do Produto", content: "Olá, Daniel! ✨ Esperamos que você esteja amando seu novo tênis. Poderia nos dar sua opinião? Sua avaliação nos ajuda muito!" },
      { type: "customer", content: "Adorei o tênis! Super confortável. Vou deixar a avaliação sim!" },
      { type: "business", icon: <Cake className="h-4 w-4" />, title: "Lembrete de Aniversário", content: "Feliz aniversário, Daniel! 🎂 Para comemorar seu dia, preparamos um presente: 15% de desconto em todo o site! Aproveite!" },
      { type: "customer", content: "Que demais! Muito obrigado pelo presente! 🥳" },
    ],
  },
];

const ChatBubble = ({ message }) => {
  const isBusiness = message.type === "business";
  return (
    <div className={cn("flex w-full my-2", isBusiness ? "justify-end" : "justify-start")}>
      <div className={cn("flex flex-col w-fit max-w-[85%] leading-1.5 p-3", 
        isBusiness 
        ? "bg-[#dcf8c6] dark:bg-emerald-900 rounded-l-xl rounded-br-xl" 
        : "bg-white dark:bg-gray-700 rounded-r-xl rounded-bl-xl shadow-sm"
      )}>
        {isBusiness && message.icon && (
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1 text-emerald-700 dark:text-emerald-400">
            {message.icon}
            <span className="text-xs font-semibold">{message.title}</span>
          </div>
        )}
        <p className="text-sm font-normal text-gray-900 dark:text-white">{message.content}</p>
      </div>
    </div>
  );
};

const AutomationsExamplesSection = () => {
  return (
    <section id="automation-examples" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Comunicação que funciona no piloto automático
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Veja exemplos de como nossas automações podem engajar seus clientes nos momentos mais importantes, de forma totalmente automática.
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {automationScenarios.map((scenario, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center p-4">
                <div className="relative w-full max-w-sm mx-auto">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-lg z-20"></div>
                  <Card className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-3xl overflow-hidden border-8 border-gray-900 dark:border-gray-800 pt-2">
                    <CardHeader className="bg-[#075E54] dark:bg-gray-700 p-2 flex flex-row items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <ArrowLeft className="h-5 w-5" />
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gray-300 text-gray-800">{scenario.customerAvatar}</AvatarFallback>
                        </Avatar>
                        <p className="text-base font-semibold text-white">
                          {scenario.customerName}
                        </p>
                      </div>
                      <MoreVertical className="h-5 w-5" />
                    </CardHeader>
                    <CardContent className="p-3 h-[450px] overflow-y-auto bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')" }}>
                      {scenario.messages.map((msg, msgIndex) => (
                        <ChatBubble key={msgIndex} message={msg} />
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default AutomationsExamplesSection;