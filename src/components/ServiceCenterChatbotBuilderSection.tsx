"use client";

import React, { useState, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, MessageSquare, MousePointerClick, UserCheck, Bot, Paperclip, Mic, Plus, Minus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import FlowBuilderSidebar from "./FlowBuilderSidebar";

// Helper component for a single flow block
const FlowBlock = ({ block, onDelete, onDragStart, onMouseDownOnOutput, onMouseUpOnInput }: { block: any, onDelete: (blockId: string) => void, onDragStart: (e: React.DragEvent, blockId: string) => void, onMouseDownOnOutput: (e: React.MouseEvent, blockId: string) => void, onMouseUpOnInput: (e: React.MouseEvent, blockId: string) => void }) => (
  <Card 
    className={cn("absolute w-64 bg-white dark:bg-gray-800 shadow-xl border-2 z-10", block.className)}
    style={{ top: block.position.y, left: block.position.x }}
  >
    <CardHeader 
      draggable
      onDragStart={(e) => onDragStart(e, block.id)}
      className="flex flex-row items-center gap-3 space-y-0 p-3 border-b dark:border-gray-700 cursor-grab active:cursor-grabbing"
    >
      {block.icon}
      <CardTitle className="text-sm font-semibold">{block.title}</CardTitle>
      {block.id !== 'start' && (
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 ml-auto text-gray-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50"
          onClick={() => onDelete(block.id)}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Deletar bloco</span>
        </Button>
      )}
    </CardHeader>
    {block.content && <CardContent className="p-3 text-sm text-gray-600 dark:text-gray-300">{block.content}</CardContent>}
    {block.children}
    {/* Connection points */}
    <div 
      onMouseDown={(e) => onMouseDownOnOutput(e, block.id)}
      className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-gray-800 cursor-crosshair z-20"
    />
    <div 
      onMouseUp={(e) => onMouseUpOnInput(e, block.id)}
      className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-400 border-2 border-white dark:border-gray-800 cursor-crosshair z-20"
    />
  </Card>
);

// Helper for drawing connecting lines
const SvgConnector = ({ path }: { path: string }) => (
  <svg className="absolute top-0 left-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
    <path d={path} stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeDasharray="5 5" />
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
  const [connections, setConnections] = useState(initialConnections);
  const [scale, setScale] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [newConnection, setNewConnection] = useState<any>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const panStart = useRef({ startX: 0, startY: 0, startPan: { x: 0, y: 0 } });
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDeleteBlock = (blockIdToDelete: string) => {
    if (blockIdToDelete === 'start') return;
    setBlocks(prev => prev.filter(b => b.id !== blockIdToDelete));
    setConnections(prev => prev.filter(conn => conn.from !== blockIdToDelete && conn.to !== blockIdToDelete));
  };

  const calculateStepPath = useCallback((sourcePos, targetPos) => {
    const { x: sx, y: sy } = sourcePos;
    const { x: tx, y: ty } = targetPos;
    const midX = sx + (tx - sx) / 2;
    const radius = 15; // Corner radius

    if (Math.abs(tx - sx) < radius * 2 || Math.abs(ty - sy) < radius * 2) {
        return `M ${sx} ${sy} L ${midX} ${sy} L ${midX} ${ty} L ${tx} ${ty}`;
    }

    const signY = Math.sign(ty - sy) || 1;
    const sweepFlag1 = signY > 0 ? 1 : 0;
    const sweepFlag2 = signY > 0 ? 0 : 1;

    return `
        M ${sx} ${sy}
        L ${midX - radius} ${sy}
        A ${radius} ${radius} 0 0 ${sweepFlag1} ${midX} ${sy + radius * signY}
        L ${midX} ${ty - radius * signY}
        A ${radius} ${radius} 0 0 ${sweepFlag2} ${midX + radius} ${ty}
        L ${tx} ${ty}
    `;
  }, []);

  const getHandlePosition = (blockId: string, handle: 'input' | 'output') => {
    const block = blocks.find(b => b.id === blockId);
    if (!block) return { x: 0, y: 0 };
    const width = 256; // w-64
    return {
      x: block.position.x + (handle === 'output' ? width : 0),
      y: block.position.y + block.height / 2,
    };
  };

  const handleDragStart = (e: React.DragEvent, blockId: string) => {
    const blockElement = (e.target as HTMLElement).closest('.react-flow-node') || e.target as HTMLElement;
    const rect = blockElement.getBoundingClientRect();
    dragOffset.current = {
      x: (e.clientX - rect.left) / scale,
      y: (e.clientY - rect.top) / scale,
    };
    e.dataTransfer.setData("blockId", blockId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;

    const blockId = e.dataTransfer.getData("blockId");
    const blockDataString = e.dataTransfer.getData("blockData");

    const newPosition = {
      x: (e.clientX - canvasRect.left) / scale - dragOffset.current.x,
      y: (e.clientY - canvasRect.top) / scale - dragOffset.current.y,
    };

    if (blockId) {
      setBlocks(prev => prev.map(b => b.id === blockId ? { ...b, position: newPosition } : b));
    } else if (blockDataString) {
      const blockData = JSON.parse(blockDataString);
      const newBlock = {
        id: `new-${Date.now()}`,
        position: { x: (e.clientX - canvasRect.left) / scale - 128, y: (e.clientY - canvasRect.top) / scale - 50 },
        icon: getIconForBlock(blockData.type),
        title: blockData.name,
        content: blockData.content,
        className: blockData.className,
        height: 100,
      };
      setBlocks(prev => [...prev, newBlock]);
    }
  };

  const handleMouseDownOnOutput = (e: React.MouseEvent, sourceId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;
    setNewConnection({ 
        from: sourceId, 
        to: { 
            x: (e.clientX - canvasRect.left) / scale,
            y: (e.clientY - canvasRect.top) / scale 
        } 
    });
  };

  const handleMouseDownOnCanvas = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current) {
      e.preventDefault();
      setIsPanning(true);
      panStart.current = {
        startX: e.clientX,
        startY: e.clientY,
        startPan: panOffset,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      const dx = e.clientX - panStart.current.startX;
      const dy = e.clientY - panStart.current.startY;
      setPanOffset({
        x: panStart.current.startPan.x + dx / scale,
        y: panStart.current.startPan.y + dy / scale,
      });
      return;
    }

    if (!newConnection) return;
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;
    setNewConnection({
      ...newConnection,
      to: {
        x: (e.clientX - canvasRect.left) / scale,
        y: (e.clientY - canvasRect.top) / scale,
      },
    });
  };

  const handleMouseUpOnCanvas = () => {
    setIsPanning(false);
    setNewConnection(null);
  };

  const handleMouseUpOnInput = (e: React.MouseEvent, targetId: string) => {
    e.stopPropagation();
    if (!newConnection || newConnection.from === targetId) {
      setNewConnection(null);
      return;
    }
    setConnections(prev => [...prev, { from: newConnection.from, to: targetId }]);
    setNewConnection(null);
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
            onMouseDown={handleMouseDownOnCanvas}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOnCanvas}
            className={cn(
              "relative flex-grow bg-gray-100 dark:bg-gray-900/50 overflow-hidden",
              isPanning ? "cursor-grabbing" : "cursor-grab"
            )}
          >
            <div className="absolute w-full h-full" style={{ backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)', backgroundSize: `${20 * scale}px ${20 * scale}px` }} />
            <div 
              className="relative" 
              style={{ 
                transform: `scale(${scale}) translate(${panOffset.x}px, ${panOffset.y}px)`, 
                transformOrigin: 'top left',
                width: `${100 / scale}%`,
                height: `${100 / scale}%`,
              }}
            >
              {connections.map((conn, index) => {
                const sourcePos = getHandlePosition(conn.from, 'output');
                const targetPos = getHandlePosition(conn.to, 'input');
                const path = calculateStepPath(sourcePos, targetPos);
                return <SvgConnector key={index} path={path} />;
              })}
              {newConnection && (
                <SvgConnector path={calculateStepPath(getHandlePosition(newConnection.from, 'output'), newConnection.to)} />
              )}
              {blocks.map(block => (
                <FlowBlock key={block.id} block={block} onDelete={handleDeleteBlock} onDragStart={handleDragStart} onMouseDownOnOutput={handleMouseDownOnOutput} onMouseUpOnInput={handleMouseUpOnInput} />
              ))}
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button size="icon" onClick={() => setScale(s => Math.min(s + 0.1, 1.5))}><Plus className="h-4 w-4" /></Button>
              <Button size="icon" onClick={() => setScale(s => Math.max(s - 0.1, 0.5))}><Minus className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenterChatbotBuilderSection;