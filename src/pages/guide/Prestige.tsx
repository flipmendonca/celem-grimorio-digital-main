import { useEffect } from 'react';
import { Crown } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

interface PrestigeProps {
  sidebarEnabled?: boolean;
}

const Prestige = ({ sidebarEnabled = true }: PrestigeProps) => {
  useEffect(() => {
    document.title = "Prestígio - Reino Sagrado de Celem";
  }, []);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="mb-8 pb-6 border-b border-vrising-red/20">
          <div className="flex items-center gap-4 mb-6">
            <Crown className="w-8 h-8 text-vrising-red" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white red-glow">
              Prestígio
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl">
            O Prestígio é um sistema que permite que os vampiros acumulem pontos de prestígio através de várias atividades, como derrotar chefões, completar missões e participar de eventos.
          </p>
        </div>

        <div className="gothic-paper p-8 rounded-lg mb-10">
          <h2 className="text-2xl font-cinzel text-white mb-6">Como Aprender o Prestígio</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Derrotar chefões que têm habilidades específicas</li>
            <li>Completar missões que oferecem habilidades</li>
            <li>Usar itens de habilidades no inventário</li>
            <li>Participar de eventos que oferecem habilidades</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Prestige; 