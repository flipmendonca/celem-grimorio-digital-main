interface Command {
  command: string;
  description: string;
  category: string;
}

export const commands: Command[] = [
  // Comandos Gerais
  { command: ".afk", description: "Habilita/desabilita o modo ausente.", category: "Geral" },
  { command: ".kit", description: "Recebe um kit inicial de recursos.", category: "Geral" },
  { command: ".preparar", description: "Avança as primeiras missões e libera a caça aos Sangue V.", category: "Geral" },
  { command: ".lembrar", description: "Habilita/desabilita os lembretes de progressão.", category: "Geral" },
  { command: ".exp", description: "Habilita/desabilita os números de experiência de profissão obtidos.", category: "Geral" },
  { command: ".base", description: "Exibe as bases disponíveis e em decaimento separado por regiões.", category: "Geral" },
  { command: ".ping", description: "Exibe o retorno de latência do servidor.", category: "Geral" },
  { command: ".staff", description: "Exibe os administradores que estão online no momento.", category: "Geral" },
  { command: ".vip d", description: "Exibe os status de VIP do servidor.", category: "Geral" },

  // Comandos de Teleporte
  { command: ".tp l", description: "Exibe os teleportes disponíveis.", category: "Teleporte" },
  { command: ".tp p [Nome]", description: "Teleporte para o teleporte escolhido, teleportes pessoais são gratuítos. (150x Essência de Sangue)", category: "Teleporte" },
  { command: ".tp c [Nome]", description: "Cria um teleporte pessoal no local que o personagem está atualmente. (1 por jogador)", category: "Teleporte" },
  { command: ".tp r [Nome]", description: "Remove o teleporte pessoal criado.", category: "Teleporte" },

  // Comandos de Aura
  { command: ".aura l", description: "Exibe as auras disponíveis para aplicar no personagem.", category: "Aura" },
  { command: ".aura [Nome]", description: "Aplica a aura informada no personagem e caso deseja remover só informar o nome da aura atual ativa.", category: "Aura" },

  // Comandos de Inventário
  { command: ".g", description: "Guarda os itens do inventário nos baús do território que estiver, desde que tenha o mesmo item nos baús. Também pode ser utilizado apertando duas vezes no botão de Ordenar do inventário.", category: "Inventário" },
  { command: ".pi [Nome]", description: "Procura o item e informa em quais baús está do território que estiver.", category: "Inventário" },
  { command: ".px [Nome] [Quantidade]", description: "Puxa o item e a quantidade informada dos baús do território e adiciona ao seu inventário.", category: "Inventário" },

  // Comandos de Missões
  { command: ".mi e", description: "Habilita/desabilita a exibição do progresso de missões.", category: "Missões" },
  { command: ".mi d [Missão]", description: "Exibe o progresso da missão escolhida.", category: "Missões" },
  { command: ".mi loc [Missão]", description: "Rastreia o alvo da missão caso for uma unidade.", category: "Missões" },
  { command: ".mi t [Missão]", description: "Troca a missão escolhida. (50x Essência de Sangue para diária e 200x Essência de Sangue para semanal)", category: "Missões" },
  { command: ".mi l", description: "Exibe todos os tipos de missões disponíveis.", category: "Missões" },

  // Comandos de Níveis
  { command: ".nvl e", description: "Habilita/desabilita a exibição do recebimento de experiência de nível.", category: "Níveis" },
  { command: ".nvl d", description: "Exibe todas as informações do seu progresso de nível.", category: "Níveis" },

  // Comandos de Familiares
  { command: ".fam l", description: "Lista de familiares.", category: "Familiares" },
  { command: ".fam v", description: "Vincula o familiar.", category: "Familiares" },
  { command: ".fam dv", description: "Desvincula o familiar do seu personagem, o retornando para caixa.", category: "Familiares" },
  { command: ".fam d", description: "Exibe todas as informações do seu progresso com o familiar.", category: "Familiares" },
  { command: ".fam lc", description: "Listar as caixas.", category: "Familiares" },
  { command: ".fam ec", description: "Escolhe uma caixa.", category: "Familiares" },
  { command: ".fam ac [Caixa]", description: "Adiciona uma caixa de familiares para organizar seu familiares.", category: "Familiares" },
  { command: ".fam dc [Caixa]", description: "Deleta a caixa de familiar escolhida caso ela esteja vazia.", category: "Familiares" },
  { command: ".fam rc [CaixaAtual] [NovaCaixa]", description: "Renomeia uma caixa de familiar existente para o novo nome escolhido.", category: "Familiares" },
  { command: ".fam mf [Caixa]", description: "Move o familiar ativo para a caixa de familiar escolhida.", category: "Familiares" },
  { command: ".fam pc [Familiar]", description: "Procura o familiar escolhido em todas as suas caixas de familiares.", category: "Familiares" },
  { command: ".fam r", description: "Desvincula qualquer registro de familiar ativo do seu personagem para corrigir inconsistências.", category: "Familiares" },
  { command: ".fam a", description: "Chama o familiar.", category: "Familiares" },
  { command: ".fam rf [#]", description: "Remove o familiar permanentemente da caixa escolhida, essa ação não tem volta.", category: "Familiares" },
  { command: ".fam ac", description: "Habilita/desabilita o combate do familiar, ele continua com você, mas não rouba sua experiência.", category: "Familiares" },
  { command: ".fam e", description: "Habilita/desabilita a exibição controlar os familiares pelos emotes.", category: "Familiares" },
  { command: ".fam le", description: "Exibe as ações de emotes disponíveis.", category: "Familiares" },
  { command: ".fam ao [Opção]", description: "Habilita/desabilita a exibição de aura Shiny ou controle dos Emotes.", category: "Familiares" },
  { command: ".fam es [Efeito]", description: "Escolhe um efeito Shiny em um familiar que ainda não possui, apenas uma única vez e sem custo. Se o familiar já tiver um Shiny, você pode trocá-lo. (1250x Fragmento Assutador Primordial)", category: "Familiares" },
  { command: ".roletar", description: "Forma de adquirir qualquer unidade e Sangue V do jogo, adicionando um familiar aleatório a sua caixa, podendo obter desde um Esqueleto até o Drácula. (5x Fragmento de Demônio)", category: "Familiares" },
  { command: ".autoloot", description: "Habilita/desabilita o autoloot dos familiares.", category: "Familiares" },
  { command: ".fam e", description: "Habilita/desabilita a exibição dos itens coletados pelo autoloot dos familiares.", category: "Familiares" },

  // Comandos de Classes
  { command: ".cl l", description: "Lista de todas as Classes.", category: "Classes" },
  { command: ".cl e", description: "Escolhe uma classe. Exemplo: \".cl e Duelista\".", category: "Classes" },
  { command: ".cl m", description: "Muda a classe.", category: "Classes" },
  { command: ".cl d", description: "Informações das classes (não habilitado).", category: "Classes" },
  { command: ".cl eh ou .cl eh [Q/E/SHIFT] [1/2/3]", description: "Para virar um conjurador e utilizar feitiços no lugar das habilidades de arma, use esse comando pela primeira vez e selecione dois feitiços novos no seu R e C, depois digite esse comando novamente e equipe e desequipe uma arma para essas habilidades aparecerem no Q e E e após isso pode escolher outras habilidades para utilizar no R e C.", category: "Classes" },
  { command: ".cl rh", description: "Remove os feitiços.", category: "Classes" },

  // Comandos de Habilidades com Armas
  { command: ".ar l", description: "Lista de habilidades com ARMAS disponíveis.", category: "Habilidades" },
  { command: ".ar ls", description: "Exibe todos STATUS DISPONÍVEIS para habilidades com ARMAS.", category: "Habilidades" },
  { command: ".ar es", description: "Escolhe os status que deseja para por nas armas. Pode escolher até 2.", category: "Habilidades" },
  { command: ".ar rs", description: "Reseta os status escolhidos. (750 frag. assustador primordial)", category: "Habilidades" },
  { command: ".ar d", description: "Informação do progresso de habilidades com armas.", category: "Habilidades" },
  { command: ".ar e", description: "Habilita/desabilita exibição.", category: "Habilidades" },

  // Comandos de Legado de Sangue
  { command: ".sg l", description: "Exibe os legados de sangue disponíveis.", category: "Legado" },
  { command: ".sg ls", description: "Exibe os status disponíveis para o legado.", category: "Legado" },
  { command: ".sg es", description: "Escolhe os status que deseja para melhorar o sangue (mesmo sistema que as armas).", category: "Legado" },
  { command: ".sg rs", description: "Reseta os status escolhidos para o sangue atual. (750 frag. assustador primordial)", category: "Legado" },
  { command: ".sg d", description: "Exibe as informações do seu progresso.", category: "Legado" },
  { command: ".sg e", description: "Habilita/desabilita exibição.", category: "Legado" },

  // Comandos de Prestígio
  { command: ".pr l", description: "Exibe todos os prestígios disponíveis.", category: "Prestígio" },
  { command: ".fam le", description: "Exibe as as opções de prestígios de familiar disponíveis.", category: "Prestígio" },
  { command: ".pr a [Prestígio]", description: "Ativa o prestígio escolhido, melhorando os status, podendo ganhar novas habilidades e reiniciando o progresso de nível.", category: "Prestígio" },
  { command: ".fam pr [Status]", description: "Ativa o prestígio do familiar ativo, melhorando o status selecionado e reiniciando o progresso de nível.", category: "Prestígio" },
  { command: ".pr d [Prestígio]", description: "Exibe o progresso no prestígio escolhido.", category: "Prestígio" },
  { command: ".pr lb", description: "Exibe todos os buffs recebidos de prestígios de níveis disponíveis.", category: "Prestígio" },
  { command: ".pr rk [Prestígio]", description: "Exibe o ranking dos 10 primeiros jogadores com melhor progressão no prestígio escolhido.", category: "Prestígio" },
  { command: ".exoform", description: "Habilita/desabilita a possibilidade de se transformar no Drácula. (necessário ter pelo menos 1 nível de Prestígio de Exo e ter derrotado o Drácula)", category: "Prestígio" },

  // Comandos de Tributos
  { command: ".tributos r", description: "Troca seus pontos de tributos acumulados por Fragmento Assustador Primordial.", category: "Tributos" },
  { command: ".tributos d", description: "Exibe a quantidade de pontos de tributos acumulados.", category: "Tributos" },
  { command: ".tributos e", description: "Exibe o tempo que falta para receber a próxima recompensa por entrar diariamente.", category: "Tributos" },

  // Comandos de Rankings
  { command: ".rk l", description: "Exibe todos os rankings disponíveis.", category: "Rankings" },
  { command: ".rk [Nome] [#]", description: "Exibe o ranking dos jogadores no tipo escolhido separados por página.", category: "Rankings" },
  { command: ".rk s", description: "Sair de todos os rankings do servidor.", category: "Rankings" },
  { command: ".rk v", description: "Voltar para todos os rankings do servidor. (100x Fragmento de Demônio)", category: "Rankings" }
];

export const categories = [
  "Geral",
  "Teleporte",
  "Aura",
  "Inventário",
  "Missões",
  "Níveis",
  "Familiares",
  "Classes",
  "Habilidades",
  "Legado",
  "Prestígio",
  "Tributos",
  "Rankings"
]; 