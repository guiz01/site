"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, XCircle } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sair = () => {
  usePageTitle("Redirecionando... | ConnectMe");
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const queryString = searchParams.toString();
    
    // Verifica se existe algum parâmetro na URL antes de redirecionar
    if (queryString) {
      window.location.href = `https://wf.connectme.chat?${queryString}`;
    } else {
      setError("Nenhum parâmetro foi fornecido para o redirecionamento.");
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <Card className="w-full max-w-lg text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              {error ? "Ocorreu um Erro" : "Redirecionando"}
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[120px] flex items-center justify-center">
            {error ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <XCircle className="h-12 w-12 text-destructive" />
                <p className="text-lg text-destructive">{error}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-gray-600 dark:text-gray-400">
                  Por favor, aguarde...
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Sair;