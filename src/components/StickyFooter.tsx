import React from 'react';
import { MessageCircle, Info } from 'lucide-react';

interface StickyFooterProps {
  onSpecialistClick: () => void;
  onCODClick: () => void;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ onSpecialistClick, onCODClick }) => {
  const handleSpecialistClick = () => {
    window.open('https://wa.me/message/RJ3IA7KCSALPE1', '_blank');
  };

  return (
    <>
      {/* Mobile Sticky Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-red-700 p-4 shadow-2xl">
        <button
          onClick={handleSpecialistClick}
          className="w-full bg-white text-red-600 font-bold py-4 rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          Conversar Agora
        </button>
      </div>

      {/* Desktop Sticky Footer */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40 space-y-4">
        <button
          onClick={handleSpecialistClick}
          className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="inline-block w-5 h-5 mr-2" />
          Falar com Especialista
        </button>
        
        <button
          onClick={onCODClick}
          className="block w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-xl transition-all duration-300"
        >
          <Info className="inline-block w-4 h-4 mr-2" />
          Ver Detalhes COD
        </button>
      </div>

      {/* Mobile padding to prevent content overlap */}
      <div className="md:hidden h-20"></div>
    </>
  );
};