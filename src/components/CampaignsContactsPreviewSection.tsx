"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, UserPlus, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const contacts = [
  {
    id: "contact-1",
    name: "Mariana Lima",
    whatsapp: "(11) 98765-4321",
    tags: [
      { text: "Cliente VIP", color: "bg-yellow-400 text-yellow-900" },
      { text: "Comprou_Recente", color: "bg-green-500 text-white" },
    ],
  },
  {
    id: "contact-2",
    name: "Ricardo Alves",
    whatsapp: "(21) 91234-5678",
    tags: [
      { text: "Carrinho_Abandonado", color: "bg-orange-500 text-white" },
    ],
  },
  {
    id: "contact-3",
    name: "Fernanda Costa",
    whatsapp: "(31) 99988-7766",
    tags: [
      { text: "Lead_Frio", color: "bg-blue-500 text-white" },
      { text: "Newsletter", color: "bg-indigo-500 text-white" },
    ],
  },
  {
    id: "contact-4",
    name: "Lucas Martins",
    whatsapp: "(81) 98877-6655",
    tags: [
      { text: "Comprou_Recente", color: "bg-green-500 text-white" },
    ],
  },
  {
    id: "contact-5",
    name: "Beatriz Souza",
    whatsapp: "(71) 97766-5544",
    tags: [
      { text: "Cliente VIP", color: "bg-yellow-400 text-yellow-900" },
      { text: "Engajado", color: "bg-pink-500 text-white" },
    ],
  },
];

const CampaignsContactsPreviewSection = () => {
  return (
    <section id="contacts-preview" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Gerencie e Segmente Seus Contatos
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Importe sua base de clientes, organize com etiquetas personalizadas e crie segmentos poderosos para enviar a mensagem certa para a pessoa certa.
        </p>

        <Card className="w-full text-left shadow-2xl border-4 border-gray-200 dark:border-gray-700 overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <CardTitle className="text-xl">Contatos</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm"><Tag className="h-4 w-4 mr-2" /> Nova Etiqueta</Button>
              <Button size="sm"><UserPlus className="h-4 w-4 mr-2" /> Importar Contatos</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px] px-4">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>WhatsApp</TableHead>
                    <TableHead>Etiquetas</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="px-4">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-medium">{contact.name}</TableCell>
                      <TableCell>{contact.whatsapp}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {contact.tags.map((tag, index) => (
                            <Badge key={index} className={cn("text-xs", tag.color)}>
                              {tag.text}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CampaignsContactsPreviewSection;