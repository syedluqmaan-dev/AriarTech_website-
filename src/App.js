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

// Lazy load below-the-fold components for better initial load performance
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA'));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const sectionObserverRef = useRef(null);
  const mainRef = useRef(null);

  // Custom hooks for better separation of concerns
  useScrollAnimation();
  const { showScrollTop, scrollToTop } = useScrollToTop();

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';

    // Focus management for accessibility
    setTimeout(() => {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) modalContent.focus();
    }, 100);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';

    // Return focus to the element that opened the modal
    const modalTrigger = document.querySelector('[data-modal-trigger]:focus');
    if (modalTrigger) modalTrigger.focus();
  }, []);

  // Handle section visibility for active navigation using Intersection Observer
  useEffect(() => {
    const sections = ['hero', 'services', 'why', 'process', 'work', 'contact'];

    if (sectionObserverRef.current) {
      sectionObserverRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = '';

        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = sectionId;
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

    sectionObserverRef.current = observer;

    return () => {
      if (sectionObserverRef.current) {
        sectionObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="App">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="skip-to-main"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
          mainRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Skip to main content
      </a>

      <Header onOpenModal={handleOpenModal} activeSection={activeSection} />

      <main id="main-content" ref={mainRef} tabIndex="-1">
        <Hero onOpenModal={handleOpenModal} />
        <Services />
        <WhyAriar />

        {/* Lazy loaded components with loading fallback */}
        <Suspense fallback={<LoadingSpinner />}>
          <Projects onOpenModal={handleOpenModal} />
          <Process />
          <FinalCTA onOpenModal={handleOpenModal} />
          <Contact />
        </Suspense>
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Scroll to Top Button */}
      {showScrollTop && <ScrollToTop onClick={scrollToTop} />}
    </div>
  );
}

export default App;
