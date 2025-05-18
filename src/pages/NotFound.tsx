import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

interface NotFoundProps {
  sidebarEnabled?: boolean;
}

const NotFound = ({ sidebarEnabled = true }: NotFoundProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Página não encontrada - Reino Sagrado de Celem";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl font-cinzel text-vrising-red mb-4">404</h1>
          <h2 className="text-2xl text-white mb-6">Os morcegos se perderam nas sombras...</h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Parece que você tentou acessar um reino que não existe. 
            Talvez os vampiros tenham se alimentado deste caminho, ou talvez ele nunca tenha existido.
          </p>
          <Link 
            to="/" 
            className="py-3 px-6 bg-vrising-red hover:bg-vrising-red/90 text-white rounded-md transition-colors inline-block no-underline"
          >
            Retornar ao Reino
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
