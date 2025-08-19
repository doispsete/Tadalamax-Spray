import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { SpecialistGateway } from './components/SpecialistGateway';
import { DeliveryShowcase } from './components/DeliveryShowcase';
import { Testimonials } from './components/Testimonials';
import { TechnologyPillars } from './components/TechnologyPillars';
import { FAQ } from './components/FAQ';
import { StickyFooter } from './components/StickyFooter';
import { CODModal } from './components/CODModal';

function App() {
  const [isSpecialistModalOpen, setIsSpecialistModalOpen] = useState(false);
  const [isCODModalOpen, setIsCODModalOpen] = useState(false);
  const [showStickyFooter, setShowStickyFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky footer after scrolling past hero section
      setShowStickyFooter(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSpecialistModal = () => {
    window.open('https://wa.me/message/RJ3IA7KCSALPE1', '_blank');
  };

  const closeSpecialistModal = () => {
    setIsSpecialistModalOpen(false);
  };

  const openCODModal = () => {
    setIsCODModalOpen(true);
  };

  const closeCODModal = () => {
    setIsCODModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onSpecialistClick={openSpecialistModal} />
      <HowItWorks />
      <DeliveryShowcase />
      <Testimonials />
      <TechnologyPillars />
      <FAQ />
      
      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="mb-2"></div>
            </div>
            
            <div className="text-gray-400 text-sm space-y-2">
              <p>* Resultados podem variar de pessoa para pessoa</p>
              <p>* O produto é um Estimulante Masculino e não um medicamento</p>
              <p className="mt-4">© 2025 Tadalamax. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SpecialistGateway 
        isOpen={isSpecialistModalOpen} 
        onClose={closeSpecialistModal} 
      />
      
      <CODModal 
        isOpen={isCODModalOpen} 
        onClose={closeCODModal} 
      />

      {/* Sticky Footer */}
      {showStickyFooter && (
        <StickyFooter 
          onSpecialistClick={openSpecialistModal}
          onCODClick={openCODModal}
        />
      )}
    </div>
  );
}

export default App;