import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="hidden lg:block sticky top-0 z-40 bg-vrising-darkcharcoal/90 backdrop-blur-md py-4 px-6 border-b border-vrising-red/20">
      <div className="flex justify-center items-center">
        {/* Centered navigation */}
        <div className="flex items-center gap-8 md:gap-12">
          <Link to="/" className="font-cinzel text-base md:text-lg text-white hover:text-vrising-red transition-colors no-underline">
            Início
          </Link>
          <Link to="/guia" className="font-cinzel text-base md:text-lg text-white hover:text-vrising-red transition-colors">
            Guia
          </Link>
          <Link to="/comandos" className="font-cinzel text-base md:text-lg text-white hover:text-vrising-red transition-colors">
            Comandos
          </Link>
          <a 
            href="https://discord.gg/celem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-md bg-vrising-red hover:bg-vrising-red/90 text-white transition-colors no-underline"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
