"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Cake, ShoppingCart, PartyPopper, Truck, Star, ShoppingBag, ArrowLeft, MoreVertical, Wallet, Clock, CreditCard, Barcode, FileCode, FileText, Smile, Paperclip, Mic, Signal, Wifi, BatteryFull } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const automationScenarios = [
  {
    scenario: "Boas-vindas e Primeira Compra",
    customerName: "Ana",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/girl?username=Ana",
    messages: [
      { type: "business", icon: <PartyPopper className="h-4 w-4" />, title: "Boas-vindas ao Cliente", content: "Olá, Ana! 👋 Seja bem-vinda à nossa loja! Estamos felizes em ter você aqui. Use o cupom BEMVINDO10 para 10% de desconto na sua primeira compra!" },
      { type: "customer", content: "Opa, que legal! Obrigada pelo cupom! Vou dar uma olhada no site agora mesmo. 😊" },
    ],
  },
  {
    scenario: "Agradecimento de Compra",
    customerName: "Bruno",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/boy?username=Bruno",
    messages: [
      { type: "business", icon: <ShoppingBag className="h-4 w-4" />, title: "Agradecimento de Compra", content: "Oba, Bruno! 🎉 Recebemos seu pedido #1234. Muito obrigado por comprar com a gente! Assim que ele for enviado, avisaremos por aqui." },
      { type: "customer", content: "Perfeito! Que agilidade! Já estou ansioso. 🤩" },
    ],
  },
  {
    scenario: "Rastreamento de Pedido",
    customerName: "Beatriz",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/girl?username=Beatriz",
    messages: [
      { type: "business", icon: <Truck className="h-4 w-4" />, title: "Rastreamento de Pedido", content: "Boas notícias, Beatriz! 🚚 Seu pedido #5678 já está a caminho! Você pode acompanhar a entrega aqui: [Link de Rastreio]" },
      { type: "customer", content: "Ebaaa! Obrigada por avisar! Mal posso esperar. 🎉" },
    ],
  },
  {
    scenario: "Carrinho Abandonado",
    customerName: "Carla",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/girl?username=Carla",
    messages: [
      { type: "business", icon: <ShoppingCart className="h-4 w-4" />, title: "Carrinho Abandonado", content: "Opa, Carla! Vimos que você deixou alguns itens no carrinho. 🤔 Finalize sua compra agora e não perca a chance de ter seus produtos!" },
      { type: "customer", content: "Nossa, quase esqueci! Obrigada por lembrar. Vou finalizar a compra agora. 👍" },
    ],
  },
  {
    scenario: "Avaliação Pós-venda",
    customerName: "Daniel",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/boy?username=Daniel",
    messages: [
      { type: "business", icon: <Star className="h-4 w-4" />, title: "Avaliação do Produto", content: "Olá, Daniel! ✨ Esperamos que você esteja amando seu novo tênis. Poderia nos dar sua opinião? Sua avaliação nos ajuda muito!" },
      { type: "customer", content: "Adorei o tênis! Super confortável. Vou deixar a avaliação sim!" },
    ],
  },
  {
    scenario: "Lembrete de Aniversário",
    customerName: "Daniela",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/girl?username=Daniela",
    messages: [
      { type: "business", icon: <Cake className="h-4 w-4" />, title: "Lembrete de Aniversário", content: "Feliz aniversário, Daniela! 🎂 Para comemorar seu dia, preparamos um presente: 15% de desconto em todo o site! Aproveite!" },
      { type: "customer", content: "Que demais! Muito obrigado pelo presente! 🥳" },
    ],
  },
  {
    scenario: "Recebimento de Cashback",
    customerName: "Eduarda",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/girl?username=Eduarda",
    messages: [
      { type: "business", icon: <Wallet className="h-4 w-4" />, title: "Cashback Recebido", content: "Olá, Eduarda! Você acaba de receber R$ 15,00 de cashback pela sua última compra! 🤑 Use na sua próxima visita." },
      { type: "customer", content: "Que ótima notícia! Já vou planejar minha próxima compra. Obrigada! 😄" },
    ],
  },
  {
    scenario: "Expiração de Cashback",
    customerName: "Felipe",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/boy?username=Felipe",
    messages: [
      { type: "business", icon: <Clock className="h-4 w-4" />, title: "Cashback Expirando", content: "Atenção, Felipe! Seu cashback de R$ 20,00 está prestes a expirar em 3 dias. ⏳ Não perca a chance de economizar!" },
      { type: "customer", content: "Valeu pelo aviso! Vou usar hoje mesmo. 👍" },
    ],
  },
  {
    scenario: "Cobrança de Crediário",
    customerName: "Gabriela",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/girl?username=Gabriela",
    messages: [
      { type: "business", icon: <CreditCard className="h-4 w-4" />, title: "Lembrete de Parcela", content: "Olá, Gabriela. A parcela do seu crediário no valor de R$ 150,00 vence em 5 dias. Pague em dia e evite juros. 😉" },
      { type: "customer", content: "Obrigada por me lembrar! Vou efetuar o pagamento." },
    ],
  },
  {
    scenario: "Envio de Boleto",
    customerName: "Heitor",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/boy?username=Heitor",
    messages: [
      { type: "attachment", fileName: "boleto_fatura.pdf", fileSize: "128 KB" },
      { type: "business", icon: <Barcode className="h-4 w-4" />, title: "Boleto Disponível", content: "Oi, Heitor! O boleto da sua fatura já está disponível. Para pagar, use o código de barras ou clique no link: [Link do Boleto]" },
      { type: "customer", content: "Show! Já vou pagar aqui pelo app do banco. Valeu!" },
    ],
  },
  {
    scenario: "Envio de Nota Fiscal",
    customerName: "Isabela",
    customerAvatarUrl: "https://avatar.iran.liara.run/public/girl?username=Isabela",
    messages: [
      { type: "attachment", fileName: "NFS-e_5678.pdf", fileSize: "97 KB" },
      { type: "business", icon: <FileCode className="h-4 w-4" />, title: "Nota Fiscal Emitida", content: "Olá, Isabela. A Nota Fiscal (NFS-e) e o arquivo XML do seu pedido #5678 já estão disponíveis para download. 📄" },
      { type: "customer", content: "Excelente! Já vou baixar para minha contabilidade. Muito prático!" },
    ],
  },
];

const ChatBubble = ({ message }) => {
  const isBusiness = message.type === "business";
  return (
    <div className={cn("flex w-full my-2", isBusiness ? "justify-end" : "justify-start")}>
      <div className={cn("flex flex-col w-fit max-w-[85%] leading-1.5 p-3 text-left", 
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

const AttachmentBubble = ({ fileName, fileSize }) => {
  return (
    <div className="flex w-full my-2 justify-end">
      <div className="flex items-center gap-3 w-fit max-w-[85%] p-3 rounded-l-xl rounded-br-xl bg-[#dcf8c6] dark:bg-emerald-900">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-500 flex-shrink-0">
          <FileText className="h-7 w-7 text-white" />
        </div>
        <div className="flex flex-col text-left">
          <p className="text-sm font-medium text-gray-900 dark:text-white">{fileName}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{fileSize}</p>
        </div>
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
        
        <Carousel 
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-5xl mx-auto" 
          opts={{ loop: true }}
        >
          <CarouselContent>
            {automationScenarios.map((scenario, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center p-4">
                
                {/* iPhone-like Frame */}
                <div className="relative w-[300px] h-[600px] bg-gray-900 dark:bg-gray-800 rounded-[2.5rem] shadow-xl p-2">
                  <div className="relative w-full h-full bg-gray-100 dark:bg-gray-900 rounded-[2rem] overflow-hidden">
                    
                    {/* Screen Content */}
                    <div className="absolute inset-0 h-full">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-9 px-4 flex justify-between items-center z-10 text-white">
                        <span className="text-xs font-bold">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <Signal className="h-4 w-4" />
                          <Wifi className="h-4 w-4" />
                          <BatteryFull className="h-4 w-4" />
                        </div>
                      </div>

                      <Card className="bg-transparent border-none shadow-none h-full flex flex-col">
                        <CardHeader className="bg-[#075E54] dark:bg-gray-700 p-2 flex flex-row items-center justify-between text-white pt-10">
                          <div className="flex items-center gap-3">
                            <ArrowLeft className="h-5 w-5" />
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={scenario.customerAvatarUrl} alt={scenario.customerName} />
                              <AvatarFallback className="bg-gray-300 text-gray-800">{scenario.customerName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="text-base font-semibold text-white">
                              {scenario.customerName}
                            </p>
                          </div>
                          <MoreVertical className="h-5 w-5" />
                        </CardHeader>
                        <CardContent className="flex-1 p-3 overflow-y-auto bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')" }}>
                          {scenario.messages.map((msg, msgIndex) => {
                            if (msg.type === 'attachment') {
                              return <AttachmentBubble key={msgIndex} fileName={msg.fileName} fileSize={msg.fileSize} />;
                            }
                            return <ChatBubble key={msgIndex} message={msg} />;
                          })}
                        </CardContent>
                        <CardFooter className="p-2 bg-transparent mt-auto">
                          <div className="flex items-center w-full gap-2">
                            <div className="flex-grow flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm">
                              <Smile className="h-5 w-5 text-gray-500" />
                              <span className="text-gray-400 ml-2 text-sm flex-grow text-left">Mensagem</span>
                              <Paperclip className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="p-3 bg-[#075E54] rounded-full shadow-sm">
                              <Mic className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>

                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-20"></div>
                  </div>
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