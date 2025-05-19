import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import GuideIndex from "./pages/GuideIndex";
import GuideChapter from "./pages/GuideChapter";
import Support from "./pages/Support";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import WelcomeScreen from "./components/WelcomeScreen";
import Map from "./pages/Map";
import CommandsHub from './components/CommandsHub';

const queryClient = new QueryClient();

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [sidebarEnabled, setSidebarEnabled] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedCelem");
    if (hasVisited) {
      setShowWelcome(false);
      setSidebarEnabled(true);
    }
  }, []);

  const handleEnterSite = () => {
    localStorage.setItem("hasVisitedCelem", "true");
    setShowWelcome(false);
    setSidebarEnabled(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {showWelcome && <WelcomeScreen onEnter={handleEnterSite} />}
          <Routes>
            <Route path="/" element={<Index sidebarEnabled={sidebarEnabled} />} />
            <Route path="/guia" element={<GuideIndex sidebarEnabled={sidebarEnabled} />} />
            <Route path="/guia/:chapter" element={<GuideChapter sidebarEnabled={sidebarEnabled} />} />
            <Route path="/apoie" element={<Support sidebarEnabled={sidebarEnabled} />} />
            <Route path="/sobre" element={<About sidebarEnabled={sidebarEnabled} />} />
            <Route path="/mapa" element={<Map sidebarEnabled={sidebarEnabled} />} />
            <Route path="/comandos" element={<CommandsHub sidebarEnabled={sidebarEnabled} />} />
            <Route path="*" element={<NotFound sidebarEnabled={sidebarEnabled} />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
