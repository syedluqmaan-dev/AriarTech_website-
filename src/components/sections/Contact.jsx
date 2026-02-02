import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMessageCircle, FiSend, FiClock, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMethod, setActiveMethod] = useState('email');

  const projectTypes = [
    'Website Development',
    'Web Application',
    'Mobile Application',
    'UI/UX Design',
    'E-commerce Solution',
    'Performance Optimization',
    'Maintenance & Support',
    'Other'
  ];

  const contactMethods = [
    { 
      id: 'email', 
      icon: FiMail, 
      title: 'Send Email', 
      action: 'hello@ariartech.com',
      color: '#14B8A6',
      delay: 0.1,
      desc: 'Detailed project briefs',
      handler: () => window.location.href = 'mailto:hello@ariartech.com?subject=Project Inquiry - Ariar Technologies&body=Hello Ariar Team,%0D%0A%0D%0AI am interested in discussing a project with you. Please find my details below:%0D%0A%0D%0A- Name:%0D%0A- Email:%0D%0A- Phone:%0D%0A- Project Type:%0D%0A- Brief Description:%0D%0A%0D%0AI look forward to hearing from you.'
    },
    { 
      id: 'phone', 
      icon: FiPhone, 
      title: 'Call Us', 
      action: '+91 9739183566',
      color: '#0A2540',
      delay: 0.2,
      desc: 'Direct conversation',
      handler: () => window.location.href = 'tel:+919739183566'
    },
    { 
      id: 'whatsapp', 
      icon: FiMessageCircle, 
      title: 'WhatsApp', 
      action: '+91 9739183566',
      color: '#25D366',
      delay: 0.3,
      desc: 'Quick inquiries',
      handler: () => {
        // Create a professional WhatsApp message template
        const message = `Hello Ariar Technologies Team! 👋

I'm interested in discussing a project with you.

*Contact Information:*
- Name: ${formData.name || 'To be provided'}
- Email: ${formData.email || 'To be provided'}
- Phone: ${formData.phone || 'To be provided'}

*Project Details:*
- Type: ${formData.projectType || 'To be discussed'}
- Description: ${formData.message || 'Looking forward to discussing my project requirements.'}

I'd like to schedule a consultation to discuss this further. Please let me know your availability.

Looking forward to hearing from you!`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919739183566?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      }
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: ''
      });

      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1200);
  };

  const handleContactMethod = (methodId) => {
    setActiveMethod(methodId);
    const method = contactMethods.find(m => m.id === methodId);
    if (method && method.handler) {
      method.handler();
    }
  };

  return (
    <>
      <style >{`
        /* ===== CONTACT SECTION - 100% INDEPENDENT ===== */
        
        /* === CONTACT-SPECIFIC CSS VARIABLES === */
        .contact-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --contact-primary: #0A2540;              /* Dark blue */
          --contact-primary-light: #3B82F6;        /* Light blue */
          --contact-accent: #14B8A6;               /* Teal */
          --contact-accent-dark: #0d9488;          /* Darker teal */
          --contact-success: #10b981;              /* Green */
          --contact-whatsapp: #25D366;             /* WhatsApp green */
          --contact-background: #0A2540;           /* Dark blue */
          --contact-background-alt: #0f172a;       /* Darker blue */
          --contact-text: #FFFFFF;                 /* White */
          --contact-text-light: #CBD5E1;           /* Light gray */
          --contact-text-muted: #94A3B8;           /* Medium gray */
          --contact-border: rgba(255, 255, 255, 0.1); /* Border with opacity */
          --contact-border-light: rgba(255, 255, 255, 0.05); /* Lighter border */
          --contact-focus-ring: #14B8A6;           /* Focus outline */
          --contact-overlay: rgba(255, 255, 255, 0.05); /* Overlay */
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --contact-spacing-xs: 0.25rem;
          --contact-spacing-sm: 0.5rem;
          --contact-spacing-md: 1rem;
          --contact-spacing-lg: 1.5rem;
          --contact-spacing-xl: 2rem;
          --contact-spacing-2xl: 3rem;
          --contact-spacing-3xl: 4rem;
          
          /* BORDERS & SHADOWS */
          --contact-border-radius: 0.75rem;
          --contact-border-radius-sm: 0.5rem;
          --contact-border-radius-lg: 1rem;
          --contact-border-radius-xl: 1.25rem;
          --contact-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --contact-transition-fast: 150ms ease;
          --contact-transition-base: 200ms ease;
          --contact-transition-slow: 300ms ease;
          
          /* SHADOWS */
          --contact-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
          --contact-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          --contact-shadow-md: 0 12px 48px rgba(0, 0, 0, 0.25);
          --contact-shadow-lg: 0 20px 64px rgba(0, 0, 0, 0.3);
          --contact-shadow-accent: 0 4px 16px rgba(20, 184, 166, 0.3);
          
          /* SECTION STYLES */
          padding: var(--contact-spacing-2xl) 0;
          background: var(--contact-background);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--contact-accent), transparent);
          z-index: 1;
        }

        @media (min-width: 768px) {
          .contact-section {
            padding: var(--contact-spacing-3xl) 0;
          }
        }

        /* Contact Container */
        .contact-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--contact-spacing-md);
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .contact-container {
            padding: 0 var(--contact-spacing-lg);
          }
        }

        /* Header */
        .contact-header {
          text-align: center;
          margin-bottom: var(--contact-spacing-2xl);
        }

        .contact-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: var(--contact-spacing-sm);
          line-height: 1.1;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .contact-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--contact-text-muted);
          max-width: 600px;
          margin: 0 auto var(--contact-spacing-md);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* WhatsApp Notice */
        .contact-whatsapp-notice {
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.2);
          border-radius: var(--contact-border-radius);
          padding: var(--contact-spacing-md);
          margin-top: var(--contact-spacing-md);
          text-align: center;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-whatsapp-notice p {
          color: #BBF7D0;
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .contact-whatsapp-notice strong {
          color: #22C55E;
        }

        /* Contact Options */
        .contact-options {
          display: flex;
          flex-direction: column;
          gap: var(--contact-spacing-lg);
          margin-bottom: var(--contact-spacing-2xl);
        }

        @media (min-width: 768px) {
          .contact-options {
            flex-direction: row;
            justify-content: center;
            gap: var(--contact-spacing-md);
          }
        }

        .contact-method-card {
          flex: 1;
          min-width: 0;
          padding: var(--contact-spacing-lg);
          background: var(--contact-overlay);
          border: 2px solid var(--contact-border);
          border-radius: var(--contact-border-radius-lg);
          cursor: pointer;
          transition: all var(--contact-transition-slow) cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .contact-method-card:hover {
          transform: translateY(-4px);
          border-color: rgba(20, 184, 166, 0.4);
          background: rgba(20, 184, 166, 0.1);
        }

        .contact-method-card.contact-method-active {
          border-color: var(--contact-accent);
          background: rgba(20, 184, 166, 0.15);
        }

        .contact-method-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--contact-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--contact-spacing-md);
          background: linear-gradient(135deg, var(--method-color) 0%, rgba(20, 184, 166, 0.3) 100%);
        }

        .contact-method-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--contact-text);
          margin-bottom: var(--contact-spacing-sm);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .contact-method-action {
          color: var(--contact-accent);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: var(--contact-spacing-sm);
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .contact-method-desc {
          color: var(--contact-text-muted);
          font-size: 0.75rem;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Contact Wrapper */
        .contact-wrapper {
          background: var(--contact-overlay);
          backdrop-filter: blur(10px);
          border-radius: var(--contact-border-radius-xl);
          padding: var(--contact-spacing-xl);
          border: 1px solid var(--contact-border);
        }

        @media (min-width: 768px) {
          .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--contact-spacing-2xl);
            padding: var(--contact-spacing-2xl);
          }
        }

        /* Form Side */
        .contact-form-side h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--contact-text);
          margin-bottom: var(--contact-spacing-sm);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .contact-form-intro {
          color: var(--contact-text-muted);
          font-size: 0.875rem;
          margin-bottom: var(--contact-spacing-xl);
          line-height: 1.6;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Form Grid */
        .contact-form-grid {
          display: grid;
          gap: var(--contact-spacing-md);
          margin-bottom: var(--contact-spacing-lg);
        }

        @media (min-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .contact-form-grid > :last-child {
            grid-column: 1 / -1;
          }
        }

        /* Form Inputs */
        .contact-input {
          width: 100%;
          padding: var(--contact-spacing-md);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid var(--contact-border);
          border-radius: var(--contact-border-radius);
          color: var(--contact-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.875rem;
          transition: all var(--contact-transition-base);
        }

        .contact-input:focus {
          outline: none;
          border-color: var(--contact-accent);
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-textarea {
          width: 100%;
          padding: var(--contact-spacing-md);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid var(--contact-border);
          border-radius: var(--contact-border-radius);
          color: var(--contact-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.875rem;
          min-height: 120px;
          resize: vertical;
          transition: all var(--contact-transition-base);
        }

        .contact-textarea:focus {
          outline: none;
          border-color: var(--contact-accent);
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-select {
          width: 100%;
          padding: var(--contact-spacing-md);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid var(--contact-border);
          border-radius: var(--contact-border-radius);
          color: var(--contact-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all var(--contact-transition-base);
        }

        .contact-select:focus {
          outline: none;
          border-color: var(--contact-accent);
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-select option {
          background: var(--contact-background);
          color: var(--contact-text);
        }

        /* Submit Button */
        .contact-submit-btn {
          width: 100%;
          padding: var(--contact-spacing-md);
          background: linear-gradient(135deg, var(--contact-accent) 0%, var(--contact-accent-dark) 100%);
          color: var(--contact-text);
          border: none;
          border-radius: var(--contact-border-radius);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--contact-transition-slow);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--contact-spacing-sm);
        }

        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--contact-shadow-accent);
        }

        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Info Side */
        .contact-info-side {
          padding-top: var(--contact-spacing-lg);
        }

        @media (min-width: 768px) {
          .contact-info-side {
            padding-top: 0;
            border-left: 1px solid var(--contact-border);
            padding-left: var(--contact-spacing-2xl);
          }
        }

        /* Process Steps */
        .contact-process-steps {
          display: flex;
          flex-direction: column;
          gap: var(--contact-spacing-lg);
          margin-bottom: var(--contact-spacing-xl);
        }

        .contact-process-step {
          display: flex;
          gap: var(--contact-spacing-md);
        }

        .contact-step-number {
          width: 32px;
          height: 32px;
          background: rgba(20, 184, 166, 0.2);
          border: 2px solid var(--contact-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--contact-accent);
          font-weight: 600;
          font-size: 0.875rem;
          flex-shrink: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .contact-step-content h4 {
          color: var(--contact-text);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: var(--contact-spacing-xs);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .contact-step-content p {
          color: var(--contact-text-muted);
          font-size: 0.75rem;
          margin: 0;
          line-height: 1.4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Assurance */
        .contact-assurance {
          background: rgba(20, 184, 166, 0.1);
          border-left: 3px solid var(--contact-accent);
          border-radius: var(--contact-border-radius-sm);
          padding: var(--contact-spacing-md);
          margin-top: var(--contact-spacing-xl);
        }

        .contact-assurance-content {
          display: flex;
          align-items: flex-start;
          gap: var(--contact-spacing-sm);
        }

        .contact-assurance p {
          color: var(--contact-text-light);
          font-size: 0.75rem;
          margin: 0;
          line-height: 1.4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Success Message */
        .contact-success-message {
          background: rgba(20, 184, 166, 0.1);
          border: 1px solid var(--contact-accent);
          border-radius: var(--contact-border-radius);
          padding: var(--contact-spacing-lg);
          text-align: center;
        }

        .contact-success-message h3 {
          color: var(--contact-accent);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: var(--contact-spacing-sm);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .contact-success-message p {
          color: var(--contact-text-light);
          font-size: 0.875rem;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Placeholder */
        ::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }

        /* Dark Mode (already dark, but for consistency) */
        @media (prefers-color-scheme: light) {
          .contact-section {
            --contact-background: #0A2540;
            --contact-background-alt: #0f172a;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .contact-method-card,
          .contact-input,
          .contact-textarea,
          .contact-select {
            border: 2px solid currentColor;
          }
        }

        /* Print Styles */
        @media print {
          .contact-section {
            background: white !important;
          }
          
          .contact-title {
            -webkit-text-fill-color: black !important;
            background: none !important;
          }
          
          .contact-method-card,
          .contact-wrapper {
            border: 1px solid #ddd !important;
            background: white !important;
            color: black !important;
          }
          
          .contact-submit-btn {
            display: none !important;
          }
        }
      `}</style>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <motion.h2
              id="contact-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="contact-title"
            >
              Let's Build Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="contact-subtitle"
            >
              Transform your vision into reality with our expert team
            </motion.p>
            
            {/* WhatsApp Notice */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="contact-whatsapp-notice"
            >
              <p>
                <strong>Pro Tip:</strong> Fill out the form first, then click WhatsApp - 
                your information will be pre-filled in the message! 📱
              </p>
            </motion.div>
          </div>

          {/* Contact Methods */}
          <div className="contact-options">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: method.delay }}
                className={`contact-method-card ${activeMethod === method.id ? 'contact-method-active' : ''}`}
                onClick={() => handleContactMethod(method.id)}
                style={{ '--method-color': method.color }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleContactMethod(method.id);
                  }
                }}
                aria-label={`Contact via ${method.title}: ${method.action}`}
              >
                <div className="contact-method-icon">
                  <method.icon size={24} color="#FFFFFF" />
                </div>
                <h3>{method.title}</h3>
                <span className="contact-method-action">{method.action}</span>
                <p className="contact-method-desc">{method.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="contact-wrapper">
            <div className="contact-form-side">
              <h3>Project Inquiry</h3>
              <p className="contact-form-intro">
                Fill out the form below and we'll get back to you within 24 hours 
                with a detailed proposal. Your information helps us provide better assistance.
              </p>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="contact-success-message"
                  >
                    <FiCheckCircle size={48} color="#14B8A6" style={{ marginBottom: '1rem' }} />
                    <h3>Form Submitted Successfully!</h3>
                    <p>Now you can click WhatsApp to send this information directly to our team!</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-form-grid">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        required
                        aria-label="Your name"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                        aria-label="Email address"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-input"
                        aria-label="Phone number"
                      />
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="contact-select"
                        required
                        aria-label="Project type"
                      >
                        <option value="">Select Project Type *</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, goals, timeline, and budget... *"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-textarea"
                      required
                      aria-label="Project description"
                    />
                    
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: '1rem',
                      marginTop: '1.5rem' 
                    }}>
                      <button 
                        type="submit" 
                        className="contact-submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <FiSend size={16} />
                            Submit Project Inquiry
                          </>
                        )}
                      </button>
                      
                      <p style={{ 
                        textAlign: 'center', 
                        color: 'var(--contact-text-muted)', 
                        fontSize: '0.75rem',
                        margin: '0' 
                      }}>
                        After submitting, use WhatsApp for instant communication with our team!
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="contact-info-side">
              {/* Process Steps */}
              <div className="contact-process-steps">
                <div className="contact-process-step">
                  <div className="contact-step-number">1</div>
                  <div className="contact-step-content">
                    <h4>Fill the Form</h4>
                    <p>Provide your project details and contact information</p>
                  </div>
                </div>
                <div className="contact-process-step">
                  <div className="contact-step-number">2</div>
                  <div className="contact-step-content">
                    <h4>Choose Contact Method</h4>
                    <p>Use WhatsApp for instant messaging or email for detailed communication</p>
                  </div>
                </div>
                <div className="contact-process-step">
                  <div className="contact-step-number">3</div>
                  <div className="contact-step-content">
                    <h4>Get Consultation</h4>
                    <p>We'll analyze your requirements and schedule a free consultation</p>
                  </div>
                </div>
                <div className="contact-process-step">
                  <div className="contact-step-number">4</div>
                  <div className="contact-step-content">
                    <h4>Receive Proposal</h4>
                    <p>Get a detailed project proposal with timeline and pricing</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Benefits */}
              <div className="contact-assurance" style={{ marginTop: '0' }}>
                <div className="contact-assurance-content">
                  <FiMessageCircle size={16} color="#25D366" />
                  <p>
                    <strong>Why WhatsApp?</strong> Get instant responses, share files/images, 
                    and have real-time conversations with our team. Perfect for quick questions 
                    and faster project initiation.
                  </p>
                </div>
              </div>

              {/* Assurance */}
              <div className="contact-assurance">
                <div className="contact-assurance-content">
                  <FiClock size={16} color="#14B8A6" />
                  <p>
                    <strong>24-Hour Response:</strong> We guarantee a response within 24 hours 
                    for all project inquiries. Your time is valuable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;