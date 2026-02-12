import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';

const FinalCTA = ({ onOpenModal }) => {
  return (
    <>
      <style>{`
        /* ===== FINAL CTA SECTION - 100% INDEPENDENT ===== */
        
        /* === FINAL CTA-SPECIFIC CSS VARIABLES === */
        .final-cta-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --cta-primary: #0A2540;
          --cta-accent: #14B8A6;
          --cta-accent-dark: #0d9488;
          --cta-background: #FFFFFF;
          --cta-background-alt: #F8FAFC;
          --cta-text: #FFFFFF;
          --cta-text-light: #E2E8F0;
          --cta-text-muted: #94A3B8;
          --cta-border: rgba(255, 255, 255, 0.1);
          --cta-focus-ring: #14B8A6;
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --cta-spacing-xs: 0.5rem;
          --cta-spacing-sm: 1rem;
          --cta-spacing-md: 1.5rem;
          --cta-spacing-lg: 2rem;
          --cta-spacing-xl: 3rem;
          --cta-spacing-2xl: 4rem;
          --cta-spacing-3xl: 5rem;
          
          /* BORDERS & SHADOWS */
          --cta-border-radius: 0.75rem;
          --cta-border-radius-lg: 1rem;
          --cta-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --cta-transition-fast: 150ms ease;
          --cta-transition-base: 200ms ease;
          --cta-transition-slow: 300ms ease;
          
          /* SHADOWS */
          --cta-shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
          --cta-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          --cta-shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.2);
          --cta-shadow-accent: 0 8px 25px rgba(20, 184, 166, 0.4);
          
          /* SECTION STYLES - OPTIMIZED */
          position: relative;
          padding: var(--cta-spacing-xl) 0;
          background: linear-gradient(135deg, 
            var(--cta-primary) 0%, 
            #0F1E2E 100%
          );
          overflow: hidden;
          isolation: isolate;
        }

        @media (min-width: 768px) {
          .final-cta-section {
            padding: var(--cta-spacing-2xl) 0;
          }
        }

        @media (min-width: 1024px) {
          .final-cta-section {
            padding: var(--cta-spacing-3xl) 0;
          }
        }

        /* Background Effects */
        .cta-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .cta-bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }

        .cta-bg-circle-1 {
          width: 300px;
          height: 300px;
          background: var(--cta-accent);
          top: -100px;
          right: -100px;
        }

        .cta-bg-circle-2 {
          width: 250px;
          height: 250px;
          background: #4F46E5;
          bottom: -100px;
          left: -100px;
        }

        @media (min-width: 768px) {
          .cta-bg-circle-1 {
            width: 400px;
            height: 400px;
          }
          
          .cta-bg-circle-2 {
            width: 350px;
            height: 350px;
          }
        }

        /* Container */
        .cta-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 var(--cta-spacing-sm);
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .cta-container {
            padding: 0 var(--cta-spacing-md);
          }
        }

        /* Content - OPTIMIZED */
        .cta-content {
          text-align: center;
          position: relative;
        }

        /* Badge - OPTIMIZED */
        .cta-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(20, 184, 166, 0.15);
          border: 1px solid rgba(20, 184, 166, 0.3);
          border-radius: var(--cta-border-radius-full);
          margin-bottom: var(--cta-spacing-sm);
          backdrop-filter: blur(4px);
        }

        @media (min-width: 768px) {
          .cta-badge {
            padding: var(--cta-spacing-xs) var(--cta-spacing-sm);
            margin-bottom: var(--cta-spacing-md);
          }
        }

        .cta-badge-text {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--cta-accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .cta-badge-text {
            font-size: 0.75rem;
          }
        }

        /* Title - OPTIMIZED */
        .cta-title {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(1.5rem, 6vw, 2.5rem);
          font-weight: 700;
          color: var(--cta-text);
          margin-bottom: var(--cta-spacing-sm);
          line-height: 1.1;
        }

        @media (min-width: 768px) {
          .cta-title {
            margin-bottom: var(--cta-spacing-md);
          }
        }

        /* Description - OPTIMIZED */
        .cta-description {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(0.8125rem, 3.5vw, 1.125rem);
          color: var(--cta-text-light);
          line-height: 1.5;
          max-width: 600px;
          margin: 0 auto var(--cta-spacing-lg);
          opacity: 0.9;
        }

        @media (min-width: 768px) {
          .cta-description {
            margin-bottom: var(--cta-spacing-xl);
          }
        }

        /* CTA Button - OPTIMIZED */
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--cta-accent);
          color: var(--cta-primary);
          border: none;
          border-radius: var(--cta-border-radius);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 1;
          text-decoration: none;
          cursor: pointer;
          transition: all var(--cta-transition-base);
          min-height: 44px;
          min-width: 200px;
          width: 100%;
          max-width: 280px;
          box-shadow: var(--cta-shadow);
        }

        @media (min-width: 640px) {
          .cta-button {
            width: auto;
            padding: 0.875rem 2rem;
            font-size: 0.9375rem;
            min-width: 220px;
          }
        }

        @media (min-width: 768px) {
          .cta-button {
            padding: 1rem 2.5rem;
            font-size: 1rem;
          }
        }

        .cta-button:hover,
        .cta-button:focus {
          background: var(--cta-accent-dark);
          transform: translateY(-3px);
          box-shadow: var(--cta-shadow-accent);
          outline: none;
        }

        .cta-button:focus-visible {
          outline: 3px solid var(--cta-focus-ring);
          outline-offset: 2px;
        }

        .cta-button:active {
          transform: translateY(-1px);
        }

        /* Button Icon */
        .cta-button-icon {
          font-size: 1rem;
        }

        @media (min-width: 768px) {
          .cta-button-icon {
            font-size: 1.125rem;
          }
        }

        /* Trust Badges - OPTIMIZED */
        .cta-trust {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          margin-top: var(--cta-spacing-lg);
        }

        @media (min-width: 768px) {
          .cta-trust {
            gap: var(--cta-spacing-md);
            margin-top: var(--cta-spacing-xl);
          }
        }

        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--cta-text-light);
          font-size: 0.75rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .cta-trust-item {
            font-size: 0.875rem;
            gap: 0.5rem;
          }
        }

        .cta-trust-dot {
          width: 4px;
          height: 4px;
          background: var(--cta-accent);
          border-radius: 50%;
          margin: 0 0.25rem;
        }

        @media (min-width: 768px) {
          .cta-trust-dot {
            width: 6px;
            height: 6px;
          }
        }

        /* Small Mobile Devices (320px-400px) - EXTRA OPTIMIZED */
        @media (max-width: 400px) {
          .final-cta-section {
            padding: var(--cta-spacing-lg) 0;
          }

          .cta-title {
            font-size: 1.35rem;
          }

          .cta-description {
            font-size: 0.75rem;
            margin-bottom: var(--cta-spacing-md);
          }

          .cta-button {
            padding: 0.625rem 1.25rem;
            font-size: 0.75rem;
            max-width: 240px;
          }

          .cta-trust {
            margin-top: var(--cta-spacing-md);
            gap: 0.5rem;
          }

          .cta-trust-item {
            font-size: 0.6875rem;
          }
        }

        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .cta-button,
          .cta-bg-circle {
            transition: none !important;
            animation: none !important;
          }
          
          .cta-button:hover,
          .cta-button:focus {
            transform: none !important;
          }
        }

        /* Print Styles */
        @media print {
          .final-cta-section {
            background: white !important;
            color: black !important;
            padding: 2rem 0 !important;
          }
          
          .cta-background,
          .cta-badge,
          .cta-trust {
            display: none !important;
          }
          
          .cta-title {
            color: black !important;
          }
          
          .cta-description {
            color: #333 !important;
          }
          
          .cta-button {
            display: none !important;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .final-cta-section {
            background: #0A2540 !important;
          }
          
          .cta-button {
            border: 2px solid white;
          }
        }
      `}</style>

      <section 
        id="final-cta" 
        className="final-cta-section" 
        aria-labelledby="cta-heading"
      >
        {/* Background Effects */}
        <div className="cta-background" aria-hidden="true">
          <motion.div 
            className="cta-bg-circle cta-bg-circle-1"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="cta-bg-circle cta-bg-circle-2"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.18, 0.15]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="cta-container">
          <div className="cta-content">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3 }}
              className="cta-badge"
            >
              <span className="cta-badge-text">Limited Availability</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4 }}
              className="cta-title"
            >
              Ready to Build Something Great?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="cta-description"
            >
              Let's discuss your project with no pressure. We'll provide honest feedback on feasibility, timeline, and approach.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <button
                className="cta-button"
                onClick={onOpenModal}
                aria-label="Get a free project review"
              >
                <i className="fas fa-calendar-check cta-button-icon" aria-hidden="true" />
                Review My Project
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="cta-trust"
              aria-label="Our guarantees"
            >
              <span className="cta-trust-item">
                <span className="cta-trust-dot" aria-hidden="true" />
                No commitment
              </span>
              <span className="cta-trust-item">
                <span className="cta-trust-dot" aria-hidden="true" />
                24h response
              </span>
              <span className="cta-trust-item">
                <span className="cta-trust-dot" aria-hidden="true" />
                Free estimate
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTA;