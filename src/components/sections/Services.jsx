import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Fast, scalable websites with modern tech stack for better performance and conversions.',
      features: ['React/Next.js', 'Mobile-First', 'SEO Ready', 'High Speed']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform apps for iOS & Android, built for performance and user growth.',
      features: ['React Native', 'Both Platforms', 'MVP Ready', 'App Store']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered designs that improve usability and drive conversions.',
      features: ['Product Design', 'UX Flows', 'Design Systems', 'User Testing']
    },
    {
      icon: '🚀',
      title: 'Product Engineering',
      description: 'Full product development from idea to launch, plus scaling existing platforms.',
      features: ['MVP Build', 'Re-engineering', 'Scalable Tech', 'Fast Launch']
    }
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

  return (
    <>
      <style>{`
        /* ===== SERVICES SECTION - 100% INDEPENDENT ===== */
        
        /* === SERVICES-SPECIFIC CSS VARIABLES === */
        .services-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --services-primary: #0A2540;          /* Dark blue */
          --services-accent: #14B8A6;           /* Teal */
          --services-accent-dark: #0d9488;      /* Darker teal */
          --services-background: #FFFFFF;       /* White */
          --services-background-alt: #F8FAFC;   /* Light gray */
          --services-text: #000000;             /* Black */
          --services-text-light: #6B7280;       /* Medium gray */
          --services-text-muted: #9CA3AF;       /* Light gray */
          --services-border: #E5E7EB;           /* Border gray */
          --services-border-light: #F3F4F6;     /* Lighter border */
          --services-focus-ring: #14B8A6;       /* Focus outline */
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --services-spacing-xs: 0.5rem;
          --services-spacing-sm: 1rem;
          --services-spacing-md: 1.5rem;
          --services-spacing-lg: 2rem;
          --services-spacing-xl: 3rem;
          --services-spacing-2xl: 4rem;
          --services-spacing-3xl: 5rem;
          
          /* BORDERS & SHADOWS */
          --services-border-radius: 0.75rem;
          --services-border-radius-sm: 0.5rem;
          --services-border-radius-lg: 1rem;
          --services-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --services-transition-fast: 150ms ease;
          --services-transition-base: 200ms ease;
          --services-transition-slow: 300ms ease;
          
          /* SHADOWS */
          --services-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
          --services-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          --services-shadow-md: 0 12px 40px rgba(0, 0, 0, 0.1);
          --services-shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.12);
          --services-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.08);
          
          /* SECTION STYLES */
          padding: var(--services-spacing-xl) 0;
          background: var(--services-background-alt);
          position: relative;
          isolation: isolate; /* Prevent style leakage */
        }

        @media (min-width: 768px) {
          .services-section {
            padding: var(--services-spacing-2xl) 0;
          }
        }

        @media (min-width: 1024px) {
          .services-section {
            padding: var(--services-spacing-3xl) 0;
          }
        }

        /* Services Container */
        .services-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--services-spacing-sm);
        }

        @media (min-width: 768px) {
          .services-container {
            padding: 0 var(--services-spacing-md);
          }
        }

        /* Section Header */
        .services-header {
          text-align: center;
          margin-bottom: var(--services-spacing-xl);
        }

        @media (min-width: 768px) {
          .services-header {
            margin-bottom: var(--services-spacing-2xl);
          }
        }

        .services-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--services-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--services-spacing-sm);
          padding: var(--services-spacing-xs) var(--services-spacing-sm);
          background: rgba(20, 184, 166, 0.08);
          border-radius: var(--services-border-radius-full);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .services-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: var(--services-primary);
          line-height: 1.1;
          margin-bottom: var(--services-spacing-sm);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .services-subtitle {
          font-size: clamp(0.9375rem, 2vw, 1.0625rem);
          color: var(--services-text);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          gap: var(--services-spacing-md);
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--services-spacing-lg);
          }
        }

        /* Service Card */
        .service-card {
          background: var(--services-background);
          border-radius: var(--services-border-radius);
          padding: var(--services-spacing-lg);
          transition: all var(--services-transition-base);
          border: 1px solid var(--services-border);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--services-accent), var(--services-primary));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--services-transition-slow) ease;
        }

        .service-card:hover,
        .service-card:focus-within {
          border-color: var(--services-accent);
          box-shadow: var(--services-shadow-hover);
          transform: translateY(-4px);
        }

        .service-card:hover::before,
        .service-card:focus-within::before {
          transform: scaleX(1);
        }

        .service-card:focus-within {
          outline: 3px solid var(--services-focus-ring);
          outline-offset: 2px;
        }

        /* Service Icon */
        .service-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--services-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: var(--services-spacing-md);
          background: rgba(20, 184, 166, 0.08);
        }

        /* Service Content */
        .service-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--services-primary);
          margin-bottom: var(--services-spacing-sm);
          line-height: 1.2;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .service-description {
          font-size: 0.875rem;
          color: var(--services-text-light);
          line-height: 1.5;
          margin-bottom: var(--services-spacing-md);
          flex: 1;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Service Features */
        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-top: auto;
        }

        .feature-tag {
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--services-accent);
          background: rgba(20, 184, 166, 0.08);
          padding: 0.1875rem 0.5rem;
          border-radius: var(--services-border-radius-full);
          border: 1px solid rgba(20, 184, 166, 0.12);
          white-space: nowrap;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-card::before {
            transition: none !important;
          }
          
          .service-card:hover,
          .service-card:focus-within {
            transform: none !important;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .service-card {
            padding: var(--services-spacing-md);
          }
          
          .service-icon {
            width: 44px;
            height: 44px;
            font-size: 1.25rem;
          }
          
          .services-grid {
            gap: var(--services-spacing-sm);
          }
        }

        /* Print Styles */
        @media print {
          .services-section {
            background: white !important;
            padding: 2rem 0 !important;
          }
          
          .service-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          .service-card::before {
            display: none;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .service-card {
            border: 2px solid currentColor;
          }
          
          .feature-tag {
            border: 1px solid currentColor;
          }
        }

        /* Dark Mode Support (Optional) */
        @media (prefers-color-scheme: dark) {
          .services-section {
            --services-background: #1e293b;
            --services-background-alt: #0f172a;
            --services-primary: #f1f5f9;
            --services-text: #e2e8f0;
            --services-text-light: #94a3b8;
            --services-border: #334155;
            --services-border-light: #475569;
            --services-accent: #2dd4bf;
          }
          
          .service-card {
            background: var(--services-background);
            border-color: var(--services-border);
          }
          
          .service-card:hover {
            border-color: var(--services-accent);
          }
        }

        /* Accessibility: Focus Management */
        .service-card:focus {
          outline: none;
        }

        .service-card:focus-visible {
          outline: 3px solid var(--services-focus-ring);
          outline-offset: 2px;
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .service-card:hover {
            transform: none;
          }
          
          .service-card:active {
            transform: scale(0.98);
          }
        }
      `}</style>

      <section id="services" className="services-section" aria-labelledby="services-title">
        <div className="services-container">
          <motion.div 
            className="services-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="services-label" aria-label="Services section">What We Do</span>
            <h2 id="services-title" className="services-title">
              Digital Solutions That Scale
            </h2>
            <p className="services-subtitle">
              Full-stack development and design for modern businesses. 
              We build fast, scalable products that drive growth.
            </p>
          </motion.div>

          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                variants={itemVariants}
                tabIndex={0} /* Make cards focusable for keyboard navigation */
              >
                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features" aria-label={`Features of ${service.title}`}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;