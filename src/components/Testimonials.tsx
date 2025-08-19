import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos M.",
    age: "42 anos",
    location: "São Paulo",
    text: "Paguei só quando chegou! O especialista me ajudou a escolher a dosagem certa. Resultado incrível em 15 minutos.",
    rating: 5,
    verified: true
  },
  {
    name: "Roberto S.",
    age: "38 anos", 
    location: "Rio de Janeiro",
    text: "Especialista ajudou na dosagem e explicou tudo. Entrega super discreta, minha esposa nem desconfiou.",
    rating: 5,
    verified: true
  },
  {
    name: "Fernando L.",
    age: "45 anos",
    location: "Belo Horizonte", 
    text: "Melhor investimento que fiz! Pagamento na entrega me deu total segurança. Recomendo 100%.",
    rating: 5,
    verified: true
  },
  {
    name: "André P.",
    age: "35 anos",
    location: "Brasília",
    text: "Consultoria personalizada fez toda diferença. Produto chegou rápido e funcionou perfeitamente.",
    rating: 5,
    verified: true
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos <span className="text-red-500">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milhares de homens já transformaram suas vidas com o Tadalamax
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.age} • {testimonial.location}</p>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center bg-red-600 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-white mr-1" />
                    <span className="text-white text-sm font-bold">Verificado</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-300 text-lg italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 border border-red-500/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].age} • {testimonials[currentIndex].location}</p>
                </div>
                {testimonials[currentIndex].verified && (
                  <div className="flex items-center bg-red-600 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-white mr-1" />
                    <span className="text-white text-sm font-bold">Verificado</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-300 text-lg italic mb-6">
                "{testimonials[currentIndex].text}"
              </blockquote>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};