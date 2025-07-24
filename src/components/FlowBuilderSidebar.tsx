"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Paperclip, Mic, UserCheck, Bot } from "lucide-react";

const blockOptions = [
  {
    name: "Enviar Mensagem",
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
  },
  {
    name: "Enviar Arquivo",
    icon: <Paperclip className="h-5 w-5 text-blue-500" />,
  },
  {
    name: "Enviar Áudio",
    icon: <Mic className="h-5 w-5 text-green-500" />,
  },
  {
    name: "Transferir para Equipe",
    icon: <UserCheck className="h-5 w-5 text-purple-500" />,
  },
  {
    name: "Fim do Fluxo",
    icon: <Bot className="h-5 w-5 text-red-500" />,
  },
];

const FlowBuilderSidebar = () => {
  return (
    <div className="w-72 flex-shrink-0 bg-white dark:bg-gray-800 border-r-4 border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">
        Ações
      </h3>
      <div className="flex flex-col gap-3">
        {blockOptions.map((block, index) => (
          <Card
            key={index}
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