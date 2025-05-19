import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Book, 
  Sword, 
  Crown, 
  Scroll, 
  Shield, 
  Castle, 
  Coins, 
  Key,
  ChevronLeft,
  X,
  Map,
  Droplet
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  mobileOpen: boolean;
  toggleMobileSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, mobileOpen, toggleMobileSidebar }) => {
  const menuItems = [
    { title: 'Início', path: '/', icon: Castle },
    { title: 'Guia Completo', path: '/guia', icon: Book },
    { title: 'Mapa', path: '/mapa', icon: Map },
    { title: 'Apoie o Reino', path: '/apoie', icon: Coins },
    { title: 'Sobre o Projeto', path: '/sobre', icon: Scroll },
  ];

  const guideItems = [
    { title: 'Introdução', path: '/guia/introducao', icon: Book },
    { title: 'Missões', path: '/guia/missoes', icon: Scroll },
    { title: 'Níveis', path: '/guia/niveis', icon: Crown },
    { title: 'Familiares', path: '/guia/familiares', icon: Shield },
    { title: 'Classes', path: '/guia/classes', icon: Sword },
    { title: 'Profissões', path: '/guia/profissoes', icon: Key },
    { title: 'Habilidades com Armas', path: '/guia/habilidades', icon: Sword },
    { title: 'Legado de Sangue', path: '/guia/legado', icon: Droplet },
    { title: 'Prestígio', path: '/guia/prestigio', icon: Crown },
    { title: 'Economia', path: '/guia/economia', icon: Coins },
    { title: 'Tributos', path: '/guia/tributos', icon: Coins },
    { title: 'Chefões Globais', path: '/guia/chefoes', icon: Crown },
    { title: 'Passe de Batalha', path: '/guia/passe', icon: Scroll },
    { title: 'Rankings', path: '/guia/rankings', icon: Crown },
    { title: 'Interface', path: '/guia/interface', icon: Castle },
  ];

  // Desktop sidebar
  const desktopSidebar = (
    <div 
      className={`fixed lg:sticky top-0 left-0 h-full lg:h-screen z-50 w-64 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out 
      bg-vrising-darkcharcoal/90 backdrop-blur-md border-r border-vrising-red/20
      flex flex-col hidden lg:flex`}
    >
      {/* Sidebar Header */}
      <div className="p-4 md:p-6 flex items-center justify-center border-b border-vrising-red/20">
        <Link 
          to="/" 
          className="no-underline flex flex-col items-center"
        >
          <div 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cover bg-center mb-2 animate-plow"
            style={{ backgroundImage: "url('/logo.png')" }}
          ></div>
          <h1 className="text-lg md:text-xl font-bold text-white font-cinzel tracking-wider text-center">
            Reino Sagrado<br/>de Celem
          </h1>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-grow p-4 pt-6 overflow-y-auto relative scrollbar-none hover:scrollbar-thin hover:scrollbar-track-vrising-darkcharcoal hover:scrollbar-thumb-vrising-red/30 group">
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-24 bg-vrising-red/10 rounded opacity-0 transition-opacity group-hover:opacity-100">
          <div className="w-full h-1/3 bg-vrising-red/30 rounded"></div>
        </div>
        <div className="mb-6">
          <h2 className="font-cinzel text-vrising-gold text-lg md:text-xl mb-4">Navegação</h2>
          <ul className="space-y-2 md:space-y-3">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className="no-underline flex items-center gap-2 md:gap-3 p-2 rounded-md hover:bg-vrising-red/10 text-white transition-colors"
                >
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-vrising-red" />
                  <span className="text-sm md:text-base">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-cinzel text-vrising-gold text-lg md:text-xl mb-4">Capítulos do Guia</h2>
          <ul className="space-y-1 md:space-y-2">
            {guideItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className="no-underline flex items-center gap-2 md:gap-3 p-1.5 md:p-2 rounded-md hover:bg-vrising-red/10 text-white transition-colors"
                >
                  <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-vrising-red" />
                  <span className="text-xs md:text-sm">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-vrising-red/20">
        <p className="text-xs text-center text-vrising-muted">
          © 2025 Reino Sagrado de Celem
        </p>
      </div>
    </div>
  );

  // Mobile sidebar
  const mobileSidebar = (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        mobileOpen ? 'block' : 'hidden'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={toggleMobileSidebar}
      />

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-64 max-w-[80vw] transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out 
        bg-vrising-darkcharcoal/95 backdrop-blur-md border-r border-vrising-red/20
        flex flex-col`}
      >
        {/* Close button */}
        <button
          onClick={toggleMobileSidebar}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-vrising-red/10"
        >
          <X size={20} className="text-vrising-red" />
        </button>

        {/* Sidebar Header */}
        <div className="p-4 md:p-6 flex items-center justify-center border-b border-vrising-red/20">
          <Link 
            to="/" 
            className="no-underline flex flex-col items-center"
            onClick={toggleMobileSidebar}
          >
            <div 
              className="w-16 h-16 rounded-full bg-cover bg-center mb-2 animate-pulse-glow"
              style={{ backgroundImage: "url('/logo.png')" }}
            ></div>
            <h1 className="text-lg font-bold text-white font-cinzel tracking-wider text-center">
              Reino Sagrado<br/>de Celem
            </h1>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="flex-grow p-4 pt-6 overflow-y-auto scrollbar-none">
          <div className="mb-6">
            <h2 className="font-cinzel text-vrising-gold text-lg mb-4">Navegação</h2>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="no-underline flex items-center gap-2 p-2 rounded-md hover:bg-vrising-red/10 text-white transition-colors"
                    onClick={toggleMobileSidebar}
                  >
                    <item.icon className="w-4 h-4 text-vrising-red" />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-cinzel text-vrising-gold text-lg mb-4">Capítulos do Guia</h2>
            <ul className="space-y-1">
              {guideItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="no-underline flex items-center gap-2 p-1.5 rounded-md hover:bg-vrising-red/10 text-white transition-colors"
                    onClick={toggleMobileSidebar}
                  >
                    <item.icon className="w-3.5 h-3.5 text-vrising-red" />
                    <span className="text-xs">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-vrising-red/20">
          <p className="text-xs text-center text-vrising-muted">
            © 2025 Reino Sagrado de Celem
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {desktopSidebar}
      {mobileSidebar}
    </>
  );
};

export default Sidebar;
