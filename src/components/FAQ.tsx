import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o pagamento na entrega?",
    answer: "Você não paga nada antecipado! Fazemos a entrega em sua casa e você paga apenas quando receber o produto. Aceitamos dinheiro, cartão de débito/crédito ou PIX no momento da entrega."
  },
  {
    question: "Posso remarcar o horário da entrega?",
    answer: "Sim! Você pode remarcar quantas vezes precisar. Nossa equipe de entrega é flexível e trabalha para se adequar à sua agenda. Basta entrar em contato conosco."
  },
  {
    question: "A consulta com o especialista é confidencial?",
    answer: "Absolutamente! Todas as consultas são 100% confidenciais e sigilosas. Nossos especialistas são profissionais qualificados que respeitam totalmente sua privacidade."
  },
  {
    question: "Quanto tempo demora para fazer efeito?",
    answer: "O Estimulante começa a fazer efeito em aproximadamente 15 minutos após a aplicação sublingual, com duração de 4 a 6 horas."
  },
  {
    question: "A embalagem é discreta?",
    answer: "Sim! A embalagem é completamente discreta, sem identificação do produto. Ninguém saberá o que você está recebendo, garantindo total privacidade."
  },
  {
    question: "Posso usar com outros medicamentos?",
    answer: "É importante consultar nosso especialista sobre medicamentos que você já usa. Durante a consulta, ele avaliará possíveis interações e orientará sobre o uso seguro."
  },
  {
    question: "Tem garantia de satisfação?",
    answer: "Sim! Oferecemos garantia total de satisfação. Se não ficar satisfeito com os resultados, devolvemos seu dinheiro sem questionamentos."
  },
  {
    question: "Como sei se é original?",
    answer: "Todos os nossos produtos são 100% originais e vêm com certificado de autenticidade. Trabalhamos apenas com fornecedores oficiais e licenciados."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-red-500">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tire todas suas dúvidas sobre pagamento na entrega e nosso produto
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-red-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-red-500 flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-white text-lg mb-6">
              Fale diretamente com nossos especialistas
            </p>
            <button 
              onClick={() => window.open('https://wa.me/message/RJ3IA7KCSALPE1', '_blank')}
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Conversar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};