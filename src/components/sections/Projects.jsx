import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiFilter,
  FiSmartphone,
  FiGlobe,
  FiLayout,
  FiX,
  FiPlay,
  FiShoppingCart,
  FiFileText,
  FiTrendingUp,
  FiStar,
  FiArrowUpRight,
} from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    // ---- Real client / product work (cover screenshots) ----
    {
      id: 1,
      title: 'GSBM — Ganesan School of Business Management',
      type: 'Website + Digital Marketing',
      category: 'Web',
      description:
        'End-to-end digital presence for a boutique MBA institution in Chennai — the website itself, plus paid campaigns across Google, Meta and LinkedIn, with conversion tracking wired into their CRM for admissions.',
      tech: ['React/Vite', 'Google Ads', 'Meta Ads'],
      liveLink: 'https://www.gsbm.co.in',
      coverImage: '/images/gsbm-cover.jpg',
      status: 'Live · Ongoing Engagement',
      icon: FiTrendingUp,
      gradient: 'linear-gradient(135deg, #0f2942 0%, #1c3d5a 100%)',
    },
    {
      id: 2,
      title: "Bhadri's Academy",
      type: 'Client Website',
      category: 'Web',
      description:
        'A school website built around clarity and trust for parents — clean admissions pathways and a WhatsApp-integrated enquiry flow, so a question never has to wait for office hours.',
      tech: ['React/Vite', 'WhatsApp Integration'],
      liveLink: 'https://www.bhadrisacademy.com',
      coverImage: '/images/bhadris-academy-cover.jpg',
      status: 'Live',
      icon: FiGlobe,
      gradient: 'linear-gradient(135deg, #1a2f4d 0%, #2d4a6e 100%)',
    },
    {
      id: 3,
      title: 'Ariar Kitchen',
      type: 'Restaurant Management App',
      category: 'Web',
      description:
        'A restaurant ordering platform that gives cloud kitchens and neighbourhood spots their own branded site — orders land straight on WhatsApp, no commission cuts, no group chat chaos.',
      tech: ['React', 'WhatsApp Deep Links'],
      liveLink: 'https://ariar-kitchen-app.vercel.app',
      coverImage: '/images/ariar-kitchen-cover.jpg',
      status: 'Live · Internal Product',
      icon: FiShoppingCart,
      gradient: 'linear-gradient(135deg, #1f1410 0%, #3a2417 100%)',
    },
    {
      id: 4,
      title: 'Trading Wolf Academy',
      type: 'Client Website',
      category: 'Web',
      description:
        'A responsive educational website for a trading academy, built for fast loads and clean navigation so visitors get straight to what they came for.',
      tech: ['React/Next.js', 'Tailwind CSS'],
      liveLink: 'https://www.tradingwolfacademy.com',
      coverImage: '/images/trading-wolf-academy-cover.jpg',
      status: 'Live',
      icon: FiGlobe,
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2c0f0f 100%)',
    },
    {
      id: 5,
      title: 'MindSphere — Private Psychology',
      type: 'Client Website',
      category: 'Web',
      description:
        'A private psychology consulting website designed around discretion and trust — expert support delivered in person, online, or anonymously, with a calm, editorial feel throughout.',
      tech: ['React', 'Booking Flow'],
      liveLink: 'https://counselling-website-one.vercel.app',
      coverImage: '/images/mindsphere-cover.jpg',
      status: 'Live',
      icon: FiGlobe,
      gradient: 'linear-gradient(135deg, #0f231c 0%, #1c3a2e 100%)',
    },

    // ---- Product demos (video walkthroughs) ----
    {
      id: 6,
      title: 'WhatsApp Product Ordering App',
      type: 'Mobile App',
      category: 'Mobile',
      badge: 'Popular Choice',
      description:
        'Business ordering app where customers add products to cart and place orders directly via WhatsApp. Can be shared as APK or published on Play Store — perfect for grocery stores, restaurants and bakeries.',
      tech: ['React Native', 'WhatsApp Deep Links'],
      videoPath: '/videos/product-app-demo.mp4',
      status: 'Trending Business App',
      coverImage: '/images/whatsapp-app-cover.png',
      icon: FiShoppingCart,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 7,
      title: 'Billing & Invoice Generator',
      type: 'Mobile App',
      category: 'Mobile',
      description: 'Mobile app for generating professional PDF invoices with company and customer details, stored locally on-device.',
      tech: ['React Native', 'PDF Generator'],
      videoPath: '/videos/invoice-app-demo.mp4',
      coverImage: 'images/billing-app-cover.png',
      status: 'Internal Product · Demo',
      icon: FiFileText,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 8,
      title: 'Game Store UI Animation App',
      type: 'Mobile App',
      category: 'Mobile',
      description: 'React Native UI demo for a fictional game store showcasing glassmorphism design and smooth animations.',
      tech: ['React Native', 'Reanimated'],
      videoPath: '/videos/game-store-demo.mp4',
      coverImage: '/images/game-store-cover.png',
      status: 'UI Demo · Animation Showcase',
      icon: FiSmartphone,
      gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    },

    // ---- Live landing page ----
    {
      id: 9,
      title: 'Landing Page Website',
      type: 'Landing Page',
      category: 'Web',
      description: 'High-conversion landing page designed to capture leads across all devices, with clear calls to action throughout.',
      tech: ['React', 'Tailwind CSS'],
      liveLink: 'https://creative-agency-landing-page-ten.vercel.app',
      coverImage: '/images/creative.png',
      status: 'Live Project',
      icon: FiLayout,
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    },
  ];

  const filters = ['All', 'Web', 'Mobile'];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  const openVideoModal = (project) => setSelectedVideo(project);
  const closeVideoModal = () => setSelectedVideo(null);

  return (
    <>
      <style>{`
        .projects-section {
          background: radial-gradient(circle at 20% 20%, rgba(20, 184, 166, 0.06) 0%, transparent 40%),
            linear-gradient(180deg, #0A1624 0%, #0F1E2E 100%);
          padding: 2rem 0;
          position: relative;
        }
        @media (min-width: 768px) { .projects-section { padding: 4rem 0; } }
        @media (min-width: 1024px) { .projects-section { padding: 5rem 0; } }

        .projects-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 768px) { .projects-container { padding: 0 1.5rem; } }

        .glow-effect {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: min(500px, 80vw);
          height: min(500px, 80vh);
          background: radial-gradient(circle, rgba(20, 184, 166, 0.06) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 0;
        }

        .section-header { text-align: center; margin-bottom: 1.5rem; }
        @media (min-width: 768px) { .section-header { margin-bottom: 2.5rem; } }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          color: #14B8A6;
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 0.875rem;
        }

        .section-title {
          font-size: clamp(1.6rem, 6vw, 2.75rem);
          font-weight: 700;
          background: linear-gradient(90deg, #ffffff 0%, #14B8A6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.625rem;
          line-height: 1.15;
        }

        .section-subtitle {
          font-size: clamp(0.875rem, 3vw, 1.0625rem);
          color: #94A3B8;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin: 1.75rem 0 2.25rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.5rem 1.125rem;
          border-radius: 999px;
          font-weight: 500;
          font-size: 0.8125rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: #94A3B8;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-btn.active { background: #14B8A6; border-color: #14B8A6; color: #06110F; }
        .filter-btn:not(.active):hover { border-color: rgba(20, 184, 166, 0.4); color: #E2E8F0; }

        .projects-grid { display: grid; gap: 1.75rem; grid-template-columns: 1fr; }
        @media (min-width: 640px) { .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 1.75rem; } }
        @media (min-width: 1024px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }

        .project-card {
          display: block;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 1.125rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          position: relative;
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(20, 184, 166, 0.45);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(20, 184, 166, 0.15);
        }
        .project-card.featured { border-color: rgba(102, 126, 234, 0.35); }
        .project-card.featured:hover { box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(102, 126, 234, 0.25); }

        .popular-badge {
          position: absolute;
          top: 0.875rem; right: 0.875rem;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #0A0A0A;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.6875rem;
          font-weight: 700;
          display: flex; align-items: center; gap: 0.25rem;
          z-index: 3;
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }

        /* Cover media */
        .card-media {
          position: relative;
          width: 100%;
          height: 230px;
          overflow: hidden;
          background: #0A1624;
        }
        @media (min-width: 640px) { .card-media { height: 250px; } }
        @media (min-width: 1024px) { .card-media { height: 225px; } }

        .card-media.gradient-media {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }
        .project-card:hover .card-media img { transform: scale(1.07); }

        .media-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 12, 20, 0) 65%, rgba(6, 12, 20, 0.85) 100%);
          pointer-events: none;
        }

        .media-icon-wrap {
          width: 68px; height: 68px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border-radius: 1rem;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          z-index: 1;
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.18);
          z-index: 2;
        }
        .play-overlay-btn {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          transition: transform 0.3s ease;
        }
        .project-card:hover .play-overlay-btn { transform: scale(1.1); }

        .media-status {
          position: absolute;
          bottom: 0.875rem; left: 0.875rem;
          display: flex; align-items: center; gap: 0.375rem;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          color: #FFFFFF;
          padding: 0.3125rem 0.75rem;
          border-radius: 999px;
          font-size: 0.6875rem;
          font-weight: 500;
          z-index: 2;
        }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ADE80; flex-shrink: 0; }

        /* Content */
        .card-body { padding: 1.625rem; }
        @media (min-width: 768px) { .card-body { padding: 1.875rem; } }

        .card-eyebrow {
          font-size: 0.75rem;
          font-weight: 600;
          color: #14B8A6;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.625rem;
        }

        .card-title {
          font-size: 1.1875rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
          margin-bottom: 0.75rem;
        }

        .card-description {
          color: #94A3B8;
          font-size: 0.875rem;
          line-height: 1.65;
          margin-bottom: 1.375rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .tech-line {
          color: #64748B;
          font-size: 0.75rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .card-action {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: #14B8A6;
          font-size: 0.8125rem;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
          margin-left: 1rem;
        }
        .card-action svg { transition: transform 0.25s ease; }
        .project-card:hover .card-action svg { transform: translate(3px, -3px); }

        .footnote { margin-top: 2.5rem; text-align: center; }
        .footnote-text { color: #64748B; font-size: 0.8125rem; line-height: 1.5; }

        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 0.75rem;
          backdrop-filter: blur(8px);
        }
        @media (min-width: 768px) { .modal-overlay { padding: 1rem; } }

        .modal-content {
          background: #1A1A1A;
          border-radius: 0.875rem;
          max-width: 800px; width: 100%; max-height: 90vh;
          overflow: hidden; position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          display: flex; flex-direction: column;
        }

        .modal-header {
          padding: 1rem 1.25rem; background: #0A0A0A;
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (min-width: 768px) { .modal-header { padding: 1.25rem 1.5rem; } }

        .modal-title { color: #FFFFFF; font-size: 1rem; font-weight: 600; margin: 0; }
        @media (min-width: 768px) { .modal-title { font-size: 1.125rem; } }
        .modal-subtitle { color: #94A3B8; font-size: 0.75rem; margin: 0.25rem 0 0 0; }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.1); border: none; color: #FFFFFF;
          width: 2.5rem; height: 2.5rem; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s ease;
        }
        .modal-close-btn:hover { background: rgba(255, 255, 255, 0.2); }

        .video-container { padding: 1.25rem; background: #0A0A0A; flex: 1; overflow: auto; }
        @media (min-width: 768px) { .video-container { padding: 1.5rem; } }

        .video-player { position: relative; border-radius: 0.75rem; overflow: hidden; background: #000; margin-bottom: 0.75rem; }
        video { width: 100%; display: block; border-radius: 0.75rem; }

        .video-description { padding: 1rem; background: rgba(255, 255, 255, 0.02); border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.05); }

        @media (max-width: 400px) {
          .projects-section { padding: 1.5rem 0; }
          .section-title { font-size: 1.4rem; }
          .card-media { height: 190px; }
          .card-body { padding: 1.25rem; }
          .card-title { font-size: 1.0625rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card, .filter-btn, .card-media img, .play-overlay-btn, .card-action svg {
            transition: none !important;
          }
          .project-card:hover { transform: none !important; }
        }

        .video-container::-webkit-scrollbar { width: 4px; }
        .video-container::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 3px; }
        .video-container::-webkit-scrollbar-thumb { background: #14B8A6; border-radius: 3px; }
      `}</style>

      <section id="work" className="projects-section" aria-labelledby="work-heading">
        <div className="glow-effect" aria-hidden="true" />

        <div className="projects-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-label"><FiFilter /> Portfolio Showcase</span>
            <h2 id="work-heading" className="section-title">Client & Internal Projects</h2>
            <p className="section-subtitle">
              Mobile apps, web solutions, and client engagements — each one built and shipped for real use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="filter-buttons"
          >
            {filters.map((filter) => (
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

          <div className="projects-grid">
            {filteredProjects.map((project, index) => {
              const isLink = Boolean(project.liveLink);
              const CardTag = isLink ? motion.a : motion.div;
              const interactionProps = isLink
                ? { href: project.liveLink, target: '_blank', rel: 'noopener noreferrer' }
                : {
                    onClick: () => openVideoModal(project),
                    role: 'button',
                    tabIndex: 0,
                    onKeyDown: (e) => {
                      if (e.key === 'Enter' || e.key === ' ') openVideoModal(project);
                    },
                  };

              return (
                <CardTag
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.06, 0.24), duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`project-card ${project.badge ? 'featured' : ''}`}
                  aria-label={isLink ? `Visit ${project.title}` : `Watch demo video of ${project.title}`}
                  {...interactionProps}
                >
                  {project.badge && (
                    <div className="popular-badge">
                      <FiStar size={9} />
                      {project.badge}
                    </div>
                  )}

                  <div className={`card-media ${project.coverImage ? '' : 'gradient-media'}`} style={{ background: project.coverImage ? undefined : project.gradient }}>
                    {project.coverImage ? (
                      <>
                        <img src={project.coverImage} alt={`${project.title} website preview`} loading="lazy" />
                        <div className="media-shade" aria-hidden="true" />
                      </>
                    ) : (
                      <div className="media-icon-wrap">
                        <project.icon size={28} color="#FFFFFF" />
                      </div>
                    )}

                    {project.videoPath && (
                      <div className="play-overlay">
                        <div className="play-overlay-btn"><FiPlay size={20} /></div>
                      </div>
                    )}

                    <div className="media-status">
                      <span className="status-dot" aria-hidden="true" />
                      {project.status}
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="card-eyebrow">{project.type}</div>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>

                    <div className="card-footer">
                      <span className="tech-line">{project.tech.join(' · ')}</span>
                      <span className="card-action">
                        {project.videoPath ? 'Watch Demo' : 'Visit Site'}
                        <FiArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </CardTag>
              );
            })}
          </div>

          <div className="footnote">
            <p className="footnote-text">
              Tap any card to open the live site, or watch a quick demo for the mobile apps.
            </p>
          </div>
        </div>
      </section>

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
              transition={{ type: 'spring', damping: 25 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">{selectedVideo.title}</h3>
                  <p className="modal-subtitle">{selectedVideo.type} Demo</p>
                </div>
                <button onClick={closeVideoModal} className="modal-close-btn" aria-label="Close video modal">
                  <FiX size={16} />
                </button>
              </div>

              <div className="video-container">
                <div className="video-player">
                  <video controls autoPlay muted playsInline style={{ maxHeight: '350px' }}>
                    <source src={selectedVideo.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="video-description">
                  <p style={{ color: '#CBD5E1', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>
                    {selectedVideo.description}
                  </p>
                  <div style={{ color: '#94A3B8', fontSize: '11px' }}>
                    {selectedVideo.tech.join(', ')}
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