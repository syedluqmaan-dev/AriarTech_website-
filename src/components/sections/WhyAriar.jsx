import React from 'react';
import { motion } from 'framer-motion';

const WhyAriar = () => {
  const values = [
    {
      icon: '⚜️',
      title: 'Founder-Led',
      description: 'Work directly with decision-makers. Faster decisions, better results.',
      highlight: 'Direct Access'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Websites in 7-14 days. MVPs in 4-8 weeks. We meet deadlines.',
      highlight: '7-14 Days'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your ideas stay confidential. NDAs signed on every project.',
      highlight: 'NDA Protected'
    },
    {
      icon: '🤝',
      title: 'Long-term Support',
      description: 'We stay post-launch for updates, maintenance, and growth.',
      highlight: 'Ongoing Support'
    }
  ];

  const stats = [
    { value: '100%', label: 'Satisfaction' },
    { value: '7-14', label: 'Day Delivery' },
    { value: '24/7', label: 'Support' },
    { value: '98%', label: 'On Time' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const handleCTAClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        /* ===== WHY ARIAR SECTION - 100% INDEPENDENT ===== */
        
        /* === WHY-SPECIFIC CSS VARIABLES === */
        .why-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --why-primary: #000000;               /* Black */
          --why-primary-dark: #0A2540;          /* Dark blue */
          --why-accent: #14B8A6;                /* Teal */
          --why-accent-dark: #0d9488;           /* Darker teal */
          --why-background: #FFFFFF;            /* White */
          --why-background-alt: #F8FAFC;        /* Light gray */
          --why-text: #000000;                  /* Black */
          --why-text-light: #6B7280;            /* Medium gray */
          --why-text-muted: #9CA3AF;            /* Light gray */
          --why-border: #E5E7EB;                /* Border gray */
          --why-border-light: #F3F4F6;          /* Lighter border */
          --why-focus-ring: #14B8A6;            /* Focus outline */
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --why-spacing-xs: 0.5rem;
          --why-spacing-sm: 1rem;
          --why-spacing-md: 1.5rem;
          --why-spacing-lg: 2rem;
          --why-spacing-xl: 3rem;
          --why-spacing-2xl: 4rem;
          --why-spacing-3xl: 5rem;
          
          /* BORDERS & SHADOWS */
          --why-border-radius: 0.75rem;
          --why-border-radius-sm: 0.5rem;
          --why-border-radius-lg: 1rem;
          --why-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --why-transition-fast: 150ms ease;
          --why-transition-base: 200ms ease;
          --why-transition-slow: 300ms ease;
          
          /* SHADOWS */
          --why-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
          --why-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          --why-shadow-md: 0 12px 40px rgba(0, 0, 0, 0.1);
          --why-shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.12);
          --why-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.08);
          --why-shadow-accent: 0 6px 20px rgba(20, 184, 166, 0.25);
          
          /* SECTION STYLES */
          padding: var(--why-spacing-xl) 0;
          background: var(--why-background-alt);
          position: relative;
          isolation: isolate; /* Prevent style leakage */
        }

        @media (min-width: 768px) {
          .why-section {
            padding: var(--why-spacing-2xl) 0;
          }
        }

        @media (min-width: 1024px) {
          .why-section {
            padding: var(--why-spacing-3xl) 0;
          }
        }

        /* Why Container */
        .why-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--why-spacing-sm);
        }

        @media (min-width: 768px) {
          .why-container {
            padding: 0 var(--why-spacing-md);
          }
        }

        /* Section Header */
        .why-header {
          text-align: center;
          margin-bottom: var(--why-spacing-xl);
        }

        @media (min-width: 768px) {
          .why-header {
            margin-bottom: var(--why-spacing-2xl);
          }
        }

        .why-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--why-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--why-spacing-sm);
          padding: var(--why-spacing-xs) var(--why-spacing-sm);
          background: rgba(20, 184, 166, 0.08);
          border-radius: var(--why-border-radius-full);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .why-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: var(--why-primary);
          line-height: 1.1;
          margin-bottom: var(--why-spacing-sm);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .why-subtitle {
          font-size: clamp(0.9375rem, 2vw, 1.0625rem);
          color: var(--why-text);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Values Grid */
        .why-values-grid {
          display: grid;
          gap: var(--why-spacing-md);
          margin-bottom: var(--why-spacing-xl);
        }

        @media (min-width: 640px) {
          .why-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .why-values-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--why-spacing-lg);
          }
        }

        /* Value Card */
        .why-value-card {
          background: var(--why-background);
          border-radius: var(--why-border-radius);
          padding: var(--why-spacing-lg);
          transition: all var(--why-transition-base);
          border: 1px solid var(--why-border);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .why-value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--why-accent), var(--why-primary-dark));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--why-transition-slow) ease;
        }

        .why-value-card:hover,
        .why-value-card:focus-within {
          border-color: var(--why-accent);
          box-shadow: var(--why-shadow-hover);
          transform: translateY(-4px);
        }

        .why-value-card:hover::before,
        .why-value-card:focus-within::before {
          transform: scaleX(1);
        }

        .why-value-card:focus-within {
          outline: 3px solid var(--why-focus-ring);
          outline-offset: 2px;
        }

        /* Value Icon */
        .why-value-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--why-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: var(--why-spacing-md);
          background: rgba(20, 184, 166, 0.08);
        }

        /* Value Content */
        .why-value-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--why-primary-dark);
          margin-bottom: var(--why-spacing-sm);
          line-height: 1.2;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .why-value-description {
          font-size: 0.875rem;
          color: var(--why-text-light);
          line-height: 1.5;
          margin-bottom: var(--why-spacing-md);
          flex: 1;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Value Highlight */
        .why-value-highlight {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--why-accent);
          background: rgba(20, 184, 166, 0.08);
          padding: var(--why-spacing-xs) var(--why-spacing-sm);
          border-radius: var(--why-border-radius-full);
          border: 1px solid rgba(20, 184, 166, 0.12);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Stats Section */
        .why-stats-section {
          margin: var(--why-spacing-xl) 0;
          padding: var(--why-spacing-xl) 0;
          border-top: 1px solid var(--why-border);
          border-bottom: 1px solid var(--why-border);
        }

        .why-stats-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--why-primary);
          text-align: center;
          margin-bottom: var(--why-spacing-lg);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .why-stats-title {
            font-size: 1.75rem;
          }
        }

        .why-stats-grid {
          display: grid;
          gap: var(--why-spacing-sm);
        }

        @media (min-width: 640px) {
          .why-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--why-spacing-md);
          }
        }

        @media (min-width: 768px) {
          .why-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .why-stat-card {
          background: var(--why-background);
          border-radius: var(--why-border-radius);
          padding: var(--why-spacing-lg);
          text-align: center;
          border: 1px solid var(--why-border);
          transition: all var(--why-transition-fast);
        }

        .why-stat-card:hover {
          border-color: var(--why-accent);
          box-shadow: var(--why-shadow-sm);
        }

        .why-stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--why-accent);
          line-height: 1;
          margin-bottom: var(--why-spacing-xs);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .why-stat-value {
            font-size: 2.25rem;
          }
        }

        .why-stat-label {
          font-size: 0.75rem;
          color: var(--why-text-light);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* CTA Section */
        .why-cta-section {
          text-align: center;
          margin-top: var(--why-spacing-xl);
        }

        .why-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--why-spacing-md) var(--why-spacing-xl);
          border-radius: var(--why-border-radius);
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all var(--why-transition-base);
          border: none;
          cursor: pointer;
          background: var(--why-accent);
          color: var(--why-background);
          min-height: 44px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .why-cta-button:hover,
        .why-cta-button:focus {
          background: var(--why-accent-dark);
          transform: translateY(-2px);
          box-shadow: var(--why-shadow-accent);
          outline: none;
        }

        .why-cta-button:focus-visible {
          outline: 3px solid var(--why-focus-ring);
          outline-offset: 2px;
        }

        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .why-value-card,
          .why-value-card::before,
          .why-cta-button,
          .why-stat-card {
            transition: none !important;
          }
          
          .why-value-card:hover,
          .why-cta-button:hover,
          .why-stat-card:hover {
            transform: none !important;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .why-value-card,
          .why-stat-card {
            padding: var(--why-spacing-md);
          }
          
          .why-value-icon {
            width: 48px;
            height: 48px;
            font-size: 1.5rem;
          }
          
          .why-stat-value {
            font-size: 1.75rem;
          }
          
          .why-cta-button {
            padding: var(--why-spacing-sm) var(--why-spacing-lg);
            width: 100%;
            max-width: 280px;
          }
        }

        /* Print Styles */
        @media print {
          .why-section {
            background: white !important;
            padding: 2rem 0 !important;
          }
          
          .why-value-card,
          .why-stat-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          .why-value-card::before {
            display: none;
          }
          
          .why-cta-button {
            display: none !important;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .why-value-card,
          .why-stat-card {
            border: 2px solid currentColor;
          }
          
          .why-value-highlight {
            border: 1px solid currentColor;
          }
        }

        /* Dark Mode Support (Optional) */
        // @media (prefers-color-scheme: dark) {
        //   .why-section {
        //     --why-background: #1e293b;
        //     --why-background-alt: #0f172a;
        //     --why-primary: #f1f5f9;
        //     --why-primary-dark: #e2e8f0;
        //     --why-text: #e2e8f0;
        //     --why-text-light: #94a3b8;
        //     --why-border: #334155;
        //     --why-border-light: #475569;
        //     --why-accent: #2dd4bf;
        //     --why-accent-dark: #0d9488;
        //   }
          
          .why-value-card,
          .why-stat-card {
            background: var(--why-background);
            border-color: var(--why-border);
          }
          
          .why-value-card:hover,
          .why-stat-card:hover {
            border-color: var(--why-accent);
          }
        }

        /* Accessibility: Focus Management */
        .why-value-card:focus,
        .why-stat-card:focus,
        .why-cta-button:focus {
          outline: none;
        }

        .why-value-card:focus-visible,
        .why-stat-card:focus-visible,
        .why-cta-button:focus-visible {
          outline: 3px solid var(--why-focus-ring);
          outline-offset: 2px;
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .why-value-card:hover,
          .why-stat-card:hover {
            transform: none;
          }
          
          .why-value-card:active,
          .why-stat-card:active {
            transform: scale(0.98);
          }
          
          .why-cta-button:active {
            transform: scale(0.98);
          }
        }
      `}</style>

      <section id="why" className="why-section" aria-labelledby="why-title">
        <div className="why-container">
          {/* Header */}
          <motion.div 
            className="why-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="why-label" aria-label="Why choose us">Why Choose Us</span>
            <h2 id="why-title" className="why-title">
              A Different Kind of Agency
            </h2>
            <p className="why-subtitle">
              Founder-led, fast, and focused on your growth. We build products that perform, 
              with clear processes and long-term partnership.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            className="why-values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="why-value-card"
                variants={itemVariants}
                tabIndex={0} /* Make cards focusable for keyboard navigation */
              >
                <div className="why-value-icon" aria-hidden="true">
                  {value.icon}
                </div>
                <h3 className="why-value-title">{value.title}</h3>
                <p className="why-value-description">{value.description}</p>
                <span className="why-value-highlight">{value.highlight}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <div className="why-stats-section">
            <h3 className="why-stats-title">Our Track Record</h3>
            <motion.div 
              className="why-stats-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="why-stat-card"
                  variants={itemVariants}
                  tabIndex={0} /* Make stat cards focusable */
                >
                  <div className="why-stat-value">{stat.value}</div>
                  <div className="why-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="why-cta-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <button 
              className="why-cta-button"
              onClick={handleCTAClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCTAClick();
                }
              }}
              aria-label="Schedule a free strategy call"
            >
              Schedule Free Strategy Call
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyAriar;