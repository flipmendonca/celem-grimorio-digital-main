import { useEffect } from 'react';
import { Shield } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

interface FamiliarsProps {
  sidebarEnabled?: boolean;
}

const Familiars = ({ sidebarEnabled = true }: FamiliarsProps) => {
  useEffect(() => {
    document.title = "Familiares - Reino Sagrado de Celem";
  }, []);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="mb-8 pb-4 border-b border-vrising-red/20">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-6 w-6 text-vrising-red" />
            <h1 className="text-white red-glow">Familiares</h1>
          </div>
          <p className="text-gray-300">
            Capture, treine e utilize aliados únicos, desde unidades básicas até poderosos Sangues V, 
            com evolução e customização visual, permitindo que seus familiares se tornem poderosos aliados.
          </p>
        </div>

        <div className="space-y-8">
          {/* Level Cap Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-4">Nível Máximo</h2>
            <p className="text-gray-300">
              O nível máximo que um familiar pode atingir é 90, você vai aumentando o nível dele conforme elimina unidades e Sangue V.
            </p>
          </div>

          {/* Capture Chances Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Chance de Captura</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">Unidades</h3>
                <p className="text-2xl text-vrising-gold">10%</p>
              </div>
              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">Sangue V</h3>
                <p className="text-2xl text-vrising-gold">1%</p>
              </div>
            </div>
          </div>

          {/* Commands Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Comandos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam l</h3>
                <p className="text-sm text-gray-400">Exibe todos os familiares presentes na caixa atual.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam v [#]</h3>
                <p className="text-sm text-gray-400">Vincula o familiar com seu personagem, chamando para ajudar no combate.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam dv</h3>
                <p className="text-sm text-gray-400">Desvincula o familiar do seu personagem, o retornando para caixa.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam d</h3>
                <p className="text-sm text-gray-400">Exibe todas as informações do seu progresso com o familiar.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam lc</h3>
                <p className="text-sm text-gray-400">Exibe todas todas as caixas de familiares criadas para seu personagem.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam ec [Caixa]</h3>
                <p className="text-sm text-gray-400">Escolhe a caixa que deve ficar ativa no momento.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam ac [Caixa]</h3>
                <p className="text-sm text-gray-400">Adiciona uma caixa de familiares para organizar seu familiares.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam dc [Caixa]</h3>
                <p className="text-sm text-gray-400">Deleta a caixa de familiar escolhida caso ela esteja vazia.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam rc [CaixaAtual] [NovaCaixa]</h3>
                <p className="text-sm text-gray-400">Renomeia uma caixa de familiar existente para o novo nome escolhido.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam mf [Caixa]</h3>
                <p className="text-sm text-gray-400">Move o familiar ativo para a caixa de familiar escolhida.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam pc [Familiar]</h3>
                <p className="text-sm text-gray-400">Procura o familiar escolhido em todas as suas caixas de familiares.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam r</h3>
                <p className="text-sm text-gray-400">Desvincula qualquer registro de familiar ativo do seu personagem para corrigir inconsistências.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam a</h3>
                <p className="text-sm text-gray-400">Habilita/desabilita os familiares.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam rf [#]</h3>
                <p className="text-sm text-gray-400">Remove o familiar permanentemente da caixa escolhida, essa ação não tem volta.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam ac</h3>
                <p className="text-sm text-gray-400">Habilita/desabilita o combate do familiar, ele continua com você, mas não rouba sua experiência.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam e</h3>
                <p className="text-sm text-gray-400">Habilita/desabilita a exibição controlar os familiares pelos emotes.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam le</h3>
                <p className="text-sm text-gray-400">Exibe as ações de emotes disponíveis.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam ao [Opção]</h3>
                <p className="text-sm text-gray-400">Habilita/desabilita a exibição de aura Shiny ou controle dos Emotes.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam es [Efeito]</h3>
                <p className="text-sm text-gray-400">Escolhe um efeito Shiny em um familiar que ainda não possui, apenas uma única vez e sem custo. Se o familiar já tiver um Shiny, você pode trocá-lo. (1250x Fragmento Assutador Primordial)</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.roletar</h3>
                <p className="text-sm text-gray-400">Forma de adquirir qualquer unidade e Sangue V do jogo, adicionando um familiar aleatório a sua caixa, podendo obter desde um Esqueleto até o Drácula. (5x Fragmento de Demônio)</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.autoloot</h3>
                <p className="text-sm text-gray-400">Habilita/desabilita o autoloot dos familiares.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam e</h3>
                <p className="text-sm text-gray-400">Habilita/desabilita a exibição dos itens coletados pelo autoloot dos familiares.</p>
              </div>
            </div>
          </div>

          {/* Trading Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Troca de Familiar</h2>
            <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
              <h3 className="text-vrising-red font-cinzel mb-2">.fam tf [Jogador]</h3>
              <p className="text-sm text-gray-400">
                Envia um convite de troca do seu familiar ativo para outro jogador que vai escolher um familiar para trocar com você. 
                (os familiares enviados e recebidos mantém o prestígio, nível e Shiny)
                <br /><br />
                Após ambos os jogadores mandarem o convite de troca, vai ter uma etapa de confirmação de trocar de familiar que 
                deve ser aceita com o emote "Sim" ou recusado com o emote "Não".
                <br /><br />
                O custo para trocar é baseado no familiar que você está adquirido, levando em conta o nível, prestígio e se é 
                Shiny ou Sangue V.
                <br /><br />
                Você só pode fazer uma troca de familiar a cada 3 minutos, caso seu pedido de troca for recusado, você tem que 
                esperar esse tempo também antes de enviar outro pedido.
              </p>
            </div>
          </div>

          {/* Familimon Battle Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Batalha Familimon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam g [1/2/3]</h3>
                <p className="text-sm text-gray-400">Define o familiar ativo atualmente como integrante de um dos três grupos de combate.</p>
              </div>

              <div className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                <h3 className="text-vrising-red font-cinzel mb-2">.fam dsf [Jogador/Cancelar]</h3>
                <p className="text-sm text-gray-400">Desafia o jogador para um combate de Familimon ou cancela a fila atual. (Necessário ter definido os três familiares para o combate)</p>
              </div>
            </div>
          </div>

          {/* Capture Notice */}
          <div className="p-6 gothic-paper rounded-lg text-center">
            <p className="text-vrising-gold font-cinzel text-lg">
              AO CAPTURAR UM FAMILIAR, APARECERÁ UMA MENSAGEM NO CHAT
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Familiars;