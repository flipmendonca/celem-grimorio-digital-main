import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/use-toast';

interface ChapterLayoutProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ChapterLayout: React.FC<ChapterLayoutProps> = ({ title, icon, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const shareOptions = [
    { name: "Copiar Link", action: () => copyToClipboard() },
    { name: "WhatsApp", action: () => shareVia("whatsapp") },
    { name: "Telegram", action: () => shareVia("telegram") },
    { name: "Twitter", action: () => shareVia("twitter") },
    { name: "Facebook", action: () => shareVia("facebook") },
    { name: "Email", action: () => shareVia("email") }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link copiado!",
          description: "Link copiado para a área de transferência.",
          duration: 3000,
        });
        setIsDrawerOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao copiar link:", error);
        toast({
          title: "Erro ao copiar",
          description: "Não foi possível copiar o link.",
          variant: "destructive",
          duration: 3000,
        });
      });
  };

  const shareVia = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${title} - Reino Sagrado de Celem`);
    let shareUrl = '';

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${text}&body=${url}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
      setIsDrawerOpen(false);
    }
  };

  const shareChapter = () => {
    if (navigator.share) {
      navigator.share({
        title: `${title} - Reino Sagrado de Celem`,
        url: window.location.href,
      })
        .then(() => console.log('Conteúdo compartilhado'))
        .catch((error) => console.log('Erro ao compartilhar', error));
    } else {
      // For desktop or browsers without share API
      if (isMobile) {
        setIsDrawerOpen(true);
      } else {
        copyToClipboard();
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in px-2 sm:px-4">
      <div className="mb-6 pb-4 border-b border-vrising-red/20">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-vrising-red">{icon}</div>
          <h1 className="text-white red-glow text-xl sm:text-2xl md:text-3xl">{title}</h1>
        </div>
        
        <div className="flex gap-2">
          <Link to="/guia" className="text-sm text-vrising-gold hover:text-vrising-red transition-colors">
            Guia Completo
          </Link>
          <span className="text-sm text-vrising-muted">›</span>
          <span className="text-sm text-vrising-muted truncate">{title}</span>
        </div>
      </div>

      <div ref={contentRef} className="chapter-content mb-12">
        <div className="overflow-x-auto overflow-y-hidden">
          {children}
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center py-4 border-t border-vrising-red/20">
        <button 
          onClick={scrollToTop} 
          className="flex items-center gap-2 text-vrising-gold hover:text-vrising-red transition-colors mb-4 md:mb-0"
        >
          <ArrowUp size={16} />
          <span>Voltar ao topo</span>
        </button>
        
        {isMobile ? (
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button className="flex items-center gap-2 text-vrising-gold hover:text-vrising-red transition-colors">
                <Share2 size={16} />
                <span>Compartilhar esta dica</span>
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-vrising-darkcharcoal border-t border-vrising-red/20">
              <DrawerHeader>
                <DrawerTitle className="text-white font-cinzel">Compartilhar</DrawerTitle>
                <DrawerDescription>Escolha como deseja compartilhar esta dica</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 grid grid-cols-2 gap-4">
                {shareOptions.map((option, index) => (
                  <Button 
                    key={index}
                    onClick={option.action}
                    variant="outline"
                    className="border-vrising-red/20 hover:bg-vrising-red/10"
                  >
                    {option.name}
                  </Button>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <button 
            onClick={shareChapter} 
            className="flex items-center gap-2 text-vrising-gold hover:text-vrising-red transition-colors"
          >
            <Share2 size={16} />
            <span>Compartilhar esta dica</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChapterLayout;
