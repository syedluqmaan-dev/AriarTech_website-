import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';


const Header = memo(({ onOpenModal, activeSection = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const mobileMenuBtnRef = useRef(null);

  const location = useLocation();
const navigate = useNavigate();




  const navItems = [
    { id: "why", label: "Why Us" },
    { id: "services", label: "Services" },
    { id: "work", label: "Projects" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" }
  ];

  // Handle logo click to refresh page
  const handleLogoClick = useCallback(() => {
    document.documentElement.style.opacity = "0.9";
    setTimeout(() => {
      window.location.reload();
    }, 150);
  }, []);

  // Close mobile menu
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setTimeout(() => {
      mobileMenuBtnRef.current?.focus();
    }, 100);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle ESC key and body scroll lock
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };

    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, closeMenu]);

  // Handle navigation click
  const handleNavClick = useCallback(
  (sectionId) => {
    closeMenu();

    if (location.pathname === "/") {
      // Scroll normally if already on homepage
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = isScrolled ? 70 : 80;
          const top =
            el.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Navigate to homepage and scroll
      navigate("/", { state: { scrollTo: sectionId } });
    }
  },
  [closeMenu, isScrolled, location.pathname, navigate]
);


  return (
    <>
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #0A2540 0%, #14B8A6 100%);
          --secondary-gradient: linear-gradient(135deg, #14B8A6 0%, #0A2540 100%);
          --accent-color: #14B8A6;
          --dark-color: #0A2540;
          --text-primary: #1F2937;
          --text-secondary: #6B7280;
          --bg-primary: rgba(255, 255, 255, 0.98);
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
          --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Header Styles - Perfect Size */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background: var(--bg-primary);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          transition: var(--transition-base);
          border-bottom: 1px solid rgba(229, 231, 235, 0.6);
          box-shadow: var(--shadow-sm);
        }

        .header.scrolled {
          height: 65px;
          box-shadow: var(--shadow-md);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 0 clamp(1rem, 4vw, 3rem);
          max-width: 1440px;
          margin: 0 auto;
          transition: padding 0.3s ease;
        }

        /* Logo Styles */
        .logo-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.75rem;
          transition: var(--transition-base);
          text-decoration: none;
          flex-shrink: 0;
          outline: none;
          position: relative;
          overflow: hidden;
        }

        .logo-button:hover {
          background: rgba(10, 37, 64, 0.04);
          transform: translateY(-1px);
        }

        .logo-button:hover .logo-symbol {
          transform: rotate(15deg) scale(1.05);
        }

        .logo-symbol {
          position: relative;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-gradient);
          border-radius: 12px;
          overflow: hidden;
          transition: var(--transition-base);
        }

        .header.scrolled .logo-symbol {
          width: 38px;
          height: 38px;
        }

        .logo-symbol::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 50%
          );
          transform: rotate(30deg);
        }

        .logo-letter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .logo-button:hover .logo-letter {
          transform: scale(1.1);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          text-align: left;
        }

        .logo-main {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 700;
          color: var(--dark-color);
          letter-spacing: -0.01em;
          transition: var(--transition-base);
          white-space: nowrap;
        }

        .header.scrolled .logo-main {
          font-size: clamp(1rem, 1.8vw, 1.3rem);
        }

        .logo-sub {
          font-size: clamp(0.5rem, 1vw, 0.7rem);
          font-weight: 600;
          color: var(--accent-color);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 0.1rem;
          white-space: nowrap;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0.5rem;
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
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          transition: var(--transition-base);
          white-space: nowrap;
          outline: none;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: var(--transition-base);
          transform: translateX(-50%);
        }

        .nav-link:hover::before,
        .nav-link:focus::before {
          width: 70%;
        }

        .nav-link:hover,
        .nav-link:focus {
          color: var(--accent-color);
          outline: none;
        }

        .nav-link.active {
          background: rgba(20, 184, 166, 0.1);
          color: var(--accent-color);
          font-weight: 600;
        }

        .nav-link.active::before {
          width: 100%;
        }

        /* ===== NEW CTA BUTTON - HIDDEN ON MOBILE ===== */
        .header-cta {
          display: none; /* Hidden on mobile by default */
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.2rem;
          border-radius: 0.75rem;
          font-family: 'Inter', -apple-system, sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          white-space: nowrap;
          min-height: 40px;
          background: var(--secondary-gradient);
          color: white;
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.25);
          position: relative;
          overflow: hidden;
          outline: none;
          letter-spacing: 0.02em;
          margin-left: 0.5rem;
        }

        /* Show on tablet and desktop */
        @media (min-width: 768px) {
          .header-cta {
            display: flex;
          }
        }

        /* Responsive sizing for larger screens */
        @media (min-width: 1024px) {
          .header-cta {
            padding: 0.8rem 2rem;
            font-size: 1.05rem;
            min-height: 48px;
            margin-left: 1rem;
          }
        }

        @media (min-width: 1280px) {
          .header-cta {
            padding: 0.85rem 2.2rem;
            font-size: 1.1rem;
            min-height: 50px;
          }
        }

        @media (min-width: 1536px) {
          .header-cta {
            padding: 0.9rem 2.4rem;
            font-size: 1.15rem;
            min-height: 52px;
          }
        }

        /* Shine effect */
        .header-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s ease;
        }

        .header-cta:hover::before,
        .header-cta:focus::before {
          left: 100%;
        }

        .header-cta:hover,
        .header-cta:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20, 184, 166, 0.4);
          outline: none;
        }

        .header-cta:active {
          transform: translateY(0);
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
        }

        /* Mobile Menu Button */
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
          transition: var(--transition-base);
          outline: none;
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
          background: var(--dark-color);
          margin: 2.5px 0;
          border-radius: 2px;
          transition: var(--transition-base);
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

        /* Mobile Menu Overlay */
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
          max-width: min(320px, 90vw);
          height: 100%;
          background: white;
          z-index: 1000;
          box-shadow: -4px 0 25px rgba(0, 0, 0, 0.15);
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
          color: var(--dark-color);
          font-family: 'Inter', sans-serif;
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
          color: var(--text-secondary);
          transition: var(--transition-base);
          outline: none;
        }

        .mobile-menu-close:hover,
        .mobile-menu-close:focus {
          background: var(--accent-color);
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
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 500;
          color: var(--text-primary);
          cursor: pointer;
          border-radius: 0.75rem;
          transition: var(--transition-base);
          font-family: 'Inter', sans-serif;
          outline: none;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:focus {
          background: rgba(20, 184, 166, 0.08);
          color: var(--accent-color);
          outline: none;
        }

        .mobile-nav-link.active {
          background: var(--accent-color);
          color: white;
          font-weight: 600;
        }

        .mobile-cta-btn {
          width: 100%;
          padding: 1rem;
          background: var(--secondary-gradient);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-base);
          font-family: 'Inter', sans-serif;
          outline: none;
        }

        .mobile-cta-btn:hover,
        .mobile-cta-btn:focus {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(20, 184, 166, 0.3);
          outline: none;
        }

        /* Remove old CTA button styles */
        .cta-button {
          display: none;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Header */}
      <motion.header
        className={`header ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="header-content">
          {/* Logo with refresh functionality */}
          <button
            className="logo-button"
            onClick={handleLogoClick}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            aria-label="Ariar Technologies - Refresh page"
          >
            <div className="logo-symbol">
              <motion.span
                className="logo-letter"
                animate={{ rotate: isLogoHovered ? [0, 360] : 0 }}
                transition={{ duration: 0.5 }}
              >
                A
              </motion.span>
            </div>
            <div className="logo-text">
              <span className="logo-main">Ariar Technologies</span>
              <span className="logo-sub">Innovate • Build • Scale</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ===== CTA BUTTON - HIDDEN ON MOBILE, VISIBLE ON TABLET/DESKTOP ===== */}
          <button
            className="header-cta"
            onClick={onOpenModal}
            aria-label="Get free consultation"
          >
            <span>Get Free Consultation</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuBtnRef}
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            aria-controls="mobile-menu-panel"
          >
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              id="mobile-menu-panel"
              className="mobile-menu-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-content">
                <div className="mobile-menu-header">
                  <h2 className="mobile-menu-title">Menu</h2>
                  <button
                    className="mobile-menu-close"
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                <div className="mobile-nav-links">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className={`mobile-nav-link ${
                        activeSection === item.id ? "active" : ""
                      }`}
                      onClick={() => handleNavClick(item.id)}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button
                  className="mobile-cta-btn"
                  onClick={() => {
                    closeMenu();
                    onOpenModal();
                  }}
                  aria-label="Get free consultation"
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

export default Header;