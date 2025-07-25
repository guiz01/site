"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { MessagesSquare, Clock, Zap, Filter, Smile, Meh, Frown, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// --- Tipos de Dados ---
interface Kpi {
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

interface ReportData {
  kpis: {
    totalAtendimentos: Kpi;
    tempoMedioAtendimento: Kpi;
    tempoMedioPrimeiraResposta: Kpi;
  };
  charts: {
    csatData: { name: string; value: number; color: string }[];
    channelData: { name: string; atendimentos: number }[];
  };
}

// --- Dados Simulados ---
const initialData: ReportData = {
  kpis: {
    totalAtendimentos: { value: "1.250", change: "+15%", changeType: "positive" },
    tempoMedioAtendimento: { value: "8m 45s", change: "-5%", changeType: "positive" },
    tempoMedioPrimeiraResposta: { value: "1m 32s", change: "-12%", changeType: "positive" },
  },
  charts: {
    csatData: [
      { name: "Satisfeito", value: 400, color: "#10B981" },
      { name: "Neutro", value: 80, color: "#F59E0B" },
      { name: "Insatisfeito", value: 20, color: "#EF4444" },
    ],
    channelData: [
      { name: "WhatsApp", atendimentos: 820 },
      { name: "Instagram", atendimentos: 340 },
      { name: "Messenger", atendimentos: 90 },
    ],
  },
};

const salesTeamData: ReportData = {
  kpis: {
    totalAtendimentos: { value: "890", change: "+22%", changeType: "positive" },
    tempoMedioAtendimento: { value: "12m 10s", change: "+8%", changeType: "negative" },
    tempoMedioPrimeiraResposta: { value: "2m 05s", change: "+15%", changeType: "negative" },
  },
  charts: {
    csatData: [
      { name: "Satisfeito", value: 350, color: "#10B981" },
      { name: "Neutro", value: 50, color: "#F59E0B" },
      { name: "Insatisfeito", value: 15, color: "#EF4444" },
    ],
    channelData: [
      { name: "WhatsApp", atendimentos: 550 },
      { name: "Instagram", atendimentos: 290 },
      { name: "Messenger", atendimentos: 50 },
    ],
  },
};

const last30DaysData: ReportData = {
  kpis: {
    totalAtendimentos: { value: "5.120", change: "+18%", changeType: "positive" },
    tempoMedioAtendimento: { value: "9m 15s", change: "-2%", changeType: "positive" },
    tempoMedioPrimeiraResposta: { value: "1m 48s", change: "+3%", changeType: "negative" },
  },
  charts: {
    csatData: [
      { name: "Satisfeito", value: 1800, color: "#10B981" },
      { name: "Neutro", value: 350, color: "#F59E0B" },
      { name: "Insatisfeito", value: 95, color: "#EF4444" },
    ],
    channelData: [
      { name: "WhatsApp", atendimentos: 3500 },
      { name: "Instagram", atendimentos: 1400 },
      { name: "Messenger", atendimentos: 220 },
    ],
  },
};

// Helper function to randomize data for simulation
const generateRandomizedData = (baseData: ReportData): ReportData => {
  const randomize = (value: number) => Math.max(0, Math.round(value * (0.8 + Math.random() * 0.4))); // +/- 20%
  
  const randomizedKpis = {
    totalAtendimentos: { 
      ...baseData.kpis.totalAtendimentos, 
      value: randomize(parseInt(baseData.kpis.totalAtendimentos.value.replace(/\./g, ''))).toLocaleString('pt-BR') 
    },
    tempoMedioAtendimento: baseData.kpis.tempoMedioAtendimento, // Keep time strings simple for demo
    tempoMedioPrimeiraResposta: baseData.kpis.tempoMedioPrimeiraResposta,
  };

  const randomizedCharts = {
    csatData: baseData.charts.csatData.map(d => ({ ...d, value: randomize(d.value) })),
    channelData: baseData.charts.channelData.map(d => ({ ...d, atendimentos: randomize(d.atendimentos) })),
  };

  return { kpis: randomizedKpis, charts: randomizedCharts };
};

const ServiceCenterReportsSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reportData, setReportData] = useState<ReportData>(initialData);
  const [activeFilters, setActiveFilters] = useState({
    period: "7d",
    team: "support-n1",
    agent: "all",
    tag: "troca",
  });

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let baseData = initialData;
      if (activeFilters.period === '30d') {
        baseData = last30DaysData;
      }
      if (activeFilters.team === 'sales') {
        baseData = salesTeamData;
      } else if (activeFilters.team === 'support-n1') {
        baseData = initialData;
      }

      let dataToSet = baseData;
      // If a specific agent or tag is selected, randomize the base data to show a change
      if (activeFilters.agent !== 'all' || activeFilters.tag !== 'all') {
        dataToSet = generateRandomizedData(baseData);
      }

      setReportData(dataToSet);
      setIsLoading(false);
    }, 700); // Simula um delay de rede

    return () => clearTimeout(timer);
  }, [activeFilters]);

  const handleFilterChange = (filterType: "period" | "team" | "agent" | "tag", value: string) => {
    setActiveFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const { kpis, charts } = reportData;
  const totalCsat = charts.csatData.reduce((acc, curr) => acc + curr.value, 0);
  const satisfactionPercentage = totalCsat > 0 ? ((charts.csatData[0].value / totalCsat) * 100).toFixed(0) : "0";

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
            <Select defaultValue="7d" onValueChange={(value) => handleFilterChange("period", value)}>
              <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Período" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hoje</SelectItem>
                <SelectItem value="7d">Últimos 7 dias</SelectItem>
                <SelectItem value="30d">Últimos 30 dias</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="support-n1" onValueChange={(value) => handleFilterChange("team", value)}>
              <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Equipe" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Equipes</SelectItem>
                <SelectItem value="support-n1">Suporte N1</SelectItem>
                <SelectItem value="sales">Vendas</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all" onValueChange={(value) => handleFilterChange("agent", value)}>
              <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Atendente" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Atendentes</SelectItem>
                <SelectItem value="agent1">Atendente 1</SelectItem>
                <SelectItem value="agent2">Atendente 2</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="troca" onValueChange={(value) => handleFilterChange("tag", value)}>
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
                {isLoading ? <Skeleton className="h-8 w-24 mt-1" /> : <div className="text-2xl font-bold">{kpis.totalAtendimentos.value}</div>}
                {isLoading ? <Skeleton className="h-4 w-32 mt-1" /> : <p className="text-xs text-muted-foreground">{kpis.totalAtendimentos.change} vs. período anterior</p>}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tempo Médio de Atendimento</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading ? <Skeleton className="h-8 w-24 mt-1" /> : <div className="text-2xl font-bold">{kpis.tempoMedioAtendimento.value}</div>}
                {isLoading ? <Skeleton className="h-4 w-32 mt-1" /> : <p className="text-xs text-muted-foreground">{kpis.tempoMedioAtendimento.change} vs. período anterior</p>}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tempo Médio de 1ª Resposta</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading ? <Skeleton className="h-8 w-24 mt-1" /> : <div className="text-2xl font-bold">{kpis.tempoMedioPrimeiraResposta.value}</div>}
                {isLoading ? <Skeleton className="h-4 w-32 mt-1" /> : <p className="text-xs text-muted-foreground">{kpis.tempoMedioPrimeiraResposta.change} vs. período anterior</p>}
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
              <CardContent className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <div className="w-full h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={charts.csatData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5}>
                        {charts.csatData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingLeft: '20px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    {isLoading ? <Skeleton className="h-12 w-24" /> : <p className="text-5xl font-bold text-green-500">{satisfactionPercentage}%</p>}
                    <p className="text-lg text-muted-foreground">de Satisfação</p>
                    <div className="flex gap-4 mt-4 text-muted-foreground">
                        <div className="flex items-center gap-1 text-sm"><Smile className="h-4 w-4 text-green-500" /> {isLoading ? <Skeleton className="h-4 w-6" /> : charts.csatData[0].value}</div>
                        <div className="flex items-center gap-1 text-sm"><Meh className="h-4 w-4 text-amber-500" /> {isLoading ? <Skeleton className="h-4 w-6" /> : charts.csatData[1].value}</div>
                        <div className="flex items-center gap-1 text-sm"><Frown className="h-4 w-4 text-red-500" /> {isLoading ? <Skeleton className="h-4 w-6" /> : charts.csatData[2].value}</div>
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
                  <BarChart data={charts.channelData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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