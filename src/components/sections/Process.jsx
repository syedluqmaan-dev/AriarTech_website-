import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: '🎯',
      title: 'Discover & Align',
      description:
        'We start by understanding your business goals, target audience, and challenges through in-depth discovery sessions.',
      details: ['Business Analysis', 'User Research', 'Goal Setting', 'Requirements Gathering'],
    },
    {
      number: '02',
      icon: '📐',
      title: 'Plan & Design',
      description:
        'We create detailed wireframes, prototypes, and design systems to visualize your product before development begins.',
      details: ['Wireframing', 'UI/UX Design', 'Technical Architecture', 'Project Roadmap'],
    },
    {
      number: '03',
      icon: '⚡',
      title: 'Build & Engineer',
      description:
        'Our developers build your product using modern technologies, with weekly updates and transparent progress tracking.',
      details: ['Agile Development', 'Code Reviews', 'Weekly Demos', 'Quality Checks'],
    },
    {
      number: '04',
      icon: '🚀',
      title: 'Test & Launch',
      description:
        'We conduct rigorous testing across devices and browsers, then deploy your product with a seamless launch strategy.',
      details: ['Testing Suite', 'Performance Audit', 'Security Review', 'Production Deployment'],
    },
    {
      number: '05',
      icon: '🔄',
      title: 'Support & Scale',
      description:
        'Post-launch support, maintenance, and scaling to ensure your product continues to perform and grow.',
      details: ['30-Day Support', 'Performance Monitoring', 'Regular Updates', 'Growth Scaling'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const handleCTAClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const headerHeight = 70;
      const elementPosition = contactElement.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        /* ===== PROCESS SECTION - 100% INDEPENDENT ===== */
        
        /* === PROCESS-SPECIFIC CSS VARIABLES === */
        .process-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --process-primary: #000000;               /* Black */
          --process-primary-dark: #0A2540;          /* Dark blue */
          --process-accent: #14B8A6;                /* Teal */
          --process-accent-dark: #0d9488;           /* Darker teal */
          --process-background: #FFFFFF;            /* White */
          --process-background-alt: #F8FAFC;        /* Light gray */
          --process-text: #01050A;                  /* Very dark blue */
          --process-text-light: #000206;            /* Dark text */
          --process-text-muted: #6B7280;            /* Medium gray */
          --process-border: #E5E7EB;                /* Border gray */
          --process-border-light: #F3F4F6;          /* Lighter border */
          --process-focus-ring: #14B8A6;            /* Focus outline */
          --process-overlay: rgba(255, 255, 255, 0.9);
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --process-spacing-xs: 0.5rem;
          --process-spacing-sm: 1rem;
          --process-spacing-md: 1.5rem;
          --process-spacing-lg: 2rem;
          --process-spacing-xl: 3rem;
          --process-spacing-2xl: 4rem;
          --process-spacing-3xl: 5rem;
          
          /* BORDERS & SHADOWS */
          --process-border-radius: 0.75rem;
          --process-border-radius-sm: 0.5rem;
          --process-border-radius-lg: 1.25rem;
          --process-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --process-transition-fast: 150ms ease;
          --process-transition-base: 200ms ease;
          --process-transition-slow: 300ms ease;
          
          /* SHADOWS */
          --process-shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.04);
          --process-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          --process-shadow-md: 0 12px 40px rgba(0, 0, 0, 0.1);
          --process-shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.12);
          --process-shadow-hover: 0 20px 40px rgba(20, 184, 166, 0.1);
          --process-shadow-accent: 0 8px 25px rgba(20, 184, 166, 0.3);
          
          /* SECTION STYLES */
          padding: var(--process-spacing-3xl) 0;
          background: linear-gradient(135deg, var(--process-background) 0%, var(--process-background-alt) 100%);
          position: relative;
          overflow: hidden;
          isolation: isolate; /* Prevent style leakage */
        }

        /* Process Container */
        .process-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--process-spacing-md);
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .process-container {
            padding: 0 var(--process-spacing-sm);
          }
        }

        /* Section Header */
        .process-header {
          text-align: center;
          margin-bottom: var(--process-spacing-2xl);
        }

        .process-label {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--process-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--process-spacing-sm);
          padding: var(--process-spacing-xs) var(--process-spacing-md);
          background: rgba(20, 184, 166, 0.1);
          border-radius: var(--process-border-radius-full);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .process-title {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--process-text);
          margin-bottom: var(--process-spacing-md);
          line-height: 1.1;
        }

        .process-subtitle {
          max-width: 700px;
          margin: 0 auto;
          color: var(--process-text-light);
          line-height: 1.6;
          font-size: clamp(0.9375rem, 2vw, 1.0625rem);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Process Steps Container */
        .process-steps-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Process Line (Timeline) */
        .process-line {
          position: absolute;
          top: 78px;
          left: 40px;
          right: 40px;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(20, 184, 166, 0.2),
            rgba(20, 184, 166, 0.4),
            rgba(20, 184, 166, 0.2)
          );
          z-index: 0;
        }

        @media (max-width: 1024px) {
          .process-line {
            display: none;
          }
        }

        /* Process Steps Grid */
        .process-steps-grid {
          display: grid;
          gap: var(--process-spacing-lg);
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .process-steps-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: var(--process-spacing-md);
          }
        }

        /* Process Step Card */
        .process-step-card {
          background: var(--process-background);
          border-radius: var(--process-border-radius-lg);
          padding: var(--process-spacing-lg) var(--process-spacing-md);
          border: 1px solid var(--process-border);
          box-shadow: var(--process-shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all var(--process-transition-slow);
          height: 100%;
          position: relative;
        }

        .process-step-card:hover,
        .process-step-card:focus-within {
          transform: translateY(-6px);
          border-color: var(--process-accent);
          box-shadow: var(--process-shadow-hover);
        }

        .process-step-card:focus-within {
          outline: 3px solid var(--process-focus-ring);
          outline-offset: 2px;
        }

        /* Step Icon */
        .process-step-icon {
          width: 64px;
          height: 64px;
          border-radius: var(--process-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: var(--process-spacing-md);
          background: linear-gradient(
            135deg,
            rgba(20, 184, 166, 0.1),
            rgba(10, 37, 64, 0.05)
          );
        }

        /* Step Title */
        .process-step-title {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--process-primary-dark);
          margin-bottom: var(--process-spacing-sm);
          min-height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1.2;
        }

        /* Step Description */
        .process-step-description {
          font-size: 0.95rem;
          color: var(--process-text-muted);
          line-height: 1.6;
          margin-bottom: var(--process-spacing-md);
          flex: 1;
          min-height: 4.5rem;
          display: flex;
          align-items: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Step Details */
        .process-step-details {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-top: auto;
        }

        .process-detail-tag {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--process-accent);
          background: rgba(20, 184, 166, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: var(--process-border-radius-full);
          border: 1px solid rgba(20, 184, 166, 0.15);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Timeline Dots */
        .process-timeline-dot {
          position: absolute;
          top: 70px;
          width: 12px;
          height: 12px;
          background: var(--process-accent);
          border-radius: 50%;
          border: 3px solid var(--process-background);
          box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.2);
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .process-timeline-dot {
            display: none;
          }
        }

        /* Process CTA */
        .process-cta {
          text-align: center;
          margin-top: var(--process-spacing-2xl);
        }

        .process-cta-button {
          background: var(--process-accent);
          color: var(--process-background);
          padding: 0.875rem 2rem;
          border-radius: var(--process-border-radius);
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all var(--process-transition-base);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: 44px;
        }

        .process-cta-button:hover,
        .process-cta-button:focus {
          background: var(--process-accent-dark);
          transform: translateY(-2px);
          box-shadow: var(--process-shadow-accent);
          outline: none;
        }

        .process-cta-button:focus-visible {
          outline: 3px solid var(--process-focus-ring);
          outline-offset: 2px;
        }

        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .process-step-card,
          .process-cta-button {
            transition: none !important;
          }
          
          .process-step-card:hover,
          .process-cta-button:hover {
            transform: none !important;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .process-section {
            padding: var(--process-spacing-2xl) 0;
          }
          
          .process-step-card {
            padding: var(--process-spacing-md);
          }
          
          .process-step-icon {
            width: 56px;
            height: 56px;
            font-size: 1.75rem;
          }
          
          .process-step-title {
            font-size: 1.125rem;
            min-height: 3rem;
          }
          
          .process-step-description {
            font-size: 0.875rem;
            min-height: 4rem;
          }
        }

        @media (max-width: 640px) {
          .process-steps-grid {
            gap: var(--process-spacing-md);
          }
          
          .process-step-title {
            font-size: 1.0625rem;
          }
        }

        /* Print Styles */
        @media print {
          .process-section {
            background: white !important;
            padding: 2rem 0 !important;
          }
          
          .process-step-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          .process-line,
          .process-timeline-dot {
            display: none !important;
          }
          
          .process-cta-button {
            display: none !important;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .process-step-card {
            border: 2px solid currentColor;
          }
          
          .process-detail-tag {
            border: 1px solid currentColor;
          }
        }

        /* Dark Mode Support (Optional) */
        @media (prefers-color-scheme: dark) {
          .process-section {
            --process-background: #1e293b;
            --process-background-alt: #0f172a;
            --process-primary: #f1f5f9;
            --process-primary-dark: #e2e8f0;
            --process-text: #f8fafc;
            --process-text-light: #cbd5e1;
            --process-text-muted: #94a3b8;
            --process-border: #334155;
            --process-accent: #2dd4bf;
            --process-accent-dark: #0d9488;
          }
          
          .process-step-card {
            background: var(--process-background);
            border-color: var(--process-border);
          }
          
          .process-step-card:hover {
            border-color: var(--process-accent);
          }
          
          .process-timeline-dot {
            border-color: var(--process-background);
          }
        }

        /* Accessibility: Focus Management */
        .process-step-card:focus,
        .process-cta-button:focus {
          outline: none;
        }

        .process-step-card:focus-visible,
        .process-cta-button:focus-visible {
          outline: 3px solid var(--process-focus-ring);
          outline-offset: 2px;
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .process-step-card:hover {
            transform: none;
          }
          
          .process-step-card:active {
            transform: scale(0.98);
          }
          
          .process-cta-button:active {
            transform: scale(0.98);
          }
        }
      `}</style>

      <section id="process" className="process-section" aria-labelledby="process-title">
        <div className="process-container">
          {/* Header */}
          <motion.div
            className="process-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="process-label">Our Process</span>
            <h2 id="process-title" className="process-title">How We Build Success</h2>
            <p className="process-subtitle">
              A clear, transparent process designed for predictability, speed, and exceptional results.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="process-steps-container">
            {/* Timeline Line */}
            <div className="process-line" aria-hidden="true" />
            
            {/* Timeline Dots */}
            {steps.map((step, index) => (
              <div 
                key={`dot-${index}`}
                className="process-timeline-dot"
                style={{
                  left: `${20 + (index * 20)}%`,
                  display: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'none' : 'block'
                }}
                aria-hidden="true"
              />
            ))}

            {/* Process Steps Grid */}
            <motion.div
              className="process-steps-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="process-step-card"
                  variants={itemVariants}
                  tabIndex={0} /* Make cards focusable for keyboard navigation */
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <div className="process-step-icon" aria-hidden="true">
                    {step.icon}
                  </div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                  <div className="process-step-details" aria-label={`Details for ${step.title}`}>
                    {step.details.map((detail, i) => (
                      <span key={i} className="process-detail-tag">
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Button (Uncommented if needed) */}
          {false && ( // Set to true to enable CTA button
            <div className="process-cta">
              <button
                className="process-cta-button"
                onClick={handleCTAClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCTAClick();
                  }
                }}
                aria-label="Get free consultation"
              >
                Get Free Consultation
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Process;