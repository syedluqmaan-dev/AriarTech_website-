import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiFilter, FiSmartphone, FiGlobe, FiLayout, FiZap, FiX, FiPlay, FiShoppingCart, FiMessageCircle, FiTrendingUp, FiStar } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'WhatsApp Product Ordering App',
      type: 'Mobile App',
      category: 'Mobile',
      badge: 'Popular Choice',
      description: 'Business ordering app where customers add products to cart and place orders directly via WhatsApp. Can be shared as APK or published on Play Store.',
      audience: 'Perfect for grocery stores, restaurants, bakeries & local businesses.',
      features: [
        'Product Listing',
        'Add to Cart',
        'Quantity Management',
        'Auto Bill Generation',
        'Order via WhatsApp',
        'APK & Play Store Ready'
      ],
      tech: ['React Native', 'Context API', 'WhatsApp Deep Links'],
      videoPath: '/videos/product-app-demo.mp4',
      status: 'Trending Business App',
      icon: FiShoppingCart,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accent: '#764ba2'
      
    },
    {
      id: 2,
      title: 'Trading World Academy',
      type: 'Client Website',
      category: 'Web',
      description: 'Responsive educational website for a trading academy, optimized for clarity and performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'User Trust'],
      tech: ['React/Next.js', 'Tailwind CSS', 'SEO'],
      liveLink: 'https://www.tradingwolfacademy.com',
      status: 'Client Project',
      icon: FiGlobe,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      accent: '#38f9d7'
    },
    {
      id: 3,
      title: 'Billing & Invoice Generator',
      type: 'Mobile App',
      category: 'Mobile',
      description: 'Mobile app for generating professional PDF invoices with company and customer details.',
      features: ['PDF Generation', 'Mobile First', 'Local Storage', 'User-friendly'],
      tech: ['React Native', 'PDF Generator', 'Local Storage'],
      videoPath: '/videos/invoice-app-demo.mp4',
      status: 'Internal Product – Demo',
      icon: FiMessageCircle,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: '#f5576c'
    },
    {
      id: 4,
      title: 'Game Store UI Animation App',
      type: 'Mobile App',
      category: 'Mobile',
      description: 'React Native UI demo for a fictional game store showcasing glassmorphism design and smooth animations.',
      features: ['Glassmorphism UI', 'Smooth Animations', 'Game Store Layout', 'Modern UX'],
      tech: ['React Native', 'Animated/Reanimated', 'Custom UI'],
      videoPath: '/videos/game-store-demo.mp4',
      status: 'UI Demo – Animation Showcase',
      icon: FiSmartphone,
      gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      accent: '#2c5364'
     
    },
    {
      id: 5,
      title: 'Landing Page Website',
      type: 'Landing Page',
      category: 'Web',
      description: 'High-conversion landing page designed to capture leads across all devices.',
      features: ['High Conversion', 'Lead Capture', 'Responsive', 'Clear CTAs'],
      tech: ['React', 'Tailwind CSS', 'Vercel'],
      liveLink: 'https://creative-agency-landing-page-ten.vercel.app',
      status: 'Live Project',
      icon: FiLayout,
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
      accent: '#fad0c4'
    }
  ];

  const filters = ['All', 'Web', 'Mobile'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openVideoModal = (project) => {
    setSelectedVideo(project);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <style >{`
        /* Projects Section - Mobile First */
        .projects-section {
          background: #0A0A0A;
          padding: 3rem 0;
          position: relative;
        }

        @media (min-width: 768px) {
          .projects-section {
            padding: 4rem 0;
          }
        }

        @media (min-width: 1024px) {
          .projects-section {
            padding: 5rem 0;
          }
        }

        /* Container */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }
        }

        /* Glow Effect */
        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(500px, 80vw);
          height: min(500px, 80vh);
          background: radial-gradient(circle, rgba(20, 184, 166, 0.06) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 0;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #14B8A6;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: clamp(0.9375rem, 2vw, 1.125rem);
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Filter Buttons */
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn.active {
          background: #14B8A6;
          color: #0A0A0A;
        }

        .filter-btn:not(.active) {
          background: rgba(255, 255, 255, 0.05);
          color: #94A3B8;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Project Card */
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        .project-card.featured {
          border: 1px solid rgba(102, 126, 234, 0.3);
          box-shadow: 0 0 0 1px rgba(102, 126, 234, 0.1);
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(20, 184, 166, 0.3);
        }

        .project-card.featured:hover {
          border-color: rgba(102, 126, 234, 0.5);
          box-shadow: 0 0 0 1px rgba(102, 126, 234, 0.2), 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        /* Popular Badge */
        .popular-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #0A0A0A;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.25);
          border: 1px solid rgba(255, 215, 0, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .project-header {
          height: 140px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-icon {
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .project-status {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(0, 0, 0, 0.6);
          color: #FFFFFF;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .project-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-type {
          font-size: 0.875rem;
          font-weight: 500;
          color: #14B8A6;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .project-description {
          color: #94A3B8;
          margin-bottom: 0.75rem;
          line-height: 1.5;
          font-size: 0.875rem;
          flex: 1;
        }

        /* Audience Tag */
        .audience-tag {
          background: rgba(102, 126, 234, 0.1);
          color: #CBD5E1;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid rgba(102, 126, 234, 0.2);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Tech Stack */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #E2E8F0;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
        }

        /* Features */
        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
          .features {
            grid-template-columns: 1fr;
          }
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.75rem;
          color: #CBD5E1;
          padding: 0.25rem;
        }

        /* CTA Button */
        .project-cta {
          width: 100%;
          background: #14B8A6;
          color: #0A0A0A;
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          text-decoration: none;
          margin-top: auto;
        }

        .project-cta:hover,
        .project-cta:focus {
          background: #0D9488;
          outline: none;
        }

        .project-card.featured .project-cta {
          background: #667eea;
        }

        .project-card.featured .project-cta:hover {
          background: #5a6fd8;
        }

        /* Footnote */
        .footnote {
          margin-top: 2rem;
          padding: 1.5rem;
          text-align: center;
        }

        .footnote-text {
          color: #64748B;
          font-size: 0.875rem;
          line-height: 1.5;
          font-style: italic;
          margin: 0;
        }

        /* Video Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          backdrop-filter: blur(8px);
        }

        .modal-content {
          background: #1A1A1A;
          border-radius: 1rem;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.25rem 1.5rem;
          background: #0A0A0A;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-title {
          color: #FFFFFF;
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0;
        }

        .modal-subtitle {
          color: #94A3B8;
          font-size: 0.875rem;
          margin: 0.25rem 0 0 0;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #FFFFFF;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .video-container {
          padding: 1.5rem;
          background: #0A0A0A;
          flex: 1;
          overflow: auto;
        }

        .video-player {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          background: #000;
          margin-bottom: 1rem;
        }

        video {
          width: 100%;
          display: block;
          border-radius: 0.75rem;
        }

        .video-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .video-description {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .filter-btn,
          .modal-close-btn,
          .project-cta,
          .popular-badge {
            transition: none !important;
            animation: none !important;
          }
          
          .project-card:hover {
            transform: none !important;
          }
        }

        /* Mobile touch targets */
        @media (max-width: 640px) {
          .project-card {
            max-width: 100%;
          }
          
          .project-header {
            height: 120px;
          }
          
          .project-icon {
            width: 56px;
            height: 56px;
          }
          
          .popular-badge {
            font-size: 0.6875rem;
            padding: 0.1875rem 0.5rem;
          }
        }

        /* Custom scrollbar */
        .video-container::-webkit-scrollbar {
          width: 6px;
        }
        
        .video-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        
        .video-container::-webkit-scrollbar-thumb {
          background: #14B8A6;
          border-radius: 3px;
        }
      `}</style>

      <section id="work" className="projects-section" aria-labelledby="work-heading">
        <div className="glow-effect" aria-hidden="true" />
        
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-label" aria-label="Selected work">
              <FiFilter /> Portfolio Showcase
            </span>
            <h2 id="work-heading" className="section-title">
              Client & Internal Projects
            </h2>
            <p className="section-subtitle">
              Mobile apps, web solutions, and trending business applications with real-world use cases.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="filter-buttons"
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                aria-label={`Filter by ${filter}`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`project-card ${project.badge ? 'featured' : ''}`}
              >
                {/* Popular Badge */}
                {project.badge && (
                  <div className="popular-badge">
                    <FiStar size={10} />
                    {project.badge}
                  </div>
                )}
                
                <div 
                  className="project-header"
                  style={{ background: project.gradient }}
                >
                  <div className="project-icon">
                    <project.icon size={22} color="#FFFFFF" />
                  </div>
                  
                  <div className="project-status">
                    {project.status}
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-type">
                    {project.badge && <FiTrendingUp size={14} />}
                    {project.type}
                  </div>
                  
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  {/* Audience Tag */}
                  {project.audience && (
                    <div className="audience-tag">
                      <FiSmartphone size={12} />
                      {project.audience}
                    </div>
                  )}
                  
                  {/* Tech Stack */}
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="features">
                    {project.features.map((feature, i) => (
                      <span key={i} className="feature">
                        <FiZap size={10} style={{ color: project.accent }} />
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  {project.videoPath ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openVideoModal(project)}
                      className="project-cta"
                      aria-label={`Watch demo video of ${project.title}`}
                    >
                      <FiPlay />
                      Watch Demo
                    </motion.button>
                  ) : (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-cta"
                      aria-label={`${project.status.includes('Demo') ? 'View demo of' : 'Visit'} ${project.title}`}
                    >
                      <FiExternalLink />
                      {project.status.includes('Demo') ? 'View Demo' : 
                       project.type.includes('Website') ? 'Visit Website' : 'View Live'}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote */}
          <div className="footnote">
            <p className="footnote-text">
              Featured projects include video demos. Popular apps can be customized and deployed for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">{selectedVideo.title}</h3>
                  <p className="modal-subtitle">{selectedVideo.type} Demo</p>
                  {selectedVideo.badge && (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      color: '#0A0A0A',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      marginTop: '0.25rem'
                    }}>
                      <FiStar size={10} />
                      {selectedVideo.badge}
                    </div>
                  )}
                </div>
                <button
                  onClick={closeVideoModal}
                  className="modal-close-btn"
                  aria-label="Close video modal"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Video Container */}
              <div className="video-container">
                {/* Local Video Player */}
                <div className="video-player">
                  <video
                    controls
                    autoPlay
                    muted
                    playsInline
                    style={{ maxHeight: '400px' }}
                  >
                    <source src={selectedVideo.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Info Overlay */}
                  <div className="video-info">
                    <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '500' }}>
                      {selectedVideo.id === 2 ? 'Business App Demo' : selectedVideo.id === 3 ? 'Invoice Demo' : 'UI Demo'}
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}>
                      {selectedVideo.tech[0]}
                    </span>
                  </div>
                </div>

                {/* Video Description */}
                <div className="video-description">
                  <h4 style={{ 
                    color: '#FFFFFF', 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FiPlay size={18} />
                    About This Project
                  </h4>
                  <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px' }}>
                    {selectedVideo.description}
                  </p>
                  
                  {selectedVideo.audience && (
                    <div style={{ 
                      background: 'rgba(102, 126, 234, 0.1)', 
                      color: '#CBD5E1', 
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      marginBottom: '16px',
                      border: '1px solid rgba(102, 126, 234, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <FiSmartphone size={14} />
                      <span><strong>Perfect For:</strong> {selectedVideo.audience}</span>
                    </div>
                  )}
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '12px', 
                    marginTop: '16px' 
                  }}>
                    <div style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      padding: '12px', 
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{ color: '#14B8A6', fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>
                        Technology Stack
                      </div>
                      <div style={{ color: '#94A3B8', fontSize: '12px' }}>
                        {selectedVideo.tech.join(', ')}
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      padding: '12px', 
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{ color: '#14B8A6', fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>
                        Key Features
                      </div>
                      <div style={{ color: '#94A3B8', fontSize: '12px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {selectedVideo.features.slice(0, 3).map((feat, i) => (
                          <span key={i} style={{ display: 'inline-block', marginRight: '4px' }}>
                            • {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;