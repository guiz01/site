"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cake, ShoppingCart, PartyPopper, Truck, Star, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const automationExamples = [
  {
    icon: <PartyPopper className="h-5 w-5 text-white" />,
    title: "Boas-vindas ao Cliente",
    message: "Olá, [Nome do Cliente]! 👋 Seja bem-vindo à [Nome da Loja]! Estamos felizes em ter você aqui. Use o cupom BEMVINDO10 para 10% de desconto na sua primeira compra!",
    bgColor: "bg-blue-500",
  },
  {
    icon: <ShoppingBag className="h-5 w-5 text-white" />,
    title: "Agradecimento de Compra",
    message: "Oba, [Nome do Cliente]! 🎉 Recebemos seu pedido #[Número do Pedido]. Muito obrigado por comprar com a gente! Assim que ele for enviado, avisaremos por aqui.",
    bgColor: "bg-green-500",
  },
  {
    icon: <Truck className="h-5 w-5 text-white" />,
    title: "Rastreamento de Pedido",
    message: "Boas notícias, [Nome do Cliente]! 🚚 Seu pedido #[Número do Pedido] já está a caminho! Você pode acompanhar a entrega aqui: [Link de Rastreio]",
    bgColor: "bg-orange-500",
  },
  {
    icon: <Star className="h-5 w-5 text-white" />,
    title: "Avaliação do Produto",
    message: "Olá, [Nome do Cliente]! ✨ Esperamos que você esteja amando seu/sua [Nome do Produto]. Poderia nos dar sua opinião? Sua avaliação nos ajuda muito!",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <ShoppingCart className="h-5 w-5 text-white" />,
    title: "Carrinho Abandonado",
    message: "Opa, [Nome do Cliente]! Vimos que você deixou alguns itens no carrinho. 🤔 Finalize sua compra agora e não perca a chance de ter seus produtos!",
    bgColor: "bg-red-500",
  },
  {
    icon: <Cake className="h-5 w-5 text-white" />,
    title: "Lembrete de Aniversário",
    message: "Feliz aniversário, [Nome do Cliente]! 🎂 Para comemorar seu dia especial, preparamos um presente para você: 15% de desconto em todo o site! Aproveite!",
    bgColor: "bg-pink-500",
  },
];

const ChatBubble = ({ icon, title, message, bgColor }) => (
  <div className="flex items-end gap-2.5 my-4 justify-end">
    <div className={cn("flex flex-col w-full max-w-xs sm:max-w-sm leading-1.5 p-4 border-gray-200 rounded-xl rounded-br-none text-white", bgColor)}>
      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
        {icon}
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <p className="text-sm font-normal">{message}</p>
    </div>
  </div>
);

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
        
        <div className="flex justify-center">
          <div className="w-full max-w-md mx-auto">
            <Card className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-3xl overflow-hidden border-8 border-gray-900 dark:border-gray-600">
              <CardHeader className="bg-gray-200 dark:bg-gray-700 p-3">
                <CardTitle className="text-lg text-gray-800 dark:text-white text-left">
                  Sua Loja
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 h-[500px] overflow-y-auto bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')" }}>
                {automationExamples.map((example, index) => (
                  <ChatBubble 
                    key={index}
                    icon={example.icon}
                    title={example.title}
                    message={example.message}
                    bgColor={example.bgColor}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationsExamplesSection;