"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const PoliticaDePrivacidade = () => {
  usePageTitle("Política de Privacidade | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="bg-white dark:bg-card p-8 md:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Política de Privacidade
          </h1>
          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">1. Introdução</h2>
              <p>
                Na Connectme, respeitamos e protegemos a sua privacidade. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos as suas informações pessoais quando você utiliza nossos serviços, em conformidade com as leis aplicáveis, como a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">2. Coleta de Dados</h2>
              <p>
                Coletamos informações pessoais diretamente fornecidas por você ou geradas durante o uso dos nossos serviços, incluindo:
              </p>
              <ul>
                <li>Informações de cadastro, como nome, email, telefone e dados da empresa.</li>
                <li>Mensagens enviadas para nossa equipe, como solicitações de suporte ou feedbacks.</li>
                <li>Dados técnicos, como endereço IP, tipo de dispositivo, sistema operacional e navegador utilizado.</li>
                <li>Informações sobre como você utiliza nossos serviços, como preferências e interações na plataforma.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">3. Uso das Informações</h2>
              <p>
                Utilizamos os dados coletados para oferecer uma experiência personalizada, melhorar nossos serviços e garantir a segurança da plataforma. Suas informações podem ser usadas para:
              </p>
              <ul>
                <li>Fornecer os serviços contratados e suporte técnico.</li>
                <li>Personalizar sua experiência com base no uso da plataforma.</li>
                <li>Enviar comunicações importantes, como atualizações de sistema e notificações sobre novos recursos ou ofertas.</li>
                <li>Monitorar e proteger a segurança e integridade da plataforma.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">4. Proteção de Dados</h2>
              <p>
                Adotamos medidas técnicas, administrativas e organizacionais para proteger suas informações contra:
              </p>
              <ul>
                <li>Acessos não autorizados.</li>
                <li>Alterações, divulgações ou destruições indevidas.</li>
                <li>Perdas acidentais.</li>
              </ul>
              <p>
                Nossas práticas incluem criptografia de dados sensíveis, controle de acesso restrito e auditorias regulares de segurança.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">5. Retenção de Dados</h2>
              <p>
                Armazenamos suas informações pelo período necessário para cumprir as finalidades descritas nesta Política ou conforme exigido por lei. Após este período, seus dados serão excluídos ou anonimizados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">6. Seus Direitos</h2>
              <p>
                Você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul>
                <li>Acessar uma cópia dos dados que mantemos sobre você.</li>
                <li>Corrigir informações incorretas ou desatualizadas.</li>
                <li>Solicitar a exclusão de seus dados pessoais, salvo quando exigido por lei.</li>
                <li>Restringir o processamento de seus dados em determinadas circunstâncias.</li>
                <li>Solicitar a transferência dos seus dados para outro fornecedor de serviços.</li>
                <li>Contestar o uso de seus dados para finalidades específicas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">8. Contato</h2>
              <p>
                Caso tenha dúvidas ou preocupações relacionadas a estes Termos de Uso, entre em contato conosco através das seguintes informações:
              </p>
              <ul>
                <li><strong>CNPJ:</strong> 37.215.247/0001-35</li>
                <li><strong>Razão Social:</strong> 37.215.247 LETICIA FARIA LEMOS MELO</li>
                <li><strong>Telefone:</strong> (31) 98263-1178</li>
                <li><strong>Email:</strong> contato@connectme.chat</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;