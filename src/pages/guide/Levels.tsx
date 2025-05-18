timport { useEffect } from 'react';
import { Crown } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

interface LevelsProps {
  sidebarEnabled?: boolean;
}

const Levels = ({ sidebarEnabled = true }: LevelsProps) => {
  useEffect(() => {
    document.title = "Níveis - Reino Sagrado de Celem";
  }, []);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="mb-8 pb-4 border-b border-vrising-red/20">
          <div className="flex items-center gap-3 mb-2">
            <Crown className="h-6 w-6 text-vrising-red" />
            <h1 className="text-white red-glow">Níveis</h1>
          </div>
          <p className="text-gray-300">
            No servidor, o tradicional sistema de níveis de equipamento foi substituído por um inovador sistema de progressão, 
            que permite evoluir seus níveis, alcançar o prestígio e desbloquear desafios únicos e recompensas exclusivas.
          </p>
        </div>

        <div className="space-y-8">
          {/* Level Cap Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-4">Nível Máximo</h2>
            <p className="text-gray-300">
              O nível máximo que um personagem pode atingir é 90, você vai aumentando seu nível conforme elimina unidades e Sangue V.
            </p>
          </div>

          {/* Commands Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Comandos</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                  <h3 className="text-vrising-red font-cinzel mb-2">.nvl e</h3>
                  <p className="text-sm text-gray-400">
                    Habilita/desabilita a exibição do recebimento de experiência de nível.
                  </p>
                </div>

                <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                  <h3 className="text-vrising-red font-cinzel mb-2">.nvl d</h3>
                  <p className="text-sm text-gray-400">
                    Exibe todas as informações do seu progresso de nível.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Level Up Notice */}
          <div className="p-6 gothic-paper rounded-lg text-center">
            <p className="text-vrising-gold font-cinzel text-lg">
              AO EVOLUIR DE NÍVEL, APARECERÁ UMA MENSAGEM NO CHAT
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Levels;