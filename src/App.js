import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';
import ScrollToTop from './components/common/ScrollToTop';
import Home from '../src/Pages/Home';
import ServicesPage from './Pages/ServicesPage';
import ProjectsPage from './Pages/ProjectsPage';
import ProcessPage from './Pages/ProcessPage';
import ContactPage from './Pages/ContactPage';



import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useScrollToTop } from './hooks/useScrollToTop';
import './App.css';

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

  // Intersection Observer for active section tracking (ONLY for homepage)
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
    <Router>
      <div className="App">
        {/* Skip to main content */}
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
          <Routes>
            <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
             <Route path="/services" element={<ServicesPage />} />
             <Route path="/projects" element={<ProjectsPage />} />
             <Route path="/process" element={<ProcessPage />} />
             <Route path="/contact" element={<ContactPage />} />


          </Routes>
        </main>

        <Footer />

        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

        {showScrollTop && <ScrollToTop onClick={scrollToTop} />}
      </div>
    </Router>
  );
}

export default App;
