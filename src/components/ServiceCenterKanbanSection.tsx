"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Instagram, MessageSquare, Tag, UserCircle, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import KanbanActionToast from "./KanbanActionToast";

const initialKanbanData = {
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

const KanbanCard = ({ card, onDragStart, onDragEnd }) => (
  <Card 
    draggable="true"
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    className="bg-card p-4 rounded-lg shadow-md mb-4 cursor-grab active:cursor-grabbing transition-opacity"
  >
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
  const [boardData, setBoardData] = useState(initialKanbanData);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverColumn, setDragOverColumn] = useState(null);
  const [toastInfo, setToastInfo] = useState({ isOpen: false, message: "" });
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeKanbanToast = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    }
    setToastInfo({ isOpen: false, message: "" });
  };

  const showKanbanToast = (message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastInfo({ isOpen: true, message });
    toastTimeoutRef.current = setTimeout(() => {
      setToastInfo({ isOpen: false, message: "" });
      toastTimeoutRef.current = null;
    }, 5000); // Increased to 5 seconds
  };

  const handleDragStart = (e, card, sourceColumnId) => {
    setDraggedItem({ card, sourceColumnId });
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    if (e.currentTarget.style) {
      e.currentTarget.style.opacity = '1';
    }
    setDraggedItem(null);
    setDragOverColumn(null);
  };

  const handleDragOver = (e, columnId) => {
    e.preventDefault();
    if (columnId !== dragOverColumn) {
      setDragOverColumn(columnId);
    }
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOverColumn(null);
  };

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.sourceColumnId === targetColumnId) {
      setDragOverColumn(null);
      return;
    }

    const newBoardData = JSON.parse(JSON.stringify(boardData));
    const sourceColumn = newBoardData.columns.find(col => col.id === draggedItem.sourceColumnId);
    const targetColumn = newBoardData.columns.find(col => col.id === targetColumnId);

    if (sourceColumn && targetColumn) {
      const cardIndex = sourceColumn.cards.findIndex(card => card.id === draggedItem.card.id);
      if (cardIndex > -1) {
        sourceColumn.cards.splice(cardIndex, 1);
      }
      targetColumn.cards.push(draggedItem.card);
      setBoardData(newBoardData);

      let automationMessage = "";
      switch (targetColumn.id) {
        case "progress":
          automationMessage = `Enviamos uma mensagem automática para o contato: "Seu atendimento foi iniciado."`;
          break;
        case "waiting":
          automationMessage = `Enviamos uma mensagem automática para o contato: "Enviamos uma nova mensagem e aguardamos sua resposta."`;
          break;
        case "resolved":
          automationMessage = `Enviamos uma mensagem automática para o contato: "Seu atendimento foi resolvido! Obrigado."`;
          break;
        default:
          break;
      }

      if (automationMessage) {
        showKanbanToast(automationMessage);
      }
    }

    setDraggedItem(null);
    setDragOverColumn(null);
  };

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
            {boardData.columns.map((column) => (
              <div 
                key={column.id} 
                onDragOver={(e) => handleDragOver(e, column.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, column.id)}
                className={cn(
                  "bg-gray-200/50 dark:bg-gray-800/50 rounded-lg p-4 flex flex-col transition-colors duration-200",
                  dragOverColumn === column.id && "bg-primary/10"
                )}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{column.title}</h3>
                  <Badge variant="secondary">{column.cards.length}</Badge>
                </div>
                <div className="flex-grow min-h-[200px]">
                  {column.cards.map((card) => (
                    <KanbanCard 
                      key={card.id} 
                      card={card} 
                      onDragStart={(e) => handleDragStart(e, card, column.id)}
                      onDragEnd={handleDragEnd}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <KanbanActionToast
        isOpen={toastInfo.isOpen}
        message={toastInfo.message}
        onClose={closeKanbanToast}
      />
    </section>
  );
};

export default ServiceCenterKanbanSection;