import React, { useState, useEffect } from 'react';
import { Droplets, Clock, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: Droplets,
    title: "Aplicação Sublingual",
    description: "Borrifar sob a língua para absorção rápida e eficaz",
    animation: "animate-bounce"
  },
  {
    icon: Clock,
    title: "Ativação em 15min",
    description: "Absorção direta na corrente sanguínea",
    animation: "animate-spin"
  },
  {
    icon: Zap,
    title: "Performance 4-6h",
    description: "Efeito prolongado e confiável",
    animation: "animate-pulse"
  }
];

export const HowItWorks: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextStep = () => {
    setIsAutoPlaying(false);
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setIsAutoPlaying(false);
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como <span className="text-red-500">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologia avançada de absorção sublingual para resultados rápidos e eficazes
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto">
                    <Icon className={`w-10 h-10 text-white ${step.animation}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
                <div className="mt-6 text-red-500 font-bold text-lg">
                  Passo {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto">
                  {React.createElement(steps[currentStep].icon, {
                    className: `w-10 h-10 text-white ${steps[currentStep].animation}`
                  })}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {steps[currentStep].description}
              </p>
              <div className="text-red-500 font-bold text-lg">
                Passo {currentStep + 1} de {steps.length}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevStep}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextStep}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentStep(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};