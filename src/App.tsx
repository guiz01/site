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
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import BackToTopButton from "./components/BackToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import Sair from "./pages/Sair";
import SairConfirmado from "./pages/SairConfirmado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/automacoes" element={<Automacoes />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/central-de-atendimento" element={<CentralDeAtendimento />} />
          <Route path="/sair" element={<Sair />} />
          <Route path="/sair/confirmado" element={<SairConfirmado />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsAppButton />
        <BackToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;