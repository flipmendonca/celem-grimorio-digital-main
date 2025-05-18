import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Scroll } from "lucide-react";

interface AboutProps {
  sidebarEnabled?: boolean;
}

const About = ({ sidebarEnabled = true }: AboutProps) => {
  useEffect(() => {
    document.title = "Sobre o Projeto - Reino Sagrado de Celem";
  }, []);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="mb-8 pb-4 border-b border-vrising-red/20">
          <div className="flex items-center gap-3 mb-2">
            <Scroll className="h-6 w-6 text-vrising-red" />
            <h1 className="text-white red-glow">Sobre o Projeto</h1>
          </div>
          <p className="text-gray-300">
            Conheça a história e a equipe por trás do Reino Sagrado de Celem, 
            além de nossa missão e valores que norteiam este projeto apaixonado.
          </p>
        </div>

        <div className="mb-12 p-6 gothic-paper rounded-lg">
          <h2 className="text-2xl text-vrising-gold font-cinzel mb-4">Nossa História</h2>
          
          <p className="text-gray-300 mb-4">
            O Reino Sagrado de Celem começou em 2023, quando um pequeno grupo de amigos apaixonados por jogos de vampiros 
            decidiu criar um servidor de V Rising que oferecesse uma experiência única e imersiva, com sistemas exclusivos 
            e uma narrativa rica que complementasse o jogo base.
          </p>
          
          <p className="text-gray-300 mb-4">
            Com apenas 20 slots inicialmente, o servidor rapidamente ganhou popularidade graças a suas mecânicas inovadoras, 
            comunidade acolhedora e constante evolução. Hoje, somos um dos maiores e mais bem avaliados servidores de V Rising 
            no Brasil, com centenas de jogadores ativos e uma comunidade vibrante.
          </p>
          
          <div className="mt-8 p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
            <h3 className="text-vrising-red font-cinzel mb-3 text-lg">Marcos importantes:</h3>
            <ul className="space-y-2 pl-4 text-gray-300">
              <li>• <strong>Julho de 2023</strong> - Lançamento do servidor</li>
              <li>• <strong>Agosto de 2023</strong> - Criação do Discord</li>
              <li>• <strong>Outubro de 2023</strong> - Implementação do mod RPG</li>
            </ul>
          </div>
        </div>

        <div className="mb-12 p-6 gothic-paper rounded-lg">
          <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-vrising-darkgray mx-auto mb-4 border-2 border-vrising-red/40"></div>
              <h3 className="text-vrising-red font-cinzel mb-1">Sir Saia</h3>
              <p className="text-vrising-gold text-sm mb-3">Fundador & Desenvolvedor Principal</p>
              <p className="text-sm text-gray-400">
                Programador e designer principal responsável pelos sistemas e mecânicas exclusivas do servidor.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-vrising-darkgray mx-auto mb-4 border-2 border-vrising-red/40"></div>
              <h3 className="text-vrising-red font-cinzel mb-1">Rainha Noturna</h3>
              <p className="text-vrising-gold text-sm mb-3">Diretora Criativa</p>
              <p className="text-sm text-gray-400">
                Escritora talentosa responsável pela narrativa, lore e missões do Reino Sagrado de Celem.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-vrising-darkgray mx-auto mb-4 border-2 border-vrising-red/40"></div>
              <h3 className="text-vrising-red font-cinzel mb-1">Guardião das Sombras</h3>
              <p className="text-vrising-gold text-sm mb-3">Administrador & Moderador Chefe</p>
              <p className="text-sm text-gray-400">
                Líder da equipe de moderação que garante um ambiente saudável e positivo para todos os jogadores.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl text-vrising-gold font-cinzel mb-4">Equipe de Moderação</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-vrising-darkgray mx-auto mb-2"></div>
              <p className="text-vrising-red font-cinzel text-sm">Caçador Noturno</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-vrising-darkgray mx-auto mb-2"></div>
              <p className="text-vrising-red font-cinzel text-sm">Lâmina Rubra</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-vrising-darkgray mx-auto mb-2"></div>
              <p className="text-vrising-red font-cinzel text-sm">Sentinela</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-vrising-darkgray mx-auto mb-2"></div>
              <p className="text-vrising-red font-cinzel text-sm">Sombra Eterna</p>
            </div>
          </div>
          
          <p className="text-center text-gray-300">
            Além destes, contamos com diversos voluntários e colaboradores que ajudam a manter o servidor 
            funcionando perfeitamente e a comunidade ativa e saudável.
          </p>
        </div>

        <div className="mb-12 p-6 gothic-paper rounded-lg">
          <h2 className="text-2xl text-vrising-gold font-cinzel mb-4">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
              <h3 className="text-vrising-red font-cinzel mb-3 text-lg">Comunidade em Primeiro Lugar</h3>
              <p className="text-sm text-gray-400">
                Priorizamos o feedback dos jogadores e tomamos decisões baseadas nas necessidades da comunidade. Queremos 
                que cada vampiro se sinta valorizado e ouvido.
              </p>
            </div>
            
            <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
              <h3 className="text-vrising-red font-cinzel mb-3 text-lg">Equilíbrio e Justiça</h3>
              <p className="text-sm text-gray-400">
                Trabalhamos constantemente para manter o jogo equilibrado e justo para todos. Nenhuma classe, build ou 
                estilo de jogo deve ser injustamente favorecido.
              </p>
            </div>
            
            <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
              <h3 className="text-vrising-red font-cinzel mb-3 text-lg">Inovação Constante</h3>
              <p className="text-sm text-gray-400">
                Buscamos sempre adicionar novos conteúdos e melhorias para manter a experiência fresca e interessante. 
                A evolução é parte integral do nosso DNA.
              </p>
            </div>
            
            <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
              <h3 className="text-vrising-red font-cinzel mb-3 text-lg">Transparência</h3>
              <p className="text-sm text-gray-400">
                Mantemos a comunidade informada sobre todas as mudanças e decisões importantes. Acreditamos que a 
                comunicação clara fortalece a confiança.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 p-6 gothic-paper rounded-lg text-center">
          <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Agradecimentos Especiais</h2>
          
          <p className="text-gray-300 mb-8">
            Um agradecimento especial a todos os jogadores que fazem parte desta comunidade incrível! 
            Vocês são a razão pela qual continuamos dedicando nosso tempo e paixão a este projeto.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[...Array(15)].map((_, index) => (
              <div key={index} className="text-xs text-vrising-muted">Vampiro #{index + 1}</div>
            ))}
            <div className="text-xs text-vrising-muted">... e muitos outros!</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">© 2025 Reino Sagrado de Celem | Desenvolvido com ❤️ pela equipe Celem</p>
          <p className="text-xs text-vrising-muted">V Rising é uma marca registrada da Stunlock Studios. Este projeto não possui afiliação oficial.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
