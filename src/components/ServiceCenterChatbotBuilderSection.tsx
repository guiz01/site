"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, MessageSquare, MousePointerClick, UserCheck, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import FlowBuilderSidebar from "./FlowBuilderSidebar";

// Helper component for a single flow block
const FlowBlock = ({ block, onDragStart }: { block: any, onDragStart: (e: React.DragEvent, blockId: string) => void }) => (
  <Card 
    draggable
    onDragStart={(e) => onDragStart(e, block.id)}
    className={cn("absolute w-64 bg-white dark:bg-gray-800 shadow-xl border-2 z-10 cursor-grab active:cursor-grabbing", block.className)}
    style={{ top: block.position.y, left: block.position.x }}
  >
    <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-3 border-b dark:border-gray-700">
      {block.icon}
      <CardTitle className="text-sm font-semibold">{block.title}</CardTitle>
    </CardHeader>
    {block.content && <CardContent className="p-3 text-sm text-gray-600 dark:text-gray-300">{block.content}</CardContent>}
    {block.children}
    {/* Connection points */}
    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-gray-800"></div>
    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400 border-2 border-white dark:border-gray-800"></div>
  </Card>
);

// Helper for drawing connecting lines
const SvgConnector = ({ path }: { path: string }) => (
  <svg className="absolute top-0 left-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
    <path d={path} stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="5,5" />
  </svg>
);

const initialBlocks = [
  { id: 'start', position: { x: 40, y: 245 }, icon: <PlayCircle className="h-5 w-5 text-green-500" />, title: "Início do Fluxo", content: "Cliente envia a primeira mensagem.", className: "border-green-500" },
  { id: 'msg1', position: { x: 344, y: 80 }, icon: <MessageSquare className="h-5 w-5 text-primary" />, title: "Enviar Mensagem", content: "Olá! 👋 Como posso te ajudar?", className: "border-primary" },
  { id: 'buttons1', position: { x: 344, y: 300 }, icon: <MousePointerClick className="h-5 w-5 text-primary" />, title: "Adicionar Botões", children: <CardContent className="p-0"><div className="p-2 border-t dark:border-gray-700 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">Falar com Suporte</div><div className="p-2 border-t dark:border-gray-700 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">Ver Promoções</div></CardContent>, className: "border-primary" },
  { id: 'transfer1', position: { x: 728, y: 150 }, icon: <UserCheck className="h-5 w-5 text-purple-500" />, title: "Transferir para Equipe", content: "Transferir para a equipe de Suporte.", className: "border-purple-500" },
  { id: 'end1', position: { x: 728, y: 400 }, icon: <Bot className="h-5 w-5 text-red-500" />, title: "Fim do Fluxo", content: "O bot finaliza o atendimento.", className: "border-red-500" },
];

const ServiceCenterChatbotBuilderSection = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const dragOffset = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent, blockId: string) => {
    const blockElement = e.target as HTMLElement;
    const rect = blockElement.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    e.dataTransfer.setData("blockId", blockId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;

    const blockId = e.dataTransfer.getData("blockId");
    const blockType = e.dataTransfer.getData("blockType");

    const newPosition = {
      x: e.clientX - canvasRect.left - dragOffset.current.x,
      y: e.clientY - canvasRect.top - dragOffset.current.y,
    };

    if (blockId) { // Moving an existing block
      setBlocks(prevBlocks =>
        prevBlocks.map(b =>
          b.id === blockId ? { ...b, position: newPosition } : b
        )
      );
    } else if (blockType) { // Adding a new block from sidebar
      const newBlock = {
        id: `new-${Date.now()}`,
        position: { x: e.clientX - canvasRect.left - 128, y: e.clientY - canvasRect.top - 40 }, // Adjust for block size
        icon: <MessageSquare className="h-5 w-5 text-primary" />,
        title: "Nova Mensagem",
        content: "Escreva sua mensagem aqui...",
        className: "border-primary",
      };
      setBlocks(prevBlocks => [...prevBlocks, newBlock]);
    }
  };

  return (
    <section id="chatbot-builder" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Crie seu Próprio Chatbot com Facilidade
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Construa fluxos de atendimento automatizados com nosso editor visual. Arraste e solte blocos para criar um bot que trabalha 24/7 para você.
        </p>

        <div className="flex w-full max-w-7xl mx-auto h-[600px] rounded-lg shadow-inner overflow-hidden border-4 border-gray-200 dark:border-gray-700">
          <FlowBuilderSidebar />
          <div 
            ref={canvasRef}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="relative flex-grow bg-gray-100 dark:bg-gray-900/50"
            style={{ backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          >
            {/* SVG Connectors - Note: These are static and won't update with block movement in this simulation */}
            <SvgConnector path="M 216 300 C 280 300, 280 135, 344 135" />
            <SvgConnector path="M 472 190 L 472 300" />
            <SvgConnector path="M 600 365 C 664 365, 664 205, 728 205" />
            <SvgConnector path="M 600 365 C 664 365, 664 455, 728 455" />

            {blocks.map(block => (
              <FlowBlock key={block.id} block={block} onDragStart={handleDragStart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenterChatbotBuilderSection;