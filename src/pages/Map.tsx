
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MapProps {
  sidebarEnabled?: boolean;
}

const Map: React.FC<MapProps> = ({ sidebarEnabled = true }) => {
  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-vrising-gold mb-2">Mapa de Vardoran</h1>
          <p className="text-vrising-muted mb-6">
            Explore o mundo de V Rising com este mapa interativo.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Mapa Interativo</CardTitle>
              <CardDescription>Use este mapa para encontrar recursos, chefes e outros pontos de interesse em Vardoran.</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px] md:h-[600px] lg:h-[700px]">
              <div className="w-full h-full">
                <iframe 
                  src="https://mapgenie.io/v-rising/maps/vardoran?embed=light" 
                  height="100%" 
                  style={{ position: 'relative', width: '100%', height: '100%', border: '0' }}
                  title="V Rising Map"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Map;
