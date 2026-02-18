import React from 'react';
import SEO from '../components/SEO';
import Services from '../components/sections/Services';

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Website & Mobile App Development Services in Bangalore | Ariar Technologies"
        description="Ariar Technologies provides professional website development, React development, and mobile app development services in Bangalore for startups and growing businesses."
        canonical="https://www.ariartech.com/services"
        ogTitle="Website & App Development Services in Bangalore"
        ogDescription="Explore our professional web and mobile app development services in Bangalore."
        ogImage="https://www.ariartech.com/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development and Mobile App Development",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Ariar Technologies",
            "url": "https://www.ariartech.com"
          },
          "areaServed": {
            "@type": "City",
            "name": "Bangalore"
          }
        }}
      />

      <div style={{ paddingTop: '80px' }}>
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
