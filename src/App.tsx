import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageLayout, { LanguageRedirect } from "@/components/LanguageLayout";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import CondicionesSow from "./pages/CondicionesSow";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<LanguageLayout />}>
              {/* ─── ES routes (default, no prefix) ─── */}
              <Route path="/" element={<LanguageRedirect><Index /></LanguageRedirect>} />
              <Route path="/que-hacemos" element={<Services />} />
              <Route path="/oficina-IA" element={<About />} />
              <Route path="/casos-de-exito" element={<Work />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/recursos" element={<Blog />} />
              <Route path="/recursos/:id" element={<BlogPost />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/sow" element={<CondicionesSow />} />

              {/* ─── EN routes ─── */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/what-we-do" element={<Services />} />
              <Route path="/en/ai-office" element={<About />} />
              <Route path="/en/case-studies" element={<Work />} />
              <Route path="/en/contact" element={<Contact />} />
              <Route path="/en/resources" element={<Blog />} />
              <Route path="/en/resources/:id" element={<BlogPost />} />
              <Route path="/en/legal-notice" element={<AvisoLegal />} />
              <Route path="/en/privacy" element={<Privacidad />} />
              <Route path="/en/sow-terms" element={<CondicionesSow />} />

              {/* ─── PT routes ─── */}
              <Route path="/pt" element={<Index />} />
              <Route path="/pt/o-que-fazemos" element={<Services />} />
              <Route path="/pt/escritorio-ia" element={<About />} />
              <Route path="/pt/casos-de-sucesso" element={<Work />} />
              <Route path="/pt/contacto" element={<Contact />} />
              <Route path="/pt/recursos" element={<Blog />} />
              <Route path="/pt/recursos/:id" element={<BlogPost />} />
              <Route path="/pt/aviso-legal" element={<AvisoLegal />} />
              <Route path="/pt/privacidade" element={<Privacidad />} />
              <Route path="/pt/condicoes-sow" element={<CondicionesSow />} />

              {/* ─── Catch-all ─── */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
