import React from 'react';
import '../../App.css';

const Technology = () => {
  const techItems = [
    { icon: 'fas fa-tachometer-alt', label: 'Performance' },
    { icon: 'fas fa-shield-alt', label: 'Security' },
    { icon: 'fas fa-expand-arrows-alt', label: 'Scalability' },
    { icon: 'fas fa-cogs', label: 'Maintainability' }
  ];

  return (
    <section className="technology" style={{
      background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      padding: '60px 0'
    }}>
      <div className="container">
        <h2 className="section-title">Our Technology Focus</h2>
        <p className="section-subtitle">Building with modern, reliable tools</p>
        
        {/* Tech Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          {techItems.map((item, index) => (
            <div 
              key={index}
              className="tech-item fade-in"
              style={{
                background: 'var(--background)',
                padding: '24px',
                borderRadius: 'var(--radius)',
                textAlign: 'center',
                border: '1px solid var(--borders)',
                transition: 'var(--transition)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--borders)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ marginBottom: '12px', fontSize: '1.5rem', color: 'var(--accent)' }}>
                <i className={item.icon}></i>
              </div>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)'
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        <p style={{
          textAlign: 'center',
          color: 'var(--muted)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          We focus on building solutions that perform well, stay secure, scale with your growth, and remain easy to maintain. Our approach balances modern tools with proven reliability.
        </p>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Technology;