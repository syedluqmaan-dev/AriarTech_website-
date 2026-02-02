import React, { useState, useEffect } from 'react';
import { FiX, FiUser, FiMail, FiPhone, FiBriefcase, FiMessageCircle, FiArrowRight, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Keep this separate for reuse
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'NBIMgIMz_EuYj5RK6',
  SERVICE_ID: 'service_q3w7a5l',
  TEMPLATE_ID: 'template_45b0n0j'
};

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Website Development',
    'Mobile App Development',
    'Web Application',
    'WhatsApp Product Ordering App ⭐ (Most Popular)',
    'UI/UX Design',
    'Digital Marketing',
    'Consultation',
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('📧 EmailJS initialized for Modal');
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent background scrolling
      document.body.style.paddingRight = '15px'; // Compensate for scrollbar
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.description) {
      alert('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      if (isMobile) {
        const message = `*New Project Inquiry - Ariar Technologies*\n\n*Contact Details:*\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📱 Phone: ${formData.phone || 'Not provided'}\n\n*Service Required:*\n💼 ${formData.service}\n\n*Project Description:*\n📝 ${formData.description}\n\n_Ready for free consultation!_`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/919739183566?text=${encodedMessage}`, '_blank');
        
        setTimeout(() => {
          setIsSubmitting(false);
          setFormData({ name: '', email: '', phone: '', service: '', description: '' });
          onClose();
        }, 1500);
      } else {
        // ✅ CORRECT template parameters that match your EmailJS template
        const templateParams = {
          name: formData.name,           // matches {{name}} in template
          email: formData.email,         // matches {{email}} in template
          phone: formData.phone || 'Not provided', // matches {{phone}} in template
          service: formData.service,     // matches {{service}} in template
          message: formData.description, // matches {{message}} in template
          to_email: 'hello@ariartech.com' // Optional: for reference
        };

        console.log('📤 Sending email with:', {
          serviceId: EMAILJS_CONFIG.SERVICE_ID,
          templateId: EMAILJS_CONFIG.TEMPLATE_ID,
          params: templateParams
        });

        // Send email using EmailJS
        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,   // service_q3w7a5l
          EMAILJS_CONFIG.TEMPLATE_ID,  // template_45b0n0j
          templateParams
        );

        console.log('✅ Email sent successfully:', response);
        
        // Show success state
        setIsSuccess(true);
        
        // Reset form and close modal after 2 seconds
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', service: '', description: '' });
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('❌ EmailJS error:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      
      // Better error messages
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        if (error.text.includes('400')) {
          errorMessage = 'Invalid request. Please check your form data.';
        } else if (error.text.includes('403')) {
          errorMessage = 'Email service configuration error.';
        } else if (error.text.includes('Service not found')) {
          errorMessage = 'Email service not found. Check Service ID.';
        } else if (error.text.includes('Template not found')) {
          errorMessage = 'Email template not found. Check Template ID.';
        } else {
          errorMessage += error.text;
        }
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again or contact hello@ariartech.com directly.';
      }
      
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  // Add success UI component
  if (isSuccess) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-success-content">
            <div className="modal-success-icon">
              <FiCheck size={48} />
            </div>
            <h2 className="modal-success-title">
              Message Sent Successfully!
            </h2>
            <p className="modal-success-message">
              Thank you for contacting Ariar Technologies. We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={onClose}
              className="modal-success-button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <>
      <style jsx>{`
        /* ===== MODAL COMPONENT - 100% INDEPENDENT ===== */
        
        /* === MODAL-SPECIFIC CSS VARIABLES === */
        .modal-overlay {
          /* COLORS - COMPLETELY INDEPENDENT */
          --modal-primary: #0f172a;              /* Dark blue */
          --modal-primary-light: #3b82f6;        /* Light blue */
          --modal-accent: #14B8A6;               /* Teal */
          --modal-accent-dark: #0d9488;          /* Darker teal */
          --modal-success: #10b981;              /* Green */
          --modal-whatsapp: #25D366;             /* WhatsApp green */
          --modal-background: #FFFFFF;           /* White */
          --modal-background-alt: #f8fafc;       /* Light gray */
          --modal-text: #1e293b;                 /* Dark text */
          --modal-text-light: #64748b;           /* Medium gray */
          --modal-text-muted: #94a3b8;           /* Light gray */
          --modal-border: #e2e8f0;               /* Border gray */
          --modal-border-light: #f1f5f9;         /* Lighter border */
          --modal-focus-ring: #3b82f6;           /* Focus outline */
          --modal-overlay-color: rgba(249, 250, 251, 0.98); /* Backdrop */
          --modal-error-bg: #fef2f2;             /* Error background */
          --modal-error-border: #fecaca;         /* Error border */
          --modal-error-text: #dc2626;           /* Error text */
          --modal-focus-gradient: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          --modal-focus-border: #bae6fd;
          --modal-focus-label-color: #0369a1;
          --modal-focus-text-color: #0c4a6e;
          
          /* SPACING - COMPLETELY INDEPENDENT */
          --modal-spacing-xs: 0.25rem;
          --modal-spacing-sm: 0.5rem;
          --modal-spacing-md: 1rem;
          --modal-spacing-lg: 1.5rem;
          --modal-spacing-xl: 2rem;
          --modal-spacing-2xl: 2.5rem;
          --modal-spacing-3xl: 3rem;
          --modal-spacing-4xl: 4rem;
          
          /* BORDERS & SHADOWS */
          --modal-border-radius: 0.75rem;
          --modal-border-radius-sm: 0.5rem;
          --modal-border-radius-lg: 1rem;
          --modal-border-radius-xl: 1.25rem;
          --modal-border-radius-2xl: 1.5rem;
          --modal-border-radius-full: 9999px;
          
          /* TRANSITIONS */
          --modal-transition-fast: 150ms ease;
          --modal-transition-base: 200ms ease;
          --modal-transition-slow: 300ms ease;
          
          /* SHADOWS */
          --modal-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
          --modal-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
          --modal-shadow-md: 0 12px 48px rgba(0, 0, 0, 0.1);
          --modal-shadow-lg: 0 20px 64px rgba(0, 0, 0, 0.15);
          --modal-shadow-accent: 0 4px 12px rgba(59, 130, 246, 0.2);
          --modal-shadow-accent-hover: 0 6px 20px rgba(59, 130, 246, 0.3);
          --modal-shadow-button: 0 4px 15px rgba(20, 184, 166, 0.25);
          
          /* FONTS */
          --modal-font-heading: 'Space Grotesk', system-ui, sans-serif;
          --modal-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          
          /* Z-INDEX */
          --modal-z-index: 9999;
          --modal-close-z-index: 10;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--modal-overlay-color);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--modal-spacing-md);
          z-index: var(--modal-z-index);
          animation: modal-fadeIn var(--modal-transition-slow) ease;
        }

        /* Modal Container */
        .modal {
          width: 100%;
          max-width: 100%;
          background: var(--modal-background);
          border-radius: var(--modal-border-radius-2xl);
          box-shadow: var(--modal-shadow);
          position: relative;
          animation: modal-slideUp var(--modal-transition-slow) ease;
          overflow: hidden;
          border: 1px solid var(--modal-border-light);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        /* Close Button */
        .modal-close-btn {
          position: absolute;
          top: var(--modal-spacing-md);
          right: var(--modal-spacing-md);
          width: 44px;
          height: 44px;
          border: 1px solid var(--modal-border);
          background: var(--modal-background);
          border-radius: var(--modal-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--modal-text-light);
          cursor: pointer;
          transition: all var(--modal-transition-base);
          font-size: 20px;
          box-shadow: var(--modal-shadow-sm);
          z-index: var(--modal-close-z-index);
        }

        .modal-close-btn:hover,
        .modal-close-btn:focus {
          border-color: var(--modal-text-muted);
          background: var(--modal-background-alt);
          color: var(--modal-text);
          transform: rotate(90deg);
          outline: none;
          box-shadow: var(--modal-shadow-md);
        }

        /* Form Container */
        .modal-form-container {
          padding: var(--modal-spacing-xl) var(--modal-spacing-lg);
          flex: 1;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--modal-border) transparent;
        }

        .modal-form-container::-webkit-scrollbar {
          width: 6px;
        }

        .modal-form-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .modal-form-container::-webkit-scrollbar-thumb {
          background-color: var(--modal-border);
          border-radius: var(--modal-border-radius-full);
        }

        /* Title Section */
        .modal-title-section {
          text-align: center;
          margin-bottom: var(--modal-spacing-xl);
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--modal-primary);
          margin: 0 0 var(--modal-spacing-sm);
          line-height: 1.2;
          font-family: var(--modal-font-heading);
        }

        .modal-subtitle {
          font-size: 15px;
          color: var(--modal-text-light);
          margin: 0;
          line-height: 1.5;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
          font-family: var(--modal-font-body);
        }

        /* Focus Section */
        .modal-focus-section {
          background: var(--modal-focus-gradient);
          border-radius: var(--modal-border-radius);
          padding: var(--modal-spacing-md);
          margin-bottom: var(--modal-spacing-lg);
          border: 1px solid var(--modal-focus-border);
          text-align: center;
        }

        .modal-focus-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--modal-focus-label-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--modal-spacing-xs);
          font-family: var(--modal-font-body);
        }

        .modal-focus-text {
          font-size: 14px;
          color: var(--modal-focus-text-color);
          margin: 0;
          font-weight: 500;
          font-family: var(--modal-font-body);
        }

        /* Error Message */
        .modal-error-message {
          background: var(--modal-error-bg);
          border: 1px solid var(--modal-error-border);
          color: var(--modal-error-text);
          padding: var(--modal-spacing-md);
          border-radius: var(--modal-border-radius);
          margin-bottom: var(--modal-spacing-md);
          font-size: 14px;
          text-align: center;
          font-family: var(--modal-font-body);
        }

        .modal-error-secondary {
          margin-top: var(--modal-spacing-sm);
          font-size: 13px;
          opacity: 0.8;
          color: var(--modal-error-text);
        }

        /* Form Group */
        .modal-form-group {
          margin-bottom: var(--modal-spacing-md);
          width: 100%;
        }

        .modal-form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--modal-text);
          margin-bottom: var(--modal-spacing-xs);
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.4;
          font-family: var(--modal-font-body);
        }

        .modal-form-label-icon {
          color: var(--modal-primary-light);
          flex-shrink: 0;
        }

        .modal-required {
          color: #ef4444;
          font-size: 12px;
          margin-left: 2px;
        }

        /* Form Inputs */
        .modal-input,
        .modal-select,
        .modal-textarea {
          width: 100%;
          padding: var(--modal-spacing-md);
          font-size: 16px;
          color: var(--modal-text);
          background: var(--modal-background);
          border: 1.5px solid var(--modal-border);
          border-radius: var(--modal-border-radius);
          font-family: var(--modal-font-body);
          transition: all var(--modal-transition-base);
          box-sizing: border-box;
          min-height: 52px;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .modal-input:focus,
        .modal-select:focus,
        .modal-textarea:focus {
          outline: none;
          border-color: var(--modal-primary-light);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .modal-input::placeholder,
        .modal-textarea::placeholder {
          color: var(--modal-text-muted);
          opacity: 0.7;
        }

        .modal-textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.5;
          padding-top: var(--modal-spacing-md);
          padding-bottom: var(--modal-spacing-md);
        }

        .modal-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right var(--modal-spacing-md) center;
          background-size: 16px;
          padding-right: 48px;
        }

        /* Submit Button */
        .modal-submit-btn {
          width: 100%;
          padding: var(--modal-spacing-lg);
          background: linear-gradient(135deg, var(--modal-primary-light) 0%, #2563eb 100%);
          color: var(--modal-background);
          border: none;
          border-radius: var(--modal-border-radius);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all var(--modal-transition-base);
          margin-top: var(--modal-spacing-sm);
          box-shadow: var(--modal-shadow-accent);
          min-height: 56px;
          font-family: var(--modal-font-body);
          position: relative;
          overflow: hidden;
        }

        .modal-submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--modal-accent) 0%, var(--modal-primary) 100%);
          opacity: 0;
          transition: opacity var(--modal-transition-base);
        }

        .modal-submit-btn:hover::before,
        .modal-submit-btn:focus::before {
          opacity: 1;
        }

        .modal-submit-btn span {
          position: relative;
          z-index: 1;
        }

        .modal-submit-btn:hover:not(:disabled),
        .modal-submit-btn:focus:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--modal-shadow-accent-hover);
          outline: none;
        }

        .modal-submit-btn:focus-visible {
          outline: 3px solid var(--modal-focus-ring);
          outline-offset: 2px;
        }

        .modal-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: var(--modal-shadow-sm) !important;
        }

        /* Spinner */
        .modal-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: var(--modal-background);
          animation: modal-spin 0.8s linear infinite;
          position: relative;
          z-index: 1;
        }

        /* Alternative Contact */
        .modal-alternative-contact {
          margin-top: var(--modal-spacing-md);
          text-align: center;
          font-size: 13px;
          color: var(--modal-text-light);
          font-family: var(--modal-font-body);
          padding: var(--modal-spacing-sm);
          border-radius: var(--modal-border-radius);
          background: var(--modal-background-alt);
        }

        .modal-alternative-links {
          margin-top: var(--modal-spacing-sm);
          display: flex;
          justify-content: center;
          gap: var(--modal-spacing-md);
          flex-wrap: wrap;
        }

        .modal-alternative-link {
          color: var(--modal-success);
          text-decoration: none;
          font-weight: 500;
          transition: all var(--modal-transition-fast);
          padding: var(--modal-spacing-xs) var(--modal-spacing-sm);
          border-radius: var(--modal-border-radius-sm);
          display: inline-flex;
          align-items: center;
          gap: var(--modal-spacing-xs);
        }

        .modal-alternative-link:hover {
          color: var(--modal-accent);
          background: var(--modal-background);
          box-shadow: var(--modal-shadow-sm);
        }

        .modal-alternative-link.whatsapp-link {
          color: var(--modal-whatsapp);
        }

        .modal-alternative-link.whatsapp-link:hover {
          color: #128C7E;
        }

        /* Success State Styles */
        .modal-success-content {
          padding: 60px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .modal-success-icon {
          width: 100px;
          height: 100px;
          background: var(--modal-success);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--modal-background);
          margin-bottom: var(--modal-spacing-xl);
        }

        .modal-success-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--modal-primary);
          margin: 0 0 var(--modal-spacing-md);
          line-height: 1.2;
          font-family: var(--modal-font-heading);
        }

        .modal-success-message {
          font-size: 16px;
          color: var(--modal-text-light);
          line-height: 1.6;
          max-width: 400px;
          margin: 0 auto var(--modal-spacing-xl);
          font-family: var(--modal-font-body);
        }

        .modal-success-button {
          padding: 14px 32px;
          background: var(--modal-primary-light);
          color: var(--modal-background);
          border: none;
          border-radius: var(--modal-border-radius);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--modal-transition-base);
          font-family: var(--modal-font-body);
          min-width: 140px;
        }

        .modal-success-button:hover,
        .modal-success-button:focus {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: var(--modal-shadow-accent);
          outline: none;
        }

        /* Animations */
        @keyframes modal-fadeIn {
          from { opacity: 0; } 
          to { opacity: 1; }
        }

        @keyframes modal-slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          } 
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes modal-spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive Design - Mobile First */
        @media (max-width: 374px) {
          .modal-overlay { 
            padding: var(--modal-spacing-sm); 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-lg) var(--modal-spacing-md); 
          }
          .modal-title { 
            font-size: 24px; 
          }
          .modal-subtitle { 
            font-size: 14px; 
          }
          .modal-input, .modal-select, .modal-textarea { 
            padding: var(--modal-spacing-sm); 
            min-height: 48px; 
            font-size: 15px;
          }
          .modal-textarea { 
            min-height: 120px; 
          }
          .modal-submit-btn { 
            padding: var(--modal-spacing-md); 
            min-height: 52px;
            font-size: 15px;
          }
          .modal-close-btn { 
            top: var(--modal-spacing-sm); 
            right: var(--modal-spacing-sm); 
            width: 40px; 
            height: 40px; 
          }
          .modal-success-content {
            padding: var(--modal-spacing-xl) var(--modal-spacing-lg);
          }
          .modal-success-icon {
            width: 80px;
            height: 80px;
          }
          .modal-success-title {
            font-size: 24px;
          }
        }

        @media (min-width: 375px) and (max-width: 479px) {
          .modal-overlay { 
            padding: var(--modal-spacing-md); 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-xl) var(--modal-spacing-md); 
          }
          .modal-title { 
            font-size: 26px; 
          }
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .modal { 
            max-width: 90%; 
            margin: 0 auto; 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-xl) var(--modal-spacing-lg); 
          }
          .modal-title { 
            font-size: 28px; 
          }
          .modal-subtitle { 
            font-size: 16px; 
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .modal { 
            max-width: 500px; 
            margin: 0 auto; 
            border-radius: var(--modal-border-radius-2xl); 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-2xl) var(--modal-spacing-xl); 
          }
          .modal-title { 
            font-size: 32px; 
          }
          .modal-close-btn { 
            top: var(--modal-spacing-lg); 
            right: var(--modal-spacing-lg); 
            width: 48px; 
            height: 48px; 
            font-size: 22px; 
          }
          .modal-input, .modal-select, .modal-textarea { 
            padding: var(--modal-spacing-md); 
            font-size: 15px; 
          }
          .modal-submit-btn { 
            padding: var(--modal-spacing-lg); 
            font-size: 17px; 
          }
        }

        @media (min-width: 1024px) {
          .modal { 
            max-width: 520px; 
            border-radius: var(--modal-border-radius-2xl); 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-2xl) var(--modal-spacing-xl); 
          }
          .modal-title { 
            font-size: 34px; 
            margin-bottom: var(--modal-spacing-sm); 
          }
          .modal-subtitle { 
            font-size: 17px; 
          }
          .modal-close-btn:hover { 
            transform: rotate(90deg) scale(1.1); 
          }
          .modal-submit-btn:hover:not(:disabled) { 
            transform: translateY(-3px); 
            box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4); 
          }
        }

        @media (min-width: 1200px) {
          .modal { 
            max-width: 540px; 
          }
        }

        @media (min-width: 1440px) {
          .modal { 
            max-width: 560px; 
            border-radius: var(--modal-border-radius-2xl); 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-3xl) var(--modal-spacing-2xl); 
          }
          .modal-title { 
            font-size: 38px; 
            margin-bottom: var(--modal-spacing-md); 
          }
          .modal-subtitle { 
            font-size: 18px; 
            max-width: 450px; 
          }
          .modal-form-group { 
            margin-bottom: var(--modal-spacing-lg); 
          }
          .modal-input, .modal-select, .modal-textarea { 
            padding: var(--modal-spacing-lg); 
            font-size: 16px; 
            min-height: 56px; 
          }
          .modal-textarea { 
            min-height: 160px; 
          }
          .modal-submit-btn { 
            padding: var(--modal-spacing-xl); 
            font-size: 18px; 
            min-height: 60px; 
            margin-top: var(--modal-spacing-md); 
          }
        }

        @media (min-width: 1920px) {
          .modal { 
            max-width: 600px; 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-4xl) var(--modal-spacing-3xl); 
          }
          .modal-title { 
            font-size: 42px; 
          }
          .modal-subtitle { 
            font-size: 20px; 
            max-width: 500px; 
          }
        }

        @media (max-height: 600px) and (orientation: landscape) {
          .modal { 
            max-height: 95vh; 
            max-width: 90%; 
            margin: 0 auto; 
          }
          .modal-form-container { 
            padding: var(--modal-spacing-md); 
          }
          .modal-title { 
            font-size: 24px; 
            margin-bottom: var(--modal-spacing-xs); 
          }
          .modal-subtitle { 
            font-size: 14px; 
            margin-bottom: var(--modal-spacing-md); 
          }
          .modal-form-group { 
            margin-bottom: var(--modal-spacing-md); 
          }
          .modal-input, .modal-select, .modal-textarea { 
            min-height: 44px; 
            padding: var(--modal-spacing-sm); 
            font-size: 14px;
          }
          .modal-textarea { 
            min-height: 80px; 
          }
          .modal-focus-section { 
            margin-bottom: var(--modal-spacing-md); 
            padding: var(--modal-spacing-sm); 
          }
          .modal-submit-btn { 
            padding: var(--modal-spacing-md); 
            min-height: 48px;
            font-size: 14px;
          }
          .modal-alternative-contact {
            display: none;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .modal-overlay {
            --modal-primary: #f1f5f9;
            --modal-background: #1e293b;
            --modal-background-alt: #0f172a;
            --modal-text: #e2e8f0;
            --modal-text-light: #cbd5e1;
            --modal-text-muted: #94a3b8;
            --modal-border: #334155;
            --modal-border-light: #475569;
            --modal-overlay-color: rgba(15, 23, 42, 0.98);
            --modal-focus-ring: #3b82f6;
            --modal-focus-gradient: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
            --modal-focus-border: #1e40af;
            --modal-focus-label-color: #60a5fa;
            --modal-focus-text-color: #93c5fd;
            --modal-error-bg: rgba(220, 38, 38, 0.1);
            --modal-error-border: rgba(220, 38, 38, 0.3);
            --modal-error-text: #fecaca;
          }
          
          .modal {
            background: var(--modal-background);
            border-color: var(--modal-border);
          }
          
          .modal-close-btn {
            background: var(--modal-background);
            border-color: var(--modal-border);
            color: var(--modal-text-light);
          }
          
          .modal-close-btn:hover {
            background: var(--modal-border);
          }
          
          .modal-input::placeholder,
          .modal-textarea::placeholder {
            color: var(--modal-text-muted);
          }
          
          .modal-select {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          }
          
          .modal-alternative-contact {
            background: var(--modal-border);
          }
        }

        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          .modal-overlay,
          .modal,
          .modal-close-btn,
          .modal-submit-btn,
          .modal-input,
          .modal-select,
          .modal-textarea,
          .modal-success-button,
          .modal-alternative-link {
            transition: none !important;
            animation: none !important;
          }
          
          .modal-close-btn:hover,
          .modal-submit-btn:hover:not(:disabled),
          .modal-success-button:hover,
          .modal-alternative-link:hover {
            transform: none !important;
          }
          
          .modal-spinner {
            animation: none !important;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-top-color: transparent;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .modal-close-btn,
          .modal-input,
          .modal-select,
          .modal-textarea {
            border: 2px solid currentColor;
          }
          
          .modal-submit-btn,
          .modal-success-button {
            border: 2px solid currentColor;
          }
          
          .modal-focus-section {
            border: 2px solid currentColor;
          }
        }

        /* Print Styles */
        @media print {
          .modal-overlay {
            background: white !important;
            position: relative !important;
            backdrop-filter: none !important;
          }
          
          .modal {
            box-shadow: none !important;
            border: 1px solid #ddd !important;
            max-height: none !important;
            max-width: 100% !important;
          }
          
          .modal-close-btn,
          .modal-submit-btn,
          .modal-success-button {
            display: none !important;
          }
          
          .modal-form-container {
            overflow: visible !important;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .modal-close-btn:active,
          .modal-submit-btn:active,
          .modal-success-button:active,
          .modal-alternative-link:active {
            transform: scale(0.98);
          }
          
          .modal-input:focus,
          .modal-select:focus,
          .modal-textarea:focus {
            font-size: 16px; /* Prevent iOS zoom */
          }
        }
      `}</style>

      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close modal"
          >
            <FiX />
          </button>

          <div className="modal-form-container">
            {/* Title Section */}
            <div className="modal-title-section">
              <h2 className="modal-title">Start Your Project</h2>
              <p className="modal-subtitle">
                Tell us what you need — we'll reply within 24 hours
              </p>
            </div>

            {/* Focus Section */}
            <div className="modal-focus-section">
              <div className="modal-focus-label">Focus on</div>
              <p className="modal-focus-text">What you want to achieve</p>
            </div>

            {/* Error Message Display */}
            {error && (
              <div className="modal-error-message">
                <p>{error}</p>
                <p className="modal-error-secondary">
                  You can also contact us directly at <strong>hello@ariartech.com</strong>
                </p>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="modal-form-group">
                <label className="modal-form-label">
                  <FiUser className="modal-form-label-icon" />
                  Your Name
                  <span className="modal-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="modal-input"
                  autoComplete="name"
                />
              </div>

              {/* Email Field */}
              <div className="modal-form-group">
                <label className="modal-form-label">
                  <FiMail className="modal-form-label-icon" />
                  Email Address
                  <span className="modal-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="modal-input"
                  autoComplete="email"
                />
              </div>

              {/* Phone Field */}
              <div className="modal-form-group">
                <label className="modal-form-label">
                  <FiPhone className="modal-form-label-icon" />
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="modal-input"
                  autoComplete="tel"
                />
              </div>

              {/* Service Selection */}
              <div className="modal-form-group">
                <label className="modal-form-label">
                  <FiBriefcase className="modal-form-label-icon" />
                  Select Service
                  <span className="modal-required">*</span>
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="modal-select"
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div className="modal-form-group">
                <label className="modal-form-label">
                  <FiMessageCircle className="modal-form-label-icon" />
                  Briefly describe your project
                  <span className="modal-required">*</span>
                </label>
                <textarea
                  name="description"
                  required
                  placeholder="Tell us about your project goals, requirements, timeline, and budget..."
                  value={formData.description}
                  onChange={handleChange}
                  className="modal-textarea"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="modal-submit-btn"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Submitting form" : "Get free consultation"}
              >
                {isSubmitting ? (
                  <>
                    <span className="modal-spinner" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Get Free Consultation</span>
                    <FiArrowRight size={18} />
                  </>
                )}
              </button>

              {/* Alternative Contact Options */}
              {!isMobile && (
                <div className="modal-alternative-contact">
                  <p>Having trouble with the form?</p>
                  <div className="modal-alternative-links">
                    <a 
                      href="tel:+919739183566"
                      className="modal-alternative-link"
                      aria-label="Call us at +91 9739183566"
                    >
                      📞 +91 9739183566
                    </a>
                    <a 
                      href="https://wa.me/919739183566"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-alternative-link whatsapp-link"
                      aria-label="Contact us on WhatsApp"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;