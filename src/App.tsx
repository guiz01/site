import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import SairErro from "./pages/SairErro";
import Entrar from "./pages/Entrar";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const hideGlobalComponents = [
    '/sair',
    '/sair/confirmado',
    '/sair/erro'
  ].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/automacoes" element={<Automacoes />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/central-de-atendimento" element={<CentralDeAtendimento />} />
        <Route path="/sair" element={<Sair />} />
        <Route path="/sair/confirmado" element={<SairConfirmado />} />
        <Route path="/sair/erro" element={<SairErro />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideGlobalComponents && (
        <>
          <FloatingWhatsAppButton />
          <BackToTopButton />
        </>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;