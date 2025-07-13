"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Componente SVG para o ícone de mensagens
const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 430" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <clipPath id="__lottie_element_131">
        <rect width="430" height="430" x="0" y="0"></rect>
      </clipPath>
      <clipPath id="__lottie_element_134">
        <path d="M0,0 L430,0 L430,430 L0,430z"></path>
      </clipPath>
    </defs>
    <g clipPath="url(#__lottie_element_131)">
      <g clipPath="url(#__lottie_element_134)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: 'block' }}>
        <g transform="matrix(0.999661386013031,0.026020614430308342,-0.026020614430308342,0.999661386013031,223.25668334960938,214.88771057128906)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path strokeLinecap="butt" strokeLinejoin="round" fillOpacity={0} stroke="hsl(var(--header-bg))" strokeOpacity={1} strokeWidth={12} d=" M167.5,-0.75 C167.5,91.75800323486328 92.50800323486328,166.75 0,166.75 C-30.01300048828125,166.75 -58.18299865722656,158.8560028076172 -82.5459976196289,145.031005859375 C-82.5459976196289,145.031005859375 -144.18299865722656,168.25 -144.18299865722656,168.25 C-144.18299865722656,168.25 -131.8419952392578,102.57599639892578 -131.8419952392578,102.57599639892578 C-154.17999267578125,74.11299896240234 -167.5,38.237998962402344 -167.5,-0.75 C-167.5,-93.25800323486328 -92.50800323486328,-168.25 0,-168.25 C92.50800323486328,-168.25 167.5,-93.25800323486328 167.5,-0.75z"></path>
          </g>
        </g>
        <g transform="matrix(0.9971217513084412,0.07581686973571777,-0.07581686973571777,0.9971217513084412,225.1414794921875,216.0628204345703)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path strokeLinecap="round" strokeLinejoin="round" fillOpacity={0} stroke="hsl(var(--primary))" strokeOpacity={1} strokeWidth={12} d=" M-89.61599731445312,-66.61699676513672 C-75.98100280761719,-85.4739990234375 -62.779998779296875,-97.9489974975586 -60.242000579833984,-94.3949966430664 C-57.63100051879883,-90.84100341796875 -51.39400100708008,-82.13800048828125 -46.31700134277344,-75.1029968261914 C-41.095001220703125,-67.99500274658203 -35.292999267578125,-60.018001556396484 -33.262001037597656,-57.18899917602539 C-31.231000900268555,-54.43299865722656 -34.42300033569336,-47.32400131225586 -40.369998931884766,-41.37699890136719 C-46.31700134277344,-35.43000030517578 -48.49300003051758,-27.959999084472656 -45.229000091552734,-24.695999145507812 C-41.96500015258789,-21.43199920654297 -26.082000732421875,-5.548999786376953 -9.836000442504883,10.696999549865723 C6.482999801635742,27.016000747680664 21.857999801635742,42.39099884033203 24.54199981689453,45.07500076293945 C27.22599983215332,47.75899887084961 34.26100158691406,45.14799880981445 40.20800018310547,39.20100021362305 C46.154998779296875,33.25400161743164 53.04600143432617,29.91699981689453 55.512001037597656,31.729999542236328 C57.97800064086914,33.542999267578125 66.60900115966797,39.78099822998047 74.73200225830078,45.72800064086914 C82.8550033569336,51.67499923706055 91.8479995727539,58.202999114990234 94.8219985961914,60.37900161743164 C97.7959976196289,62.55500030517578 85.02999877929688,75.46499633789062 66.31800079345703,89.24500274658203 C47.60599899291992,103.0250015258789 9.383999824523926,91.2030029296875 -18.902000427246094,62.91699981689453 C-18.902000427246094,62.91699981689453 -62.99800109863281,18.81999969482422 -62.99800109863281,18.81999969482422 C-91.28399658203125,-9.465999603271484 -103.2509994506836,-47.7599983215332 -89.61599731445312,-66.61699676513672z"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const results = [
  {
    icon: <div className="w-16 h-16 mb-4">{<MessageIcon />}</div>, // Adiciona o ícone aqui
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
                {result.icon} {/* Renderiza o ícone se existir */}
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