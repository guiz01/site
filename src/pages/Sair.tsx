"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sair = () => {
  usePageTitle("Remover Inscrição | ConnectMe");
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");

    if (!id) {
      setError("Nenhum identificador foi fornecido para a remoção.");
      setLoading(false);
      return;
    }

    const unsubscribe = async () => {
      try {
        const response = await fetch(`https://wf.connectme.chat?id=${id}`);
        if (response.ok) {
          setSuccess(true);
        } else {
          // Tenta ler uma mensagem de erro do corpo da resposta
          const errorData = await response.json().catch(() => null);
          setError(errorData?.message || "Ocorreu um erro ao processar sua solicitação.");
        }
      } catch (err) {
        setError("Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    unsubscribe();
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <Card className="w-full max-w-lg text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              {loading && "Processando sua solicitação..."}
              {success && "Solicitação Concluída!"}
              {error && "Ocorreu um Erro"}
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[120px] flex items-center justify-center">
            {loading && (
              <div className="flex flex-col items-center justify-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-gray-600 dark:text-gray-400">Aguarde um momento.</p>
              </div>
            )}
            {success && (
              <div className="flex flex-col items-center justify-center gap-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  Tudo bem, vamos solicitar a remoção do seu número da nossa lista.
                </p>
              </div>
            )}
            {error && (
               <div className="flex flex-col items-center justify-center gap-4">
                <XCircle className="h-12 w-12 text-destructive" />
                <p className="text-lg text-destructive">{error}</p>
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