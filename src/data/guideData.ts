interface ChapterData {
  title: string;
  content: string;
}

interface GuideData {
  [key: string]: ChapterData;
}

const guideData: GuideData = {
  introducao: {
    title: 'Introdução',
    content: `
      <p>Ao iniciar sua jornada, dirija-se a Vardoran, onde sua missão será conquistar aliados e desenvolver suas habilidades. A escuridão será sua aliada enquanto você se fortalece a cada conquista. Neste mundo de vampiros, o poder vem da noite, e cada local explorado revelará segredos ancestrais que ajudarão na sua ascensão.</p>
      
      <p>Derrote inimigos para recrutar familiares e explore mistérios ao lado de outros vampiros. No Reino Sagrado de Celem, a noite nunca acaba, e a verdadeira prova será derrotar o Drácula e assumir seu poder, transformando-se na nova liderança das terras sombrias.</p>
      
      <p>Antes de iniciar sua jornada no Reino Sagrado de Celem, é essencial que você esteja ciente dos plugins personalizados que oferecem uma experiência de jogo única. Esses plugins são fundamentais para que você possa aproveitar ao máximo todos os sistemas do servidor.</p>
      
      <p>Antes de começar, é altamente recomendado que você se familiarize com as modificações e compreenda como elas funcionam, para que sua experiência seja fluida e sem surpresas.</p>
      
      <p>Este é um servidor com um autêntico sistema de RPG, que altera totalmente a experiência de jogo. Aqui, seu progresso acontece ao derrotar inimigos, tornando a jornada mais longa e desafiadora, ideal para jogadores que apreciam uma construção de personagem sólida e envolvente.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Como Utilizar os Plugins</h3>
      <p>Os plugins são integrados ao jogo por meio de comandos específicos digitados no chat, que sempre começam com um ponto ( . ). Cada comando permite interagir com diferentes sistemas, como tributos, níveis, familiares, missões e muito mais.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Primeiros Passos</h3>
      <p>Para começar com o pé direito, é fundamental planejar bem a sua estratégia inicial. Escolha uma classe, um tipo de sangue e uma arma que se alinhem com seu estilo de jogo. Além disso, aproveite a oportunidade para derrotar inimigos e capturá-los, transformando-os em familiares que podem ser usados durante os combates.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Comandos</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2 text-left">Comando</th>
              <th class="border border-vrising-red/20 p-2 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.afk</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita o modo ausente.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.kit</td>
              <td class="border border-vrising-red/20 p-2">Recebe um kit inicial de recursos.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.preparar</td>
              <td class="border border-vrising-red/20 p-2">Avança as primeiras missões e libera a caça aos Sangue V.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.lembrar</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita os lembretes de progressão.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.exp</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita os números de experiência de profissão obtidos.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.base</td>
              <td class="border border-vrising-red/20 p-2">Exibe as bases disponíveis e em decaimento separado por regiões.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.ping</td>
              <td class="border border-vrising-red/20 p-2">Exibe o retorno de latência do servidor.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.staff</td>
              <td class="border border-vrising-red/20 p-2">Exibe os administradores que estão online no momento.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.vip d</td>
              <td class="border border-vrising-red/20 p-2">Exibe os status de VIP do servidor.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.tp l</td>
              <td class="border border-vrising-red/20 p-2">Exibe os teleportes disponíveis.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.tp p [Nome]</td>
              <td class="border border-vrising-red/20 p-2">Teleporte para o teleporte escolhido, teleportes pessoais são gratuítos. (150x Essência de Sangue)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.tp c [Nome]</td>
              <td class="border border-vrising-red/20 p-2">Cria um teleporte pessoal no local que o personagem está atualmente. (1 por jogador)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.tp r [Nome]</td>
              <td class="border border-vrising-red/20 p-2">Remove o teleporte pessoal criado.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.aura l</td>
              <td class="border border-vrising-red/20 p-2">Exibe as auras disponíveis para aplicar no personagem.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.aura [Nome]</td>
              <td class="border border-vrising-red/20 p-2">Aplica a aura informada no personagem e caso deseja remover só informar o nome da aura atual ativa.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.g</td>
              <td class="border border-vrising-red/20 p-2">Guarda os itens do inventário nos baús do território que estiver, desde que tenha o mesmo item nos baús. Também pode ser utilizado apertando duas vezes no botão de Ordenar do inventário.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.pi [Nome]</td>
              <td class="border border-vrising-red/20 p-2">Procura o item e informa em quais baús está do território que estiver.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.px [Nome] [Quantidade]</td>
              <td class="border border-vrising-red/20 p-2">Puxa o item e a quantidade informada dos baús do território e adiciona ao seu inventário.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  missoes: {
    title: 'Missões',
    content: `
      <p>Desafios diários e semanais que premiam os jogadores com moedas do jogo e experiência de nível, a recompensa escala de acordo com o nível de dificuldade.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Comandos Disponíveis</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2 text-left">Comando</th>
              <th class="border border-vrising-red/20 p-2 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.mi e</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita a exibição do progresso de missões.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.mi d [Missão]</td>
              <td class="border border-vrising-red/20 p-2">Exibe o progresso da missão escolhida.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.mi loc [Missão]</td>
              <td class="border border-vrising-red/20 p-2">Rastreia o alvo da missão caso for uma unidade.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.mi t [Missão]</td>
              <td class="border border-vrising-red/20 p-2">Troca a missão escolhida. (50x Essência de Sangue para diária e 200x Essência de Sangue para semanal)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.mi l</td>
              <td class="border border-vrising-red/20 p-2">Exibe todos os tipos de missões disponíveis.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="p-4 border border-vrising-red/30 rounded-md bg-vrising-darkcharcoal/50 mt-6">
        <h4 class="text-vrising-red font-cinzel text-lg mb-2">Observação</h4>
        <p class="text-lg font-semibold">AO COMPLETAR A MISSÃO, APARECERÁ UMA MENSAGEM NO CHAT</p>
      </div>
    `
  },
  niveis: {
    title: 'Níveis',
    content: `
      <p>No servidor, o tradicional sistema de níveis de equipamento foi substituído por um inovador sistema de progressão, que permite evoluir seus níveis, alcançar o prestígio e desbloquear desafios únicos e recompensas exclusivas.</p>
      
      <p>O nível máximo que um personagem pode atingir é 90, você vai aumentando seu nível conforme elimina unidades e Sangue V.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Comandos</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2 text-left">Comando</th>
              <th class="border border-vrising-red/20 p-2 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.nvl e</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita a exibição do recebimento de experiência de nível.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.nvl d</td>
              <td class="border border-vrising-red/20 p-2">Exibe todas as informações do seu progresso de nível.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="p-4 border border-vrising-red/30 rounded-md bg-vrising-darkcharcoal/50 mt-6">
        <h4 class="text-vrising-red font-cinzel text-lg mb-2">Observação</h4>
        <p class="text-lg font-semibold">AO EVOLUIR DE NÍVEL, APARECERÁ UMA MENSAGEM NO CHAT</p>
      </div>
    `
  },
  familiares: {
    title: 'Familiares',
    content: `
      <p>Capture, treine e utilize aliados únicos, desde unidades básicas até poderosos Sangues V, com evolução e customização visual, permitindo que seus familiares se tornem poderosos aliados.</p>
      
      <p>O nível máximo que um familiar pode atingir é 90, você vai aumentando o nível dele conforme elimina unidades e Sangue V.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">% DE CHANCE DE CAPTURAR UM FAMILIAR</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2 text-left">Tipo</th>
              <th class="border border-vrising-red/20 p-2 text-left">Chance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2">Unidades</td>
              <td class="border border-vrising-red/20 p-2">10%</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2">Sangue V</td>
              <td class="border border-vrising-red/20 p-2">1%</td>
            </tr>
          </tbody>
        </table>
        </div>
        
      <div class="p-4 border border-vrising-red/30 rounded-md bg-vrising-darkcharcoal/50 mt-6 mb-6">
        <h4 class="text-vrising-red font-cinzel text-lg mb-2">Observação</h4>
        <p class="text-lg font-semibold">AO CAPTURAR UM FAMILIAR, APARECERÁ UMA MENSAGEM NO CHAT</p>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">Comandos</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2 text-left">Comando</th>
              <th class="border border-vrising-red/20 p-2 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam l</td>
              <td class="border border-vrising-red/20 p-2">Lista de familiares.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam v</td>
              <td class="border border-vrising-red/20 p-2">Vincula o familiar.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam dv</td>
              <td class="border border-vrising-red/20 p-2">Desvincula o familiar do seu personagem, o retornando para caixa.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam d</td>
              <td class="border border-vrising-red/20 p-2">Exibe todas as informações do seu progresso com o familiar.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam lc</td>
              <td class="border border-vrising-red/20 p-2">Listar as caixas.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam ec</td>
              <td class="border border-vrising-red/20 p-2">Escolhe uma caixa.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam ac [Caixa]</td>
              <td class="border border-vrising-red/20 p-2">Adiciona uma caixa de familiares para organizar seu familiares.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam dc [Caixa]</td>
              <td class="border border-vrising-red/20 p-2">Deleta a caixa de familiar escolhida caso ela esteja vazia.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam rc [CaixaAtual] [NovaCaixa]</td>
              <td class="border border-vrising-red/20 p-2">Renomeia uma caixa de familiar existente para o novo nome escolhido.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam mf [Caixa]</td>
              <td class="border border-vrising-red/20 p-2">Move o familiar ativo para a caixa de familiar escolhida.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam pc [Familiar]</td>
              <td class="border border-vrising-red/20 p-2">Procura o familiar escolhido em todas as suas caixas de familiares.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam r</td>
              <td class="border border-vrising-red/20 p-2">Desvincula qualquer registro de familiar ativo do seu personagem para corrigir inconsistências.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam a</td>
              <td class="border border-vrising-red/20 p-2">Chama o familiar.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam rf [#]</td>
              <td class="border border-vrising-red/20 p-2">Remove o familiar permanentemente da caixa escolhida, essa ação não tem volta.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam ac</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita o combate do familiar, ele continua com você, mas não rouba sua experiência.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam e</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita a exibição controlar os familiares pelos emotes.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam le</td>
              <td class="border border-vrising-red/20 p-2">Exibe as ações de emotes disponíveis.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam ao [Opção]</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita a exibição de aura Shiny ou controle dos Emotes.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam es [Efeito]</td>
              <td class="border border-vrising-red/20 p-2">Escolhe um efeito Shiny em um familiar que ainda não possui, apenas uma única vez e sem custo. Se o familiar já tiver um Shiny, você pode trocá-lo. (1250x Fragmento Assutador Primordial)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.roletar</td>
              <td class="border border-vrising-red/20 p-2">Forma de adquirir qualquer unidade e Sangue V do jogo, adicionando um familiar aleatório a sua caixa, podendo obter desde um Esqueleto até o Drácula. (5x Fragmento de Demônio)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.autoloot</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita o autoloot dos familiares.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam e</td>
              <td class="border border-vrising-red/20 p-2">Habilita/desabilita a exibição dos itens coletados pelo autoloot dos familiares.</td>
            </tr>
          </tbody>
        </table>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">TROCA DE FAMILIAR</h3>
      <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30 mb-6">
        <p class="mb-4"><strong>.fam tf [Jogador]</strong> - Envia um convite de troca do seu familiar ativo para outro jogador que vai escolher um familiar para trocar com você. (os familiares enviados e recebidos mantém o prestígio, nível e Shiny)</p>
        <p class="mb-4">Após ambos os jogadores mandarem o convite de troca, vai ter uma etapa de confirmação de trocar de familiar que deve ser aceita com o emote "Sim" ou recusado com o emote "Não".</p>
        <p class="mb-4">O custo para trocar é baseado no familiar que você está adquirido, levando em conta o nível, prestígio e se é Shiny ou Sangue V.</p>
        <p>Você só pode fazer uma troca de familiar a cada 3 minutos, caso seu pedido de troca for recusado, você tem que esperar esse tempo também antes de enviar outro pedido.</p>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">BATALHA FAMILIMON</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2 text-left">Comando</th>
              <th class="border border-vrising-red/20 p-2 text-left">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam g [1/2/3]</td>
              <td class="border border-vrising-red/20 p-2">Define o familiar ativo atualmente como integrante de um dos três grupos de combate.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam dsf [Jogador/Cancelar]</td>
              <td class="border border-vrising-red/20 p-2">Desafia o jogador para um combate de Familimon ou cancela a fila atual. (Necessário ter definido os três familiares para o combate)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3 class="text-vrising-gold mt-6 mb-3">LISTA DO TIER DOS FAMILIARES SANGUE V</h3>
      <div class="grid grid-cols-1 gap-4 mb-6">
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
          <h4 class="text-vrising-red font-cinzel mb-2">Tier SS</h4>
          <p class="text-sm">[Imagens e nomes dos familiares serão inseridos posteriormente]</p>
        </div>
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
          <h4 class="text-vrising-red font-cinzel mb-2">Tier S</h4>
          <p class="text-sm">[Imagens e nomes dos familiares serão inseridos posteriormente]</p>
        </div>
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
          <h4 class="text-vrising-red font-cinzel mb-2">Tier A</h4>
          <p class="text-sm">[Imagens e nomes dos familiares serão inseridos posteriormente]</p>
        </div>
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
          <h4 class="text-vrising-red font-cinzel mb-2">Tier B</h4>
          <p class="text-sm">[Imagens e nomes dos familiares serão inseridos posteriormente]</p>
        </div>
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
          <h4 class="text-vrising-red font-cinzel mb-2">Tier C</h4>
          <p class="text-sm">[Imagens e nomes dos familiares serão inseridos posteriormente]</p>
        </div>
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
          <h4 class="text-vrising-red font-cinzel mb-2">Tier D</h4>
          <p class="text-sm">[Imagens e nomes dos familiares serão inseridos posteriormente]</p>
        </div>
      </div>
    `
  },
  classes: {
    title: 'Classes',
    content: `
      <p>Estilos de jogo definidos com passivas e habilidades exclusivas, podendo ser adaptados para atender às preferências e estratégias do jogador.</p>
      <p>Cada classe tem sua sinergia com habilidades com armas e legado de sangue, se escolher um status que tem a sinergia, você ganha o dobro de bônus.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">Os tipos de classes disponíveis para escolha</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Classe</th>
              <th class="border border-vrising-red/20 p-2">Sigla</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">Selvagem</td><td class="border border-vrising-red/20 p-2">SL</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Duelista</td><td class="border border-vrising-red/20 p-2">DU</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Vagante</td><td class="border border-vrising-red/20 p-2">VG</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ceifador</td><td class="border border-vrising-red/20 p-2">CE</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Espectro</td><td class="border border-vrising-red/20 p-2">ES</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Necromante</td><td class="border border-vrising-red/20 p-2">NC</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Profeta</td><td class="border border-vrising-red/20 p-2">PF</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Licantropo</td><td class="border border-vrising-red/20 p-2">LT</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-vrising-gold mt-6 mb-3">Feitiços disponíveis para cada classe (utilizado no botão SHIFT caso habilitado)</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Classe</th>
              <th class="border border-vrising-red/20 p-2">Feitiço Inicial<br>(0 Prestígio)</th>
              <th class="border border-vrising-red/20 p-2">Feitiço 1<br>(5 Prestígios)</th>
              <th class="border border-vrising-red/20 p-2">Feitiço 2<br>(10 Prestígios)</th>
              <th class="border border-vrising-red/20 p-2">Feitiço 4<br>(15 Prestígios)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">SL</td><td class="border border-vrising-red/20 p-2">Investida das Sombras</td><td class="border border-vrising-red/20 p-2">Investida Primordial</td><td class="border border-vrising-red/20 p-2">Mil Lanças</td><td class="border border-vrising-red/20 p-2">Anel de Sangue</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">DU</td><td class="border border-vrising-red/20 p-2">Investida das Sombras</td><td class="border border-vrising-red/20 p-2">Chicote de Fogo</td><td class="border border-vrising-red/20 p-2">Forja da Criação</td><td class="border border-vrising-red/20 p-2">Lâminas do Céu</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">VG</td><td class="border border-vrising-red/20 p-2">Investida das Sombras</td><td class="border border-vrising-red/20 p-2">Enxame de Morcegos</td><td class="border border-vrising-red/20 p-2">Redemoinho de Sangue</td><td class="border border-vrising-red/20 p-2">Enxame Sombrio</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">CE</td><td class="border border-vrising-red/20 p-2">Investida das Sombras</td><td class="border border-vrising-red/20 p-2">Armadilha de Espinhos</td><td class="border border-vrising-red/20 p-2">Pulo Empalador</td><td class="border border-vrising-red/20 p-2">Arremetida de Lanças</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ES</td><td class="border border-vrising-red/20 p-2">Investida das Sombras</td><td class="border border-vrising-red/20 p-2">Espinhos de Gelo</td><td class="border border-vrising-red/20 p-2">Orbe de Fogo</td><td class="border border-vrising-red/20 p-2">Zona Eletrostática</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">NC</td><td class="border border-vrising-red/20 p-2">Investida das Sombras</td><td class="border border-vrising-red/20 p-2">Nova Necrótica</td><td class="border border-vrising-red/20 p-2">Horda de Esqueletos</td><td class="border border-vrising-red/20 p-2">Chuva Fúnebre</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">PF</td><td class="border border-vrising-red/20 p-2">Investida das Sombras</td><td class="border border-vrising-red/20 p-2">Cântico da Vida</td><td class="border border-vrising-red/20 p-2">Julgamento Celestial</td><td class="border border-vrising-red/20 p-2">Ira dos Céus</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">LT</td><td class="border border-vrising-red/20 p-2">-</td><td class="border border-vrising-red/20 p-2">-</td><td class="border border-vrising-red/20 p-2">-</td><td class="border border-vrising-red/20 p-2">-</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-vrising-gold mt-6 mb-3">Passivas</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Classe</th>
              <th class="border border-vrising-red/20 p-2">Passiva</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">SL</td><td class="border border-vrising-red/20 p-2">Seus ataques aplicam drenagem, com 10% de chance de desencadear a Fúria de Sangue, aumentando temporariamente seu poder.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">DU</td><td class="border border-vrising-red/20 p-2">Seus ataques geram estática, com 10% de chance de invocar um orbe de raio que circula ao redor do personagem, eletrocutando inimigos próximos.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">VG</td><td class="border border-vrising-red/20 p-2">Seus ataques causam incêncio, com 10% de chance de congelar sua arma, o que pode congelar inimigos atingidos pela condição.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">CE</td><td class="border border-vrising-red/20 p-2">Seus ataques incendeiam os inimigos, com 10% de chance de liberar um surto de energia que causa dano adicional.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ES</td><td class="border border-vrising-red/20 p-2">Seus ataques enfraquecem os inimigos, com 10% de chance de invocar uma Égide Fantasma, que protege você contra danos.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">NC</td><td class="border border-vrising-red/20 p-2">Seus ataques condenam os inimigos, com 10% de chance de ativar um buff que diminui o dano que você recebe por um tempo.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">PF</td><td class="border border-vrising-red/20 p-2">Seus ataques incendeiam os inimigos, com 10% de chance de invocar uma Intervenção Divina, que protege você contra danos.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">LT</td><td class="border border-vrising-red/20 p-2">Seus ataques na forma de lobisomem amaldiçoam os inimigos, aumentando a velocidade de ataque a cada golpe até um máximo de 4 acúmulos.</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-vrising-gold mt-6 mb-3">Comandos</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Comando</th>
              <th class="border border-vrising-red/20 p-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.cl l</td><td class="border border-vrising-red/20 p-2">Lista de todas as Classes.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.cl e</td><td class="border border-vrising-red/20 p-2">Escolhe uma classe. Exemplo: ".cl e Duelista".</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.cl m</td><td class="border border-vrising-red/20 p-2">Muda a classe.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.cl d</td><td class="border border-vrising-red/20 p-2">Informações das classes (não habilitado).</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.cl eh ou .cl eh [Q/E/SHIFT] [1/2/3]</td><td class="border border-vrising-red/20 p-2">"Para virar um conjurador e utilizar feitiços no lugar das habilidades de arma, use esse comando pela primeira vez e selecione dois feitiços novos no seu R e C, depois digite esse comando novamente e equipe e desequipe uma arma para essas habilidades aparecerem no Q e E e após isso pode escolher outras habilidades para utilizar no R e C.<br>É possível utilizar suas habilidades de classe no Q, E ou SHIFT mudando a escrita do comando."</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.cl rh</td><td class="border border-vrising-red/20 p-2">Remove os feitiços.</td></tr>
          </tbody>
        </table>
      </div>
      
      <div class="p-4 border border-vrising-red/30 rounded-md bg-vrising-darkcharcoal/50 mt-6">
        <h4 class="text-vrising-red font-cinzel text-lg mb-2">Transformações</h4>
        <p>Para se transformar em classes que possuem transformações, utilize os comandos específicos da classe após desbloqueá-los.</p>
      </div>
    `
  },
  profissoes: {
    title: 'Profissões',
    content: `
      <p>Especialização em atividades como mineração, pesca, alquimia, entre outras, com aumento de recursos coletados e benefícios adicionais conforme o progresso do jogador.</p>
      <p>O nível máximo que uma profissão pode atingir é 100, você vai aumentando o nível dela conforme realiza atividades referentes ao tipo da profissão.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Tipos de Profissões e seus Benefícios</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Profissão</th>
              <th class="border border-vrising-red/20 p-2">Benefício</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">Lenhador</td><td class="border border-vrising-red/20 p-2">Aumenta a quantidade de madeira obtida ao cortar árvores e podendo obter sementes de árvores aleatórias.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Minerador</td><td class="border border-vrising-red/20 p-2">Aumenta a quantidade de pedras e minérios coletados e podendo obter minério de ouro.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ferreiro</td><td class="border border-vrising-red/20 p-2">Aumenta a durabilidade e os benefícios das armas forjadas.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Alfaiate</td><td class="border border-vrising-red/20 p-2">Aumenta a durabilidade e os benefícios das armaduras confeccionadas.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Pescador</td><td class="border border-vrising-red/20 p-2">Aumenta a quantidade de peixes obtidos ao pescar.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Alquimia</td><td class="border border-vrising-red/20 p-2">Aumenta a duração e os benefícios das poções.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Coletor</td><td class="border border-vrising-red/20 p-2">Aumenta a quantidade de plantas e flores colhidas e podendo obter sementes de flores aleatórias.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Encantamento</td><td class="border border-vrising-red/20 p-2">Aumenta a durabilidade e os benefícios dos colares encantados.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">General</td><td class="border border-vrising-red/20 p-2">Aumenta a chance de obter unidades comuns e sangue v. (Exclusiva do familiar Drácula, o Rei Imortal)</td></tr>
          </tbody>
        </table>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">Comandos</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Comando</th>
              <th class="border border-vrising-red/20 p-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.prof l</td><td class="border border-vrising-red/20 p-2">Lista de profissões.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.prof d</td><td class="border border-vrising-red/20 p-2">Informação do progresso das profissões.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.prof e</td><td class="border border-vrising-red/20 p-2">Habilita/desabilita exibição do manuseio da profissão.</td></tr>
          </tbody>
        </table>
        </div>
        
      <div class="p-4 border border-vrising-red/30 rounded-md bg-vrising-darkcharcoal/50 mt-6 mb-6">
        <h4 class="text-vrising-red font-cinzel text-lg mb-2">Atenção</h4>
        <p>AO EVOLUIR O MANUSEIO DE PROFISSÃO, APARECERÁ UMA MENSAGEM NO CHAT</p>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">Profissão dos Familiares</h3>
      <p>Os familiares têm participação ativa nas profissões do jogo. Cada familiar poderá oferecer benefícios específicos e/ou bônus de recursos, de acordo com sua profissão descrita abaixo.</p>

      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Profissão</th>
              <th class="border border-vrising-red/20 p-2">Familiar (Sangue V)</th>
              <th class="border border-vrising-red/20 p-2">Eficiência</th>
              <th class="border border-vrising-red/20 p-2">Contribuição Prestígio 0</th>
              <th class="border border-vrising-red/20 p-2">Contribuição Prestígio 20</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2" rowspan="5">Alquimista</td><td class="border border-vrising-red/20 p-2">Henry Blackbrew, o Doutor</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Angram, o Purificador</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5%</td><td class="border border-vrising-red/20 p-2">25%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Raziel, o Pastor</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5%</td><td class="border border-vrising-red/20 p-2">20%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Clive, o Incendiário</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5%</td><td class="border border-vrising-red/20 p-2">15%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Maja, a Sábia das Trevas</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">5%</td><td class="border border-vrising-red/20 p-2">10%</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="5">Encantamento</td><td class="border border-vrising-red/20 p-2">Mairwyn, a Elementalista</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5% / 0,5%</td><td class="border border-vrising-red/20 p-2">25% / 2,25%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Morian, a Matriarca das Stormwing</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5% / 0,4%</td><td class="border border-vrising-red/20 p-2">22% / 1,85%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Terah, a Geomante</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5% / 0,4%</td><td class="border border-vrising-red/20 p-2">19% / 1,35%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Nicholaus, o Caído</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5% / 0,3%</td><td class="border border-vrising-red/20 p-2">16% / 0,90%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Leandra, a Sacerdotisa das Sombras</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">5% / 0,2%</td><td class="border border-vrising-red/20 p-2">13% / 0,45%</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="4">Alfaiate</td><td class="border border-vrising-red/20 p-2">Beatrice, a Costureira</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5% / 0,5%</td><td class="border border-vrising-red/20 p-2">20% / 2%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Matka, a Tecelã de Maldições</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5% / 0,4%</td><td class="border border-vrising-red/20 p-2">17% / 1,6%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Bane, a Lâmina Sombria</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5% / 0,3%</td><td class="border border-vrising-red/20 p-2">14% / 1,2%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ungora, a Rainha Aranha</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5% / 0,2%</td><td class="border border-vrising-red/20 p-2">11% / 0,8%</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="4">Ferreiro</td><td class="border border-vrising-red/20 p-2">Cyril, o Ferreiro Amaldiçoado</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5% / 0,5%</td><td class="border border-vrising-red/20 p-2">20% / 2%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ziva, a Engenheira</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5% / 0,4%</td><td class="border border-vrising-red/20 p-2">17% / 1,6%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Domina, a Dançarina das Lâminas</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5% / 0,3%</td><td class="border border-vrising-red/20 p-2">14% / 1,2%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Grayson, o Armeiro</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5% / 0,2%</td><td class="border border-vrising-red/20 p-2">11% / 0,8%</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="2">Pescador</td><td class="border border-vrising-red/20 p-2">Finn, o Pescador</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">3</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Kodia, o Urso Feroz</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">2</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="12">Lenhador</td><td class="border border-vrising-red/20 p-2">Solarus, o Imaculado</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">15</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Frostmaw, o Terror da Montanha</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">15</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Rufus, o Capataz</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">15</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Simon Belmont, o Caçador de Vampiros</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">13</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Voltatia, a Mestre da Energia</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">13</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Foulrot, o Devorador de Alma</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">13</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Willfred, o Líder Lobisomem</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">11</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">General Cassius, o Traidor</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">11</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Tristan, o Caçador de Vampiros</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">11</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Octavian, o Capitão da Milícia</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">9</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Meredith, a Arqueira Brilhante</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">9</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Alfa, o Lobo Branco</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">9</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="12">Minerador</td><td class="border border-vrising-red/20 p-2">Gorecrusher, o Beemote</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">15</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Sir Magnus, o Supervisor</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">15</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Errol, o Quebra-Pedras</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">15</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Talzur, o Horror Alado</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">13</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Grethel, a Sopradora de Vidro</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">13</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Terrorclaw, o Ogro</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">13</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Lord Styx, o Campeão da Noite</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">11</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Christina, a Sacerdotisa do Sol</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">11</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Vincent, o Portador do Gelo</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">11</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">General Valencia, a Depravada</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">9</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Kriig, o General dos Mortos-vivos</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">9</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Quincey, o Rei dos Bandidos</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">9</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="12">Coletor</td><td class="border border-vrising-red/20 p-2">Barão du Bouchon, o Sommelier</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">5</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ben, o Velho Andarilho</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">5</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Polora, a Andarilha Feérica</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">5</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Albert, o Duque de Balaton</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">4</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">General Elena, a Vazia</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">4</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Nibbles, o Rato Pútrido</td><td class="border border-vrising-red/20 p-2">80%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">4</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Adam, o Primogênito</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">3</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Azariel, o Arauto do Sol</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">3</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Keely, a Arqueira Gélida</td><td class="border border-vrising-red/20 p-2">60%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">3</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Jade, a Caçadora de Vampiros</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">3</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Lidia, a Arqueira do Caos</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">3</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Goreswine, o Devastador</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">3</td></tr>

            <tr><td class="border border-vrising-red/20 p-2" rowspan="2">General</td><td class="border border-vrising-red/20 p-2">Drácula, o Rei Imortal</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">SANGUE V<br>0.2%</td><td class="border border-vrising-red/20 p-2">1%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2"></td><td class="border border-vrising-red/20 p-2"></td><td class="border border-vrising-red/20 p-2">UNIDADES COMUNS<br>1%</td><td class="border border-vrising-red/20 p-2">4%</td></tr>
          </tbody>
        </table>
        </div>
    `
  },
  habilidades: {
    title: 'Habilidades com Armas',
    content: `
      <p>Evolução individual por tipo de arma, permitindo o desbloqueio de habilidades únicas e sinergias que reforçam a especialização do jogador.</p>
      <p>O nível máximo que uma habilidade com arma pode atingir é 100, você vai aumentando o nível dela conforme elimina unidades e Sangue V.</p>
      <p>É possível escolher 2 tipos de atributos para cada tipo de arma, melhorando os atributos e bônus que ela fornece.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">Classes Disponíveis</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Classe</th>
              <th class="border border-vrising-red/20 p-2">Abreviação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">Selvagem</td><td class="border border-vrising-red/20 p-2">SL</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Duelista</td><td class="border border-vrising-red/20 p-2">DU</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Vagante</td><td class="border border-vrising-red/20 p-2">VG</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ceifador</td><td class="border border-vrising-red/20 p-2">CE</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Espectro</td><td class="border border-vrising-red/20 p-2">ES</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Necromante</td><td class="border border-vrising-red/20 p-2">NC</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Profeta</td><td class="border border-vrising-red/20 p-2">PF</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Licantropo</td><td class="border border-vrising-red/20 p-2">LT</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-vrising-gold mt-6 mb-3">Tipos de Armas</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Arma</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">Espada</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Machado</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Clava</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Lanca</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Besta</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">EspadaDeDuasMaos</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Retalhadoras</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Pistolas</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Foice</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ArcoLongo</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Chicote</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Desarmado</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">VaraDePesca</td></tr>
          </tbody>
        </table>
      </div>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Tabela de Status</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Status</th>
              <th class="border border-vrising-red/20 p-2">Sinergia de Classe</th>
              <th class="border border-vrising-red/20 p-2">NVL 100<br>(0 Prestígio)</th>
              <th class="border border-vrising-red/20 p-2">NVL 100<br>(10 Prestígios)</th>
              <th class="border border-vrising-red/20 p-2">NVL 100 com Sinergia<br>(0 Prestígio)</th>
              <th class="border border-vrising-red/20 p-2">NVL 100 com Sinergia<br>(10 Prestígios)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">VidaMaxima</td><td class="border border-vrising-red/20 p-2">SL/DU/PF/LT</td><td class="border border-vrising-red/20 p-2">250</td><td class="border border-vrising-red/20 p-2">500</td><td class="border border-vrising-red/20 p-2">375</td><td class="border border-vrising-red/20 p-2">750</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">VelocidadeDeMovimento</td><td class="border border-vrising-red/20 p-2">DU/VG/ES/LT</td><td class="border border-vrising-red/20 p-2">0,25</td><td class="border border-vrising-red/20 p-2">0,5</td><td class="border border-vrising-red/20 p-2">0,375</td><td class="border border-vrising-red/20 p-2">0,75</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">VelocidadeDeAtaquePrimario</td><td class="border border-vrising-red/20 p-2">DU/CE/LT</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">RouboDeVidaFisico</td><td class="border border-vrising-red/20 p-2">SL</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">RouboDeVidaMagico</td><td class="border border-vrising-red/20 p-2">NC/PF</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">RouboDeVidaPrimario</td><td class="border border-vrising-red/20 p-2">SL/LT</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td><td class="border border-vrising-red/20 p-2">23%</td><td class="border border-vrising-red/20 p-2">45%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">PoderFisico</td><td class="border border-vrising-red/20 p-2">SL/DU/VG/CE</td><td class="border border-vrising-red/20 p-2">4</td><td class="border border-vrising-red/20 p-2">8</td><td class="border border-vrising-red/20 p-2">6</td><td class="border border-vrising-red/20 p-2">12</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">PoderMagico</td><td class="border border-vrising-red/20 p-2">ES/NC/PF</td><td class="border border-vrising-red/20 p-2">6</td><td class="border border-vrising-red/20 p-2">12</td><td class="border border-vrising-red/20 p-2">9</td><td class="border border-vrising-red/20 p-2">18</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ChanceCriticaFisica</td><td class="border border-vrising-red/20 p-2">VG/CE</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">DanoCriticoFisico</td><td class="border border-vrising-red/20 p-2">VG/CE</td><td class="border border-vrising-red/20 p-2">50%</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">75%</td><td class="border border-vrising-red/20 p-2">150%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ChanceCriticaMagica</td><td class="border border-vrising-red/20 p-2">ES/NC/PF</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">DanoCriticoMagico</td><td class="border border-vrising-red/20 p-2">ES/NC</td><td class="border border-vrising-red/20 p-2">50%</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">75%</td><td class="border border-vrising-red/20 p-2">150%</td></tr>
          </tbody>
        </table>
      </div>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Comandos</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Comando</th>
              <th class="border border-vrising-red/20 p-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.ar l</td><td class="border border-vrising-red/20 p-2">Lista de habilidades com ARMAS disponíveis.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.ar ls</td><td class="border border-vrising-red/20 p-2">Exibe todos STATUS DISPONÍVEIS para habilidades com ARMAS.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.ar es</td><td class="border border-vrising-red/20 p-2">Escolhe os status que deseja para por nas armas. Pode escolher até 2.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.ar rs</td><td class="border border-vrising-red/20 p-2">Reseta os status escolhidos. (750 frag. assustador primordial)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.ar d</td><td class="border border-vrising-red/20 p-2">Informação do progresso de habilidades com armas.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.ar e</td><td class="border border-vrising-red/20 p-2">Habilita/desabilita exibição.</td></tr>
          </tbody>
        </table>
        </div>
    `
  },
  legado: {
    title: 'Legado de Sangue',
    content: `
      <p>Profunda personalização dos tipos de sangue, oferecendo habilidades únicas que podem ser adaptadas ao estilo de jogo de cada jogador.</p>
      
      <p>O nível máximo que um legado de sangue pode atingir é 100, você vai aumentando o nível dele conforme consome unidades e Sangue V.</p>
      
      <p>É possível escolher 2 tipos de atributos para cada tipo de sangue, melhorando os atributos e bônus que ela fornece.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">Tipos de Sangue</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Tipo de Sangue</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">Trabalhador</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Guerreiro</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Erudito</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ladino</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Mutante</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Draculin</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Imortal</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Criatura</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Brutamontes</td></tr>
          </tbody>
        </table>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">Tabela de Status</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Status</th>
              <th class="border border-vrising-red/20 p-2">Sinergia de Classe</th>
              <th class="border border-vrising-red/20 p-2">NVL 100<br>(0 Prestígio)</th>
              <th class="border border-vrising-red/20 p-2">NVL 100<br>(10 Prestígios)</th>
              <th class="border border-vrising-red/20 p-2">NVL 100 com Sinergia<br>(0 Prestígio)</th>
              <th class="border border-vrising-red/20 p-2">NVL 100 com Sinergia<br>(10 Prestígios)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">CuraRecebida</td><td class="border border-vrising-red/20 p-2">SL/NC/PF/LT</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td><td class="border border-vrising-red/20 p-2">22,5%</td><td class="border border-vrising-red/20 p-2">45%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ReducaoDeDano</td><td class="border border-vrising-red/20 p-2">SL/VG</td><td class="border border-vrising-red/20 p-2">5%</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">7,5%</td><td class="border border-vrising-red/20 p-2">15%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ResistenciaFisica</td><td class="border border-vrising-red/20 p-2">DU/LT</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ResistenciaMagica</td><td class="border border-vrising-red/20 p-2">DU/CE/ES/LT</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">RendimentoDeRecursos</td><td class="border border-vrising-red/20 p-2">VG/PF</td><td class="border border-vrising-red/20 p-2">25%</td><td class="border border-vrising-red/20 p-2">50%</td><td class="border border-vrising-red/20 p-2">37,5%</td><td class="border border-vrising-red/20 p-2">75%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">ReducaoDeControleDeGrupo</td><td class="border border-vrising-red/20 p-2">SL/DU/CE</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">30%</td><td class="border border-vrising-red/20 p-2">60%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">RecargaDeMagia</td><td class="border border-vrising-red/20 p-2">ES/NC/PF</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">RecargaDeArma</td><td class="border border-vrising-red/20 p-2">DU/VG/CE</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">RecargaDeUltimate</td><td class="border border-vrising-red/20 p-2">ES/NC</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">40%</td><td class="border border-vrising-red/20 p-2">30%</td><td class="border border-vrising-red/20 p-2">60%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">DanoDosLacaios</td><td class="border border-vrising-red/20 p-2">VG/NC/PF</td><td class="border border-vrising-red/20 p-2">25%</td><td class="border border-vrising-red/20 p-2">50%</td><td class="border border-vrising-red/20 p-2">37,5%</td><td class="border border-vrising-red/20 p-2">75%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">AbsorcaoDoEscudo</td><td class="border border-vrising-red/20 p-2">SL/CE</td><td class="border border-vrising-red/20 p-2">50%</td><td class="border border-vrising-red/20 p-2">100%</td><td class="border border-vrising-red/20 p-2">75%</td><td class="border border-vrising-red/20 p-2">150%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">EficienciaDoSangue</td><td class="border border-vrising-red/20 p-2">ES/LT</td><td class="border border-vrising-red/20 p-2">10%</td><td class="border border-vrising-red/20 p-2">20%</td><td class="border border-vrising-red/20 p-2">15%</td><td class="border border-vrising-red/20 p-2">30%</td></tr>
          </tbody>
        </table>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">Comandos</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Comando</th>
              <th class="border border-vrising-red/20 p-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.sg l</td><td class="border border-vrising-red/20 p-2">Exibe os legados de sangue disponíveis.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.sg ls</td><td class="border border-vrising-red/20 p-2">Exibe os status disponíveis para o legado.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.sg es</td><td class="border border-vrising-red/20 p-2">Escolhe os status que deseja para melhorar o sangue (mesmo sistema que as armas).</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.sg rs</td><td class="border border-vrising-red/20 p-2">Reseta os status escolhidos para o sangue atual. (750 frag. assustador primordial)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.sg d</td><td class="border border-vrising-red/20 p-2">Exibe as informações do seu progresso.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.sg e</td><td class="border border-vrising-red/20 p-2">Habilita/desabilita exibição.</td></tr>
          </tbody>
        </table>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">Classes Disponíveis</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Classe</th>
              <th class="border border-vrising-red/20 p-2">Abreviação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">Selvagem</td><td class="border border-vrising-red/20 p-2">SL</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Duelista</td><td class="border border-vrising-red/20 p-2">DU</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Vagante</td><td class="border border-vrising-red/20 p-2">VG</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Ceifador</td><td class="border border-vrising-red/20 p-2">CE</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Espectro</td><td class="border border-vrising-red/20 p-2">ES</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Necromante</td><td class="border border-vrising-red/20 p-2">NC</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Profeta</td><td class="border border-vrising-red/20 p-2">PF</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">Licantropo</td><td class="border border-vrising-red/20 p-2">LT</td></tr>
          </tbody>
        </table>
        </div>
    `
  },
  prestigio: {
    title: 'Prestígio',
    content: `
      <p>Ao alcançar o nível máximo em habilidades com armas, legados de sangue ou familiares, o jogador pode reiniciar o progresso e desbloquear benefícios exclusivos que aceleram a progressão. Ao usar o prestígio em níveis, o jogador retorna ao nível 0, ganhando experiência extra em outras áreas, mas com uma redução na experiência de nível de personagem. Ao atingir o máximo de prestígio em nível, é possível usar o prestígio de Exo para liberar a transformação na forma de Drácula por um período limitado.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">TIPOS DE PRESTÍGIOS</h3>
      <div class="mb-6">
        <strong>NÍVEL DE PERSONAGEM:</strong> O máximo de prestígio de nível é 20, cada vez que prestigiar o nível de personagem é reduzido a experiência recebida em -3,50% cumulativo com outras reduções e aumenta a experiência recebida em legado de sangue e habilidades com armas em 10%.
        </div>
      <div class="mb-6">
        <strong>HABILIDADES COM ARMAS:</strong> O máximo de prestígio de habilidades com armas é 10, cada vez que prestigiar a habilidade com arma é reduzido a experiência recebida em -10% cumulativo com outras reduções e aumenta os bônus de status em 10% cumulativo com outros aumentos de status.
      </div>
      <div class="mb-6">
        <strong>LEGADO DE SANGUE:</strong> O máximo de prestígio de legado de sangue é 10, cada vez que prestigiar o legado de sangue é reduzido a experiência recebida em -10% cumulativo com outras reduções e aumenta os bônus de status em 10% cumulativo com outros aumentos de status.
      </div>
      <div class="mb-6">
        <strong>EXO:</strong> O prestígio de exo é a habilidade do personagem de assumir a forma do Drácula e utilizar suas habilidades e poderes. Só é disponível após prestigiar o nível de personagem no máximo e após derrotar o Drácula. O máximo de prestígio de exo é 300, cada vez que prestigiar o exo, você recebe 1250x Fragmento Assustador Primordial, a duração da transformação do Drácula aumenta em 2 - 3 segundos, os poderes da forma aumentam e libera novas habilidades ao atingir certos níveis. Ao alcançar o nível máximo de Exo, você pode se transformar permanentemente.
      </div>
      <div class="mb-6">
        <strong>FAMILIAR:</strong> O máximo de prestígio de familiar é 20, cada vez que prestigiar o familiar aumenta os bônus de status em 10% cumulativo com outros aumentos de status.
      </div>
      
      <h3 class="text-vrising-gold mt-6 mb-3">ATRIBUTOS DE FAMILIAR PARA PRESTÍGIO</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>ChanceCriticaFisica</li>
        <li>ChanceCriticaMagica</li>
        <li>CuraRecebida</li>
        <li>ResistenciaFisica</li>
        <li>ResistenciaMagica</li>
        <li>ReducaoDeControleDeGrupo</li>
        <li>AbsorcaoDeEscudo</li>
      </ul>

      <h3 class="text-vrising-gold mt-6 mb-3">COMANDOS</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Comando</th>
              <th class="border border-vrising-red/20 p-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.pr l</td><td class="border border-vrising-red/20 p-2">Exibe todos os prestígios disponíveis.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam le</td><td class="border border-vrising-red/20 p-2">Exibe as as opções de prestígios de familiar disponíveis.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.pr a [Prestígio]</td><td class="border border-vrising-red/20 p-2">Ativa o prestígio escolhido, melhorando os status, podendo ganhar novas habilidades e reiniciando o progresso de nível.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.fam pr [Status]</td><td class="border border-vrising-red/20 p-2">Ativa o prestígio do familiar ativo, melhorando o status selecionado e reiniciando o progresso de nível. Após prestigiar todos os status disponíveis, o comando se torna .fam pr sem necessidade de selecionar os status.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.pr d [Prestígio]</td><td class="border border-vrising-red/20 p-2">Exibe o progresso no prestígio escolhido.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.pr lb</td><td class="border border-vrising-red/20 p-2">Exibe todos os buffs recebidos de prestígios de níveis disponíveis.</td></tr>
            <tr><td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.pr rk [Prestígio]</td><td class="border border-vrising-red/20 p-2">Exibe o ranking dos 10 primeiros jogadores com melhor progressão no prestígio escolhido.</td></tr>
          </tbody>
        </table>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">ASSUMIR A FORMA DO DRÁCULA</h3>
      <p><code>.exoform</code> — Habilita/desabilita a possibilidade de se transformar no Drácula. (necessário ter pelo menos 1 nível de Prestígio de Exo e ter derrotado o Drácula)</p>

      <h3 class="text-vrising-gold mt-6 mb-3">BUFFS POR PRESTÍGIAR NÍVEL DE PERSONAGEM</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Nível</th>
              <th class="border border-vrising-red/20 p-2">Buff</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-vrising-red/20 p-2">1</td><td class="border border-vrising-red/20 p-2">Aumenta a produção dos recursos em 10% - 30% (Trabalhador)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">2</td><td class="border border-vrising-red/20 p-2">Reduz o dano em 8% - 16% (Criatura)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">3</td><td class="border border-vrising-red/20 p-2">Aumenta a velocidade de recarga dos feitiços em 10% - 20% (Estudioso)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">4</td><td class="border border-vrising-red/20 p-2">Aumenta a regeneração de vida passiva em 200%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">5</td><td class="border border-vrising-red/20 p-2">Aumenta a velocidade de galope da montaria em 10% - 20% (Trabalhador)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">6</td><td class="border border-vrising-red/20 p-2">Aumenta a resistência ao sol em 10 - 25 (Criatura)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">7</td><td class="border border-vrising-red/20 p-2">Aumenta a velocidade de movimento em 10% - 20% enquanto estiver se transformando (Mutante)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">8</td><td class="border border-vrising-red/20 p-2">Efeito de Aceleração permanente</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">9</td><td class="border border-vrising-red/20 p-2">Aumenta a velocidade de recarga da habilidade da arma em 10% - 20% (Guerreiro)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">10</td><td class="border border-vrising-red/20 p-2">Aumenta a velocidade de movimento em 15% e a velocidade de ataque primário em 30% (Sangue do Imortal)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">11</td><td class="border border-vrising-red/20 p-2">Aumenta a cura recebida de Cura Sanguínea em 40% - 80% (Draculin)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">12</td><td class="border border-vrising-red/20 p-2">Reduz o controle de grupo em 20%</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">13</td><td class="border border-vrising-red/20 p-2">Aumenta o poder físico em 10% - 15% (Guerreiro)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">14</td><td class="border border-vrising-red/20 p-2">Aumenta o poder mágico em 10% - 20% (Estudioso)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">15</td><td class="border border-vrising-red/20 p-2">Tem 50% de chance de expor a armadura da vítima no acerto crítico, aumenta o dano recebido de todas as fontes em 15% por 4s (Ladino)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">16</td><td class="border border-vrising-red/20 p-2">Efeito do Véu da Floresta permanente</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">17</td><td class="border border-vrising-red/20 p-2">8% - 15% de velocidade de movimento (Ladino)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">18</td><td class="border border-vrising-red/20 p-2">Concede 1 carga adicional de Mordida e cura 5% da sua vida máxima ao matar um inimigo com Mordida (Draculin)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">19</td><td class="border border-vrising-red/20 p-2">Recebe 15% - 30% a mais de cura. Cura a si mesmo em 4% da vida da vítima ao realizar um golpe fatal (Brutamontes)</td></tr>
            <tr><td class="border border-vrising-red/20 p-2">20</td><td class="border border-vrising-red/20 p-2">Aumenta a velocidade de recarga do Véu em 100% (Sangue do Imortal)</td></tr>
          </tbody>
        </table>
        </div>
    `
  },
  economia: {
    title: 'Economia',
    content: `
      <p>Foi introduzido um sistema de economia no servidor, utilizando a moeda Fragmento Assustador Primordial. Essa moeda pode ser usada para comprar itens exclusivos de mercadores personalizados centralizados no Mercado Negro do servidor.</p>

      <p>Essa moeda pode ser obtida de diversas formas, entre elas: entrar no servidor diáriamente, acumular tributos ao ficar online, completar missões diárias e semanais, eliminar membros de uma emboscada, eliminar um chefão global e trocar itens nos mercadores.</p>

      <p>Para acessar o Mercado Negro é necessário alcançar o nível de personagem 65, pode ser acessado indo diretamente pela Mina de Prata utilizando a forma de rato, ou gastando 250x Essência de Sangue com o comando <code>.tp p Mercado</code>.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">FRAGMENTOS DE ALMA</h3>
      <p>Ao comprar um Fragmento de Alma ele pode ficar no máximo 1 hora no inventário do personagem, depois desse tempo ele desaparece permanentemente, então leve para sua base e o construa o quanto antes. É possível receber os buffs do fragmento após construí-lo em seu castelo e consumir seu poder.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-8">
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_colosso.png" alt="Fragmento de Alma do Colosso" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento de Alma do Colosso</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_colosso2.png" alt="Fragmento de Alma do Colosso (variação)" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento de Alma do Colosso (variação)</span>
      </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_horror_alado.png" alt="Fragmento de Alma do Horror Alado" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento de Alma do Horror Alado</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_horror_alado2.png" alt="Fragmento de Alma do Horror Alado (variação)" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento de Alma do Horror Alado (variação)</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_solarus.png" alt="Fragmento de Alma de Solarus" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento de Alma de Solarus</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_solarus2.png" alt="Fragmento de Alma de Solarus (variação)" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento de Alma de Solarus (variação)</span>
        </div>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">MOEDAS</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_assustador_primordial.png" alt="Fragmento Assustador Primordial" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento Assustador Primordial</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/fibra_radiante.png" alt="Fibra Radiante" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fibra Radiante</span>
      </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comp_alfaiataria_excepcional.png" alt="Componente de Alfaiataria Excepcional" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Componente de Alfaiataria Excepcional</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/pedra_preciosa.png" alt="Pedra Preciosa" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Pedra Preciosa</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/ressonador.png" alt="Ressonador" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Ressonador</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/frag_demonio.png" alt="Fragmento de Demônio" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Fragmento de Demônio</span>
        </div>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">MOEDEIROS</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/moedeiro1.png" alt="Moedeiro 1" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Moedeiro 1</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/moedeiro2.png" alt="Moedeiro 2" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Moedeiro 2</span>
      </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/moedeiro3.png" alt="Moedeiro 3" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Moedeiro 3</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/moedeiro4.png" alt="Moedeiro 4" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Moedeiro 4</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/moedeiro5.png" alt="Moedeiro 5" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Moedeiro 5</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/moedeiro6.png" alt="Moedeiro 6" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Moedeiro 6</span>
        </div>
        </div>
        
      <h3 class="text-vrising-gold mt-6 mb-3">COMPRADORES</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador1.png" alt="Comprador 1" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 1</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador2.png" alt="Comprador 2" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 2</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador3.png" alt="Comprador 3" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 3</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador4.png" alt="Comprador 4" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 4</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador5.png" alt="Comprador 5" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 5</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador6.png" alt="Comprador 6" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 6</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador7.png" alt="Comprador 7" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 7</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/comprador8.png" alt="Comprador 8" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Comprador 8</span>
        </div>
      </div>
      
      <h3 class="text-vrising-gold mt-6 mb-3">VENDEDORES</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/vendedor1.png" alt="Vendedor 1" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Vendedor 1</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/vendedor2.png" alt="Vendedor 2" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Vendedor 2</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/vendedor3.png" alt="Vendedor 3" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Vendedor 3</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/vendedor4.png" alt="Vendedor 4" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Vendedor 4</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/vendedor5.png" alt="Vendedor 5" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Vendedor 5</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/vendedor6.png" alt="Vendedor 6" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Vendedor 6</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/vendedor7.png" alt="Vendedor 7" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Vendedor 7</span>
        </div>
      </div>
    `
  },
  tributos: {
    title: 'Tributos',
    content: `
      <p>Recompensa jogadores com bônus por tempo logado e recebe 250x Fragmento Assustador Primordial por entrar diariamente.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">COMANDOS</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">Comando</th>
              <th class="border border-vrising-red/20 p-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.tributos r</td>
              <td class="border border-vrising-red/20 p-2">Troca seus pontos de tributos acumulados por Fragmento Assustador Primordial.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.tributos d</td>
              <td class="border border-vrising-red/20 p-2">Exibe a quantidade de pontos de tributos acumulados.</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2 font-mono text-vrising-gold">.tributos e</td>
              <td class="border border-vrising-red/20 p-2">Exibe o tempo que falta para receber a próxima recompensa por entrar diariamente.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  chefoes: {
    title: 'Chefões',
    content: `
      <h3 class="text-vrising-gold mt-6 mb-3">CHEFÕES GLOBAIS</h3>
      <p>Adiciona chefões globais únicos que surgem uma vez por dia, desafiando grupos de jogadores a unir forças para derrotá-los. Esses poderosos inimigos oferecem armas lendárias, recursos e moedas do servidor como recompensa.</p>

      <div class="overflow-x-auto mt-6">
        <table class="w-full border-collapse text-xs">
          <thead>
            <tr class="bg-vrising-darkcharcoal">
              <th class="border border-vrising-red/20 p-2">NOME</th>
              <th class="border border-vrising-red/20 p-2">HORÁRIO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-vrising-red/20 p-2">Gregor "Olhos-Mortos", o Guardião dos Nosferatu</td>
              <td class="border border-vrising-red/20 p-2">02:00 (BRT)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2">Helena Karras, a Fúria dos Brujah</td>
              <td class="border border-vrising-red/20 p-2">08:00 (BRT)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2">Cécile Beaumont, a Musa dos Toreador</td>
              <td class="border border-vrising-red/20 p-2">14:00 (BRT)</td>
            </tr>
            <tr>
              <td class="border border-vrising-red/20 p-2">Isolde Rainier, o Oráculo dos Malkavianos</td>
              <td class="border border-vrising-red/20 p-2">20:00 (BRT)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-vrising-gold mt-8 mb-3">EXEMPLOS VISUAIS</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/Exemplo_chefao.png" alt="Exemplo Chefão 1" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Exemplo de chefão global</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/Exemplo_chefao2.png" alt="Exemplo Chefão 2" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Outro exemplo de chefão global</span>
        </div>
        <div class="flex flex-col items-center">
          <img src="/lovable-uploads/Recompensa_chefao.png" alt="Exemplo Recompensa Chefão" class="rounded shadow-lg border border-vrising-red/20 max-w-full h-auto" />
          <span class="mt-2 text-sm text-vrising-muted">Exemplo de tela de recompensas</span>
        </div>
      </div>
    `
  },
  passe: {
    title: 'Passe de Batalha',
    content: `
      <p>Ao eliminar inimigos Sangue V você acumula pontos e libera recompensas por níveis.</p>

      <div class="bg-vrising-darkcharcoal/50 p-4 rounded-lg border border-vrising-red/20 mb-6">
        <p class="text-vrising-gold mb-2">Observações Importantes:</p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Os prêmios indicados como FAMILIAR, ARMA ou JOIA devem ser solicitados a administração do servidor para serem entregues.</li>
          <li>Quando um prêmio de um nível oferece duas opções de escolha, como no nível 80, o passe padrão permite que o jogador escolha entre uma arma lendária, uma arma perfeita ou uma joia perfeita.</li>
          <li>No passe premium, além de poder escolher uma das opções, o jogador também recebe automaticamente a outra. Ou seja, quem tem o passe premium vai escolher um item (seja a arma lendária, a arma perfeita ou a joia perfeita), mas também receberá o outro item que não escolheu, ficando com os dois.</li>
          <li>No caso do passe premium, o jogador nunca vai receber dois itens do mesmo tipo (duas armas ou duas joias), mas sim uma arma e uma joia, ou uma arma lendária e uma arma perfeita.</li>
          <li>Os prêmios indicados como CUPOM são cumulativos entre si e com os outros cupons obtidos, porém só podem ser aplicados durante a temporada em que foram obtidos.</li>
      </ul>
      </div>

      <h3 class="text-vrising-gold mt-6 mb-3">COMANDOS</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal/50">
              <th class="p-2 text-left border border-vrising-red/20">Comando</th>
              <th class="p-2 text-left border border-vrising-red/20">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border border-vrising-red/20"><code>.pdb pt</code></td>
              <td class="p-2 border border-vrising-red/20">Exibe o seu progresso no Passe de Batalha atual.</td>
            </tr>
            <tr>
              <td class="p-2 border border-vrising-red/20"><code>.pdb rk</code></td>
              <td class="p-2 border border-vrising-red/20">Exibe o ranking atual dos jogadores no Passe de Batalha atual.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-vrising-gold mt-6 mb-3">INFORMAÇÕES</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal/50">
              <th class="p-2 text-center border border-vrising-red/20">NÍVEL</th>
              <th class="p-2 text-center border border-vrising-red/20">PASSE DE BATALHA PADRÃO</th>
              <th class="p-2 text-center border border-vrising-red/20">NÍVEL</th>
              <th class="p-2 text-center border border-vrising-red/20">PASSE DE BATALHA AVANÇADO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">1</td>
              <td class="p-2 border border-vrising-red/20">80x Couro</td>
              <td class="p-2 text-center border border-vrising-red/20">1</td>
              <td class="p-2 border border-vrising-red/20">1x Adagas de Ferro</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">2</td>
              <td class="p-2 border border-vrising-red/20">60x Lingote de Cobre</td>
              <td class="p-2 text-center border border-vrising-red/20">2</td>
              <td class="p-2 border border-vrising-red/20">20x Peixe Corrompido</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">3</td>
              <td class="p-2 border border-vrising-red/20">40x Pedra de Amolar</td>
              <td class="p-2 text-center border border-vrising-red/20">3</td>
              <td class="p-2 border border-vrising-red/20">80x Pó de Túmulo</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">4</td>
              <td class="p-2 border border-vrising-red/20">10x Semente de Lírio do Pranto</td>
              <td class="p-2 text-center border border-vrising-red/20">4</td>
              <td class="p-2 border border-vrising-red/20">60x Fibra Radiante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">5</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">5</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">6</td>
              <td class="p-2 border border-vrising-red/20">30x Bebida de Rosa Sangrenta</td>
              <td class="p-2 text-center border border-vrising-red/20">6</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">7</td>
              <td class="p-2 border border-vrising-red/20">1000x Tijolo de Pedra</td>
              <td class="p-2 text-center border border-vrising-red/20">7</td>
              <td class="p-2 border border-vrising-red/20">1500x Tábua</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">8</td>
              <td class="p-2 border border-vrising-red/20">1000x Tábua</td>
              <td class="p-2 text-center border border-vrising-red/20">8</td>
              <td class="p-2 border border-vrising-red/20">1500x Tijolo de Pedra</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">9</td>
              <td class="p-2 border border-vrising-red/20">1x Garras de Ferro Impiedosas</td>
              <td class="p-2 text-center border border-vrising-red/20">9</td>
              <td class="p-2 border border-vrising-red/20">1x Lâminas Gêmeas Impiedosas</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">10</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">10</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">11</td>
              <td class="p-2 border border-vrising-red/20">500x Papel</td>
              <td class="p-2 text-center border border-vrising-red/20">11</td>
              <td class="p-2 border border-vrising-red/20">250x Linha Grossa</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">12</td>
              <td class="p-2 border border-vrising-red/20">100x Pano</td>
              <td class="p-2 text-center border border-vrising-red/20">12</td>
              <td class="p-2 border border-vrising-red/20">300x Bicho-da-Seda</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">13</td>
              <td class="p-2 border border-vrising-red/20">80x Pó de Túmulo</td>
              <td class="p-2 text-center border border-vrising-red/20">13</td>
              <td class="p-2 border border-vrising-red/20">60x Pedra de Amolar</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">14</td>
              <td class="p-2 border border-vrising-red/20">10x Semente de Rosa de Sangrenta</td>
              <td class="p-2 text-center border border-vrising-red/20">14</td>
              <td class="p-2 border border-vrising-red/20">60x Fibra Radiante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">15</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">15</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">16</td>
              <td class="p-2 border border-vrising-red/20">200x Linha Grossa</td>
              <td class="p-2 text-center border border-vrising-red/20">16</td>
              <td class="p-2 border border-vrising-red/20">200x Pano</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">17</td>
              <td class="p-2 border border-vrising-red/20">300x Pó de Pedras Preciosas</td>
              <td class="p-2 text-center border border-vrising-red/20">17</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">18</td>
              <td class="p-2 border border-vrising-red/20">5x Elixir do Gatuno</td>
              <td class="p-2 text-center border border-vrising-red/20">18</td>
              <td class="p-2 border border-vrising-red/20">5x Elixir da Fera</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">19</td>
              <td class="p-2 border border-vrising-red/20">5x Elixir da Gralha</td>
              <td class="p-2 text-center border border-vrising-red/20">19</td>
              <td class="p-2 border border-vrising-red/20">5x Elixir do Corvo</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">20</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">20</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial + Cupom de 5%</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">21</td>
              <td class="p-2 border border-vrising-red/20">80x Fio de Algodão</td>
              <td class="p-2 text-center border border-vrising-red/20">21</td>
              <td class="p-2 border border-vrising-red/20">1x Lâminas Gêmeas Impiedosas Rara</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">22</td>
              <td class="p-2 border border-vrising-red/20">60x Lingote de Ferro</td>
              <td class="p-2 text-center border border-vrising-red/20">22</td>
              <td class="p-2 border border-vrising-red/20">80x Recipiente com Lodo</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">23</td>
              <td class="p-2 border border-vrising-red/20">40x Tábua Reforçada</td>
              <td class="p-2 text-center border border-vrising-red/20">23</td>
              <td class="p-2 border border-vrising-red/20">20x Essência de Sangue Maior</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">24</td>
              <td class="p-2 border border-vrising-red/20">10x Semente de Algodão</td>
              <td class="p-2 text-center border border-vrising-red/20">24</td>
              <td class="p-2 border border-vrising-red/20">60x Fibra Radiante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">25</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">25</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">26</td>
              <td class="p-2 border border-vrising-red/20">30x Poção de Rosa Sangrenta</td>
              <td class="p-2 text-center border border-vrising-red/20">26</td>
              <td class="p-2 border border-vrising-red/20">750x Carvalho Corrompido</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">27</td>
              <td class="p-2 border border-vrising-red/20">80x Linha de Lã</td>
              <td class="p-2 text-center border border-vrising-red/20">27</td>
              <td class="p-2 border border-vrising-red/20">750x Esmeril</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">28</td>
              <td class="p-2 border border-vrising-red/20">15x Essência de Sangue Maior</td>
              <td class="p-2 text-center border border-vrising-red/20">28</td>
              <td class="p-2 border border-vrising-red/20">20x Essência de Sangue Maior</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">29</td>
              <td class="p-2 border border-vrising-red/20">5x Revestimento Sanguíneo</td>
              <td class="p-2 text-center border border-vrising-red/20">29</td>
              <td class="p-2 border border-vrising-red/20">10x Revestimento Glacial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">30</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">30</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">31</td>
              <td class="p-2 border border-vrising-red/20">750x Pergaminho</td>
              <td class="p-2 text-center border border-vrising-red/20">31</td>
              <td class="p-2 border border-vrising-red/20">2500x Sucata Tecnológica</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">32</td>
              <td class="p-2 border border-vrising-red/20">40x Pedra do Flagelo</td>
              <td class="p-2 text-center border border-vrising-red/20">32</td>
              <td class="p-2 border border-vrising-red/20">2500x Cristal Fantasma</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">33</td>
              <td class="p-2 border border-vrising-red/20">150x Vidro</td>
              <td class="p-2 text-center border border-vrising-red/20">33</td>
              <td class="p-2 border border-vrising-red/20">4000x Quartz</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">34</td>
              <td class="p-2 border border-vrising-red/20">10x Semente de Algodão</td>
              <td class="p-2 text-center border border-vrising-red/20">34</td>
              <td class="p-2 border border-vrising-red/20">25x Semente de Coração Sangrento</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">35</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">35</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">36</td>
              <td class="p-2 border border-vrising-red/20">80x Couro Grosso</td>
              <td class="p-2 text-center border border-vrising-red/20">36</td>
              <td class="p-2 border border-vrising-red/20">500x Seiva Tóxica</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">37</td>
              <td class="p-2 border border-vrising-red/20">10x Essência de Sangue Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">37</td>
              <td class="p-2 border border-vrising-red/20">15x Essência de Sangue Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">38</td>
              <td class="p-2 border border-vrising-red/20">10x Poção de Boiadeiro</td>
              <td class="p-2 text-center border border-vrising-red/20">38</td>
              <td class="p-2 border border-vrising-red/20">60x Brasa-Vítrea</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">39</td>
              <td class="p-2 border border-vrising-red/20">5x Bebida Vampiresca</td>
              <td class="p-2 text-center border border-vrising-red/20">39</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">40</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial + Cupom de 5%</td>
              <td class="p-2 text-center border border-vrising-red/20">40</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">41</td>
              <td class="p-2 border border-vrising-red/20">80x Recipiente de Lodo</td>
              <td class="p-2 text-center border border-vrising-red/20">41</td>
              <td class="p-2 border border-vrising-red/20">1x Garras Sanguíneas</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">42</td>
              <td class="p-2 border border-vrising-red/20">50x Liga de Rádio</td>
              <td class="p-2 text-center border border-vrising-red/20">42</td>
              <td class="p-2 border border-vrising-red/20">40x Bateria Carregada</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">43</td>
              <td class="p-2 border border-vrising-red/20">250x Enxofre</td>
              <td class="p-2 text-center border border-vrising-red/20">43</td>
              <td class="p-2 border border-vrising-red/20">350x Joias de Ouro</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">44</td>
              <td class="p-2 border border-vrising-red/20">10x Esporos de Trombeta do Inferno</td>
              <td class="p-2 text-center border border-vrising-red/20">44</td>
              <td class="p-2 border border-vrising-red/20">60x Fibra Radiante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">45</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">45</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">46</td>
              <td class="p-2 border border-vrising-red/20">10x Bebida de Resistência Ligeira ao Fogo</td>
              <td class="p-2 text-center border border-vrising-red/20">46</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador Maior</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">47</td>
              <td class="p-2 border border-vrising-red/20">2000x Sucata Tecnológica</td>
              <td class="p-2 text-center border border-vrising-red/20">47</td>
              <td class="p-2 border border-vrising-red/20">2500x Gordura Mutante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">48</td>
              <td class="p-2 border border-vrising-red/20">2000x Gordura Mutante</td>
              <td class="p-2 text-center border border-vrising-red/20">48</td>
              <td class="p-2 border border-vrising-red/20">2500x Sucata Tecnológica</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">49</td>
              <td class="p-2 border border-vrising-red/20">1x Véu da Floresta</td>
              <td class="p-2 text-center border border-vrising-red/20">49</td>
              <td class="p-2 border border-vrising-red/20">10x Revestimento Profano</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">50</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">50</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">51</td>
              <td class="p-2 border border-vrising-red/20">45x Mingau Irradiantes</td>
              <td class="p-2 text-center border border-vrising-red/20">51</td>
              <td class="p-2 border border-vrising-red/20">200x Vidro</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">52</td>
              <td class="p-2 border border-vrising-red/20">80x Seda</td>
              <td class="p-2 text-center border border-vrising-red/20">52</td>
              <td class="p-2 border border-vrising-red/20">80x Lã Fantasma</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">53</td>
              <td class="p-2 border border-vrising-red/20">80x Couro Impecável</td>
              <td class="p-2 text-center border border-vrising-red/20">53</td>
              <td class="p-2 border border-vrising-red/20">2000x Pele de Morcego</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">54</td>
              <td class="p-2 border border-vrising-red/20">10x Semente de Flor-da-Neve</td>
              <td class="p-2 text-center border border-vrising-red/20">54</td>
              <td class="p-2 border border-vrising-red/20">60x Fibra Radiante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">55</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">55</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">56</td>
              <td class="p-2 border border-vrising-red/20">150x Poeira Espectral</td>
              <td class="p-2 text-center border border-vrising-red/20">56</td>
              <td class="p-2 border border-vrising-red/20">60x Lingote de Prata Escura</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">57</td>
              <td class="p-2 border border-vrising-red/20">150x Ossos de Peixe</td>
              <td class="p-2 text-center border border-vrising-red/20">57</td>
              <td class="p-2 border border-vrising-red/20">30x Habitante do Pântano</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">58</td>
              <td class="p-2 border border-vrising-red/20">10x Poção de Resistência ao Alho</td>
              <td class="p-2 text-center border border-vrising-red/20">58</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador Maior</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">59</td>
              <td class="p-2 border border-vrising-red/20">10x Poção de Resistência à Prata</td>
              <td class="p-2 text-center border border-vrising-red/20">59</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador Maior</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">60</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">60</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial + Cupom de 5%</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">61</td>
              <td class="p-2 border border-vrising-red/20">80x Lã Fantasma</td>
              <td class="p-2 text-center border border-vrising-red/20">61</td>
              <td class="p-2 border border-vrising-red/20">1x Garras Sanguíneas Épica</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">62</td>
              <td class="p-2 border border-vrising-red/20">40x Lingote de Prata Escura</td>
              <td class="p-2 text-center border border-vrising-red/20">62</td>
              <td class="p-2 border border-vrising-red/20">60x Tábua Reforçada</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">63</td>
              <td class="p-2 border border-vrising-red/20">2000x Cristal Fantasma</td>
              <td class="p-2 text-center border border-vrising-red/20">63</td>
              <td class="p-2 border border-vrising-red/20">60x Pedra do Flagelo</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">64</td>
              <td class="p-2 border border-vrising-red/20">10x Esporos de Cogumelo Fantasma</td>
              <td class="p-2 text-center border border-vrising-red/20">64</td>
              <td class="p-2 border border-vrising-red/20">60x Fibra Radiante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">65</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">65</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">66</td>
              <td class="p-2 border border-vrising-red/20">5x Frasco de Resistência Sagrada</td>
              <td class="p-2 text-center border border-vrising-red/20">66</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador Maior</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">67</td>
              <td class="p-2 border border-vrising-red/20">2000x Pele de Morcego</td>
              <td class="p-2 text-center border border-vrising-red/20">67</td>
              <td class="p-2 border border-vrising-red/20">80x Couro Impecável</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">68</td>
              <td class="p-2 border border-vrising-red/20">1000x Esquema</td>
              <td class="p-2 text-center border border-vrising-red/20">68</td>
              <td class="p-2 border border-vrising-red/20">2000x Fragmento Assustador Maior</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">69</td>
              <td class="p-2 border border-vrising-red/20">5x Elixir da Distorção</td>
              <td class="p-2 text-center border border-vrising-red/20">69</td>
              <td class="p-2 border border-vrising-red/20">5x Elixir da Blasfêmia</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">70</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">70</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">71</td>
              <td class="p-2 border border-vrising-red/20">60x Lingote de Ouro</td>
              <td class="p-2 text-center border border-vrising-red/20">71</td>
              <td class="p-2 border border-vrising-red/20">30x Brumatita Impecável</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">72</td>
              <td class="p-2 border border-vrising-red/20">35x Núcleo de Energia</td>
              <td class="p-2 text-center border border-vrising-red/20">72</td>
              <td class="p-2 border border-vrising-red/20">30x Esmeralda Impecável</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">73</td>
              <td class="p-2 border border-vrising-red/20">60x Couro de Morcego</td>
              <td class="p-2 text-center border border-vrising-red/20">73</td>
              <td class="p-2 border border-vrising-red/20">30x Rubi Impecável</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">74</td>
              <td class="p-2 border border-vrising-red/20">10x Semente de Espinheiro da Peste</td>
              <td class="p-2 text-center border border-vrising-red/20">74</td>
              <td class="p-2 border border-vrising-red/20">60x Fibra Radiante</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">75</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
              <td class="p-2 text-center border border-vrising-red/20">75</td>
              <td class="p-2 border border-vrising-red/20">1250x Fragmento Assustador Primordial</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">76</td>
              <td class="p-2 border border-vrising-red/20">60x Tecido das Sombras</td>
              <td class="p-2 text-center border border-vrising-red/20">76</td>
              <td class="p-2 border border-vrising-red/20">30x Safia Impecável</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">77</td>
              <td class="p-2 border border-vrising-red/20">25x Ônix</td>
              <td class="p-2 text-center border border-vrising-red/20">77</td>
              <td class="p-2 border border-vrising-red/20">30x Topázio Impecável</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">78</td>
              <td class="p-2 border border-vrising-red/20">15x Adagas Sanguíneas Épica</td>
              <td class="p-2 text-center border border-vrising-red/20">78</td>
              <td class="p-2 border border-vrising-red/20">30x Ametista Impecável</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">79</td>
              <td class="p-2 border border-vrising-red/20">40x Brasa-Vítrea</td>
              <td class="p-2 text-center border border-vrising-red/20">79</td>
              <td class="p-2 border border-vrising-red/20">100x Fragmento de Demônio</td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">80</td>
              <td class="p-2 border border-vrising-red/20">8000x Fragmento Assustador Primordial + Arma Lendária ou Joia Perfeita + Familiar Ato I + Cupom de 5%</td>
              <td class="p-2 text-center border border-vrising-red/20">80</td>
              <td class="p-2 border border-vrising-red/20">8000x Fragmento Assustador Primordial + Arma Lendária ou Joia Perfeita + Familiar Ato III</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  rankings: {
    title: 'Rankings',
    content: `
      <p>O servidor possui um sistema de rankings abrangente que contempla todos os status de personagem, níveis e prestígios.</p>
      <p>É possível visualizar o ranking completo de todos os jogadores, exibido em páginas de 10 jogadores cada, com a opção de navegar entre as páginas e sair do ranking a qualquer momento.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">COMANDOS</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal/50">
              <th class="p-2 text-left border border-vrising-red/20">Comando</th>
              <th class="p-2 text-left border border-vrising-red/20">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border border-vrising-red/20 font-mono text-vrising-gold">.rk l</td>
              <td class="p-2 border border-vrising-red/20">Exibe todos os rankings disponíveis.</td>
            </tr>
            <tr>
              <td class="p-2 border border-vrising-red/20 font-mono text-vrising-gold">.rk [Nome] [#]</td>
              <td class="p-2 border border-vrising-red/20">Exibe o ranking dos jogadores no tipo escolhido separados por página.</td>
            </tr>
            <tr>
              <td class="p-2 border border-vrising-red/20 font-mono text-vrising-gold">.rk s</td>
              <td class="p-2 border border-vrising-red/20">Sair de todos os rankings do servidor.</td>
            </tr>
            <tr>
              <td class="p-2 border border-vrising-red/20 font-mono text-vrising-gold">.rk v</td>
              <td class="p-2 border border-vrising-red/20">Voltar para todos os rankings do servidor. <span class='text-xs'>(100x Fragmento de Demônio)</span></td>
            </tr>
          </tbody>
        </table>
        </div>
    `
  },
  apoie: {
    title: 'Apoie o Reino',
    content: `
      <p>O Reino Sagrado de Celem é mantido com muito carinho e dedicação. Seu apoio é fundamental para continuarmos oferecendo a melhor experiência possível!</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Por que apoiar?</h3>
      <p>Seu apoio permite que continuemos:</p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li>Mantendo nossos servidores de alta performance</li>
        <li>Desenvolvendo novos conteúdos exclusivos</li>
        <li>Realizando eventos especiais com prêmios</li>
        <li>Expandindo nossa equipe de moderação e suporte</li>
        <li>Criando atualizações regulares com novidades</li>
      </ul>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Formas de Apoiar</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="p-6 border border-vrising-gold/30 rounded-md bg-vrising-darkcharcoal/40 flex flex-col">
          <h4 class="text-vrising-gold font-cinzel text-xl mb-4">Pacote Sangue Nobre</h4>
          <p class="mb-4">Contribuição mensal que oferece vantagens cosméticas e de qualidade de vida.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 flex-grow">
            <li>Auras cosméticas exclusivas</li>
            <li>Acesso a área VIP no Discord</li>
            <li>Título especial no servidor</li>
            <li>10% de bônus de experiência</li>
            <li>Cores personalizadas no chat</li>
          </ul>
          <a 
            href="https://discord.gg/reinosagrado" 
            target="_blank" 
            rel="noopener noreferrer"
            class="py-3 px-6 bg-vrising-red hover:bg-vrising-red/90 text-white text-center rounded-md transition-colors no-underline self-start"
          >
            Adquirir por R$19,90/mês
          </a>
        </div>
        
        <div class="p-6 border border-vrising-gold/30 rounded-md bg-vrising-darkcharcoal/40 flex flex-col">
          <h4 class="text-vrising-gold font-cinzel text-xl mb-4">Pacote Sangue Ancestral</h4>
          <p class="mb-4">Nossa maior contribuição, com todos os benefícios possíveis para verdadeiros patronos.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 flex-grow">
            <li>Todos os benefícios do Sangue Nobre</li>
            <li>Asas cosméticas exclusivas</li>
            <li>Capacidade de criar eventos personalizados</li>
            <li>20% de bônus de experiência</li>
            <li>Acesso antecipado às atualizações</li>
            <li>Slot reservado no servidor (sem filas)</li>
          </ul>
          <a 
            href="https://discord.gg/reinosagrado" 
            target="_blank" 
            rel="noopener noreferrer"
            class="py-3 px-6 bg-vrising-gold hover:bg-vrising-gold/90 text-vrising-black text-center rounded-md transition-colors no-underline font-semibold self-start"
          >
            Adquirir por R$39,90/mês
          </a>
        </div>
      </div>
      
      <div class="p-6 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30 mb-8">
        <h4 class="text-vrising-red font-cinzel text-xl mb-4">Contribuição única</h4>
        <p class="mb-4">Prefere fazer uma contribuição pontual? Você também pode apoiar o Reino com uma doação única de qualquer valor!</p>
        <p class="mb-6">Cada contribuição recebe recompensas proporcionais ao valor doado, como moedas de sangue, cosméticos e muito mais.</p>
        <a 
          href="https://discord.gg/reinosagrado" 
          target="_blank" 
          rel="noopener noreferrer"
          class="py-3 px-6 bg-vrising-darkcharcoal hover:bg-vrising-darkcharcoal/80 text-white text-center rounded-md transition-colors no-underline border border-vrising-red/30 inline-block"
        >
          Fazer uma doação
        </a>
      </div>
      
      <h3 class="text-vrising-gold mt-8 mb-3">Compromisso com a comunidade</h3>
      <p>Todos os recursos obtidos através de apoios são reinvestidos no servidor e suas melhorias. Mensalmente, publicamos relatórios no Discord mostrando como os recursos estão sendo utilizados e quais melhorias estão sendo implementadas.</p>
      
      <div class="p-4 border border-vrising-gold/30 rounded-md bg-vrising-darkcharcoal/50 mt-6">
        <h4 class="text-vrising-gold font-cinzel text-lg mb-2">Importante</h4>
        <p>Nosso servidor segue uma filosofia rigorosa de não "pay-to-win". Todos os benefícios oferecidos são cosméticos ou de qualidade de vida, sem afetar o equilíbrio do jogo.</p>
      </div>
    `
  },
  interface: {
    title: 'Interface',
    content: `
      <p>Disponibilizamos nesse guia uma interface adicional, com objetivo de otimizar as informações que você precisa no jogo.</p>
      <p>Nela você consegue visualizar informações como: níveis de personagem, sangue, arma, familiar e profissão, inclusive seus níveis de prestígio e missões semanais e diárias.</p>

      <h3 class="text-vrising-gold mt-6 mb-3">PRÉVIA</h3>
      <!-- Aqui pode ser inserida uma imagem ou GIF de prévia futuramente -->

      <h3 class="text-vrising-gold mt-6 mb-3">ARQUIVOS NECESSÁRIOS</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-vrising-darkcharcoal/50">
              <th class="p-2 text-center border border-vrising-red/20">NOME</th>
              <th class="p-2 text-center border border-vrising-red/20">Descrição</th>
              <th class="p-2 text-center border border-vrising-red/20">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">BepInExPack V Rising</td>
              <td class="p-2 border border-vrising-red/20">Base para mods no V Rising</td>
              <td class="p-2 text-center border border-vrising-red/20">
                <a href="https://thunderstore.io/c/v-rising/p/BepInEx/BepInExPack_V_Rising/" target="_blank" rel="noopener noreferrer" class="text-vrising-gold hover:text-vrising-red underline font-semibold">Baixar</a>
              </td>
            </tr>
            <tr>
              <td class="p-2 text-center border border-vrising-red/20">CelemInterface</td>
              <td class="p-2 border border-vrising-red/20">Interface personalizada do Reino Sagrado de Celem</td>
              <td class="p-2 text-center border border-vrising-red/20">
                <a href="https://drive.google.com/file/d/153qXcSjOJlPAYdAkd53waVEy-_mJkDW3/view" target="_blank" rel="noopener noreferrer" class="text-vrising-gold hover:text-vrising-red underline font-semibold">Baixar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-vrising-gold mt-6 mb-3">PASSO A PASSO DA INSTALAÇÃO INTERFACE UX/UI PARA O V RISING</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Após terem baixado os dois arquivos <strong>CelemInterface.dll</strong> e <strong>BepInExPack V Rising</strong> que foram disponibilizados acima, abram a pasta onde eles foram salvos.</li>
        <li>Abra sua Steam e na aba Biblioteca localize o jogo V Rising (basta pesquisar na barra de pesquisa por V Rising).</li>
        <li>Selecione o jogo V Rising e clique na engrenagem à direita para abrir as opções e clique em: <strong>Gerenciar &gt; Explorar arquivos locais</strong>.</li>
        <li>Essa opção irá abrir a pasta com os arquivos do jogo.</li>
        <li>Abra o arquivo baixado <strong>BepInExPack V Rising</strong>.</li>
        <li>Dentro do arquivo baixado, abra a pasta <strong>BepInExPack_V_Rising</strong> (ignore os arquivos icon.png / manifest.json / README.md).</li>
        <li>Copie todos os arquivos existentes dentro dela e cole na pasta raiz do jogo V Rising aberta anteriormente.</li>
        <li>Com os arquivos movidos para a pasta do V Rising, a pasta deve conter os mesmos arquivos da imagem abaixo.</li>
        <li>Agora, abra a pasta <strong>BepInEx</strong>.</li>
        <li>Em seguida, acesse a pasta <strong>Plugins</strong>.</li>
        <li>Dentro dessa pasta, copie e cole nosso arquivo <strong>CelemInterface.dll</strong> baixado anteriormente, que deve ficar igual à imagem abaixo.</li>
      </ol>

      <h3 class="text-vrising-gold mt-6 mb-3">COMO UTILIZAR</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li>Após ter concluído toda a instalação, basta abrir o jogo normalmente. Você irá perceber que agora abre uma janela extra, essa janela é o BepInEx que foi instalado anteriormente, ele é a base das modificações para diversos jogos.</li>
        <li>Não feche esse console enquanto seu jogo estiver aberto, pois isso irá fechar também o seu jogo. Basta minimizar essa janela e jogar normalmente.</li>
        <li>Dentro do jogo é possível desabilitar elementos específicos da interface. Clicando em um dos elementos abaixo, você desabilita ela por completo ou cada tipo de exibição.</li>
      </ul>
    `
  },
  sobre: {
    title: 'Sobre o Projeto',
    content: `
      <p>O Reino Sagrado de Celem é um projeto criado por uma equipe apaixonada de jogadores de V Rising, dedicados a oferecer uma experiência única e imersiva.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Nossa História</h3>
      <p>O projeto começou em 2023, quando um pequeno grupo de amigos decidiu criar um servidor que fosse além do jogo base, adicionando sistemas exclusivos, missões customizadas e uma narrativa rica.</p>
      
      <p>De um servidor com apenas 20 slots, crescemos para uma comunidade vibrante com centenas de jogadores ativos, mantendo sempre nossa filosofia de priorizar qualidade, equilíbrio e experiência imersiva.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">A Equipe</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30 text-center">
          <div class="w-20 h-20 rounded-full bg-vrising-darkgray mx-auto mb-4"></div>
          <h4 class="text-vrising-red font-cinzel mb-2">Lorde Sanguinário</h4>
          <p class="text-sm">Fundador e Desenvolvedor Principal<br>Responsável pela programação dos sistemas e mecânicas do servidor.</p>
        </div>
        
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30 text-center">
          <div class="w-20 h-20 rounded-full bg-vrising-darkgray mx-auto mb-4"></div>
          <h4 class="text-vrising-red font-cinzel mb-2">Rainha Noturna</h4>
          <p class="text-sm">Diretora Criativa<br>Criadora das narrativas, missões e eventos especiais do Reino de Celem.</p>
        </div>
        
        <div class="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30 text-center">
          <div class="w-20 h-20 rounded-full bg-vrising-darkgray mx-auto mb-4"></div>
          <h4 class="text-vrising-red font-cinzel mb-2">Guardião das Sombras</h4>
          <p class="text-sm">Administrador<br>Lidera a equipe de moderadores e garante o bom funcionamento do servidor.</p>
        </div>
      </div>
      
      <p>Nossa equipe também conta com moderadores dedicados e colaboradores voluntários que ajudam a manter a qualidade do servidor e o bom ambiente da comunidade.</p>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Nossos Valores</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Comunidade em primeiro lugar:</strong> Valorizamos o feedback dos jogadores e tomamos decisões baseadas nas necessidades da comunidade.</li>
        <li><strong>Equilíbrio e justiça:</strong> Trabalhamos constantemente para manter o jogo equilibrado e justo para todos.</li>
        <li><strong>Inovação constante:</strong> Buscamos sempre adicionar novos conteúdos e melhorias para manter a experiência fresca e interessante.</li>
        <li><strong>Ambiente positivo:</strong> Promovemos um ambiente de respeito e cooperação entre os jogadores.</li>
        <li><strong>Transparência:</strong> Mantemos a comunidade informada sobre todas as mudanças e decisões importantes.</li>
      </ul>
      
      <h3 class="text-vrising-gold mt-6 mb-3">Agradecimentos</h3>
      <p>Um agradecimento especial a todos os jogadores que fazem parte desta comunidade incrível! Vocês são a razão pela qual continuamos dedicando nosso tempo e paixão a este projeto.</p>
      
      <p class="mt-8 text-sm text-gray-400 text-center">© 2025 Reino Sagrado de Celem | Servidor desenvolvido pela equipe Celem | Guia web desenvolvido com ❤️ por Filipe Mendonça<br>V Rising é uma marca registrada da Stunlock Studios.</p>
    `
  }
};

export default guideData;
