"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SairConfirmado = () => {
  usePageTitle("Confirmação de Saída | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <Card className="w-full max-w-lg text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              Saída Confirmada!
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[120px] flex flex-col items-center justify-center gap-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Seu número foi removido da nossa lista de transmissão com sucesso.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Você não receberá mais nossas comunicações. Se mudar de ideia, basta entrar em contato conosco novamente.
            </p>
            <Button asChild className="mt-4">
              <Link to="/">Voltar para o Início</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SairConfirmado;