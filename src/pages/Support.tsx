import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Coins, Heart, Shield, Gift } from 'lucide-react';

interface SupportProps {
  sidebarEnabled?: boolean;
}

const Support = ({ sidebarEnabled = true }: SupportProps) => {
  useEffect(() => {
    document.title = "Apoie o Reino - Reino Sagrado de Celem";
  }, []);

  const benefits = [
    {
      title: "Acesso Antecipado",
      description: "Seja o primeiro a experimentar novas atualizações e recursos do servidor.",
      icon: Shield
    },
    {
      title: "Itens Cosméticos Exclusivos",
      description: "Desbloqueie aparências únicas para seu personagem e castelo.",
      icon: Gift
    },
    {
      title: "Suporte ao Desenvolvimento",
      description: "Ajude o Reino a crescer com novos conteúdos e melhorias constantes.",
      icon: Heart
    }
  ];

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="mb-8 pb-6 border-b border-vrising-red/20">
          <div className="flex items-center gap-4 mb-6">
            <Coins className="w-8 h-8 text-vrising-gold" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white red-glow">
              O QUE É ETERNUM?
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl">
            Eternum é um jogo de cartas colecionáveis do Reino Sagrado de Celem, onde cada carta oferece benefícios únicos.
          </p>
        </div>

        <div className="gothic-paper p-8 rounded-lg mb-10">
          <h2 className="text-2xl font-cinzel text-white mb-6">HISTÓRIA DO JOGO</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Durante uma anomalia mágica no Reino Sagrado de Celem, diversas dimensões colidiram, rasgando o tecido da realidade e liberando no mundo criaturas, seres místicos, vampiros, lobisomens, magias proibidas e poderes ancestrais jamais vistos.
            </p>
            <p>
              Para conter o caos e proteger o reino, os magos mais poderosos criaram o Grimório de Eternum, um artefato mágico capaz de aprisionar essas entidades e magias em fragmentos de poder, transformando-os em cartas mágicas que carregam suas essências.
            </p>
            <p>
              Cada dimensão capturada deu origem a um conjunto único de cartas, trazendo consigo novos estilos de jogo, mecânicas exclusivas, estratégias diferenciadas e criaturas singulares.
            </p>
            <p>
              Assim nasceu o jogo Eternum, uma forma de manter esses poderes sob controle enquanto os habitantes de Celem competem entre si, utilizando a energia das cartas para proteger o reino — ou dominar seus adversários.
            </p>
          </div>
        </div>

        <div className="gothic-paper p-8 rounded-lg mb-10">
          <h2 className="text-2xl font-cinzel text-white mb-6">SOBRE AS CARTAS</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              As cartas de Eternum refletem o vasto multiverso de onde foram extraídas. Divididas em categorias como familiares, auras e equipamentos, e agrupadas por suas dimensões de origem, elas representam heróis lendários, feras sobrenaturais, magias arcanas e relíquias místicas.
            </p>
            <p>
              Cada conjunto dimensional oferece habilidades estratégicas únicas, influenciando a dinâmica de cada partida e permitindo a criação de táticas inovadoras.
            </p>
            <p>
              Combinando ataque, defesa e manipulação arcana, cada duelo em Eternum é uma experiência única, intensa e imprevisível.
            </p>
          </div>
        </div>

        <div className="gothic-paper p-8 rounded-lg mb-10">
          <h2 className="text-2xl font-cinzel text-white mb-6">COMO COLECIONAR</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              As cartas de Eternum são obtidas por meio de doações para a manutenção do servidor. Essas contribuições ajudam a preservar e expandir o universo do Reino Sagrado de Celem.
            </p>
            <p>
              Jogadores podem adquirir cartas individualmente ou em pacotes temáticos, que agrupam cartas de uma mesma dimensão, oferecendo combinações estratégicas que fortalecem seus decks e transformam a maneira de jogar em cada duelo.
            </p>
          </div>
        </div>

        <div className="gothic-paper p-8 rounded-lg text-center">
          <h2 className="text-2xl font-cinzel text-white mb-6">COMO ADQUIRIR SUAS CARTAS DE ETERNUM</h2>
          
          <div className="mb-8">
            <a 
              href="https://discord.com/channels/969232203374534656/1366168557859377153" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block bg-vrising-red hover:bg-vrising-red/90 text-white py-3 px-6 rounded-md no-underline mb-8"
            >
              ACESSE O CATÁLOGO AQUI
            </a>
          </div>

          <div className="space-y-6 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vrising-red/20 flex items-center justify-center text-vrising-red font-bold">1</div>
              <div>
                <h3 className="text-lg font-cinzel text-white mb-2">Escolha suas cartas ou pacotes</h3>
                <p className="text-gray-300">Acesse o catálogo disponível e selecione a dimensão escolhida e as cartas ou pacotes que deseja adquirir.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vrising-red/20 flex items-center justify-center text-vrising-red font-bold">2</div>
              <div>
                <h3 className="text-lg font-cinzel text-white mb-2">Adicione ao carrinho</h3>
                <p className="text-gray-300">Após escolher, adicione os itens ao seu carrinho para montar sua doação personalizada.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vrising-red/20 flex items-center justify-center text-vrising-red font-bold">3</div>
              <div>
                <h3 className="text-lg font-cinzel text-white mb-2">Aplique os cupons de desconto</h3>
                <p className="text-gray-300">Caso tenha cupons de desconto, abra um ticket em 『🎫』abrir-ticket e solicite os seus cupons.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vrising-red/20 flex items-center justify-center text-vrising-red font-bold">4</div>
              <div>
                <h3 className="text-lg font-cinzel text-white mb-2">Finalize a doação</h3>
                <p className="text-gray-300">Escolha o método de pagamento que preferir (PIX, cartão de crédito, boleto, etc.) e conclua a transação de forma rápida e segura.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vrising-red/20 flex items-center justify-center text-vrising-red font-bold">5</div>
              <div>
                <h3 className="text-lg font-cinzel text-white mb-2">Aguarde a criação do canal de resgate</h3>
                <p className="text-gray-300">Assim que a doação for confirmada, um canal exclusivo será criado automaticamente para você realizar o resgate dos seus itens.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 border border-vrising-red/30 rounded-md bg-vrising-darkcharcoal/30">
            <p className="text-vrising-red font-semibold">
              ATENÇÃO: TODAS AS DOAÇÕES SÃO VOLUNTÁRIAS, NÃO REEMBOLSÁVEIS E AJUDAM DIRETAMENTE NA MANUTENÇÃO DO SERVIDOR.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Support;
