"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Paperclip, Mic, UserCheck, Bot } from "lucide-react";

const blockOptions = [
  {
    type: "message",
    name: "Enviar Mensagem",
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    className: "border-primary",
    content: "Escreva sua mensagem aqui...",
  },
  {
    type: "file",
    name: "Enviar Arquivo",
    icon: <Paperclip className="h-5 w-5 text-blue-500" />,
    className: "border-blue-500",
    content: "Selecione o arquivo para enviar.",
  },
  {
    type: "audio",
    name: "Enviar Áudio",
    icon: <Mic className="h-5 w-5 text-green-500" />,
    className: "border-green-500",
    content: "Grave ou selecione o áudio.",
  },
  {
    type: "transfer",
    name: "Transferir para Equipe",
    icon: <UserCheck className="h-5 w-5 text-purple-500" />,
    className: "border-purple-500",
    content: "Selecione a equipe de destino.",
  },
  {
    type: "end",
    name: "Fim do Fluxo",
    icon: <Bot className="h-5 w-5 text-red-500" />,
    className: "border-red-500",
    content: "O bot finaliza o atendimento.",
  },
];

const FlowBuilderSidebar = () => {
  const handleDragStart = (e: React.DragEvent, block: object) => {
    // We can't serialize the icon (JSX), so we'll just pass the rest
    const { icon, ...serializableBlock } = block as any;
    e.dataTransfer.setData("blockData", JSON.stringify(serializableBlock));
    e.dataTransfer.effectAllowed = "copy";
  };

  return (
    <div className="w-72 flex-shrink-0 bg-white dark:bg-gray-800 border-r-4 border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">
        Ações
      </h3>
      <div className="flex flex-col gap-3">
        {blockOptions.map((block, index) => (
          <Card
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, block)}
            className="p-3 cursor-grab active:cursor-grabbing hover:shadow-md hover:border-primary transition-all duration-200"
          >
            <CardContent className="p-0 flex items-center gap-3">
              {block.icon}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {block.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FlowBuilderSidebar;