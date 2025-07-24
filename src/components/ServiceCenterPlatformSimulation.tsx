"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Instagram, Users, Tag, Clock, Paperclip, Send, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

// Data for the simulation
const conversations = [
  {
    name: "Joana Silva",
    avatar: "https://avatar.iran.liara.run/public/girl?username=Joana",
    lastMessage: "Combinado! Muito obrigada pela...",
    time: "Agora",
    channel: "whatsapp",
    active: true,
    unread: 0,
  },
  {
    name: "Carlos Pereira",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Carlos",
    lastMessage: "Gostaria de saber sobre o status do...",
    time: "Há 5m",
    channel: "instagram",
    active: false,
    unread: 2,
  },
  {
    name: "Mariana Costa",
    avatar: "https://avatar.iran.liara.run/public/girl?username=Mariana",
    lastMessage: "Vocês têm o produto X em estoque?",
    time: "Há 12m",
    channel: "whatsapp",
    active: false,
    unread: 0,
  },
  {
    name: "Pedro Almeida",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Pedro",
    lastMessage: "Obrigado pelo excelente atendimento!",
    time: "Há 30m",
    channel: "instagram",
    active: false,
    unread: 0,
  },
];

const chatMessages = [
    { from: "customer", text: "Olá, boa tarde! Recebi meu pedido #12345, mas o tênis veio no tamanho errado. Pedi 38 e veio 36. Como faço para trocar?" },
    { from: "agent", text: "Olá, Joana! Boa tarde. Poxa, que pena que isso aconteceu. Sem problemas, vamos resolver isso agora mesmo para você!" },
    { from: "agent", text: "Para iniciar a troca, você poderia me confirmar o seu CPF e o e-mail cadastrado na compra, por favor?" },
    { from: "customer", text: "Claro! CPF: 123.456.789-00 e o e-mail é joana.silva@email.com" },
    { from: "agent", text: "Perfeito, Joana. Já localizei seu pedido. Vou gerar um código de postagem para você devolver o produto sem custo. Você pode levar o item na embalagem original a qualquer agência dos Correios." },
    { from: "customer", text: "Ótimo! E quando o novo tamanho será enviado?" },
    { from: "agent", text: "Assim que o sistema dos Correios confirmar a postagem, o novo par no tamanho 38 será enviado para você. Manteremos você informada por aqui! 😉" },
    { from: "customer", text: "Combinado! Muito obrigada pela ajuda rápida!" },
];

const ChannelIcon = ({ channel, className = '' }: { channel: string; className?: string }) => {
  switch (channel) {
    case "whatsapp":
      return <MessageCircle className={cn("h-5 w-5 text-green-500", className)} />;
    case "instagram":
      return <Instagram className={cn("h-5 w-5 text-pink-500", className)} />;
    default:
      return null;
  }
};

const ServiceCenterPlatformSimulation = () => {
  return (
    <section id="platform-simulation" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Sua Central de Atendimento Unificada
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Gerencie todas as conversas em um só lugar, com ferramentas para agilizar o trabalho da sua equipe e encantar seus clientes.
        </p>

        <Card className="w-full h-[700px] flex overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700">
          {/* Sidebar com a lista de conversas */}
          <div className="w-full md:w-1/3 border-r dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex-col hidden md:flex">
            <div className="p-4 border-b dark:border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Buscar conversas..." className="pl-10" />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              {conversations.map((convo, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center p-4 cursor-pointer border-b dark:border-gray-800",
                    convo.active ? "bg-hero-gradient-end-2/10 dark:bg-hero-gradient-end-2/20" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={convo.avatar} alt={convo.name} />
                    <AvatarFallback>{convo.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow overflow-hidden">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold truncate">{convo.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{convo.time}</p>
                    </div>
                    <div className="flex justify-between items-start mt-1">
                      <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{convo.lastMessage}</p>
                      <div className="flex items-center gap-2 ml-2">
                        <ChannelIcon channel={convo.channel} />
                        {convo.unread > 0 && (
                          <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center">{convo.unread}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Janela de chat ativa */}
          <div className="w-full md:w-2/3 flex flex-col bg-white dark:bg-background">
            {/* Header do Chat */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 flex-wrap gap-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={conversations[0].avatar} alt={conversations[0].name} />
                  <AvatarFallback>{conversations[0].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{conversations[0].name}</p>
                  <div className="flex items-center gap-1 text-xs text-green-500">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Button variant="outline" size="sm"><Users className="h-4 w-4 md:mr-2" /></Button>
                <Button variant="outline" size="sm"><Tag className="h-4 w-4 md:mr-2" /></Button>
                <Button variant="default" size="sm"><Clock className="h-4 w-4 md:mr-2" /></Button>
              </div>
            </div>

            {/* Mensagens do Chat */}
            <div className="flex-grow p-6 overflow-y-auto bg-gray-100/50 dark:bg-black/20">
              <div className="flex flex-col gap-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={cn("flex w-full", msg.from === 'agent' ? 'justify-end' : 'justify-start')}>
                    <div className={cn(
                      "max-w-[80%] p-3 rounded-xl text-sm text-left",
                      msg.from === 'agent' ? 'bg-hero-gradient-end-2 text-primary-foreground' : 'bg-gray-200 dark:bg-gray-700 text-foreground'
                    )}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input do Chat */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t dark:border-gray-700">
              <div className="relative">
                <Input placeholder="Digite sua mensagem..." className="pr-24" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <Button variant="ghost" size="icon"><Smile className="h-5 w-5 text-gray-500" /></Button>
                  <Button variant="ghost" size="icon"><Paperclip className="h-5 w-5 text-gray-500" /></Button>
                  <Button size="sm"><Send className="h-4 w-4" /></Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServiceCenterPlatformSimulation;