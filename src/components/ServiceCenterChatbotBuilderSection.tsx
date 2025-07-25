"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, MessageSquare, MousePointerClick, UserCheck, Bot, Paperclip, Mic } from "lucide-react";
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
  { id: 'start', position: { x: 40, y: 245 }, height: 100, icon: <PlayCircle className="h-5 w-5 text-green-500" />, title: "Início do Fluxo", content: "Cliente envia a primeira mensagem.", className: "border-green-500" },
  { id: 'msg1', position: { x: 344, y: 80 }, height: 100, icon: <MessageSquare className="h-5 w-5 text-primary" />, title: "Enviar Mensagem", content: "Olá! 👋 Como posso te ajudar?", className: "border-primary" },
  { id: 'buttons1', position: { x: 344, y: 300 }, height: 130, icon: <MousePointerClick className="h-5 w-5 text-primary" />, title: "Adicionar Botões", children: <CardContent className="p-0"><div className="p-2 border-t dark:border-gray-700 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">Falar com Suporte</div><div className="p-2 border-t dark:border-gray-700 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">Ver Promoções</div></CardContent>, className: "border-primary" },
  { id: 'transfer1', position: { x: 728, y: 150 }, height: 100, icon: <UserCheck className="h-5 w-5 text-purple-500" />, title: "Transferir para Equipe", content: "Transferir para a equipe de Suporte.", className: "border-purple-500" },
  { id: 'end1', position: { x: 728, y: 400 }, height: 100, icon: <Bot className="h-5 w-5 text-red-500" />, title: "Fim do Fluxo", content: "O bot finaliza o atendimento.", className: "border-red-500" },
];

const initialConnections = [
  { from: 'start', to: 'msg1' },
  { from: 'msg1', to: 'buttons1' },
  { from: 'buttons1', to: 'transfer1' },
  { from: 'buttons1', to: 'end1' },
];

const getIconForBlock = (blockType: string) => {
  switch (blockType) {
    case "message": return <MessageSquare className="h-5 w-5 text-primary" />;
    case "file": return <Paperclip className="h-5 w-5 text-blue-500" />;
    case "audio": return <Mic className="h-5 w-5 text-green-500" />;
    case "transfer": return <UserCheck className="h-5 w-5 text-purple-500" />;
    case "end": return <Bot className="h-5 w-5 text-red-500" />;
    default: return <MessageSquare className="h-5 w-5 text-primary" />;
  }
};

const ServiceCenterChatbotBuilderSection = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [connections] = useState(initialConnections);
  const dragOffset = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const calculatePath = (sourceBlock: any, targetBlock: any) => {
    const width = 256; // w-64
    const sourceHandle = {
      x: sourceBlock.position.x + width,
      y: sourceBlock.position.y + sourceBlock.height / 2
    };
    const targetHandle = {
      x: targetBlock.position.x,
      y: targetBlock.position.y + targetBlock.height / 2
    };

    const controlPointOffset = Math.abs(targetHandle.x - sourceHandle.x) * 0.5;
    const cx1 = sourceHandle.x + controlPointOffset;
    const cy1 = sourceHandle.y;
    const cx2 = targetHandle.x - controlPointOffset;
    const cy2 = targetHandle.y;

    return `M ${sourceHandle.x} ${sourceHandle.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${targetHandle.x} ${targetHandle.y}`;
  };

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
    const blockDataString = e.dataTransfer.getData("blockData");

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
    } else if (blockDataString) { // Adding a new block from sidebar
      const blockData = JSON.parse(blockDataString);
      const newBlock = {
        id: `new-${Date.now()}`,
        position: { x: e.clientX - canvasRect.left - 128, y: e.clientY - canvasRect.top - 50 }, // Adjust for block size
        icon: getIconForBlock(blockData.type),
        title: blockData.name,
        content: blockData.content,
        className: blockData.className,
        height: 100, // A default height for new blocks
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
            {connections.map((conn, index) => {
              const sourceBlock = blocks.find(b => b.id === conn.from);
              const targetBlock = blocks.find(b => b.id === conn.to);
              if (!sourceBlock || !targetBlock) return null;
              const path = calculatePath(sourceBlock, targetBlock);
              return <SvgConnector key={index} path={path} />;
            })}

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