import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiInstagram, FiGithub, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const servicesLinks = [
    { label: 'Website Development', href: '#services' },
    { label: 'Web Applications', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' }
  ];

  const companyLinks = [
    { label: 'Our Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why' },
    { label: 'services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/ariar-technologies/about/?viewAsMember=true' },
    { icon: FiTwitter, label: 'Twitter', href: '#' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/ariar.tech?utm_source=qr&igsh=MXQ2ZTVuM3NoeXJlYQ==' },
    { icon: FiGithub, label: 'GitHub', href: '#' }
  ];

  return (
    <>
      <style>{`
        /* ===== FOOTER SECTION - 100% INDEPENDENT ===== */
        
        /* === FOOTER-SPECIFIC CSS VARIABLES === */
        .footer-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --footer-primary: #0A2540;              /* Dark blue */
          --footer-primary-light: #3B82F6;        /* Light blue */
          --footer-accent: #14B8A6;               /* Teal */
          --footer-accent-dark: #0d9488;          /* Darker teal */
          --footer-background: #FFFFFF;           /* White */
          --footer-background-alt: #F8FAFC;       /* Light gray */
          --footer-text: #0A2540;                 /* Dark text */
          --footer-text-light: #6B7280;           /* Medium gray */
          --footer-text-muted: #9CA3AF;           /* Light gray */
          --footer-border: #E5E7EB;               /* Border gray */
          --footer-border-light: #F3F4F6;         /* Lighter border */
          --footer-focus-ring: #14B8A6;           /* Focus outline */
          --footer-overlay: rgba(255, 255, 255, 0.9);
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --footer-spacing-xs: 0.25rem;
          --footer-spacing-sm: 0.5rem;
          --footer-spacing-md: 1rem;
          --footer-spacing-lg: 1.5rem;
          --footer-spacing-xl: 2rem;
          --footer-spacing-2xl: 3rem;
          --footer-spacing-3xl: 4rem;
          
          /* BORDERS & SHADOWS */
          --footer-border-radius: 0.5rem;
          --footer-border-radius-sm: 0.375rem;
          --footer-border-radius-lg: 0.75rem;
          --footer-border-radius-xl: 1rem;
          --footer-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --footer-transition-fast: 150ms ease;
          --footer-transition-base: 200ms ease;
          --footer-transition-slow: 300ms ease;
          
          /* SHADOWS */
          --footer-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
          --footer-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          --footer-shadow-md: 0 12px 40px rgba(0, 0, 0, 0.1);
          --footer-shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.12);
          --footer-shadow-hover: 0 4px 12px rgba(20, 184, 166, 0.15);
          
          /* SECTION STYLES */
          background: var(--footer-background);
          color: var(--footer-text);
          padding: var(--footer-spacing-xl) 0 var(--footer-spacing-lg);
          border-top: 1px solid var(--footer-border);
          position: relative;
          isolation: isolate; /* Prevent style leakage */
        }

        @media (min-width: 768px) {
          .footer-section {
            padding: var(--footer-spacing-2xl) 0 var(--footer-spacing-xl);
          }
        }

        /* Footer Container */
        .footer-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--footer-spacing-md);
        }

        @media (min-width: 768px) {
          .footer-container {
            padding: 0 var(--footer-spacing-lg);
          }
        }

        /* Footer Grid */
        .footer-grid {
          display: grid;
          gap: var(--footer-spacing-xl);
          margin-bottom: var(--footer-spacing-xl);
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
            gap: var(--footer-spacing-2xl);
          }
        }

        /* About Section */
        .footer-about {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--footer-primary);
          margin-bottom: var(--footer-spacing-md);
          display: flex;
          align-items: center;
          gap: var(--footer-spacing-sm);
          line-height: 1;
        }

        .footer-logo-dot {
          width: 8px;
          height: 8px;
          background: var(--footer-accent);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .footer-description {
          color: var(--footer-text-light);
          line-height: 1.6;
          margin-bottom: var(--footer-spacing-lg);
          font-size: 0.9375rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Location Tag */
        .footer-location-tag {
          display: inline-flex;
          align-items: center;
          gap: var(--footer-spacing-sm);
          background: rgba(20, 184, 166, 0.1);
          color: var(--footer-accent);
          padding: var(--footer-spacing-sm) var(--footer-spacing-md);
          border-radius: var(--footer-border-radius-full);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: var(--footer-spacing-lg);
          border: 1px solid rgba(20, 184, 166, 0.2);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Social Links */
        .footer-social-links {
          display: flex;
          gap: var(--footer-spacing-sm);
          margin-top: var(--footer-spacing-md);
        }

        .footer-social-link {
          width: 40px;
          height: 40px;
          background: var(--footer-border-light);
          border-radius: var(--footer-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--footer-text-light);
          text-decoration: none;
          transition: all var(--footer-transition-base);
          position: relative;
          overflow: hidden;
        }

        .footer-social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--footer-accent);
          opacity: 0;
          transition: opacity var(--footer-transition-base);
        }

        .footer-social-link:hover::before,
        .footer-social-link:focus::before {
          opacity: 1;
        }

        .footer-social-link svg {
          position: relative;
          z-index: 1;
        }

        .footer-social-link:hover,
        .footer-social-link:focus {
          transform: translateY(-2px);
          box-shadow: var(--footer-shadow-hover);
          outline: none;
        }

        .footer-social-link:focus-visible {
          outline: 3px solid var(--footer-focus-ring);
          outline-offset: 2px;
        }

        /* Links Section */
        .footer-links-section h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--footer-primary);
          margin-bottom: var(--footer-spacing-md);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .footer-link-item {
          margin-bottom: var(--footer-spacing-sm);
        }

        .footer-link {
          display: block;
          color: var(--footer-text-light);
          text-decoration: none;
          font-size: 0.875rem;
          transition: all var(--footer-transition-base);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: var(--footer-spacing-xs) 0;
          border-radius: var(--footer-border-radius-sm);
          position: relative;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--footer-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--footer-transition-slow) ease;
        }

        .footer-link:hover,
        .footer-link:focus {
          color: var(--footer-accent);
          padding-left: var(--footer-spacing-sm);
          outline: none;
        }

        .footer-link:hover::before,
        .footer-link:focus::before {
          transform: scaleX(1);
        }

        .footer-link:focus-visible {
          outline: 3px solid var(--footer-focus-ring);
          outline-offset: 2px;
          border-radius: var(--footer-border-radius-sm);
        }

        /* Footer Bottom */
        .footer-bottom {
          text-align: center;
          padding-top: var(--footer-spacing-lg);
          border-top: 1px solid var(--footer-border);
          color: var(--footer-text-muted);
          font-size: 0.875rem;
        }

        .footer-copyright {
          margin: 0;
          line-height: 1.5;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .footer-location {
          margin: var(--footer-spacing-sm) 0 0;
          line-height: 1.5;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .footer-social-link,
          .footer-link {
            transition: none !important;
          }
          
          .footer-social-link:hover,
          .footer-link:hover {
            transform: none !important;
          }
          
          .footer-link::before {
            transition: none !important;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 767px) {
          .footer-grid {
            gap: var(--footer-spacing-lg);
          }
          
          .footer-links-section {
            margin-top: var(--footer-spacing-md);
          }
          
          .footer-links-section h3 {
            font-size: 1.125rem;
          }
          
          .footer-link {
            font-size: 0.9375rem;
            padding: var(--footer-spacing-sm) 0;
          }
        }

        /* Print Styles */
        @media print {
          .footer-section {
            background: white !important;
            border-top: 1px solid #ddd !important;
            padding: 2rem 0 !important;
          }
          
          .footer-social-links {
            display: none !important;
          }
          
          .footer-link:hover {
            padding-left: 0 !important;
            text-decoration: underline;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .footer-social-link,
          .footer-location-tag {
            border: 1px solid currentColor;
          }
          
          .footer-link {
            text-decoration: underline;
          }
        }

        /* Dark Mode Support (Optional) */
        @media (prefers-color-scheme: dark) {
          .footer-section {
            --footer-primary: #f1f5f9;
            --footer-background: #1e293b;
            --footer-background-alt: #0f172a;
            --footer-text: #e2e8f0;
            --footer-text-light: #cbd5e1;
            --footer-text-muted: #94a3b8;
            --footer-border: #334155;
            --footer-border-light: #475569;
            --footer-accent: #2dd4bf;
          }
          
          .footer-section {
            border-top-color: var(--footer-border);
          }
          
          .footer-social-link {
            background: var(--footer-border);
          }
          
          .footer-bottom {
            border-top-color: var(--footer-border);
          }
        }

        /* Accessibility: Focus Management */
        .footer-social-link:focus,
        .footer-link:focus {
          outline: none;
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .footer-social-link:active,
          .footer-link:active {
            transform: scale(0.98);
          }
          
          .footer-link:active {
            background: var(--footer-border-light);
          }
        }
      `}</style>

      <footer className="footer-section" role="contentinfo">
        <div className="footer-container">
          {/* Footer Grid */}
          <div className="footer-grid">
            {/* About Section */}
            <motion.div 
              className="footer-about"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="footer-logo">
                Ariar Technologies
                <span className="footer-logo-dot"></span>
              </div>
              
              <p className="footer-description">
                Founder-led agency building fast, reliable websites and apps for growing businesses. 
                Clear pricing, transparent process, predictable results.
              </p>
              
              <div className="footer-location-tag">
                <FiMapPin size={14} />
                Based in India
              </div>
              
              {/* Social Links */}
              <div className="footer-social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div 
              className="footer-links-section"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3>Services</h3>
              {servicesLinks.map((link, index) => (
                <div key={index} className="footer-link-item">
                  <a 
                    href={link.href}
                    className="footer-link"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </motion.div>

            {/* Company Links */}
            <motion.div 
              className="footer-links-section"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3>Company</h3>
              {companyLinks.map((link, index) => (
                <div key={index} className="footer-link-item">
                  <a 
                    href={link.href}
                    className="footer-link"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Ariar Technologies. All rights reserved.</p>
            <p className="footer-location">Serving clients worldwide</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;