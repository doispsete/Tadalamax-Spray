import React from 'react';
import { Zap, Target, Shield, Clock } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: "Absorção Sublingual",
    description: "Tecnologia avançada que permite absorção direta na corrente sanguínea, evitando o sistema digestivo para máxima eficácia.",
    benefits: ["Absorção 3x mais rápida", "Maior biodisponibilidade", "Efeito mais potente"]
  },
  {
    icon: Zap,
    title: "Ação Rápida",
    description: "Fórmula concentrada que começa a agir em apenas 15 minutos, proporcionando resultados quando você mais precisa.",
    benefits: ["Efeito em 15 minutos", "Duração de 4-6 horas", "Resultados consistentes"]
  },
  {
    icon: Shield,
    title: "Segurança Comprovada",
    description: "Produto testado e aprovado, desenvolvido com os mais altos padrões de qualidade e segurança.",
    benefits: ["Testado clinicamente", "Sem efeitos colaterais", "Aprovado clinicamente"]
  },
  {
    icon: Clock,
    title: "Discrição Total",
    description: "Aplicação discreta e rápida, sem necessidade de planejamento antecipado ou constrangimento.",
    benefits: ["Uso discreto", "Sem odor ou sabor", "Embalagem compacta"]
  }
];

export const TechnologyPillars: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnologia <span className="text-red-500">Avançada</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Inovação científica para resultados superiores e confiáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{pillar.description}</p>
                    
                    <div className="space-y-2">
                      {pillar.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          <span className="text-white font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scientific backing */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              VALORES
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Nossos acompanhamentos começam a partir de R$27,98 em 5x no cartão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
