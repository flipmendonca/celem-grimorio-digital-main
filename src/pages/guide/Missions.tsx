import { useEffect } from 'react';
import { Scroll } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MissionsProps {
  sidebarEnabled?: boolean;
}

const Missions = ({ sidebarEnabled = true }: MissionsProps) => {
  useEffect(() => {
    document.title = "Missões - Reino Sagrado de Celem";
  }, []);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="mb-8 pb-4 border-b border-vrising-red/20">
          <div className="flex items-center gap-3 mb-2">
            <Scroll className="h-6 w-6 text-vrising-red" />
            <h1 className="text-white red-glow">Missões</h1>
          </div>
          <p className="text-gray-300">
            Desafios diários e semanais que premiam os jogadores com moedas do jogo e experiência de nível, a recompensa escala de acordo com o nível de dificuldade.
          </p>
        </div>

        <div className="space-y-8">
          {/* Comandos Section */}
          <div className="p-6 gothic-paper rounded-lg">
            <h2 className="text-2xl text-vrising-gold font-cinzel mb-6">Comandos Disponíveis</h2>
            <Card>
              <CardHeader>
                <CardTitle>Comandos</CardTitle>
                <CardDescription>
                  Lista de comandos disponíveis para gerenciar suas missões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Comando</TableHead>
                      <TableHead>Descrição</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">.mi e</TableCell>
                      <TableCell>Habilita/desabilita a exibição do progresso de missões.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">.mi d [Missão]</TableCell>
                      <TableCell>Exibe o progresso da missão escolhida.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">.mi loc [Missão]</TableCell>
                      <TableCell>Rastreia o alvo da missão caso for uma unidade.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">.mi t [Missão]</TableCell>
                      <TableCell>Troca a missão escolhida. (50x Essência de Sangue para diária e 200x Essência de Sangue para semanal)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">.mi l</TableCell>
                      <TableCell>Exibe todos os tipos de missões disponíveis.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Observação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">AO COMPLETAR A MISSÃO, APARECERÁ UMA MENSAGEM NO CHAT</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Missions;