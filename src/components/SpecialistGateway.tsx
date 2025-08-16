import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Users, Shield, Phone } from 'lucide-react';

interface SpecialistGatewayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialistGateway: React.FC<SpecialistGatewayProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: ''
  });
  const [onlineCount, setOnlineCount] = useState(3);

  useEffect(() => {
    // Simulate live counter
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return Math.max(2, Math.min(5, newCount));
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.whatsapp) {
      // Redirect to WhatsApp
      window.open('https://wa.me/message/RJ3IA7KCSALPE1', '_blank');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-red-500/20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            PLANO PERSONALIZADO DE
            <span className="block text-red-500">PERFORMANCE</span>
          </h3>
          
          {/* Live counter */}
          <div className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            <Users className="w-4 h-4 mr-2" />
            {onlineCount} especialistas online agora
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">
              Seu nome
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              WhatsApp
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-red-500 focus:outline-none transition-colors"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          {/* COD Badge */}
          <div className="bg-green-600 text-white p-4 rounded-lg text-center">
            <Shield className="w-6 h-6 mx-auto mb-2" />
            <p className="font-bold">Pagamento só quando receber</p>
            <p className="text-sm opacity-90">Sem risco, sem pegadinha</p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="inline-block w-5 h-5 mr-2" />
            Falar com Especialista Agora
          </button>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>🔒 Consulta 100% confidencial</p>
          <p>⚡ Resposta em até 2 minutos</p>
        </div>
      </div>
    </div>
  );
};