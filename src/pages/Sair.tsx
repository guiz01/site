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
    // Adiciona meta tags para prevenir link preview
    const metaTags: Array<{name?: string; property?: string; content: string}> = [
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'og:title', content: 'Redirecionamento' },
      { name: 'og:description', content: 'Redirecionamento seguro' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Redirecionamento' },
      { name: 'twitter:description', content: 'Redirecionamento seguro' },
      { name: 'apple-mobile-web-app-capable', content: 'no' },
      { name: 'mobile-web-app-capable', content: 'no' },
      { name: 'format-detection', content: 'telephone=no' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) {
        meta.name = tag.name;
      }
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      }
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    return () => {
      // Remove as meta tags quando o componente for desmontado
      metaTags.forEach(tag => {
        const meta = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
        if (meta) {
          meta.remove();
        }
      });
    };
  }, []);

  useEffect(() => {
    const queryString = searchParams.toString();
    
    // Verifica se existe algum parâmetro na URL antes de redirecionar
    if (queryString) {
      window.location.href = `https://wf.connectme.chat/webhook/wpp/sair?${queryString}`;
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