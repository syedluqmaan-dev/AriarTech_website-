import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMessageCircle, FiSend, FiClock, FiCheckCircle, FiChevronDown } from 'react-icons/fi';

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
  const [expandedFaq, setExpandedFaq] = useState(null);

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
      handler: () => window.location.href = 'mailto:hello@ariartech.com?subject=Project Inquiry - Ariar Technology&body=Hello Ariar Team,%0D%0A%0D%0AI am interested in discussing a project with you. Please find my details below:%0D%0A%0D%0A- Name:%0D%0A- Email:%0D%0A- Phone:%0D%0A- Project Type:%0D%0A- Brief Description:%0D%0A%0D%0AI look forward to hearing from you.'
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
        const message = `Hello Ariar Technology Team! 👋

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

  const faqs = [
    { q: 'Response time?', a: 'Within 24 hours' },
    { q: 'Free consultation?', a: 'Yes, always' },
    { q: 'NDA available?', a: 'Signed on request' }
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

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <style >{`
        /* ===== CONTACT SECTION - 100% INDEPENDENT ===== */
        
        /* === CONTACT-SPECIFIC CSS VARIABLES === */
        .contact-section {
          /* COLORS - COMPLETELY INDEPENDENT */
          --contact-primary: #0A2540;
          --contact-primary-light: #3B82F6;
          --contact-accent: #14B8A6;
          --contact-accent-dark: #0d9488;
          --contact-success: #10b981;
          --contact-whatsapp: #25D366;
          --contact-background: #0A2540;
          --contact-background-alt: #0f172a;
          --contact-text: #FFFFFF;
          --contact-text-light: #CBD5E1;
          --contact-text-muted: #94A3B8;
          --contact-border: rgba(255, 255, 255, 0.1);
          --contact-border-light: rgba(255, 255, 255, 0.05);
          --contact-focus-ring: #14B8A6;
          --contact-overlay: rgba(255, 255, 255, 0.05);
          
          /* SPACING - COMPLETELY INDEPENDENT - OPTIMIZED */
          --contact-spacing-xs: 0.25rem;
          --contact-spacing-sm: 0.5rem;
          --contact-spacing-md: 0.75rem;
          --contact-spacing-lg: 1rem;
          --contact-spacing-xl: 1.5rem;
          --contact-spacing-2xl: 2rem;
          --contact-spacing-3xl: 2.5rem;
          
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
          
          /* SECTION STYLES - OPTIMIZED */
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

        /* Header - OPTIMIZED */
        .contact-header {
          text-align: center;
          margin-bottom: var(--contact-spacing-xl);
        }

        @media (min-width: 768px) {
          .contact-header {
            margin-bottom: var(--contact-spacing-2xl);
          }
        }

        .contact-title {
          font-size: clamp(1.75rem, 6vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: var(--contact-spacing-xs);
          line-height: 1.1;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-title {
            margin-bottom: var(--contact-spacing-sm);
          }
        }

        .contact-subtitle {
          font-size: clamp(0.875rem, 3vw, 1.25rem);
          color: var(--contact-text-muted);
          max-width: 600px;
          margin: 0 auto;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* WhatsApp Notice - OPTIMIZED */
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
          font-size: 0.75rem;
          margin: 0;
          line-height: 1.4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-whatsapp-notice p {
            font-size: 0.875rem;
          }
        }

        .contact-whatsapp-notice strong {
          color: #22C55E;
        }

        /* Contact Options - OPTIMIZED */
        .contact-options {
          display: flex;
          flex-direction: column;
          gap: var(--contact-spacing-md);
          margin-bottom: var(--contact-spacing-xl);
        }

        @media (min-width: 768px) {
          .contact-options {
            flex-direction: row;
            justify-content: center;
            gap: var(--contact-spacing-md);
            margin-bottom: var(--contact-spacing-2xl);
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

        @media (max-width: 768px) {
          .contact-method-card {
            padding: var(--contact-spacing-md);
            display: flex;
            align-items: center;
            gap: var(--contact-spacing-md);
          }
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
          width: 48px;
          height: 48px;
          border-radius: var(--contact-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--contact-spacing-sm);
          background: linear-gradient(135deg, var(--method-color) 0%, rgba(20, 184, 166, 0.3) 100%);
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .contact-method-icon {
            width: 56px;
            height: 56px;
            margin-bottom: var(--contact-spacing-md);
          }
        }

        @media (max-width: 768px) {
          .contact-method-content {
            flex: 1;
          }
        }

        .contact-method-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--contact-text);
          margin-bottom: 0.25rem;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-method-card h3 {
            font-size: 1.125rem;
            margin-bottom: var(--contact-spacing-sm);
          }
        }

        .contact-method-action {
          color: var(--contact-accent);
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-method-action {
            font-size: 0.875rem;
            margin-bottom: var(--contact-spacing-sm);
          }
        }

        .contact-method-desc {
          color: var(--contact-text-muted);
          font-size: 0.6875rem;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-method-desc {
            font-size: 0.75rem;
          }
        }

        /* Contact Wrapper - OPTIMIZED */
        .contact-wrapper {
          background: var(--contact-overlay);
          backdrop-filter: blur(10px);
          border-radius: var(--contact-border-radius-xl);
          padding: var(--contact-spacing-lg);
          border: 1px solid var(--contact-border);
        }

        @media (min-width: 768px) {
          .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--contact-spacing-xl);
            padding: var(--contact-spacing-xl);
          }
        }

        @media (min-width: 1024px) {
          .contact-wrapper {
            gap: var(--contact-spacing-2xl);
            padding: var(--contact-spacing-2xl);
          }
        }

        /* Form Side - OPTIMIZED */
        .contact-form-side h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--contact-text);
          margin-bottom: var(--contact-spacing-xs);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-form-side h3 {
            font-size: 1.75rem;
            margin-bottom: var(--contact-spacing-sm);
          }
        }

        .contact-form-intro {
          color: var(--contact-text-muted);
          font-size: 0.75rem;
          margin-bottom: var(--contact-spacing-lg);
          line-height: 1.5;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-form-intro {
            font-size: 0.875rem;
            margin-bottom: var(--contact-spacing-xl);
          }
        }

        /* Form Grid - OPTIMIZED */
        .contact-form-grid {
          display: grid;
          gap: var(--contact-spacing-sm);
          margin-bottom: var(--contact-spacing-md);
        }

        @media (min-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--contact-spacing-md);
          }
          
          .contact-form-grid > :nth-child(3),
          .contact-form-grid > :last-child {
            grid-column: 1 / -1;
          }
        }

        /* Form Inputs - OPTIMIZED */
        .contact-input,
        .contact-select {
          width: 100%;
          padding: var(--contact-spacing-sm) var(--contact-spacing-md);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid var(--contact-border);
          border-radius: var(--contact-border-radius-sm);
          color: var(--contact-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.8125rem;
          transition: all var(--contact-transition-base);
          height: 44px;
        }

        @media (min-width: 768px) {
          .contact-input,
          .contact-select {
            padding: var(--contact-spacing-md);
            font-size: 0.875rem;
          }
        }

        .contact-input:focus,
        .contact-select:focus,
        .contact-textarea:focus {
          outline: none;
          border-color: var(--contact-accent);
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-textarea {
          width: 100%;
          padding: var(--contact-spacing-sm) var(--contact-spacing-md);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid var(--contact-border);
          border-radius: var(--contact-border-radius-sm);
          color: var(--contact-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.8125rem;
          min-height: 100px;
          resize: vertical;
          transition: all var(--contact-transition-base);
        }

        @media (min-width: 768px) {
          .contact-textarea {
            padding: var(--contact-spacing-md);
            font-size: 0.875rem;
            min-height: 120px;
          }
        }

        .contact-select option {
          background: var(--contact-background);
          color: var(--contact-text);
        }

        /* Submit Button - OPTIMIZED */
        .contact-submit-btn {
          width: 100%;
          padding: var(--contact-spacing-sm) var(--contact-spacing-md);
          background: linear-gradient(135deg, var(--contact-accent) 0%, var(--contact-accent-dark) 100%);
          color: var(--contact-text);
          border: none;
          border-radius: var(--contact-border-radius-sm);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--contact-transition-slow);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--contact-spacing-sm);
          height: 44px;
        }

        @media (min-width: 768px) {
          .contact-submit-btn {
            padding: var(--contact-spacing-md);
            font-size: 0.875rem;
            height: 48px;
          }
        }

        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--contact-shadow-accent);
        }

        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Info Side - OPTIMIZED */
        .contact-info-side {
          padding-top: var(--contact-spacing-lg);
        }

        @media (min-width: 768px) {
          .contact-info-side {
            padding-top: 0;
            border-left: 1px solid var(--contact-border);
            padding-left: var(--contact-spacing-xl);
          }
        }

        /* Process Steps - OPTIMIZED */
        .contact-process-steps {
          display: flex;
          flex-direction: column;
          gap: var(--contact-spacing-md);
          margin-bottom: var(--contact-spacing-lg);
        }

        @media (min-width: 768px) {
          .contact-process-steps {
            gap: var(--contact-spacing-lg);
            margin-bottom: var(--contact-spacing-xl);
          }
        }

        .contact-process-step {
          display: flex;
          gap: var(--contact-spacing-sm);
        }

        @media (min-width: 768px) {
          .contact-process-step {
            gap: var(--contact-spacing-md);
          }
        }

        .contact-step-number {
          width: 28px;
          height: 28px;
          background: rgba(20, 184, 166, 0.2);
          border: 2px solid var(--contact-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--contact-accent);
          font-weight: 600;
          font-size: 0.75rem;
          flex-shrink: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-step-number {
            width: 32px;
            height: 32px;
            font-size: 0.875rem;
          }
        }

        .contact-step-content h4 {
          color: var(--contact-text);
          font-size: 0.8125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-step-content h4 {
            font-size: 0.875rem;
          }
        }

        .contact-step-content p {
          color: var(--contact-text-muted);
          font-size: 0.6875rem;
          margin: 0;
          line-height: 1.4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-step-content p {
            font-size: 0.75rem;
          }
        }

        /* FAQ - Mobile Optimized */
        .contact-faq {
          margin: var(--contact-spacing-lg) 0;
        }

        .contact-faq-item {
          border-bottom: 1px solid var(--contact-border);
          padding: var(--contact-spacing-sm) 0;
        }

        .contact-faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: var(--contact-spacing-xs) 0;
        }

        .contact-faq-question span {
          color: var(--contact-text-light);
          font-size: 0.75rem;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .contact-faq-question span {
            font-size: 0.8125rem;
          }
        }

        .contact-faq-answer {
          color: var(--contact-text-muted);
          font-size: 0.6875rem;
          padding: var(--contact-spacing-xs) 0;
        }

        /* Assurance - OPTIMIZED */
        .contact-assurance {
          background: rgba(20, 184, 166, 0.1);
          border-left: 3px solid var(--contact-accent);
          border-radius: var(--contact-border-radius-sm);
          padding: var(--contact-spacing-md);
          margin-top: var(--contact-spacing-md);
        }

        .contact-assurance-content {
          display: flex;
          align-items: flex-start;
          gap: var(--contact-spacing-sm);
        }

        .contact-assurance p {
          color: var(--contact-text-light);
          font-size: 0.6875rem;
          margin: 0;
          line-height: 1.4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-assurance p {
            font-size: 0.75rem;
          }
        }

        /* Success Message - OPTIMIZED */
        .contact-success-message {
          background: rgba(20, 184, 166, 0.1);
          border: 1px solid var(--contact-accent);
          border-radius: var(--contact-border-radius);
          padding: var(--contact-spacing-lg);
          text-align: center;
        }

        .contact-success-message h3 {
          color: var(--contact-accent);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: var(--contact-spacing-sm);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        @media (min-width: 768px) {
          .contact-success-message h3 {
            font-size: 1.125rem;
          }
        }

        .contact-success-message p {
          color: var(--contact-text-light);
          font-size: 0.75rem;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Small Mobile Devices (320px-400px) - EXTRA OPTIMIZED */
        @media (max-width: 400px) {
          .contact-section {
            padding: var(--contact-spacing-xl) 0;
          }

          .contact-header {
            margin-bottom: var(--contact-spacing-lg);
          }

          .contact-title {
            font-size: 1.5rem;
          }

          .contact-subtitle {
            font-size: 0.75rem;
          }

          .contact-whatsapp-notice {
            padding: var(--contact-spacing-sm);
          }

          .contact-whatsapp-notice p {
            font-size: 0.6875rem;
          }

          .contact-method-card {
            padding: var(--contact-spacing-sm);
          }

          .contact-method-icon {
            width: 40px;
            height: 40px;
          }

          .contact-method-card h3 {
            font-size: 0.875rem;
          }

          .contact-method-action {
            font-size: 0.6875rem;
          }

          .contact-method-desc {
            font-size: 0.625rem;
          }

          .contact-wrapper {
            padding: var(--contact-spacing-md);
          }

          .contact-form-side h3 {
            font-size: 1.25rem;
          }

          .contact-form-intro {
            font-size: 0.6875rem;
            margin-bottom: var(--contact-spacing-md);
          }

          .contact-input,
          .contact-select,
          .contact-submit-btn {
            height: 40px;
            font-size: 0.75rem;
          }

          .contact-textarea {
            min-height: 80px;
            font-size: 0.75rem;
          }

          .contact-step-number {
            width: 24px;
            height: 24px;
            font-size: 0.6875rem;
          }

          .contact-step-content h4 {
            font-size: 0.75rem;
          }

          .contact-step-content p {
            font-size: 0.625rem;
          }

          .contact-assurance p {
            font-size: 0.625rem;
          }
        }

        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
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

        ::placeholder {
          color: rgba(255, 255, 255, 0.3);
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
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4 }}
              className="contact-title"
            >
              Let's Build Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="contact-subtitle"
            >
              Transform your vision into reality with our expert team
            </motion.p>
            
            {/* WhatsApp Notice */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="contact-whatsapp-notice"
            >
              <p>
                <strong>Pro Tip:</strong> Fill out the form first, then click WhatsApp - 
                your information will be pre-filled! 📱
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
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: method.delay * 0.5, duration: 0.4 }}
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
                  <method.icon size={20} color="#FFFFFF" />
                </div>
                <div className="contact-method-content">
                  <h3>{method.title}</h3>
                  <span className="contact-method-action">{method.action}</span>
                  <p className="contact-method-desc">{method.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="contact-wrapper">
            <div className="contact-form-side">
              <h3>Project Inquiry</h3>
              <p className="contact-form-intro">
                Fill out the form and we'll respond within 24 hours with a detailed proposal.
              </p>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="contact-success-message"
                  >
                    <FiCheckCircle size={40} color="#14B8A6" style={{ marginBottom: '0.75rem' }} />
                    <h3>Form Submitted!</h3>
                    <p>Now click WhatsApp to send instantly to our team!</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
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
                        placeholder="Phone (Optional)"
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
                      placeholder="Tell us about your project... *"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-textarea"
                      required
                      aria-label="Project description"
                    />
                    
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: '0.75rem',
                      marginTop: '1rem' 
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
                            <FiSend size={14} />
                            Submit Inquiry
                          </>
                        )}
                      </button>
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
                    <p>Share your project details</p>
                  </div>
                </div>
                <div className="contact-process-step">
                  <div className="contact-step-number">2</div>
                  <div className="contact-step-content">
                    <h4>Choose Contact</h4>
                    <p>Email or WhatsApp preferred</p>
                  </div>
                </div>
                <div className="contact-process-step">
                  <div className="contact-step-number">3</div>
                  <div className="contact-step-content">
                    <h4>Free Consultation</h4>
                    <p>Discuss requirements</p>
                  </div>
                </div>
                <div className="contact-process-step">
                  <div className="contact-step-number">4</div>
                  <div className="contact-step-content">
                    <h4>Get Proposal</h4>
                    <p>Timeline & pricing</p>
                  </div>
                </div>
              </div>

              {/* FAQ - Mobile Optimized Accordion */}
              <div className="contact-faq">
                {faqs.map((faq, index) => (
                  <div key={index} className="contact-faq-item">
                    <div 
                      className="contact-faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.q}</span>
                      <FiChevronDown 
                        size={14}
                        style={{
                          transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.2s ease',
                          color: 'var(--contact-accent)'
                        }}
                      />
                    </div>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="contact-faq-answer">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* WhatsApp Benefits */}
              <div className="contact-assurance" style={{ marginTop: '0.75rem' }}>
                <div className="contact-assurance-content">
                  <FiMessageCircle size={14} color="#25D366" />
                  <p>
                    <strong>WhatsApp:</strong> Instant responses & file sharing.
                  </p>
                </div>
              </div>

              {/* Assurance */}
              <div className="contact-assurance">
                <div className="contact-assurance-content">
                  <FiClock size={14} color="#14B8A6" />
                  <p>
                    <strong>24-Hour Response:</strong> Guaranteed.
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