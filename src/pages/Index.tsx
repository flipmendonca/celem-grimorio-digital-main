import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Crown, Scroll, Shield, Sword, Castle, Coins, Key } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

interface IndexProps {
  sidebarEnabled?: boolean;
}

const Index = ({ sidebarEnabled = true }: IndexProps) => {
  useEffect(() => {
    document.title = "Reino Sagrado de Celem - Guia Oficial";
  }, []);

  const guidePreviewItems = [
    { title: 'Introdução', path: '/guia/introducao', icon: Book },
    { title: 'Missões', path: '/guia/missoes', icon: Scroll },
    { title: 'Níveis', path: '/guia/niveis', icon: Crown },
    { title: 'Familiares', path: '/guia/familiares', icon: Shield },
    { title: 'Classes', path: '/guia/classes', icon: Sword },
  ];

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden h-80 sm:h-96 md:h-[500px] mb-12 rounded-lg">
          <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-vrising-black to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/fog.png')] bg-cover opacity-30 animate-fog-flow"></div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
            <div 
              className="w-24 h-24 mb-4 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/logo.png')" }}
            ></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-white mb-6 red-glow text-shadow-sm">
              Reino Sagrado de Celem
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90 mb-8 text-shadow-sm">
              Conheça todos os segredos e recursos do servidor V Rising mais completo do Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/guia"
                className="py-3 px-6 bg-vrising-red hover:bg-vrising-red/90 text-white rounded-md transition-colors no-underline"
              >
                Acessar o Guia Completo
              </Link>
              <a 
                href="https://discord.gg/celem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 px-6 bg-vrising-darkcharcoal/80 hover:bg-vrising-darkcharcoal text-white rounded-md border border-vrising-red/30 transition-colors no-underline"
              >
                Entrar no Servidor
              </a>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="gothic-paper p-6 md:p-8 rounded-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Castle className="h-6 w-6 text-vrising-red" />
            <h2 className="text-2xl md:text-3xl font-cinzel text-white">Sobre o Reino</h2>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Bem-vindo ao <span className="text-vrising-red">Reino Sagrado de Celem</span>, o servidor de V Rising mais completo e imersivo do Brasil. 
              Nosso reino oferece uma experiência única com sistemas especiais, eventos exclusivos e uma comunidade ativa de vampiros.
            </p>
            <p>
              Desde sua fundação, o Reino de Celem tem sido um refúgio para os filhos da noite que buscam desafios, 
              camaradagem e a verdadeira experiência vampírica. Nossa equipe trabalha constantemente para 
              trazer novidades e melhorias ao servidor.
            </p>
            <p>
              Este guia contém todas as informações necessárias para você aproveitar ao máximo sua jornada em Celem, 
              desde os primeiros passos até os conteúdos mais avançados. Prepare-se para embarcar em uma aventura 
              sombria e gloriosa!
            </p>
          </div>
        </div>

        {/* Guide Preview Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Book className="h-6 w-6 text-vrising-red" />
              <h2 className="text-2xl md:text-3xl font-cinzel text-white">Capítulos do Guia</h2>
            </div>
            <Link 
              to="/guia" 
              className="text-sm text-vrising-gold hover:text-vrising-red transition-colors"
            >
              Ver todos os capítulos
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {guidePreviewItems.map((item) => (
              <Link 
                to={item.path}
                key={item.title}
                className="gothic-paper p-6 rounded-lg hover:border-vrising-red/40 transition-colors flex items-start gap-4 no-underline"
              >
                <div className="mt-1">
                  <item.icon className="h-5 w-5 text-vrising-red" />
                </div>
                <div>
                  <h3 className="text-white mb-2 font-cinzel text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-400">
                    Descubra os segredos deste capítulo do guia de Celem.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="gothic-paper p-8 rounded-lg text-center">
          <h2 className="text-xl md:text-2xl font-cinzel text-white mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Una-se a centenas de vampiros no Reino Sagrado de Celem. Crie seu personagem, 
            forme alianças, enfrente temíveis adversários e conquiste seu lugar entre os mais poderosos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://discord.gg/celem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-3 px-6 bg-vrising-red hover:bg-vrising-red/90 text-white rounded-md transition-colors no-underline"
            >
              Entrar no Discord
            </a>
            <a 
              href="https://steamcommunity.com/app/1604030" 
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-vrising-darkcharcoal hover:bg-vrising-darkcharcoal/80 text-white rounded-md border border-vrising-red/30 transition-colors no-underline"
            >
              Acessar no Steam
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
