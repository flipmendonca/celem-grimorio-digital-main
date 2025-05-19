import { Link } from 'react-router-dom';
import { BookOpen, Map, Heart, Info, Command } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  enabled: boolean;
}

const links = [
  {
    title: 'Guia',
    href: '/guia',
    icon: BookOpen
  },
  {
    title: 'Mapa',
    href: '/mapa',
    icon: Map
  },
  {
    title: 'Comandos',
    href: '/comandos',
    icon: Command
  },
  {
    title: 'Apoie',
    href: '/apoie',
    icon: Heart
  },
  {
    title: 'Sobre',
    href: '/sobre',
    icon: Info
  }
];

const Sidebar = ({ enabled }: SidebarProps) => {
  if (!enabled) return null;

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-background border-r">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h2 className="text-xl font-bold">Menu</h2>
        </div>
        <nav className="flex-1 px-2">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground',
                'transition-colors duration-200'
              )}
            >
              <link.icon className="w-5 h-5 mr-3" />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 