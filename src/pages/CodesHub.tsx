import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Code {
  id: string;
  code: string;
  description: string;
  category: string;
  source: string;
}

export default function CodesHub() {
  const [searchTerm, setSearchTerm] = useState('');

  // TODO: Implementar a lógica para buscar e organizar os códigos
  const codes: Code[] = [];

  const filteredCodes = codes.filter(code => 
    code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    code.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(codes.map(code => code.category)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-vrising-red mb-4">Hub de Códigos</h1>
        <p className="text-vrising-muted">
          Central de todos os códigos disponíveis no Reino Sagrado de Celem.
        </p>
      </div>

      <div className="mb-6">
        <Input
          type="search"
          placeholder="Buscar códigos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <ScrollArea className="h-[calc(100vh-300px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCodes.map(code => (
                <Card key={code.id} className="bg-vrising-dark/50 border-vrising-red/20">
                  <CardHeader>
                    <CardTitle className="text-vrising-red">{code.code}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-vrising-muted mb-2">{code.description}</p>
                    <p className="text-sm text-vrising-muted/70">
                      Fonte: {code.source}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        {categories.map(category => (
          <TabsContent key={category} value={category}>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCodes
                  .filter(code => code.category === category)
                  .map(code => (
                    <Card key={code.id} className="bg-vrising-dark/50 border-vrising-red/20">
                      <CardHeader>
                        <CardTitle className="text-vrising-red">{code.code}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-vrising-muted mb-2">{code.description}</p>
                        <p className="text-sm text-vrising-muted/70">
                          Fonte: {code.source}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
} 