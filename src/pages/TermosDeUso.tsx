"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const TermosDeUso = () => {
  usePageTitle("Termos de Uso | ConnectMe");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="bg-white dark:bg-card p-8 md:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Termos de Uso
          </h1>
          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar ou utilizar os serviços da Connectme, você concorda com os termos e condições aqui estabelecidos. Caso não concorde com qualquer parte destes Termos de Uso, você não deverá utilizar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">2. Descrição dos Serviços</h2>
              <p>
                A Connectme oferece uma ampla gama de serviços voltados para inovação tecnológica, incluindo:
              </p>
              <ul>
                <li>Criação e personalização de agentes de Inteligência Artificial</li>
                <li>Automação de processos empresariais e workflows</li>
                <li>Consultoria especializada em implementação de IA</li>
                <li>Integração de sistemas e otimização de infraestrutura</li>
                <li>Sistema de Gestão do Google Meu Negócio: Solução completa para gerenciar, otimizar e monitorar sua presença no Google Meu Negócio, incluindo múltiplas localizações e respostas automáticas.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">3. Contas de Usuário</h2>
              <p>
                Ao criar uma conta em nossa plataforma, você concorda em:
              </p>
              <ul>
                <li>Fornecer informações precisas, completas e atualizadas durante o cadastro.</li>
                <li>Manter suas credenciais de acesso (login e senha) seguras e confidenciais.</li>
                <li>Notificar imediatamente nossa equipe sobre qualquer uso não autorizado de sua conta.</li>
                <li>Ser integralmente responsável por todas as atividades realizadas através de sua conta.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo disponibilizado pela Connectme, incluindo, mas não se limitando a, textos, imagens, códigos e algoritmos, é protegido por direitos autorais e outras leis de propriedade intelectual. Você não pode copiar, distribuir, modificar ou usar esses materiais para fins comerciais sem a nossa autorização expressa por escrito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">5. Limitação de Responsabilidade</h2>
              <p>
                A Connectme não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes que resultem do uso ou da incapacidade de usar nossos serviços. Essa limitação de responsabilidade aplica-se ao máximo permitido por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">6. Modificações dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Qualquer alteração significativa será comunicada por meio de nossos canais oficiais, como e-mail ou notificações no site. O uso contínuo dos serviços após essas alterações constitui a sua aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">7. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida exclusivamente nos tribunais competentes da cidade de Açailândia, Maranhão.
              </p>
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

export default TermosDeUso;