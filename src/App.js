import React, { useState, useEffect, useCallback, lazy, Suspense, useRef } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyAriar from './components/sections/WhyAriar';
import Process from './components/sections/Process';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useScrollToTop } from './hooks/useScrollToTop';
import './App.css';

// Lazy load below-the-fold components
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA'));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mainRef = useRef(null);
  const observerRef = useRef(null);

  useScrollAnimation();
  const { showScrollTop, scrollToTop } = useScrollToTop();

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const modalContent = document.querySelector('[role="dialog"]');
      if (modalContent) modalContent.focus();
    }, 100);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = '';

    const modalTrigger = document.querySelector('[data-modal-trigger]');
    if (modalTrigger) modalTrigger.focus();
  }, []);

  const handleSkipToMain = useCallback((e) => {
    e.preventDefault();
    if (mainRef.current) {
      mainRef.current.focus();
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sections = ['hero', 'services', 'why', 'process', 'work', 'contact'];

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = '';

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="App">
      {/* Skip to main content - Accessible, hidden until focused */}
      <a
        href="#main-content"
        className="skip-to-main"
        onClick={handleSkipToMain}
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      <Header onOpenModal={handleOpenModal} activeSection={activeSection} />

      <main 
        id="main-content" 
        ref={mainRef} 
        tabIndex={-1}
        aria-label="Main content"
      >
        <Hero onOpenModal={handleOpenModal} />
        <Services />
        <WhyAriar />

        <Suspense fallback={<LoadingSpinner />}>
          <Projects onOpenModal={handleOpenModal} />
          <Process />
          <FinalCTA onOpenModal={handleOpenModal} />
          <Contact />
        </Suspense>
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

      {showScrollTop && <ScrollToTop onClick={scrollToTop} />}
    </div>
  );
}

export default App;