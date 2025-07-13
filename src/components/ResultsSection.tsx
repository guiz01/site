"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const results = [
  {
    value: "+3 mil",
    description: "mensagens enviadas por dia",
  },
  {
    value: "+24h",
    description: "de trabalho manual automatizados por dia",
  },
  {
    value: "+120",
    description: "clientes impactados no momento certo",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="w-full py-16 bg-white dark:bg-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Nossos Resultados Falam Por Si
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-5xl font-extrabold text-primary mb-2">
                  {result.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  {result.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;