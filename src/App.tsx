import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Automacoes from "./pages/Automacoes";
import Campanhas from "./pages/Campanhas";
import CentralDeAtendimento from "./pages/CentralDeAtendimento";
import RobosDeAtendimento from "./pages/RobosDeAtendimento";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/automacoes" element={<Automacoes />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/central-de-atendimento" element={<CentralDeAtendimento />} />
          <Route path="/robos-de-atendimento" element={<RobosDeAtendimento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;