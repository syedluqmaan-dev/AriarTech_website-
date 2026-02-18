import React from 'react';
import SEO from '../components/SEO';
import Process from '../components/sections/Process';

const ProcessPage = () => {
  return (
    <>
      <SEO
        title="Our Web & Mobile App Development Process | Ariar Technologies Bangalore"
        description="Discover Ariar Technologies' structured web and mobile app development process in Bangalore. From planning and UI/UX design to development, testing, deployment, and scaling."
        canonical="https://www.ariartech.com/process"
        ogTitle="Our Development Process | Ariar Technologies"
        ogDescription="A transparent and scalable development process for web and mobile applications in Bangalore."
        ogImage="https://www.ariartech.com/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Development Process",
          "url": "https://www.ariartech.com/process",
          "description": "A structured web and mobile app development process followed by Ariar Technologies in Bangalore."
        }}
      />

      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h1>Our Web & Mobile App Development Process</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
          We follow a structured and transparent approach to design,
          develop, test, and launch scalable digital products for businesses in Bangalore.
        </p>
      </div>

      <Process />
    </>
  );
};

export default ProcessPage;
