import React from 'react';
import { Truck, CheckCircle, Clock, Package, Shield } from 'lucide-react';

export const DeliveryShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entrega <span className="text-red-500">Segura</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pagamento somente na entrega - Sua segurança é nossa prioridade
          </p>
        </div>

        {/* Animated delivery process */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-8 md:space-x-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <p className="text-white font-bold">Saiu para entrega</p>
            </div>
            
            <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-red-600 to-green-600"></div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <p className="text-white font-bold">Entregue com sucesso</p>
            </div>
          </div>
        </div>

        {/* Key messages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-black rounded-2xl p-6 text-center border border-red-500/20 hover:border-red-500/40 transition-colors">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">SEM Pagamento Antecipado</h3>
            <p className="text-gray-300">Zero risco financeiro para você</p>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center border border-red-500/20 hover:border-red-500/40 transition-colors">
            <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Escolha o Horário</h3>
            <p className="text-gray-300">Entrega no seu tempo</p>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center border border-red-500/20 hover:border-red-500/40 transition-colors">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Pague Quando Receber</h3>
            <p className="text-gray-300">Dinheiro, cartão ou PIX</p>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center border border-red-500/20 hover:border-red-500/40 transition-colors">
            <Package className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Embalagem Discreta</h3>
            <p className="text-gray-300">Sua privacidade protegida</p>
          </div>
        </div>

        {/* Trust guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔒 GARANTIA TOTAL DE SEGURANÇA
            </h3>
            <p className="text-white text-lg">
              Milhares de entregas realizadas com sucesso.<br />
              Sua confiança é nosso maior patrimônio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
