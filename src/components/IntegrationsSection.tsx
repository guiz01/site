"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";

const IntegrationsSection = () => {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-background px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Integrações poderosas
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Conecte-se com as ferramentas que você já usa e amplie suas possibilidades
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">E-commerce</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Integração nativa com as principais plataformas de e-commerce do mercado
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Shopify</Badge>
              <Badge variant="secondary">Magento</Badge>
              <Badge variant="secondary">WooCommerce</Badge>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Integração instantânea</span>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">CRM</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sincronize seus dados de clientes e automatize seu fluxo de vendas
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">HubSpot</Badge>
              <Badge variant="secondary">Salesforce</Badge>
              <Badge variant="secondary">Pipedrive</Badge>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Sincronização em tempo real</span>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Marketing</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Crie campanhas integradas e multiplique seus resultados
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Mailchimp</Badge>
              <Badge variant="secondary">ActiveCampaign</Badge>
              <Badge variant="secondary">RD Station</Badge>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Automação cruzada</span>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Analytics</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tenha insights completos sobre o desempenho das suas automações
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Google Analytics</Badge>
              <Badge variant="secondary">Hotjar</Badge>
              <Badge variant="secondary">Mixpanel</Badge>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Dados em tempo real</span>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Pagamentos</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Automatize notificações de pagamento e cobranças
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Mercado Pago</Badge>
              <Badge variant="secondary">PagSeguro</Badge>
              <Badge variant="secondary">Stripe</Badge>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Notificações instantâneas</span>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Custom API</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conecte-se com qualquer sistema através da nossa API RESTful
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">REST API</Badge>
              <Badge variant="secondary">Webhooks</Badge>
              <Badge variant="secondary">WebSockets</Badge>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Totalmente personalizável</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;