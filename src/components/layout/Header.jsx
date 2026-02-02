import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = memo(({ onOpenModal, activeSection = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuBtnRef = useRef(null);

  const navItems = [
    { id: 'why', label: 'Why Us' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const firstFocusable = document.querySelector('.mobile-menu-close');
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setTimeout(() => {
      mobileMenuBtnRef.current?.focus();
    }, 100);
  }, []);

  const handleNavClick = useCallback((id) => {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = isScrolled ? 65 : 70;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, [closeMenu, isScrolled]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenModal = useCallback(() => {
    closeMenu();
    setTimeout(onOpenModal, 150);
  }, [closeMenu, onOpenModal]);

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(229, 231, 235, 0.6);
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
        }

        .header.scrolled {
          height: 65px;
          padding: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 0 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
          transition: padding 0.3s ease;
        }

        .header.scrolled .header-content {
          padding: 0 1.5rem;
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 0 1rem;
          }
        }

        .logo-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.75rem;
          transition: all 0.2s ease;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-button:hover {
          background: rgba(10, 37, 64, 0.04);
          transform: translateY(-1px);
        }

        .logo-symbol {
          position: relative;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0A2540 0%, #14B8A6 100%);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .logo-symbol.scrolled-symbol {
          width: 38px;
          height: 38px;
        }

        .logo-letter {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 1.75rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo-symbol::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.25) 100%);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-align: left;
        }

        .logo-main {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0A2540;
          letter-spacing: -0.01em;
          transition: all 0.3s ease;
        }

        .logo-main.scrolled-logo {
          font-size: 1.4rem;
        }

        .logo-sub {
          font-size: 0.7rem;
          font-weight: 600;
          color: #14B8A6;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 0.1rem;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .logo-sub {
            font-size: 0.65rem;
            letter-spacing: 0.08em;
          }
        }

        @media (max-width: 768px) {
          .logo-main {
            font-size: 1.3rem;
          }
          
          .logo-sub {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .logo-symbol {
            width: 38px;
            height: 38px;
          }
          
          .logo-letter {
            font-size: 1.5rem;
          }
          
          .logo-main {
            font-size: 1.1rem;
          }
          
          .logo-sub {
            font-size: 0.55rem;
          }
        }

        @media (max-width: 375px) {
          .logo-main {
            font-size: 1rem;
          }
          
          .logo-sub {
            font-size: 0.5rem;
          }
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
          margin: 0 2rem;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          position: relative;
          background: none;
          border: none;
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #4B5563;
          cursor: pointer;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link:focus {
          background: rgba(20, 184, 166, 0.08);
          color: #14B8A6;
          outline: none;
        }

        .nav-link.active {
          background: #14B8A6;
          color: white;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.2);
        }

        .cta-container {
          display: none;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .cta-container {
            display: flex;
          }
        }

        .trust-signal {
          font-size: 0.7rem;
          color: #6B7280;
          opacity: 0.8;
          white-space: nowrap;
          text-align: right;
          display: none;
        }

        @media (min-width: 1024px) {
          .trust-signal {
            display: block;
          }
        }

        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.5rem;
          border-radius: 0.75rem;
          font-family: 'Inter', -apple-system, sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          min-height: 44px;
          background: linear-gradient(135deg, #14B8A6 0%, #0A2540 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(20, 184, 166, 0.25);
          position: relative;
          overflow: hidden;
        }

        .cta-button.scrolled-cta {
          background: #14B8A6;
          box-shadow: 0 4px 20px rgba(20, 184, 166, 0.35);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0A2540 0%, #14B8A6 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button:hover::before,
        .cta-button:focus::before {
          opacity: 1;
        }

        .cta-button span {
          position: relative;
          z-index: 1;
        }

        .cta-button:hover,
        .cta-button:focus {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(20, 184, 166, 0.4);
          outline: none;
        }

        .mobile-menu-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          z-index: 1001;
          transition: background 0.2s ease;
        }

        @media (min-width: 1024px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .mobile-menu-btn:hover,
        .mobile-menu-btn:focus {
          background: rgba(10, 37, 64, 0.05);
          outline: none;
        }

        .menu-line {
          width: 22px;
          height: 2px;
          background: #0A2540;
          margin: 2.5px 0;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .mobile-menu-btn[aria-expanded="true"] .menu-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-btn[aria-expanded="true"] .menu-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn[aria-expanded="true"] .menu-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 999;
        }

        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 320px;
          height: 100%;
          background: white;
          z-index: 1000;
          box-shadow: -4px 0 25px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 640px) {
          .mobile-menu-panel {
            max-width: 280px;
          }
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1.5rem;
          overflow-y: auto;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #E5E7EB;
        }

        .mobile-menu-title {
          font-size: 1.25rem;
          color: #0A2540;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 700;
        }

        .mobile-menu-close {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F3F4F6;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          color: #4B5563;
          transition: all 0.2s ease;
        }

        .mobile-menu-close:hover,
        .mobile-menu-close:focus {
          background: #14B8A6;
          color: white;
          outline: none;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          margin-bottom: 1rem;
        }

        .mobile-nav-link {
          width: 100%;
          padding: 1rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1rem;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          border-radius: 0.75rem;
          transition: all 0.2s ease;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:focus {
          background: rgba(20, 184, 166, 0.08);
          color: #14B8A6;
          outline: none;
        }

        .mobile-nav-link.active {
          background: #14B8A6;
          color: white;
          font-weight: 600;
        }

        .mobile-cta-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #14B8A6 0%, #0A2540 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .mobile-cta-btn:hover,
        .mobile-cta-btn:focus {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(20, 184, 166, 0.3);
          outline: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .header,
          .logo-button,
          .nav-link,
          .cta-button,
          .mobile-menu-btn,
          .mobile-menu-close,
          .mobile-nav-link,
          .mobile-cta-btn {
            transition: none !important;
          }
          
          .logo-button:hover,
          .cta-button:hover,
          .mobile-cta-btn:hover {
            transform: none !important;
          }
          
          .motion-div {
            animation: none !important;
            transition: none !important;
          }
          
          .menu-line {
            transition: none !important;
          }
        }
      `}</style>

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        role="banner"
      >
        <div className="header-content">
          <button
            onClick={scrollToTop}
            className="logo-button"
            aria-label="Ariar Technologies - Navigate to homepage"
          >
            <div className={`logo-symbol ${isScrolled ? 'scrolled-symbol' : ''}`}>
              <span className="logo-letter">A</span>
            </div>
            <div className="logo-text">
              <span className={`logo-main ${isScrolled ? 'scrolled-logo' : ''}`}>
                Ariar Technologies
              </span>
              <span className="logo-sub">
                Web • Mobile • SaaS Solutions
              </span>
            </div>
          </button>

          <nav 
            className="desktop-nav"
            aria-label="Main navigation"
            role="navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                aria-label={`Navigate to ${item.label}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="cta-container">
            <div className="trust-signal">
              ⭐ Trusted by startups & local businesses
            </div>
            <button 
              onClick={onOpenModal} 
              className={`cta-button ${isScrolled ? 'scrolled-cta' : ''}`}
              aria-label="Get a free consultation"
            >
              Get Free Consultation
            </button>
          </div>

          <button
            ref={mobileMenuBtnRef}
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="mobile-menu-backdrop"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="mobile-menu-panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="mobile-menu-content">
                <div className="mobile-menu-header">
                  <h2 className="mobile-menu-title">Navigation</h2>
                  <button
                    onClick={closeMenu}
                    className="mobile-menu-close"
                    aria-label="Close mobile menu"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <nav className="mobile-nav-links" aria-label="Mobile navigation">
                  {navItems.map((item, index) => (  // ✅ FIXED: Changed xitem to item
                    <motion.button
                      key={item.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                      aria-label={`Navigate to ${item.label}`}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                <button
                  onClick={handleOpenModal}
                  className="mobile-cta-btn"
                  aria-label="Get a free consultation"
                >
                  Get Free Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = 'Header';
export default Header;