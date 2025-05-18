
import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  professionTypes, 
  commands, 
  familiarProfessions 
} from '@/data/professionsData';

interface ProfessionsProps {
  sidebarEnabled?: boolean;
}

const Professions = ({ sidebarEnabled = true }: ProfessionsProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.title = "Profissões - Reino Sagrado de Celem";
  }, []);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 pb-4 border-b border-vrising-red/20">
          <h1 className="text-3xl md:text-4xl font-cinzel text-white red-glow mb-2">Profissões</h1>
          <p className="text-vrising-muted">
            Especialização em atividades como mineração, pesca, alquimia, entre outras, com aumento de recursos coletados e benefícios adicionais conforme o progresso do jogador.
          </p>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="commands">Comandos</TabsTrigger>
            <TabsTrigger value="familiars">Familiares</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="p-4 mb-6 border border-vrising-gold/30 rounded-md bg-vrising-darkcharcoal/40">
              <h3 className="text-vrising-gold font-cinzel text-xl mb-3">Sobre as Profissões</h3>
              <p className="mb-4">
                O nível máximo que uma profissão pode atingir é 100. Você vai aumentando o nível conforme realiza atividades referentes ao tipo da profissão.
              </p>
              <p>
                Ao evoluir o manuseio de profissão, aparecerá uma mensagem no chat indicando seu progresso.
              </p>
            </div>
            
            <h3 className="text-vrising-gold font-cinzel text-xl mb-3">Tipos de Profissões e seus Benefícios</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionTypes.map((profession, index) => (
                <div key={index} className="p-4 border border-vrising-red/20 rounded-md bg-vrising-darkcharcoal/30">
                  <h4 className="text-vrising-red font-cinzel mb-2">{profession.name}</h4>
                  <p className="text-sm">{profession.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="commands" className="space-y-6">
            <div className="p-4 mb-6 border border-vrising-gold/30 rounded-md bg-vrising-darkcharcoal/40">
              <h3 className="text-vrising-gold font-cinzel text-xl mb-3">Comandos de Profissões</h3>
              <p>
                Utilize os comandos abaixo no chat do jogo para acessar informações sobre suas profissões.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-vrising-darkcharcoal">
                    <th className="border border-vrising-red/20 p-4 text-left">Comando</th>
                    <th className="border border-vrising-red/20 p-4 text-left">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {commands.map((cmd, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-vrising-darkcharcoal/30" : ""}>
                      <td className="border border-vrising-red/20 p-4 font-mono text-vrising-gold">{cmd.command}</td>
                      <td className="border border-vrising-red/20 p-4">{cmd.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border border-vrising-red/30 rounded-md bg-vrising-darkcharcoal/50 mt-6 text-center">
              <h4 className="text-vrising-red font-cinzel text-lg mb-2">Atenção</h4>
              <p>Ao evoluir o manuseio de profissão, aparecerá uma mensagem no chat.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="familiars" className="space-y-6">
            <div className="p-4 mb-6 border border-vrising-gold/30 rounded-md bg-vrising-darkcharcoal/40">
              <h3 className="text-vrising-gold font-cinzel text-xl mb-3">Familiares e Profissões</h3>
              <p>
                Os familiares têm participação ativa nas profissões do jogo. Cada familiar poderá oferecer benefícios específicos e/ou bônus de recursos, de acordo com sua profissão.
              </p>
            </div>
            
            {Object.keys(familiarProfessions).map((professionType, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-vrising-red font-cinzel text-xl mb-4 border-b border-vrising-red/20 pb-2">
                  {professionType}
                </h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-vrising-darkcharcoal">
                        <th className="border border-vrising-red/20 p-3 text-left">Familiar</th>
                        <th className="border border-vrising-red/20 p-3 text-center">Eficiência</th>
                        <th className="border border-vrising-red/20 p-3 text-center" colSpan={professionType === "Encantamento" || professionType === "Alfaiate" || professionType === "Ferreiro" ? 2 : 1}>
                          {professionType === "Encantamento" || professionType === "Alfaiate" || professionType === "Ferreiro" ? "Prestígio 0" : "Contribuição Base"}
                        </th>
                        <th className="border border-vrising-red/20 p-3 text-center" colSpan={professionType === "Encantamento" || professionType === "Alfaiate" || professionType === "Ferreiro" ? 2 : 1}>
                          {professionType === "Encantamento" || professionType === "Alfaiate" || professionType === "Ferreiro" ? "Prestígio 20" : "Prestígio 20"}
                        </th>
                      </tr>
                      {(professionType === "Encantamento" || professionType === "Alfaiate" || professionType === "Ferreiro") && (
                        <tr className="bg-vrising-darkcharcoal">
                          <th className="border border-vrising-red/20 p-2" colSpan={2}></th>
                          <th className="border border-vrising-red/20 p-2 text-center">Durabilidade</th>
                          <th className="border border-vrising-red/20 p-2 text-center">Status Bônus</th>
                          <th className="border border-vrising-red/20 p-2 text-center">Durabilidade</th>
                          <th className="border border-vrising-red/20 p-2 text-center">Status Bônus</th>
                        </tr>
                      )}
                    </thead>
                    <tbody>
                      {familiarProfessions[professionType].map((familiar, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-vrising-darkcharcoal/30" : ""}>
                          <td className="border border-vrising-red/20 p-3">{familiar.familiar}</td>
                          <td className="border border-vrising-red/20 p-3 text-center">{familiar.efficiency}</td>
                          
                          {(professionType === "Encantamento" || professionType === "Alfaiate" || professionType === "Ferreiro") ? (
                            <>
                              <td className="border border-vrising-red/20 p-3 text-center">{familiar.contributions.durabilityBase}</td>
                              <td className="border border-vrising-red/20 p-3 text-center">{familiar.contributions.statusBase}</td>
                              <td className="border border-vrising-red/20 p-3 text-center">{familiar.contributions.durabilityPrestige}</td>
                              <td className="border border-vrising-red/20 p-3 text-center">{familiar.contributions.statusPrestige}</td>
                            </>
                          ) : (
                            <>
                              <td className="border border-vrising-red/20 p-3 text-center">{familiar.contributions.base}</td>
                              <td className="border border-vrising-red/20 p-3 text-center">{familiar.contributions.prestigeBonus}</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Professions;
