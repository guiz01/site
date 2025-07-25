"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Instagram, MessageSquare, Tag, UserCircle, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const kanbanData = {
  columns: [
    {
      title: "Novos Contatos",
      id: "new",
      cards: [
        {
          id: "1",
          customer: "Ana Beatriz",
          avatar: "https://avatar.iran.liara.run/public/girl?username=AnaBeatriz",
          issue: "Produto com defeito, gostaria de solicitar a troca.",
          channel: "whatsapp",
          tags: [{ text: "Urgente", color: "bg-red-500" }, { text: "Troca", color: "bg-blue-500" }],
        },
        {
          id: "2",
          customer: "Carlos Mendes",
          avatar: "https://avatar.iran.liara.run/public/boy?username=CarlosMendes",
          issue: "Minha fatura veio com o valor errado. Podem verificar?",
          channel: "instagram",
          tags: [{ text: "Financeiro", color: "bg-green-500" }],
        },
      ],
    },
    {
      title: "Em Atendimento",
      id: "progress",
      cards: [
        {
          id: "3",
          customer: "Juliana Paiva",
          avatar: "https://avatar.iran.liara.run/public/girl?username=JulianaPaiva",
          issue: "Não consigo rastrear meu pedido #JP5567.",
          channel: "messenger",
          tags: [{ text: "Rastreio", color: "bg-yellow-500" }],
          assignee: { name: "Sofia", avatar: "https://avatar.iran.liara.run/public/girl?username=Sofia" },
        },
        {
          id: "4",
          customer: "Ricardo Gomes",
          avatar: "https://avatar.iran.liara.run/public/boy?username=RicardoGomes",
          issue: "Qual o prazo de entrega para o CEP 12345-678?",
          channel: "whatsapp",
          tags: [{ text: "Dúvida", color: "bg-purple-500" }],
          assignee: { name: "Lucas", avatar: "https://avatar.iran.liara.run/public/boy?username=Lucas" },
        },
      ],
    },
    {
      title: "Aguardando Cliente",
      id: "waiting",
      cards: [
        {
          id: "5",
          customer: "Fernanda Lima",
          avatar: "https://avatar.iran.liara.run/public/girl?username=FernandaLima",
          issue: "Solicitei o estorno e estou aguardando a confirmação.",
          channel: "instagram",
          tags: [{ text: "Estorno", color: "bg-pink-500" }],
          assignee: { name: "Sofia", avatar: "https://avatar.iran.liara.run/public/girl?username=Sofia" },
        },
      ],
    },
    {
      title: "Resolvido",
      id: "resolved",
      cards: [
        {
          id: "6",
          customer: "Marcos Vinicius",
          avatar: "https://avatar.iran.liara.run/public/boy?username=MarcosVinicius",
          issue: "Dúvida sobre a garantia do produto foi esclarecida.",
          channel: "whatsapp",
          tags: [],
          assignee: { name: "Lucas", avatar: "https://avatar.iran.liara.run/public/boy?username=Lucas" },
        },
      ],
    },
  ],
};

const ChannelIcon = ({ channel }: { channel: string }) => {
  switch (channel) {
    case "whatsapp":
      return <MessageCircle className="h-5 w-5 text-green-500" />;
    case "instagram":
      return <Instagram className="h-5 w-5 text-pink-500" />;
    case "messenger":
      return <MessageSquare className="h-5 w-5 text-blue-600" />;
    default:
      return null;
  }
};

const KanbanCard = ({ card }) => (
  <Card className="bg-card p-4 rounded-lg shadow-md mb-4 cursor-grab active:cursor-grabbing">
    <CardContent className="p-0">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={card.avatar} alt={card.customer} />
            <AvatarFallback>{card.customer.charAt(0)}</AvatarFallback>
          </Avatar>
          <h4 className="font-semibold text-left">{card.customer}</h4>
        </div>
        <ChannelIcon channel={card.channel} />
      </div>
      <p className="text-sm text-muted-foreground text-left mb-3">{card.issue}</p>
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Tag className="h-4 w-4 text-muted-foreground" />
        {card.tags.map((tag, index) => (
          <Badge key={index} className={cn("text-xs text-white", tag.color)}>
            {tag.text}
          </Badge>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        {card.assignee ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={card.assignee.avatar} alt={card.assignee.name} />
              <AvatarFallback><UserCircle /></AvatarFallback>
            </Avatar>
            <span>{card.assignee.name}</span>
          </div>
        ) : (
          <div />
        )}
        <MoreHorizontal className="h-5 w-5 cursor-pointer" />
      </div>
    </CardContent>
  </Card>
);

const ServiceCenterKanbanSection = () => {
  return (
    <section id="kanban-board" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Organize suas Conversas com um Kanban
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Arraste e solte conversas entre colunas personalizadas para visualizar o progresso e garantir que nenhum cliente seja esquecido.
        </p>

        <div className="w-full p-4 bg-gray-100 dark:bg-gray-900/50 rounded-xl shadow-inner border-2 border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kanbanData.columns.map((column) => (
              <div key={column.id} className="bg-gray-200/50 dark:bg-gray-800/50 rounded-lg p-4 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{column.title}</h3>
                  <Badge variant="secondary">{column.cards.length}</Badge>
                </div>
                <div className="flex-grow overflow-y-auto">
                  {column.cards.map((card) => (
                    <KanbanCard key={card.id} card={card} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenterKanbanSection;