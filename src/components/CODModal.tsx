import React from 'react';
import { X, Shield, Truck, CheckCircle, Clock, Package } from 'lucide-react';

interface CODModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CODModal: React.FC<CODModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl p-8 max-w-2xl w-full mx-4 border border-green-500/20 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">
            PAGAMENTO NA ENTREGA
          </h3>
          <p className="text-green-400 text-lg font-bold">
            🔒 100% Seguro • Zero Risco
          </p>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">Como Funciona</h4>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h5 className="text-white font-bold text-lg mb-2">Faça seu Pedido</h5>
                <p className="text-gray-300">Converse com nosso especialista e defina seu plano personalizado. Sem pagamento antecipado!</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h5 className="text-white font-bold text-lg mb-2">Preparamos sua Entrega</h5>
                <p className="text-gray-300">Embalagem 100% discreta e agendamento no horário que você preferir.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h5 className="text-white font-bold text-lg mb-2">Receba e Pague</h5>
                <p className="text-gray-300">Você só paga quando o produto estiver em suas mãos. Dinheiro, cartão ou PIX.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border border-green-500/20">
            <Shield className="w-8 h-8 text-green-500 mb-3" />
            <h5 className="text-white font-bold mb-2">Zero Risco</h5>
            <p className="text-gray-300 text-sm">Sem pagamento antecipado. Você só paga se receber o produto.</p>
          </div>

          <div className="bg-black rounded-xl p-6 border border-green-500/20">
            <Clock className="w-8 h-8 text-green-500 mb-3" />
            <h5 className="text-white font-bold mb-2">Flexibilidade Total</h5>
            <p className="text-gray-300 text-sm">Remarque quantas vezes precisar. Sem taxas extras.</p>
          </div>

          <div className="bg-black rounded-xl p-6 border border-green-500/20">
            <Package className="w-8 h-8 text-green-500 mb-3" />
            <h5 className="text-white font-bold mb-2">Discrição Garantida</h5>
            <p className="text-gray-300 text-sm">Embalagem neutra. Ninguém saberá o que você está recebendo.</p>
          </div>

          <div className="bg-black rounded-xl p-6 border border-green-500/20">
            <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
            <h5 className="text-white font-bold mb-2">Múltiplas Formas</h5>
            <p className="text-gray-300 text-sm">Pague com dinheiro, cartão de débito/crédito ou PIX.</p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-center mb-6">
          <h4 className="text-white font-bold text-xl mb-2">
            ✅ GARANTIA DE SATISFAÇÃO
          </h4>
          <p className="text-white">
            Se não ficar satisfeito, devolvemos 100% do seu dinheiro
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-500">50K+</div>
            <div className="text-gray-300 text-sm">Entregas Realizadas</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-500">99.8%</div>
            <div className="text-gray-300 text-sm">Satisfação</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-500">24h</div>
            <div className="text-gray-300 text-sm">Entrega Rápida</div>
          </div>
        </div>
      </div>
    </div>
  );
};