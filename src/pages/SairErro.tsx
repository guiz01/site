"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, MessageCircleMore } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

const SairErro = () => {
  usePageTitle("Erro na Saída | ConnectMe");
  const whatsappLink = "http://wa.me/5531982631178";

  const handleCloseTab = () => {
    window.close();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background items-center justify-center p-6">
      <Card className="w-full max-w-lg text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-destructive">
            Ocorreu um Erro!
          </CardTitle>
        </CardHeader>
        <CardContent className="min-h-[120px] flex flex-col items-center justify-center gap-4">
          <XCircle className="h-12 w-12 text-destructive" />
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Não foi possível processar sua solicitação de saída.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Por favor, tente novamente mais tarde ou entre em contato com nosso suporte para que possamos ajudá-lo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button onClick={handleCloseTab}>
              Fechar
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-active-nav hover:text-primary-foreground">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircleMore className="h-5 w-5" /> Falar com Suporte
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SairErro;