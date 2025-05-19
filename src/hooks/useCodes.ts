import { useState, useEffect } from 'react';
import { guideData } from '@/data/guideData';

export interface Code {
  id: string;
  code: string;
  description: string;
  category: string;
  source: string;
}

export function useCodes() {
  const [codes, setCodes] = useState<Code[]>([]);

  useEffect(() => {
    // Função para extrair códigos do guideData
    const extractCodes = () => {
      const extractedCodes: Code[] = [];

      // Função auxiliar para processar o conteúdo HTML
      const processContent = (content: string, source: string) => {
        const codeRegex = /<code>(.*?)<\/code>/g;
        const matches = content.matchAll(codeRegex);

        for (const match of matches) {
          const code = match[1];
          // Determinar a categoria com base no contexto
          const category = determineCategory(source, code);
          
          extractedCodes.push({
            id: `${source}-${code}`,
            code,
            description: extractDescription(content, match.index || 0),
            category,
            source
          });
        }
      };

      // Processar cada seção do guideData
      guideData.sections.forEach(section => {
        if (section.content) {
          processContent(section.content, section.title);
        }
      });

      setCodes(extractedCodes);
    };

    extractCodes();
  }, []);

  return codes;
}

// Função auxiliar para determinar a categoria do código
function determineCategory(source: string, code: string): string {
  // Lógica para determinar a categoria com base no contexto
  if (source.toLowerCase().includes('admin')) return 'Administração';
  if (source.toLowerCase().includes('jogador')) return 'Jogador';
  if (source.toLowerCase().includes('sistema')) return 'Sistema';
  return 'Geral';
}

// Função auxiliar para extrair a descrição do código
function extractDescription(content: string, codeIndex: number): string {
  // Encontrar o texto mais próximo antes do código
  const textBeforeCode = content.substring(0, codeIndex);
  const lastParagraph = textBeforeCode.split('\n').filter(Boolean).pop() || '';
  
  // Se não encontrar texto antes, procurar depois
  if (!lastParagraph) {
    const textAfterCode = content.substring(codeIndex);
    const firstParagraph = textAfterCode.split('\n').filter(Boolean)[0] || '';
    return firstParagraph;
  }

  return lastParagraph;
} 