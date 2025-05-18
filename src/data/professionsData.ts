
interface ProfessionType {
  name: string;
  description: string;
}

interface FamiliarProfession {
  name: string;
  familiar: string;
  efficiency: string;
  contributions: {
    base?: string;
    prestigeBonus?: string;
    durabilityBase?: string;
    statusBase?: string;
    durabilityPrestige?: string;
    statusPrestige?: string;
  };
}

export const professionTypes: ProfessionType[] = [
  {
    name: "Lenhador",
    description: "Aumenta a quantidade de madeira obtida ao cortar árvores e podendo obter sementes de árvores aleatórias."
  },
  {
    name: "Minerador",
    description: "Aumenta a quantidade de pedras e minérios coletados e podendo obter minério de ouro."
  },
  {
    name: "Ferreiro",
    description: "Aumenta a durabilidade e os benefícios das armas forjadas."
  },
  {
    name: "Alfaiate",
    description: "Aumenta a durabilidade e os benefícios das armaduras confeccionadas."
  },
  {
    name: "Pescador",
    description: "Aumenta a quantidade de peixes obtidos ao pescar."
  },
  {
    name: "Alquimia",
    description: "Aumenta a duração e os benefícios das poções."
  },
  {
    name: "Coletor",
    description: "Aumenta a quantidade de plantas e flores colhidas e podendo obter sementes de flores aleatórias."
  },
  {
    name: "Encantamento",
    description: "Aumenta a durabilidade e os benefícios dos colares encantados."
  },
  {
    name: "General",
    description: "Aumenta a chance de obter unidades comuns e sangue v. (Exclusiva do familiar Drácula, o Rei Imortal)"
  }
];

export const commands = [
  { command: ".prof l", description: "Exibe todas as profissões disponíveis." },
  { command: ".prof d [Profissão]", description: "Exibe todas as informações do seu progresso na profissão escolhida" },
  { command: ".prof e", description: "Habilita/desabilita a exibição do recebimento de manuseio de profissão." }
];

export const familiarProfessions: { [key: string]: FamiliarProfession[] } = {
  "Alquimista": [
    { 
      name: "Alquimista", 
      familiar: "Henry Blackbrew, o Doutor", 
      efficiency: "100%", 
      contributions: { 
        base: "5%", 
        prestigeBonus: "30%" 
      }
    },
    { 
      name: "Alquimista", 
      familiar: "Angram, o Purificador", 
      efficiency: "80%", 
      contributions: { 
        base: "5%", 
        prestigeBonus: "25%" 
      }
    },
    { 
      name: "Alquimista", 
      familiar: "Raziel, o Pastor", 
      efficiency: "60%", 
      contributions: { 
        base: "5%", 
        prestigeBonus: "20%" 
      }
    },
    { 
      name: "Alquimista", 
      familiar: "Clive, o Incendiário", 
      efficiency: "40%", 
      contributions: { 
        base: "5%", 
        prestigeBonus: "15%" 
      }
    },
    { 
      name: "Alquimista", 
      familiar: "Maja, a Sábia das Trevas", 
      efficiency: "20%", 
      contributions: { 
        base: "5%", 
        prestigeBonus: "10%" 
      }
    }
  ],
  "Encantamento": [
    {
      name: "Encantamento",
      familiar: "Mairwyn, a Elementalista",
      efficiency: "100%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,5%",
        durabilityPrestige: "25%",
        statusPrestige: "2.25%"
      }
    },
    {
      name: "Encantamento",
      familiar: "Morian, a Matriarca das Stormwing",
      efficiency: "80%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,4%",
        durabilityPrestige: "22%",
        statusPrestige: "1,85%"
      }
    },
    {
      name: "Encantamento",
      familiar: "Terah, a Geomante",
      efficiency: "60%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,4%",
        durabilityPrestige: "19%",
        statusPrestige: "1,35%"
      }
    },
    {
      name: "Encantamento",
      familiar: "Nicholaus, o Caído",
      efficiency: "40%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,3%",
        durabilityPrestige: "16%",
        statusPrestige: "0,90%"
      }
    },
    {
      name: "Encantamento",
      familiar: "Leandra, a Sacerdotisa das Sombras",
      efficiency: "20%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,2%",
        durabilityPrestige: "13%",
        statusPrestige: "0,45%"
      }
    }
  ],
  "Alfaiate": [
    {
      name: "Alfaiate",
      familiar: "Beatrice, a Costureira",
      efficiency: "100%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,5%",
        durabilityPrestige: "20%",
        statusPrestige: "2%"
      }
    },
    {
      name: "Alfaiate",
      familiar: "Matka, a Tecelã de Maldições",
      efficiency: "80%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,4%",
        durabilityPrestige: "17%",
        statusPrestige: "1,6%"
      }
    },
    {
      name: "Alfaiate",
      familiar: "Bane, a Lâmina Sombria",
      efficiency: "60%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,3%",
        durabilityPrestige: "14%",
        statusPrestige: "1,2%"
      }
    },
    {
      name: "Alfaiate",
      familiar: "Ungora, a Rainha Aranha",
      efficiency: "40%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,2%",
        durabilityPrestige: "11%",
        statusPrestige: "0,8%"
      }
    }
  ],
  "Ferreiro": [
    {
      name: "Ferreiro",
      familiar: "Cyril, o Ferreiro Amaldiçoado",
      efficiency: "100%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,5%",
        durabilityPrestige: "20%",
        statusPrestige: "2%"
      }
    },
    {
      name: "Ferreiro",
      familiar: "Ziva, a Engenheira",
      efficiency: "80%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,4%",
        durabilityPrestige: "17%",
        statusPrestige: "1,6%"
      }
    },
    {
      name: "Ferreiro",
      familiar: "Domina, a Dançarina das Lâminas",
      efficiency: "60%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,3%",
        durabilityPrestige: "14%",
        statusPrestige: "1,2%"
      }
    },
    {
      name: "Ferreiro",
      familiar: "Grayson, o Armeiro",
      efficiency: "40%",
      contributions: {
        base: "",
        durabilityBase: "5%",
        statusBase: "0,2%",
        durabilityPrestige: "11%",
        statusPrestige: "0,8%"
      }
    }
  ],
  "Pescador": [
    {
      name: "Pescador",
      familiar: "Finn, o Pescador",
      efficiency: "100%",
      contributions: {
        base: "1",
        prestigeBonus: "3"
      }
    },
    {
      name: "Pescador",
      familiar: "Kodia, o Urso Feroz",
      efficiency: "60%",
      contributions: {
        base: "1",
        prestigeBonus: "2"
      }
    }
  ],
  "Lenhador": [
    {
      name: "Lenhador",
      familiar: "Solarus, o Imaculado",
      efficiency: "100%",
      contributions: {
        base: "5",
        prestigeBonus: "15"
      }
    },
    {
      name: "Lenhador",
      familiar: "Frostmaw, o Terror da Montanha",
      efficiency: "100%",
      contributions: {
        base: "5",
        prestigeBonus: "15"
      }
    },
    {
      name: "Lenhador",
      familiar: "Willfred, o Líder Lobisomem",
      efficiency: "60%",
      contributions: {
        base: "5",
        prestigeBonus: "11"
      }
    }
  ],
  "Minerador": [
    {
      name: "Minerador",
      familiar: "Gorecrusher, o Beemote",
      efficiency: "100%",
      contributions: {
        base: "5",
        prestigeBonus: "15"
      }
    },
    {
      name: "Minerador",
      familiar: "Talzur, o Horror Alado",
      efficiency: "80%",
      contributions: {
        base: "5",
        prestigeBonus: "13"
      }
    },
    {
      name: "Minerador",
      familiar: "General Valencia, a Depravada",
      efficiency: "40%",
      contributions: {
        base: "5",
        prestigeBonus: "9"
      }
    }
  ],
  "Coletor": [
    {
      name: "Coletor",
      familiar: "Barão du Bouchon, o Sommelier",
      efficiency: "100%",
      contributions: {
        base: "1",
        prestigeBonus: "5"
      }
    },
    {
      name: "Coletor",
      familiar: "Albert, o Duque de Balaton",
      efficiency: "80%",
      contributions: {
        base: "1",
        prestigeBonus: "4"
      }
    },
    {
      name: "Coletor",
      familiar: "Keely, a Arqueira Gélida",
      efficiency: "60%",
      contributions: {
        base: "1",
        prestigeBonus: "3"
      }
    }
  ],
  "General": [
    {
      name: "General",
      familiar: "Drácula, o Rei Imortal",
      efficiency: "100%",
      contributions: {
        base: "SV: 0.2% | UC: 1%",
        prestigeBonus: "SV: 1% | UC: 4%"
      }
    }
  ]
};
