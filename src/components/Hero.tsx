import React, { useState } from 'react';
import { MessageCircle, Shield, Clock, Zap } from 'lucide-react';

interface HeroProps {
  onSpecialistClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSpecialistClick }) => {
  const [showCODTooltip, setShowCODTooltip] = useState(false);

  const handleSpecialistClick = () => {
    window.open('https://wa.me/message/RJ3IA7KCSALPE1', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8"></div>

            {/* Main headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ATIVAÇÃO DE
              <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                PERFORMANCE
              </span>
              <span className="block">INSTANTÂNEA</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Tecnologia discreta em spray - Confiança em 15 minutos
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-white text-sm">15 min ativação</span>
              </div>
              <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-white text-sm">4-6h duração</span>
              </div>
              <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-white text-sm">100% discreto</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <button
                onClick={handleSpecialistClick}
                className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 animate-pulse"
              >
                <MessageCircle className="inline-block w-6 h-6 mr-3" />
                Conversar com Especialista
                <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* COD Trust Badge */}
            <div className="relative inline-block">
              <div 
                className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg cursor-pointer hover:bg-green-500 transition-colors animate-pulse"
                onMouseEnter={() => setShowCODTooltip(true)}
                onMouseLeave={() => setShowCODTooltip(false)}
              >
                🔒 PAGUE SOMENTE NA ENTREGA
              </div>
              
              {showCODTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white p-4 rounded-lg shadow-xl w-64 z-20">
                  <div className="text-sm">
                    <p className="font-bold mb-2">Como funciona:</p>
                    <ul className="space-y-1">
                      <li>• Sem pagamento antecipado</li>
                      <li>• Entrega em casa</li>
                      <li>• Pague apenas quando receber</li>
                      <li>• Embalagem 100% discreta</li>
                    </ul>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/Spray Tadala MAX 30ML.png"
                alt="Tadalamax Spray 30ML"
                className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};