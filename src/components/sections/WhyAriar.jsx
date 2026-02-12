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
        staggerChildren: 0.06
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
          --why-primary: #000000;
          --why-primary-dark: #0A2540;
          --why-accent: #14B8A6;
          --why-accent-dark: #0d9488;
          --why-background: #FFFFFF;
          --why-background-alt: #F8FAFC;
          --why-text: #000000;
          --why-text-light: #6B7280;
          --why-text-muted: #9CA3AF;
          --why-border: #E5E7EB;
          --why-border-light: #F3F4F6;
          --why-focus-ring: #14B8A6;
          
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
          
          /* SECTION STYLES - OPTIMIZED */
          padding: var(--why-spacing-lg) 0;
          background: var(--why-background-alt);
          position: relative;
          isolation: isolate;
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

        /* Section Header - OPTIMIZED */
        .why-header {
          text-align: center;
          margin-bottom: var(--why-spacing-lg);
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
          margin-bottom: var(--why-spacing-xs);
          padding: 0.25rem 0.75rem;
          background: rgba(20, 184, 166, 0.08);
          border-radius: var(--why-border-radius-full);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (max-width: 640px) {
          .why-label {
            margin-bottom: 0.375rem;
          }
        }

        .why-title {
          font-size: clamp(1.5rem, 6vw, 2.25rem);
          font-weight: 700;
          color: var(--why-primary);
          line-height: 1.1;
          margin-bottom: 0.5rem;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (max-width: 640px) {
          .why-title {
            margin-bottom: 0.375rem;
            letter-spacing: -0.02em;
          }
        }

        .why-subtitle {
          font-size: clamp(0.875rem, 3vw, 1.0625rem);
          color: var(--why-text);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (max-width: 640px) {
          .why-subtitle {
            padding: 0 0.25rem;
          }
        }

        /* Values Grid - OPTIMIZED */
        .why-values-grid {
          display: grid;
          gap: var(--why-spacing-sm);
          margin-bottom: var(--why-spacing-lg);
        }

        @media (min-width: 640px) {
          .why-values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--why-spacing-md);
            margin-bottom: var(--why-spacing-xl);
          }
        }

        @media (min-width: 1024px) {
          .why-values-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--why-spacing-lg);
          }
        }

        /* Value Card - OPTIMIZED */
        .why-value-card {
          background: var(--why-background);
          border-radius: var(--why-border-radius);
          padding: var(--why-spacing-md);
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

        @media (min-width: 640px) {
          .why-value-card {
            padding: var(--why-spacing-lg);
          }
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

        /* Value Icon - OPTIMIZED */
        .why-value-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--why-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: var(--why-spacing-sm);
          background: rgba(20, 184, 166, 0.08);
        }

        @media (min-width: 640px) {
          .why-value-icon {
            width: 56px;
            height: 56px;
            font-size: 1.75rem;
            margin-bottom: var(--why-spacing-md);
          }
        }

        /* Value Content - OPTIMIZED */
        .why-value-title {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--why-primary-dark);
          margin-bottom: 0.375rem;
          line-height: 1.2;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 640px) {
          .why-value-title {
            font-size: 1.125rem;
            margin-bottom: var(--why-spacing-sm);
          }
        }

        .why-value-description {
          font-size: 0.8125rem;
          color: var(--why-text-light);
          line-height: 1.5;
          margin-bottom: var(--why-spacing-sm);
          flex: 1;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 640px) {
          .why-value-description {
            font-size: 0.875rem;
            margin-bottom: var(--why-spacing-md);
          }
        }

        /* Value Highlight - OPTIMIZED */
        .why-value-highlight {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--why-accent);
          background: rgba(20, 184, 166, 0.08);
          padding: 0.25rem 0.75rem;
          border-radius: var(--why-border-radius-full);
          border: 1px solid rgba(20, 184, 166, 0.12);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 640px) {
          .why-value-highlight {
            font-size: 0.8125rem;
            padding: var(--why-spacing-xs) var(--why-spacing-sm);
          }
        }

        /* Stats Section - OPTIMIZED */
        .why-stats-section {
          margin: var(--why-spacing-lg) 0;
          padding: var(--why-spacing-lg) 0;
          border-top: 1px solid var(--why-border);
          border-bottom: 1px solid var(--why-border);
        }

        @media (min-width: 768px) {
          .why-stats-section {
            margin: var(--why-spacing-xl) 0;
            padding: var(--why-spacing-xl) 0;
          }
        }

        .why-stats-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--why-primary);
          text-align: center;
          margin-bottom: var(--why-spacing-md);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .why-stats-title {
            font-size: 1.75rem;
            margin-bottom: var(--why-spacing-lg);
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
          padding: var(--why-spacing-md);
          text-align: center;
          border: 1px solid var(--why-border);
          transition: all var(--why-transition-fast);
        }

        @media (min-width: 640px) {
          .why-stat-card {
            padding: var(--why-spacing-lg);
          }
        }

        .why-stat-card:hover {
          border-color: var(--why-accent);
          box-shadow: var(--why-shadow-sm);
        }

        .why-stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--why-accent);
          line-height: 1;
          margin-bottom: 0.25rem;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .why-stat-value {
            font-size: 2.25rem;
            margin-bottom: var(--why-spacing-xs);
          }
        }

        .why-stat-label {
          font-size: 0.6875rem;
          color: var(--why-text-light);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 640px) {
          .why-stat-label {
            font-size: 0.75rem;
          }
        }

        /* CTA Section - OPTIMIZED */
        .why-cta-section {
          text-align: center;
          margin-top: var(--why-spacing-lg);
        }

        @media (min-width: 768px) {
          .why-cta-section {
            margin-top: var(--why-spacing-xl);
          }
        }

        .why-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: var(--why-border-radius);
          font-weight: 600;
          font-size: 0.875rem;
          transition: all var(--why-transition-base);
          border: none;
          cursor: pointer;
          background: var(--why-accent);
          color: var(--why-background);
          min-height: 44px;
          width: 100%;
          max-width: 280px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 640px) {
          .why-cta-button {
            padding: var(--why-spacing-md) var(--why-spacing-xl);
            font-size: 0.9375rem;
            width: auto;
          }
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

        /* Mobile Optimizations - ENHANCED */
        @media (max-width: 640px) {
          .why-section {
            padding: 2rem 0;
          }

          .why-container {
            padding: 0 1rem;
          }

          .why-header {
            margin-bottom: 1.5rem;
          }

          .why-values-grid {
            margin-bottom: 1.5rem;
          }

          .why-value-card {
            padding: 1.25rem;
          }

          .why-value-icon {
            width: 44px;
            height: 44px;
            font-size: 1.375rem;
            margin-bottom: 0.75rem;
          }

          .why-value-title {
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }

          .why-value-description {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .why-value-highlight {
            font-size: 0.6875rem;
            padding: 0.1875rem 0.625rem;
          }

          .why-stats-section {
            margin: 1.5rem 0;
            padding: 1.5rem 0;
          }

          .why-stats-title {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .why-stat-card {
            padding: 1rem;
          }

          .why-stat-value {
            font-size: 1.5rem;
          }

          .why-stat-label {
            font-size: 0.625rem;
          }

          .why-cta-section {
            margin-top: 1.5rem;
          }
        }

        /* Small Mobile Devices (320px-400px) - EXTRA OPTIMIZED */
        @media (max-width: 400px) {
          .why-value-card {
            padding: 1rem;
          }

          .why-title {
            font-size: 1.35rem;
          }

          .why-subtitle {
            font-size: 0.8125rem;
          }

          .why-value-icon {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
            margin-bottom: 0.625rem;
          }

          .why-value-title {
            font-size: 0.9375rem;
          }

          .why-value-description {
            font-size: 0.6875rem;
            margin-bottom: 0.625rem;
            -webkit-line-clamp: 2;
          }

          .why-value-highlight {
            font-size: 0.625rem;
            padding: 0.125rem 0.5rem;
          }

          .why-stats-title {
            font-size: 1.125rem;
          }

          .why-stat-value {
            font-size: 1.375rem;
          }

          .why-stat-label {
            font-size: 0.5625rem;
          }

          .why-cta-button {
            font-size: 0.8125rem;
            padding: 0.625rem 1.25rem;
            max-width: 240px;
          }
        }

        /* Tablet Optimizations */
        @media (min-width: 641px) and (max-width: 1023px) {
          .why-values-grid {
            gap: 1.25rem;
          }

          .why-value-card {
            padding: 1.5rem;
          }

          .why-value-description {
            font-size: 0.8125rem;
          }

          .why-stats-grid {
            gap: 1.25rem;
          }
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
            viewport={{ once: true, margin: "-30px" }}
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
            viewport={{ once: true, margin: "-30px" }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="why-value-card"
                variants={itemVariants}
                tabIndex={0}
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
              viewport={{ once: true, margin: "-30px" }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="why-stat-card"
                  variants={itemVariants}
                  tabIndex={0}
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