import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import ChapterLayout from '@/components/layout/ChapterLayout';
import { 
  Book, 
  Scroll, 
  Crown, 
  Shield, 
  Sword, 
  Key, 
  Castle, 
  Coins,
  Droplet
} from 'lucide-react';
import guideData from '@/data/guideData';

interface GuideChapterProps {
  sidebarEnabled?: boolean;
}

const GuideChapter = ({ sidebarEnabled = true }: GuideChapterProps) => {
  const { chapter } = useParams<{ chapter: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [chapter]);

  if (!chapter || !guideData[chapter]) {
    return <Navigate to="/guia" replace />;
  }

  const iconMap: Record<string, JSX.Element> = {
    introducao: <Book size={24} />,
    missoes: <Scroll size={24} />,
    niveis: <Crown size={24} />,
    familiares: <Shield size={24} />,
    classes: <Sword size={24} />,
    profissoes: <Key size={24} />,
    habilidades: <Sword size={24} />,
    legado: <Droplet size={24} />,
    prestigio: <Crown size={24} />,
    economia: <Coins size={24} />,
    tributos: <Coins size={24} />,
    chefoes: <Crown size={24} />,
    passe: <Scroll size={24} />,
    rankings: <Crown size={24} />,
    interface: <Castle size={24} />,
  };

  const chapterData = guideData[chapter];
  
  useEffect(() => {
    document.title = `${chapterData.title} - Reino Sagrado de Celem`;
  }, [chapterData.title]);

  return (
    <MainLayout sidebarEnabled={sidebarEnabled}>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-10 h-10 border-4 border-vrising-red rounded-full border-t-transparent animate-spin"></div>
        </div>
      ) : (
        <ChapterLayout 
          title={chapterData.title} 
          icon={iconMap[chapter] || <Book size={24} />}
        >
          <div dangerouslySetInnerHTML={{ __html: chapterData.content }} />
        </ChapterLayout>
      )}
    </MainLayout>
  );
};

export default GuideChapter;
