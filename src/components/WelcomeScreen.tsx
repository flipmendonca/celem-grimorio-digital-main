
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleEnter = () => {
    onEnter();
    navigate('/guia');
  };
  
  return (
    <div className="fixed inset-0 z-50 bg-vrising-black flex items-center justify-center">
      {/* Fog Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('/fog.png')] bg-cover animate-fog-flow"></div>
      </div>
      
      <motion.div 
        className="relative z-10 max-w-lg w-full mx-4 p-8 gothic-paper flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-32 h-32 mb-6 rounded-full bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/6aabccb3-97c2-4dca-8ebc-43d62203d02d.png')" }}
          animate={{ 
            boxShadow: isHovered 
              ? '0 0 20px 5px rgba(234, 56, 76, 0.6)' 
              : '0 0 10px 2px rgba(234, 56, 76, 0.3)' 
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        
        <motion.h1 
          className="font-cinzel text-3xl md:text-4xl mb-2 text-white leading-tight"
          animate={{ 
            textShadow: isHovered 
              ? '0 0 8px rgba(234, 56, 76, 0.8)' 
              : '0 0 4px rgba(234, 56, 76, 0.4)' 
          }}
          transition={{ duration: 0.5 }}
        >
          REINO SAGRADO DE CELEM
        </motion.h1>
        
        <p className="text-gray-300 mb-8">Descubra os segredos do Reino</p>
        
        <motion.button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleEnter}
          className="bg-vrising-red hover:bg-vrising-red/90 text-white font-cinzel py-3 px-6 rounded-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ACESSE O GUIA
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
