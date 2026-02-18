import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Ariar Technologies | Web & App Development Company in Bangalore"
        description="Contact Ariar Technologies for website development, React applications, and mobile app development services in Bangalore. Let’s build scalable digital products together."
        canonical="https://www.ariartech.com/contact"
        ogTitle="Contact Ariar Technologies | Bangalore"
        ogDescription="Get in touch for professional web and mobile app development services in Bangalore."
        ogImage="https://www.ariartech.com/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Ariar Technologies",
          "url": "https://www.ariartech.com/contact",
          "about": {
            "@type": "LocalBusiness",
            "name": "Ariar Technologies",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            }
          }
        }}
      />

      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h1>Contact Ariar Technologies</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
          Get in touch with our Bangalore-based team for website development,
          mobile app development, and scalable digital solutions.
        </p>
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
