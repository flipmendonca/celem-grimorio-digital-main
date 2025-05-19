import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { commands, categories } from '@/data/commandsData';
import MainLayout from '@/components/layout/MainLayout';
import { cn } from '@/lib/utils';

interface CommandsHubProps {
  sidebarEnabled?: boolean;
}

const CommandsHub: React.FC<CommandsHubProps> = ({ sidebarEnabled = true }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Usando useMemo para otimizar a performance da busca
  const { filteredCommands, groupedCommands } = useMemo(() => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    const filtered = commands.filter(command => 
      command.command.toLowerCase().includes(searchLower) ||
      command.description.toLowerCase().includes(searchLower)
    );

    const grouped = categories.reduce((acc, category) => {
      const categoryCommands = filtered.filter(cmd => cmd.category === category);
      if (categoryCommands.length > 0) {
        acc[category] = categoryCommands;
      }
      return acc;
    }, {} as Record<string, typeof commands>);

    return { filteredCommands: filtered, groupedCommands: grouped };
  }, [searchTerm]);

  // Expandir automaticamente categorias que têm resultados na busca
  React.useEffect(() => {
    if (searchTerm) {
      const categoriesWithResults = Object.keys(groupedCommands);
      if (categoriesWithResults.length === 1) {
        setExpandedCategory(categoriesWithResults[0]);
      }
    } else {
      setExpandedCategory(null);
    }
  }, [searchTerm, groupedCommands]);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="gothic-paper p-6 md:p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <Search className="h-6 w-6 text-vrising-red" />
            <h2 className="text-2xl md:text-3xl font-cinzel text-white">Comandos do Reino</h2>
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar comandos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 bg-vrising-darkcharcoal/50 border border-vrising-red/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-vrising-red/40"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-vrising-red" />
            </div>
          </div>

          {searchTerm && filteredCommands.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              Nenhum comando encontrado para "{searchTerm}"
            </div>
          )}

          <div className="space-y-4">
            {Object.entries(groupedCommands).map(([category, commands]) => (
              <div key={category} className="border border-vrising-red/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleCategoryChange(category)}
                  className="w-full p-4 flex items-center justify-between bg-vrising-darkcharcoal/50 hover:bg-vrising-darkcharcoal/70 transition-colors"
                >
                  <h3 className="text-lg font-cinzel text-white">
                    {category} <span className="text-sm text-vrising-red/70">({commands.length})</span>
                  </h3>
                  <span className="text-vrising-red">
                    {expandedCategory === category ? '−' : '+'}
                  </span>
                </button>
                
                {expandedCategory === category && (
                  <div className="p-4 bg-vrising-darkcharcoal/30">
                    <div className="space-y-3">
                      {commands.map((command) => (
                        <div key={command.command} className="flex items-start gap-4">
                          <div className="mt-1">
                            <code className="px-2 py-1 bg-vrising-red/20 text-vrising-red rounded text-sm">
                              {command.command}
                            </code>
                          </div>
                          <p className="text-gray-300 text-sm flex-1">
                            {command.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommandsHub; 