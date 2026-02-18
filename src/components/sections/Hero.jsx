import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Hero = ({ onOpenModal }) => {
  const handleScrollToWork = useCallback(() => {
    const workSection = document.getElementById('work');
    if (workSection) {
      const headerHeight = 70;
      const scrollPosition = workSection.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleKeyDown = useCallback((event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }, []);

  return (
    <>
      <style>{`
        /* ===== HERO SECTION - 100% INDEPENDENT ===== */
        
        /* === HERO-SPECIFIC CSS VARIABLES === */
        .hero-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --hero-primary: #000000;
          --hero-primary-light: #0A2540;
          --hero-accent: #14B8A6;
          --hero-accent-dark: #0d9488;
          --hero-background: #FFFFFF;
          --hero-background-alt: #F8FAFC;
          --hero-text: #1F2937;
          --hero-text-light: #6B7280;
          --hero-border: #E5E7EB;
          --hero-focus-ring: #14B8A6;
          --hero-overlay: rgba(255, 255, 255, 0.9);
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --hero-spacing-xs: 0.5rem;
          --hero-spacing-sm: 1rem;
          --hero-spacing-md: 1.5rem;
          --hero-spacing-lg: 2rem;
          --hero-spacing-xl: 3rem;
          --hero-spacing-2xl: 4rem;
          
          /* BORDERS & SHADOWS */
          --hero-border-radius: 0.75rem;
          --hero-border-radius-lg: 1rem;
          --hero-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --hero-transition-fast: 150ms ease;
          --hero-transition-base: 250ms ease;
          --hero-transition-slow: 350ms ease;
          
          /* SHADOWS */
          --hero-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
          --hero-shadow-base: 0 8px 30px rgba(0, 0, 0, 0.08);
          --hero-shadow-md: 0 12px 40px rgba(0, 0, 0, 0.1);
          --hero-shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.12);
          --hero-shadow-xl: 0 25px 80px rgba(0, 0, 0, 0.15);
          
          /* SECTION STYLES - OPTIMIZED */
          position: relative;
          padding: var(--hero-spacing-xl) 0 var(--hero-spacing-lg);
          min-height: calc(100vh - 80px);

          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, 
            var(--hero-background-alt) 0%, 
            var(--hero-background) 100%
          );
          isolation: isolate;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding: var(--hero-spacing-2xl) 0;
          }
        }

        /* Background Elements - Optimized */
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.25;
        }

        .hero-bg-circle-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, var(--hero-accent) 0%, rgba(20, 184, 166, 0.1) 100%);
          top: 5%;
          left: 2%;
        }

        .hero-bg-circle-2 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, rgba(10, 37, 64, 0.1) 0%, var(--hero-primary-light) 100%);
          bottom: 5%;
          right: 2%;
        }

        @media (min-width: 768px) {
          .hero-bg-circle-1 {
            width: 200px;
            height: 200px;
            top: 20%;
            left: 10%;
          }
          
          .hero-bg-circle-2 {
            width: 250px;
            height: 250px;
            bottom: 10%;
            right: 10%;
          }
        }

        /* Container - HERO SPECIFIC */
        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--hero-spacing-sm);
        }

        @media (min-width: 768px) {
          .hero-container {
            padding: 0 var(--hero-spacing-lg);
          }
        }

        /* Hero Content - OPTIMIZED */
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Badge - OPTIMIZED */
        .hero-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(20, 184, 166, 0.1);
          border: 1px solid rgba(20, 184, 166, 0.2);
          border-radius: var(--hero-border-radius-full);
          margin-bottom: var(--hero-spacing-sm);
          backdrop-filter: blur(8px);
        }

        @media (min-width: 768px) {
          .hero-badge {
            padding: var(--hero-spacing-xs) var(--hero-spacing-sm);
            margin-bottom: var(--hero-spacing-md);
          }
        }

        .hero-badge-text {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--hero-accent);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .hero-badge-text {
            font-size: 0.75rem;
          }
        }

        /* Title - OPTIMIZED */
        .hero-title {
          margin-bottom: var(--hero-spacing-sm);
          line-height: 1.1;
        }

        @media (min-width: 768px) {
          .hero-title {
            margin-bottom: var(--hero-spacing-md);
          }
        }

        .hero-title-line {
          display: block;
        }

        .hero-title-line:first-child {
          color: var(--hero-primary-light);
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(1.25rem, 5vw, 2rem);
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .hero-title-gradient {
          background: linear-gradient(135deg, var(--hero-accent) 0%, var(--hero-primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(1.35rem, 6vw, 2.5rem);
          font-weight: 700;
        }

        /* Subtitle - OPTIMIZED */
        .hero-subtitle {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(0.8125rem, 3.5vw, 1.125rem);
          color: var(--hero-text-light);
          line-height: 1.5;
          max-width: 600px;
          margin: 0 auto var(--hero-spacing-md);
          padding: 0 0.5rem;
        }

        @media (min-width: 768px) {
          .hero-subtitle {
            margin-bottom: var(--hero-spacing-xl);
            padding: 0;
          }
        }

        /* CTA Buttons - HERO SPECIFIC OPTIMIZED */
        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: var(--hero-spacing-xs);
          justify-content: center;
          align-items: center;
          margin-bottom: var(--hero-spacing-md);
        }

        @media (min-width: 640px) {
          .hero-cta {
            flex-direction: row;
            gap: var(--hero-spacing-sm);
          }
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.625rem 1.25rem;
          border-radius: var(--hero-border-radius);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          font-size: 0.8125rem;
          text-decoration: none;
          transition: all var(--hero-transition-base);
          border: 2px solid transparent;
          cursor: pointer;
          white-space: nowrap;
          min-height: 44px;
          width: 100%;
          max-width: 240px;
        }

        @media (min-width: 640px) {
          .hero-btn {
            padding: var(--hero-spacing-sm) var(--hero-spacing-lg);
            font-size: 0.875rem;
            width: auto;
            min-width: 160px;
          }
        }

        .hero-btn-primary {
          background: var(--hero-accent);
          color: var(--hero-background);
        }

        .hero-btn-primary:hover,
        .hero-btn-primary:focus {
          background: var(--hero-accent-dark);
          transform: translateY(-2px);
          box-shadow: var(--hero-shadow-lg);
          outline: none;
        }

        .hero-btn-primary:focus-visible {
          outline: 3px solid var(--hero-focus-ring);
          outline-offset: 2px;
        }

        .hero-btn-secondary {
          background: transparent;
          color: var(--hero-primary-light);
          border-color: var(--hero-border);
        }

        .hero-btn-secondary:hover,
        .hero-btn-secondary:focus {
          background: var(--hero-primary-light);
          color: var(--hero-background);
          border-color: var(--hero-primary-light);
          outline: none;
        }

        .hero-btn-secondary:focus-visible {
          outline: 3px solid var(--hero-focus-ring);
          outline-offset: 2px;
        }

        /* Trust Indicators - OPTIMIZED */
        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: var(--hero-spacing-md);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.75rem;
          color: var(--hero-text-light);
        }

        @media (min-width: 768px) {
          .hero-trust {
            gap: var(--hero-spacing-sm);
            margin-bottom: var(--hero-spacing-lg);
            font-size: 0.875rem;
          }
        }

        .hero-trust-item {
          padding: 0.25rem 0.5rem;
          position: relative;
        }

        .hero-trust-item:not(:last-child)::after {
          content: "•";
          position: absolute;
          right: calc(-1 * 0.5rem);
          color: var(--hero-border);
        }

        /* Device Preview - OPTIMIZED */
        .hero-preview {
          position: relative;
          max-width: 500px;
          margin: 0 auto var(--hero-spacing-md);
          height: 120px;
        }

        @media (min-width: 768px) {
          .hero-preview {
            height: 180px;
            margin-bottom: var(--hero-spacing-xl);
          }
        }

        .hero-device-mockup {
          position: absolute;
          border-radius: 8px;
          background: var(--hero-background);
          box-shadow: var(--hero-shadow-xl);
          overflow: hidden;
          border: 1px solid var(--hero-border);
        }

        .hero-device-mockup.desktop {
          width: 160px;
          height: 100px;
          bottom: 0;
          left: 50%;
          transform: translateX(-110%);
          z-index: 2;
        }

        .hero-device-mockup.mobile {
          width: 70px;
          height: 110px;
          top: 0;
          right: 50%;
          transform: translateX(110%);
          z-index: 3;
        }

        @media (min-width: 768px) {
          .hero-device-mockup.desktop {
            width: 250px;
            height: 140px;
          }
          
          .hero-device-mockup.mobile {
            width: 90px;
            height: 150px;
          }
        }

        .hero-device-screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            var(--hero-background-alt) 0%, 
            var(--hero-background) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-screen-content {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.6875rem;
          color: var(--hero-accent);
          font-weight: 600;
          text-align: center;
        }

        @media (min-width: 768px) {
          .hero-screen-content {
            font-size: 0.75rem;
          }
        }

        /* Scroll Indicator - OPTIMIZED */
        .hero-scroll-indicator {
          cursor: pointer;
          transition: opacity var(--hero-transition-fast);
          display: inline-block;
          padding: var(--hero-spacing-xs);
          border-radius: var(--hero-border-radius-full);
        }

        .hero-scroll-indicator:hover,
        .hero-scroll-indicator:focus {
          opacity: 0.7;
          background: var(--hero-overlay);
          outline: none;
        }

        .hero-scroll-indicator:focus-visible {
          outline: 3px solid var(--hero-focus-ring);
          outline-offset: 2px;
        }

        .hero-scroll-arrow {
          font-size: 1rem;
          color: var(--hero-accent);
          display: block;
          font-weight: bold;
        }

        @media (min-width: 768px) {
          .hero-scroll-arrow {
            font-size: 1.25rem;
          }
        }

        /* Small Mobile Devices (320px-400px) - EXTRA OPTIMIZED */
        @media (max-width: 400px) {
          .hero-section {
            padding: var(--hero-spacing-lg) 0 var(--hero-spacing-md);
          }
          
          .hero-title-line:first-child {
            font-size: 1.125rem;
          }
          
          .hero-title-gradient {
            font-size: 1.25rem;
          }
          
          .hero-subtitle {
            font-size: 0.75rem;
            margin-bottom: var(--hero-spacing-sm);
          }
          
          .hero-preview {
            height: 100px;
            margin-bottom: var(--hero-spacing-sm);
          }
          
          .hero-device-mockup.desktop {
            width: 140px;
            height: 85px;
          }
          
          .hero-device-mockup.mobile {
            width: 60px;
            height: 95px;
          }
          
          .hero-trust {
            font-size: 0.6875rem;
            gap: 0.5rem;
          }
          
          .hero-btn {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            max-width: 200px;
          }
          
          .hero-scroll-indicator {
            margin-top: 0.5rem;
          }
        }

        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          .hero-bg-circle,
          .hero-device-mockup,
          .hero-scroll-arrow {
            animation: none !important;
          }
          
          .hero-btn-primary:hover,
          .hero-btn-secondary:hover,
          .hero-btn-primary:focus,
          .hero-btn-secondary:focus {
            transform: none;
          }
        }

        /* Print Styles */
        @media print {
          .hero-section {
            min-height: auto;
            padding: 2rem 0 !important;
            background: none !important;
          }
          
          .hero-background,
          .hero-preview,
          .hero-scroll-indicator {
            display: none !important;
          }
          
          .hero-title-gradient {
            -webkit-text-fill-color: var(--hero-primary) !important;
            background: none !important;
          }
          
          .hero-btn-primary,
          .hero-btn-secondary {
            display: none !important;
          }
          
          .hero-badge {
            border: 1px solid var(--hero-text-light) !important;
            background: none !important;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .hero-btn-primary {
            border: 2px solid currentColor;
          }
          
          .hero-title-gradient {
            -webkit-text-fill-color: var(--hero-primary);
            background: none;
          }
        }
      `}</style>

      <section id="hero" className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-background" aria-hidden="true">
          <motion.div 
            className="hero-bg-circle hero-bg-circle-1"
            animate={{ 
              x: [0, 8, 0],
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="hero-bg-circle hero-bg-circle-2"
            animate={{ 
              x: [0, -10, 0],
              y: [0, 10, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="hero-container">
          <div className="hero-content">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hero-badge"
              aria-label="Ariar Technology Agency"
            >
              <span className="hero-badge-text">Ariar Technology</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 id="hero-heading" className="hero-title">
                <span className="hero-title-line">We Build scalable websites & apps</span>
                <motion.span 
                  className="hero-title-line hero-title-gradient"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                 You run your business. We power it with technology.
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="hero-subtitle"
            >
              Founder-led agency building fast, mobile-first products for startups and growing businesses
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="hero-cta"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenModal}
                className="hero-btn hero-btn-primary"
                aria-label="Get a free project consultation"
                onKeyDown={(e) => handleKeyDown(e, onOpenModal)}
              >
                Get Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToWork}
                className="hero-btn hero-btn-secondary"
                aria-label="View our selected work portfolio"
                onKeyDown={(e) => handleKeyDown(e, handleScrollToWork)}
              >
                See Our Work
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="hero-trust"
              aria-label="Company guarantees"
            >
              <span className="hero-trust-item">No contracts</span>
              <span className="hero-trust-item">Clear pricing</span>
              <span className="hero-trust-item">Long-term support</span>
            </motion.div>

            {/* Device Preview */}
            <div className="hero-preview" aria-hidden="true">
              <motion.div 
                className="hero-device-mockup desktop"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="hero-device-screen">
                  <div className="hero-screen-content">
                    Website
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="hero-device-mockup mobile"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="hero-device-screen">
                  <div className="hero-screen-content">
                    App
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="hero-scroll-indicator"
              onClick={handleScrollToWork}
              onKeyDown={(e) => handleKeyDown(e, handleScrollToWork)}
              role="button"
              tabIndex="0"
              aria-label="Scroll to next section"
            >
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hero-scroll-arrow"
                aria-hidden="true"
              >
                ↓
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

Hero.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default React.memo(Hero);