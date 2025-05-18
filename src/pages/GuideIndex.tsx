import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Book, Scroll, Crown, Shield, Sword, Key, Castle, Coins, Droplet } from 'lucide-react';

interface GuideIndexProps {
  sidebarEnabled?: boolean;
}

const GuideIndex = ({ sidebarEnabled = true }: GuideIndexProps) => {
  useEffect(() => {
    document.title = "Guia Completo - Reino Sagrado de Celem";
  }, []);

  const guideItems = [
    { title: 'Introdução', path: '/guia/introducao', icon: Book, description: 'Conheça o funcionamento básico do Reino Sagrado de Celem e seus sistemas.' },
    { title: 'Missões', path: '/guia/missoes', icon: Scroll, description: 'Guia completo sobre o sistema de missões diárias, semanais e de história.' },
    { title: 'Níveis', path: '/guia/niveis', icon: Crown, description: 'Entenda como funciona a progressão de níveis e como subir mais rápido.' },
    { title: 'Familiares', path: '/guia/familiares', icon: Shield, description: 'Todos os familiares disponíveis, onde encontrá-los e como evoluí-los.' },
    { title: 'Classes', path: '/guia/classes', icon: Sword, description: 'As classes disponíveis e suas especializações, habilidades e equipamentos.' },
    { title: 'Profissões', path: '/guia/profissoes', icon: Key, description: 'Guia completo sobre mineração, ferraria, alquimia e outras profissões.' },
    { title: 'Habilidades com Armas', path: '/guia/habilidades', icon: Sword, description: 'Combos, melhorias e builds para todas as armas do jogo.' },
    { title: 'Legado de Sangue', path: '/guia/legado', icon: Droplet, description: 'O sistema de Legado de Sangue e como utilizá-lo de forma eficiente.' },
    { title: 'Prestígio', path: '/guia/prestigio', icon: Crown, description: 'Como ganhar prestígio e os benefícios de cada nível.' },
    { title: 'Economia', path: '/guia/economia', icon: Coins, description: 'Guia sobre comércio, leilões e como ganhar moedas no servidor.' },
    { title: 'Tributos', path: '/guia/tributos', icon: Coins, description: 'Sistema de tributos, recompensas e funcionamento completo.' },
    { title: 'Chefões Globais', path: '/guia/chefoes', icon: Crown, description: 'Todos os chefões, suas mecânicas e recompensas exclusivas.' },
    { title: 'Passe de Batalha', path: '/guia/passe', icon: Scroll, description: 'Benefícios, recompensas e como progredir no passe de batalha.' },
    { title: 'Rankings', path: '/guia/rankings', icon: Crown, description: 'Entenda os sistemas de ranking PVP, PVE e de clãs.' },
    { title: 'Interface', path: '/guia/interface', icon: Castle, description: 'Aprenda a utilizar todas as funcionalidades da interface do servidor.' },
  ];

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="mb-8 pb-6 border-b border-vrising-red/20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white mb-6 red-glow">
            Guia Completo
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Este guia contém todas as informações necessárias para você dominar os sistemas do Reino Sagrado de Celem.
            Navegue pelos capítulos abaixo para desvendar todos os segredos e se tornar um vampiro poderoso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideItems.map((item) => (
            <Link 
              to={item.path}
              key={item.title}
              className="gothic-paper p-6 rounded-lg hover:border-vrising-red/40 transition-all hover:translate-y-[-2px] flex items-start gap-4 no-underline group"
            >
              <div className="mt-1 p-2 bg-vrising-red/10 rounded-md group-hover:bg-vrising-red/20 transition-colors">
                <item.icon className="h-5 w-5 text-vrising-red" />
              </div>
              <div>
                <h3 className="text-white mb-2 font-cinzel text-lg group-hover:text-vrising-red transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default GuideIndex;
