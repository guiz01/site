"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserX } from "lucide-react";

const OptOutSection = () => {
  return (
    <section id="opt-out" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="text-center md:text-left">
            <UserX className="h-12 w-12 text-primary mb-4 mx-auto md:mx-0" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
              Respeito e Controle para Seus Clientes
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Garantimos que seus clientes tenham total controle sobre as comunicações que recebem. Todas as mensagens automáticas incluem um link de opt-out, permitindo que eles cancelem o recebimento de notificações a qualquer momento, de forma simples e imediata.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Isso não apenas cumpre as boas práticas de comunicação, mas também aumenta a confiança e a satisfação do cliente com a sua marca.
            </p>
          </div>

          {/* Coluna de Ilustração */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <Card className="bg-white dark:bg-gray-900 rounded-lg h-full flex flex-col">
                <CardHeader className="p-3 border-b dark:border-gray-700">
                  <CardTitle className="text-sm font-semibold">Notificação Automática</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex w-full justify-start">
                      <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg max-w-[90%]">
                        <p className="text-sm">Olá, Maria! Seu pedido #5678 já está a caminho! 🚚</p>
                      </div>
                    </div>
                    <div className="flex w-full justify-start">
                      <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg max-w-[90%]">
                        <p className="text-sm italic text-gray-500 dark:text-gray-400">
                          Caso você não queira mais receber notificações, <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-500 underline">clique aqui</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-xs text-gray-400">
                    https://connectme.chat/sair?id=...
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptOutSection;