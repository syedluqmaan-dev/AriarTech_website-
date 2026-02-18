import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMessageCircle, FiSend, FiCheckCircle, FiClock, FiUser, FiPhone, FiBriefcase } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ============================================
// EMAILJS CONFIGURATION - YOUR WORKING KEYS
// ============================================
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'NBIMgIMz_EuYj5RK6',
  SERVICE_ID: 'service_q3w7a5l',
  TEMPLATE_ID: 'template_45b0n0j'
};

// ============================================
// HELPER FUNCTION - DEFINED BEFORE USE
// ============================================
const clamp = (min, vw, max) => {
  return `clamp(${min}rem, ${vw}vw, ${max}rem)`;
};

// ============================================
// CONTACT COMPONENT - ONE FILE, EVERYTHING INCLUDED
// ============================================
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  const projectTypes = [
    'Website Development',
    'Web Application',
    'Mobile Application',
    'WhatsApp Product Ordering App ⭐',
    'UI/UX Design',
    'E-commerce Solution',
    'Other'
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('📧 EmailJS initialized for Contact');
  }, []);

  // Mobile detection and window width
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      setError('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // MOBILE: Direct to WhatsApp (smoother UX)
      if (isMobile) {
        const message = `*New Project Inquiry - Ariar Technology*%0A%0A*Contact Details:*%0A👤 Name: ${formData.name}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phone || 'Not provided'}%0A%0A*Project Type:*%0A💼 ${formData.projectType}%0A%0A*Project Description:*%0A📝 ${formData.message}%0A%0A_Ready for free consultation!_`;
        
        window.open(`https://wa.me/919739183566?text=${message}`, '_blank');
        
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
          setIsSubmitting(false);
        }, 2000);
        return;
      }

      // DESKTOP: Send via EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.projectType,
        message: formData.message,
        to_email: 'hello@ariartech.com'
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 3000);

    } catch (error) {
      console.error('Email error:', error);
      setError('Failed to send. Please try WhatsApp below.');
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919739183566?text=*New Project Inquiry - Ariar Technology*%0A%0AHi, I'd like to discuss a project.`, '_blank');
  };

  // Focus handlers
  const handleFocus = (e) => {
    e.target.style.borderColor = '#14B8A6';
    e.target.style.background = 'rgba(20, 184, 166, 0.1)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    e.target.style.background = 'rgba(255, 255, 255, 0.07)';
  };

  // ============================================
  // STYLES - CLEAN, MINIMAL, NO DUPLICATE MEDIA QUERIES
  // ============================================
  const styles = {
    section: {
      background: '#0A2540',
      padding: `${clamp(3, 8, 6)} ${clamp(1, 5, 2)}`,
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    header: {
      textAlign: 'center',
      marginBottom: `${clamp(2, 6, 4)}`
    },
    title: {
      fontSize: clamp(2, 6, 3.5),
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #fff 0%, #CBD5E1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: clamp(0.875, 3, 1.125),
      color: '#94A3B8',
      maxWidth: '700px',
      margin: '0 auto 1.5rem',
      lineHeight: 1.6
    },
    badges: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '0.75rem'
    },
    badge: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '0.5rem 1rem',
      borderRadius: '100px',
      fontSize: '0.8125rem',
      color: '#CBD5E1'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: windowWidth <= 900 ? '1fr' : '1fr 1fr',
      gap: clamp(1.5, 5, 2.5),
      alignItems: 'start'
    },
    // Form Card
    formCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1.5rem',
      padding: clamp(1.5, 4, 2.5)
    },
    formTitle: {
      fontSize: clamp(1.25, 4, 1.75),
      fontWeight: 700,
      marginBottom: '0.5rem',
      color: 'white'
    },
    formSubtitle: {
      color: '#94A3B8',
      fontSize: '0.9375rem',
      marginBottom: '1.5rem'
    },
    successMessage: {
      background: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      borderRadius: '0.75rem',
      padding: '1rem',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#D1FAE5',
      fontSize: '0.9375rem'
    },
    errorMessage: {
      background: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.2)',
      borderRadius: '0.75rem',
      padding: '1rem',
      marginBottom: '1.5rem',
      color: '#FECACA',
      fontSize: '0.9375rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: windowWidth <= 480 ? '1fr' : '1fr 1fr',
      gap: '1rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    formLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#E2E8F0'
    },
    required: {
      color: '#F87171',
      marginLeft: '0.25rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.07)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0.75rem',
      color: 'white',
      fontSize: '0.9375rem',
      transition: 'all 0.2s',
      outline: 'none'
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.07)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0.75rem',
      color: 'white',
      fontSize: '0.9375rem',
      cursor: 'pointer',
      appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 1rem center',
      paddingRight: '2.5rem'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.07)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0.75rem',
      color: 'white',
      fontSize: '0.9375rem',
      resize: 'vertical',
      minHeight: '120px',
      outline: 'none'
    },
    submitBtn: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(135deg, #14B8A6, #0d9488)',
      border: 'none',
      borderRadius: '0.75rem',
      color: 'white',
      fontWeight: 600,
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginTop: '0.5rem'
    },
    spinner: {
      width: '18px',
      height: '18px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 0.8s linear infinite'
    },
    formFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      color: '#94A3B8',
      fontSize: '0.8125rem',
      marginTop: '0.5rem'
    },
    // Right Column
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    whatsappCard: {
      background: 'rgba(37, 211, 102, 0.1)',
      border: '1px solid rgba(37, 211, 102, 0.2)',
      borderRadius: '1.5rem',
      padding: '2rem',
      textAlign: 'center'
    },
    whatsappIcon: {
      background: 'rgba(37, 211, 102, 0.2)',
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem'
    },
    whatsappTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '0.5rem',
      color: 'white'
    },
    whatsappDescription: {
      color: '#94A3B8',
      marginBottom: '1.5rem'
    },
    whatsappBtn: {
      background: '#25D366',
      color: 'white',
      border: 'none',
      borderRadius: '100px',
      padding: '0.875rem 2rem',
      fontWeight: 600,
      fontSize: '1rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginBottom: '1rem'
    },
    whatsappNote: {
      color: '#64748B',
      fontSize: '0.8125rem'
    },
    trustCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1.5rem',
      padding: '1.5rem'
    },
    trustTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '1.25rem',
      color: 'white'
    },
    trustList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    trustItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      color: '#CBD5E1',
      fontSize: '0.9375rem'
    },
    trustCheck: {
      color: '#14B8A6',
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1
    },
    trustDesc: {
      display: 'block',
      color: '#94A3B8',
      fontSize: '0.8125rem',
      marginTop: '0.125rem'
    },
    quickContact: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1.5rem',
      padding: '1.25rem',
      textAlign: 'center'
    },
    quickContactTitle: {
      color: '#94A3B8',
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    },
    quickContactLink: {
      color: 'white',
      fontSize: '1.125rem',
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'color 0.2s'
    },
    // Mobile CTA
    mobileCta: {
      display: windowWidth <= 900 ? 'block' : 'none',
      marginTop: '2rem',
      textAlign: 'center'
    },
    mobileCtaBtn: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(135deg, #3B82F6, #2563eb)',
      border: 'none',
      borderRadius: '1rem',
      color: 'white',
      fontWeight: 600,
      fontSize: '1.125rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    mobileCtaNote: {
      color: '#94A3B8',
      fontSize: '0.8125rem',
      marginTop: '0.75rem'
    },
    btnArrow: {
      fontSize: '1.125rem'
    }
  };

  return (
    <>
      {/* Global keyframes for spinner animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        .whatsapp-btn:hover {
          background: #20bd5a !important;
          transform: scale(1.02);
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20, 184, 166, 0.3);
        }
        .mobile-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }
        .quick-contact-link:hover {
          color: #14B8A6 !important;
        }
        select option {
          background: #0A2540;
          color: white;
        }
      `}</style>

      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          {/* Header */}
          <motion.div 
            style={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={styles.title}>
              Ready to Build Something Great?
            </h2>
            <p style={styles.subtitle}>
              Let's discuss your project with no pressure. We'll provide honest feedback on feasibility, timeline, and approach.
            </p>
            <div style={styles.badges}>
              <span style={styles.badge}>✓ No commitment</span>
              <span style={styles.badge}>✓ 24h response</span>
              <span style={styles.badge}>✓ Free estimate</span>
              <span style={styles.badge}>✓ NDA ready</span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div style={styles.grid}>
            {/* Left Column: Form Card */}
            <motion.div 
              style={styles.formCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 style={styles.formTitle}>Get a detailed proposal</h3>
              <p style={styles.formSubtitle}>
                Fill this form and we'll respond within 24 hours
              </p>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    style={styles.successMessage}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <FiCheckCircle size={20} />
                    <span>
                      {isMobile 
                        ? 'WhatsApp opened! Our team will reply in minutes.' 
                        : 'Message sent! We\'ll email you within 24 hours.'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div 
                    style={styles.errorMessage}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      <FiUser size={14} />
                      Your Name <span style={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      required
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      <FiMail size={14} />
                      Email <span style={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      required
                      style={styles.input}
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      <FiPhone size={14} />
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      <FiBriefcase size={14} />
                      Project Type <span style={styles.required}>*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      required
                      style={styles.select}
                    >
                      <option value="">Select service</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>
                    Project Description <span style={styles.required}>*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project goals, requirements, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    rows="4"
                    style={styles.textarea}
                  />
                </div>

                <button 
                  type="submit" 
                  style={styles.submitBtn}
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span style={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Get Free Consultation
                    </>
                  )}
                </button>

                <p style={styles.formFooter}>
                  <FiClock size={14} />
                  Guaranteed response within 24 hours
                </p>
              </form>
            </motion.div>

            {/* Right Column: WhatsApp & Trust */}
            <motion.div 
              style={styles.rightColumn}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* WhatsApp Card */}
              <div style={styles.whatsappCard}>
                <div style={styles.whatsappIcon}>
                  <FiMessageCircle size={32} color="#25D366" />
                </div>
                <h4 style={styles.whatsappTitle}>Need help faster?</h4>
                <p style={styles.whatsappDescription}>
                  Average response: <strong>5 minutes</strong> on WhatsApp
                </p>
                <button 
                  onClick={handleWhatsApp} 
                  style={styles.whatsappBtn}
                  className="whatsapp-btn"
                >
                  Chat on WhatsApp
                  <span style={styles.btnArrow}>→</span>
                </button>
                <p style={styles.whatsappNote}>
                  No form required. Just say hi 👋
                </p>
              </div>

              {/* Trust Signals */}
              <div style={styles.trustCard}>
                <h4 style={styles.trustTitle}>Why work with us?</h4>
                <ul style={styles.trustList}>
                  <li style={styles.trustItem}>
                    <span style={styles.trustCheck}>✓</span>
                    <div>
                      <strong>Founder-led</strong>
                      <span style={styles.trustDesc}>Work directly with decision makers</span>
                    </div>
                  </li>
                  <li style={styles.trustItem}>
                    <span style={styles.trustCheck}>✓</span>
                    <div>
                      <strong>7-14 day delivery</strong>
                      <span style={styles.trustDesc}>Websites in 1-2 weeks</span>
                    </div>
                  </li>
                  <li style={styles.trustItem}>
                    <span style={styles.trustCheck}>✓</span>
                    <div>
                      <strong>Long-term support</strong>
                      <span style={styles.trustDesc}>We stay post-launch</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div style={styles.quickContact}>
                <p style={styles.quickContactTitle}>📧 Prefer email?</p>
                <a 
                  href="mailto:hello@ariartech.com" 
                  style={styles.quickContactLink}
                  className="quick-contact-link"
                >
                  hello@ariartech.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Mobile CTA - Only visible on small screens */}
          <div style={styles.mobileCta}>
            <button 
              onClick={() => window.location.href = '#contact'} 
              style={styles.mobileCtaBtn}
              className="mobile-cta-btn"
            >
              Start Your Project
              <span style={styles.btnArrow}>→</span>
            </button>
            <p style={styles.mobileCtaNote}>
              Free consultation · No pressure
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;