"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { MessagesSquare, Clock, Zap, Filter, Smile, Meh, Frown, Star } from "lucide-react";

const csatData = [
  { name: "Satisfeito", value: 400, color: "#10B981" }, // green-500
  { name: "Neutro", value: 80, color: "#F59E0B" }, // amber-500
  { name: "Insatisfeito", value: 20, color: "#EF4444" }, // red-500
];

const channelData = [
  { name: "WhatsApp", atendimentos: 820 },
  { name: "Instagram", atendimentos: 340 },
  { name: "Messenger", atendimentos: 90 },
];

const ServiceCenterReportsSection = () => {
  const totalCsat = csatData.reduce((acc, curr) => acc + curr.value, 0);
  const satisfactionPercentage = ((csatData[0].value / totalCsat) * 100).toFixed(0);

  return (
    <section id="reports" className="w-full py-16 bg-white dark:bg-background px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
          Relatórios para Otimizar sua Operação
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Acompanhe métricas essenciais, entenda o desempenho da sua equipe e melhore a satisfação dos seus clientes com dados precisos.
        </p>

        <Card className="w-full p-6 text-left shadow-2xl border-4 border-gray-200 dark:border-gray-700">
          {/* Filtros */}
          <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Filter className="h-5 w-5" /> Filtros</h3>
            <Select defaultValue="7d">
              <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Período" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hoje</SelectItem>
                <SelectItem value="7d">Últimos 7 dias</SelectItem>
                <SelectItem value="30d">Últimos 30 dias</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="support-n1">
              <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Equipe" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Equipes</SelectItem>
                <SelectItem value="support-n1">Suporte N1</SelectItem>
                <SelectItem value="sales">Vendas</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Atendente" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Atendentes</SelectItem>
                <SelectItem value="agent1">Atendente 1</SelectItem>
                <SelectItem value="agent2">Atendente 2</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="troca">
              <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Tag" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Tags</SelectItem>
                <SelectItem value="troca">Troca</SelectItem>
                <SelectItem value="pagamento">Pagamento</SelectItem>
                <SelectItem value="duvida">Dúvida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid de Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Atendimentos</CardTitle>
                <MessagesSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.250</div>
                <p className="text-xs text-muted-foreground">+15% vs. semana anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tempo Médio de Atendimento</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8m 45s</div>
                <p className="text-xs text-muted-foreground">-5% vs. semana anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tempo Médio de 1ª Resposta</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1m 32s</div>
                <p className="text-xs text-muted-foreground">-12% vs. semana anterior</p>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-amber-500" /> Pesquisa de Satisfação (CSAT)</CardTitle>
                <CardDescription>Resultado das avaliações dos clientes no período selecionado.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-1/2 h-[250px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={csatData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5}>
                        {csatData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
                    <p className="text-5xl font-bold text-green-500">{satisfactionPercentage}%</p>
                    <p className="text-lg text-muted-foreground">de Satisfação</p>
                    <div className="flex gap-4 mt-4 text-muted-foreground">
                        <div className="flex items-center gap-1 text-sm"><Smile className="h-4 w-4 text-green-500" /> {csatData[0].value}</div>
                        <div className="flex items-center gap-1 text-sm"><Meh className="h-4 w-4 text-amber-500" /> {csatData[1].value}</div>
                        <div className="flex items-center gap-1 text-sm"><Frown className="h-4 w-4 text-red-500" /> {csatData[2].value}</div>
                    </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Atendimentos por Canal</CardTitle>
                <CardDescription>Volume de conversas iniciadas em cada canal de comunicação.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={channelData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip cursor={{ fill: 'rgba(128, 128, 128, 0.1)' }} />
                    <Bar dataKey="atendimentos" fill="hsl(var(--hero-gradient-end-2))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServiceCenterReportsSection;