"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Paperclip, Smile, Send, Smartphone, Wifi, BatteryFull, Signal } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

const variables = ["{{nome}}", "{{protocolo}}", "{{vencimento}}", "{{valor}}", "{{link_pagamento}}"];

const CampaignsMessageBuilderSection = () => {
  const [campaignName, setCampaignName] = useState("Lançamento de Verão");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [activeModel, setActiveModel] = useState("modelo-1");
  const [models, setModels] = useState([
    { id: "modelo-1", text: "Olá, {{nome}}! ☀️ Nossa nova coleção de verão chegou com tudo! Confira as novidades e aproveite um desconto especial de 15% usando o cupom VERAO15. Não perca!", attachment: null },
    { id: "modelo-2", text: "Ei, {{nome}}! Sentimos sua falta. Que tal dar uma olhada nas nossas ofertas? Preparamos algo especial para você. 😉", attachment: null },
    { id: "modelo-3", text: "ALERTA DE PROMOÇÃO, {{nome}}! 🔥 Itens selecionados com até 50% de desconto. Corre que é por tempo limitado!", attachment: null },
    { id: "modelo-4", text: "Obrigado por ser um cliente fiel, {{nome}}! Como agradecimento, aqui está um cupom exclusivo para sua próxima compra: VIP10.", attachment: null },
  ]);

  const handleVariableClick = (variable: string) => {
    const currentModel = models.find(m => m.id === activeModel);
    if (currentModel) {
      const newText = currentModel.text + ` ${variable} `;
      setModels(models.map(m => m.id === activeModel ? { ...m, text: newText } : m));
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModels(models.map(m => m.id === activeModel ? { ...m, text: e.target.value } : m));
  };

  const currentMessage = models.find(m => m.id === activeModel)?.text || "";
  const previewMessage = currentMessage.replace(/{{nome}}/g, "Maria");

  return (
    <section id="message-builder" className="w-full py-16 bg-gradient-to-br from-section-bg-light-start to-section-bg-light-end dark:from-section-bg-dark-start dark:to-section-bg-dark-end px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Crie Mensagens que Convertem
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Desenvolva modelos de mensagens dinâmicas, agende o envio e anexe arquivos para criar campanhas de alto impacto com facilidade.
        </p>

        <Card className="w-full text-left shadow-2xl border-4 border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Coluna de Configuração e Edição */}
            <div className="lg:col-span-2 p-6 bg-white dark:bg-card flex flex-col gap-6 border-b lg:border-b-0 lg:border-r dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Nome da Campanha</Label>
                  <Input id="campaign-name" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} placeholder="Ex: Promoção de Dia das Mães" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date">Data de Início do Disparo</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="start-date"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div>
                <Label>Modelos de Mensagem (Rotação)</Label>
                <Tabs value={activeModel} onValueChange={setActiveModel} className="w-full mt-2">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="modelo-1">Modelo 1</TabsTrigger>
                    <TabsTrigger value="modelo-2">Modelo 2</TabsTrigger>
                    <TabsTrigger value="modelo-3">Modelo 3</TabsTrigger>
                    <TabsTrigger value="modelo-4">Modelo 4</TabsTrigger>
                  </TabsList>
                  {models.map(model => (
                    <TabsContent key={model.id} value={model.id} className="mt-4">
                      <Textarea
                        placeholder="Digite sua mensagem aqui..."
                        value={model.text}
                        onChange={handleTextChange}
                        rows={6}
                        className="resize-none"
                      />
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              <div>
                <Label>Variáveis Dinâmicas</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {variables.map(variable => (
                    <Badge
                      key={variable}
                      variant="secondary"
                      onClick={() => handleVariableClick(variable)}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      {variable}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t dark:border-gray-700">
                <Button variant="outline"><Paperclip className="h-4 w-4 mr-2" /> Anexar Arquivo</Button>
                <Button variant="outline"><Smile className="h-4 w-4 mr-2" /> Adicionar Emoji</Button>
                <Button className="ml-auto"><Send className="h-4 w-4 mr-2" /> Salvar e Agendar</Button>
              </div>
            </div>

            {/* Coluna de Pré-visualização */}
            <div className="lg:col-span-1 p-6 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
              <div className="relative w-[300px] h-[600px] bg-gray-900 dark:bg-gray-800 rounded-[2.5rem] shadow-xl p-2">
                <div className="relative w-full h-full bg-gray-100 dark:bg-gray-900 rounded-[2rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-0 h-full">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-9 px-4 flex justify-between items-center z-20 text-white">
                      <span className="text-xs font-bold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <Signal className="h-3.5 w-3.5" strokeWidth={1.75} />
                        <Wifi className="h-3.5 w-3.5" strokeWidth={1.75} />
                        <BatteryFull className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Chat Content Wrapper */}
                    <div className="absolute inset-0 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')" }}>
                      <div className="h-full flex flex-col">
                        {/* Chat Header */}
                        <div className="bg-[#075E54] dark:bg-gray-700 p-2 flex flex-row items-center text-white pt-10">
                           <p className="text-base font-semibold text-white ml-4">Sua Loja</p>
                        </div>
                        {/* Message Area */}
                        <div className="flex-1 p-3 overflow-y-auto">
                          <div className="flex w-full my-2 justify-start">
                            <div className="flex flex-col w-fit max-w-[90%] leading-1.5 p-3 text-left bg-white dark:bg-gray-700 rounded-r-xl rounded-bl-xl shadow-sm">
                              <p className="text-sm font-normal text-gray-900 dark:text-white whitespace-pre-wrap">{previewMessage}</p>
                            </div>
                          </div>
                        </div>
                        {/* Chat Footer */}
                        <div className="p-2 bg-transparent mt-auto">
                          <div className="flex items-center w-full gap-2">
                            <div className="flex-grow flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm">
                              <Smile className="h-5 w-5 text-gray-500" />
                              <span className="text-gray-400 ml-2 text-sm flex-grow text-left">Mensagem</span>
                              <Paperclip className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="p-3 bg-[#075E54] rounded-full shadow-sm">
                              <Send className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-20"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CampaignsMessageBuilderSection;