import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiZap, FiStar, FiBriefcase, FiMessageCircle, FiInfo } from 'react-icons/fi';

const Pricing = ({ onOpenModal }) => {
  const plans = [
    {
      title: 'Startup',
      description: 'For MVPs and early-stage businesses launching their digital presence',
      price: 'Starting from',
      priceSub: '₹19,999',
      period: 'for basic websites',
      icon: FiZap,
      features: [
        'Up to 5 pages website',
        'Mobile-first responsive design',
        'Basic contact form integration',
        'Essential SEO setup',
        'WhatsApp/Email integration',
        '7-10 business day timeline',
        '30-day post-launch support'
      ],
      disclaimer: 'Ideal for brochure websites and simple online presence',
      buttonText: 'Explore Startup Plan',
      popular: false,
      color: '#14B8A6'
    },
    {
      title: 'Growth',
      description: 'For established businesses ready to scale with advanced features',
      price: '₹25,000 – ₹75,000',
      period: 'based on requirements',
      icon: FiStar,
      features: [
        'Custom UI/UX design (5-15 pages)',
        'Advanced SEO optimization',
        'Performance & speed optimization',
        'Analytics & tracking integration',
        'Basic CMS integration',
        '14-21 day delivery timeline',
        '90-day comprehensive support',
        'Monthly performance reports'
      ],
      badge: 'Most Popular',
      disclaimer: 'Pricing varies based on design complexity and feature set',
      popular: true,
      buttonText: 'Discuss Growth Plan',
      color: '#14B8A6'
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions for complex business needs and digital transformation',
      price: 'Custom',
      priceSub: 'Project-based',
      period: 'tailored to your needs',
      icon: FiBriefcase,
      features: [
        'Full-stack web/mobile applications',
        'Custom architecture & scalability',
        'Enterprise-grade security',
        'Dedicated project management',
        'Priority 24/7 support',
        'Advanced integrations (APIs, databases)',
        'Team training & documentation',
        '6-12 months extended support'
      ],
      disclaimer: 'Contact for detailed scope analysis and timeline',
      buttonText: 'Schedule Strategy Call',
      popular: false,
      color: '#0A2540'
    }
  ];

  return (
    <>
      <style jsx>{`
        /* Pricing Section - Mobile First */
        .pricing-section {
          padding: 3rem 0;
          background: #FFFFFF;
        }

        @media (min-width: 768px) {
          .pricing-section {
            padding: 4rem 0;
          }
        }

        @media (min-width: 1024px) {
          .pricing-section {
            padding: 5rem 0;
          }
        }

        /* Container */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .section-label {
          display: inline-block;
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
          color: #0A2540;
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: clamp(0.9375rem, 2vw, 1.125rem);
          color: #64748B;
          max-width: 600px;
          margin: 0 auto 1.5rem;
          line-height: 1.6;
        }

        /* Pricing Philosophy */
        .pricing-philosophy {
          background: rgba(20, 184, 166, 0.05);
          border-radius: 0.75rem;
          padding: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid rgba(20, 184, 166, 0.1);
        }

        .philosophy-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .philosophy-text {
          color: #475569;
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
          text-align: center;
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Pricing Card */
        .pricing-card {
          background: #FFFFFF;
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid #E2E8F0;
          transition: all 0.2s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .pricing-card.featured {
          border: 2px solid #14B8A6;
          background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
        }

        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        /* Featured Badge */
        .featured-badge {
          position: absolute;
          top: -0.75rem;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #14B8A6 0%, #0D9488 100%);
          color: #FFFFFF;
          padding: 0.375rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.025em;
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
        }

        /* Card Icon */
        .card-icon {
          width: 56px;
          height: 56px;
          background: #14B8A6;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .card-icon.enterprise {
          background: #0A2540;
        }

        /* Card Content */
        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0A2540;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .card-description {
          color: #64748B;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Price Display */
        .price-display {
          margin-bottom: 1.5rem;
        }

        .price-main {
          font-size: 2rem;
          font-weight: 700;
          color: #0A2540;
          line-height: 1.1;
        }

        .price-sub {
          font-size: 1.5rem;
          display: block;
          margin-top: 0.25rem;
          color: #14B8A6;
        }

        .price-period {
          font-size: 0.875rem;
          color: #64748B;
          display: block;
          margin-top: 0.25rem;
        }

        /* Disclaimer */
        .price-disclaimer {
          margin-top: 0.75rem;
          padding: 0.5rem 0.75rem;
          background: rgba(20, 184, 166, 0.05);
          border-radius: 0.5rem;
          border-left: 2px solid #14B8A6;
        }

        .disclaimer-text {
          color: #475569;
          font-size: 0.75rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Features List */
        .features-list {
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .feature-item {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .feature-text {
          color: #475569;
          font-size: 0.8125rem;
          line-height: 1.5;
        }

        /* CTA Button */
        .pricing-cta {
          width: 100%;
          padding: 0.875rem;
          border-radius: 0.5rem;
          border: none;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .pricing-cta.primary {
          background: #0A2540;
          color: #FFFFFF;
        }

        .pricing-cta.featured {
          background: #14B8A6;
          color: #FFFFFF;
        }

        .pricing-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Investment Philosophy */
        .investment-section {
          margin-top: 3rem;
          background: #0A2540;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          color: #FFFFFF;
        }

        .investment-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .investment-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .investment-text {
          font-size: 0.875rem;
          color: #CBD5E1;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .legal-notice {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          padding: 1rem;
          margin-top: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .legal-text {
          color: #94A3B8;
          font-size: 0.75rem;
          line-height: 1.6;
          font-style: italic;
          margin: 0;
        }

        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          .pricing-card,
          .pricing-cta {
            transition: none !important;
          }
          
          .pricing-card:hover,
          .pricing-cta:hover {
            transform: none !important;
          }
        }

        /* Mobile touch targets */
        @media (max-width: 640px) {
          .pricing-card {
            padding: 1.25rem;
          }
          
          .card-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 1rem;
          }
          
          .price-main {
            font-size: 1.75rem;
          }
          
          .price-sub {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <section id="pricing" className="pricing-section" aria-labelledby="pricing-heading">
        <div className="container">
          {/* Section Header */}
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-label" aria-label="Pricing section">
              Strategic Investment
            </span>
            <h2 id="pricing-heading" className="section-title">
              Flexible Pricing for Every Stage
            </h2>
            <p className="section-subtitle">
              Professional digital solutions tailored to your business needs, timeline, and budget.
            </p>
            
            {/* Pricing Philosophy */}
            <div className="pricing-philosophy">
              <div className="philosophy-header">
                <FiInfo size={16} color="#14B8A6" />
                <span style={{ color: '#0A2540', fontWeight: '600', fontSize: '0.875rem' }}>
                  Our Pricing Approach
                </span>
              </div>
              <p className="philosophy-text">
                We provide transparent pricing ranges based on scope, timeline, and business objectives. 
                Final quotes are customized after understanding your specific requirements.
              </p>
            </div>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`pricing-card ${plan.popular ? 'featured' : ''}`}
              >
                {/* Featured Badge */}
                {plan.badge && (
                  <div className="featured-badge">
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`card-icon ${plan.title === 'Enterprise' ? 'enterprise' : ''}`}>
                  <plan.icon size={24} color="#FFFFFF" />
                </div>

                {/* Plan Title & Description */}
                <h3 className="card-title">
                  {plan.title}
                </h3>
                <p className="card-description">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="price-display">
                  <div className="price-main">
                    {plan.price}
                    {plan.priceSub && (
                      <span className="price-sub">
                        {plan.priceSub}
                      </span>
                    )}
                  </div>
                  <span className="price-period">
                    {plan.period}
                  </span>
                  
                  {/* Plan Disclaimer */}
                  {plan.disclaimer && (
                    <div className="price-disclaimer">
                      <p className="disclaimer-text">
                        {plan.disclaimer}
                      </p>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <FiCheck size={14} color="#14B8A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span className="feature-text">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenModal(plan.title)}
                  className={`pricing-cta ${plan.popular ? 'featured' : 'primary'}`}
                  aria-label={`Explore ${plan.title} pricing`}
                >
                  {plan.buttonText}
                  {plan.title === 'Enterprise' && <FiMessageCircle size={16} />}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Investment Philosophy Section */}
          <motion.div
            className="investment-section"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="investment-icon">
              <FiMessageCircle size={24} color="#14B8A6" />
            </div>
            
            <h3 className="investment-title">
              Understanding Your Investment
            </h3>
            
            <p className="investment-text">
              As a professional agency, we focus on delivering <strong style={{color: '#14B8A6'}}>measurable ROI</strong> rather than competing on price alone. 
              Every project includes strategic planning, technical excellence, and ongoing support.
            </p>

            {/* Legal & Psychological Protection */}
            <div className="legal-notice">
              <p className="legal-text">
                <strong>Important:</strong> All prices are estimates. Final pricing depends on project scope, 
                specific requirements, timeline, and technical complexity. We provide detailed quotes after 
                a discovery call to ensure alignment with your business objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;