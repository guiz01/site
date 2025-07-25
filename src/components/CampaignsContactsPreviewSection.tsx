"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, UserPlus, Tag, Search, X } from "lucide-react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    contacts.forEach(contact => {
      contact.tags.forEach(tag => tagsSet.add(tag.text));
    });
    return Array.from(tagsSet);
  }, []);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      const matchesSearch = searchTerm.trim() === "" ||
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.whatsapp.replace(/\D/g, '').includes(searchTerm.replace(/\D/g, ''));

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(selectedTag =>
          contact.tags.some(contactTag => contactTag.text === selectedTag)
        );

      return matchesSearch && matchesTags;
    });
  }, [searchTerm, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
  };

  return (
    <section id="contacts-preview" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Gerencie e Segmente Seus Contatos
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Importe sua base de clientes, organize com etiquetas personalizadas e crie segmentos poderosos para enviar a mensagem certa para a pessoa certa.
        </p>

        <div className="w-full text-left shadow-2xl border-4 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col md:flex-row h-[700px]">
          {/* Filter Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 dark:bg-gray-900/50 p-4 border-b md:border-b-0 md:border-r dark:border-gray-700 flex-shrink-0">
            <h3 className="text-lg font-semibold mb-4">Filtros</h3>
            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por nome ou nº"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2 text-sm">Etiquetas</h4>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    variant={selectedTags.includes(tag) ? "default" : "secondary"}
                    className="cursor-pointer transition-all hover:opacity-80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {(searchTerm || selectedTags.length > 0) && (
              <Button variant="ghost" onClick={clearFilters} className="w-full justify-start p-0 h-auto text-sm text-primary hover:text-primary/80">
                <X className="h-4 w-4 mr-1" />
                Limpar filtros
              </Button>
            )}
          </div>

          {/* Contacts Table */}
          <div className="flex-grow overflow-hidden">
            <Card className="border-none shadow-none rounded-none h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b dark:border-gray-700 bg-white dark:bg-card">
                <CardTitle className="text-xl">Contatos</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm"><Tag className="h-4 w-4 mr-2" /> Nova Etiqueta</Button>
                  <Button size="sm"><UserPlus className="h-4 w-4 mr-2" /> Importar Contatos</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-grow overflow-hidden">
                <div className="overflow-y-auto h-full">
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
                      {filteredContacts.length > 0 ? (
                        filteredContacts.map((contact) => (
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
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="h-24 text-center">
                            Nenhum contato encontrado.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignsContactsPreviewSection;