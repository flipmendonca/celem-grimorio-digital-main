import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Book, Menu, X } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  sidebarEnabled?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, sidebarEnabled = true }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Initialize sidebar state based on sidebarEnabled
  useEffect(() => {
    if (sidebarEnabled) {
      // Check screen size to set sidebar initial state
      const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint
      setSidebarOpen(isLargeScreen);
    } else {
      setSidebarOpen(false);
    }
  }, [sidebarEnabled]);

  // Add resize listener to handle sidebar visibility on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        // On mobile, close sidebar by default
        setSidebarOpen(false);
      } else if (sidebarEnabled) {
        // On desktop, open sidebar if enabled
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarEnabled]);

  const toggleSidebar = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <div className="flex flex-col min-h-screen bg-vrising-darkcharcoal">
      {/* Mobile Header */}
      {sidebarEnabled && (
        <div className="lg:hidden flex items-center justify-between p-3 md:p-4 bg-vrising-darkcharcoal/90 border-b border-vrising-red/20 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5 md:h-6 md:w-6 text-vrising-red" />
            <h2 className="font-cinzel text-base md:text-lg text-white">Reino Sagrado de Celem</h2>
          </div>
          <button
            onClick={toggleMobileSidebar}
            className="p-2 text-white hover:text-vrising-red transition-colors"
            aria-label="Toggle menu"
          >
            {showMobileSidebar ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarEnabled && (
          <Sidebar 
            isOpen={sidebarOpen} 
            toggleSidebar={toggleSidebar} 
            mobileOpen={showMobileSidebar} 
            toggleMobileSidebar={toggleMobileSidebar} 
          />
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden w-full">
          {sidebarEnabled && <Navbar />}
          <main className="flex-1 p-3 md:p-4 lg:p-6 xl:p-8 overflow-y-auto">
            {children}
          </main>
          
          <footer className="p-3 md:p-4 text-center text-xs md:text-sm text-vrising-muted bg-vrising-darkcharcoal/90 border-t border-vrising-red/20">
            <p>© 2025 Reino Sagrado de Celem | Desenvolvido com 🩸 por <a href="https://discord.com/users/filipe.mendonca" target="_blank" rel="noopener noreferrer" className="text-vrising-gold hover:text-vrising-red transition-colors">Flip</a></p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
